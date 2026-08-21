/*
 * Visible marker for content that must come from Damon / the team before
 * launch. Deliberately obvious so nothing placeholder ships by accident.
 */
export default function Placeholder({ children }) {
  return (
    <span className="rounded border border-dashed border-accent/50 bg-accent/5 px-1.5 py-0.5 text-accent-soft">
      {children}
    </span>
  );
}
