/*
 * Damon's 21 books. Edit this file, nothing else, to change what the About
 * page shows.
 *
 *   featured   the three shown large, in order
 *   themes     the library's sections, in order, with the filter label
 *   library    the other eighteen, each tagged with a theme key
 *
 * Every entry takes:
 *   title    the book
 *   cover    path under public/, relative to the site root
 *   summary  Damon's profile of the book, from his Book Summaries document
 *   bonus    the "Buy today bonus" that comes with it. '' hides the line.
 *   buyUrl   the Stripe link to buy it. null hides the button.
 *
 * Covers are named per title on purpose, so a book can be added, removed
 * or reordered without shifting anyone else's cover.
 */
export const featured = [
  {
    title: 'The AI Accountant?',
    edition: 'Latest',
    line: 'Building the Firm of the Future. The book behind these programmes.',
    cover: 'images/cover-ai-accountant.jpg',
    alt: 'The AI Accountant? Building the Firm of the Future, by Damon Millar',
    summary:
      'Accountancy is changing faster than at any point in its history. The AI Accountant? is my blueprint for what comes next: an accountancy firm where AI doesn’t simply make existing tasks quicker, but fundamentally changes how the entire practice operates. Drawing on my experience of building and transforming my own accountancy firm, the book explores how AI can reshape compliance, tax, advisory, client service, marketing, management and the day-to-day work of accountants. It looks beyond individual AI tools to the bigger prize: building the AI-powered firm of the future.',
    bonus:
      'The AI Accountant Implementation Course, an exclusive online programme showing you how to start applying the ideas, tools, prompts and workflows inside your own practice.',
    buyUrl: null,
  },
  {
    title: 'Business DNA',
    edition: '10th Anniversary Edition',
    line: 'The bestselling blueprint for unlocking the hidden potential in your business.',
    cover: 'images/cover-business-dna.jpg',
    alt: 'Business DNA, 10th Anniversary Edition, by Damon Millar and Clare Thompson',
    summary:
      'Why do some businesses consistently outperform their competitors while others struggle despite enormous effort? Business DNA brings together the system I’ve developed through decades of building businesses, advising entrepreneurs and studying what makes exceptional companies work. It covers the fundamentals that determine business success: positioning, pricing, marketing, sales, customer maximisation, profit, cash flow, people, systems, growth, scale and ultimately business value and exit. It’s not simply a collection of business theories. It’s a practical operating system for diagnosing where your business is today, identifying what’s holding it back and systematically improving its DNA.',
    bonus:
      'The Business DNA 90-Day Accelerator: assessments, action plans, worksheets and practical challenges to help you implement the Business DNA System.',
    buyUrl: null,
  },
  {
    title: 'Artificially Intelligent!',
    edition: 'With Clare Thompson',
    line: '101 ways to unleash the power of AI for your business.',
    cover: 'images/cover-artificially-intelligent.jpg',
    alt: 'Artificially Intelligent! by Damon Millar and Clare Thompson',
    summary:
      'AI isn’t really about technology. For a business owner, it’s about what technology can now enable you to do: faster, cheaper and often better than was previously possible. Artificially Intelligent! cuts through the hype to show entrepreneurs how to use AI practically across marketing, sales, customer service, productivity, finance, decision-making and operations. You don’t need to become an AI expert. You need to understand what is possible, where AI can make the biggest difference and how to put it to work.',
    bonus:
      'Build Your AI Business, 30-Day Challenge: identify your biggest AI opportunities, build useful prompts and workflows, automate repetitive work and create your own AI Business Action Plan.',
    buyUrl: null,
  },
];

/* Section order and filter labels, as Damon set them out. */
export const themes = [
  { key: 'business', name: 'Business Growth & Success', label: 'Business' },
  { key: 'marketing', name: 'Marketing, Productivity & Entrepreneurship', label: 'Marketing' },
  { key: 'tax', name: 'Tax & Finance', label: 'Tax' },
  { key: 'ai', name: 'AI, Change & Resilience', label: 'AI & Change' },
  { key: 'wealth', name: 'Wealth & Mindset', label: 'Wealth' },
];

const book = (theme, n, title, summary, bonus) => ({
  theme,
  title,
  cover: `images/books/cover-${String(n).padStart(2, '0')}.jpg`,
  summary,
  bonus,
  buyUrl: null,
});

