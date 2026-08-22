import { site } from '../site.config.js';

const links = [
  { href: '/offer', label: 'The Offer' },
  { href: '/about', label: 'About Damon' },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ground/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 font-sans">
        <a href="/" className="text-sm font-extrabold uppercase tracking-[0.3em] text-ink">
          Damon Millar
        </a>
        <div className="hidden items-center gap-9 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted sm:flex">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 motion-reduce:after:transition-none"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={site.bookingUrl}
          className="bg-ink px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-ground transition-colors hover:bg-accent"
        >
          {site.ctaLabel}
        </a>
      </nav>
    </header>
  );
}
