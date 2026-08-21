import FadeContent from '../components/reactbits/FadeContent.jsx';
import Placeholder from '../components/Placeholder.jsx';

const proofs = [
  {
    stat: '2× bestselling author',
    detail: 'Business DNA (10th Anniversary Edition) and Covid BOUNCE BACK! — with a new book on AI for business on the way.',
  },
  {
    stat: '15+ years',
    detail: 'Developing The Business DNA System™ — a 52-week growth methodology used with real firms, not theory.',
  },
  {
    stat: 'Practising partner',
    detail: 'Managing Partner of Thompson Millar Wright & Partners and head of SA Tax Law Partnership.',
  },
  {
    stat: 'Weekly live webinars',
    detail: '“Ask Damon Anything” — live, unscripted answers for business owners every week.',
  },
];

export default function ProofBar() {
  return (
    <section className="border-y border-white/5 bg-surface/60">
      <FadeContent duration={800} threshold={0.15}>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {proofs.map(p => (
            <div key={p.stat}>
              <p className="text-xl font-extrabold text-bright">{p.stat}</p>
              <p className="mt-2 text-sm leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-8 text-center text-xs">
          <Placeholder>“As seen in” media logos — confirm real mentions with Damon before launch</Placeholder>
        </p>
      </FadeContent>
    </section>
  );
}
