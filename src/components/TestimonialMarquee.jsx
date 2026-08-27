/*
 * Testimonial marquee, adapted from the shadcn-style TestimonialMarquee
 * (flush variant) to this project's plain-JSX editorial system: sharp
 * corners, hairline dividers, serif italic quotes, ground-colour edge
 * fades. Pauses on hover and under prefers-reduced-motion.
 */

function MarqueeRow({ children, speed = 40 }) {
  const row = (ariaHidden = false) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex min-w-full shrink-0 animate-marquee-left justify-start will-change-transform [backface-visibility:hidden] group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]"
      style={{ '--marquee-duration': `${speed}s` }}
    >
      {children}
    </div>
  );
  return (
    <div className="group flex overflow-hidden">
      {row()}
      {row(true)}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col justify-between border-r border-line p-8 sm:w-[400px]">
      <blockquote className="hang-quote font-display text-lg font-medium italic leading-[1.45] text-ink">
        “{item.text}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center bg-ink font-display text-sm italic text-ground"
        >
          {item.initial}
        </span>
        <span className="flex flex-col">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-ink">
            {item.name}
          </span>
          {item.role && (
            <span className="font-sans text-xs text-muted">{item.role}</span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialMarquee({ items, speed = 40 }) {
  let display = [...items];
  // enough copies to fill any viewport width for a seamless loop
  while (display.length < 8) display = [...display, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line">
      <MarqueeRow speed={speed}>
        {display.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </MarqueeRow>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-ground to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-ground to-transparent" />
    </div>
  );
}
