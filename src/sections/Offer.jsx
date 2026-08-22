import Placeholder from '../components/Placeholder.jsx';
import { site } from '../site.config.js';

const included = [
  {
    title: 'Live mentorship with Damon',
    body: 'Regular live sessions working directly on your firm — what to automate, what to charge for, what to stop doing. Direct answers, not theory.',
  },
  {
    title: 'AI-assisted coaching, on demand',
    body: 'Damon’s methods, available between sessions through AI-powered coaching — so you’re never stuck waiting a week for an answer.',
    flag: 'Confirm exact AI coaching mechanism with Damon',
  },
  {
    title: 'Playbooks & templates',
    body: 'The prompts, workflows and client-facing templates already working inside real firms. Copy, adapt, deploy.',
  },
  {
    title: 'Built on a proven system',
    body: 'Everything sits on The Business DNA System™ — the 52-week methodology Damon has refined over 15+ years. AI is the accelerant, not the gimmick.',
  },
];

const steps = [
  { title: 'Book a call', body: 'A straight conversation about where your firm is and whether this is the right fit. No hard sell.' },
  { title: 'Get your roadmap', body: 'Leave with a clear picture of what AI should be doing in your practice — whether you join or not.' },
  { title: 'Implement, week by week', body: 'Join the mentorship and work the system: one practical move at a time, with Damon in your corner.' },
];

export default function Offer({ heading }) {
  return (
    <section id="offer" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div className="grid grid-cols-12 items-end gap-x-6 gap-y-8">
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
            Not a course you never finish. A working mentorship that installs AI into how your
            firm actually runs — pricing, delivery, client work and growth.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {included.map(item => (
            <div key={item.title} className="border-t-2 border-ink pt-5">
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-muted">{item.body}</p>
              {item.flag && (
                <p className="mt-3 text-xs">
                  <Placeholder>{item.flag}</Placeholder>
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-4">
              <span aria-hidden="true" className="font-display text-3xl font-medium italic leading-none text-accent">
                {i + 1}.
              </span>
              <div>
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
