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
 *
 * Runs as "prebuild", so every Vercel build pulls the latest ticked rows.
 * A row that cannot be parsed is reported and skipped; the build never
 * fails because of one bad post.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parsePost } from './parse.mjs';
import { publicSource } from './source-public.mjs';
import { apiSource } from './source-api.mjs';
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

const SITE = process.env.NOTION_SITE || 'impartial-money-fa9.notion.site';
const TOKEN = process.env.NOTION_TOKEN;
const DB = process.env.NOTION_DATABASE_ID;

/*
 * The posts already live, by Notion post page ID, with the slug each one was
 * published under. Used by --parity and --public, and as slug overrides so
 * links that are already out there keep working.
 */
export const KNOWN = {
  '3d19112c6a1f808180a8de27b907e079': 'ai-native-accounting-firm-playbook',
  '3d19112c6a1f8041831bd42468083c81': 'claude-practice-team',
  '3d19112c6a1f8045aca7e7ac0c158fa5': 'xero-to-claude-set-up-guide',
  '3de9112c6a1f80429341eea9114f76f0': 'ai-workflow-for-modern-accounting-firms',
  '3de9112c6a1f80f097b1c308b090a1e1': 'claude-agent-team-for-accountants',
  '3e99112c6a1f802a92c4d5054603a0dd': 'xero-workflows-for-claude-opus-5-5',
  '3e99112c6a1f800aab51ce3ef6a40353': 'opus-5-5-for-uk-accountants',
  '3e99112c6a1f80d1a9e0d3e966fdee4b': 'ai-practice-manager',
  '3f59112c6a1f8092937bf5b9a2799bf6': 'records-chaser',
  '3f59112c6a1f80239ed3f7b46755ec01': 'firm-of-the-future-blueprint',
  '3f59112c6a1f806d910cfde64fcc5575': 'partner-review-queue',
  '3f59112c6a1f80be88faeb21ca187da8': 'practice-acquisition-team',
};

const log = (...a) => console.log('[lead-magnets]', ...a);

async function embeds(entry) {
  if (!entry.notionUrl) return false;
  try {
    const r = await fetch(entry.notionUrl, { method: 'HEAD' });
    return r.ok;
  } catch {
    return false;
  }
}

function write(entries) {
  const body = JSON.stringify(entries, null, 2);
  writeFileSync(
    OUT,
    `/* Generated from Notion by scripts/lead-magnets/fetch.mjs. Do not edit: tick\n   "Publish to website" on a post in Notion and rebuild. */\nexport default ${body};\n`
  );
  log(`wrote ${entries.length} entries to src/content/leadMagnets.generated.js`);
}

async function build(source, posts) {
  const entries = [];
  for (const post of posts) {
    try {
      const page = await source.page(post.id);
      const { entry, warnings } = await parsePost({
        ...page,
        overrides: {
          slug: KNOWN[post.id],
          ...(PUBLISHED[post.id] ?? {}),
          ...Object.fromEntries(
            Object.entries(post.overrides ?? {}).filter(([, v]) => (Array.isArray(v) ? v.length : String(v ?? '').trim()))
          ),
        },
        site: SITE,
        resolveTitle: id => source.resolveTitle(id),
      });
      entry.notionPostId = post.id;
      if (!entry.notionUrl) {
        log(`SKIP ${post.id} (${entry.title}): ${warnings.join('; ')}`);
        continue;
      }
      const ok = await embeds(entry);
      if (!ok) warnings.push('resource page does not embed, is it published?');
      log(`${entry.slug}  "${entry.title}"  ${entry.takeaways.length} takeaways${warnings.length ? '  WARN ' + warnings.join('; ') : ''}`);
      if (entries.some(e => e.slug === entry.slug)) {
        log(`SKIP ${post.id}: slug ${entry.slug} already used`);
        continue;
      }
      entries.push(entry);
    } catch (e) {
      log(`SKIP ${post.id}: ${e.message}`);
    }
  }
  return entries;
}

async function parity() {
  const current = (await import(pathToFileURL(resolve(root, 'src/content/leadMagnets.js')).href)).leadMagnets;
  const source = publicSource(SITE);
  const posts = Object.keys(KNOWN).map(id => ({ id }));
  const fresh = await build(source, posts);
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
    if (m.intro.join(' ') !== e.intro.join(' ')) rows.push(['intro', m.intro.join(' ').slice(0, 120) + '...', e.intro.join(' ').slice(0, 120) + '...']);
    if (rows.length) {
      diffs++;
      console.log(`\n-- ${e.slug}`);
      for (const [k, a, b] of rows) console.log(`   ${k}\n     manual: ${a}\n     parsed: ${b}`);
    }
  }
  console.log(`\n${fresh.length} parsed, ${diffs} with differences`);
}

async function main() {
  const flag = process.argv[2];
  if (flag === '--parity') return parity();
  if (flag === '--public') return write(await build(publicSource(SITE), Object.keys(KNOWN).map(id => ({ id }))));

  if (!TOKEN || !DB) {
    log('NOTION_TOKEN or NOTION_DATABASE_ID not set, keeping the committed leadMagnets.generated.js');
    return;
  }
  const source = apiSource(TOKEN);
  if (flag === '--setup') {
    const r = await source.setup(DB);
    log(`database "${r.title}" ${r.url}`);
    log(r.added.length ? `added columns: ${r.added.join(', ')}` : 'all columns already present');
    return;
  }
  const rows = await source.rows(DB);
  log(`${rows.length} rows ticked "Publish to website"`);
  const entries = await build(source, rows);
  if (!entries.length) {
    log('nothing parsed, keeping the committed file');
    return;
  }
  /* Guard against an accidental mass untick: never halve the site in one build. */
  const committed = existsSync(OUT) ? (await import(pathToFileURL(OUT).href)).default.length : 0;
  if (committed >= 4 && entries.length < committed / 2 && !process.env.LEAD_MAGNETS_ALLOW_SHRINK) {
    log(`only ${entries.length} rows ticked but ${committed} pages are committed; keeping the committed file. Set LEAD_MAGNETS_ALLOW_SHRINK=1 to allow it.`);
    return;
  }
  write(entries);
}

main().catch(e => {
  /* Never fail the build: the committed file stays in place. */
  log(`ERROR ${e.message}; keeping the committed leadMagnets.generated.js`);
});
