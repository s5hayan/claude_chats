// Site-wide copy and links. Edit here; pages read from this file.
export type Variant = 'ramen' | 'diner';

export const site = {
  // Which look the whole site uses: 'ramen' (Late-Night Ramen) or 'diner' (Diner Special).
  variant: 'ramen' as Variant,
  name: 'Mohamed Shayan',
  shortName: 'Shayan',
  description:
    'Mohamed Shayan takes the customer call, writes the spec, and ships the feature himself. Product and Customer Success at Segwise.ai, food walks around Bengaluru.',
  headline: 'I take the customer call, write the spec, and ship the feature.',
  // Words in the headline to highlight in yolk
  headlineHighlight: 'ship the feature.',
  bio: 'Head of Product & Customer Success at Segwise.ai, an AI platform that shows performance marketers why their ads work. I joined as the first non-engineering hire on a four-person team. Now I run 43 accounts and ship a lot of what they ask for myself.',
  location: 'Bengaluru',
  status: 'Currently cooking at Segwise.ai',
  // The areas of work shown under the bio
  crafts: ['Product', 'Customer Success', 'Growth', 'Building with AI agents'],
  // "Off the clock" on the home page: who you are outside work
  offTheClock:
    'Off the clock, I run Hungry Mother Fakir, a food page of restaurant reviews, food walks and hosted meals around Bengaluru. I also teach kids from kindergarten to Grade 6 with Samiksha Foundation, so they can keep up with school during cancer treatment. TODO: the pop culture, sports and travel that make you you, in your own words.',
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
