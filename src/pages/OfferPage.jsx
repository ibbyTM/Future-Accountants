import Navbar from '../sections/Navbar.jsx';
import OperatingSystem from '../sections/OperatingSystem.jsx';
import Offer from '../sections/Offer.jsx';
import Guarantee from '../sections/Guarantee.jsx';
import WhoItsFor from '../sections/WhoItsFor.jsx';
import Faq from '../sections/Faq.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import Footer from '../sections/Footer.jsx';
import StickyMobileCta from '../components/StickyMobileCta.jsx';
import { site } from '../site.config.js';

/*
 * Offer deep dive: the system, the two routes, the comparison rows, the
 * AI Academy tiers and the guarantee. No pricing on the site: investment
 * is covered on the scoping call.
 */
const comparison = [
  ['Foundational AI System', 'Included', 'Included'],
  ['Proven AI tools', 'Included', 'Included'],
  ['Damon mentoring', 'Weekly', '6 months, one-to-one'],
  ['Technical support', 'Between sessions', 'Unlimited, 12 months'],
  ['AI development team', 'Support', 'Full build'],
  ['Implementation', 'Your team', 'Our team'],
  ['Internal workload', 'Higher', 'Minimal'],
  ['Speed', 'Your pace', '90-day delivery'],
  ['Investment', 'Scoping call', 'Scoping call'],
];

const academy = [
  {
    level: 'Level 1',
    name: 'AI Academy',
    verb: 'Learn',
    body: 'Weekly live training and Q&A, resource and prompt libraries, AI news and a community of firms on the same path.',
  },
  {
    level: 'Level 2',
    name: 'AI Accelerator',
    verb: 'Implement',
    body: 'Everything in Level 1, plus mastermind sessions, office hours, accountability, workflow reviews and small group coaching.',
  },
  {
    level: 'Level 3',
    name: 'AI Pro',
    verb: 'Build',
    body: 'Everything in Levels 1 and 2, plus private mentoring, The Vault of prompts and agents, templates, workflows and priority support.',
  },
];

export default function OfferPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto max-w-6xl px-5 pb-4 pt-36 sm:pt-44">
          <p className="mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
            The programmes, in full
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
            Your {site.offerName}: <em className="text-accent">every route in.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-[1.65] sm:text-xl">
            The short version is on the home page. This is the long one.
          </p>
        </section>
        <OperatingSystem />
        <Offer
          heading={
            <>
              Two ways in. <em className="text-accent">Same destination.</em>
            </>
          }
        />

        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
              Side by side.
            </h2>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[560px] border-t border-line text-left">
                <thead>
                  <tr className="border-b border-ink">
                    <th className="py-4 pr-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-muted">
                      What you get
                    </th>
                    <th className="py-4 pr-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-ink">
                      Build it with you
                    </th>
                    <th className="py-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-ink">
                      Build it for you
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([what, a, b]) => (
                    <tr key={what} className="border-b border-line">
                      <td className="py-4 pr-4 text-[15px] font-semibold text-ink">{what}</td>
                      <td className="py-4 pr-4 text-[15px] text-body">{a}</td>
                      <td className="py-4 text-[15px] text-body">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-4">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
                Not ready for a full programme?{' '}
                <em className="text-accent">Start with the AI Academy.</em>
              </h2>
            </div>
            <p className="col-span-12 max-w-md text-[16px] leading-relaxed text-muted lg:col-span-5">
              The complete AI learning journey for accountants and finance professionals who
              want to lead, not follow.
            </p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {academy.map(t => (
              <div key={t.name} className="border border-line bg-ground p-7">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  {t.level} · {t.verb}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium italic text-ink">{t.name}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        <Guarantee />
        <WhoItsFor />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
