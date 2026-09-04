import PageGrain from '../components/PageGrain.jsx';
import Navbar from '../sections/Navbar.jsx';
import Guarantee from '../sections/Guarantee.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import Footer from '../sections/Footer.jsx';
import StickyMobileCta from '../components/StickyMobileCta.jsx';
import GhostNumeral from '../components/GhostNumeral.jsx';
import Reveal from '../components/Reveal.jsx';
import { site } from '../site.config.js';
import { departments, departmentsResult } from '../content/departments.js';

/*
 * Offer deep dive, built from the programme deck. Each route gets its own
 * full panel (the deck's option slides), then the comparison table, the
 * AI Academy tiers and the Beyond AI system. No pricing on the site:
 * investment is covered on the scoping call.
 */
const withYou = [
  { tag: 'Weekly', name: 'Power Hour with Damon' },
  { tag: 'Tools', name: 'Baseline AI tool suite' },
  { tag: 'Support', name: 'Technical help between sessions' },
  { tag: 'Train', name: 'Use, implement and optimise' },
  { tag: 'Build', name: 'Step-by-step implementation' },
  { tag: 'Maximise', name: 'Troubleshoot and refine' },
];

const forYouStages = ['Scope', 'Build', 'Tailor', 'Implement', 'Test', 'Optimise'];

const forYouTimeline = [
  { period: '90 days', detail: 'Full build, tailoring, implementation and training' },
  { period: '6 months', detail: 'One-to-one mentoring and strategic advisory with Damon' },
  { period: '12 months', detail: 'Unlimited technical support, troubleshooting and optimisation' },
];

const comparison = [
  ['AI Practice Operating System', 'Included', 'Included'],
  ['Proven AI tools', 'Included', 'Included'],
  ['Damon mentoring', 'Weekly', '6 months, one-to-one'],
  ['Technical support', 'Between sessions', 'Unlimited, 12 months'],
  ['AI development team', 'Support', 'Full build'],
  ['Implementation', 'Your team', 'Our team'],
  ['Internal workload', 'Higher', 'Minimal'],
  ['Speed', 'Your pace', '90-day delivery'],
  ['Investment', 'Scoping call', 'Scoping call'],
];

const academy = [
  {
    level: 'Level 1',
    name: 'AI Academy',
    verb: 'Learn',
    body: 'Weekly live training and Q&A, resource and prompt libraries, AI news and a community of firms on the same path.',
  },
  {
    level: 'Level 2',
    name: 'AI Accelerator',
    verb: 'Implement',
    body: 'Everything in Level 1, plus mastermind sessions, office hours, accountability, workflow reviews and small group coaching.',
  },
  {
    level: 'Level 3',
    name: 'AI Pro',
    verb: 'Build',
    body: 'Everything in Levels 1 and 2, plus private mentoring, The Vault of prompts and agents, templates, workflows and priority support.',
  },
];

const beyond = [
  'Roadmap for success',
  'Premium pricing',
  'Branding and positioning',
  'Products, services and advisory',
  'Educational marketing',
  'Sales and customer maximisation',
  'Teams and systems',
];

