import { site } from '../site.config.js';

const links = [
  { href: '#offer', label: 'The Offer' },
  { href: '#system', label: 'The System' },
  { href: '#about', label: 'About Damon' },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="text-sm font-extrabold uppercase tracking-[0.25em] text-bright">
          Damon Millar
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold sm:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-bright">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={site.bookingUrl}
          className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-ink transition-colors hover:bg-accent-soft"
        >
          {site.ctaLabel}
        </a>
      </nav>
    </header>
  );
}
