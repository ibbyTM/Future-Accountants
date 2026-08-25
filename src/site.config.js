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

  // TODO: real Calendly / GHL embed URL. When set, /book renders the
  // calendar iframe in place of the flagged placeholder.
  calendarEmbedUrl: null,

  email: null, // TODO confirm contact email for footer, if wanted
};
