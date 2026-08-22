import Navbar from '../sections/Navbar.jsx';
import CtaButton from '../components/CtaButton.jsx';
import Footer from '../sections/Footer.jsx';
import StickyMobileCta from '../components/StickyMobileCta.jsx';

/*
 * Author-detail page — where the stripe-press recipe does its real work:
 * books laid out as featured objects (never a card grid), the system's
 * story, speaking and the weekly webinar. Cover images are honest asset
 * slots until real artwork is supplied.
 */
const books = [
  {
    title: 'Business DNA',
    edition: '10th Anniversary Edition',
    line: 'The bestselling blueprint behind The Business DNA System™.',
    cover: 'Real cover artwork needed — request from Damon',
  },
  {
    title: 'Covid BOUNCE BACK!',
    edition: 'Co-authored with Clare Thompson',
    line: 'The practical playbook for rebuilding through disruption.',
    cover: 'Real cover artwork needed — request from Damon',
  },
  {
    title: 'The AI book',
    edition: 'Forthcoming',
    line: 'Putting AI to work inside real businesses — the mentorship runs the method ahead of print.',
    cover: 'Title & cover TBC — confirm with Damon',
  },
];

function BookRow({ book, flip }) {
  return (
    <div className="grid grid-cols-12 items-center gap-x-6 gap-y-8 border-t border-line py-14">
      <div className={`col-span-12 sm:col-span-4 lg:col-span-3 ${flip ? 'sm:order-2 sm:col-start-10 lg:col-start-10' : ''}`}>
        <div className="mx-auto flex aspect-[3/4] w-full max-w-[240px] items-center justify-center bg-ink p-5 shadow-[0_24px_48px_rgba(26,26,24,0.18)]">
          <p className="border border-dashed border-ground/50 p-3 text-center font-sans text-xs leading-relaxed text-ground/90">
            {book.cover}
          </p>
        </div>
      </div>
      <div className={`col-span-12 sm:col-span-8 lg:col-span-7 ${flip ? 'sm:order-1' : 'lg:col-start-5'}`}>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-accent">
          {book.edition}
        </p>
        <h3 className="mt-2 font-display text-3xl font-medium italic text-ink sm:text-4xl">
          {book.title}
        </h3>
        <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-muted">{book.line}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-36 sm:pt-44">
          <p className="mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
            Author · Speaker · Adviser
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-7xl">
            Accountant by training. <em className="text-accent">Business builder by instinct.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-[1.65] sm:text-xl">
            Managing Partner of Thompson Millar Wright &amp; Partners, head of SA Tax Law
            Partnership — and still across the table from clients every week. Nothing he
            teaches is theory.
          </p>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <h2 className="font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
              The books.
            </h2>
            <div className="mt-12">
              {books.map((b, i) => (
                <BookRow key={b.title} book={b} flip={i % 2 === 1} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-20 sm:py-28">
          <blockquote className="border-l-2 border-accent pl-8 sm:pl-12">
            <p className="font-display text-3xl font-medium italic leading-[1.25] text-ink sm:text-[2.6rem]">
              “Business should serve you — <span className="text-accent">not the other way round.”</span>
            </p>
          </blockquote>
          <p className="mt-10 max-w-2xl pl-8 text-[17px] leading-relaxed text-muted sm:pl-12">
            That line became <strong className="font-semibold text-ink">The Business DNA System™</strong>{' '}
            — 52 weeks, developed with Clare Thompson over 15+ years. The foundation of
            everything here.
          </p>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto grid max-w-6xl grid-cols-12 gap-x-6 gap-y-10 px-5 py-20 sm:py-24">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
                On stage.
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
                Direct, no-fluff, step-by-step keynotes — always “here’s the actual system”.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
                Live, every week.
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
                “Ask Damon Anything” — real problems, unscripted answers, every week.
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
