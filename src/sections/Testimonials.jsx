import TestimonialMarquee from '../components/TestimonialMarquee.jsx';

/*
 * DO NOT LAUNCH WITH THESE QUOTES AS-IS.
 * Real testimonials must come from Damon (webinar attendees are the likely
 * source) — swap the placeholder items below for real name / role / quote
 * data. Placeholder text is deliberately unmissable.
 */
const placeholderSlots = [
  {
    text: '[PLACEHOLDER — testimonial about results from the mentorship or Business DNA System]',
    name: '[Name]',
    role: '[Firm — confirm with Damon]',
    initial: '?',
  },
  {
    text: '[PLACEHOLDER — testimonial about Damon’s direct, practical style (webinar attendee)]',
    name: '[Name]',
    role: '[Firm — confirm with Damon]',
    initial: '?',
  },
  {
    text: '[PLACEHOLDER — testimonial about AI implementation in a real firm]',
    name: '[Name]',
    role: '[Firm — confirm with Damon]',
    initial: '?',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <p className="mx-auto max-w-6xl px-5 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-muted">
        What people say after working with Damon
      </p>
      <div className="mt-8">
        <TestimonialMarquee items={placeholderSlots} speed={45} />
      </div>
    </section>
  );
}
