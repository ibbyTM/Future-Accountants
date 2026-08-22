import Reveal from '../components/Reveal.jsx';

/*
 * The 100% risk-free guarantee, verbatim in substance from the deck.
 * Offered to every programme client.
 */
export default function Guarantee() {
  return (
    <section
      className="border-y border-line bg-surface"
      style={{
        backgroundImage:
          'repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(200, 190, 164, 0.45) 27px, rgba(200, 190, 164, 0.45) 28px)',
      }}
    >
      <Reveal className="mx-auto max-w-4xl px-5 py-20 text-center sm:py-24">
        <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-accent">
          100% risk-free guarantee
        </p>
        <p className="mt-6 font-display text-2xl font-medium italic leading-[1.35] text-ink sm:text-3xl">
          If you’re unhappy with the progress made in your first 90 days, we keep working with
          you at no extra cost until you are{' '}
          <span className="text-accent">100% happy.</span>
        </p>
        <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Offered to every single programme client
        </p>
      </Reveal>
    </section>
  );
}
