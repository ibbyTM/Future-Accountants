import SectionHeading from '../components/SectionHeading.jsx';
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
  { step: '1', title: 'Book a call', body: 'A straight conversation about where your firm is and whether this is the right fit. No hard sell.' },
  { step: '2', title: 'Get your roadmap', body: 'Leave with a clear picture of what AI should be doing in your practice — whether you join or not.' },
  { step: '3', title: 'Implement, week by week', body: 'Join the mentorship and work the system: one practical move at a time, with Damon in your corner.' },
];

export default function Offer() {
  return (
    <section id="offer" className="border-y border-white/5 bg-surface/40 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The offer" title={`${site.offerName}: AI mentorship that pays for itself in hours saved.`}>
          Not a course you never finish. A working mentorship that installs AI into how your firm
          actually runs — pricing, delivery, client work and growth.
        </SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {included.map(item => (
            <div key={item.title} className="rounded-2xl border border-white/5 bg-ink p-7">
              <h3 className="text-lg font-bold text-bright">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{item.body}</p>
              {item.flag && (
                <p className="mt-3 text-xs">
                  <Placeholder>{item.flag}</Placeholder>
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {steps.map(s => (
            <div key={s.step} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-ink">
                {s.step}
              </div>
              <h3 className="mt-4 font-bold text-bright">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
