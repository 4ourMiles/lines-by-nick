---
name: LBN Design
description: The LbN lettermark's world at page scale, every surface a thick extruded slab in teal, coral, navy and off-white (muted palette, Nick, 2026-11-06).
colors:
  cyan: "#4ea3b5"
  red: "#eb5153"
  red-deep: "#c8383b"
  navy: "#0f2b3e"
  navy-soft: "#25586f"
  cyan-deep: "#2f6e89"
  white: "#f2f2f2"
  paper: "#cbd7dd"
  cyan-mist: "#dfe7eb"
  cyan-line: "#b7c6cf"
  cyan-haze: "#cbd7dd"
typography:
  display:
    fontFamily: "Rubik, Arial Black, sans-serif"
    fontSize: "clamp(3rem, 8.2vw, 6.5rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Rubik, Arial Black, sans-serif"
    fontSize: "clamp(2.125rem, 4.6vw, 3.875rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Rubik, Arial Black, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Rubik, Arial Black, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  label:
    fontFamily: "Rubik, Arial Black, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
  xl: "32px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
  xxl: "160px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  slab:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.lg}"
    padding: "48px"
  tag:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
---

# Design System: LBN Design

## Overview

**Creative North Star: "Lines by Nick"**

LbN is Lines by Nick. The studio writes lines of code and draws lines of ink, and the page is built the way the mark is built: one heavy navy line outlines everything, then flat saturated color fills it. The mark is three letters built as solid objects with a hard navy side pushed down and to the right; every surface that matters, from the navigation bar to the contact block, is a slab in the same construction: a flat face, a 3px navy outline, and a hard diagonal navy extrusion. Nothing floats on a soft shadow; things sit on their own side.

The register is clean pop: few colors, all unmixed, big type, generous air between slabs, and no texture other than the brand's own pattern tile. Energy comes from scale and color commitment, not from decoration. A non-technical business owner should feel they are looking at a finished, confident, friendly studio. Neither voice is allowed to swallow the other: no texture, no gradients, no hero-sized colour fields outside a slab. A non-technical business owner should feel they are looking at a finished, confident studio with a sense of humour.

**Key Characteristics:**
- One heavy navy line (3px on slabs and buttons, 2px on tags) outlines every object, like the mark.
- Hard diagonal navy extrusion on every interactive or structural slab; no blurred shadows.
- Grounds are flat. No grid or texture behind content; the brand pattern tile appears behind the home hero, in the footer and on the one badge.
- Four unmixed colors carry whole regions: cyan fields, white slabs, red actions, navy ink and footing.
- One heavy rounded geometric family (Rubik) at every size; weight and size do the hierarchy. It matches the mark; never substitute a grotesk (tried and rejected 2026-11-05).
- Rounded-rectangle geometry everywhere, matched to the letterforms.
- Motion is physical: things press, stack and tilt, and the one drawn flourish (the red scribble, the diagram lines) draws on. The mark's fills and strokes never animate; it arrives whole.
- Home hero load-in runs on one clock and resolves by about 1.1s: at 0s the three title lines rise 0.35em, 80ms apart, while the stage slab lands from down-right beside them (its fade is done in the first third of the move); at 0.32s the scribble draws under the third line as it settles; the lede and actions follow at 0.34s and 0.44s; from 0.55s the stickers are thrown onto the settled slab 60ms apart with a slight overshoot (cubic-bezier(0.2, 1.2, 0.4, 1)). The rule: copy and object arrive together, punctuation lands last, and nothing trails after the page looks finished. Reduced motion shows the final state.
- The brand pattern behind the home hero (and in the footer and badge) is a brick wallpaper: `public/brand/lbn-wallpaper.svg` holds one mark on a tile two rows tall (74.45 x 134.78 units, gap 9.8, navy at 10% fill-opacity), and the CSS paints it twice, the second layer shifted half a step across and one row down (`--tile` sets the scale: 106px in the hero at 0.28 layer opacity, about 92px per mark; 120px in the footer and badge). This is the one size that reads as a pattern: smaller repeats read as noise, a single row of giant marks reads as stripes. The owner's pattern files are not seamless (trailing gap cropped), so the tile is generated from the first mark of `assets/logos/lbn-pattern-row.svg`.

## Colors

Four unmixed brand colors from the logo, with two tints for secondary text, used at region scale.

### Primary
- **LbN Cyan** (`cyan`): the hero field and any region that should feel like the studio's home turf. Always carries navy text.
- **Signal Red** (`red`): the primary action and one emphasis slab per page. White text at 18px bold or larger only.
- **Red Deep** (`red-deep`): the pressed and hover state of red surfaces.

