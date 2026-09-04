import BookGrid from '../components/BookGrid.jsx';
import GhostNumeral from '../components/GhostNumeral.jsx';
import PageGrain from '../components/PageGrain.jsx';
import Navbar from '../sections/Navbar.jsx';
import CtaButton from '../components/CtaButton.jsx';
import CountUp from '../components/CountUp.jsx';
import Footer from '../sections/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import { withBase } from '../site.config.js';
import StickyMobileCta from '../components/StickyMobileCta.jsx';
import { featured as books, catalogue } from '../content/books.js';

/*
 * Author-detail page, built from the deck's about material: the four
 * identity blocks, the books (from src/content/books.js), the mission,
 * the Switch Accountants proof band and the speaking/webinar panels.
 */
const identities = [
  {
    role: 'Author',
    detail: '21 business books on profit, growth, AI and building valuable businesses.',
  },
  {
    role: 'Speaker',
    detail: 'Keynote speaker and 15+ years of sold out Business DNA Roadshows & The Accountants Bootcamp events in the US and America.',
  },
  {
    role: 'Business adviser',
    detail: 'Trusted by practice owners and business leaders on strategy, growth, profitability and value.',
  },
  {
    role: 'Practice builder',
    detail: 'Founder of Switch Accountants Group, an award-winning multi-office 8 site firm that now uses AI at scale to perform 65% of the once human work.',
  },
];

const switchStats = [
  { n: 8, suffix: '', label: 'Offices across the UK' },
  { n: 117, suffix: '+', label: 'People, one amazing team' },
  { n: 65, suffix: '%', label: 'Of work now done by AI' },
];

function BookRow({ book, flip }) {
  return (
    <Reveal className="grid grid-cols-12 items-center gap-x-6 gap-y-8 border-t border-line py-14">
      <div className={`col-span-12 sm:col-span-4 lg:col-span-3 ${flip ? 'sm:order-2 sm:col-start-10 lg:col-start-10' : ''}`}>
        <img
          src={withBase(book.cover)}
          alt={book.alt}
          loading="lazy"
          className="mx-auto w-full max-w-[240px] shadow-[0_24px_48px_rgba(26,26,24,0.18)] ring-1 ring-line/70"
        />
      </div>
      <div className={`col-span-12 sm:col-span-8 lg:col-span-7 ${flip ? 'sm:order-1' : 'lg:col-start-5'}`}>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-accent">
          {book.edition}
        </p>
        <h3 className="mt-2 font-display text-3xl font-medium italic text-ink sm:text-4xl">
          {book.title}
        </h3>
        <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-muted">{book.line}</p>
        {book.summary && (
          <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-muted">{book.summary}</p>
        )}
        {book.buyUrl && (
          <a
            href={book.buyUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent transition-colors hover:text-ink"
          >
            Buy the book
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageGrain />
      <Navbar />
      <main>
        <section className="mx-auto grid max-w-6xl grid-cols-12 gap-x-6 gap-y-12 px-5 pb-16 pt-36 sm:pt-44">
          <div className="col-span-12 lg:col-span-7">
            <p className="mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
              AI expert · Practice builder · Author · Speaker
            </p>
            <h1 className="font-display text-5xl font-medium leading-[1.05] text-ink sm:text-7xl">
              The accountant <em className="text-accent">building the future.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.65] sm:text-xl">
              Pioneer in AI implementation for accounting firms. Founder of the AI Accountant™
              and Firm of the Future™ frameworks. Real practice experience combined with deep
              technical knowledge, and still across the table from clients every week.
            </p>
          </div>
          <div className="col-span-12 mx-auto w-full max-w-xs sm:max-w-sm lg:col-span-5 lg:max-w-none">
            <img
              src={withBase('images/damon-stairs.jpg')}
              alt="Damon Millar"
              fetchPriority="high"
              className="block w-full shadow-[0_24px_48px_rgba(26,26,24,0.18)]"
            />
          </div>
        </section>

        {/* Identity blocks */}
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {identities.map((i, idx) => (
              <Reveal key={i.role} delay={idx * 80} className="border-t-2 border-ink pt-4">
                <h2 className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-accent">
                  {i.role}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{i.detail}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Switch proof band */}
        <section className="relative overflow-hidden bg-ink text-ground">
          <GhostNumeral tone="ground" className="-right-8 -top-16 lg:text-[20rem]">65%</GhostNumeral>
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <div className="grid grid-cols-12 gap-x-6 gap-y-12">
              <div className="col-span-12 lg:col-span-5">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-accent-soft brightness-150">
                  Switch Accountants Group
                </p>
                <h2 className="mt-3 font-display text-4xl font-medium italic leading-[1.1] sm:text-5xl">
                  We build. We run. It’s real.
                </h2>
                <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-ground/70">
                  Damon’s own firm: complex, regulated, high stakes. Real business, real
                  clients, real results, every day.
                </p>
              </div>
              <div className="col-span-12 grid gap-x-10 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:self-center">
                {switchStats.map(s => (
                  <div key={s.label} className="border-l border-ground/25 pl-5">
                    <p className="font-display text-5xl font-medium italic leading-none">
                      <CountUp target={s.n} className="tabular-nums" />
                      {s.suffix}
                    </p>
                    <p className="mt-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-ground/60">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Books */}
        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <h2 className="font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
              The books.
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">
              21 business books on profit, growth, AI and building valuable businesses. Three
              of the best known:
            </p>
            <div className="mt-12">
              {books.map((b, i) => (
                <BookRow key={b.title} book={b} flip={i % 2 === 1} />
              ))}
            </div>
            <div className="border-t border-line pt-12">
              <p className="mb-10 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-muted">
                And the rest of the shelf
              </p>
              <BookGrid books={catalogue} />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mx-auto max-w-4xl px-5 pb-20 pt-20 sm:pb-28 sm:pt-24">
          <blockquote className="border-l-2 border-accent pl-8 sm:pl-12">
            <p className="font-display text-3xl font-medium italic leading-[1.25] hang-quote text-ink sm:text-[2.6rem]">
              “My mission: to help practice owners build highly profitable,{' '}
              <span className="text-accent">future-ready firms.”</span>
            </p>
          </blockquote>
          <p className="mt-10 max-w-2xl border-l-2 border-transparent pl-8 text-[17px] leading-relaxed text-muted sm:pl-12">
            Using the power of AI, strategic thinking and proven systems. Founder of{' '}
            <strong className="font-semibold text-ink">The Business DNA System™</strong>, the
            Accountant’s Bootcamp, the AI Academy for accountants and the Switch Accountants
            Group.
          </p>
        </section>

        {/* Speaking / webinar */}
        <section className="border-t border-line">
          <div className="mx-auto grid max-w-6xl grid-cols-12 gap-x-6 gap-y-10 px-5 py-20 sm:py-24">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
                On stage.
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
                Direct, no-fluff, step-by-step keynotes at conferences, events and mastermind
                groups worldwide. Always “here’s the actual system”.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
                Live, every week.
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
                “Ask Damon Anything”: real problems, unscripted answers, every week.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-ink text-ground">
          <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-x-6 gap-y-10 px-5 py-20 sm:py-24">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display text-4xl font-medium leading-[1.12] sm:text-5xl">
                Work with Damon <em>directly.</em>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:justify-self-end">
              <CtaButton tone="ground" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
