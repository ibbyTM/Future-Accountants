/*
 * Single source of truth for everything still awaiting sign-off from
 * Damon / the Nexus Edge team. Swap values here — no copy hunting.
 */
export const site = {
  offerName: 'Future Accountant', // TODO confirm final offer name with Damon

  // All CTAs route to the dedicated booking page.
  bookingUrl: '/book',
  ctaLabel: 'Book a Call', // TODO confirm exact CTA (book / apply / waitlist)

  // TODO: real Calendly / GHL embed URL — when set, /book renders the
  // calendar iframe in place of the flagged placeholder.
  calendarEmbedUrl: null,

  email: null, // TODO confirm contact email for footer, if wanted
};
