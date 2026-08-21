import CtaButton from '../components/CtaButton.jsx';
import { site } from '../site.config.js';

export default function FinalCta() {
  return (
    <section id="book" className="bg-ink text-ground">
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-x-6 gap-y-10 px-5 py-24 sm:py-32">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="font-display text-4xl font-medium leading-[1.12] sm:text-6xl">
            The firms that move first <em>set the prices.</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ground/70">
            One call. A straight answer on whether {site.offerName} is right for you — and a
            clear picture of what AI should be doing in your firm either way.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:justify-self-end">
          <CtaButton tone="ground" />
          <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ground/50">
            No hard sell. No obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
