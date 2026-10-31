// Site-wide copy and links. Edit here; pages read from this file.
export type Variant = 'ramen' | 'diner';

export const site = {
  // Which look the whole site uses: 'ramen' (Late-Night Ramen) or 'diner' (Diner Special).
  variant: 'ramen' as Variant,
  name: 'Mohamed Shayan',
  shortName: 'Shayan',
  description:
    'Mohamed Shayan leads Product and Customer Success at Segwise.ai, ships features himself with AI agents, and runs food walks around Bengaluru.',
  headline: 'Raised on Cartoon Network, fed by Bengaluru, and now making things of my own.',
  // Words in the headline to highlight
  headlineHighlight: 'making things of my own.',
  bio: "I've spent most of my life consuming things, from cartoons and films to food and other people's products, and somewhere along the way it all turned into taste. Now I get to put that to work, leading Product and Customer Success at Segwise.ai, shipping features myself with AI agents, and running food walks around the city. I'm curious to see if the world agrees with my taste.",
  location: 'Bengaluru',
  status: 'Currently cooking at Segwise.ai',
  // The areas of work shown under the bio
  crafts: ['Product', 'Customer Success', 'Growth', 'Building with AI agents'],
  // Line under "The proof" heading on the home page
  proofIntro:
    "Most days I'm somewhere in the same loop of talking to a customer, spotting what's missing and building whatever fills the gap. Here's what that has added up to so far.",
  // "House rules" on the home page: how you work
  houseRules: [
    "Talk to your customers every day, because even when they can't put the problem into words, they'll still show you what to build next.",
    'Every PM should be shipping now. Coding agents took away the last good excuse, and getting over the fear of breaking things turned out to be the hardest part.',
    "Give me a messy, ambiguous problem over a tidy one any day, since that's usually where you need to understand both the tech and the people using it.",
  ],
  // "Off the clock" on the home page: who you are outside work
  offTheClock:
    "Cartoon Network and Disney more or less raised me, and I still watch a ridiculous amount of TV. When I'm not doing that, I'm probably eating my way around Bengaluru for Hungry Mother Fakir, my food page of restaurant reviews, food walks and hosted meals, or teaching kids from kindergarten to Grade 6 with Samiksha Foundation so they can keep up with school during cancer treatment.",
  contact: {
    email: 'mohamedshayan5@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mohamed-shayan-22071998/',
    github: 'https://github.com/s5hayan',
  },
  nav: [
    { label: 'The Menu', href: '/' },
    { label: 'Mains', href: '/work/' },
    { label: 'Side Dishes', href: '/sides/' },
    { label: "Today's Specials", href: '/now/' },
  ],
};
