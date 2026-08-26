import Reveal from '../components/Reveal.jsx';
import { withBase } from '../site.config.js';

const facts = [
  'Pioneer in AI implementation for accounting firms',
  'Founder of the AI Accountant™ and Firm of the Future™ frameworks',
  'Built his own firm, Switch Accountants, to 8 UK offices and 117+ people',
  'Author of 20+ business books, including Business DNA and Artificially Intelligent!',
  'Helping firms across the UK, Australia, North America and beyond',
];

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-x-6 gap-y-12 px-5 py-24 sm:py-32">
        <Reveal className="col-span-12 lg:col-span-7">
          <p className="mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
            About Damon
          </p>
          <h2 className="font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
            The accountant <em className="text-accent">building the future.</em>
          </h2>
          <p className="mt-6 max-w-xl">
            Real practice experience combined with deep technical knowledge. His own firm runs at
            65% AI coverage, so nothing he teaches is theory.
          </p>
          <ul className="relative mt-10 border-t border-line pl-6 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-accent/60">
            {facts.map(f => (
              <li key={f} className="border-b border-line py-4 text-[16px] leading-relaxed text-body transition-colors duration-200 hover:text-ink">
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={140} className="col-span-12 mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none lg:pl-6">
          <figure className="relative aspect-[4/5] overflow-hidden bg-ink shadow-[0_24px_48px_rgba(26,26,24,0.18)]">
            <img
              src={withBase('images/damon-about.jpg')}
              alt="Damon Millar"
              loading="lazy"
              className="size-full object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
