import GlareHover from './reactbits/GlareHover.jsx';
import { site } from '../site.config.js';

/*
 * Primary conversion button — a flat rectangle (radius 0, editorial system)
 * with a ReactBits GlareHover sweep on hover. tone="ink" for cream grounds,
 * tone="ground" for the ink final-CTA band.
 */
export default function CtaButton({ tone = 'ink', children }) {
  const onInk = tone === 'ground';
  return (
    <a href={site.bookingUrl} className="inline-block">
      <GlareHover
        width="auto"
        height="auto"
        background={onInk ? 'var(--color-ground)' : 'var(--color-ink)'}
        borderRadius="0px"
        borderColor={onInk ? 'var(--color-ground)' : 'var(--color-ink)'}
        glareColor={onInk ? '#1a1a18' : '#f1ecde'}
        glareOpacity={onInk ? 0.15 : 0.25}
        glareSize={220}
        transitionDuration={700}
      >
        <span
          className={`block px-9 py-4 font-sans text-sm font-bold uppercase tracking-[0.18em] ${
            onInk ? 'text-ink' : 'text-[#f1ecde]'
          }`}
        >
          {children ?? site.ctaLabel}
        </span>
      </GlareHover>
    </a>
  );
}
