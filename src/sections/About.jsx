import Placeholder from '../components/Placeholder.jsx';

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
        <div className="col-span-12 lg:col-span-7">
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
          <ul className="mt-10 border-t border-line">
            {facts.map(f => (
              <li key={f} className="border-b border-line py-4 text-[16px] leading-relaxed text-body">
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none lg:pl-6">
          <figure className="relative flex aspect-[4/5] items-center justify-center bg-ink shadow-[0_24px_48px_rgba(26,26,24,0.18)]">
            <figcaption className="max-w-[240px] border border-dashed border-ground/50 p-4 text-center font-sans text-xs leading-relaxed text-ground/90">
              <Placeholder>Real B&amp;W photograph of Damon goes here. Request from client.</Placeholder>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
