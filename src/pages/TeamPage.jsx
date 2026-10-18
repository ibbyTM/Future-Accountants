import GhostNumeral from '../components/GhostNumeral.jsx';
import PageGrain from '../components/PageGrain.jsx';
import Reveal from '../components/Reveal.jsx';
import StickyMobileCta from '../components/StickyMobileCta.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import Footer from '../sections/Footer.jsx';
import Navbar from '../sections/Navbar.jsx';
import { close, groups, intro } from '../content/team.js';
import { withBase } from '../site.config.js';

/*
 * Meet the Team. Every word comes from src/content/team.js. Leadership and
 * Rodney get a wide row each; the other groups use a three-up card grid.
 * Portraits are coloured circles on black, so each sits inside a CSS circle
 * slightly smaller than the photo's own and the black never shows.
 */

const num = i => String(i).padStart(2, '0');

function Portrait({ person, size, eager = false }) {
  return (
    <div className={`${size} shrink-0 overflow-hidden rounded-full bg-surface shadow-[0_24px_48px_rgba(26,26,24,0.18)]`}>
      <img
        src={withBase(`images/team/${person.slug}.webp`)}
        alt={person.name}
        width={640}
        height={640}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="size-full object-cover"
      />
    </div>
  );
}

function WideCard({ person, eager }) {
  return (
    <Reveal className="grid grid-cols-12 items-center gap-x-6 gap-y-8 border-b border-line py-14 last:border-b-0">
      <div className="col-span-12 flex justify-center sm:col-span-4 lg:justify-start">
        <Portrait person={person} size="size-56 sm:size-60 lg:size-64" eager={eager} />
      </div>
      <div className="col-span-12 sm:col-span-8">
        <h3 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">{person.name}</h3>
        <p className="mt-2 font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent">{person.role}</p>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">{person.bio}</p>
      </div>
    </Reveal>
  );
}

function Card({ person, delay }) {
  return (
    <Reveal as="li" delay={delay}>
      <Portrait person={person} size="size-40" />
      <h3 className="mt-6 font-display text-2xl font-medium leading-tight text-ink">{person.name}</h3>
      <p className="mt-2 font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent">{person.role}</p>
      <p className="mt-4 text-[16px] leading-relaxed text-muted">{person.bio}</p>
    </Reveal>
  );
}

function Group({ group, index }) {
  const wide = group.layout === 'wide';
  return (
    <section className="relative overflow-hidden border-t border-line" aria-labelledby={`group-${group.slug}`}>
      <GhostNumeral className={`-top-16 ${index % 2 ? 'left-[-3rem]' : 'right-[-2rem]'} lg:text-[20rem]`}>
        {num(index)}
      </GhostNumeral>
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <Reveal>
          <p className="mb-6 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
            {num(index)}
          </p>
          <h2 id={`group-${group.slug}`} className="font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
            {group.name}
          </h2>
        </Reveal>
        {wide ? (
          <div className="mt-4">
            {group.people.map(p => (
              <WideCard key={p.slug} person={p} eager={index === 1} />
            ))}
          </div>
        ) : (
          <ol className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {group.people.map((p, i) => (
              <Card key={p.slug} person={p} delay={i * 60} />
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageGrain />
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <GhostNumeral className="-top-16 right-[-2rem] lg:text-[20rem]">00</GhostNumeral>
          <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-36 sm:pt-44">
            <p className="mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
              {intro.kicker}
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
              {intro.tagline} <em className="text-accent">{intro.taglineEmphasis}</em>
            </h1>
            <div className="mt-10 max-w-2xl">
              {intro.paragraphs.map(p => (
                <p key={p} className="mt-6 text-lg leading-[1.65] sm:text-xl">
                  {p}
                </p>
              ))}
              <p className="mt-8 font-display text-2xl font-medium italic leading-snug text-ink sm:text-3xl">
                {intro.signOff}
              </p>
            </div>
          </div>
        </section>

        {groups.map((g, i) => (
          <Group key={g.slug} group={g} index={i + 1} />
        ))}

        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
            <Reveal className="grid grid-cols-12 gap-x-6 gap-y-10">
              <div className="col-span-12 lg:col-span-7">
                <p className="mb-6 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
                  {close.kicker}
                </p>
                <h2 className="font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl">
                  {close.headline}
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-5">
                {close.paragraphs.map(p => (
                  <p key={p} className="mt-5 text-[17px] leading-relaxed text-muted first:mt-0">
                    {p}
                  </p>
                ))}
                <p className="mt-8 font-display text-2xl font-medium italic leading-snug text-ink">
                  {close.last} <span className="text-accent">{close.lastEmphasis}</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <FinalCta />
      <Footer />
      <StickyMobileCta />
    </>
  );
}