export default function OfferPage() {
  return (
    <>
      <PageGrain />
      <Navbar />
      <main>
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-36 sm:pt-44">
          <p className="mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
            The programmes, in full
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
            Two ways to build your {site.offerName}.{' '}
            <em className="text-accent">Same destination. Different journey.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-[1.65] sm:text-xl">
            Both routes build your AI Practice Operating System™: the ten AI departments, in
            the right order, working across your whole practice. The difference is who does the
            work and how fast.
          </p>
        </section>

        {/* What both routes build: the ten departments in full */}
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-4">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
                What you build.{' '}
                <em className="text-accent">Ten departments, in order.</em>
              </h2>
            </div>
            <p className="col-span-12 max-w-md text-[16px] leading-relaxed text-muted lg:col-span-5">
              Built in the right order. For maximum impact in the shortest time. Every
              department shares one brain and one source of truth.
            </p>
          </div>
          <ol className="mt-12 border-t border-line">
            {departments.map((d, i) => (
              <Reveal
                as="li"
                key={d.name}
                delay={i * 40}
                className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2 border-b border-line py-6"
              >
                <span
                  aria-hidden="true"
                  className="col-span-2 font-display text-2xl font-medium italic text-accent sm:col-span-1"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="col-span-10 sm:col-span-5">
                  <h3 className="text-[17px] font-semibold leading-snug text-ink">{d.name}</h3>
                  <p className="mt-1 font-display text-[17px] italic leading-snug text-muted">
                    {d.line}
                  </p>
                </div>
                <p className="col-span-12 text-[15px] leading-relaxed text-muted sm:col-span-6">
                  {d.summary}
                </p>
              </Reveal>
            ))}
          </ol>
          <Reveal
            as="p"
            className="mt-10 max-w-4xl font-display text-xl italic leading-relaxed text-ink sm:text-2xl"
          >
            {departmentsResult.lead}{' '}
            <span className="text-accent">{departmentsResult.close}</span>
          </Reveal>
        </section>

        {/* Option 1: mentored */}
        <section className="relative overflow-hidden border-y border-line bg-surface">
          <GhostNumeral className="-top-12 left-[-2rem] lg:text-[18rem]">01</GhostNumeral>
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <div className="grid grid-cols-12 gap-x-6 gap-y-10">
              <div className="col-span-12 lg:col-span-4">
                <p className="border-t-2 border-transparent pt-4 font-sans text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Option 1 · Mentored implementation
                </p>
                <h2 className="mt-3 font-display text-4xl font-medium italic leading-[1.1] text-ink sm:text-5xl">
                  We build it with you.
                </h2>
                <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-muted">
                  Your team implements. We provide the system, the roadmap, the expertise and
                  the support.
                </p>
              </div>
              <div className="col-span-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
                {withYou.map((item, i) => (
                  <Reveal key={item.tag} delay={i * 70} className="border-t-2 border-ink pt-4">
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent">
                      {item.tag}
                    </p>
                    <p className="mt-2 text-[16px] font-semibold leading-snug text-ink">{item.name}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Option 2: done for you */}
        <section className="relative overflow-hidden bg-ink text-ground">
          <GhostNumeral tone="ground" className="-top-12 right-[-2rem] lg:text-[18rem]">02</GhostNumeral>
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <div className="grid grid-cols-12 gap-x-6 gap-y-10">
              <div className="col-span-12 lg:col-span-4">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-accent-soft brightness-150">
                  Option 2 · Done-for-you implementation
                </p>
                <h2 className="mt-3 font-display text-4xl font-medium italic leading-[1.1] sm:text-5xl">
                  We build it for you.
                </h2>
                <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-ground/70">
                  You make the decisions. We do the heavy lifting. Our dedicated AI development
                  team builds, implements and optimises the system with your team.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <ol className="stage-flow">
                  {forYouStages.map(s => (
                    <li key={s} className="flex items-center">
                      <span className="border border-ground/40 px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.16em]">
                        {s}
                      </span>
                      <span aria-hidden="true" className="stage-connector mx-2 h-px bg-ground/40" />
                    </li>
                  ))}
                </ol>
                <div className="mt-10 grid gap-x-10 gap-y-8 border-t border-ground/25 pt-8 sm:grid-cols-3">
                  {forYouTimeline.map(t => (
                    <div key={t.period}>
                      <p className="font-display text-3xl font-medium italic text-ground">{t.period}</p>
                      <p className="mt-2 font-sans text-[13px] leading-relaxed text-ground/60">
                        {t.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
            Side by side.
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-t border-line text-left">
              <thead>
                <tr className="border-b border-ink">
                  <th className="py-4 pr-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    What you get
                  </th>
                  <th className="py-4 pr-4 text-right font-sans text-xs font-bold uppercase tracking-[0.16em] text-ink">
                    Build it with you
                  </th>
                  <th className="py-4 text-right font-sans text-xs font-bold uppercase tracking-[0.16em] text-ink">
                    Build it for you
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([what, a, b], ri) => {
                  const total = ri === comparison.length - 1;
                  return (
                    <tr
                      key={what}
                      className={`transition-colors duration-200 hover:bg-surface/60 ${
                        total
                          ? 'border-t border-ink [border-bottom:3px_double_var(--color-ink)]'
                          : 'border-b border-line'
                      }`}
                    >
                      <td className="py-4 pr-4 text-[15px] font-semibold text-ink">{what}</td>
                      <td className="py-4 pr-4 text-right text-[15px] tabular-nums text-body">{a}</td>
                      <td className="py-4 text-right text-[15px] tabular-nums text-body">{b}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Investment is covered on your scoping call, once we know what your firm needs.
          </p>
        </section>

        {/* Academy */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <div className="grid grid-cols-12 items-end gap-x-6 gap-y-4">
              <div className="col-span-12 lg:col-span-7">
                <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
                  Not ready for a full programme?{' '}
                  <em className="text-accent">Start with the AI Academy.</em>
                </h2>
              </div>
              <p className="col-span-12 max-w-md text-[16px] leading-relaxed text-muted lg:col-span-5">
                The complete AI learning journey for accountants and finance professionals who
                want to lead, not follow.
              </p>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {academy.map((t, i) => (
                <Reveal key={t.name} delay={i * 90} className="border border-line bg-ground p-7 transition-colors duration-300 hover:border-ink">
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-accent">
                    {t.level} · {t.verb}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium italic text-ink">{t.name}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{t.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Beyond AI */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <p className="mb-6 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
                Beyond AI
              </p>
              <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
                AI is only <em className="text-accent">the foundation.</em>
              </h2>
              <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-muted">
                Once your core AI systems are in place, we can help you develop the whole
                practice. One system. One goal: build a better firm and live a better life.
              </p>
            </div>
            <ul className="relative col-span-12 border-t border-line before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-accent/60 lg:col-span-7">
              {beyond.map(b => (
                <li key={b} className="group flex items-center gap-4 border-b border-line py-4 pl-6">
                  <span aria-hidden="true" className="size-1.5 shrink-0 bg-accent transition-transform duration-200 group-hover:scale-150" />
                  <span className="text-[17px] text-body transition-colors duration-200 group-hover:text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Guarantee />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
