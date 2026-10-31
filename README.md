# Shayan's personal site

A personal site laid out as a printed restaurant menu: a paper card on a wooden table, with
courses, dotted leaders and one deep red accent. It switches to a candlelit dark version when
the reader's device is in dark mode. The menu is the permanent structure; future "seasons" can
give it a new look without changing the content.

Built with Astro, Tailwind CSS and MDX. Static output, ready for Vercel.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run check:todo # fails while any TODO placeholder is still on the built site
```

## Where to edit copy

| What | File |
| --- | --- |
| Headline, bio, house rules, contact links, nav | `src/config/site.ts` |
| Things I've made, kind words, the long way round, reading | `src/config/menu.ts` |
| Mains (case studies) | `src/content/work/*.mdx` |
| Side Dishes | `src/content/sides/*.md` |
| Today's Specials | `src/content/now/index.md` |
| Colours and fonts | `src/styles/tokens.css` |
| GIFs (hot-linked from Tenor) | `<Gif>` tags in `src/pages/index.astro`, `BookATable.astro` and `404.astro` |

Any text containing `TODO` is highlighted on the page so gaps are easy to spot.
Content files are type-checked at build time, so a missing frontmatter field fails the build.

## Deploy

Import the repo into Vercel; it detects Astro automatically. Once the custom domain is
chosen, set `site` in `astro.config.mjs` so canonical and Open Graph URLs are absolute.
