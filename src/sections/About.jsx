const facts = [
  'Accountant by training, entrepreneur and business builder by instinct',
  'Managing Partner of Thompson Millar Wright & Partners — niche tax consultancy for high-net-worth businesses — and head of SA Tax Law Partnership',
  'Bestselling author of Business DNA and Covid BOUNCE BACK!, with a new book on AI for business forthcoming',
  'Creator of The Business DNA System™, developed over 15+ years with Clare Thompson',
  'In-demand UK keynote speaker, known for direct, step-by-step delivery',
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
            He’s not teaching theory. He’s running the playbook{' '}
            <em className="text-accent">in his own firms.</em>
          </h2>
          <p className="mt-6 max-w-xl">
            Damon Millar still sits across the table from clients every week. Everything in this
            mentorship is being used — right now — inside a real practice with real fees, real
            deadlines and real clients.
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
              Real B&amp;W photograph of Damon goes here — request from client (no stock / AI
              imagery).
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
