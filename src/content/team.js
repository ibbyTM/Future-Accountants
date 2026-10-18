/*
 * The Meet the Team page, in Damon's words. Six groups in his order, Rodney
 * last. Portraits live in public/images/team/<slug>.webp (640x640, cropped
 * to the coloured circle). `layout: 'wide'` puts one person per row with a
 * larger portrait; the rest use the three-up card grid.
 */

export const intro = {
  kicker: 'Meet the Team',
  tagline: 'Brilliant minds. Questionable personalities. Appalling dress sense.',
  taglineEmphasis: 'Extraordinary technology.',
  paragraphs: [
    'Behind every great AI system is a team of exceptionally clever people. And behind ours is a collection of accountants, developers, strategists, problem-solvers and assorted troublemakers who are busy reinventing the accountancy profession.',
    'Some have spent decades in accounting. Others have spent years teaching machines to do things accountants thought only humans could do. Between them, they’ve built thousands of AI tools, systems and solutions that are changing how accounting firms operate.',
    'They’re talented, ambitious, occasionally impossible to manage and united by one simple mission: to build the most advanced AI-powered accountancy systems in the world.',
  ],
  signOff: 'We thought you ought to meet them. We apologise in advance.',
};

export const groups = [
  {
    slug: 'beauty-and-the-beast',
    name: 'Beauty and the Beast',
    layout: 'wide',
    people: [
      {
        slug: 'damon',
        name: 'Damon',
        role: 'Thinks He’s The Boss',
        bio: 'Damon is well on his way to taking over the world. A business empire, sold-out events across the globe, 21 brilliant business books and AI systems that will make you weep. And so very modest. He’s on a mission to create the perfect modern accountancy firm and will steamroll anyone who stands in his way. Before selling them off for parts. His management style has been described as visionary, relentless and a potential breach of the Geneva Convention. Fortunately, Clare is on hand to remind him that he is neither God nor particularly good at anything involving actual numbers.',
      },
      {
        slug: 'clare',
        name: 'Clare',
        role: 'Is The Boss',
        bio: 'While Damon thinks he’s the boss, Clare actually is. Not least because she knows how to do important things, like preparing a set of accounts or setting up accounting software. She’s built and turned around businesses from LA to Hong Kong to London, authored more than half a dozen books, and led the team behind our market-leading AI systems for accountants. A formidable businesswoman with an encyclopaedic knowledge of accounting, an eye for detail and a dangerously low tolerance for incompetence, Clare has an unnerving habit of being right about absolutely everything. She’s ferociously direct, relentlessly demanding and entirely unimpressed by excuses. Clients adore her. Not because she tells them what they want to hear, but because she tells them what they need to hear. Preferably before they’ve finished explaining why it can’t be done. Clare doesn’t suffer fools gladly. In fact, she doesn’t suffer them at all.',
      },
    ],
  },
  {
    slug: 'the-deal-makers',
    name: 'The Deal Makers',
    people: [
      {
        slug: 'izzy',
        name: 'Izzy',
        role: 'Commercial Manager',
        bio: 'Izzy is the person who turns our clients’ ambitious AI wish lists into something our developers can actually build. She works with accounting firms to customise our systems, develop new solutions and make sure everyone gets what they need. She’s mastered the delicate art of keeping clients happy while explaining to developers that, yes, we really have promised to build that.',
      },
      {
        slug: 'adam',
        name: 'Adam',
        role: 'AI Solutions Consultant',
        bio: 'Adam works with accounting firm owners to understand their ambitions, challenge their thinking and design AI solutions that genuinely transform how their practices operate. He combines commercial insight with a deep understanding of our technology, turning ambitious ideas into practical implementation plans. He’s very good at telling clients what they need, rather than simply what they want. A skill we’ve occasionally wished he’d exercise a little less enthusiastically in our own meetings.',
      },
      {
        slug: 'arthur',
        name: 'Arthur',
        role: 'AI Academy Membership Coordinator',
        bio: 'Arthur looks after the thousands of members of our AI Academy, helping them navigate a vault containing thousands of AI tools and systems. Whether it’s finding the one tool that could transform your accounting firm or resetting the password you’ve forgotten for the fourth time this week, Arthur is your man. He remains quietly astonished by how many accountants can’t remember their own passwords.',
      },
    ],
  },
  {
    slug: 'the-ai-generals',
    name: 'The AI Generals',
    people: [
      {
        slug: 'matt',
        name: 'Matt',
        role: 'Development Director',
        bio: 'Matt is the man responsible for turning our increasingly ambitious AI ideas into working systems. He leads the development team, oversees the architecture and makes sure everything actually delivers. His biggest challenge isn’t the technology. It’s getting the rest of us to stop coming up with new ideas for five minutes.',
      },
      {
        slug: 'rachel',
        name: 'Rachel',
        role: 'Development Project Manager',
        bio: 'Rachel keeps our developers organised, our projects moving and our deadlines somewhere in the vicinity of reality. She manages a bewildering number of AI builds simultaneously and somehow knows exactly who’s doing what. The team occasionally describe her as a control freak. Rachel prefers the term ‘competent’.',
      },
    ],
  },
  {
    slug: 'the-geek-squad',
    name: 'The Geek Squad',
    people: [
      {
        slug: 'alex',
        name: 'Alex',
        role: 'Senior AI Systems Developer',
        bio: 'Alex is the person everyone turns to when an AI system does something nobody expected. Usually something expensive. He’s spent years building, debugging and improving intelligent systems, and has developed an almost supernatural ability to find problems in other people’s code. He calls it experience. The rest of the team call it showing off.',
      },
      {
        slug: 'harvey',
        name: 'Harvey',
        role: 'AI Systems Developer',
        bio: 'Harvey prefers to be called Harv. He thinks it makes him sound cooler. Well, everything’s relative. He’s built over 1,700 AI tools, though, which even we have to admit is pretty cool. Just another 1,700 to go, then, Harv…',
      },
      {
        slug: 'milly',
        name: 'Milly',
        role: 'AI Systems Developer',
        bio: 'Milly has a simple philosophy: if a human has to do something twice, there’s probably a better way. She’s built AI systems that automate everything from client communications to complex workflows. She’s now working on automating the rest of us.',
      },
    ],
  },
  {
    slug: 'the-brain-trust',
    name: 'The Brain Trust',
    people: [
      {
        slug: 'theo',
        name: 'Theo',
        role: 'AI Accounting Engineer',
        bio: 'Theo regularly reminds us that Theodore is Greek for “gift of God”. The jury’s still out on that one. But his fully autonomous AI systems for compliance, advisory and accounts review are pretty close to miraculous.',
      },
      {
        slug: 'olly',
        name: 'Olly',
        role: 'AI Accounting Systems Architect',
        bio: 'Olly designs the architecture behind our AI accounting systems. He insists there’s a difference between making something work and making it work properly. Unfortunately, he’s usually right. He builds the foundations that allow hundreds of AI tools to work together without falling over.',
      },
      {
        slug: 'sophie',
        name: 'Sophie',
        role: 'AI-Native Accountant',
        bio: 'Sophie has never understood why accountants spend so much time doing things computers could do better. She’s built AI-powered workflows for bookkeeping, tax and compliance that save hundreds of hours. Traditional accountants call it cheating. Sophie calls it Tuesday.',
      },
      {
        slug: 'nasim',
        name: 'Nasim',
        role: 'Accounting AI Specialist',
        bio: 'Nasim has an unhealthy obsession with accuracy. He’s been known to question a calculation that’s correct to six decimal places. He specialises in teaching AI systems to think like accountants, spot errors and solve problems. We’re still trying to teach him that 99.9% is sometimes good enough.',
      },
      {
        slug: 'connor',
        name: 'Connor',
        role: 'AI Finance Systems Engineer',
        bio: 'Connor believes spreadsheets are wonderful. As historical artefacts. He engineers intelligent finance systems that turn mountains of financial data into real-time insights, forecasts and decisions. He’s currently campaigning to have the phrase “I’ll update the spreadsheet” officially retired.',
      },
      {
        slug: 'luca',
        name: 'Luca',
        role: 'AI Accounting Systems Engineer',
        bio: 'Luca believes most accounting processes were designed by people who didn’t particularly enjoy accounting. He’s spent his time rebuilding them with AI, making everything faster, smarter and considerably less painful. He’s still trying to work out why anyone would voluntarily do a bank reconciliation manually.',
      },
      {
        slug: 'george',
        name: 'George',
        role: 'AI Accounting Systems Engineer',
        bio: 'George is our resident sceptic. Whenever someone announces that an AI system is working perfectly, George asks what happens when it doesn’t. He specialises in building reliable, intelligent accounting systems and finding problems nobody else thought of. We find him mildly irritating. And absolutely indispensable.',
      },
      {
        slug: 'oscar',
        name: 'Oscar',
        role: 'Intelligent Accounting Systems Designer',
        bio: 'Oscar thinks accounting software should be so intuitive that nobody needs a training manual. He’s designed intelligent systems that make complicated accounting tasks feel remarkably simple. His ambition is to make accountants forget they’re using software at all. The software industry is understandably nervous.',
      },
    ],
  },
  {
    slug: 'the-department-of-chaos',
    name: 'The Department of Chaos',
    layout: 'wide',
    people: [
      {
        slug: 'rodney',
        name: 'Rodney',
        role: 'Chief Disruption Officer (CDO)',
        bio: 'Rodney is our Chief Disruption Officer, a role he takes extremely seriously. His responsibilities include interrupting important meetings, undermining senior management and ensuring productivity never gets completely out of hand. A Labrador with absolutely no accounting qualifications, he remains convinced he’s the most important member of the team. Unfortunately, he may be right. Now, you know what time it is…',
      },
    ],
  },
];

export const close = {
  kicker: 'Meet the Team',
  headline: 'Clever People. Cleverer Systems. And a Dog Who Thinks He’s in Charge.',
  paragraphs: [
    'We might not take ourselves terribly seriously. But we take what we’re building very seriously indeed.',
    'Our team combines decades of real-world accounting experience with cutting-edge AI development expertise. We’re not simply adding AI to traditional accounting software. We’re rethinking how an entire accountancy firm should operate.',
    'From autonomous bookkeeping and compliance to intelligent advisory, practice management and sophisticated AI agents, we’re building the systems that will power the next generation of accounting firms.',
  ],
  last: 'The future of accountancy isn’t coming. We’re building it.',
  lastEmphasis: 'And yes, Rodney is supervising.',
};

export const team = { intro, groups, close };
