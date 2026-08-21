import Placeholder from '../components/Placeholder.jsx';
import { site } from '../site.config.js';

/*
 * Flat editorial FAQ: native <details> accordions with hairline rules and
 * a typographic +/− indicator. No cards, no icon library, no JS state.
 * Answers with unconfirmed facts carry visible placeholder flags.
 */
const faqs = [
  {
    q: 'I’m not technical. Will I keep up?',
    a: (
      <>
        Yes — that’s the point. This is built for practitioners, not programmers. Every move is
        explained step by step, in plain English, with the exact prompts and workflows to copy.
        If you can run a firm, you can run this.
      </>
    ),
  },
  {
    q: 'How is this different from a course?',
    a: (
      <>
        A course gives you videos and wishes you luck. This is live mentorship applied to your
        firm — your pricing, your clients, your bottlenecks — built on The Business DNA System™,
        a methodology refined over 15+ years. You implement as you go, with Damon in your corner.
      </>
    ),
  },
  {
    q: 'I run a business, not an accountancy practice. Is this still for me?',
    a: (
      <>
        Yes. The system was built with ambitious business owners as much as accountants — Damon
        has spent his career on both sides of that table. If you want AI working inside how your
        business runs, the method is the same.
      </>
    ),
  },
  {
    q: 'How much time does it take each week?',
    a: (
      <>
        It’s designed around a working week — one practical move at a time, not a second job.{' '}
        <Placeholder>Exact weekly time commitment — confirm with Damon</Placeholder>
      </>
    ),
  },
  {
    q: 'What does it cost?',
    a: (
      <>
        That’s covered on the call, once we know whether the fit is right — it depends on where
        your firm is and what you need.{' '}
        <Placeholder>Confirm pricing approach / whether to state a figure — ask Damon</Placeholder>
      </>
    ),
  },
  {
    q: 'How do I join?',
    a: (
      <>
        Book a call. It’s a straight conversation about where your firm is — you’ll leave with a
        clear picture of what AI should be doing in your practice, whether you join or not.
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-x-6 gap-y-10 px-5 py-24 sm:py-32">
        <div className="col-span-12 lg:col-span-4">
          <h2 className="font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
            Fair <em className="text-accent">questions.</em>
          </h2>
          <p className="mt-5 max-w-xs text-[17px] leading-relaxed text-muted">
            Anything else — ask on the call. You’ll get a straight answer.
          </p>
        </div>
        <div className="col-span-12 border-t border-line lg:col-span-8">
          {faqs.map(f => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-xl font-medium text-ink sm:text-2xl">
                  {f.q}
                </span>
                <span
                  aria-hidden="true"
                  className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="max-w-2xl pb-8 text-[17px] leading-relaxed text-body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
