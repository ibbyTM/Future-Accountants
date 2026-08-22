import { useEffect, useRef, useState } from 'react';

/*
 * Count-up number adapted from 21st.dev "Number Ticker" (@danielpetho):
 * the tween-triggered-on-view pattern, reimplemented on rAF so it needs no
 * animation library. Renders the final value straight away under
 * prefers-reduced-motion.
 */
export default function CountUp({ target, duration = 1400, className = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setValue(target);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setValue(target);
          return;
        }
        const t0 = performance.now();
        const tick = now => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
