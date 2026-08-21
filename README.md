# Future Accountant — Damon Millar Funnel Site

Single long-scroll conversion funnel for Damon Millar's AI mentorship offer
("Future Accountant"), built by Nexus Edge (Lucrum AI Ltd). Replaces the old
dgm84.com brochure site with one page, one goal: **book a call**.

## Stack

- **Vite + React 19 + Tailwind CSS 4** (no router needed — anchor nav)
- **ReactBits** components (vendored in `src/components/reactbits/`, exactly 3 per brief):
  - `Aurora` — animated WebGL hero background (lazy-loaded, disabled for `prefers-reduced-motion`)
  - `FadeContent` — scroll-reveal on the proof bar and testimonials
  - `StarBorder` — animated border on the two primary CTA buttons

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Where to change things

| What | Where |
| --- | --- |
| Booking link, CTA label, offer name | `src/site.config.js` |
| Brand colours (light base + magenta, matched to dgm84.com) | `@theme` tokens in `src/index.css` |
| Section copy | `src/sections/*.jsx` |
| SEO / OG meta | `index.html` |

Anything still awaiting real content renders inside a dashed gold
`Placeholder` marker (`src/components/Placeholder.jsx`) so it can't ship
unnoticed.

## ⚠️ Open questions — confirm with Damon before launch

1. **Exact CTA + destination** — Calendly/GHL link or form → CRM? (`src/site.config.js`, currently `#book`)
2. **Brand palette** — magenta/charcoal matched to dgm84.com; confirm exact magenta hex + any brand assets
3. **Real testimonials** — three flagged slots in `src/sections/Testimonials.jsx`; do not launch with placeholders
4. **Real photography of Damon** — flagged slot in the About section (no stock/AI imagery)
5. **Final offer name** — "Future Accountant" used throughout, pending sign-off
6. **Final domain + OG image** — `og:url` and `og-image.jpg` in `index.html` are placeholders
7. **"As seen in" media mentions** — flagged in the proof bar; needs real logos or removal
8. **AI coaching mechanism copy** — the "AI-assisted coaching" card needs Damon's confirmation of what it actually is
