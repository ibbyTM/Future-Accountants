export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold leading-tight text-bright sm:text-4xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-base leading-relaxed sm:text-lg">{children}</p>}
    </div>
  );
}
