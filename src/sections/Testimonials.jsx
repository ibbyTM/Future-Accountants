import FadeContent from '../components/reactbits/FadeContent.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Placeholder from '../components/Placeholder.jsx';

/*
 * DO NOT LAUNCH WITH THESE CARDS AS-IS.
 * Real testimonials must come from Damon (webinar attendees are the likely
 * source). Placeholders are deliberately unmissable.
 */
const slots = [
  'Testimonial about results from the mentorship or Business DNA System',
  'Testimonial about Damon’s direct, practical style (webinar attendee)',
  'Testimonial about AI implementation in a real firm',
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionHeading eyebrow="Results" title="What people say after working with Damon" />
      <FadeContent duration={800} threshold={0.15}>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {slots.map(slot => (
            <figure key={slot} className="rounded-2xl border border-black/8 bg-surface p-7 shadow-sm">
              <blockquote className="text-sm leading-relaxed">
                <Placeholder>[{slot}]</Placeholder>
              </blockquote>
              <figcaption className="mt-5 text-xs font-bold uppercase tracking-widest text-bright/60">
                <Placeholder>Name, Firm</Placeholder>
              </figcaption>
            </figure>
          ))}
        </div>
      </FadeContent>
    </section>
  );
}
