---
name: Lines by Nick
description: A hand-pulled screen print. Black keyline (handwritten code glyphs and heavy-outline isometric objects) with saturated flat color passes laid under it on bone stock.
colors:
  ink: "#231f20"
  bone: "#f3efe4"
  bone-deep: "#e7e0cf"
  white: "#fffdf8"
  coral: "#ff5a3c"
  coral-deep: "#d93c21"
  cobalt: "#2b4cf2"
  cobalt-deep: "#1d36b8"
  yellow: "#ffc940"
  yellow-deep: "#e0a81a"
  mint: "#8be0c1"
  mint-deep: "#4cbf98"
  ink-soft: "#5a5553"
typography:
  display:
    fontFamily: "Unbounded, Arial Black, sans-serif"
    fontSize: "clamp(min(2.5rem, 7.6vw), 5.4vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  display-sm:
    fontFamily: "Unbounded, Arial Black, sans-serif"
    fontSize: "clamp(min(2.25rem, 7vw), 4.6vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Unbounded, Arial Black, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Unbounded, Arial Black, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.2
  title-lg:
    fontFamily: "Unbounded, Arial Black, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  lede:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)"
    fontWeight: 500
    lineHeight: 1.45
  small:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "3px"
  md: "6px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ink}"
  button-keyline:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  tag:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  cell:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "48px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
---

# Design System: Lines by Nick

## Overview

**Creative North Star: "The Screen-Print Pull"**

Everything on the page is printed. There is one black keyline layer, and that layer holds two kinds of line: Nick's own handwriting (the `<lines by nick>` logo, the `<n>` mark, and the hand-drawn code glyphs: brackets, braces, slashes, semicolons, ampersand, at, percent, root, star, rocket, cursor) and the heavy, uniform outline of isometric objects drawn in the Dave Arcade register (screens, phones, paint tins, pencils, cards, blocks). Under the keyline sit saturated flat color passes: coral, cobalt, yellow and mint, each slightly oversized, flooding under the line the way a real pull does. The stock is bone, never pure white. The contrast that carries the identity is thin handwritten code against thick-outlined built forms, and both against hard flat color.

The page is laid out like a printed sheet: sections are cells ruled with ink hairlines, corners carry crop ticks, a registration cross marks where a section begins. Color commits at cell scale. A cell is bone, or it is entirely coral, cobalt, yellow or mint; color is never scattered as accents over a neutral ground. Density alternates: a dense two-stream passage earns a quiet single-measure one.

Confirmed rejections: the old extruded 3D lettermark world and its cyan/red/navy inks (replaced 2026-11-08); pastel fields (the owner wants color that punches); soft shadows and blur; Rubik.

**Key Characteristics:**
- One keyline, two hands: thin handwriting for code, heavy outline for objects.
- Four-ink run on bone: coral, cobalt, yellow, mint, used as whole fields.
- Misregistration is the only depth: a flat second-color pass offset 4px, never a blurred shadow.
- Ruled cells, crop ticks and registration marks organise the page like a sheet on the press.
- The brand line is the material: "Lines of code. Lines of ink. Lines by Nick." Copy keeps returning to the line.

## Colors

A four-ink run plus black and stock: every color is flat, saturated and used as a field, with black ink doing all the drawing.

### Primary
- **Press Ink** (`ink`): every line, all type, every outline and hairline. The one color that is never tinted.
- **Coral Pass** (`coral`): the action color. Primary buttons, the `Lines by Nick.` line in the hero, the ink-side stream's lead object, one field per page at most. Deep variant for its offset pass and pressed state.

### Secondary
- **Cobalt Pass** (`cobalt`): the code side. Screens and devices in the isometric drawings, the code-stream field, links in running text. Deep variant for pressed state. Type on cobalt is bone, never ink.
- **Chrome Yellow** (`yellow`): the emphasis field. Process steps, the close, highlights inside drawings. Always carries ink type.

### Tertiary
- **Mint Pass** (`mint`): the quiet color field for forms and the merged measure. Always carries ink type.

### Neutral
- **Bone Stock** (`bone`): the page ground and default cell fill.
- **Deep Bone** (`bone-deep`): inner hairlines inside drawings, disabled fills, table rules.
- **Stock White** (`white`): inputs, tags and the inside of printed blocks that must read lighter than the stock.
- **Soft Ink** (`ink-soft`): secondary text on bone and white only (7.6:1 on bone). Never on a color field; on a field, secondary text is ink at full strength.

