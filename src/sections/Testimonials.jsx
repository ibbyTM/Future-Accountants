import FadeContent from '../components/reactbits/FadeContent.jsx';
import Placeholder from '../components/Placeholder.jsx';

/*
 * DO NOT LAUNCH WITH THESE QUOTES AS-IS.
 * Real testimonials must come from Damon (webinar attendees are the likely
 * source). Placeholders are deliberately unmissable.
 *
 * Editorial pull-quote treatment: oversized italic serif, hung against a
 * staggered margin, hairline separators — no card grid.
 */
const slots = [
  { text: 'Testimonial about results from the mentorship or Business DNA System', indent: 'lg:pl-0' },
  { text: 'Testimonial about Damon’s direct, practical style (webinar attendee)', indent: 'lg:pl-24' },
  { text: 'Testimonial about AI implementation in a real firm', indent: 'lg:pl-48' },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
      <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-muted">
        What people say after working with Damon
      </p>
      <FadeContent duration={800} threshold={0.15}>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {slots.map(slot => (
            <figure key={slot.text} className={`py-12 ${slot.indent}`}>
              <blockquote className="max-w-2xl font-display text-2xl font-medium italic leading-[1.35] text-ink sm:text-3xl">
                “<Placeholder>{slot.text}</Placeholder>”
              </blockquote>
              <figcaption className="mt-5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-muted">
                — <Placeholder>Name, Firm</Placeholder>
              </figcaption>
            </figure>
          ))}
        </div>
      </FadeContent>
    </section>
  );
}
