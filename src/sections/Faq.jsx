import Reveal from '../components/Reveal.jsx';
import { site } from '../site.config.js';

/*
 * Flat editorial FAQ: native <details> accordions with hairline rules and
 * a typographic +/x indicator. Answers are grounded in the programme deck.
 */
const faqs = [
  {
    q: 'What exactly is the Foundational Practice AI System?',
    a: (
      <>
        Ten AI employees built for your firm in the right order, starting with the AI Firm
        Brain that learns your practice and powers everything else. It covers meetings, email,
        bookkeeping, client success, marketing, finance, tax and strategy.
      </>
    ),
  },
  {
    q: 'What’s the difference between the two routes?',
    a: (
      <>
        The destination is the same. With the mentored route your team implements with Damon’s
        weekly guidance and full support. With the done-for-you route his AI development team
        builds, tailors and implements the whole system in 90 days.
      </>
    ),
  },
  {
    q: 'I’m not technical. Will I keep up?',
    a: (
      <>
        Yes. This is built for practitioners, not programmers. Every move comes step by step,
        in plain English, and on the done-for-you route the technical work is done for you.
      </>
    ),
  },
  {
    q: 'What does it cost?',
    a: (
      <>
        Investment is covered on your scoping call, once we understand your firm and which
        route fits. No pressure and no big decision on the day. Just the next conversation.
      </>
    ),
  },
  {
    q: 'What if it doesn’t work for my firm?',
    a: (
      <>
        Every programme client gets the 100% risk-free guarantee. If you’re unhappy with the
        progress made in your first 90 days, we keep working with you at no extra cost until
        you are 100% happy.
      </>
    ),
  },
  {
    q: 'How do I start?',
    a: (
      <>
        Book a scoping call. We look at your firm, your systems and your priorities, and you
        leave with a clear picture of what AI should be doing in your practice.
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
            Anything else, ask on the call. You’ll get a straight answer.
          </p>
        </div>
        <div className="col-span-12 border-t border-line lg:col-span-8">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
            <details className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-xl font-medium text-ink transition-colors duration-200 group-hover:text-accent sm:text-2xl">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