### Named Rules
**The Whole-Cell Rule.** Color owns a cell or it stays off it. A section is bone or it is one color edge to edge; no tinted backgrounds behind a paragraph, no colored borders as decoration.

**The Two-Pass Rule.** Any element may carry at most two colors: its fill and one offset pass. The third color is always ink.

**The Ink-On-Cobalt Rule.** Cobalt is the only field that takes bone type. Every other field takes ink.

## Typography

**Display Font:** Unbounded (with Arial Black, sans-serif)
**Body Font:** Figtree (with Helvetica Neue, Arial, sans-serif)
**Hand Font:** none. Handwriting appears only as Nick's SVG assets, never as a webfont.

**Character:** Unbounded is a wide, heavy geometric grotesk with round terminals; set tight and black it reads like poster lettering pulled through a screen, which lets Nick's loose handwriting stay the only hand on the page. Figtree is a plain, sturdy humanist sans that disappears into running text and forms.

### Hierarchy
- **Display** (800, clamp(min(2.5rem, 7.6vw), 5.4vw, 4.75rem), 1.02): the hero's three lines and nothing else; the inner min() keeps all three lines whole on phones. Letter-spacing -0.03em.
- **Display small** (800, clamp(min(2.25rem, 7vw), 4.6vw, 4rem), 1.02): the close and inner-page heroes; always below the hero.
- **Headline** (700, clamp(1.75rem, 3.4vw, 2.75rem), 1.08): section titles inside cells.
- **Title** (600, 1.125rem, 1.2): process step names, form section names, phone service names.
- **Title large** (600, 1.375rem, 1.2): service names on desktop.
- **Lede** (Figtree 500, clamp(1.125rem, 1.5vw, 1.375rem), 1.45): the sentence under a headline, max 30em.
- **Body** (Figtree 400, 1.0625rem, 1.55): running text, 65ch max.
- **Small** (Figtree 400, 0.9375rem, 1.5): form notes, setup notes, the phone menu button.
- **Label** (Figtree 700, 0.8125rem, 0.08em, uppercase): tags, kicker labels, registration captions, table heads.

### Named Rules
**The One Hand Rule.** Handwriting is Nick's SVGs only. No script or handwritten webfont anywhere, including inner pages and the footer.

**The Poster Line Rule.** Display and headline lines never exceed 14 words; wrap by meaning, not by measure.

## Layout

The page is a sheet. A single centred column (max 1240px, 24px gutters, 48px from 900px up) is ruled as a grid of cells with 2px ink rules; adjacent cells share one rule, so the page reads as a ruled sheet rather than a stack of cards. Crop ticks (two 2px ink strokes, 14px long) sit outside the sheet's four corners at desktop widths; a registration cross (a 20px circle with crosshair, 2px ink) marks the top-left of each major section.

The home page is staged as two streams meeting: from the hero down, a code column and an ink column run side by side with one shared rule as the seam between them. Rows pair one code cell with one ink cell. Items begin to cross the seam (a brand object appears on the code side, a glyph on the ink side), and the page then admits a single full-width measure for the merged content: one studio, the process, the close. Inner pages take one stream each: a hero cell pair (copy + printed object), then a two-cell body (aside + form or panel).

The service stacks on the home page are plain Label lines ("React · Next.js · TypeScript"), never chips; chips are reserved for interactive choices in forms.

Spacing steps: 8, 16, 24, 48, 96. Cells pad 48px on desktop and 24px on phones. More space above a headline than below it (48 over, 16 under). Below 900px the two streams stack: code cells first, then ink cells, each row keeping its pair adjacent; crop ticks are dropped and rules go to 2px throughout.

## Elevation & Depth

No shadows anywhere. Depth is misregistration: a flat second-color pass under an element, offset 4px right and 4px down, with no blur. It belongs to buttons, printed blocks, and the isometric drawings' fills. Hover pulls the pass to 6px; press collapses it to 0 and moves the element 4px into the pass. Body copy, forms, hairlines and inner-page cells are always in register.

### Named Rules
**The In-Register Rule.** Only buttons, printed blocks and drawings may be out of register. Text is never offset or doubled.

**The No-Blur Rule.** `box-shadow` with any blur or spread is a defect. The only legal shadow is a hard offset of a palette color.

## Shapes

Square by default. Cells, fields and inputs have 0 radius. Buttons, tags and printed blocks have a 3px radius, enough to read as cut paper rather than CSS. Isometric drawings use a 30-degree projection with heavy 3px ink keylines, rounded joins, and flat fills; the handwritten glyphs keep their native irregular strokes and are never outlined, filled, or recolored away from ink. Hairline rules are 2px ink. There are no pills.

