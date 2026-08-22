import PageGrain from '../components/PageGrain.jsx';
import { site } from '../site.config.js';

/*
 * Dedicated conversion page. Deliberately minimal: wordmark, what happens
 * on the call, and the calendar. No nav, no footer links, no exits.
 * Set site.calendarEmbedUrl to render the real Calendly/GHL iframe.
 */
const steps = [
  { title: 'Scope', body: 'We get to know your firm, current systems, team and priorities.' },
  { title: 'Prioritise', body: 'We identify where AI makes the biggest and fastest impact.' },
  { title: 'Choose', body: 'We help you decide which route and level of support fits.' },
];

export default function BookPage() {
  return (
    <>
      <PageGrain />
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 font-sans">
          <a href="/" className="text-sm font-extrabold uppercase tracking-[0.3em] text-ink">
            Damon Millar
          </a>
          <a href="/" className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink">
            ← Back to site
          </a>
        </div>
      </header>
      <main className="mx-auto grid max-w-6xl grid-cols-12 gap-x-10 gap-y-14 px-5 py-16 sm:py-24">
        <div className="col-span-12 lg:col-span-5">
          <p className="mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
            {site.offerName}
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
            Book your scoping call.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-[1.65]">
            No pressure. No big decision today. Just the next conversation.
          </p>
          <ol className="mt-8 space-y-7">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-x-4">
                <span aria-hidden="true" className="font-display text-3xl font-medium italic leading-none text-accent">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-ink">{s.title}</h2>
                  <p className="mt-1 text-[16px] leading-relaxed text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 border-t border-line pt-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Your firm. Your priorities. Your AI roadmap.
          </p>
          <figure className="mt-10 border-l-2 border-accent pl-6">
            <blockquote className="font-display text-lg font-medium italic leading-[1.45] text-ink">
              “There is nobody in the world I would rather take business advice from than
              Damon.”
            </blockquote>
            <figcaption className="mt-3 font-sans text-xs font-bold uppercase tracking-[0.14em] text-muted">
              Paul · IFA Firm Owner, UK
            </figcaption>
          </figure>
          <p className="mt-8 text-[15px] leading-relaxed text-muted">
            Every programme comes with the 100% risk-free guarantee: if you’re unhappy with
            the progress made in your first 90 days, we keep working with you at no extra cost
            until you are 100% happy.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7">
          {site.calendarEmbedUrl ? (
            <iframe
              src={site.calendarEmbedUrl}
              title="Book a call with Damon Millar"
              className="min-h-[680px] w-full border border-line bg-surface"
            />
          ) : (
            <div className="flex min-h-[560px] items-center justify-center border border-dashed border-accent/60 bg-surface p-8 lg:min-h-[680px]">
              <p className="max-w-sm text-center font-sans text-sm leading-relaxed text-accent">
                Calendar embed goes here. Set <code className="font-semibold">calendarEmbedUrl</code>{' '}
                in <code className="font-semibold">src/site.config.js</code> to the confirmed
                Calendly / GHL link and the booking calendar renders in this slot.
              </p>
            </div>
          )}
        </div>
      </main>
      <footer className="border-t border-line px-5 py-8 text-center font-sans text-xs text-muted">
        © {new Date().getFullYear()} Damon Millar
      </footer>
    </>
  );
}
