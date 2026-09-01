/*
 * LEAD MAGNETS
 *
 * This is the only file you edit to publish a new one. Add an object below,
 * run `npm run build:host`, upload. No HTML or components to touch: the page
 * at /resources/<slug> and its entry in the index are generated from here,
 * including the browser title and search snippet.
 *
 * Fields
 *   slug      the URL: /resources/<slug>. Lowercase, hyphens, no spaces.
 *   title     the page heading, and the browser and search-result title.
 *   summary   one sentence. Shown on the index and used as the meta
 *             description, so write it for someone deciding whether to click.
 *   kicker    small caps label above the heading. Short, e.g. "Free guide".
 *   intro     one or two paragraphs of real text. This is what Google reads,
 *             so it matters: an embed alone is invisible to search engines.
 *   takeaways what the reader gets. Three to five short lines.
 *   notionUrl the Notion embed link (Share > Publish, then the /ebd/ URL).
 */
export const leadMagnets = [
  {
    slug: 'ai-guide',
    title: 'The AI guide for accounting firms',
    summary:
      'A practical starting point for firms working out where AI actually fits, and what to build first.',
    kicker: 'Free guide',
    intro: [
      'Most firms know AI matters. Far fewer know where to start, which of it is real, and what to build first so the effort compounds instead of scattering.',
      'This guide is the short version of what we built at Switch Accountants, and what we now build with other firms: the order to work in, and what each step is actually worth.',
    ],
    takeaways: [
      'Where AI pays back fastest in a practice',
      'The order to build in, and why order matters',
      'What to keep human, and what to automate',
      'How to judge the tools without wasting months',
    ],
    notionUrl: 'https://impartial-money-fa9.notion.site/ebd/3c29112c6a1f80378276ca301382fcbd',
  },
];

export const findLeadMagnet = slug => leadMagnets.find(m => m.slug === slug);
