const pains = [
  {
    title: 'The AI space is full of fakers',
    body: 'Coaches chasing a bandwagon and kids with demo data. Almost none of them have run a firm.',
  },
  {
    title: 'Your hours are already spoken for',
    body: 'Compliance, emails, chasing clients. The work that grows the firm never gets the time.',
  },
  {
    title: 'Tools are not a strategy',
    body: 'Subscriptions pile up and nothing joins together. What a firm needs is one system.',
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 lg:col-span-5">
          <h2 className="font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
            Cheap promises <em className="text-accent">don’t build great firms.</em>
          </h2>
          <p className="mt-6 max-w-md">AI isn’t magic. It’s leverage. Three problems first:</p>
        </div>
        <ol className="col-span-12 border-t border-line lg:col-span-7">
          {pains.map((p, i) => (
            <li
              key={p.title}
              className="grid grid-cols-[3.5rem_1fr] gap-x-5 border-b border-line py-8 sm:grid-cols-[4.5rem_1fr]"
            >
              <span aria-hidden="true" className="font-display text-4xl font-medium italic leading-none text-accent">
                {i + 1}.
              </span>
              <div>
                <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[17px] leading-relaxed text-muted">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
