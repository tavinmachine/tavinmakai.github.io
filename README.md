# Your Name — Simple Portfolio (v2)

A one-page, scroll-snap site: big hero with your logo, name, and 3 current
items for sale, then a quiet portfolio section and a subtle recognition
section below. Clicking an item opens a popup with price, stock, and how
to reach you — no cart, no checkout, matches selling in person.

## Files
- `index.html` — all content
- `styles.css` — all styling (edit colors/fonts once, at the top of the file)
- `script.js` — mini header fade-in, popup open/close logic

## Customize

**Your name / tagline:** search `index.html` for "Your Name" and "Illustrator
based in Montreal" and replace.

**Your logo:** the hero currently shows a simple placeholder circle-and-line
mark (`.logo-mark` in `index.html`). Replace the whole `<svg>...</svg>` block
with your own SVG logo, or swap it for an `<img>` tag pointing to a logo file
in a new `images/` folder.

**The 3 items for sale:** each item has two parts you need to edit together —
1. The card in the `.works-row` (title + price shown on the main page)
2. The matching `<dialog>` near the bottom of `index.html` (same `id` as the
   card's `data-dialog` attribute) — this holds the price, stock count,
   pickup note, and your contact link. Update the stock count by hand as
   things sell.

**Real photos instead of color placeholders:** swap `swatch-1` through
`swatch-6` (used on cards, dialogs, and the portfolio grid) for real `<img>`
tags — same process as described in the previous version's README.

**Contact link:** currently points to an Instagram placeholder and a
placeholder email — update both to yours.

**Portfolio / Recognition sections:** these are intentionally light right
now — a few placeholder tiles and one or two placeholder credits. Add more
`<div class="portfolio-tile">` or `<li>` entries as you have real work and
credits to show.

## Deploying

Same as before — upload `index.html`, `styles.css`, `script.js`, `CNAME`,
and this README to the root of your `tavinmakai.github.io` repo (Add file →
Upload files → Commit). Since it's a `username.github.io` repo, GitHub Pages
is already live at `https://tavinmakai.github.io` — no extra setup needed.

If you're pointing a custom domain at it through Namecheap, edit the `CNAME`
file with your real domain and follow the DNS steps from the earlier README
(4 A records + a `www` CNAME in Namecheap's Advanced DNS tab).
