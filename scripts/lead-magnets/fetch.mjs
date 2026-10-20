#!/usr/bin/env node
/*
 * Lead magnets from Notion.
 *
 *   node scripts/lead-magnets/fetch.mjs            refresh src/content/leadMagnets.generated.js
 *                                                  from the Notion database (needs NOTION_TOKEN
 *                                                  and NOTION_DATABASE_ID; without them the
 *                                                  committed file is left alone)
 *   node scripts/lead-magnets/fetch.mjs --setup    add the website columns to the database
 *   node scripts/lead-magnets/fetch.mjs --parity   parse the known posts through the public
 *                                                  endpoint and compare with the current entries
 *   node scripts/lead-magnets/fetch.mjs --public   write the generated file from the known
 *                                                  posts through the public endpoint
 *   node scripts/lead-magnets/fetch.mjs --check    read-only: test the token, the database,
 *                                                  the columns and every ticked row, and say
 *                                                  what a real run would do. Writes nothing.
 *   node scripts/lead-magnets/fetch.mjs --publish-known
 *                                                  tick "Publish to website" (and set Author)
 *                                                  on every database row listed in KNOWN,
 *                                                  so the switch to Notion keeps every page
 *
 * Runs as "prebuild", so every Vercel build pulls the latest ticked rows.
 * A row that cannot be parsed is reported and skipped; the build never
 * fails because of one bad post.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parsePost, slugify } from './parse.mjs';
import { publicSource } from './source-public.mjs';
import { apiSource, PROPS } from './source-api.mjs';
import { PUBLISHED } from './published.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..', '..');
const OUT = resolve(root, 'src/content/leadMagnets.generated.js');

/* Minimal .env loader so local runs match Vercel without another dependency. */
for (const f of ['.env', '.env.local']) {
  const p = resolve(root, f);
  if (!existsSync(p)) continue;
  for (const line of readFileSync(p, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

/* Where Damon's posts were published before they moved into the new workspace. */
const LEGACY_SITE = 'impartial-money-fa9.notion.site';
const SITE = process.env.NOTION_SITE || LEGACY_SITE;
const TOKEN = process.env.NOTION_TOKEN;
const DB = process.env.NOTION_DATABASE_ID;

const DEFAULT_AUTHOR = 'Damon Millar';

/*
 * The posts already live, by Notion post page ID: the slug each one was
 * published under (so links already out there keep working), plus, for
 * posts that live outside Damon's database, the public site they are on and
 * the author. Used by --parity and --public, and as overrides on every build.
 */
export const KNOWN = {
  '3d19112c6a1f808180a8de27b907e079': { slug: 'ai-native-accounting-firm-playbook' },
  '3d19112c6a1f8041831bd42468083c81': { slug: 'claude-practice-team' },
  '3d19112c6a1f8045aca7e7ac0c158fa5': { slug: 'xero-to-claude-set-up-guide' },
  '3de9112c6a1f80429341eea9114f76f0': { slug: 'ai-workflow-for-modern-accounting-firms' },
  '3de9112c6a1f80f097b1c308b090a1e1': { slug: 'claude-agent-team-for-accountants' },
  '3e99112c6a1f802a92c4d5054603a0dd': { slug: 'xero-workflows-for-claude-opus-5-5' },
  '3e99112c6a1f800aab51ce3ef6a40353': { slug: 'opus-5-5-for-uk-accountants' },
  '3e99112c6a1f80d1a9e0d3e966fdee4b': { slug: 'ai-practice-manager' },
  '3f59112c6a1f8092937bf5b9a2799bf6': { slug: 'records-chaser' },
  '3f59112c6a1f80239ed3f7b46755ec01': { slug: 'firm-of-the-future-blueprint' },
  '3f59112c6a1f806d910cfde64fcc5575': { slug: 'partner-review-queue' },
  '3f59112c6a1f80be88faeb21ca187da8': { slug: 'practice-acquisition-team' },

  '3f19112c6a1f80adb787c3b6b36bb256': {
    slug: 'claude-playbook-for-accounting-firms',
    takeaways: [
      'Build full financial models directly in Excel',
      'Build a draft model using only your voice',
      'Generate interactive scenario dashboards',
      'The three checks every model gets: review the formulas, stress-test the assumptions, check the chart ranges',
    ],
  },
  '3f19112c6a1f80da8e26d1a71a644748': { slug: 'claude-cfo-team-for-accounting-firms' },
  '3f19112c6a1f804baa9fc8f3d246c4ef': { slug: 'uk-accounting-firm-guide-to-claude', kicker: 'Free guide' },
  '3ef9112c6a1f803b9809c98a6d5c5da1': {
    slug: 'client-dashboard-kit',
    kicker: 'Free kit',
    takeaways: [
      'Cash Runway',
      'Margin by Month',
      'Who Owes You',
      'The Tax Bill Coming',
      'Break-Even',
      'The Price Rise Test',
      'Customer Concentration',
      'Overhead Creep',
      'Budget Against Actual',
      'The Hiring Decision',
    ],
  },

  /* Clare's, on her own public site until her posts move into Damon's table. */
  '3f192e2e92e9809591b7feaa7c062808': {
    slug: 'ten-practice-methods-as-claude-skills',
    site: 'freebie-for-you.notion.site',
    author: 'Clare Thompson',
    kicker: 'Free skills',
  },
  '3f192e2e92e980b89b0beb9c143d0b98': {
    slug: 'fd-board',
    site: 'freebie-for-you.notion.site',
    author: 'Clare Thompson',
    kicker: 'Free skill',
  },
  'bba7a3c8a8ff407e849d8ed7853d0493': {
    slug: '57-jobs-in-an-accounting-firm-sorted-for-claude',
    site: 'freebie-for-you.notion.site',
    author: 'Clare Thompson',
    kicker: 'Free guide',
  },
  '35e28d24796a48a4b190a12781a6d98a': {
    slug: 'practice-stack',
    site: 'freebie-for-you.notion.site',
    author: 'Clare Thompson',
    kicker: 'Free guide',
  },
  '3f192e2e92e98019a991c89d2c915275': {
    slug: 'morning-brief-on-your-own-practice',
    site: 'freebie-for-you.notion.site',
    author: 'Clare Thompson',
    summary: 'I built a morning brief that reads the practice\u2019s own Xero before anyone\u2019s in.',
  },
  '187eb43fabf6420d820379fe6a60617a': {
    slug: 'vat-review-on-xero',
    site: 'freebie-for-you.notion.site',
    author: 'Clare Thompson',
  },
  '5ce7b78b822147d9b84e294e4a0cba85': {
    slug: 'xero-cleanup-score',
    site: 'freebie-for-you.notion.site',
    author: 'Clare Thompson',
  },
  'f5c4c79c1b9143dba5c9efedfdfab3aa': {
    slug: 'client-fd-team',
    site: 'freebie-for-you.notion.site',
    author: 'Clare Thompson',
  },
  '4e44ead2f9ca4e8fa558f8fb046df905': {
    slug: 'self-assessment-agent-team',
    site: 'freebie-for-you.notion.site',
    author: 'Clare Thompson',
  },
};

/*
 * Posts moved into a new workspace get new IDs but keep their titles. This
 * maps a database row to the KNOWN entry it stands for, by ID first, then by
 * the title through the committed entries, so slugs and overrides follow the
 * post wherever it lives.
 */
const postKey = title => slugify(String(title ?? '').replace(/^lead\s*mag[ne]+t\s*[-:\u2013\u2014]\s*/i, ''));
const knownIdForSlug = slug => Object.entries(KNOWN).find(([, k]) => k.slug === slug)?.[0] ?? null;
async function aliasOf(row) {
  if (KNOWN[row.id]) return row.id;
  const key = postKey(row.pageTitle);
  if (!key) return null;
  const c = (await committed()).find(e => e.slug === key || slugify(e.title) === key);
  return c ? knownIdForSlug(c.slug) : knownIdForSlug(key);
}

/* Known posts the database does not cover, read from the public site they live on. */
const extraPosts = rows => {
  const covered = new Set(rows.flatMap(r => [r.id, r.alias].filter(Boolean)));
  return Object.entries(KNOWN)
    .filter(([id]) => !covered.has(id))
    .map(([id, k]) => ({ id, site: k.site || LEGACY_SITE }));
};

const log = (...a) => console.log('[lead-magnets]', ...a);

/* Published pages answer on the public site; unpublished ones come back empty. */
async function embeds(entry) {
  if (!entry.notionUrl) return false;
  try {
    const { host, pathname } = new URL(entry.notionUrl);
    const id = pathname.split('/ebd/')[1];
    return Boolean(await publicSource(host).resolveTitle(id));
  } catch {
    return false;
  }
}

function write(entries) {
  const body = JSON.stringify(entries, null, 2);
  writeFileSync(
    OUT,
    `/* Generated from Notion by scripts/lead-magnets/fetch.mjs. Do not edit: tick\n   "Publish to website" on a post in Notion and rebuild. */\nexport const generatedAt = ${JSON.stringify(new Date().toISOString())};\nexport default ${body};\n`
  );
  log(`wrote ${entries.length} entries to src/content/leadMagnets.generated.js`);
}

/* The entries in the committed file, the fallback for anything that fails. */
let committedCache;
async function committed() {
  if (!committedCache) {
    committedCache = existsSync(OUT) ? (await import(pathToFileURL(OUT).href)).default : [];
  }
  return committedCache;
}

/* Slugs that parsed with a warning in the last build(), for --check. */
const WARNED = new Set();

async function build(source, posts) {
  const entries = [];
  WARNED.clear();
  for (const post of posts) {
    try {
      /* A post on another public site is read from there, whatever the main source is. */
      const src = post.site ? publicSource(post.site) : source;
      const kid = post.alias ?? post.id;
      const known = KNOWN[kid] ?? {};
      const page = await src.page(post.id);
      const { entry, warnings } = await parsePost({
        ...page,
        overrides: {
          slug: known.slug,
          kicker: known.kicker,
          author: known.author,
          summary: known.summary,
          takeaways: known.takeaways,
          ...(PUBLISHED[kid] ?? {}),
          ...Object.fromEntries(
            Object.entries(post.overrides ?? {}).filter(([, v]) => (Array.isArray(v) ? v.length : String(v ?? '').trim()))
          ),
        },
        site: post.site || SITE,
        resolveTitle: id => src.resolveTitle(id),
      });
      entry.author = entry.author || DEFAULT_AUTHOR;
      entry.notionPostId = post.id;
      if (!entry.notionUrl) {
        log(`SKIP ${post.id} (${entry.title}): ${warnings.join('; ')}`);
        continue;
      }
      const ok = await embeds(entry);
      if (!ok) {
        /* Never swap a working embed for a broken one: a moved post whose new resource page
           is not published yet keeps the committed copy until it is. */
        const last = (await committed()).find(c => c.slug === entry.slug && c.notionUrl !== entry.notionUrl);
        if (last && (await embeds(last))) {
          log(`${entry.slug}  resource page not published on ${new URL(entry.notionUrl).host}, kept the committed copy`);
          if (!entries.some(e => e.slug === last.slug)) entries.push({ ...last, notionPostId: post.id });
          continue;
        }
        warnings.push('resource page does not embed, is it published?');
      }
      log(`${entry.slug}  "${entry.title}"  ${entry.takeaways.length} takeaways${warnings.length ? '  WARN ' + warnings.join('; ') : ''}`);
      if (warnings.length) WARNED.add(entry.slug);
      if (entries.some(e => e.slug === entry.slug)) {
        log(`SKIP ${post.id}: slug ${entry.slug} already used`);
        continue;
      }
      entries.push(entry);
    } catch (e) {
      /* Notion did not answer properly: keep the last good copy of that page rather than drop it. */
      const last = (await committed()).find(c => c.notionPostId === post.id);
      if (last && !entries.some(e => e.slug === last.slug)) {
        log(`${last.slug}  kept the committed copy, Notion said: ${e.message}`);
        entries.push(last);
      } else {
        log(`SKIP ${post.id}: ${e.message}`);
      }
    }
  }
  return entries;
}

async function parity() {
  const current = (await import(pathToFileURL(resolve(root, 'src/content/leadMagnets.js')).href)).leadMagnets;
  const source = publicSource(SITE);
  const fresh = await build(source, knownPosts());
  let diffs = 0;
  for (const e of fresh) {
    const m = current.find(c => c.slug === e.slug);
    if (!m) {
      console.log(`\n!! ${e.slug}: not in current entries`);
      diffs++;
      continue;
    }
    const rows = [];
    if (m.title !== e.title) rows.push(['title', m.title, e.title]);
    if (m.summary !== e.summary) rows.push(['summary', m.summary, e.summary]);
    if (m.kicker !== e.kicker) rows.push(['kicker', m.kicker, e.kicker]);
    if (m.takeaways.length !== e.takeaways.length) rows.push(['takeaways', m.takeaways.length, e.takeaways.length]);
    if (m.notionUrl !== e.notionUrl) rows.push(['notionUrl', m.notionUrl, e.notionUrl]);
    if ((m.author || DEFAULT_AUTHOR) !== e.author) rows.push(['author', m.author, e.author]);
    if (m.intro.join(' ') !== e.intro.join(' ')) rows.push(['intro', m.intro.join(' ').slice(0, 120) + '...', e.intro.join(' ').slice(0, 120) + '...']);
    if (rows.length) {
      diffs++;
      console.log(`\n-- ${e.slug}`);
      for (const [k, a, b] of rows) console.log(`   ${k}\n     manual: ${a}\n     parsed: ${b}`);
    }
  }
  console.log(`\n${fresh.length} parsed, ${diffs} with differences`);
}

const knownPosts = () => Object.entries(KNOWN).map(([id, k]) => ({ id, site: k.site || LEGACY_SITE }));

/*
 * The normal run: ticked rows plus EXTRA, parsed and written. With `dry`
 * it does everything but the write and returns what it would have done.
 */
async function refresh(source, { dry = false } = {}) {
  const rows = await source.rows(DB);
  for (const r of rows) r.alias = await aliasOf(r);
  const extra = extraPosts(rows);
  log(`${rows.length} rows ticked "Publish to website"${extra.length ? `, plus ${extra.length} known posts not in this database, read from their public sites` : ''}`);
  /* Database rows first, so a post that moves into the table wins over its public-site copy. */
  const entries = await build(source, [...rows, ...extra]);
  /* Keep the order the site has always had: known posts in KNOWN order, new ones after, oldest first. */
  const order = Object.keys(KNOWN);
  const rank = e => { const i = order.indexOf(knownIdForSlug(e.slug)); return i < 0 ? order.length : i; };
  entries.sort((a, b) => rank(a) - rank(b) || entries.indexOf(a) - entries.indexOf(b));
  if (!entries.length) {
    log('nothing parsed, keeping the committed file');
    return { ok: false, reason: 'nothing parsed', entries };
  }
  /* Guard against an accidental mass untick: never halve the site in one build. */
  const have = (await committed()).length;
  if (have >= 4 && entries.length < have / 2 && !process.env.LEAD_MAGNETS_ALLOW_SHRINK) {
    log(`only ${entries.length} rows ticked but ${have} pages are committed; keeping the committed file. Set LEAD_MAGNETS_ALLOW_SHRINK=1 to allow it.`);
    return { ok: false, reason: `shrink guard: ${entries.length} pages would replace ${have}`, entries };
  }
  if (!dry) write(entries);
  return { ok: true, entries };
}

/* Read-only health check. Exit code 1 when a real run would not publish. */
async function check(source) {
  const fail = reason => {
    console.log(`\nNOT READY: ${reason}`);
    process.exitCode = 1;
  };
  let me;
  try {
    me = await source.me();
  } catch (e) {
    return fail(`the token does not work (${e.message})`);
  }
  log(`token ok: integration "${me.name}" in workspace "${me.workspace}"`);

  let db;
  try {
    db = await source.database(DB);
  } catch (e) {
    return fail(`cannot open the database (${e.message}). Is it shared with the integration? Database page, three dots, Connections.`);
  }
  log(`database ok: "${db.title}" ${db.url}`);
  const missing = Object.values(PROPS).filter(name => !db.columns.includes(name));
  if (missing.length) return fail(`missing columns ${missing.join(', ')}. Run: node scripts/lead-magnets/fetch.mjs --setup`);
  log(`columns ok: ${Object.values(PROPS).join(', ')}`);
  log(`public site for embeds: ${SITE}`);

  const r = await refresh(source, { dry: true });
  const warned = [...WARNED];
  console.log('');
  log(`a real run would ${r.ok ? `write ${r.entries.length} pages` : `change nothing (${r.reason})`}`);
  if (!r.ok) return fail(r.reason);
  if (warned.length) log(`${warned.length} page(s) carry warnings above, check them on the site: ${warned.join(', ')}`);
  console.log('\nREADY');
}

/* Tick every row in the database that is already a page on the site. */
async function publishKnown(source) {
  const rows = await source.ids(DB);
  const ticked = [];
  const already = [];
  const covered = new Set();
  for (const row of rows) {
    const kid = await aliasOf(row);
    const known = kid && KNOWN[kid];
    if (!known) continue;
    covered.add(kid);
    const author = known.author && known.author !== row.author ? known.author : undefined;
    if (row.published && !author) {
      already.push(known.slug);
      continue;
    }
    await source.update(row.id, { published: true, author });
    ticked.push(known.slug);
    log(`ticked ${known.slug}${author ? ` (Author: ${author})` : ''}  "${row.pageTitle}"`);
  }
  const absent = Object.entries(KNOWN).filter(([id]) => !covered.has(id)).map(([, k]) => k.slug);
  log(`${ticked.length} ticked, ${already.length} already ticked, ${absent.length} not in this database`);
  if (absent.length) log(`not in this database: ${absent.join(', ')}`);
}

async function main() {
  const flag = process.argv[2];
  if (flag === '--parity') return parity();
  if (flag === '--public') return write(await build(publicSource(SITE), knownPosts()));

  if (!TOKEN || !DB) {
    log('NOTION_TOKEN or NOTION_DATABASE_ID not set, keeping the committed leadMagnets.generated.js');
    if (flag === '--check' || flag === '--setup' || flag === '--publish-known') process.exitCode = 1;
    return;
  }
  const source = apiSource(TOKEN);
  if (flag === '--setup') {
    const r = await source.setup(DB);
    log(`database "${r.title}" ${r.url}`);
    log(r.added.length ? `added columns: ${r.added.join(', ')}` : 'all columns already present');
    return;
  }
  if (flag === '--check') return check(source);
  if (flag === '--publish-known') return publishKnown(source);
  await refresh(source);
}

main().catch(e => {
  /* Never fail the build: the committed file stays in place. */
  log(`ERROR ${e.message}; keeping the committed leadMagnets.generated.js`);
  if (process.argv[2]) process.exitCode = 1;
});
