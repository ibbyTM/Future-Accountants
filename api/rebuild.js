/*
 * Hourly rebuild. Vercel's cron calls this with "Authorization: Bearer
 * <CRON_SECRET>"; a manual call works too, with ?key=<CRON_SECRET>.
 * Anything else gets 401.
 *
 * It asks Notion for the rows of the posts database and compares them with
 * the pages this deployment was built from. Only when something changed
 * (a row ticked or unticked, or a ticked post edited since the build) does
 * it post to the deploy hook, so the deploy list is not filled with no-op
 * builds. ?force=1 skips the comparison.
 */
import { apiSource } from '../scripts/lead-magnets/source-api.mjs';
import entries, { generatedAt } from '../src/content/leadMagnets.generated.js';

/*
 * Pure decision: should the site be rebuilt?
 * rows: [{ id, published, lastEdited }], deployed: the generated entries.
 */
export function needsRebuild(rows, deployed, builtAt) {
  const deployedIds = new Set(deployed.map(e => e.notionPostId).filter(Boolean));
  const ticked = rows.filter(r => r.published);
  const tickedIds = new Set(ticked.map(r => r.id));
  const built = builtAt ? Date.parse(builtAt) : 0;

  for (const r of ticked) {
    if (!deployedIds.has(r.id)) return `new page ticked: ${r.id}`;
    if (r.lastEdited && Date.parse(r.lastEdited) > built) return `post edited since the build: ${r.id}`;
  }
  /* A deployed page whose row sits in this database but is no longer ticked. */
  const inDb = new Set(rows.map(r => r.id));
  for (const id of deployedIds) {
    if (inDb.has(id) && !tickedIds.has(id)) return `page unticked: ${id}`;
  }
  /* A page waiting for its Notion resource to be published: rebuild each hour until it is. */
  const waiting = deployed.find(e => e.embedOk === false);
  if (waiting) return `waiting for a resource page to be published: ${waiting.slug}`;
  return null;
}

export default async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers?.authorization || '';
  const url = new URL(req.url, 'http://localhost');
  const key = url.searchParams.get('key');
  if (!secret || (auth !== `Bearer ${secret}` && key !== secret)) {
    return res.status(401).json({ ok: false });
  }
  const hook = process.env.DEPLOY_HOOK_URL;
  if (!hook) return res.status(500).json({ ok: false, error: 'DEPLOY_HOOK_URL is not set.' });

  const token = process.env.NOTION_TOKEN;
  const db = process.env.NOTION_DATABASE_ID;
  if (!token || !db) {
    return res.status(200).json({ ok: true, deployed: false, reason: 'Notion not configured (NOTION_TOKEN, NOTION_DATABASE_ID)' });
  }

  let reason = url.searchParams.get('force') ? 'forced' : null;
  if (!reason) {
    try {
      const rows = await apiSource(token).ids(db);
      reason = needsRebuild(rows, entries, generatedAt);
    } catch (e) {
      return res.status(502).json({ ok: false, error: `Notion: ${e.message}` });
    }
  }
  if (!reason) return res.status(200).json({ ok: true, deployed: false, reason: 'no change' });

  try {
    const r = await fetch(hook, { method: 'POST' });
    return res.status(r.ok ? 200 : 502).json({ ok: r.ok, deployed: r.ok, reason });
  } catch (e) {
    return res.status(502).json({ ok: false, error: e.message });
  }
}
