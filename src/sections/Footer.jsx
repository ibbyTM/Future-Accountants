export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-sans text-xs text-muted sm:flex-row">
        <p>© {year} Damon Millar. All rights reserved.</p>
        <p>
          Site by <span className="font-semibold text-ink">Nexus Edge</span> (Lucrum AI Ltd)
        </p>
      </div>
    </footer>
  );
}
