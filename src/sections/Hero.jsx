import AuroraBackground from '../components/AuroraBackground.jsx';
import CtaButton from '../components/CtaButton.jsx';
import { site } from '../site.config.js';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <AuroraBackground />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
          {site.offerName} — AI mentorship with Damon Millar
        </p>
        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-bright sm:text-6xl">
          AI is rewriting the rules of accountancy.
          <span className="block text-accent">Learn them first.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
          No-fluff mentorship from a bestselling author and practising tax partner — showing
          accountants and ambitious business owners exactly how to put AI to work in their firm,
          step by step.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton />
          <a href="#offer" className="text-sm font-semibold text-bright/80 transition-colors hover:text-bright">
            See how it works ↓
          </a>
        </div>
        <p className="mt-10 text-xs font-medium uppercase tracking-widest text-body/70">
          Bestselling author · Managing Partner, Thompson Millar Wright &amp; Partners · UK keynote speaker
        </p>
      </div>
    </section>
  );
}
