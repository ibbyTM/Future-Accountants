import Reveal from '../components/Reveal.jsx';
import { site } from '../site.config.js';

/*
 * Two routes to the same Foundational Practice AI System, mirroring the
 * deck's option slides. No pricing on the site: investment is covered on
 * the scoping call. Below: the five next steps from the deck.
 */
const routes = [
  {
    option: 'Option 1',
    name: 'We build it with you',
    style: 'Mentored implementation',
    points: [
      'A weekly Power Hour with Damon',
      'Baseline AI tool suite included',
      'Technical help between sessions',
      'Your team implements, step by step, at your pace',
    ],
    ink: false,
  },
  {
    option: 'Option 2',
    name: 'We build it for you',
    style: 'Done-for-you implementation',
    points: [
      'Full build, tailoring and training in 90 days',
      'Our AI development team does the heavy lifting',
      'Six months of one-to-one mentoring with Damon',
      'Twelve months of unlimited technical support',
    ],
    ink: true,
  },
];

const steps = [
  { title: 'Scope', body: 'We get to know your firm, systems and priorities.' },
  { title: 'Prioritise', body: 'We find where AI makes the biggest, fastest impact.' },
  { title: 'Choose', body: 'We help you pick the right route and level of support.' },
  { title: 'Plan', body: 'We agree objectives and your 90-day roadmap.' },
  { title: 'Start', body: 'We begin building and delivering measurable improvements.' },
];

export default function Offer({ heading }) {
  return (
    <section id="offer" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal className="grid grid-cols-12 items-end gap-x-6 gap-y-6">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
            {heading ?? (
              <>
                Two ways to build your {site.offerName}.{' '}
                <em className="text-accent">Same destination. Different journey.</em>
              </>
            )}
          </h2>
        </div>
        <p className="col-span-12 max-w-md text-[17px] leading-relaxed text-muted lg:col-span-5">
          Both routes build your Foundational Practice AI System. The difference is who does the
          work and how fast.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        {routes.map((r, ri) => (
          <Reveal
            key={r.name}
            delay={ri * 120}
            className={`border p-8 ${
              r.ink ? 'border-ink bg-ink text-ground' : 'border-line bg-surface'
            }`}
          >
            <p className={`font-sans text-xs font-bold uppercase tracking-[0.18em] ${r.ink ? 'text-accent-soft brightness-150' : 'text-accent'}`}>
              {r.option} · {r.style}
            </p>
            <h3 className={`mt-3 font-display text-3xl font-medium italic ${r.ink ? 'text-ground' : 'text-ink'}`}>
              {r.name}
            </h3>
            <ul className={`mt-6 space-y-3 border-t pt-6 ${r.ink ? 'border-ground/25' : 'border-line'}`}>
              {r.points.map(p => (
                <li key={p} className={`flex gap-3 text-[16px] leading-relaxed ${r.ink ? 'text-ground/80' : 'text-body'}`}>
                  <span
                    aria-hidden="true"
                    className={`mt-2.5 size-1.5 shrink-0 ${r.ink ? 'bg-ground/60' : 'bg-accent'}`}
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        Investment is covered on your scoping call, once we know what your firm needs.
      </p>

      <div className="mt-20 border-t border-line pt-12">
        <h3 className="font-display text-2xl font-medium italic text-ink sm:text-3xl">
          What happens next
        </h3>
        <p className="mt-3 text-[17px] text-muted">
          No pressure. No big decision today. Just the next conversation.
        </p>
        <ol className="mt-10 grid gap-y-10 sm:grid-cols-5 sm:gap-x-0">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className="flex gap-5 sm:block sm:pr-6">
              <div className="flex flex-col items-center sm:mb-4 sm:flex-row">
                <span className="flex size-11 shrink-0 items-center justify-center border border-ink font-display text-lg font-medium italic text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-1 w-px flex-1 bg-line sm:ml-1 sm:mt-0 sm:h-px sm:w-auto ${
                    i === steps.length - 1 ? 'sm:hidden' : ''
                  }`}
                />
              </div>
              <div className="pb-2 sm:pb-0">
                <h4 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-ink">
                  {s.title}
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
