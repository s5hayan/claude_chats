# Walk-in restaurant site: handoff

Read this first when picking the work back up in a new session.

## The idea (Shayan's brief, in short)

The visitor scrolls to walk through a red-curtained doorway under a flickering neon OPEN sign
into a tiny, warm, amber-lit restaurant. Jazz plays (louder once inside). A tall wall of posters
shows things Shayan loves (clickable for a bubble). Two diners already sit at the counter. The
visitor takes a stool; Shayan, in a backwards red cap and apron, is cooking behind the counter
and asks in a comic speech bubble what they're in the mood for. Choosing one slides in a menu card:

- A bit about me
- A taste of my work
- Things I'm into

## Decisions so far

- **2.5D**, not full 3D: illustrated layers moving at different depths as you scroll.
- **Style: Foster's-style 2D cartoon** (flat colour, thick wobbly outlines, noodle limbs) as the
  main look. **Toy-brick** version kept as a possible seasonal special, not the main identity.
- Art is generated ourselves with Google's image model (`gemini-3-pro-image`), using Shayan's photos.
- Lighting reference: warm amber, almost monochrome, dark edges, glowing counter, glass pendant lamps.
- Music: placeholder jazz generated in the browser for now. Real playlist (Spotify):
  https://open.spotify.com/playlist/6rlOT0zsfrYRCkmmjLycSI . Artifacts can't embed Spotify; the real site can.
- Character details: backwards red cap, white tee, mustard apron (matches his puffer) with
  "yes, chef" on the pocket (his cap says that in one photo), big toothy grin with eyes shut.
- Process rule from Shayan: **mock up styles before any full build.**

## Where things are

| What | Where |
| --- | --- |
| **Current prototype (v2, generated Foster's art)** | `index.html` + `assets/`, published at https://claude.ai/artifact/K8tAyekTsYyFGdBFm1w2Lw |
| First prototype (hand-drawn SVG) | `prototype-v1-svg.html` |
| Raw generated layers + layer prompts | `art/layers/raw/`, `art/prompts/layers/` |
| Background keyer | `art/key.py` (magenta/green chroma → transparent WebP) |
| Style test page (4 looks) | https://claude.ai/artifact/YCpmNPDPZpfY5Ct8sxsFe2 |
| Style test images | `art/style-tests/` (A Pixar-style, B toy-brick, C storybook, D Foster's) |
| Prompts used | `art/prompts/` (`scene.txt` + one style prefix per look) |
| Image generator | `art/gen.py` (reads the API key from the `GEMINI_KEY` env var; never commit the key) |
| Photos of Shayan | `art/refs/` |
| Character sheets | `art/character/` |

## Plan

1. Character sheets: done (`art/character/`). Foster's confirmed as the main look; toy-brick parked as a seasonal special.
2. Character animation: done as three hand-drawn frames (stir A, stir B, talking C) swapped like a TV cartoon.
3. Scene layers: done (street, neon, curtain, room, lamps, counter, two diners), keyed to transparent WebP.
4. Assembly: v2 prototype done. Next polish ideas:
   - posters as separate sprites (sharper, can wiggle on hover); remove the duplicate TV poster
   - steam as a CSS/canvas loop instead of baked-in; more chef frames (chopping, waving hello on arrival)
   - a proper loading screen and asset sizes check on mobile data
   - band silhouettes bob in time with the music
5. Move into the Astro site: real Spotify embed; the menu-card site stays as the plain "lights on" version.

## Open items

- GitHub pushes from the cloud session fail with 403 until Shayan reconnects GitHub
  (https://claude.ai/connect-github). Until then, commits exist only in the session's container.
- The Google API key was pasted in chat; Shayan should rotate it in Google AI Studio after use.
