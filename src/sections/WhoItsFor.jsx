/*
 * Qualification block. Two rule-topped columns, square list markers,
 * no cards.
 */
const forYou = [
  'You run an accounting or professional services firm',
  'You want proof and systems, not hype',
  'You’ll put the work in, or have us do it for you',
];

const notForYou = [
  'You want a magic button',
  'You want theory, not implementation',
  'You won’t change how your firm operates',
];

function List({ title, items, accent }) {
  return (
    <div className={`border-t-2 pt-6 ${accent ? 'border-accent' : 'border-ink'}`}>
      <h3 className="font-display text-2xl font-medium italic text-ink sm:text-3xl">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map(item => (
          <li key={item} className="flex items-baseline gap-4 text-[17px] leading-relaxed text-body">
            <span
              aria-hidden="true"
              className={`size-1.5 shrink-0 self-center ${accent ? 'bg-accent' : 'bg-muted'}`}
            />
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
