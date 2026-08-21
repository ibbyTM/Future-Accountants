import Placeholder from '../components/Placeholder.jsx';

const facts = [
  'Accountant by training, entrepreneur and business builder by instinct',
  'Managing Partner of Thompson Millar Wright & Partners — niche tax consultancy for high-net-worth businesses — and head of SA Tax Law Partnership',
  'Bestselling author of Business DNA and Covid BOUNCE BACK!, with a new book on AI for business forthcoming',
  'Creator of The Business DNA System™, developed over 15+ years with Clare Thompson',
  'In-demand UK keynote speaker, known for direct, step-by-step delivery',
];

export default function About() {
  return (
    <section id="about" className="border-y border-black/8 bg-surface/40 px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">About Damon</p>
          <h2 className="text-3xl font-extrabold leading-tight text-bright sm:text-4xl">
            He’s not teaching theory. He’s running the playbook in his own firms.
          </h2>
          <p className="mt-5 leading-relaxed">
            Damon Millar still sits across the table from clients every week. Everything in this
            mentorship is being used — right now — inside a real practice with real fees, real
            deadlines and real clients.
          </p>
          <ul className="mt-6 space-y-3">
            {facts.map(f => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed">
                <span aria-hidden="true" className="mt-0.5 font-bold text-accent">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl border border-dashed border-accent/40 bg-surface">
            <p className="max-w-xs px-6 text-center text-sm">
              <Placeholder>Real photograph of Damon goes here — request from client (no stock / AI imagery)</Placeholder>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
