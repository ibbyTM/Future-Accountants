/*
 * Single source of truth for values that appear across pages, plus the
 * items still awaiting sign-off from Damon / the Nexus Edge team.
 */
// Prefixes a site-relative path with the build's base URL so links work
// both at the domain root and under a subpath (GitHub Pages).
export const withBase = p => import.meta.env.BASE_URL + String(p).replace(/^\//, '');

export const site = {
  offerName: 'Firm of the Future',
  systemName: 'The AI Practice Operating System™',

  // All CTAs route to the dedicated booking page (the scoping call).
  bookingUrl: withBase('book'),
  ctaLabel: 'Book a Call',

  // Calendly event URL for the scoping call. Rendered by CalendlyEmbed on
  // /book; leaving it null falls back to a flagged placeholder.
  calendarEmbedUrl:
    'https://calendly.com/damon-millar-switchaccountants/strategy-meeting-for-accountants-clone',

  // Set this and the footer shows a Contact line linking to it. Left null
  // until Damon confirms the address, so nothing is invented on his behalf.
  email: null,

  /*
   * Lead capture on the resource pages (src/components/LeadForm.jsx).
   *   endpoint  where the form posts. '/api/lead' is the Vercel function in
   *             api/lead.js, which forwards to GoHighLevel using the
   *             GHL_WEBHOOK_URL environment variable. On a host without
   *             functions (Bluehost staging) set this to the GoHighLevel
   *             inbound webhook URL itself and the form posts straight to it.
   *   variant   the form people get when the URL has no ?form= parameter:
   *             'steps' (two steps) or 'single' (one screen). For the A/B
   *             test share links with ?form=steps and ?form=single.
   */
  leadForm: {
    endpoint: '/api/lead',
    variant: 'steps',
  },
};
