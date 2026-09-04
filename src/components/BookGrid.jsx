import Reveal from './Reveal.jsx';
import { withBase } from '../site.config.js';

/*
 * The wider catalogue as a grid of covers. Each cell shows the cover and
 * title, then Damon's summary and a buy link only when those fields are
 * filled in src/content/books.js, so the grid is honest while his copy is
 * still arriving.
 */
export default function BookGrid({ books }) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
      {books.map((b, i) => (
        <Reveal as="li" key={b.title} delay={(i % 5) * 60}>
          <img
            src={withBase(b.cover)}
            alt={`${b.title}, book cover`}
            loading="lazy"
            className="w-full shadow-[0_18px_36px_rgba(26,26,24,0.16)] ring-1 ring-line/70"
          />
          <h3 className="mt-5 font-display text-lg font-medium italic leading-snug text-ink">
            {b.title}
          </h3>
          {b.summary && (
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{b.summary}</p>
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
        </Reveal>
      ))}
    </ul>
  );
}
