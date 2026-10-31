// The home page's lists. Each one is a course on the menu.
// Keep descriptions macro: what the thing is and why it mattered, not the metrics.
// Numbers belong in the case studies under src/content/work/.

export interface MadeItem {
  name: string;
  /** Right-hand side of the menu line, where a price would go */
  tag: string;
  description: string;
  /** Case study or external link, if there is one */
  href?: string;
  /** Shown big on the plate that follows the cursor */
  emoji: string;
  /** Optional GIF for the plate instead of the emoji */
  gif?: { src: string; alt: string };
}

export const madeAtSegwise: MadeItem[] = [
  {
    name: 'A playable-ad business',
    emoji: '🎮', gif: { src: 'https://media.tenor.com/9pBd7TjW7rwAAAAM/let-him-cook-cook.gif', alt: 'A chef cooking over big flames' },
    tag: 'Zero to one',
    description:
      "Customers kept asking whether we could make playable ads too, so I started a line of them inside Segwise and set up a production kitchen where AI agents do most of the cooking and I do the tasting.",
    href: '/work/playable-ads/',
  },
  {
    name: 'A better first week',
    emoji: '🌱',
    tag: 'Growth',
    description:
      'Too many new customers were leaving before they saw anything useful, so I rebuilt the trial around getting them a real result while they were still signing up.',
    href: '/work/trial-activation/',
  },
  {
    name: 'A chat agent for ad data',
    emoji: '💬',
    tag: 'Product',
    description:
      "People on calls didn't want another dashboard to set up. They wanted to ask a question and get an answer, so I made the case for an agent and we shipped it in under a week.",
    href: '/work/chat-agent/',
  },
  {
    name: 'Tools that let marketers help themselves',
    emoji: '🏷️', gif: { src: 'https://media.tenor.com/0prCeJ87QBYAAAAM/waiting-dexter.gif', alt: "Dexter from Dexter's Laboratory drumming his fingers, waiting" },
    tag: 'Building',
    description:
      "A chat that lets marketers create their own AI tags without waiting on an engineer, and a check that scores new ads against a brand's past winners before any money goes on them.",
  },
  {
    name: 'A support bot that keeps learning',
    emoji: '🤖',
    tag: 'Customer success',
    description:
      'A weekly look at where our support bot gets stuck, plus a sync that drafts help-centre updates whenever the product changes, so the answers never drift too far from the truth.',
  },
];

export const madeBefore: MadeItem[] = [
  {
    name: 'Growth for a payments app for teenagers',
    emoji: '💳',
    tag: 'FamPay · 2022–23',
    description:
      'A year of rebuilding onboarding, trying every referral idea we could think of and helping launch a subscription and custom UPI IDs, which turned out to be a surprisingly fun thing to sell to a sixteen-year-old.',
  },
  {
    name: 'EY Infinity',
    emoji: '♾️',
    tag: 'EY · 2021',
    description:
      'A set of Python tools I built with three teammates to take hours of Oracle and SAP grunt work off the plates of the auditors around us.',
  },
  {
    name: 'A social commerce channel',
    emoji: '🥬',
    tag: 'Orinko · 2020',
    description:
      'Two months, a hydroponics startup and no e-commerce experience at all. I signed up the partners, designed the whole journey and watched it beat the old model in its first month.',
  },
  {
    name: 'A camera that spots hazards',
    emoji: '📹',
    tag: 'Flutura · 2019',
    description:
      'A computer-vision model that watched factory CCTV for safety hazards, which ended up inside their industrial AI product.',
  },
];

export interface KindWord {
  quote: string;
  name: string;
  role: string;
}

// Public LinkedIn recommendations, trimmed.
export const kindWords: KindWord[] = [
  {
    quote:
      "He's one of these guys that is never going to be far away from something very successful, and will put in the hard yards to make it work.",
    name: 'Sean Chapman',
    role: 'Growth consultant, Segwise customer',
  },
  {
    quote:
      'He has deep product intuition and was great in anticipating our needs and implementing feedback fast.',
    name: 'Simardeep Singh',
    role: 'Performance marketing manager, Segwise customer',
  },
  {
    quote:
      'To this day, although his internship period had ended, our partners mention the excellent experience they received with Shayan.',
    name: 'Raghav Shankar',
    role: 'Managed me at Orinko',
  },
];

export interface Stop {
  place: string;
  years: string;
  text: string;
}

export const longWayRound: Stop[] = [
  {
    place: 'EY',
    years: '2020–22',
    text: "I started out checking the tech systems behind big retail and consumer brands. I was good at it, but I kept spending my evenings building tools to make it faster, which probably said something.",
  },
  {
    place: 'Orinko',
    years: '2020',
    text: "With two months to fill before EY began, I helped a hydroponics startup sell through people instead of shelves, and that's where I realised product management was a whole job and the one I wanted.",
  },
  {
    place: 'The Product Folks',
    years: '2020–23',
    text: 'I found my people here, helped run Insurjo, hosted OfficeHours and asked a lot of experienced PMs a lot of questions.',
  },
  {
    place: 'FamPay',
    years: '2022–23',
    text: "I was halfway through Master's applications for the US when Brijesh got in touch about an APM role. I said yes to that instead and spent a year on growth for an app built for teenagers.",
  },
  {
    place: 'Segwise',
    years: '2023–now',
    text: "When Brijesh moved on to Segwise, I followed him as one of the first people through the door, and I've been building there ever since.",
  },
];

export interface Piece {
  title: string;
  where: string;
  year: string;
  href: string;
}

export const writing: Piece[] = [
  {
    title: 'Overachieving, underappreciated: the Stripe story',
    where: 'Medium',
    year: '2021',
    href: 'https://mohamedshayan5.medium.com/overachieving-underappreciated-the-stripe-story-74fa8b1d256b',
  },
  {
    title: '"Ask App Not to Track": is Apple on our side?',
    where: 'Medium',
    year: '2021',
    href: 'https://mohamedshayan5.medium.com/ask-app-not-to-track-is-apple-on-our-side-6953cb0464a0',
  },
  {
    title: 'Gojek vs Grab: Round 2',
    where: 'Medium',
    year: '2021',
    href: 'https://mohamedshayan5.medium.com/gojek-vs-grab-round-2-a2ee9eed4bf4',
  },
];