export const library = [
  /* Business Growth & Success */
  book('business', 1, '101 Business Growth Strategies',
    '101 practical ideas for growing a business, covering marketing, sales, customers, pricing, profits and more. Dip in anywhere, find the strategies most relevant to your business and start putting them to work.',
    '101 Business Growth Strategies AI Coach: identifies the best strategies for your business and creates a personalised 90-day growth plan.'),
  book('business', 2, '101 Unbreakable Rules for Business Success',
    'The lessons, principles and rules I’ve learned from decades of advising and working with entrepreneurs: 101 practical insights into the decisions, disciplines and behaviours that separate successful businesses from the rest.',
    'The Business Success Scorecard: measure your business against the 101 rules and discover your priorities for improvement.'),
  book('business', 4, 'The Family Business Bible',
    'Family businesses create opportunities, and challenges, unlike almost any other company. A practical guide to ownership, relationships, remuneration, succession, tax, governance and protecting both the business and the family.',
    'The Family Business Toolkit: health check, succession planner, family meeting agenda and governance templates.'),
  book('business', 11, 'From the Trenches',
    'Business lessons learned where they really matter: in the trenches. Drawing on real-world businesses, entrepreneurs, problems and opportunities, this is practical business thinking rather than textbook theory.',
    'From the Trenches, 25 Business Case Studies: test yourself against real-world business situations before discovering the recommended strategy.'),
  book('business', 6, 'Damon Makes You Smarter Than a Business Professor',
    'Business doesn’t need to be complicated. This book strips away the theory and explores the practical lessons, ideas and strategies that actually matter when you’re trying to build a successful business.',
    'Business Professor in Your Pocket: an AI business adviser you can challenge with your own problems, decisions and ideas.'),
  book('business', 18, 'Business DNA, The Original Edition',
    'The book that started the Business DNA journey, introducing my original framework for understanding what makes successful businesses work and the principles owners can use to improve growth, profitability and performance.',
    'Business DNA, Then & Now: an exclusive masterclass revealing what I’ve learned since the original book and how the system has evolved over the last decade.'),

  /* Marketing, Productivity & Entrepreneurship */
  book('marketing', 17, 'Millar on Marketing',
    'Practical, results-driven marketing for business owners. Discover how to generate more leads, sharpen your message, stand out from competitors and turn marketing into a systematic engine for growth.',
    'The 100-Lead Marketing Machine: AI Marketing Adviser, 90-Day Marketing Planner, campaign templates and tools to help generate your next 100 leads.'),
  book('marketing', 9, 'The Ultimate Guide to Productivity and Time Management',
    'Being busy isn’t the same as being productive. Learn how to take control of your time, eliminate low-value activity, prioritise what matters and achieve significantly more without simply working longer hours.',
    'The 10-Hour Time Challenge: a 30-day programme designed to find and reclaim 10 hours from your working week.'),
  book('marketing', 16, 'How to Sell More Books',
    'Writing a book is only half the battle. Discover practical ways to market your work, reach more readers and turn a published book into something people actually discover, buy and recommend.',
    'The AI Book Marketing Toolkit: promotional prompts, social content, an AI marketing planner and a 30-day book campaign.'),
  book('marketing', 12, 'The Accidental Accountant',
    'An unconventional look at business, accounting and the lessons learned along the way. Part experience and part practical business education, exploring what decades spent alongside business owners can teach us about building better companies.',
    'The Accidental Accountant’s Business Toolkit: 25 financial ratios, calculations, checklists and tools for understanding what’s really happening inside a business.'),

  /* Tax & Finance */
  book('tax', 3, '101 Ways to Save Business Taxes',
    '101 legitimate ideas for reducing the amount of tax you and your business pay, from simple opportunities frequently overlooked to more sophisticated planning strategies.',
    'The 101-Point Tax Saving Checklist: identify the tax-planning opportunities worth discussing with your accountant.'),
  book('tax', 8, 'Legal Tax Planning',
    'There is an enormous difference between tax evasion and intelligent, legitimate tax planning. Explore opportunities available within the rules and why good tax planning should be an ongoing part of running a successful business.',
    'Tax Planning Masterclass: the core principles of intelligent tax planning and the questions every business owner should ask.'),
  book('tax', 13, 'Legal Tax Planning for Business Owners',
    'A later, practical guide for owners who want to understand how sensible, legitimate tax planning can protect more of what they earn and become part of their wider financial strategy.',
    'The Business Owner’s Annual Tax Planning Review: a structured review covering company, personal, remuneration, pensions, succession and exit.'),
  book('tax', 5, 'Research and Development Tax Relief',
    'A practical guide to understanding R&D tax relief: what qualifies, how claims work, where opportunities arise and the mistakes businesses need to avoid.',
    'R&D Eligibility Toolkit: project assessment, qualifying-cost checklist and evidence framework.'),

  /* AI, Change & Resilience */
  book('ai', 14, 'Did You Miss The Revolution?',
    'Business changes quickly, and the greatest danger is failing to notice until everyone else has moved ahead. An exploration of changing technology, markets and business models and why entrepreneurs must continually challenge how they operate.',
    'The 2026 AI Revolution Update: an exclusive masterclass, The Revolution Got Bigger, What AI Changes Next.'),
  book('ai', 19, 'Covid Fight Back!',
    'Written in the midst of the Covid lockdowns to help business owners protect cash, adapt quickly, find opportunities and keep moving through an unprecedented crisis. Its lessons in resilience and decisive leadership remain relevant today.',
    /* His document cuts off after "resilience scorecard". Name only until he sends the rest. */
    'The Crisis-Proof Business Toolkit.'),
  book('ai', 10, 'Covid Bounce Back!',
    'Written as businesses faced the challenge of emerging from Covid, this book explored how owners could rebuild, adapt and emerge stronger. Its bigger lesson remains timeless: how resilient businesses respond to extraordinary disruption.',
    'The Business Resilience Stress Test: assess cash, customers, people, systems, suppliers and risk and create your resilience action plan.'),

  /* Wealth & Mindset */
  book('wealth', 15, 'Built, Not Born',
    'Millionaires aren’t born different, they think, choose and behave differently. Built, Not Born explores the habits, decisions, disciplines and mindsets of self-made millionaires and the principles anyone can apply to build greater wealth, freedom and success.',
    'The Millionaire Mindset Scorecard: discover how closely your habits and behaviours match those of self-made millionaires and receive a personalised action plan.'),
];
