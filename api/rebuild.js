/*
 * Hourly rebuild. Vercel's cron calls this with "Authorization: Bearer
 * <CRON_SECRET>"; it posts to the deploy hook so the site re-reads the
 * Notion database even if nobody pressed Publish. A manual call works
 * too, with ?key=<CRON_SECRET>. Anything else gets 401.
 */
export default async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers?.authorization || '';
  const key = new URL(req.url, 'http://localhost').searchParams.get('key');
  if (!secret || (auth !== `Bearer ${secret}` && key !== secret)) {
    return res.status(401).json({ ok: false });
  }
  const hook = process.env.DEPLOY_HOOK_URL;
  if (!hook) return res.status(500).json({ ok: false, error: 'DEPLOY_HOOK_URL is not set.' });
  try {
    const r = await fetch(hook, { method: 'POST' });
    return res.status(r.ok ? 200 : 502).json({ ok: r.ok });
  } catch (e) {
    return res.status(502).json({ ok: false, error: e.message });
  }
}