## Components

### Buttons
- **Shape:** cut-paper rectangle (3px radius), 2px ink keyline, Figtree 700 at 1.0625rem, 16px 28px padding, min height 54px.
- **Primary:** coral fill, ink text, coral-deep pass offset 4px 4px. The only coral control in a cell.
- **Keyline:** bone fill, ink text, ink pass offset 4px 4px. Secondary actions.
- **On cobalt:** bone fill, ink text; never a coral button on a cobalt field.
- **Hover / Focus:** pass extends to 6px 6px; focus-visible adds a 3px ink outline offset 3px (bone outline on cobalt).
- **Press:** element translates 4px 4px and the pass collapses to 0.
- **Disabled:** bone-deep fill, ink-soft text, no pass, no keyline change.

### Tags
- **Style:** stock white fill, 2px ink keyline, 3px radius, Label type, 8px 12px padding. Color variants take the field colors as fill with ink text (bone text on cobalt).
- **State:** a toggled tag (form chips) takes the yellow fill.

### Cells / Containers
- **Corner Style:** square.
- **Background:** bone, or one whole field color.
- **Rules:** 2px ink on shared edges; no double borders.
- **Internal Padding:** 48px desktop, 24px phone.
- **Marks:** optional registration cross at top-left; optional Label caption at top-right ("01 / Code", "02 / Ink").

### Inputs / Fields
- **Style:** bone fill at rest inside a stock-white form block, turning stock white on hover and focus; 2px ink keyline, 0 radius, 14px 16px padding, Figtree 400 at 1.0625rem, Figtree 700 labels above.
- **Focus:** keyline stays ink; a 3px cobalt outline offset 2px.
- **Error:** keyline turns coral-deep, message in coral-deep below the field.
- **Disabled:** bone-deep fill.

### Navigation
- A ruled bar at the top of the sheet: `<lines by nick>` handwritten logo at left (ink SVG, 170px wide), text links in Figtree 700, a coral primary button at right. On phones the links collapse behind a keyline "Menu" button into a full-width ruled sheet. Active link carries a 2px ink underline offset 6px.

### Printed Object (signature)
An isometric SVG drawing (own component per subject) built from two layers: a ghost color pass of every face offset 4px 4px, and the print on top, where each face is filled and keylined in back-to-front order so nearer faces cover the edges behind them (no hidden lines ever show). On load the pass and fill register onto the keyline (see motion). Drawings are authored in-house and labelled synthetic in code; any may be replaced by Nick's own.

### Glyph Scatter (signature)
Nick's handwritten code glyphs placed as ink SVG images inside a cell, sized 40 to 160px, rotated up to 12 degrees, never overlapping type. Used as the code stream's texture and as section punctuation; at most five glyphs per cell.

### Motion
One authored moment: the pull. On first paint the keyline is present; each drawing's color pass registers onto it, translating from -6px -6px at opacity 0 to its 4px resting offset at opacity 1 over 0.5s with an exponential ease-out, staggered 90ms in reading order (hero objects first, service rows after), while button and block passes extend from 0 to 4px; done within 1.2s. Hover and press on buttons move the pass only. Reduced motion renders everything in register with no animation.

## Do's and Don'ts

### Do:
- **Do** use Nick's SVG assets for every piece of handwriting at one magnification per context (the `scale` prop), so the pen weight never changes. On an ink or cobalt field the same drawing is shown inverted to bone; that is the only recoloring allowed.
- **Do** draw new illustrations in the Dave Arcade register: 3px uniform ink outline, flat saturated fills, isometric projection, no gradients, no inner shading.
- **Do** make a section one color edge to edge, or bone.
- **Do** keep "Lines of code. Lines of ink. Lines by Nick." as the hero copy and let section copy echo the line.
- **Do** share one 2px rule between adjacent cells.

### Don't:
- **Don't** use a blurred shadow, a gradient, glass, or a tinted panel behind text.
- **Don't** use pastel tints of the inks; a color is at full strength or absent.
- **Don't** offset or double any text; misregistration belongs to blocks and drawings only.
- **Don't** reintroduce the extruded lettermark, its cyan/red/navy inks, or Rubik.
- **Don't** set a handwritten or script webfont; the only hand on the page is Nick's.
- **Don't** copy Dave Arcade's subjects (arcade cabinets, pixel art) or Plan C's palette; adapt the register and the ruled-sheet grammar through this studio's own objects.
