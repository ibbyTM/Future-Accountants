/*
 * LEAD MAGNETS
 *
 * This is the only file you edit to publish a new one. Add an object below
 * and push. No HTML or components to touch: the page at /resources/<slug>,
 * its entry in the index, the sitemap line and the browser title and search
 * snippet are all generated from here, and the lead form on the page sends
 * the CRM the title as "Lead Magnet" and the resource link as "Resource Link".
 *
 * Fields
 *   slug         the URL: /resources/<slug>. Lowercase, hyphens, no spaces.
 *   title        the page heading, and the browser and search-result title.
 *   summary      one sentence. Shown on the index and used as the meta
 *                description, so write it for someone deciding whether to click.
 *   kicker       small caps label above the heading. Short, e.g. "Free guide".
 *   intro        one or two paragraphs of real text. This is what Google reads,
 *                so it matters: an embed alone is invisible to search engines.
 *   takeaways    what the reader gets. Short lines.
 *   notionUrl    the Notion embed link: https://impartial-money-fa9.notion.site/ebd/<page id>
 *                where the page id is the 32 characters at the end of the page URL.
 *   resourceLink (optional) the direct link sent to the CRM and used by the
 *                "Open the guide" button. Leave it out and the public Notion
 *                page (notionUrl without /ebd/) is used.
 *
 * Copy is Damon's, from his LinkedIn post and the resource page, with
 * dashes rewritten. Nothing here is invented on his behalf.
 */
const notion = id => `https://impartial-money-fa9.notion.site/ebd/${id}`;

