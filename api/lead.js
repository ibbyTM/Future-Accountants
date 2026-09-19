/*
 * Lead capture endpoint. The browser posts the form here; this forwards a
 * clean payload to the GoHighLevel inbound webhook that starts Damon's
 * automation. The webhook URL lives in the GHL_WEBHOOK_URL environment
 * variable (Vercel: Project, Settings, Environment Variables), so it is
 * never in the page source.
 *
 * Runs as a Vercel serverless function at /api/lead. In local dev and
 * preview, vite.config.js serves the same `prepare` logic at the same path.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COUNTRIES = ['United Kingdom', 'United States', 'Canada', 'Australia', 'New Zealand', 'Other'];
const ROLES = ['Accountant', 'Business Owner', 'Other'];

const str = v => (typeof v === 'string' ? v.trim() : '');

/*
 * Validates the raw body and shapes what GoHighLevel receives. Returns
 * { ok, errors, payload, spam }. `spam` is true when the honeypot field
 * was filled: the caller answers 200 and drops it, so bots learn nothing.
 */
export function prepare(body = {}) {
  const errors = {};
  const full_name = str(body.full_name);
  const email = str(body.email).toLowerCase();
  const phone = str(body.phone);
  const country = str(body.country);
  const qualifying_answer = str(body.qualifying_answer);
  const lead_magnet = str(body.lead_magnet);
  const resource_link = str(body.resource_link);

  if (!full_name) errors.full_name = 'Please add your name.';
  if (!EMAIL.test(email)) errors.email = 'Please check the email address.';
  if (!COUNTRIES.includes(country)) errors.country = 'Please choose a country.';
  if (!ROLES.includes(qualifying_answer)) errors.qualifying_answer = 'Please choose one.';
  if (!lead_magnet) errors.lead_magnet = 'Missing lead magnet.';

  const [first_name = '', ...rest] = full_name.split(/\s+/);
  const payload = {
    full_name,
    first_name,
    last_name: rest.join(' '),
    email,
    phone,
    country,
    qualifying_answer,
    lead_magnet,
    resource_link,
    form_variant: str(body.form_variant) || 'steps',
    page_url: str(body.page_url),
    source: 'website',
    submitted_at: new Date().toISOString(),
  };

  return { ok: Object.keys(errors).length === 0, errors, payload, spam: Boolean(str(body.website)) };
}

/* Posts the shaped payload to GoHighLevel. Throws on a non-2xx answer. */
export async function forward(url, payload) {
  const r = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!r.ok) throw new Error(`GoHighLevel answered ${r.status}`);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'POST only' });
  }

  const { ok, errors, payload, spam } = prepare(req.body);
  if (spam) return res.status(200).json({ ok: true });
  if (!ok) return res.status(422).json({ ok: false, errors });

  const url = process.env.GHL_WEBHOOK_URL;
  if (!url) {
    console.error('[lead] GHL_WEBHOOK_URL is not set');
    return res.status(500).json({ ok: false, error: 'Lead endpoint is not configured.' });
  }

  try {
    await forward(url, payload);
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('[lead] forward failed:', e.message);
    return res.status(502).json({ ok: false, error: 'Could not reach the CRM.' });
  }
}