### Neutral
- **Ink Navy** (`navy`): all body text on light surfaces, every outline, every extrusion, and the footer ground.
- **Navy Soft** (`navy-soft`): secondary text on white or paper (6.5:1). Never gray.
- **Cyan Deep** (`cyan-deep`): decorative tint only (pattern ink on cyan, hairline rules); never for text.
- **White** (`white`): slab faces and text on navy or red.
- **Paper** (`paper`): the page ground between slabs, the palette's light grey-blue (#cbd7dd) so off-white slabs read as objects on it. Muted text on it is `navy-soft` (5.3:1).
- **Cyan Mist** (`cyan-mist`): secondary text on navy surfaces. Never on light grounds.
- **Cyan Line** (`cyan-line`): placeholder text lines inside authored demo interfaces only; never real UI.
- **Cyan Haze** (`cyan-haze`): the footer's secondary text on navy.

### Named Rules
**The Side Rule.** Depth is a solid navy side, never a blur. Depth steps are 4, 8, 14 and 24px, always offset equally on x and y; 3 and 6px are the pressed states of 4 and 8 (and the resting side of tiny demo atoms), 18px is a lifted slab.
**The Whole-Region Rule.** A brand color owns a region or it does not appear. No cyan accents sprinkled on a white page; the hero is cyan.
**The Red Budget Rule.** Red is the action color. One red primary button per region plus the persistent nav action, and at most one red slab per page. Red may also appear as ink in small marks (step numbers, bullets, ticker dots, the scribble).

## Typography

**Display Font:** Rubik (with Arial Black fallback)
**Body Font:** Rubik (with Arial fallback)

**Character:** Rubik's rounded corners and even stroke echo the letterforms of the mark. One family at weights 400, 500, 700, 800 and 900 keeps the page clean; the pop comes from the jump between 18px body and 96px display.

### Hierarchy
- **Display** (900, clamp(3rem, 8.2vw, 6.5rem), 0.9): hero headline and the contact close only. The hero's three-line title runs at clamp(2.75rem, 5.6vw, 5.5rem) so each line stays unbroken on desktop.
- **Headline** (900, clamp(2.125rem, 4.6vw, 3.875rem), 0.98): one per slab. Service slabs lead with their line ("Lines of code.") and carry the service name as a title beneath.
- **Title** (700, 1.25rem, 1.15): button text, service names, list leads, card titles. Buttons never drop below 1.25rem bold so white on red counts as large text.
- **Body** (400, 1.125rem, 1.5): paragraphs, max 60ch on this page because the voice is short.
- **Hero lede** (600, clamp(1.125rem, 1.6vw, 1.5rem), 1.35, max 30em): the one bold offer sentence under the title. Bolder than body on purpose.
- **Label** (700, 0.8125rem, 0.08em, uppercase): the one kicker, used only inside tags and the route selector, never as an eyebrow over sections.
- **Small** (500, 0.9375rem): captions under sample visuals and the footer legal line. Demo interfaces inside visuals may go down to 0.75rem because they are pictures, not UI.

### Named Rules
**The No-Eyebrow Rule.** Sections open with their headline. The uppercase label lives inside tags, not above headings.
**The Tight-Top Rule.** Display and headline tracking sits at -0.03em / -0.025em; body is never tracked.
**The Outlined Word Rule.** At most one display line per page may be set as an outlined word: white fill, 2px navy text-stroke, a 7px stepped navy side (1px text-shadow steps, the same construction as the slabs). It is the mark's construction applied to type, and it loses its force if repeated. It goes on the line that is the point (on the home hero, "Lines by Nick.", which also carries the red scribble), never on a line just because it sits in the middle.

## Layout

A single centered column, max 1240px, 24px gutters on phones and 48px from 900px up. The page is a vertical stack of slabs separated by generous paper.

The home hero is a two-column grid from 900px: a copy column (title, bold lede 20px beneath it, actions 28px beneath that) and the stage (max 600px) centred against it. On phones the copy wrapper uses `display: contents` and the children are ordered title, compact 360px stage, lede, full-width actions, so the mark is on the first screen. Never use named areas with the spanning stage; the spanning row distribution pushed the lede and actions out of the copy column. Inner pages use a 0.8fr / 1.2fr grid from 900px: an aside (headline, mini steps or facts) beside the main slab (form or pay panel). Inside a slab, content splits into a text column (max 560px) and a visual column at 900px and up, and stacks text first below that.

Service slabs stack physically: each is `position: sticky` with a top offset of 112px plus 16px per slab, so as the visitor scrolls each new slab slides up over the previous one and the stack builds like the extruded letters. Stacking is enabled only when the viewport is at least 900px wide and 760px tall, because a slab taller than the viewport would hide its own lower half; below that the slabs simply flow.

Below 600px the authored visuals re-flow: the brand sheet goes single column, the Salesforce flow turns vertical, and the "two shops" diagrams stack top to bottom with a vertical link.

Spacing rhythm: 8 / 16 / 24 / 48 / 96 / 160px. Section gaps are 96px on phones and 160px on desktop. Inside a slab, more space above a heading than below it.

## Elevation & Depth

Depth is structural, never ambient. Every slab, button, tag and visual block carries a hard navy extrusion drawn as a stack of 1px-stepped box-shadows along the 45° diagonal, so the side reads as a solid face rather than a flat offset. There are no blurred shadows anywhere.

