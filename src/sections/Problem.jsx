import SectionHeading from '../components/SectionHeading.jsx';

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
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionHeading eyebrow="The problem" title="Working harder isn’t a strategy.">
        Most accountants and business owners are running a model built for a world that no longer
        exists. Three things are breaking it:
      </SectionHeading>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {pains.map((p, i) => (
          <div key={p.title} className="rounded-2xl border border-white/5 bg-surface p-7">
            <p className="text-sm font-extrabold text-accent">0{i + 1}</p>
            <h3 className="mt-3 text-lg font-bold text-bright">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
