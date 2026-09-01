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
};
