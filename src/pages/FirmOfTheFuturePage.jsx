import GhostNumeral from '../components/GhostNumeral.jsx';
import PageGrain from '../components/PageGrain.jsx';
import Reveal from '../components/Reveal.jsx';
import StickyMobileCta from '../components/StickyMobileCta.jsx';
import Navbar from '../sections/Navbar.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import Footer from '../sections/Footer.jsx';
import { firmSystem as fs } from '../content/firmSystem.js';
import { site, withBase } from '../site.config.js';

/*
 * The Firm of the Future System: Damon's full programme and where the AI
 * Practice Operating System sits inside it. All copy from
 * src/content/firmSystem.js, set in the site's own system rather than his
 * graphic.
 */
export default function FirmOfTheFuturePage() {
  return (
    <>
      <PageGrain />
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <GhostNumeral className="-top-16 right-[-2rem] lg:text-[20rem]">07</GhostNumeral>
          <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-36 sm:pt-44">
            <p className="mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
              {fs.title}
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
              Where the AI system fits{' '}
              <em className="text-accent">in the Firm of the Future.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.65] sm:text-xl">
              {fs.centre.lead} <span className="text-ink">{fs.centre.close}</span>
            </p>
            <p className="mt-6 font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-muted">
              {fs.strap}
            </p>
          </div>
        </section>

        {/* Where the AI system fits */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-12 gap-x-6 gap-y-6 px-5 py-14 sm:py-16">
            <p className="col-span-12 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink lg:col-span-4">
              Where the AI system fits
            </p>
            <div className="col-span-12 lg:col-span-8">
              <p className="hang-quote max-w-2xl font-display text-2xl font-medium italic leading-[1.3] text-ink sm:text-3xl">
                {'“'}{fs.aiFit}{'”'}
              </p>
              <a
                href={withBase('offer')}
                className="mt-6 inline-block font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent transition-colors hover:text-ink"
              >
                See {site.systemName}
              </a>
            </div>
          </div>
        </section>

        {/* The seven areas */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-4">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
                Seven areas. <em className="text-accent">One connected strategy.</em>
              </h2>
            </div>
          </div>
          <ol className="mt-12 border-t border-line">
            {fs.areas.map((a, i) => (
              <Reveal
                as="li"
                key={a.name}
                delay={i * 40}
                className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-b border-line py-7"
              >
                <span
                  aria-hidden="true"
                  className="col-span-2 font-display text-2xl font-medium italic text-accent sm:col-span-1"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="col-span-10 text-[17px] font-semibold leading-snug text-ink sm:col-span-4">
                  {a.name}
                </h3>
                <ul className="col-span-12 space-y-2 sm:col-span-7">
                  {a.points.map(p => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Outcomes */}
        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <Reveal>
              <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
                {fs.outcomesLead} <em className="text-accent">{fs.outcomesClose}</em>
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {fs.outcomes.map((o, i) => (
                <Reveal key={o.title} delay={i * 80} className="border-t-2 border-ink pt-4">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-accent">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{o.body}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-3">
              {fs.promises.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <h3 className="font-display text-xl font-medium italic text-ink">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </Reveal>
              ))}
            </div>

            {/* The two taglines as the ledger total. */}
            <Reveal
              as="p"
              className="mt-14 pt-6 text-center font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink [border-top:3px_double_var(--color-ink)]"
            >
              {fs.taglines[0]}{' '}
              <span className="text-accent">{fs.taglines[1]}</span>
            </Reveal>
          </div>
        </section>
      </main>
      <FinalCta />
      <Footer />
      <StickyMobileCta />
    </>
  );
}
