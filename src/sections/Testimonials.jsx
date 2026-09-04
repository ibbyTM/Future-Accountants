import TestimonialMarquee from '../components/TestimonialMarquee.jsx';
import { testimonials } from '../content/testimonials.js';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <p className="mx-auto max-w-6xl px-5 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-muted">
        Recent client success stories
      </p>
      <div className="mt-8">
        <TestimonialMarquee items={testimonials} speed={60} />
      </div>
    </section>
  );
}
