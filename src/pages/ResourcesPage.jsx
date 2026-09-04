import GhostNumeral from '../components/GhostNumeral.jsx';
import PageGrain from '../components/PageGrain.jsx';
import Reveal from '../components/Reveal.jsx';
import Footer from '../sections/Footer.jsx';
import Navbar from '../sections/Navbar.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import StickyMobileCta from '../components/StickyMobileCta.jsx';
import { leadMagnets } from '../content/leadMagnets.js';
import { webinars } from '../content/webinars.js';
import { withBase } from '../site.config.js';

/* Index of every lead magnet, generated from src/content/leadMagnets.js. */
export default function ResourcesPage() {
  return (
    <>
      <PageGrain />
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <GhostNumeral className="-top-16 right-[-2rem] lg:text-[20rem]">00</GhostNumeral>
          <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-36 sm:pt-44">
            <p className="mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
              Resources
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
              Guides for firms{' '}
              <em className="text-accent">building with AI.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.65] sm:text-xl">
              Practical material from a firm that runs on this, not theory from the sidelines.
              Free to read, nothing to fill in.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <p className="mb-6 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
            Guides
          </p>
          <ol className="border-t border-line">
            {leadMagnets.map((m, i) => (
              <Reveal as="li" key={m.slug} delay={i * 60}>
                <a
                  href={withBase(`resources/${m.slug}`)}
                  className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 border-b border-line py-8"
                >
                  <span
                    aria-hidden="true"
                    className="col-span-2 font-display text-2xl font-medium italic text-accent sm:col-span-1"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="col-span-10 sm:col-span-6">
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent">
                      {m.kicker}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-medium italic leading-snug text-ink transition-colors group-hover:text-accent sm:text-3xl">
                      {m.title}
                    </h2>
                  </div>
                  <p className="col-span-12 text-[16px] leading-relaxed text-muted sm:col-span-5">
                    {m.summary}
                  </p>
                </a>
              </Reveal>
            ))}
          </ol>
          {leadMagnets.length === 0 && (
            <p className="border-b border-line py-10 text-[17px] text-muted">
              New guides are on the way.
            </p>
          )}

          {webinars.length > 0 && (
            <div className="mt-20">
              <p className="mb-6 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
                Webinars
              </p>
              <ol className="border-t border-line">
                {webinars.map((w, i) => (
                  <Reveal as="li" key={w.title} delay={i * 60}>
                    <a
                      href={w.signupUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 border-b border-line py-8"
                    >
                      <span
                        aria-hidden="true"
                        className="col-span-2 font-display text-2xl font-medium italic text-accent sm:col-span-1"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="col-span-10 sm:col-span-6">
                        {w.when && (
                          <p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent">
                            {w.when}
                          </p>
                        )}
                        <h2 className="mt-2 font-display text-2xl font-medium italic leading-snug text-ink transition-colors group-hover:text-accent sm:text-3xl">
                          {w.title}
                        </h2>
                      </div>
                      <div className="col-span-12 sm:col-span-5">
                        <p className="text-[16px] leading-relaxed text-muted">{w.summary}</p>
                        <p className="mt-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-ink">
                          Sign up
                        </p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </ol>
            </div>
          )}
        </section>
      </main>
      <FinalCta />
      <Footer />
      <StickyMobileCta />
    </>
  );
}
