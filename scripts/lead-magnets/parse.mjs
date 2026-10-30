/*
 * Turns one Notion post page into a lead magnet entry, the same shape the
 * site has always used (see src/content/leadMagnets.js). Pure: blocks in,
 * entry out. The rules below were derived from Damon's first twelve posts
 * and every one of them can be overridden from the Notion row (Web title,
 * Web summary, Web kicker, Web slug, Web takeaways).
 *
 * Normalised block: { type: 'text' | 'numbered' | 'bulleted' | 'child_page',
 *                     text?, childPageId?, childPageTitle? }
 */

const PREFIX = /^lead\s*mag[ne]+t\s*[-:–—]\s*/i;
const EMOJI =
  /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{2300}-\u{23FF}]/gu;
const NOTION_ID = /([0-9a-f]{32})(?:\?|$|[^0-9a-f])/i;

export const clean = s =>
  String(s ?? '')
    /* LinkedIn "bold" is really mathematical letters (𝗙𝗿𝗲𝗲); fold them back to plain text. */
    .replace(/[\u{1D400}-\u{1D7FF}]/gu, c => c.normalize('NFKC'))
    .replace(EMOJI, '')
    .replace(/\s*[–—]\s+/g, ', ')
    .replace(/\s+[–—]\s*/g, ', ')
    .replace(/[–—]/g, '-')
    .replace(/(\w)'(\w)/g, '$1’$2')
    .replace(/"([^"]+)"/g, '“$1”')
    .replace(/\s+/g, ' ')
    .trim();

export const slugify = title =>
  clean(title)
    .replace(/^the\s+/i, '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const stripPrefix = t => clean(t).replace(PREFIX, '');
const norm = s => clean(s).toLowerCase().replace(/[.!?:]+$/, '').trim();
const hasUrl = s => /https?:\/\//i.test(s);
const idFromUrl = s => {
  const m = String(s).match(/notion\.(?:site|so|com)\/[^\s]*?([0-9a-f]{32})/i);
  return m ? m[1].toLowerCase() : null;
};

const DROP = [
  /giving (it )?away/i,
  /^free access/i,
  /repost/i,
  /^p\.?s\.?\b/i,
  /link in (the )?comments/i,
  /^the linkedin post$/i,
  /^infographic$/i,
  /^campaign details$/i,
  /nested sub-?page/i,
];

const KICKERS = [
  [/course/i, 'Free course'],
  [/playbook/i, 'Free playbook'],
  [/blueprint/i, 'Free blueprint'],
  [/workflow/i, 'Free workflows'],
  [/prompt/i, 'Free prompts'],
  [/routine/i, 'Free routines'],
  [/checklist/i, 'Free checklist'],
  [/set[- ]?up guide/i, 'Free set up guide'],
];
const inferKicker = text => (KICKERS.find(([re]) => re.test(text)) || [null, 'Free guide'])[1];

/* Shorten a list item that carries a long bracketed explanation. */
const trimItem = s => {
  let t = clean(s).replace(/^(?:[→>\-•*]|\d{1,2}[.)])\s*/, '').replace(/\s*[.;]+$/, '');
  if (t.length > 100) {
    const m = t.match(/^(.{12,}?)\s*\((.+)\)\s*$/);
    if (m) t = m[1].trim();
  }
  return t;
};

/*
 * @param {object} post
 * @param {string} post.pageTitle          the Notion page title ("Lead Magnet - X")
 * @param {Array}  post.blocks             normalised blocks, in order
 * @param {object} [post.overrides]        { title, summary, kicker, slug, takeaways[] }
 * @param {string} post.site               e.g. "impartial-money-fa9.notion.site"
 * @param {function} [post.resolveTitle]   async id => page title, for a resource linked by URL
 */
