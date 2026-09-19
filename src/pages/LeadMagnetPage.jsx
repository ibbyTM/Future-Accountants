import { useEffect, useRef, useState } from 'react';
import CtaButton from '../components/CtaButton.jsx';
import GhostNumeral from '../components/GhostNumeral.jsx';
import LeadForm, { pickVariant } from '../components/LeadForm.jsx';
import PageGrain from '../components/PageGrain.jsx';
import Reveal from '../components/Reveal.jsx';
import Footer from '../sections/Footer.jsx';
import Navbar from '../sections/Navbar.jsx';
import StickyMobileCta from '../components/StickyMobileCta.jsx';
import { resourceLinkFor } from '../content/leadMagnets.js';
import { withBase } from '../site.config.js';

/*
 * One lead magnet. The intro, takeaways and CTA are real HTML so search
 * engines have something to read. The resource itself sits behind the
 * lead form: submit, and the page confirms, offers the direct link and
 * shows the Notion document in place. A successful submit is remembered
 * per resource in localStorage, so a return visit skips the form.
 * Everything comes from src/content/leadMagnets.js.
 */
const storageKey = slug => `lead:${slug}`;

const readDone = slug => {
  try {
    return localStorage.getItem(storageKey(slug));
  } catch {
    return null;
  }
};

export default function LeadMagnetPage({ magnet }) {
  const resourceLink = resourceLinkFor(magnet);
  const [variant] = useState(pickVariant);
  const [doneEmail, setDoneEmail] = useState(() => readDone(magnet.slug));
  const confirmRef = useRef(null);

  const onSuccess = ({ email }) => {
    try {
      localStorage.setItem(storageKey(magnet.slug), email);
    } catch {
      /* private mode: the page still confirms */
    }
    setDoneEmail(email);
  };

  const reset = () => {
    try {
      localStorage.removeItem(storageKey(magnet.slug));
    } catch {
      /* nothing to clear */
    }
    setDoneEmail(null);
  };

  useEffect(() => {
    if (doneEmail) confirmRef.current?.focus();
  }, [doneEmail]);

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
              <a
                href="#get"
                className="mt-10 inline-flex min-h-12 items-center bg-ink px-9 py-4 font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#f1ecde] transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {doneEmail ? 'Read the guide' : 'Get the guide'}
              </a>
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

        <section id="get" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-20">
          <Reveal className="border-t border-line pt-10">
            {!doneEmail ? (
              <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                <div className="col-span-12 lg:col-span-4">
                  <p className="inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
                    Get the guide
                  </p>
                  <h2 className="mt-6 font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
                    Who is it <em className="text-accent">for?</em>
                  </h2>
                  <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-muted">
                    {variant === 'steps'
                      ? 'Two quick steps, and the guide opens right here.'
                      : 'A few details, and the guide opens right here.'}
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                  <LeadForm
                    leadMagnet={magnet.title}
                    resourceLink={resourceLink}
                    variant={variant}
                    onSuccess={onSuccess}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-12 gap-x-6 gap-y-8">
                  <div className="col-span-12 lg:col-span-7">
                    <p className="inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
                      Ready
                    </p>
                    <h2
                      ref={confirmRef}
                      tabIndex={-1}
                      className="mt-6 font-display text-3xl font-medium leading-[1.15] text-ink outline-none sm:text-4xl"
                    >
                      Thank you. <em className="text-accent">Here is your guide.</em>
                    </h2>
                    <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
                      Read {magnet.title} below, or open it in a new tab to keep it.{' '}
                      <button type="button" onClick={reset} className="font-semibold text-accent underline underline-offset-4 hover:text-ink">
                        Not you? Start again.
                      </button>
                    </p>
                  </div>
                  <div className="col-span-12 flex items-start lg:col-span-4 lg:col-start-9 lg:justify-end lg:pt-8">
                    <a
                      href={resourceLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center bg-ink px-9 py-4 font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#f1ecde] transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      Open the guide
                    </a>
                  </div>
                </div>

                <div className="mt-12 overflow-hidden border border-line bg-ground">
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
                    href={resourceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-4"
                  >
                    Open it in a new tab
                  </a>
                  .
                </p>
              </div>
            )}
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
          <a
            href={withBase('resources')}
            className="inline-flex min-h-11 items-center transition-colors hover:text-ink"
          >
            ← All resources
          </a>
        </p>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
