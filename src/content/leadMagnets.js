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
  {
    slug: 'xero-workflows-for-claude-opus-5-5',
    title: '10 Xero Workflows for Claude Opus 5.5',
    summary:
      'Job sheet to month-end journal, with every one left in Xero as a draft for you to approve.',
    kicker: 'Free workflows',
    intro: [
      'Every guide to Claude and Xero I’ve read, including my own, ends in the same place: a report, a list of queries, or a table of suggested journals. Then somebody on the team keys all of it into Xero by hand, line by line, which is the part that took the time in the first place.',
      'So I built it. Ten workflows, written for a UK practice on Xero, each one ending with a draft and a person clicking approve. Every action in it is one the connector actually has, checked against Xero’s own developer documentation, and none of them can approve, pay or reconcile anything.',
    ],
    takeaways: [
      'Job sheet to draft invoices',
      'Variable monthly invoices',
      'Rechargeable costs',
      'Supplier PDF to draft bill',
      'Receipts to bank lines',
      'Accruals and prepayments',
      'Depreciation',
      'Credit notes',
      'Contact tidy-up',
      'Your own out-of-scope work',
      'Plus the standing rules, the never list, and a review routine that takes minutes',
    ],
    notionUrl: notion('3e99112c6a1f80069366fdb0d43d7ff7'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/10-Xero-Workflows-for-Claude-Opus-5-5-Job-Sheet-to-Month-End-Journal-All-as-Drafts-3e99112c6a1f80069366fdb0d43d7ff7',
  },
  {
    slug: 'opus-5-5-for-uk-accountants',
    title: 'Opus 5.5 for UK Accountants',
    summary:
      '15 practice jobs to move to Claude’s new model first, and the test to run before you trust it with any of them.',
    kicker: 'Free guide',
    intro: [
      'Anthropic released Claude Opus 5.5 on 22 September, and almost everything written about it since has been for software developers. Coding scores, security safeguards, the price per million tokens, and not a word on what changes for a firm that writes client emails, explains variances and reads scanned bank statements all week.',
      'So I wrote the practice version. One guide, written for a UK firm on Xero, with the test first and the jobs second. Every claim about the model comes from Anthropic’s own launch notes, linked in the guide, and every result that counts is one you measure on your own files.',
    ],
    takeaways: [
      'What actually changed: the three changes that matter for client work, and the launch noise you can skip',
      'The right plan and settings: which plans include it, and how hard to let it think for drafting versus checking figures',
      'The side-by-side test: three of your own finished jobs, scored on figures, house style and editing time',
      'Your firm’s writing rules: the block that makes every draft sound like your practice instead of like software',
      'The 15 jobs to move first: five writing, five figures, five reading, each with the prompt and the check',
      'When to stay on a lighter setting, so the team doesn’t run out of allowance by Wednesday',
      'What it still gets wrong, and why the review step stays',
    ],
    notionUrl: notion('3e99112c6a1f8051ae29cb3edbb9cb46'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/Opus-5-5-for-UK-Accountants-15-Practice-Jobs-to-Move-First-From-Client-Emails-to-Management-Accoun-3e99112c6a1f8051ae29cb3edbb9cb46',
  },
  {
    slug: 'ai-practice-manager',
    title: 'The AI Practice Manager',
    summary:
      'One Claude project that runs the admin side of your firm every week, from Monday’s deadline board to Friday’s partner brief.',
    kicker: 'Free guide',
    intro: [
      'Most small practices don’t have a practice manager. The owner is the practice manager, which means the deadline list gets checked on a Sunday night, the firm’s own unpaid fees get chased when someone remembers, and nobody knows who’s overloaded until a job slips.',
      'A lot of UK firms run on Xero, a shared inbox and a spreadsheet of deadlines. So I put it together. The job description, the setup and six weekly jobs, written for a UK firm that runs on exactly that. It reads, it drafts and it reports, and nothing it writes reaches a client, HMRC or Companies House until a person has approved it.',
    ],
    takeaways: [
      'The Job Description',
      'The Setup: one Claude project, its standing instructions in full, and the deadline register it reads from',
      'The Permission Table: what it does on its own, what it drafts for you to approve, and what it never touches',
      'The Monday Deadline Board',
      'The Companies House ID Check',
      'Your Own Lock-Up',
      'The Capacity View',
      'The New Client Pack',
      'The Friday Partner Brief',
      'The 30-Day Probation',
    ],
    notionUrl: notion('3e99112c6a1f803d9495e7b8da4fab53'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/The-AI-Practice-Manager-One-Claude-Project-Six-Weekly-Jobs-From-Monday-Deadlines-to-the-Friday-Pa-3e99112c6a1f803d9495e7b8da4fab53',
  },
  {
    slug: 'records-chaser',
    title: 'The Records Chaser',
    summary:
      '9 routines that chase every missing bank statement, receipt, P60 and rent schedule before your team opens their inbox.',
    kicker: 'Free routines',
    intro: [
      'Claude Scheduled Tasks can make the January records chase a 7am Monday job. In most firms I talk to, chasing takes a senior’s Friday every week from October to January, and none of it ever shows up on an invoice.',
      'I built 9 routines that chase every missing bank statement, receipt, P60 and rent schedule before your team opens their inbox. Every chaser lands in your inbox as a draft, and someone on your team reads it before pressing send.',
    ],
    takeaways: [
      'A Monday sweep of your deadline list for every client still missing records',
      'The first request written from each client’s own file, so you ask for everything once',
      'A firmer nudge on day 7, and a call list on day 14 so someone rings the ones who’ve gone quiet',
      'A check of everything that arrives, so the bank statement that’s two months short gets caught in October',
      'Quarterly reminders for the sole traders and landlords now inside Making Tax Digital',
      'A Friday list of every Self Assessment client at risk of missing 31 January',
      'A one-page brief for the partner on who’s stuck and who needs a phone call',
    ],
    notionUrl: notion('3f59112c6a1f80338546daee461f194c'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/The-Records-Chaser-Nine-Scheduled-Routines-That-Chase-Every-Missing-Record-Before-Your-Team-Opens-T-3f59112c6a1f80338546daee461f194c',
  },
  {
    slug: 'firm-of-the-future-blueprint',
    title: 'The Firm of the Future Blueprint',
    summary:
      'A plan for firm owners who can see AI taking half their team’s compliance work, and haven’t decided what those people do next.',
    kicker: 'Free blueprint',
    intro: [
      'A plan for firm owners who can see AI taking half their team’s compliance work, and haven’t decided what those people do next. Because by 2028 I think that’ll be true in most practices, and the firm up the road will have caught up too. The firms I’d bet on are the ones already deciding what to fill those hours with.',
      'AI can already draft most of the work a practice is built around: year-end accounts, tax returns, VAT returns, bookkeeping, the client emails that arrive all day. Cutting staff is the obvious answer, and I think the wrong one, because your clients would pay for work you’ve never had the hours to sell.',
    ],
    takeaways: [
      'Where your team’s hours go today, worked out from your own timesheet export',
      'How many of those hours AI can realistically take, job by job',
      'Ten services a 5 to 30 person firm can sell with the time',
      'Pricing them so they don’t end up thrown in for free',
      'Picking a niche, and running more than one under the same firm',
      'Who moves to what, and the training each person needs',
      'The 2028 test: what your firm looks like once every competitor has caught up',
    ],
    notionUrl: notion('3f59112c6a1f80668ba6cad2dac95678'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/The-Firm-of-the-Future-Blueprint-Seven-Steps-From-the-Hours-AI-Gives-Back-to-the-Services-You-Sell--3f59112c6a1f80668ba6cad2dac95678',
  },
  {
    slug: 'partner-review-queue',
    title: 'The Partner Review Queue',
    summary: 'Seven checks run on each file before it reaches the partner’s desk.',
    kicker: 'Free guide',
    intro: [
      'I turned Claude into a first reviewer for every set of accounts your team prepares, built on the checks a partner makes before signing. Seven checks run on each file before it reaches the partner’s desk.',
      'In a lot of 5 to 30 person firms, one partner still reviews nearly everything, so ten sets land on one desk and the pile never gets any smaller. A second reviewer is the usual fix, and most firms that size can’t justify the salary. The partner still signs every set, and stops spending the evening finding the same missing note for the fifth time.',
    ],
    takeaways: [
      'Tie-out: every figure in the accounts traced back to the trial balance',
      'Comparatives: last year’s column checked against the accounts you actually filed',
      'Movements: every line that moved more than it should have, with the reason or a question for the client',
      'Director’s loan: what each director owed at the year end, flagged for the partner if tax could follow',
      'Dividends: checked against the profits that were there to pay them',
      'Disclosures: every note a small company’s accounts need, including the ones the FRS 102 changes add',
      'Repeat mistakes: anything the partner flagged on earlier files, caught again and written back to whoever prepared it',
    ],
    notionUrl: notion('3f59112c6a1f8053aa35daf85a1779ff'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/The-Partner-Review-Queue-Seven-Checks-Claude-Runs-on-Every-Set-of-Accounts-Before-the-Partner-Sees--3f59112c6a1f8053aa35daf85a1779ff',
  },
  {
    slug: 'practice-acquisition-team',
    title: 'The Practice Acquisition Team',
    summary: 'Seven Claude prompts and a master prompt for buying the firm up the road.',
    kicker: 'Free prompts',
    intro: [
      'I built a Claude-powered acquisitions team for accounting firm owners. Because the easiest way to double your turnover is to buy the firm up the road with the bank’s money. Most owners only use AI to draft client emails and tidy up a spreadsheet. The bigger play: use it to work out whether the practice you’ve had your eye on is worth buying, and what to pay for it.',
      'Seven specialised Claude prompts and one master prompt that ties them together. Each prompt owns one job. Will it replace your solicitor, a broker or proper due diligence? No, it can’t meet the seller, and it can’t tell you why the owner really wants out. But it’ll tell you whether the practice is worth a second meeting, and what to ask when you get there.',
    ],
    takeaways: [
      'The fee list: which fees come back every year, and which were one-offs',
      'Client risk: who’s likely to leave when the owner does',
      'A price range, worked out the way practices actually get priced',
      'The bank’s view: what a lender will ask for, and what the repayments do to your cash',
      'Deal terms: how much to pay on completion, and how much to hold back until the clients stay',
      'The first year: what to change, and what to leave well alone',
      'The letter that tells clients they’ve got a new accountant',
    ],
    notionUrl: notion('3f59112c6a1f802bbf1ac6bce80b3f46'),
    resourceLink:
      'https://impartial-money-fa9.notion.site/The-Practice-Acquisition-Team-Seven-Claude-Prompts-and-a-Master-Prompt-for-Buying-the-Firm-Up-the-R-3f59112c6a1f802bbf1ac6bce80b3f46',
  },
];

export const findLeadMagnet = slug => leadMagnets.find(m => m.slug === slug);

/* The direct link for a magnet: its own resourceLink, else the public Notion page. */
export const resourceLinkFor = m => m.resourceLink || m.notionUrl.replace('/ebd/', '/');
