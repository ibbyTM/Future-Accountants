const pains = [
  {
    title: 'You are the bottleneck',
    body: 'If the work stops when you stop, you don’t own a practice — it owns you. Every hour is sold once, and there are no hours left.',
  },
  {
    title: 'Compliance is being commoditised',
    body: 'AI already does the grunt work clients used to pay for. Firms that only sell compliance are now competing on price — and losing.',
  },
  {
    title: 'You know AI matters. Nobody shows you how.',
    body: 'Endless tools, endless noise, no system. What’s missing isn’t another app — it’s a step-by-step plan built for how a firm actually runs.',
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 lg:col-span-5">
          <h2 className="font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
            Working harder <em className="text-accent">isn’t a strategy.</em>
          </h2>
          <p className="mt-6 max-w-md">
            Most accountants and business owners are running a model built for a world that no
            longer exists. Three things are breaking it:
          </p>
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
