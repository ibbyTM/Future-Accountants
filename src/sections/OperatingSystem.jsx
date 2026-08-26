import GhostNumeral from '../components/GhostNumeral.jsx';
import Reveal from '../components/Reveal.jsx';
import { site } from '../site.config.js';

/*
 * The AI Practice Operating System: the ten AI employees from the deck.
 * AI Firm Brain is the foundation cell; the other nine sit in a numbered
 * hairline grid. Roles and result claims come straight from the deck.
 */
const employees = [
  { name: 'AI Meeting Assistant', role: 'Notes, actions, CRM updates, follow ups' },
  { name: 'AI Email Assistant', role: 'Drafts, replies, triage. A huge time saver' },
  { name: 'AI Bookkeeper', role: 'Daily bookkeeping, reconciliations, VAT and payroll' },
  { name: 'Claude Agent Team', role: 'Seven AI specialists working across the practice' },
  { name: 'AI Client Success Manager', role: 'Client questions, chasing, reminders, updates' },
  { name: 'AI Marketing Director', role: 'Social, emails, lead magnets, webinars, content' },
  { name: 'AI Finance Director', role: 'Reporting, margins, pricing, KPIs, capacity' },
  { name: 'AI Tax Specialist', role: 'HMRC research, legislation, planning, answers' },
  { name: 'AI CEO', role: 'Your biggest vision. Strategic adviser' },
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
              The first ten AI employees{' '}
              <em className="text-accent">every firm should build.</em>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-[17px] leading-relaxed text-muted lg:col-span-5">
            Built in the right order, for the biggest impact in the shortest time.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal className="relative z-10 flex min-h-[220px] flex-col justify-between border border-ink bg-ink p-7 text-ground lg:-mt-6 lg:row-span-2">
            <div>
              <p className="font-display text-3xl font-medium italic text-accent-soft brightness-150">01</p>
              <h3 className="mt-3 font-display text-2xl font-medium italic">AI Firm Brain</h3>
            </div>
            <p className="text-[16px] leading-relaxed text-ground/70">
              Your practice intelligence platform. It learns your firm, knows your clients and
              remembers everything. The foundation that powers every AI employee above it.
            </p>
          </Reveal>
          {employees.map((e, i) => (
            <Reveal
              key={e.name}
              delay={60 + i * 60}
              className="group border border-line bg-ground p-6 transition-colors duration-300 hover:border-ink"
            >
              <p className="font-display text-xl font-medium italic text-accent">{String(i + 2).padStart(2, '0')}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{e.name}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-muted">{e.role}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mt-10 border-t border-line pt-6 font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
          The result: 20 to 30+ hours saved per partner, per week.{' '}
          <span className="text-accent">A practice that runs without you.</span>
        </Reveal>
      </div>
    </section>
  );
}
