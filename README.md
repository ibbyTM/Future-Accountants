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
| `/firm-of-the-future` | Damon's full programme, seven areas, and where the AI system sits inside it |
| `/about` | Author page: books, Business DNA System, speaking, weekly webinar |
| `/book` | Distraction-free booking page; renders Damon's Calendly scheduler (`calendarEmbedUrl` in `src/site.config.js`) |
| `/resources` | Index of the free lead magnets |
| `/resources/<slug>` | One lead magnet: written intro and takeaways, then the Notion document embedded |

**Live host**: Vercel, on Damon's team, at https://damonmillarai.com. Production
builds from `main`; push to `main` and it deploys. The working branch is
`claude/reactbits-mcp-http-0wty1s`; fast-forward `main` to it when a version is
ready to go live.

**Staging**: Bluehost cPanel at https://damon.nexusedge.tech. Build the upload
package with `npm run build:host` and follow [DEPLOY.md](DEPLOY.md).

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

- **Vite + React 19 + Tailwind CSS 4** (no router needed, anchor nav)
- **ReactBits** components (vendored in `src/components/reactbits/`, exactly 3 per brief):
  - `Noise`: subtle animated paper grain over the hero
  - `FadeContent`: scroll-reveal on the proof strip and testimonials
  - `GlareHover`: light sweep on the two primary CTA buttons

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
| Webinar sign-ups on Resources | `src/content/webinars.js` |
| The ten AI departments (home and offer) | `src/content/departments.js` |
| Books, featured and library in five themes, with summaries, bonuses and buy links | `src/content/books.js` |
| The Firm of the Future System page | `src/content/firmSystem.js` |
| Testimonials, with optional firm and photo | `src/content/testimonials.js` |
| Brand colours (stripe-press editorial: bone/ink/magenta) | `@theme` tokens in `src/index.css` |
| Section copy | `src/sections/*.jsx` |
| SEO / OG meta | `index.html` |

Anything still awaiting real content renders inside a dashed gold
`Placeholder` marker (`src/components/Placeholder.jsx`) so it can't ship
unnoticed.

## Lead magnets come from Notion

Damon's posts database in Notion is the source of every `/resources/<slug>`
page. `scripts/lead-magnets/fetch.mjs` runs before each build (`prebuild`):
with `NOTION_TOKEN` and `NOTION_DATABASE_ID` set it queries the rows ticked
"Publish to website", reads each post page, derives the entry (title from the
resource page title, summary from the post's hook line, intro from the
paragraphs, takeaways from the longest list, embed from the child page) and
writes `src/content/leadMagnets.generated.js`. That file is committed, so a
build without the token, or during a Notion outage, keeps the last good set.
Without the variables the script says so and leaves the file alone.

Per-page overrides are columns on the Notion row: Web title, Web summary, Web
kicker, Web slug, Web takeaways (one per line), and Author (Damon Millar or
Clare Thompson). The author appears as a byline on the page and travels to
GoHighLevel as `author`, so leads can be tagged per person. Authors and their
role lines live in `src/site.config.js`.

Posts that are not rows in the database, such as Clare's on her own public
Notion site, are listed in `KNOWN` in `scripts/lead-magnets/fetch.mjs` with
their site and author, and are read through the public site on every build. `scripts/lead-magnets/published.mjs`
holds the hand-chosen values for the first twelve pages and applies them unless
the row has its own.

Useful commands:

```
node scripts/lead-magnets/fetch.mjs            # refresh from Notion (needs the two variables)
node scripts/lead-magnets/fetch.mjs --setup    # add the website columns to the database, once
node scripts/lead-magnets/fetch.mjs --parity   # compare a fresh parse with the current entries
node scripts/lead-magnets/fetch.mjs --public   # regenerate from the known posts via the public site
```

Rebuilds: a Notion automation on the database (when "Publish to website" is
checked, send webhook) hits the Vercel deploy hook, and `api/rebuild.js` is
called hourly by the Vercel cron in `vercel.json` as a safety net. It needs
`DEPLOY_HOOK_URL` and `CRON_SECRET` in Vercel.

## Lead capture on resource pages

Each `/resources/<slug>` page gates its guide behind a form
(`src/components/LeadForm.jsx`). On submit the browser posts to
`/api/lead` (`api/lead.js`, a Vercel function), which validates the lead and
forwards it to the GoHighLevel inbound webhook named by the `GHL_WEBHOOK_URL`
environment variable. Set that in Vercel under Project, Settings, Environment
Variables, and locally in `.env` (see `.env.example`). Without it, dev and
preview print the payload to the terminal and the form still succeeds.

Fields sent, as JSON keys: `full_name`, `first_name`, `last_name`, `email`,
`phone`, `country`, `qualifying_answer`, `lead_magnet`, `resource_link`,
`form_variant`, `page_url`, `source`, `submitted_at`. Map them once in the
GoHighLevel workflow. `lead_magnet` and `resource_link` are the two hidden
values: they come from the magnet's entry in `src/content/leadMagnets.js`
(`title`, and `resourceLink` or the public Notion page), so a new magnet
needs nothing else.

**A/B test.** Two variants share everything but layout: `steps` (details,
then country and role) and `single` (one screen). `?form=steps` or
`?form=single` on the URL picks one; without a parameter the page uses
`site.leadForm.variant` in `src/site.config.js`. Share each link in a
different place to split traffic.

**Funnel events.** Vercel Web Analytics (enable it once in the project's
Analytics tab) records a `lead_form` event with `step` = `start`, `step1`,
`submit` or `error`, plus `variant` and `magnet`, so drop-off is visible per
step per variant. The same event is pushed to `window.dataLayer` if a tag
manager is ever added.

**Staging on Bluehost** has no functions. Set `site.leadForm.endpoint` to the
GoHighLevel webhook URL itself for that build, or leave staging to show the
dry run.

## Open questions before launch

1. **Lead magnet copy** from Damon for each entry in `src/content/leadMagnets.js` (the first entry currently ships sample text)
2. **Final domain**: the site is set to `https://damonmillarai.com`. When it moves to Damon's own domain, change it in the five root HTML files (`og:url`, `og:image`), `SITE_URL` in `vite.config.js` and `public/robots.txt`. The sitemap is generated at build from the page list, so a new guide needs nothing there.
3. **Exact magenta hex** sign-off (tokens in `src/index.css`)

Photos and book covers are live in `public/images/` (source assets from
Damon's pack, optimised).
