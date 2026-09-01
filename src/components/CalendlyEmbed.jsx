import { useEffect, useRef } from 'react';

const WIDGET_SRC = 'https://assets.calendly.com/assets/external/widget.js';

// Calendly's appearance params take bare hex. Matched to the site tokens in
// index.css so the widget reads as part of the page rather than a white box.
// Colour customisation depends on the Calendly plan; where it is unavailable
// these are ignored and the widget falls back to its own styling.
const THEME = 'background_color=f4f2ec&text_color=1a1a18&primary_color=b0104f';

/*
 * Calendly inline widget.
 *
 * Their published snippet is a div plus a <script> tag, which does not work
 * inside JSX: React never executes a script written as markup, and widget.js
 * only auto-scans for widgets when it loads, which may be before or after this
 * component mounts. So load the script once and initialise the widget by hand.
 */
export default function CalendlyEmbed({ url, className = '' }) {
  const host = useRef(null);

  useEffect(() => {
    const el = host.current;
    if (!el || !url) return;

    const src = url + (url.includes('?') ? '&' : '?') + THEME;
    const init = () => {
      if (!host.current || !window.Calendly) return;
      host.current.innerHTML = '';
      window.Calendly.initInlineWidget({ url: src, parentElement: host.current });
    };

    if (window.Calendly) {
      init();
    } else {
      // Reuse the tag if another mount already added it.
      let script = document.querySelector(`script[src="${WIDGET_SRC}"]`);
      if (!script) {
        script = document.createElement('script');
        script.src = WIDGET_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener('load', init);
      return () => {
        script.removeEventListener('load', init);
        if (el) el.innerHTML = '';
      };
    }

    // Strict mode mounts twice in development; clearing avoids two widgets.
    return () => {
      if (el) el.innerHTML = '';
    };
  }, [url]);

  return (
    <>
      <div ref={host} className={className} style={{ minWidth: 320 }} />
      <noscript>
        <p className="border border-line bg-surface p-8 text-center font-sans text-sm leading-relaxed">
          <a href={url} className="font-semibold text-accent underline underline-offset-4">
            Book your scoping call on Calendly
          </a>
        </p>
      </noscript>
    </>
  );
}
