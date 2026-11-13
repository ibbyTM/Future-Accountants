/*
 * A Loom video in the site's frame. `autoplay` starts it as soon as it
 * renders, which browsers allow right after a click (the lead form submit);
 * on a page that opens without one, Loom falls back to its play button.
 * Which video shows where is set in src/site.config.js under `videos`.
 */
const PARAMS = 'hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true';

export default function LoomVideo({ id, title, length, aspect = '4/3', autoplay = false, className = '' }) {
  const src = `https://www.loom.com/embed/${id}?${PARAMS}${autoplay ? '&autoplay=1' : ''}`;
  const ratio = aspect === 'video' ? 'aspect-video' : 'aspect-[4/3]';
  return (
    <figure className={className}>
      <div className={`${ratio} w-full overflow-hidden border border-line bg-ink shadow-[0_24px_48px_rgba(26,26,24,0.18)]`}>
        <iframe
          src={src}
          title={title}
          loading={autoplay ? 'eager' : 'lazy'}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="size-full"
        />
      </div>
      <figcaption className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        {title}
        {length ? ` · ${length}` : ''}
      </figcaption>
    </figure>
  );
}
