import TestimonialMarquee from '../components/TestimonialMarquee.jsx';

/*
 * Real client quotes from Damon's programme deck, wording verbatim.
 */
const testimonials = [
  {
    text: 'We just had our best-ever month! Damon is a business wizard. Been there, done that, got the T-shirt. I learn so much from every session.',
    name: 'Thomas',
    role: 'Accounting Firm Owner, Australia',
    initial: 'T',
  },
  {
    text: 'There is nobody in the world I would rather take business advice from than Damon. The man is a genius. He has transformed everything for us.',
    name: 'Paul',
    role: 'IFA Firm Owner, UK',
    initial: 'P',
  },
  {
    text: 'We have been deploying Damon and his team’s AI tools for four months now, and we estimate that we are already at 38% AI coverage.',
    name: 'Claire',
    role: 'Accounting Firm Owner, UK',
    initial: 'C',
  },
  {
    text: 'After 90 days, we are now using AI in absolutely everything. Our back office, client communications, compliance, marketing and a whole suite of new advisory services.',
    name: 'Benjamin',
    role: 'Financial Firm Owner, USA',
    initial: 'B',
  },
  {
    text: 'We are accountants, so we deal in numbers. Damon made us over £180k in six months. I set him an impossible challenge to start with, and he actually managed to do it.',
    name: 'David',
    role: 'Accounting Firm Partner, UK',
    initial: 'D',
  },
  {
    text: 'Damon must be one of the world’s leading experts in AI. We use AI for payroll and accounts, marketing, communications, basically everything. Damon has a tool for everything!',
    name: 'Harish',
    role: 'Accounting Firm Owner, UK',
    initial: 'H',
  },
  {
    text: 'It’s the best decision I have made for our firm in the past decade. Everyone is more productive and happier, and we have not had a single client complaint.',
    name: 'Scott',
    role: 'Financial Consultancy Partner, New Zealand',
    initial: 'S',
  },
];

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
