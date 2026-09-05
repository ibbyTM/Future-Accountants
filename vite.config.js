import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { leadMagnets } from './src/content/leadMagnets.js';

const root = __dirname;

/*
 * Generate one HTML entry per lead magnet from src/content/leadMagnets.js,
 * so publishing a new one is a data edit rather than a code change. Each
 * gets its own title and description, which is the part search engines read.
 * The files are written into resources/ and are gitignored.
 */
const escape = s =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const pageHtml = ({ title, description, entry }) => `<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escape(title)}</title>
    <meta name="description" content="${escape(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#f4f2ec" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Manrope:wght@500;600;700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/${entry}"></script>
  </body>
</html>
`;

function generateResourcePages() {
  const dir = resolve(root, 'resources');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const inputs = {};

  const index = resolve(dir, 'index.html');
  const indexHtml = pageHtml({
    title: 'Resources | Guides for firms building with AI',
    description:
      'Practical AI guides for accounting firms from Damon Millar. Free to read, nothing to fill in.',
    entry: 'resources-main.jsx',
  });
  if (!existsSync(index) || readFileSync(index, 'utf8') !== indexHtml) {
    writeFileSync(index, indexHtml);
  }
  inputs.resources = index;

  for (const m of leadMagnets) {
    const file = resolve(dir, `${m.slug}.html`);
    const html = pageHtml({
      title: `${m.title} | Damon Millar`,
      description: m.summary,
      entry: 'lead-magnet-main.jsx',
    });
    if (!existsSync(file) || readFileSync(file, 'utf8') !== html) writeFileSync(file, html);
    inputs[`resource-${m.slug}`] = file;
  }

  return inputs;
}

const resourceInputs = generateResourcePages();

/*
 * Serve extensionless URLs in dev and preview the way Apache does in
 * production via public/.htaccess: /offer serves offer.html, and a
 * directory with an index.html serves that.
 */
const rewrite = url => {
  const [path, query = ''] = url.split('?');
  const clean = path.replace(/\/$/, '');
  if (!clean || /\.[a-z0-9]+$/i.test(clean)) return null;
  if (existsSync(resolve(root, `.${clean}.html`))) return `${clean}.html${query && '?' + query}`;
  if (existsSync(resolve(root, `.${clean}`, 'index.html'))) {
    return `${clean}/index.html${query && '?' + query}`;
  }
  return null;
};

const cleanUrls = () => {
  const middleware = (req, _res, next) => {
    const next_ = rewrite(req.url);
    if (next_) req.url = next_;
    next();
  };
  // Block bodies on purpose: returning a value from these hooks makes Vite
  // treat it as a post hook and call it, and returning the connect app
  // crashes the server.
  return {
    name: 'clean-urls',
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
};

export default defineConfig({
  // VITE_BASE lets the GitHub Pages workflow build for the repo subpath;
  // local dev/preview and the eventual real domain use the default '/'.
  base: process.env.VITE_BASE || '/',
  // Real HTML per page, so no SPA fallback: an unknown URL should 404 in dev
  // and preview exactly as it does on the host, rather than quietly serving
  // the home page.
  appType: 'mpa',
  plugins: [react(), tailwindcss(), cleanUrls()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about.html'),
        offer: resolve(root, 'offer.html'),
        book: resolve(root, 'book.html'),
        ...resourceInputs,
      },
    },
  },
});
