// Site-wide copy and links. Edit here; pages read from this file.
export type Variant = 'ramen' | 'diner';

export const site = {
  // Which look the whole site uses: 'ramen' (Late-Night Ramen) or 'diner' (Diner Special).
  variant: 'ramen' as Variant,
  name: 'Mohamed Shayan',
  shortName: 'Shayan',
  description:
    'Mohamed Shayan closes the loop end to end: takes the customer call, writes the spec, and ships the feature. Product, Customer Success and Growth.',
  headline: 'I take the customer call, write the spec, and ship the feature.',
  // Words in the headline to highlight in yolk
  headlineHighlight: 'ship the feature.',
  bio: 'Head of Product & Customer Success at Segwise.ai, an AI platform that shows performance marketers why their ads work. I joined as the first non-engineering hire on a four-person team. Now I run 43 accounts and ship a lot of what they ask for myself.',
  location: 'Bengaluru',
  availability: 'Open to remote and relocation',
  targetRoles: ['Customer Success', 'Product Management', 'Product Strategy', 'GTM Engineering'],
  lookingFor:
    'An early-stage B2B SaaS team, ideally in AI, where one person can own the whole customer loop: talk to customers, turn what they say into product, ship it, and grow the account. I am looking at Product Management, Customer Success, Product Strategy and GTM Engineering roles, from Bengaluru, remote, or somewhere new.',
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
