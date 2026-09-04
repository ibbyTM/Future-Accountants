import { useEffect, useState } from 'react';
import { site, withBase } from '../site.config.js';

const links = [
  { href: withBase('offer'), label: 'The Offer' },
  { href: withBase('about'), label: 'About Damon' },
  { href: withBase('resources'), label: 'Resources' },
];

/*
 * Fixed header. The links sit inline from sm up; below that a hairline
 * toggle opens a full width panel under the bar, so the other pages stay
 * reachable on a phone. Closes on link click, on Escape, and once the
 * viewport is wide enough to show the inline links again.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 1024px)');
    const onWide = e => {
      if (e.matches) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onWide);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onWide);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ground/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 font-sans">
        <a
          href={withBase('')}
          className="flex h-16 shrink-0 items-center gap-3 whitespace-nowrap text-[13px] font-extrabold uppercase tracking-[0.18em] text-ink sm:text-sm sm:tracking-[0.3em]"
        >
          <img
            src={withBase('mark.svg')}
            alt=""
            width="28"
            height="28"
            className="size-6 shrink-0 sm:size-7"
          />
          Damon Millar
        </a>
        <div className="hidden items-center gap-9 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted lg:flex">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="relative flex h-16 items-center transition-colors after:absolute after:bottom-[1.4rem] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 motion-reduce:after:transition-none"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={site.bookingUrl}
            className="whitespace-nowrap bg-ink px-3.5 py-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-ground transition-colors hover:bg-accent sm:px-5 sm:text-[13px] sm:tracking-[0.14em]"
          >
            {site.ctaLabel}
          </a>
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-2 flex size-11 items-center justify-center lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-ink transition-transform duration-300 motion-reduce:transition-none ${
                  open ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[5px] h-px bg-ink transition-opacity duration-200 motion-reduce:transition-none ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[10px] h-px bg-ink transition-transform duration-300 motion-reduce:transition-none ${
                  open ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-ground lg:hidden"
      >
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="block border-b border-line px-5 py-5 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent"
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
