import { lazy, Suspense, useEffect, useState } from 'react';

// ReactBits Aurora pulls in a WebGL renderer (ogl) — lazy-load it so it
// never blocks first paint, and skip it entirely for reduced-motion users.
const Aurora = lazy(() => import('./reactbits/Aurora.jsx'));

export default function AuroraBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[70vh] opacity-60">
      {enabled && (
        <Suspense fallback={null}>
          <Aurora
            colorStops={['#e3b458', '#4f7df9', '#e3b458']}
            amplitude={1.0}
            blend={0.55}
            speed={0.7}
          />
        </Suspense>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
    </div>
  );
}
