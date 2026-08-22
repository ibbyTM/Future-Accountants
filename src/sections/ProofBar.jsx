import FadeContent from '../components/reactbits/FadeContent.jsx';
import CountUp from '../components/CountUp.jsx';
import Placeholder from '../components/Placeholder.jsx';

/*
 * Colophon stats band: big serif numerals (count-up on scroll into view),
 * short labels, hairline column rules. No explainer paragraphs.
 */
const stats = [
  { n: 2, suffix: '×', label: 'Bestselling books' },
  { n: 15, suffix: '+', label: 'Years building the system' },
  { n: 52, suffix: '', label: 'Weeks of methodology' },
  { word: 'Live', label: '“Ask Damon Anything”, weekly' },
];

export default function ProofBar() {
  return (
    <section className="border-y border-ink/80 bg-ink text-ground">
      <FadeContent duration={800} threshold={0.15}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-10 gap-y-10 px-5 py-14 lg:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="border-l border-ground/25 pl-5">
              <p className="font-display text-5xl font-medium italic leading-none text-ground sm:text-6xl">
                {s.word ?? (
                  <>
                    <CountUp target={s.n} className="tabular-nums" />
                    {s.suffix}
                  </>
                )}
              </p>
              <p className="mt-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-ground/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-8 text-xs">
          <Placeholder>“As seen in” media logos — confirm real mentions with Damon before launch</Placeholder>
        </p>
      </FadeContent>
    </section>
  );
}