### Shadow Vocabulary
Tokens `--ex-1` through `--ex-24` exist in `app/extrusion.css`; only these roles are used:
- **ex-4** (`--ex-4`): tags, chips, small controls.
- **ex-8** (`--ex-8`): buttons, nav bar, visual sub-blocks.
- **ex-14** (`--ex-14`): section slabs.
- **ex-24** (`--ex-24`): the hero mark's stage and the contact close.

### Named Rules
**The Press Rule.** Hover moves an element 2px toward its side and shortens the side by the same amount; active moves it fully onto its side (extrusion 0). The object is pressed, not lifted.

## Shapes

Rounded rectangles only, with radii that read as the mark's corners at each scale: 8px tags, 14px buttons, 22px slabs, 32px the hero stage. Outlines are 3px navy on slabs and buttons and 2px on tags and demo atoms. Hand-drawn strokes are allowed in one place: the red scribble underline, a single SVG path with round caps. No pill buttons, no circles except the pointer-tilt indicator, no diagonal cuts.

## Components

### Buttons
- **Shape:** rounded 14px, 3px navy outline, ex-8 extrusion.
- **Primary:** red face, white title text at 1.25rem bold, 14px 28px padding.
- **Secondary:** white face, navy text, same geometry.
- **Hover / Focus:** press 2px (The Press Rule); focus-visible adds a 3px navy ring outside the outline, cyan on navy grounds (footer, navy slabs, ticker).
- **Disabled:** paper face, navy-soft text, extrusion 0, no press.

### Slabs
- **Corner Style:** 22px.
- **Background:** white by default; one red and one navy slab per page at most, cyan for one service slab, one comparison panel and the mobile menu sheet.
- **Shadow Strategy:** ex-14.
- **Border:** 3px navy.
- **Internal Padding:** 32px on phones, 48px to 64px on desktop.

### Tags
- White face, navy label text, 8px radius, ex-4. On cyan or red fields the face stays white.

### Navigation
- A white slab bar with ex-8, sticky at 16px from the top. Logo mark at 40px plus the wordmark "lbn.design" set like the headline (Rubik 900, -0.03em, 1.5rem); links in 500 weight navy; primary button at the end. On phones the links collapse to a single "Menu" button that opens a cyan slab list.

### Route Selector (signature component)
- A row of toggle tags reading "I need: a website / a mobile app / Salesforce help / a brand". Selecting one lifts the matching service slabs 4px off the page (extrusion grows to 18px) and adds a cyan corner tag reading "On your route"; the toggle face turns cyan and presses onto its side. Pure client state, no persistence.

### Page Hero (inner pages)
- The home hero's grammar at a shorter height: cyan field, 3px navy rule beneath, kicker tag, display title with one outlined accent word (white fill, 2px navy text-stroke, 4px hard shadow), lede, optional actions, and a white `slab--xl` of page-specific art on the right that stacks under the copy on phones. Padding 120/64 on phones, 168/112 from 900px.

### Form Fields
- Label 700 above the control; optional marker in navy-soft. Controls: paper face, 2px navy outline, 10px radius, 52px min height, Rubik at 1.0625rem. Hover turns the face white; focus-visible shows a white-then-cyan double ring (3px + 3px) and no outline; invalid-after-interaction turns the outline red with a soft red ring. Selects use a drawn navy chevron. Fields never carry an extrusion; only the submit buttons do.
- Chip choices reuse the route toggle (tag pill that presses onto its side and turns cyan when selected, `aria-pressed`).
- Submission composes a mailto and offers "Copy instead"; the note beneath is `aria-live`.

### Pay Panel
- A white slab with headline, one sentence, the primary button, a muted setup note while the Stripe link is unset, and three cyan-square trust bullets.

### Drawn Line (signature component)
- A straight SVG path that draws itself on when scrolled into view (navy 3px, or red 4px inside the cyan "At LBN" panel); the dashed variant fades in. Used for the two-shops versus one-line diagrams. On narrow screens it becomes a plain vertical bar.

## Do's and Don'ts

### Do:
- **Do** draw depth as a navy diagonal side at 4 / 8 / 14 / 24px.
- **Do** let cyan own the hero and navy own the footer; color at region scale.
- **Do** keep the mark's outline weight: 3px navy on every slab and control, 2px on tags.
- **Do** let line devices (scribble, diagram links) draw on when they enter the viewport; respect prefers-reduced-motion by showing the final state. Never animate the mark's fills or strokes.
- **Do** author visuals (sample interfaces, boards, sticker sheets) out of the same slab vocabulary and label synthetic samples.

### Don't:
- **Don't** use blurred shadows, glass, gradients or gradient text.
- **Don't** put body text in white on `red`; use large bold text or switch the surface to navy.
- **Don't** add a fifth hue. Yellow, green and purple are outside the mark.
- **Don't** copy the reference illustrator's isometric scenes or dark grounds; take only the discipline of one heavy line.
- **Don't** introduce a second typeface. Rubik is the mark's face; a neutral grotesk was tried and rejected.
- **Don't** put an uppercase eyebrow above section headings.
