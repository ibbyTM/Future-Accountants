/*
 * Oversized faint italic numeral set behind a section's content, part of
 * the site's ledger indexing language. Decorative and desktop-only; the
 * host section must be `relative overflow-hidden` and keep its content
 * wrapper `relative` so text stacks above.
 */
export default function GhostNumeral({ children, tone = 'ink', className = '' }) {
  const color = tone === 'ground' ? 'text-ground/[0.05]' : 'text-ink/[0.04]';
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute hidden select-none font-display italic leading-none lg:block ${color} ${className}`}
    >
      {children}
    </span>
  );
}
