import StarBorder from './reactbits/StarBorder.jsx';
import { site } from '../site.config.js';

/*
 * Primary conversion button — ReactBits StarBorder with the brand accent.
 * Used in the hero and the final CTA only, so the effect stays special.
 */
export default function CtaButton({ className = '', children }) {
  return (
    <StarBorder
      as="a"
      href={site.bookingUrl}
      color="var(--color-accent)"
      speed="5s"
      className={`transition-transform duration-200 hover:scale-[1.03] focus-visible:scale-[1.03] ${className}`}
    >
      <span className="font-bold tracking-wide text-white">
        {children ?? site.ctaLabel}
      </span>
    </StarBorder>
  );
}
