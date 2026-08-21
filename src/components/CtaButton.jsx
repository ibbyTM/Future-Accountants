import GlareHover from './reactbits/GlareHover.jsx';
import { site } from '../site.config.js';

/*
 * Primary conversion button — a flat ink rectangle (radius 0, editorial
 * system) with a ReactBits GlareHover sweep on hover. Used in the hero
 * and final CTA only.
 */
export default function CtaButton({ children }) {
  return (
    <a href={site.bookingUrl} className="inline-block">
      <GlareHover
        width="auto"
        height="auto"
        background="var(--color-ink)"
        borderRadius="0px"
        borderColor="var(--color-ink)"
        glareColor="#f1ecde"
        glareOpacity={0.25}
        glareSize={220}
        transitionDuration={700}
      >
        <span className="block px-9 py-4 font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#f1ecde]">
          {children ?? site.ctaLabel}
        </span>
      </GlareHover>
    </a>
  );
}