export async function parsePost({ pageTitle, blocks, overrides = {}, site, resolveTitle }) {
  const warnings = [];
  const ov = Object.fromEntries(
    Object.entries(overrides).filter(([, v]) => (Array.isArray(v) ? v.length : clean(v)))
  );

  /* Flatten into lines: text lines, list items grouped by run, the child page. */
  const lines = [];
  let group = 0;
  let lastKind = null;
  for (const b of blocks) {
    if (b.type === 'child_page') {
      lines.push({ kind: 'child', id: b.childPageId, title: b.childPageTitle });
      lastKind = 'child';
      continue;
    }
    if (b.type === 'numbered' || b.type === 'bulleted') {
      if (lastKind !== 'item') group += 1;
      lines.push({ kind: 'item', text: b.text, group });
      lastKind = 'item';
      continue;
    }
    for (const raw of String(b.text ?? '').split(/\r?\n/)) {
      const t = raw.trim();
      if (!t) continue;
      if (/^(?:[→>]|\d{1,2}[.)])\s+/.test(t)) {
        if (lastKind !== 'item') group += 1;
        lines.push({ kind: 'item', text: t, group });
        lastKind = 'item';
      } else {
        lines.push({ kind: 'text', text: t });
        lastKind = 'text';
      }
    }
  }

  /* Resource page: a child page, else a notion URL in the text. */
  const child = lines.find(l => l.kind === 'child');
  let resourceId = child?.id?.replace(/-/g, '') ?? null;
  let resourceTitle = child?.title ?? '';
  if (!resourceId) {
    for (const l of lines) {
      if (l.kind === 'text' && idFromUrl(l.text)) {
        resourceId = idFromUrl(l.text);
        break;
      }
    }
    if (resourceId && resolveTitle) {
      try {
        resourceTitle = (await resolveTitle(resourceId)) || '';
      } catch {
        warnings.push('could not read the resource page title');
      }
    }
  }
  if (!resourceId) warnings.push('no resource page found (no child page and no notion.site link)');

  /* Title. */
  const colon = clean(resourceTitle).indexOf(':');
  const fromResource = colon > 0 ? clean(resourceTitle).slice(0, colon).trim() : clean(resourceTitle);
  const fromPage = stripPrefix(pageTitle);
  const title = clean(ov.title || fromResource || fromPage);
  const titleKeys = new Set([norm(title), norm(fromPage), norm(fromResource)].filter(Boolean));

  /* Lists: the longest run wins, ties go to the later one. */
  const groups = new Map();
  lines.forEach((l, i) => {
    if (l.kind !== 'item') return;
    if (!groups.has(l.group)) groups.set(l.group, { items: [], first: i });
    groups.get(l.group).items.push(trimItem(l.text));
  });
  let best = null;
  for (const g of groups.values()) if (!best || g.items.length >= best.items.length) best = g;

  /*
   * No list at all: a post may describe its parts as "Name:" lines each
   * followed by a one-line description (Clare's FD Board). Three or more
   * such pairs become the list, and those lines leave the intro.
   */
  const consumed = new Set();
  if (!best) {
    const pairs = [];
    let first = -1;
    for (let i = 0; i < lines.length - 1; i++) {
      const a = lines[i];
      const b = lines[i + 1];
      if (
        a.kind === 'text' &&
        b.kind === 'text' &&
        /:$/.test(a.text.trim()) &&
        a.text.trim().length < 60 &&
        !/:$/.test(b.text.trim())
      ) {
        if (first < 0) first = i;
        pairs.push(`${clean(a.text).replace(/:$/, '')}: ${clean(b.text)}`);
        consumed.add(i).add(i + 1);
        i++;
      }
    }
    if (pairs.length >= 3) best = { items: pairs.map(trimItem), first };
    else consumed.clear();
  }
  const takeaways = ov.takeaways ? ov.takeaways.map(trimItem) : best?.items ?? [];
  if (!takeaways.length) warnings.push('no list found for the takeaways');

  /* Text lines, cleaned and filtered. */
  const texts = lines
    .map((l, i) => ({ ...l, i }))
    .filter(l => l.kind === 'text' && !consumed.has(l.i))
    .map(l => ({ ...l, text: clean(l.text) }))
    .filter(l => l.text.length > 2 && !titleKeys.has(norm(l.text)))
    .filter(l => !(norm(l.text).includes(norm(title)) && l.text.length < title.length + 30));

  const isHook = l =>
    /[\u{1F447}\u{2B07}]/u.test(l.raw ?? '') ||
    /\u{1F447}/u.test(lines[l.i].text) ||
    /⬇/u.test(lines[l.i].text);
  const hookLine = texts.find(
    l =>
      isHook(l) &&
      l.text.length >= 50 &&
      !DROP.some(r => r.test(l.text)) &&
      !/just dropped/i.test(l.text)
  );

  const body = texts.filter(
    l =>
      l !== hookLine &&
      !/[:]$/.test(l.text) &&
      !hasUrl(l.text) &&
      !DROP.some(r => r.test(l.text)) &&
      !/just dropped/i.test(l.text)
  );
  const cut = best ? best.first : Infinity;
  const before = body.filter(l => l.i < cut).map(l => l.text);
  const after = body.filter(l => l.i > cut && (!child || l.i < lines.indexOf(child))).map(l => l.text);
  const para1 = (before.length ? before : after.splice(0, 3)).slice(0, 3).join(' ');
  const para2 = after.slice(0, 3).join(' ');
  const intro = [para1, para2].filter(Boolean);
  if (!intro.length) warnings.push('no intro text found');

  /* Summary. */
  const afterColon = colon > 0 ? clean(resourceTitle).slice(colon + 1).trim() : '';
  const summary = clean(ov.summary || hookLine?.text || body[0]?.text || afterColon || title);

  const slug = ov.slug ? slugify(ov.slug) : slugify(title);
  const kicker = clean(ov.kicker || inferKicker(`${title} ${resourceTitle}`));

  return {
    entry: {
      slug,
      title,
      summary,
      kicker,
      intro,
      takeaways,
      author: clean(ov.author || '') || null,
      notionUrl: resourceId ? `https://${site}/ebd/${resourceId}` : null,
      resourceLink: resourceId ? `https://${site}/${resourceId}` : null,
    },
    warnings,
  };
}
