# Future Accountant — Damon Millar Funnel Site

Conversion funnel for Damon Millar's AI mentorship offer ("Future
Accountant"), built by Nexus Edge (Lucrum AI Ltd). Replaces the old
dgm84.com brochure site. Four pages, one goal: **book a call**.

| Page | Purpose |
| --- | --- |
| `/` | Long-scroll funnel (hero → proof → problem → offer → qualification → system → about → testimonials → FAQ → CTA) |
| `/offer` | Offer deep-dive for detail-seekers |
| `/about` | Author page — books, Business DNA System, speaking, weekly webinar |
| `/book` | Distraction-free booking page; renders the calendar embed once `calendarEmbedUrl` is set in `src/site.config.js` |

Built as a Vite multi-page app (real HTML per page, per-page meta).
Clean URLs: `vercel.json` has `cleanUrls: true`; Netlify's "Pretty URLs"
does the same; the Vite dev/preview servers rewrite `/about` etc. via a
small plugin in `vite.config.js`.

## Stack

- **Vite + React 19 + Tailwind CSS 4** (no router needed — anchor nav)
- **ReactBits** components (vendored in `src/components/reactbits/`, exactly 3 per brief):
  - `Noise` — subtle animated paper grain over the hero
  - `FadeContent` — scroll-reveal on the proof strip and testimonials
  - `GlareHover` — light sweep on the two primary CTA buttons

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
| Booking CTA, calendar embed URL, offer name | `src/site.config.js` |
| Brand colours (stripe-press editorial: bone/ink/magenta) | `@theme` tokens in `src/index.css` |
| Section copy | `src/sections/*.jsx` |
| SEO / OG meta | `index.html` |

Anything still awaiting real content renders inside a dashed gold
`Placeholder` marker (`src/components/Placeholder.jsx`) so it can't ship
unnoticed.

## ⚠️ Open questions — confirm with Damon before launch

1. **Calendar embed URL** — Calendly/GHL link for `/book` (`calendarEmbedUrl` in `src/site.config.js`, currently unset)
2. **Brand palette** — magenta/charcoal matched to dgm84.com; confirm exact magenta hex + any brand assets
3. **Real testimonials** — three flagged slots in `src/sections/Testimonials.jsx`; do not launch with placeholders
4. **Real photography of Damon** — flagged slot in the About section (no stock/AI imagery)
5. **Final offer name** — "Future Accountant" used throughout, pending sign-off
6. **Final domain + OG image** — `og:url` and `og-image.jpg` in `index.html` are placeholders
7. **"As seen in" media mentions** — flagged in the proof bar; needs real logos or removal
8. **AI coaching mechanism copy** — the "AI-assisted coaching" card needs Damon's confirmation of what it actually is
9. **Book cover artwork** — three flagged slots on `/about`
10. **Weekly time commitment + pricing stance** — flagged in the FAQ answers