export const leadMagnets = [
  {
    slug: 'ai-native-accounting-firm-playbook',
    title: 'The AI-Native Accounting Firm Playbook',
    summary:
      '6 documents to take your practice from one person quietly using Claude to the whole team on one system.',
    kicker: 'Free playbook',
    intro: [
      'Most accountancy firms are stuck in prompting purgatory. They know AI is powerful. But the junior pastes client P&Ls into ChatGPT on a personal login, the senior refuses to open it, and the manager has a folder of prompts nobody else can find. Nobody gave them a rollout. Just a tool and a shrug.',
      'So I built it. 6 documents, one 30-day plan, all built for a UK practice on Xero. I run my own accountancy practice and use Claude in it every day. Every document in this playbook has been tested on real client work, not demo data.',
    ],
    takeaways: [
      'The One-Page AI Policy, built against ICAEW’s generative AI guidance, not a US template',
      'The Plan Chooser: Claude Team vs Enterprise for a 3 to 30 person practice',
      'The Xero Connection Guide: plug Claude into Xero once for the firm instead of once per laptop',
      'The 5 Shared Projects, each one owned by the practice, not by whoever built it',
      'The Review Standard: the two-minute check a junior runs on any AI output before it leaves the building',
      'The 30-Day Rollout Plan, week by week',
    ],
    notionUrl: notion('3d19112c6a1f80688c27d4b536dd2c8f'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/The-AI-Native-Accounting-Firm-Playbook-6-documents-to-take-a-UK-practice-on-Xero-from-one-person-qu-3d19112c6a1f80688c27d4b536dd2c8f',
  },
  {
    slug: 'claude-practice-team',
    title: 'The Claude Practice Team',
    summary:
      '5 Claude roles that watch every client’s Xero file the other 11 months you’re not doing their year end.',
    kicker: 'Free guide',
    intro: [
      'Most firm owners use Claude like a tool. But the real power is building it into an analysis engine that watches every client’s Xero file the other 11 months you’re not doing their year end.',
      'This isn’t a lazy prompt pack someone put together using AI. It’s a complete analysis system. Every role owns one part of the picture and feeds directly into the next. You connect the Xero organisation and each role hands back the work with a verdict: fine as is, worth a call, or bring it to a partner.',
    ],
    takeaways: [
      'Ledger Auditor: miscoded lines, unreconciled items and duplicate contacts caught before they reach a report',
      'Margin Mapper: gross margin by tracking category, and which client is quietly losing money on their best-selling line',
      'Cash Watcher: a 13-week view from Xero that knows about the VAT bill and the director’s loan',
      'Tax Timer: dividend vs salary, payments on account, capital spend before or after year end, flagged when the numbers say so',
      'Advisory Flagger: which five clients in your book need a call this month, and what the call is about',
    ],
    notionUrl: notion('3d19112c6a1f80ea9c7bc94d998cabcf'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/The-Claude-Practice-Team-3d19112c6a1f80ea9c7bc94d998cabcf',
  },
  {
    slug: 'xero-to-claude-set-up-guide',
    title: 'The Xero to Claude Set Up Guide',
    summary:
      'Most of the set up is one question: do you need Claude to change anything in Xero? Answer that and the rest takes about four minutes.',
    kicker: 'Free set up guide',
    intro: [
      'Xero has an official Claude connector now. It went live in May inside a wall of other product news, and it has been sitting there quietly ever since while everyone argued about the agents that haven’t shipped yet. I’ve had it reading client ledgers since the week it landed.',
      'Most of the questions I get about it are the same question in different clothes: which version am I meant to be using? There are two, which is where most practices go wrong before they start. The official connector is read-only and handles one client organisation at a time. The self-hosted route does read and write, and it’s a different job to set up. Neither of them watches anything. It waits until you ask. So I’ve written the whole thing down.',
    ],
    takeaways: [
      'The four-minute version, connecting the official connector without going near a developer account',
      'Why read-only and one organisation at a time changes how a practice actually uses it',
      'The self-hosted route, what write access opens up, and which of those writes to be careful with',
      'Which scopes to ask for, and the change in April that catches people out',
      'The questions worth putting to a live ledger, and the ones that waste ten minutes',
      'A one-minute check that tells you which route you’re on',
    ],
    notionUrl: notion('3d19112c6a1f80bea3fbe6da41627dd0'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/The-Xero-to-Claude-Set-Up-Guide-3d19112c6a1f80bea3fbe6da41627dd0',
  },
  {
    slug: 'ai-workflow-for-modern-accounting-firms',
    title: 'The AI Workflow for Modern Accounting Firms',
    summary:
      '10 workflows to roll out across your firm in Claude Cowork or ChatGPT Work, from bank feed to management pack.',
    kicker: 'Free workflows',
    intro: [
      'Most firm owners already know AI can handle a big chunk of the bookkeeping. What they don’t have is a way to roll it out, so one person uses it their own way, everyone else keeps keying invoices by hand, and nobody can say whether it’s saving a single hour.',
      'So I built it. One workflow for each stage of the bookkeeping cycle, written for a UK practice on Xero, with who runs it, who reviews it and what client data can go in set out on every one. Nobody on the team gets replaced. The same people take on more clients, and the hours your seniors spend ticking off bank lines go on advisory work you can actually bill for.',
    ],
    takeaways: [
      'The Receipt and Invoice Reader',
      'The Nominal Coder',
      'The Bank and Card Reconciliation',
      'The Purchase Ledger Check',
      'The Credit Control Chaser',
      'The Exception Report',
      'The Month-End Pack',
      'The 13-Week Cash Flow Forecast',
      'The Review Checklist',
      'The Capacity Tracker',
    ],
    notionUrl: notion('3de9112c6a1f8094a123c0e72f4fb382'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/The-AI-Workflow-for-Modern-Accounting-Firms-3de9112c6a1f8094a123c0e72f4fb382',
  },
  {
    slug: 'claude-agent-team-for-accountants',
    title: 'The Claude Agent Team for Accountants',
    summary:
      'The 7-agent system that runs the back office of my accountancy practice. One orchestrator. Six specialists. Each does one thing well.',
    kicker: 'Free playbook',
    intro: [
      'Most accountants are still copy-pasting prompts into ChatGPT. The ones pulling ahead are running agent teams inside Claude Projects.',
      'This playbook is the exact Claude agent stack I use to handle back-office work that used to take a full-time junior. One orchestrator. Six specialists. Each does one thing well. Runs on Claude Pro. No coding, no developer help.',
    ],
    takeaways: [
      'Practice Brain File: the orchestrator that holds your firm’s voice, fees, services, and client context',
      'Client Analyst: reads any client’s accounts and surfaces advisory work in 60 seconds',
      'Comms Writer: drafts year-end letters, fee letters, and HMRC responses in your voice',
      'Deadline Tracker: watches tax windows, allowance deadlines, and planning triggers across your whole book',
      'Practice Memory: remembers every client decision, fee change, and conversation across sessions',
      'The 4-step build process for every agent, 32 Claude tricks, and a copy-paste Practice Brain File template',
    ],
    notionUrl: notion('3629112c6a1f80539fe7caca8a325210'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/The-Claude-Agent-Team-for-Accountants-The-7-Agent-Stack-That-Runs-My-Back-Office-3629112c6a1f80539fe7caca8a325210',
  },
];

export const findLeadMagnet = slug => leadMagnets.find(m => m.slug === slug);

/* The direct link for a magnet: its own resourceLink, else the public Notion page. */
export const resourceLinkFor = m => m.resourceLink || m.notionUrl.replace('/ebd/', '/');
