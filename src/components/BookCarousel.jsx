import { withBase } from '../site.config.js';

/*
 * Infinite book-cover carousel for the /about catalogue band, built on
 * the same duplicated-track marquee mechanics as TestimonialMarquee
 * (the 21st.dev infinite-slider pattern). Covers are photographic
 * objects: sharp corners, deep shadow, slight lift on hover. Pauses on
 * hover and under prefers-reduced-motion.
 */
export default function BookCarousel({ covers, speed = 55 }) {
  const track = (ariaHidden = false) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex min-w-full shrink-0 animate-marquee-left items-end gap-10 pr-10 will-change-transform [backface-visibility:hidden] group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]"
      style={{ animationDuration: `${speed}s` }}
    >
      {covers.map(c => (
        <img
          key={c.src}
          src={withBase(c.src)}
          alt={c.alt}
          loading="lazy"
          className="w-36 shrink-0 shadow-[0_18px_36px_rgba(26,26,24,0.22)] ring-1 ring-line/70 transition-transform duration-300 hover:-translate-y-2 sm:w-44"
        />
      ))}
    </div>
  );

  return (
    <div className="group relative flex overflow-hidden py-4">
      {track()}
      {track(true)}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-28" />
    </div>
  );
}
