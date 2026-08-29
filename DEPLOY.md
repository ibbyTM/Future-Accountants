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

This is two steps, because **DNS for `nexusedge.tech` is served by 123-reg's
nameservers, not Bluehost's**. Bluehost hosts the files; 123-reg answers the
DNS queries. cPanel will look like it succeeded and the subdomain still will
not resolve until you add the record at 123-reg.

> The live nameservers are `ns51.domaincontrol.com` and
> `ns52.domaincontrol.com`. Those look like GoDaddy's because 123-reg is a
> GoDaddy company and runs on the same DNS platform, but you manage them from
> the 123-reg control panel. If DNS were delegated to Bluehost you would see
> `ns1.bluehost.com` / `ns2.bluehost.com` instead. Worth re-checking if you
> ever change nameservers: `nslookup -type=NS nexusedge.tech`.

### 2a. Tell Bluehost to serve it

In cPanel:

1. **Domains → Create A New Domain**
2. Domain: `damon.nexusedge.tech`
3. Untick "Share document root" if it is ticked, so it gets its own folder.
4. Document root: `public_html/damon`
5. Create.

Afterwards, check **Files & Access → Document Root** and note what it actually
says. Bluehost may have created a generated folder name instead of the one you
typed; step 3 depends on knowing the real value.

While you are in cPanel, note the **Shared IP Address** (right sidebar of the
main page, or under **General Information**). You need it for the next step.
It should match the IP `nexusedge.tech` already points at: **162.241.252.128**.
If cPanel shows a different IP, use cPanel's.

### 2b. Add the DNS record at 123-reg

In the 123-reg control panel: **Domain names → nexusedge.tech → Manage DNS**
(sometimes listed as *Advanced DNS* or *Manage DNS records*), then add a record:

| Field | Value |
| --- | --- |
| Type | `A` |
| Hostname | `damon` (just that, not the full hostname) |
| Destination / Points to | the Bluehost shared IP from step 2a |
| TTL | leave the default (1 hour) |

Save. Propagation is usually minutes, occasionally up to an hour. Check it with
`nslookup damon.nexusedge.tech` in a terminal, or an online DNS checker: when it
returns the Bluehost IP, you are ready to continue.

Do not run AutoSSL (step 4) until this resolves. The certificate authority has
to reach the hostname to issue the certificate, so it fails otherwise.

---

## 3. Upload

**First, confirm the real document root.** Bluehost's "Websites" flow does not
always use the folder you named: it generates one like
`~/public_html/website_490bda5b`. Uploading to the wrong folder gives a 500 on
every request, because Apache is pointed at a folder that does not exist.

Find it in Bluehost under **Websites → [your site] → Files & Access →
Document Root**. Use whatever it says. For this site it is currently:

```
~/public_html/website_490bda5b
```

Then:

1. **Files & Access → File Manager**, open that exact folder. If it does not
   exist yet, create it in `public_html` with precisely that name.
2. Delete anything sitting there as a placeholder (often `index.html` or a
   `cgi-bin` folder; a stray `index.html` will hide the real site).
3. **Upload**, choose `future-accountants-site.zip`, wait for it to finish.
4. Back in File Manager, right-click the zip → **Extract**, into the same
   folder.
5. Delete the zip once extracted.

`index.html` must sit *directly* in that folder, not nested inside another
folder such as `dist/`.

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

**500 Internal Server Error on everything, including images.** This is
`.htaccess`: if even `/favicon.svg` returns 500, Apache is rejecting the
directory config before it serves anything, so it is not your content.

The known cause on Bluehost was an `Options -MultiViews` line, which shared
hosts refuse because they do not grant `AllowOverride Options`. It has been
removed from the shipped file. If you are on an older copy, fix it in place:
File Manager → **Settings → Show Hidden Files**, right-click `.htaccess` →
**Edit**, delete the `Options -MultiViews` line, save. No re-upload needed.

If a 500 somehow persists, swap in the fallback: the build includes
`htaccess-minimal.txt`, which holds only the clean-URL rewrite. Rename the
current `.htaccess` to `htaccess-full.txt`, then rename `htaccess-minimal.txt`
to `.htaccess`. If that works, the problem is in one of the optional blocks and
I can bisect from there.

To rule `.htaccess` out entirely, rename it to `htaccess.txt`: the site will
load but every link except the home page will 404, which itself confirms the
file is the only thing at fault.

**Site does not resolve at all.** Almost certainly the 123-reg A record
(step 2b) is missing, misnamed or still propagating. Creating the subdomain in
cPanel alone is not enough on this domain, because 123-reg holds the DNS. Check
the hostname is `damon` and not `damon.nexusedge.tech`: the panel appends the
domain itself, so the latter becomes `damon.nexusedge.tech.nexusedge.tech`.
If it looks right, wait, and try mobile data to rule out local DNS caching.

**AutoSSL fails to issue.** The hostname was not resolving when it ran. Confirm
DNS first, then re-run AutoSSL.

**"Your connection is not private" / `ERR_CERT_COMMON_NAME_INVALID`.** The
server is presenting Bluehost's default `*.bluehost.com` certificate because no
certificate exists for the subdomain yet. Expected before AutoSSL has run.
Finish steps 3 and 4; the warning clears as soon as the certificate is issued.
Chrome may refuse to let you click through because of HSTS: that is fine, you
do not need to. To test in the meantime, clear the pin at
`chrome://net-internals/#hsts` under "Delete domain security policies".

**500 on every URL, and the error log says `AH00112: Warning: DocumentRoot
[...] does not exist`.** The vhost points at a folder that is not there, so
nothing can be served and `.htaccess` is irrelevant. Compare **Files & Access →
Document Root** with where you actually uploaded, and make them match: either
create/rename the folder to the document root's exact name, or point the
document root at your folder. This is the likeliest cause of a blanket 500,
ahead of `.htaccess`, when even static images fail.

**Bluehost's own 404 page appears instead of the site.** If the response
redirects to `/404.html` and the headers carry `host-header:
c2hhcmVkLmJsdWVob3N0LmNvbQ==` (base64 for `shared.bluehost.com`), the hostname
is reaching the server but is not mapped to your files. Either the subdomain
was not created in cPanel (step 2a), its document root does not match where you
uploaded, or the folder is empty. Check **Domains** in cPanel lists
`damon.nexusedge.tech` with document root `public_html/damon`, then confirm
`index.html` is in that exact folder.

---

## Still to do before launch

- **The booking calendar is a placeholder.** Once Damon confirms the Calendly
  or GoHighLevel link, set `calendarEmbedUrl` in `src/site.config.js`, rebuild
  and re-upload. Until then `/book` shows a dashed placeholder box.
- Confirm the exact magenta with Damon if he has a brand hex.
- A social share image for link previews (I can generate one from the hero
  photo).
