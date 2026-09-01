import { site, withBase } from '../site.config.js';

/*
 * Site footer. Paper ground against the ink final CTA above it, so the two
 * bands stay distinct. Hairlines and small caps, no cards. The booking page
 * keeps its own minimal footer: no exits on the conversion page.
 */
const explore = [
  { href: withBase('offer'), label: 'The Offer' },
  { href: withBase('about'), label: 'About Damon' },
  { href: withBase('resources'), label: 'Resources' },
  { href: site.bookingUrl, label: site.ctaLabel },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <a
              href={withBase('')}
              className="font-sans text-sm font-extrabold uppercase tracking-[0.3em] text-ink"
            >
              Damon Millar
            </a>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
              A practical AI roadmap for accounting firms, from the man who built his own firm
              to 65% AI coverage.
            </p>
            {site.email && (
              <p className="mt-6 font-sans text-[15px]">
                <span className="text-muted">Contact: </span>
                <a
                  href={`mailto:${site.email}`}
                  className="relative inline-block text-ink transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-line after:transition-transform after:duration-300 hover:after:bg-ink motion-reduce:after:transition-none"
                >
                  {site.email}
                </a>
              </p>
            )}
          </div>

          <nav className="col-span-6 sm:col-span-4 lg:col-span-3">
            <h2 className="border-t-2 border-ink pt-3 font-sans text-xs font-bold uppercase tracking-[0.18em] text-ink">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {explore.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="relative inline-block font-sans text-[15px] text-body transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 motion-reduce:after:transition-none"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 sm:col-span-4 lg:col-span-4">
            <h2 className="border-t-2 border-ink pt-3 font-sans text-xs font-bold uppercase tracking-[0.18em] text-ink">
              The system
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {site.systemName}. Ten foundational AI departments, built in the right order, for
              maximum impact in the shortest time.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 font-sans text-xs text-muted sm:flex-row sm:items-center">
          <p>© {year} Damon Millar. All rights reserved.</p>
          <p>
            Site by <span className="font-semibold text-ink">Nexus Edge</span> (Lucrum AI Ltd)
          </p>
        </div>
      </div>
    </footer>
  );
}
