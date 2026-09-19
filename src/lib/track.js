import { track } from '@vercel/analytics';

/*
 * Funnel events for the lead form, so drop-off is visible step by step:
 *
 *   start    first interaction with any field
 *   step1    name and email accepted (steps: Continue pressed;
 *            single: first focus on a qualifying field with step 1 valid)
 *   submit   the CRM accepted the lead
 *   error    the CRM call failed
 *
 * Every event carries the variant and the lead magnet, so the two forms
 * can be compared in Vercel Analytics (Events, filter by property). The
 * same event is pushed to window.dataLayer for GTM or GA4 if either is
 * ever added.
 */
export function trackForm(step, props = {}) {
  const data = { step, ...props };
  try {
    track('lead_form', data);
  } catch {
    /* analytics blocked or not loaded: never break the form */
  }
  try {
    window.dataLayer?.push({ event: 'lead_form', ...data });
  } catch {
    /* no dataLayer */
  }
}
