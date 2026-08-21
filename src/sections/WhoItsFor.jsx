/*
 * Qualification block — filters call quality for a high-ticket offer.
 * Two rule-topped columns, em-dash lists, no cards.
 */
const forYou = [
  'You run an accountancy practice — or an ambitious business — and you’re done trading hours for fees',
  'You want a step-by-step system for putting AI to work, not another pile of tools to evaluate',
  'You’re prepared to implement, week by week, with direct feedback on your own firm',
];

const notForYou = [
  'You’re looking for a magic button instead of a working system',
  'You want theory and motivation rather than implementation',
  'You’re not willing to change how your firm actually operates',
];

function List({ title, items, accent }) {
  return (
    <div className={`border-t-2 pt-6 ${accent ? 'border-accent' : 'border-ink'}`}>
      <h3 className="font-display text-2xl font-medium italic text-ink sm:text-3xl">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map(item => (
          <li key={item} className="flex gap-4 text-[17px] leading-relaxed text-body">
            <span aria-hidden="true" className={accent ? 'text-accent' : 'text-muted'}>
              —
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhoItsFor() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
        This works. But only <em className="text-accent">for the right people.</em>
      </h2>
      <div className="mt-14 grid gap-x-10 gap-y-12 lg:grid-cols-2">
        <List title="This is for you if…" items={forYou} accent />
        <List title="This isn’t for you if…" items={notForYou} />
      </div>
    </section>
  );
}
