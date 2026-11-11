---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/layout.tsx","components"]
---

# Surface: / (single-page portfolio)

Mode: Experience. The work leads from the first viewport.

Audience and job: hiring managers for backend / software engineer roles and freelance clients. Action: email or LinkedIn. Proof: measured outcomes from aviation operations (DnT Infotech), shipped products (Know Your Buy, ThinkTank, CampusConnect, WebChat). Constraints: static export to GitHub Pages under `/portfolio`, no backend, no contact form, no fabricated claims, fast on mid-range Android, GA id kept.

Chosen by: the user pinned the direction on 2026-11-10: "an elegant site that screams luxury with precision of design". A user-pinned direction beats the roll; the earlier Aircraft Technical Log build was replaced, not polished.

## Direction contract

THESIS: A haute-horlogerie specification sheet: the portfolio reads like a manufacture's catalogue of references, where luxury is whitespace and restraint and precision is the hairline rule, the tabular figure and the measured before-and-after. It refuses the dark-with-neon developer page and the cream-serif-terracotta "luxury" default alike.

OWN-WORLD: Platinum white ground (#F4F3F0, cool, not cream), ink #141416, muted #6B6B70, hairlines at 1px in rgba(20,20,22,.18). One accent: thermally blued steel (#1E3F8F), used only for links, the live rule under a hovered row, and one italic word in the headline. Display in Bodoni Moda (optical size axis, 400 and 500, italic for the emphasised word and for results), text in Hanken Grotesk 300 to 500 with tabular numerals and tracked small caps for labels. Rules draw in from the left on reveal. One anthracite block (#17171A) for the correspondence section. No cards, no shadows, no gradients.

STORY: The visitor sees a reference number, a one-line headline with one italic word, and a specification table whose first row says 2 to 3 minutes became 2 to 3 seconds. They believe it because every row carries a reference, a date and a measured result set in the same figures. They act through "Write to me" (mailto) and LinkedIn, set as text links with a hairline that turns blue.

FIRST VIEWPORT: Nav: a hairline bar with the name set small in Bodoni at left and five tracked small-cap links at right. Below, a 12-column grid. Columns 1 to 7: the headline "Backend engineering, forward deployed." in Bodoni at clamp(48px, 6.4vw, 96px) with "forward deployed" in italic; a 20px Hanken paragraph (profile summary), then the two text actions. Columns 8 to 12: the specification table, four rows with hairlines: reference · subject · figure in tabular numerals (before, arrow, after only where a true before exists), Bodoni for the figure, and a dated note. Beneath the grid a single hairline across the full width and the section heading "I. Work" begins just under the fold.

FORM: Haute-horlogerie specification sheet, pinned by the user in their own words on 2026-11-10 ("make a elegant site for the portfolio that's screams luxury with precision of design"), which replaced the earlier rolled direction (seed:898f15276b49948d, Aircraft Technical Log). No roll was run for this direction, so no seed applies to it.

Signature interaction: on reveal each section's top hairline draws from 0 to 100% width over 900 ms with an exponential ease-out, once; the hero headline and table fade and rise 10px in sequence (120 ms apart). Hovering a specification row draws a blued hairline under it. Reduced motion: everything present at rest.

Mobile: single column; the spec table follows the headline; labels stay small caps; headline 44px; nav collapses to name plus a details menu.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

Opening: a signature intro (Herr Von Muellerhoff outlines, generated to content/signature.ts) is written by a pen on one easing curve (lands moving, glides, settles), ink settles behind it, a blued-steel flourish underlines the surname, and the sheet lifts away. Plays on every load because the user asked for that on 2026-11-11 ("make sure the signature intro runs even when the site is loaded"); timing approved by the user: pen 1.8 s, hold about 0.27 s, lift at 2.5 s. Skipped on click or key press and for reduced motion; pure CSS so it ends without JavaScript, and the hero paints underneath so LCP is unaffected.
