import CtaButton from '../components/CtaButton.jsx';
import { site } from '../site.config.js';

export default function FinalCta() {
  return (
    <section id="book" className="bg-ink text-ground">
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-x-6 gap-y-10 px-5 py-24 sm:py-32">
        <div className="col-span-12 lg:col-span-8">
          <p className="mb-5 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-accent-soft brightness-150">
            The bottom line.
          </p>
          <h2 className="font-display text-4xl font-medium leading-[1.12] sm:text-6xl">
            Let’s build your <em>{site.offerName}.</em>
          </h2>
          <span aria-hidden="true" className="mt-6 block w-16">
            <span className="block h-px bg-ground/70" />
            <span className="mt-[3px] block h-px bg-ground/70" />
          </span>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ground/70">
            One scoping call. Understand the opportunity, agree the right approach and build
            the plan.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:justify-self-end">
          <CtaButton tone="ground" />
          <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ground/50">
            Your firm. Your priorities. Your AI roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}
