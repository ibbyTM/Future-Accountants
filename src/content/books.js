/*
 * Damon's books. Edit this file, nothing else, to change what the About
 * page shows.
 *
 *   featured   the three shown large, in order, with his line under each
 *   catalogue  the rest, shown as a grid of covers
 *
 * Every entry takes:
 *   title    the book
 *   cover    path under public/, relative to the site root
 *   summary  a short paragraph in Damon's words. Leave '' and nothing shows.
 *   buyUrl   a link to buy it. Leave null and no link shows.
 *
 * Covers are named per title on purpose, so a book can be added, removed
 * or reordered without shifting anyone else's cover.
 */
export const featured = [
  {
    title: 'The AI Accountant?',
    edition: 'Forthcoming',
    line: 'Building the Firm of the Future. The book behind these programmes.',
    cover: 'images/cover-ai-accountant.jpg',
    alt: 'The AI Accountant? Building the Firm of the Future, by Damon Millar',
    summary: '',
    buyUrl: null,
  },
  {
    title: 'Business DNA',
    edition: '10th Anniversary Edition',
    line: 'The bestselling blueprint for unlocking the hidden potential in your business.',
    cover: 'images/cover-business-dna.jpg',
    alt: 'Business DNA, 10th Anniversary Edition, by Damon Millar and Clare Thompson',
    summary: '',
    buyUrl: null,
  },
  {
    title: 'Artificially Intelligent!',
    edition: 'With Clare Thompson',
    line: '101 ways to unleash the power of AI for your business.',
    cover: 'images/cover-artificially-intelligent.jpg',
    alt: 'Artificially Intelligent! by Damon Millar and Clare Thompson',
    summary: '',
    buyUrl: null,
  },
];

const shelf = (title, n) => ({
  title,
  cover: `images/books/cover-${String(n).padStart(2, '0')}.jpg`,
  summary: '',
  buyUrl: null,
});

/* Business DNA (cover-07) is featured above, so it is not repeated here. */
export const catalogue = [
  shelf('101 Business Growth Strategies', 1),
  shelf('101 Unbreakable Rules for Business Success', 2),
  shelf('101 Ways to Save Business Taxes', 3),
  shelf('The Family Business Bible', 4),
  shelf('Research and Development Tax Relief', 5),
  shelf('Damon Makes You Smarter Than a Business Professor', 6),
  shelf('Legal Tax Planning', 8),
  shelf('The Ultimate Guide to Productivity and Time Management', 9),
  shelf('Covid Bounce Back!', 10),
  shelf('From the Trenches', 11),
  shelf('The Accidental Accountant', 12),
  shelf('Legal Tax Planning for Business Owners', 13),
  shelf('Did You Miss The Revolution?', 14),
];
