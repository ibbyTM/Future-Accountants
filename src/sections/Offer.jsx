import Placeholder from '../components/Placeholder.jsx';
import { site } from '../site.config.js';

/*
 * "What's included" as an asymmetric bento grid — cell rhythm adapted from
 * 21st.dev "Feature Section with Bento Grid" (@tommyjepsen), re-skinned to
 * the editorial system: sharp corners, hairline borders, one ink feature
 * cell, one-line copy. Steps: connector-line timeline adapted from
 * 21st.dev "How It Works Timeline" (@7ovr), serif numerals in place of
 * icon circles.
 */
const included = [
  {
    title: 'Live mentorship with Damon',
    body: 'Live sessions on your firm — what to automate, what to charge, what to stop doing.',
    wide: true,
    ink: true,
  },
  {
    title: 'AI coaching, on demand',
    body: 'Damon’s methods between sessions — never stuck waiting a week.',
    flag: 'Confirm exact AI coaching mechanism with Damon',
  },
  {
    title: 'Playbooks & templates',
    body: 'Prompts and workflows already working in real firms. Copy, deploy.',
  },
  {
    title: 'Built on a proven system',
    body: 'The 52-week Business DNA System™ underneath. AI is the accelerant, not the gimmick.',
    wide: true,
  },
];

const steps = [
  { title: 'Book a call', body: 'A straight conversation. No hard sell.' },
  { title: 'Get your roadmap', body: 'A clear picture for your firm — join or not.' },
  { title: 'Implement, weekly', body: 'One practical move at a time, Damon in your corner.' },
];

export default function Offer({ heading }) {
  return (
    <section id="offer" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div className="grid grid-cols-12 items-end gap-x-6 gap-y-6">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
              {heading ?? (
                <>
                  {site.offerName}: mentorship that{' '}
                  <em className="text-accent">pays for itself in hours saved.</em>
                </>
              )}
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-[17px] leading-relaxed text-muted lg:col-span-5">
            Not a course. A working mentorship that installs AI into how your firm actually runs.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {included.map(item => (
            <div
              key={item.title}
              className={`flex min-h-[200px] flex-col justify-between border p-7 ${
                item.wide ? 'lg:col-span-2' : ''
              } ${
                item.ink
                  ? 'border-ink bg-ink text-ground'
                  : 'border-line bg-ground'
              }`}
            >
              <h3 className={`font-display text-2xl font-medium italic ${item.ink ? 'text-ground' : 'text-ink'}`}>
                {item.title}
              </h3>
              <div>
                <p className={`text-[16px] leading-relaxed ${item.ink ? 'text-ground/70' : 'text-muted'}`}>
                  {item.body}
                </p>
                {item.flag && (
                  <p className="mt-3 text-xs">
                    <Placeholder>{item.flag}</Placeholder>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <ol className="mt-20 grid gap-y-10 border-t border-line pt-12 sm:grid-cols-3 sm:gap-x-0">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-5 sm:block sm:pr-8">
              <div className="flex flex-col items-center sm:mb-5 sm:flex-row">
                <span className="flex size-12 shrink-0 items-center justify-center border border-ink font-display text-xl font-medium italic text-accent">
                  {i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-1 w-px flex-1 bg-line sm:ml-1 sm:mt-0 sm:h-px sm:w-auto ${
                    i === steps.length - 1 ? 'sm:hidden' : ''
                  }`}
                />
              </div>
              <div className="pb-2 sm:pb-0">
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
