export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/8 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs sm:flex-row">
        <p>© {year} Damon Millar. All rights reserved.</p>
        <p>
          Site by <span className="font-semibold text-bright/70">Nexus Edge</span> (Lucrum AI Ltd)
        </p>
      </div>
    </footer>
  );
}
