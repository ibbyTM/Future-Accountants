# Firm of the Future | Damon Millar Funnel Site

Conversion funnel for Damon Millar's Firm of the Future AI programmes,
built by Nexus Edge (Lucrum AI Ltd). Content is sourced from the "AI
Programmes for Firms" deck. Four core pages plus a resources library, one goal: **book a scoping
call**.
No pricing appears on the site by design; investment is covered on the call.

| Page | Purpose |
| --- | --- |
| `/` | Long-scroll funnel (hero → proof → problem → offer → qualification → system → about → testimonials → FAQ → CTA) |
| `/offer` | Offer deep-dive for detail-seekers |
| `/about` | Author page — books, Business DNA System, speaking, weekly webinar |
| `/book` | Distraction-free booking page; renders Damon's Calendly scheduler (`calendarEmbedUrl` in `src/site.config.js`) |
| `/resources` | Index of the free lead magnets |
| `/resources/<slug>` | One lead magnet: written intro and takeaways, then the Notion document embedded |

**Live host**: Bluehost cPanel at https://damon.nexusedge.tech (staging). Build
the upload package with `npm run build:host` and follow [DEPLOY.md](DEPLOY.md).

Clean URLs are configured per host: `public/.htaccess` for Apache, `vercel.json`
for Vercel. Both files ship in the repo, and each host ignores the other's.

**Preview**: every push to the working branch also deploys to GitHub Pages
at https://ibbytm.github.io/Future-Accountants/ (via
`.github/workflows/deploy-pages.yml`).

Built as a Vite multi-page app (real HTML per page, per-page meta).
Clean URLs (`/offer`, not `/offer.html`) are handled per host: `public/.htaccess`
rewrites them on Apache/cPanel, `vercel.json` sets `cleanUrls: true`, Netlify's
"Pretty URLs" does the same, and the Vite dev/preview servers use a small
plugin in `vite.config.js`.

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
| Lead magnets (add one, edit one) | `src/content/leadMagnets.js` |
| Brand colours (stripe-press editorial: bone/ink/magenta) | `@theme` tokens in `src/index.css` |
| Section copy | `src/sections/*.jsx` |
| SEO / OG meta | `index.html` |

Anything still awaiting real content renders inside a dashed gold
`Placeholder` marker (`src/components/Placeholder.jsx`) so it can't ship
unnoticed.

## Open questions before launch

1. **Lead magnet copy** from Damon for each entry in `src/content/leadMagnets.js` (the first entry currently ships sample text)
2. **Final domain** (`og:url` in the four HTML files, currently a placeholder)
3. **Exact magenta hex** sign-off (tokens in `src/index.css`)

Photos and book covers are live in `public/images/` (source assets from
Damon's pack, optimised).
