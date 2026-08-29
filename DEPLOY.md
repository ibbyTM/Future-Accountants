# Deploying to Bluehost (cPanel)

Target: **https://damon.nexusedge.tech**

The site is fully static: plain HTML, CSS, JS and images. There is no server
code, no database and no Node runtime needed on the host. You build it here,
then upload a folder of files.

---

## 1. Build the upload package

```
npm install          # first time only
npm run build:host
```

This produces `future-accountants-site.zip` in the project root. It contains
the whole site, built for a domain root (not a subfolder), including a
`.htaccess` file that Apache needs.

> Use `build:host`, not `build`. Both compile the site, but `build:host` also
> makes the zip.

---

## 2. Create the subdomain (once)

In cPanel:

1. **Domains → Create A New Domain**
2. Domain: `damon.nexusedge.tech`
3. Untick "Share document root" if it is ticked, so it gets its own folder.
4. Document root: `public_html/damon`
5. Create.

Bluehost adds the DNS record itself because `nexusedge.tech` is already on the
account. It usually resolves within minutes, occasionally up to an hour.

---

## 3. Upload

1. **Files → File Manager**, open `public_html/damon`.
2. Delete anything cPanel put there as a placeholder (often `index.html` or a
   `cgi-bin` folder; leaving a stray `index.html` will hide the real site).
3. **Upload**, choose `future-accountants-site.zip`, wait for it to finish.
4. Back in File Manager, right-click the zip → **Extract**, into the same
   folder.
5. Delete the zip once extracted.

The folder should now hold `index.html`, `about.html`, `offer.html`,
`book.html`, `favicon.svg`, `assets/`, `images/` and `.htaccess`.

**Check `.htaccess` is actually there.** File Manager hides dotfiles by
default: **Settings** (top right) → tick **Show Hidden Files (dotfiles)** →
Save. If it is missing, the internal links will 404 (see Troubleshooting).

---

## 4. Turn on HTTPS

**Security → SSL/TLS Status**, tick `damon.nexusedge.tech`, then **Run
AutoSSL**. The free certificate is usually issued within a few minutes.

The `.htaccess` already forces HTTPS, so once the certificate exists, visitors
on `http://` are redirected automatically. Do not test the redirect before the
certificate is issued, or the browser will warn.

---

## 5. Check it

Open https://damon.nexusedge.tech and confirm:

- The home page loads with images and the correct fonts.
- **Every nav link works**: The Offer, About Damon, Book a Call, the wordmark,
  and the footer links. These use clean URLs (`/offer`, not `/offer.html`), so
  they are the first thing to break if `.htaccess` did not upload.
- On a phone: the menu button opens, its links work, the sticky booking bar
  appears as you scroll.
- `https://damon.nexusedge.tech/offer.html` redirects to `/offer`.

---

## Redeploying after changes

1. `npm run build:host`
2. In File Manager, delete the old `assets` and `images` folders and the four
   `.html` files (leave `.htaccess` unless it changed).
3. Upload and extract the new zip.
4. Hard refresh (Ctrl+F5 / Cmd+Shift+R).

HTML is served uncached, so content changes appear immediately. CSS, JS and
images are cached for a long time, but every build gives them new filenames,
so visitors always get the current version.

---

## Troubleshooting

**Home page works, every other link 404s.** `.htaccess` is missing or was not
extracted. Enable hidden files in File Manager and confirm it sits next to
`index.html`. It is included in the zip.

**Page loads but is unstyled, or the console shows 404s for `/assets/...`.**
The build was made for the GitHub Pages subpath. Rebuild with
`npm run build:host` (no `VITE_BASE` set) and re-upload.

**500 Internal Server Error.** Almost always `.htaccess`. Rename it to
`htaccess.txt` to confirm; if the error clears, tell me which line and I will
trim it. Every block is already wrapped so an unavailable Apache module is
skipped rather than fatal.

**Site does not resolve at all.** DNS has not propagated. Check
**Domains** in cPanel shows the subdomain, then wait; try a different network
or your phone on mobile data to rule out local DNS caching.

---

## Still to do before launch

- **The booking calendar is a placeholder.** Once Damon confirms the Calendly
  or GoHighLevel link, set `calendarEmbedUrl` in `src/site.config.js`, rebuild
  and re-upload. Until then `/book` shows a dashed placeholder box.
- Confirm the exact magenta with Damon if he has a brand hex.
- A social share image for link previews (I can generate one from the hero
  photo).
