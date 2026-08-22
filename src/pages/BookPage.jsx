import { site } from '../site.config.js';

/*
 * Dedicated conversion page. Deliberately minimal: wordmark, what happens
 * on the call, and the calendar. No nav, no footer links, no exits.
 * Set site.calendarEmbedUrl to render the real Calendly/GHL iframe.
 */
const steps = [
  { title: 'Where you are', body: 'What’s working, what’s eating your hours.' },
  { title: 'What AI should be doing', body: 'A clear picture for your practice — join or not.' },
  { title: 'Whether this is the right fit', body: 'If it isn’t, you’ll be told straight.' },
];

export default function BookPage() {
  return (
    <>
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
            Book your call.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-[1.65]">
            Thirty minutes, three things covered:
          </p>
          <ol className="mt-8 space-y-7">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-x-4">
                <span aria-hidden="true" className="font-display text-3xl font-medium italic leading-none text-accent">
                  {i + 1}.
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-ink">{s.title}</h2>
                  <p className="mt-1 text-[16px] leading-relaxed text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 border-t border-line pt-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            No hard sell. No obligation.
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
                Calendar embed goes here — set <code className="font-semibold">calendarEmbedUrl</code>{' '}
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
