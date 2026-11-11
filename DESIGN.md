---
name: Dhrupesh Brahmbhatt
description: A haute-horlogerie specification sheet for a backend engineer's portfolio.
colors:
  ground: "#f4f3f0"
  ink: "#141416"
  ink-2: "#3c3c42"
  muted: "#6b6b70"
  hair: "rgba(20, 20, 22, 0.18)"
  hair-strong: "rgba(20, 20, 22, 0.42)"
  blue: "#1e3f8f"
  anthracite: "#17171a"
  on-dark: "#f4f3f0"
  on-dark-muted: "rgba(244, 243, 240, 0.62)"
  on-dark-hair: "rgba(244, 243, 240, 0.18)"
  blue-on-dark: "#9db3ff"
typography:
  display-xl:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(44px, 6vw, 88px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 96"
  display-lg:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(34px, 4vw, 58px)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 96"
  display-md:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(26px, 2.4vw, 34px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 48"
  figure:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(24px, 2.2vw, 32px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontFeature: "lnum, tnum"
    fontVariation: "\"opsz\" 72"
  result-italic:
    fontFamily: "Bodoni Moda Italic, Georgia, serif"
    fontSize: "1.12em"
    fontWeight: 400
    lineHeight: 1.4
    fontVariation: "\"opsz\" 24"
  lede:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 300
    lineHeight: 1.55
  body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "tnum"
  body-sm:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "11.5px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.18em"
  reference:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: "0.06em"
    fontFeature: "tnum"
rounded:
  none: "0px"
  dot: "50%"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  column-gap: "clamp(16px, 2.4vw, 40px)"
  label-column: "160px"
  label-gap: "40px"
  row: "18px 0 16px"
  entry: "36px 0"
  section-top: "clamp(72px, 9vw, 128px)"
  max-width: "1280px"
components:
  text-action:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 0 12px"
  text-action-hover:
    textColor: "{colors.blue}"
  text-action-quiet:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
    padding: "14px 0 12px"
  nav-bar:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    height: "64px"
  spec-row:
    textColor: "{colors.ink}"
    padding: "{spacing.row}"
  correspondence-block:
    backgroundColor: "{colors.anthracite}"
    textColor: "{colors.on-dark}"
  status-dot:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.dot}"
    size: "6px"
  status-dot-open:
    backgroundColor: "{colors.blue}"
    rounded: "{rounded.dot}"
    size: "6px"
---

# Design System: Dhrupesh Brahmbhatt

## Overview

**Creative North Star: "The Manufacture's Specification Sheet"**

The site reads like a haute-horlogerie catalogue of references: a cool platinum sheet, ink set in a high-contrast Didone, and every claim filed as a numbered row with a date and a measured figure. Luxury here is whitespace and restraint; precision is the 1px hairline, the tabular numeral and the before-and-after set in the same figures. Nothing is boxed, lifted or shaded. Structure comes entirely from hairline rules, a 12-column grid and a fixed 160px label column that runs down every section like the left margin of a ledger.

Density is low and deliberate. A page is a sequence of sheets: a Roman section numeral in Bodoni italic, a display headline with at most one italic word in blued steel, a hairline that draws itself in from the left, then rows. The one change of material is the anthracite correspondence block at the foot, the only dark surface in the system.

Motion is quiet and mechanical: rules draw left to right once, text rises 10px and fades in on a staggered delay, a hovered row grows a blued hairline beneath it. Everything is present at rest under reduced motion and without JavaScript.

**Key Characteristics:**
- Cool platinum ground, ink type, one blued-steel accent.
- Bodoni Moda display with optical sizing; Hanken Grotesk text with tabular numerals.
- Hairlines, not containers: no cards, no shadows, no gradients, square corners.
- Every record carries a reference number and a measured result.
- Text actions only: tracked small caps over a 1px underline that turns blue.
- One anthracite block, reserved for correspondence.

## Colors

A near-monochrome sheet of cool white and ink, with a single thermally blued steel accent used sparingly.

### Primary
- **Blued Steel** (blue): the only chromatic colour. Used for the single italic word in a display headline, link and action hover, the live hairline under a hovered specification row, focus outlines, text selection, the open-status dot and the signature flourish.
- **Blued Steel on Dark** (blue-on-dark): the lightened accent for the italic word and action hover inside the anthracite block, where the base blue would fail contrast.

### Neutral
- **Platinum Ground** (ground): the page, the nav (at 92% over content with a 6px blur), the dropdown menu and the signature intro sheet. Cool, not cream.
- **Ink** (ink): headlines, primary text, reference numbers, action underlines and the drawn rule.
- **Graphite** (ink-2): lede and body copy, quiet actions.
- **Muted Steel** (muted): small-caps labels, section numerals, secondary notes, the "before" value in a figure.
- **Hairline** (hair): row and section dividers, the resting rule under a drawing line.
- **Strong Hairline** (hair-strong): the top rule of a specification table, quiet-action underline, the menu border, stack separators and figure arrows.
- **Anthracite** (anthracite): the correspondence block and footer; nowhere else.
- **On Dark** (on-dark, on-dark-muted, on-dark-hair): text, secondary text and hairlines inside the anthracite block.

### Named Rules
**The One Blue Rule.** Blued steel marks interaction, focus, or the one emphasised italic word per headline. It never fills a surface, never colours body copy, and never appears twice in one headline.

**The One Dark Sheet Rule.** Anthracite is the correspondence block only. Do not alternate light and dark sections.

## Typography

**Display Font:** Bodoni Moda variable, roman and italic, self-hosted (with Didot, Georgia, serif)
**Body Font:** Hanken Grotesk variable 300 to 500, self-hosted (with Helvetica Neue, Arial, sans-serif)

**Character:** A high-contrast Didone with its optical-size axis tuned per role against a neutral grotesque with tabular figures: the engraved dial face and the printed movement specification.

### Hierarchy
- **Display XL** (400, clamp(44px, 6vw, 88px), 1.02, opsz 96): the page headline only; one per page.
- **Display LG** (400, clamp(34px, 4vw, 58px), 1.06): section headings.
- **Display MD** (400, clamp(26px, 2.4vw, 34px), 1.12, opsz 48): employer names, project names, the correspondence statement.
- **Figure** (400, clamp(24px, 2.2vw, 32px), 1.05, lining tabular numerals, opsz 72): measured results in the specification table; a trailing "+" drops to Hanken at 0.62em.
- **Result Italic** (Bodoni italic, 1.12em, 1.4, opsz 24): result statements and project one-liners.
- **Section Numeral** (Bodoni italic, 22px, muted): Roman numerals I to IV in the section head's label column and the nav.
- **Lede** (300, clamp(18px, 1.5vw, 21px), 1.55, max 36em): the opening paragraph and availability note; strong runs go to 500 ink.
- **Body** (400, 16.5px, 1.65, max 60ch): entries and project text; the problem line of an entry is set 500 in ink.
- **Body Small** (400, 14.5px, 1.6, muted): dates, roles, section-head notes (max 28ch).
- **Label** (500, 11.5px, 0.18em tracking, uppercase, muted or ink): field labels, nav links, footer.
- **Reference** (500, 13px, 0.06em, tabular): row and entry reference numbers; turns blue when its row is hovered.

### Named Rules
**The One Italic Word Rule.** A display headline may set one closing phrase in Bodoni italic, and that phrase is blue. The rest stays roman ink.

**The Tabular Rule.** Body text runs with tabular numerals on; figures are always set in lining tabular Bodoni so before and after align.

## Layout

A centred sheet, 1280px max, with a fluid gutter (clamp(20px, 4vw, 56px)). Two grids carry everything: a 12-column grid (column gap clamp(16px, 2.4vw, 40px)) for the hero and correspondence, and a ledger grid at 900px and up whose first column is a fixed 160px label column with a 40px gap, used by section heads, entries, project plates and the skills table. Entries split 160px / 5fr / 4fr; project plates 160px / 4fr / 5fr; section heads 160px / 1fr / auto (numeral, heading, note).

Sections open with clamp(72px, 9vw, 128px) of space above. Rows breathe at 18px top and 16px bottom in the specification table, 22px in the skills table, 36px for entries and clamp(36px, 4vw, 56px) for plates. Below 900px every ledger collapses to one column; below 960px the nav collapses to the name plus a details menu. The hero places the headline in columns 1 to 7 and the specification table in 8 to 12 at the lg breakpoint, stacking below it.

## Elevation & Depth

Flat. There are no drop shadows anywhere; depth is conveyed by hairline weight (hair versus hair-strong) and by the single anthracite block. The sticky nav separates itself with a 1px bottom hairline and a translucent ground at 92% with saturate(140%) blur(6px), not a shadow. There is no box-shadow anywhere in the build.

### Named Rules
**The Hairline Rule.** Every division is a 1px line. Containers, cards and lifted surfaces do not exist in this world.

## Shapes

Square everything: no border radius on actions, menus, rows or blocks. The only round form is the 6px status dot. Lines are 1px; the drawing rule and the hovered-row line scale in from the left edge. The action arrow is a long, thin single-stroke SVG (18 by 10, 1px stroke, round caps). The icon is the signature monogram in ink with a blued underline on the platinum ground.

## Components

### Text Actions
Tracked small caps sitting on a hairline, never a filled button.
- **Shape:** square, underline only (1px ink border-bottom), padding 14px 0 12px, 12px gap to the arrow.
- **Primary:** label type at 13px, 0.16em tracking, ink text and ink underline.
- **Quiet:** graphite text over a strong-hairline underline (LinkedIn, GitHub, CV, project links).
- **Hover / Focus:** text and underline turn blue over 180ms; the arrow slides 4px right over 260ms on the house ease-out. Focus is a 1px blue outline offset 4px.
- **On dark:** on-dark text and underline; quiet uses on-dark-muted over on-dark-hair; hover goes to blue-on-dark.

### Navigation
- **Style:** sticky 64px bar, ground at 92% with blur, 1px hairline beneath. Name at left in Bodoni at 19px (opsz 24).
- **Links:** label type in ink, each preceded by its Roman numeral in muted Bodoni italic at 13px; hover turns both blue. "Write to me" sits last as an underlined label.
- **Mobile (below 960px):** links hide; a details/summary "Menu" opens a square ground panel with a strong-hairline border, 240px minimum, rows padded 12px 18px with the numeral right-aligned and a blue "Write to me" last. Works without JavaScript.

### Specification Table
The signature record. A list under a strong top hairline; each row is a 40px reference column plus a content column, hairline beneath. Content: the subject in body ink, then the figure (muted before value, strong-hairline arrow, ink after value) with a small-caps note right-aligned. Hovering a row draws a blue hairline across its bottom over 420ms from the left.

### Entries and Plates
Work entries and project plates are ledger rows under a hairline: reference and date (or status) in the label column, problem in 500 ink then action or build in body, a dot-separated stack line in muted 13px, and a result in Bodoni italic. Hovering the row turns its reference blue. Project status is a small-caps label with a 6px dot: ink for shipped, solid blue for in testing.

### Section Head
Roman numeral in muted Bodoni italic in the label column, Display LG heading with its optional blue italic phrase, a short muted note at right, then a drawing rule.

### Drawing Rule
A 1px hair line with an ink line over it that scales from 0 to full width over 900ms on cubic-bezier(0.16, 1, 0.3, 1) when its section enters view, once. Content in the section rises 10px and fades over 700ms with per-element delays. Without JavaScript or under reduced motion the rule and content are simply present.

### Correspondence Block
Full-bleed anthracite section holding the closing statement (Display MD scaled to clamp(26px, 2.8vw, 40px) with one blue-on-dark italic phrase), the availability lede, a column of text actions and the small-caps colophon.

### Signature Intro
A full-screen ground sheet with the handwritten signature drawn by a pen: each glyph strokes in at near-constant speed (0.14s to 1.94s), ink fills behind the stroke over 320ms, a blue 1.4px flourish underlines the surname, and the sheet lifts 10px and fades at 2.5s over 450ms. Pure CSS; any click or key press skips it, and it is absent under reduced motion. The hero is painted beneath, so it does not rise a second time.

## Do's and Don'ts

### Do:
- **Do** divide with 1px hair or hair-strong lines and let whitespace carry the luxury.
- **Do** give every record a reference number and a measured result (entries add a date), with figures in lining tabular Bodoni.
- **Do** put labels, dates and references in the 160px label column at 900px and up.
- **Do** set actions as tracked small caps on a 1px underline that turns blue on hover, with the thin SVG arrow.
- **Do** keep blued steel to interaction, focus and the one italic headline phrase.
- **Do** make every motion present at rest under reduced motion and without JavaScript.

### Don't:
- **Don't** use cards, drop shadows, gradients or rounded corners; the only round shape is the 6px status dot.
- **Don't** add filled or pill buttons.
- **Don't** add a second dark section or alternate light and dark sheets.
- **Don't** use blue on body copy, fills or more than one phrase per headline.
- **Don't** warm the ground toward cream or introduce a second accent hue.
- **Don't** set display type in a system face or fall back to Hanken for headlines.
