import AuroraBackground from '../components/AuroraBackground.jsx';
import CtaButton from '../components/CtaButton.jsx';
import { site } from '../site.config.js';

/*
 * Split hero: copy left, large cutout photo of Damon right — anchored to the
 * bottom edge of the section (personal-brand funnel pattern).
 *
 * Drop the real background-removed photo at public/damon-cutout.png and it
 * renders automatically; while the file is missing the flagged silhouette
 * placeholder shows instead.
 */
import { useEffect, useRef, useState } from 'react';
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

  if (missing) return <HeroPhotoPlaceholder />;
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 bottom-0 top-12 rounded-t-full bg-accent/10 blur-2xl"
      />
      <img
        ref={imgRef}
        src="/damon-cutout.png"
        alt="Damon Millar"
        fetchPriority="high"
        className="relative block w-full"
        onError={() => setMissing(true)}
        onLoad={e => {
          if (e.currentTarget.naturalWidth === 0) setMissing(true);
        }}
      />
    </div>
  );
}

function HeroPhotoPlaceholder() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 bottom-0 top-12 rounded-t-full bg-accent/10 blur-2xl"
      />
      <svg
        viewBox="0 0 400 460"
        role="img"
        aria-label="Placeholder for a photograph of Damon Millar"
        className="relative block w-full"
      >
        <circle cx="200" cy="118" r="74" fill="#dcdad9" />
        <path d="M64,460 C64,320 118,252 200,252 C282,252 336,320 336,460 Z" fill="#dcdad9" />
      </svg>
      <p className="absolute inset-x-6 top-1/2 -translate-y-1/2 rounded-lg border border-dashed border-accent/50 bg-white/90 p-3 text-center text-xs text-accent-soft">
        Real cutout photo of Damon goes here — his image is the brand. Request
        a high-res, front-facing shot from the client (no stock / AI imagery) — black &amp; white to match his existing brand photography.
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36">
      <AuroraBackground />
      <div className="relative mx-auto grid max-w-6xl items-end gap-x-8 px-5 lg:grid-cols-[7fr_5fr]">
        <div className="pb-16 text-center sm:pb-24 lg:text-left">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
            {site.offerName} — AI mentorship with Damon Millar
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-bright sm:text-5xl xl:text-6xl">
            AI is rewriting the rules of accountancy.
            <span className="block text-accent">Learn them first.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed lg:mx-0 sm:text-xl">
            No-fluff mentorship from a bestselling author and practising tax partner — showing
            accountants and ambitious business owners exactly how to put AI to work in their
            firm, step by step.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <CtaButton />
            <a
              href="#offer"
              className="text-sm font-semibold text-bright/80 transition-colors hover:text-bright"
            >
              See how it works ↓
            </a>
          </div>
          <p className="mt-9 text-xs font-medium uppercase tracking-widest text-body/70">
            Bestselling author · Managing Partner, Thompson Millar Wright &amp; Partners · UK
            keynote speaker
          </p>
        </div>
        <div className="flex items-end justify-center">
          <HeroPhoto />
        </div>
      </div>
    </section>
  );
}
