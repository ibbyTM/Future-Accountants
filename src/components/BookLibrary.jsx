import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { withBase } from '../site.config.js';

/*
 * The library: the eighteen books that are not featured, in the five themes
 * Damon set out, with a filter row above. "All" shows every section under
 * its heading; a theme shows that section alone. Summary and bonus come
 * from src/content/books.js; a buy link appears only when buyUrl is set.
 */
function BookCell({ b }) {
  return (
    <div>
      <img
        src={withBase(b.cover)}
        alt={`${b.title}, book cover`}
        loading="lazy"
        className="w-full shadow-[0_18px_36px_rgba(26,26,24,0.16)] ring-1 ring-line/70"
      />
      <h4 className="mt-5 font-display text-xl font-medium italic leading-snug text-ink">
        {b.title}
      </h4>
      {b.summary && (
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{b.summary}</p>
      )}
      {b.bonus && (
        <p className="mt-3 border-t border-line pt-3 text-[14px] leading-relaxed text-muted">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
            Buy today bonus
          </span>
          <br />
          {b.bonus}
        </p>
      )}
      {b.buyUrl && (
        <a
          href={b.buyUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent transition-colors hover:text-ink"
        >
          Buy the book
        </a>
      )}
    </div>
  );
}

export default function BookLibrary({ books, themes }) {
  const [active, setActive] = useState('all');
  const shown = active === 'all' ? themes : themes.filter(t => t.key === active);
  const tab = (key, label) => (
    <button
      key={key}
      type="button"
      onClick={() => setActive(key)}
      aria-pressed={active === key}
      className={`-mb-px inline-flex min-h-11 items-end border-b-2 pb-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] transition-colors ${
        active === key
          ? 'border-ink text-ink'
          : 'border-transparent text-muted hover:text-ink'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter the library by theme"
        className="flex flex-wrap gap-x-7 gap-y-0 border-b border-line"
      >
        {tab('all', 'All')}
        {themes.map(t => tab(t.key, t.label))}
      </div>

      {shown.map(t => {
        const list = books.filter(b => b.theme === t.key);
        return (
          <section key={t.key} className="pt-12">
            {active === 'all' && (
              <h3 className="mb-8 font-display text-2xl font-medium text-ink sm:text-3xl">
                {t.name}
              </h3>
            )}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
              {list.map((b, i) => (
                <Reveal as="li" key={b.title} delay={(i % 4) * 60}>
                  <BookCell b={b} />
                </Reveal>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
