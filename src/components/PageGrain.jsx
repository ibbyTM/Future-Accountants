import Noise from './reactbits/Noise.jsx';

/*
 * Fixed full-page paper grain (ReactBits Noise), one canvas per page.
 * Kept faint: it gives every background material without registering
 * as an effect.
 */
export default function PageGrain() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] overflow-hidden opacity-45">
      <Noise patternSize={220} patternAlpha={7} patternRefreshInterval={4} />
    </div>
  );
}
