# Shayan's personal site

Phase 1 of the site described in the build brief: a restaurant-menu personal site in the
"Diner Special" direction (brutalist pop: cream paper, ink outlines, tomato, yolk and teal).

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
| Headline, bio, availability, contact links, nav | `src/config/site.ts` |
| Homepage proof cards | `src/content/proof.json` |
| Marquee ticker | `src/content/ticker.json` |
| Mains (case studies) | `src/content/work/*.mdx` |
| Side Dishes | `src/content/sides/*.md` |
| Today's Specials | `src/content/now/index.md` |
| Colours and fonts | `src/styles/tokens.css` |
| Stickers | `public/stickers/*.svg` |

Any text containing `TODO` is highlighted on the page so gaps are easy to spot.
Content files are type-checked at build time, so a missing frontmatter field fails the build.

## Deploy

Import the repo into Vercel; it detects Astro automatically. Once the custom domain is
chosen, set `site` in `astro.config.mjs` so canonical and Open Graph URLs are absolute.
