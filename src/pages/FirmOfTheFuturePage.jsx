import CtaButton from '../components/CtaButton.jsx';
import GhostNumeral from '../components/GhostNumeral.jsx';
import PageGrain from '../components/PageGrain.jsx';
import Reveal from '../components/Reveal.jsx';
import StickyMobileCta from '../components/StickyMobileCta.jsx';
import Navbar from '../sections/Navbar.jsx';
import ProofBar from '../sections/ProofBar.jsx';
import Problem from '../sections/Problem.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import WhoItsFor from '../sections/WhoItsFor.jsx';
import Offer from '../sections/Offer.jsx';
import Guarantee from '../sections/Guarantee.jsx';
import Faq from '../sections/Faq.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import Footer from '../sections/Footer.jsx';
import { firmSystem as fs } from '../content/firmSystem.js';
import { site, withBase } from '../site.config.js';

/*
 * The Firm of the Future System as a funnel page. One goal: book the
 * scoping call. The order follows the shape that long-form landing pages
 * convert on: outcome-led promise and a single call to action above the
 * fold, proof, the problem, the mechanism (Damon's seven areas), the
 * outcomes, social proof, qualification, the offer and the next steps,
 * risk reversal, objections, then the final ask. The call to action
 * repeats at the natural decision points. Every line of copy is Damon's,
 * from src/content/firmSystem.js or the sections the home page already
 * runs on. Nothing is invented and there is no manufactured urgency.
 */

/* A short ink strip that restates the low-commitment first step and asks again. */
function CtaBand({ title, body, kicker }) {
  return (
    <section className="bg-ink text-ground">
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-x-6 gap-y-8 px-5 py-16 sm:py-20">
        <div className="col-span-12 lg:col-span-8">
          {kicker && (
            <p className="mb-4 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-accent-soft brightness-150">
              {kicker}
            </p>
          )}
          <h2 className="font-display text-3xl font-medium leading-[1.15] sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ground/70">{body}</p>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:justify-self-end">
          <CtaButton tone="ground" />
        </div>
      </div>
    </section>
  );
}

export default function FirmOfTheFuturePage() {
  const [startWithOne, proven, moneyBack] = [fs.promises[2], fs.promises[1], fs.promises[0]];

  return (
    <>
      <PageGrain />
      <Navbar />
      <main>
        {/* 1. Promise, proof and the ask, above the fold */}
        <section className="relative overflow-hidden">
          <GhostNumeral className="-top-16 right-[-2rem] lg:text-[20rem]">07</GhostNumeral>
          <div className="relative mx-auto grid max-w-6xl grid-cols-12 gap-x-6 gap-y-12 px-5 pb-20 pt-36 sm:pt-44">
            <div className="col-span-12 lg:col-span-7">
              <p className="hero-enter mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
                {fs.title}
              </p>
              <h1
                className="hero-enter max-w-3xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl"
                style={{ animationDelay: '120ms' }}
              >
                Build a more profitable, valuable and{' '}
                <em className="text-accent">future-ready accounting firm.</em>
              </h1>
              <p
                className="hero-enter mt-8 max-w-xl text-lg leading-[1.65] sm:text-xl"
                style={{ animationDelay: '320ms' }}
              >
                {fs.strap} <span className="text-ink">{fs.centre.close}</span>
              </p>
              <div
                className="hero-enter mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
                style={{ animationDelay: '440ms' }}
              >
                <CtaButton />
                <a
                  href="#areas"
                  className="relative inline-flex min-h-11 items-center font-sans text-sm font-semibold text-ink after:absolute after:bottom-2 after:left-0 after:h-px after:w-full after:bg-line after:transition-colors hover:after:bg-ink"
                >
                  See the seven areas
                </a>
              </div>
              <p
                className="hero-enter mt-14 border-t border-line pt-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted"
                style={{ animationDelay: '560ms' }}
              >
                Author of 21 business books · Founder, Switch Accountants Group · International Speaker & Adviser
              </p>
            </div>

            {/* What you get, in sight before anyone scrolls */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-20">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-muted">
                {fs.outcomesLead}
              </p>
              <ul className="mt-4 border-t border-line">
                {fs.outcomes.map((o, i) => (
                  <Reveal as="li" key={o.title} delay={200 + i * 80} className="border-b border-line py-4">
                    <p className="font-display text-xl font-medium italic text-ink">{o.title}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{o.body}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Proof */}
        <ProofBar />

        {/* 3. The problem */}
        <Problem />

        {/* 4. Where the AI system fits: the bridge from problem to mechanism */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-12 gap-x-6 gap-y-6 px-5 py-16 sm:py-20">
            <p className="col-span-12 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink lg:col-span-4">
              Where the AI system fits
            </p>
            <div className="col-span-12 lg:col-span-8">
              <p className="hang-quote max-w-2xl font-display text-2xl font-medium italic leading-[1.3] text-ink sm:text-3xl">
                {'“'}{fs.aiFit}{'”'}
              </p>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
                {site.systemName}. Ten foundational AI departments, built in the right order, for
                maximum impact in the shortest time.
              </p>
              <a
                href={withBase('offer')}
                className="mt-2 inline-flex min-h-11 items-center font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent transition-colors hover:text-ink"
              >
                See the ten departments
              </a>
            </div>
          </div>
        </section>

        {/* 5. The mechanism: seven areas */}
        <section id="areas" className="relative overflow-hidden scroll-mt-20">
          <GhostNumeral className="-top-12 left-[-3rem] lg:text-[18rem]">02</GhostNumeral>
          <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
            <Reveal className="grid grid-cols-12 items-end gap-x-6 gap-y-6">
              <div className="col-span-12 lg:col-span-7">
                <h2 className="font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
                  Seven areas. <em className="text-accent">One connected strategy.</em>
                </h2>
              </div>
              <p className="col-span-12 max-w-md text-[17px] leading-relaxed text-muted lg:col-span-5">
                {fs.centre.lead} {fs.centre.close}
              </p>
            </Reveal>
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
          </div>
        </section>

        {/* 6. The ask, restated as the smallest first step */}
        <CtaBand kicker="The first step" title={startWithOne.title} body={startWithOne.body} />

        {/* 7. Outcomes, and why to trust them */}
        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
            <Reveal>
              <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
                {fs.outcomesLead} <em className="text-accent">{fs.outcomesClose}</em>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {fs.outcomes.map((o, i) => (
                <Reveal key={o.title} delay={i * 80} className="border-t-2 border-ink pt-4">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-accent">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{o.body}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-16 grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-2">
              {[proven, moneyBack].map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <h3 className="font-display text-xl font-medium italic text-ink">{p.title}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">{p.body}</p>
                </Reveal>
              ))}
            </div>
            <Reveal
              as="p"
              className="mt-14 pt-6 text-center font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink [border-top:3px_double_var(--color-ink)]"
            >
              {fs.taglines[0]} <span className="text-accent">{fs.taglines[1]}</span>
            </Reveal>
          </div>
        </section>

        {/* 8. Social proof */}
        <Testimonials />

        {/* 9. Qualification */}
        <WhoItsFor />

        {/* 10. The offer and what happens next */}
        <Offer
          heading={
            <>
              Two ways to build it.{' '}
              <em className="text-accent">Same destination. Different journey.</em>
            </>
          }
        />

        {/* 11. Risk reversal */}
        <Guarantee />

        {/* 12. Objections */}
        <Faq />

        {/* 13. The final ask */}
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
