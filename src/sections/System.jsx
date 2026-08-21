import SectionHeading from '../components/SectionHeading.jsx';

export default function System() {
  return (
    <section id="system" className="mx-auto max-w-4xl px-5 py-20 text-center sm:py-28">
      <SectionHeading eyebrow="The foundation" title="Built on The Business DNA System™">
        This isn’t AI hype bolted onto guesswork. The mentorship runs on the 52-week growth
        methodology Damon developed with Clare Thompson over 15+ years — the same system behind
        his bestselling book <em className="text-bright not-italic font-semibold">Business DNA</em>.
        AI simply makes it faster to execute.
      </SectionHeading>
      <p className="mt-8 text-xl font-bold text-bright sm:text-2xl">
        “Business should serve you — <span className="text-accent">not the other way round.</span>”
      </p>
    </section>
  );
}
