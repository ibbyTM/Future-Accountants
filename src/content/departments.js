/*
 * The AI Practice Operating System: the ten foundational AI departments, in
 * Damon's build order. One source of truth for the home page grid and the
 * offer page list, so a wording change lands in both places.
 *
 *   name     the department
 *   line     Damon's one-line tagline (offer page, under the name)
 *   summary  Damon's full sentence from Website Updates v2 (both pages)
 */
export const departments = [
  {
    name: 'AI Firm Brain',
    line: 'Your practice intelligence platform',
    summary:
      'One intelligent brain that knows your firm, clients, processes and knowledge, providing the foundation that powers every other AI department.',
  },
  {
    name: 'AI Meeting Department',
    line: 'Turn every conversation into action',
    summary:
      'AI prepares, captures and follows up every meeting, creating notes, actions, updates and communications while virtually eliminating meeting administration.',
  },
  {
    name: 'AI Email & Communications Department',
    line: 'Take control of the practice inbox',
    summary:
      'AI triages, prioritises, drafts and follows up communications, dramatically reducing inbox time while ensuring important messages and actions never get missed.',
  },
  {
    name: 'AI Compliance Department',
    line: 'The AI-powered compliance engine',
    summary:
      'Transform bookkeeping, VAT, payroll, accounts and tax with AI-powered preparation, processing and review, automating the heavy lifting while retaining human judgement.',
  },
  {
    name: 'AI Advisory Department',
    line: 'Turn advisory into a scalable practice-wide service',
    summary:
      'Build specialist AI advisers for forecasting, business planning, R&D, profit improvement, valuations and Virtual FD, making high-value advisory scalable across your practice.',
  },
  {
    name: 'AI Client Success Department',
    line: 'Deliver a better client experience automatically',
    summary:
      'AI handles onboarding, questions, information chasing, reminders and updates, delivering faster, more proactive client service with dramatically less administration.',
  },
  {
    name: 'AI Marketing, Sales & Growth Department',
    line: 'Build a predictable AI-powered growth engine',
    summary:
      'Use AI to create content, generate and nurture leads, prepare proposals and automate follow-up, building a smarter, more predictable growth engine.',
  },
  {
    name: 'AI Finance & Practice Performance Department',
    line: 'Know exactly how your firm is performing',
    summary:
      'Your internal AI Finance Director, analysing profitability, pricing, WIP, capacity, productivity and KPIs to drive better decisions, performance and margins.',
  },
  {
    name: 'AI Tax Department',
    line: 'Give every accountant an AI tax specialist',
    summary:
      'Give your team AI-powered tax expertise for research, technical questions, planning opportunities, client reviews and HMRC work, supported by professional judgement.',
  },
  {
    name: 'AI CEO & Management Department',
    line: 'The intelligence layer that helps run the firm',
    summary:
      'Your AI strategic adviser, connecting performance, clients, people, opportunities and risks to help leadership make better decisions and run the firm.',
  },
];

/* Damon's result line, shown under the departments on both pages. */
export const departmentsResult = {
  lead: 'The result? Save 20 to 30+ hours per employee, per week. Create capacity for more clients. Deliver more higher-value advisory work. And for partners?',
  close: 'Build a practice that runs without you.',
};
