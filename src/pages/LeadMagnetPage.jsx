import CtaButton from '../components/CtaButton.jsx';
import GhostNumeral from '../components/GhostNumeral.jsx';
import PageGrain from '../components/PageGrain.jsx';
import Reveal from '../components/Reveal.jsx';
import Footer from '../sections/Footer.jsx';
import Navbar from '../sections/Navbar.jsx';
import StickyMobileCta from '../components/StickyMobileCta.jsx';
import { withBase } from '../site.config.js';

/*
 * One lead magnet. The intro, takeaways and CTA are real HTML so search
 * engines have something to read; the Notion document is embedded below for
 * the resource itself. Everything comes from src/content/leadMagnets.js.
 */
export default function LeadMagnetPage({ magnet }) {
  return (
    <>
      <PageGrain />
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <GhostNumeral className="-top-16 left-[-3rem] lg:text-[20rem]">01</GhostNumeral>
          <div className="relative mx-auto grid max-w-6xl grid-cols-12 gap-x-6 gap-y-10 px-5 pb-16 pt-36 sm:pt-44">
            <div className="col-span-12 lg:col-span-7">
              <p className="mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
                {magnet.kicker}
              </p>
              <h1 className="font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
                {magnet.title}
              </h1>
              {magnet.intro.map(p => (
                <p key={p} className="mt-6 max-w-xl text-lg leading-[1.65]">
                  {p}
                </p>
              ))}
            </div>

            {magnet.takeaways?.length > 0 && (
              <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                <h2 className="border-t-2 border-ink pt-3 font-sans text-xs font-bold uppercase tracking-[0.18em] text-ink">
                  What you get
                </h2>
                <ul className="mt-5 space-y-3">
                  {magnet.takeaways.map(t => (
                    <li key={t} className="flex gap-3 text-[16px] leading-relaxed text-body">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 bg-accent" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <Reveal className="border-t border-line pt-10">
            <div className="overflow-hidden border border-line bg-ground">
              <iframe
                src={magnet.notionUrl}
                title={magnet.title}
                loading="lazy"
                className="block h-[720px] w-full sm:h-[820px]"
              />
            </div>
            <p className="mt-4 font-sans text-xs text-muted">
              Not loading?{' '}
              <a
                href={magnet.notionUrl.replace('/ebd/', '/')}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-accent underline underline-offset-4"
              >
                Open it in a new tab
              </a>
              .
            </p>
          </Reveal>
        </section>

        <section id="book" className="border-t border-line bg-surface">
          <Reveal className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20">
            <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
              Want this built into your firm?{' '}
              <em className="text-accent">Start with a scoping call.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
              No pressure. No big decision today. We look at your firm, where AI fits and what
              to build first.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton />
            </div>
          </Reveal>
        </section>

        <p className="mx-auto max-w-6xl px-5 py-10 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          <a href={withBase('resources')} className="transition-colors hover:text-ink">
            ← All resources
          </a>
        </p>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
