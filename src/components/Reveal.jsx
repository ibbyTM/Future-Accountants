import { useEffect, useRef, useState } from 'react';

/*
 * Shared in-view reveal primitive: the same view-triggered pattern as the
 * stats CountUp (from 21st.dev's Number Ticker), applied to opacity and
 * translate. One grammar for the whole site: 16px rise, 700ms, decel
 * curve, staggered by the delay prop. Fires once. Under reduced motion
 * content renders in place with no transition.
 */
export function useInView(threshold = 0.18) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Reveal({ delay = 0, className = '', as: Tag = 'div', children }) {
  const { ref, inView } = useInView();
  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
