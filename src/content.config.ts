import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Mains: one .mdx per case study, written as a dish.
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    label: z.string(), // role combo, e.g. "CS × Scale"
    number: z.string(), // the headline figure, kept as text ("43", "3×", "TODO")
    numberCaption: z.string(),
    summary: z.string(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

// Side Dishes: food walks, pop-ups, newsletter, builds, tools.
const sides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sides' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['Food', 'Newsletter', 'Build', 'Tool', 'Writing', 'Community']),
    blurb: z.string(),
    link: z.url().optional(),
    order: z.number(),
  }),
});

// Today's Specials: a single entry, updated monthly.
const now = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/now' }),
  schema: z.object({
    updated: z.coerce.date(),
    location: z.string(),
  }),
});

export const collections = { work, sides, now };
