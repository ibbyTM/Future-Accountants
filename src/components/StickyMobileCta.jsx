import { useEffect, useRef, useState } from 'react';
import { site } from '../site.config.js';

/*
 * Mobile-only sticky booking bar. Scroll evaluation adapted from the
 * 21st.dev "Hide On Scroll" component (@ddoemonn): its rAF-throttled
 * scroll listener pattern, with the direction accumulator swapped for
 * past-the-hero logic. An IntersectionObserver hides the bar while the
 * final CTA section (#book) is on screen so the two never stack.
 */
export default function StickyMobileCta() {
  const [pastHero, setPastHero] = useState(false);
  const [finalCtaVisible, setFinalCtaVisible] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    const evaluate = () => {
      frame.current = 0;
      setPastHero(window.scrollY > window.innerHeight * 0.9);
    };
    const schedule = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(evaluate);
    };
    evaluate();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = 0;
    };
  }, []);

  useEffect(() => {
    const target = document.getElementById('book');
    if (!target || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setFinalCtaVisible(entry.isIntersecting));
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const hidden = !pastHero || finalCtaVisible;

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ground/95 p-3 backdrop-blur-sm transition-transform duration-300 motion-reduce:transition-none sm:hidden ${
        hidden ? 'pointer-events-none translate-y-full' : 'translate-y-0'
      }`}
    >
      <a
        href={site.bookingUrl}
        tabIndex={hidden ? -1 : undefined}
        className="block bg-ink py-3.5 text-center font-sans text-sm font-bold uppercase tracking-[0.18em] text-ground"
      >
        {site.ctaLabel}
      </a>
    </div>
  );
}
