import FadeContent from '../components/reactbits/FadeContent.jsx';
import CountUp from '../components/CountUp.jsx';

/*
 * Colophon stats band. All figures from Damon's own deck: Switch
 * Accountants runs 8 UK offices with 117+ staff at 65% AI coverage,
 * and he has written 20+ business books.
 */
const stats = [
  { n: 8, suffix: '', label: 'UK offices, our own firm' },
  { n: 117, suffix: '+', label: 'People, one team' },
  { n: 65, suffix: '%', label: 'Of work now done by AI' },
  { n: 20, suffix: '+', label: 'Business books written' },
];

export default function ProofBar() {
  return (
    <section className="border-y border-ink/80 bg-ink text-ground">
      <FadeContent duration={800} threshold={0.15}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-10 gap-y-10 px-5 py-14 lg:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="border-l border-ground/25 pl-5">
              <p className="font-display text-5xl font-medium italic leading-none text-ground sm:text-6xl">
                <CountUp target={s.n} className="tabular-nums" />
                {s.suffix}
              </p>
              <p className="mt-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-ground/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-8 font-display text-lg italic text-ground/70">
          We don’t talk AI. We live it.
        </p>
      </FadeContent>
    </section>
  );
}
