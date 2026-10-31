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
| Working scroll prototype (hand-drawn SVG placeholder art) | `prototype.html`, published at https://claude.ai/artifact/K8tAyekTsYyFGdBFm1w2Lw |
| Style test page (4 looks) | https://claude.ai/artifact/YCpmNPDPZpfY5Ct8sxsFe2 |
| Style test images | `art/style-tests/` (A Pixar-style, B toy-brick, C storybook, D Foster's) |
| Prompts used | `art/prompts/` (`scene.txt` + one style prefix per look) |
| Image generator | `art/gen.py` (reads the API key from the `GEMINI_KEY` env var; never commit the key) |
| Photos of Shayan | `art/refs/` |
| Character sheets | `art/character/` |

## Plan

1. **Character sheet**: done for both looks (`art/character/sheet-fosters.png`, `sheet-bricks.png`). Waiting on Shayan to confirm Foster's as the main look. Small fix needed: the cap visor must always point backwards.
2. **Cut-out character parts** (head, torso, arms, spoon) for code animation: stir loop, blink, talk.
3. **Scene layers**, each generated on a flat chroma background and keyed out: street + door,
   curtain, back wall, each poster, lamps, band, counter, diners, place setting.
4. **Assemble** into `prototype.html`, replacing the SVG placeholders. Mock up before full build.
5. **Move into the Astro site**: real Spotify embed; the existing menu-card site stays as the
   plain "lights on" fallback (screen readers, reduced motion, old devices, recruiters).

## Open items

- GitHub pushes from the cloud session fail with 403 until Shayan reconnects GitHub
  (https://claude.ai/connect-github). Until then, commits exist only in the session's container.
- The Google API key was pasted in chat; Shayan should rotate it in Google AI Studio after use.
