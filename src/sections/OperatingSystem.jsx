import GhostNumeral from '../components/GhostNumeral.jsx';
import Reveal from '../components/Reveal.jsx';
import { site } from '../site.config.js';
import { departments, departmentsResult } from '../content/departments.js';

/*
 * The AI Practice Operating System: the ten foundational AI departments,
 * from src/content/departments.js. AI Firm Brain is the foundation cell; the
 * other nine sit in a numbered hairline grid, in Damon's build order.
 */
const [brain, ...others] = departments;

/* The trust row from Damon's V5 overview: the reassurance accountants need
   before handing work to AI. Sits between the departments and the result,
   as it does on his graphic. */
const trust = [
  { title: 'Secure by design', body: 'Your data. Your rules. Always protected.' },
  { title: 'Human in control', body: 'AI does the heavy lifting. You keep control.' },
  { title: 'Quality & review', body: 'Built-in checks, reviews and partner oversight.' },
  { title: 'Auditable & accountable', body: 'Full audit trail. Complete accountability.' },
];

export default function OperatingSystem() {
  return (
    <section id="system" className="relative overflow-hidden border-y border-line bg-surface">
      <GhostNumeral className="-top-16 right-[-2rem] lg:text-[20rem]">02</GhostNumeral>
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <Reveal className="grid grid-cols-12 items-end gap-x-6 gap-y-6">
          <div className="col-span-12 lg:col-span-7">
            <p className="mb-6 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
              {site.systemName}
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
              Ten foundational AI departments{' '}
              <em className="text-accent">every accountancy firm should build.</em>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-[17px] leading-relaxed text-muted lg:col-span-5">
            Built in the right order. For maximum impact in the shortest time. One connected
            system: every department shares one brain and one source of truth.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* The foundation gets its own row at lg, so the other nine fill a
              clean 3 by 3 beneath it. At sm it is a normal cell: ten cards,
              five rows of two, no orphan. */}
          <Reveal className="border border-ink bg-ink p-6 text-ground lg:col-span-3 lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-x-6 lg:p-8">
            <div className="lg:col-span-4">
              <p className="font-display text-xl font-medium italic text-accent-soft brightness-150 lg:text-3xl">01</p>
              <h3 className="mt-2 font-display text-2xl font-medium italic lg:mt-3 lg:text-3xl">{brain.name}</h3>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-ground/70 lg:col-span-8 lg:mt-0 lg:text-[17px]">
              {brain.summary}
            </p>
          </Reveal>
          {others.map((e, i) => (
            <Reveal
              key={e.name}
              delay={60 + i * 60}
              className="group border border-line bg-ground p-6 transition-colors duration-300 hover:border-ink"
            >
              <p className="font-display text-xl font-medium italic text-accent">{String(i + 2).padStart(2, '0')}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{e.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{e.summary}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <Reveal
            as="p"
            className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink"
          >
            Built on a foundation of trust
          </Reveal>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t, i) => (
              <Reveal key={t.title} delay={i * 80} className="border-t-2 border-ink pt-4">
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-accent">
                  {t.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{t.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal as="p" className="mt-14 border-t border-line pt-6 font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
          {departmentsResult.lead}{' '}
          <span className="text-accent">{departmentsResult.close}</span>
        </Reveal>

        {/* Damon's closing line, set as a ledger total rather than a second
            sentence, so it lands as the section's bottom line. */}
        <Reveal
          as="p"
          className="mt-12 pt-6 text-center font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink [border-top:3px_double_var(--color-ink)]"
        >
          Ten departments. <span className="text-accent">One connected practice.</span>{' '}
          Limitless impact.
        </Reveal>
      </div>
    </section>
  );
}
