import { useEffect, useRef, useState } from 'react';
import CtaButton from '../components/CtaButton.jsx';
import { site, withBase } from '../site.config.js';

/*
 * Editorial split hero. Copy sits on a wide left measure; a cutout of
 * Damon stands on an ink plate offset right. The figure breaks the
 * plate's top edge, with a soft backdrop light behind the head so the
 * dark suit separates from the near-black plate.
 */
function PhotoPlate({ children }) {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 top-16 overflow-hidden bg-ink shadow-[0_24px_48px_rgba(26,26,24,0.18)]">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(80% 62% at 50% 26%, rgba(244,242,236,0.26), transparent 74%)' }}
        />
      </div>
      {children}
    </div>
  );
}

function HeroPhoto() {
  const [missing, setMissing] = useState(false);
  const imgRef = useRef(null);

  // onError alone is not enough: dev/preview servers answer missing files
  // with a 200 index.html fallback, so also treat a decoded-but-empty image
  // (naturalWidth 0) as missing.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setMissing(true);
  }, []);

  if (missing) {
    return (
      <PhotoPlate>
        <div className="relative aspect-[945/1417]" />
      </PhotoPlate>
    );
  }
  // The wrapper keeps the plate at the original photo's footprint; the
  // cutout sits inside it at the scale the figure had in that photo.
  return (
    <PhotoPlate>
      <div className="relative aspect-[945/1417]">
        <img
          ref={imgRef}
          src={withBase('images/damon-hero-cutout.webp')}
          alt="Damon Millar"
          fetchPriority="high"
          className="absolute bottom-0 left-1/2 w-[68.4%] -translate-x-1/2 [filter:drop-shadow(0_8px_16px_rgba(26,26,24,0.45))_drop-shadow(26px_34px_48px_rgba(26,26,24,0.32))]"
          onError={() => setMissing(true)}
          onLoad={e => {
            if (e.currentTarget.naturalWidth === 0) setMissing(true);
          }}
        />
      </div>
    </PhotoPlate>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-16">
      <div className="relative mx-auto grid max-w-6xl grid-cols-12 gap-x-6 px-5">
        <div className="col-span-12 pt-16 sm:pt-20 lg:col-span-7 lg:pb-20 lg:pt-28">
          <div className="rule-enter mb-0 border-t-2 border-ink" />
          <p className="hero-enter mb-8 pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink" style={{ animationDelay: '80ms' }}>
            AI. Strategy. Systems. Growth.
          </p>
          <h1 className="hero-enter font-display text-[2.75rem] font-medium leading-[1.08] tracking-[-0.01em] text-ink sm:text-6xl xl:text-[4.25rem]" style={{ animationDelay: '180ms' }}>
            Building the <em className="text-accent">Firm of the Future.</em>
          </h1>
          <p className="hero-enter mt-8 max-w-xl text-lg leading-[1.65] sm:text-xl" style={{ animationDelay: '320ms' }}>
            A practical AI roadmap for accounting firms, from the man who built his own firm to
            65% AI coverage. We build it in our firm. Now we help other firms build theirs.
          </p>
          <div className="hero-enter mt-10 flex flex-wrap items-center gap-7" style={{ animationDelay: '440ms' }}>
            <CtaButton />
            <a
              href="#offer"
              className="font-sans text-sm font-semibold text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-accent"
            >
              See how it works
            </a>
          </div>
          <p className="hero-enter mt-14 border-t border-line pt-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted" style={{ animationDelay: '560ms' }}>
            Author of 20+ business books · Founder, Switch Accountants · UK keynote speaker
          </p>
        </div>
        <div className="hero-enter col-span-12 mx-auto w-full max-w-xs pt-6 sm:max-w-sm lg:col-span-5 lg:max-w-none lg:pt-24" style={{ animationDelay: '300ms' }}>
          <HeroPhoto />
        </div>
      </div>
    </section>
  );
}
