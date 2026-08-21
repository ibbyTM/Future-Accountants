import CtaButton from '../components/CtaButton.jsx';
import { site } from '../site.config.js';

export default function FinalCta() {
  return (
    <section id="book" className="border-t border-black/8 bg-surface/60 px-5 py-24 text-center sm:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-extrabold leading-tight text-bright sm:text-5xl">
          The firms that move first <span className="text-accent">set the prices.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed">
          One call. A straight answer on whether {site.offerName} is right for you — and a clear
          picture of what AI should be doing in your firm either way.
        </p>
        <div className="mt-10 flex justify-center">
          <CtaButton />
        </div>
        <p className="mt-6 text-xs uppercase tracking-widest text-body/60">
          No hard sell. No obligation.
        </p>
      </div>
    </section>
  );
}
