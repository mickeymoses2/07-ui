# 07 UI — Corporate Consultancy Website Kit

`07-ui` is a lightweight, reusable HTML/CSS/JS design kit for premium corporate websites. It is based on the PrimeLink Hawema Enterprise visual system: deep navy, fresh green accents, generous white space, compact image-led sections, rounded cards, and professional consultancy patterns.

Use it for websites serving consultancies, NGOs, development partners, logistics firms, ICT support providers, procurement companies, training organizations, and business service brands.

## What is included

- Design tokens for color, typography, spacing, radius, shadows, layout, and motion.
- Reusable CSS components: header, hero carousel, inner hero, cards, buttons, forms, CTA, footer, grids, pills, badges, checklists, image blocks, and map visual.
- Simple JavaScript for mobile navigation, carousel behavior, scroll reveal, and sticky-header state.
- Inline SVG icon sprite using navy/green line icon styling.
- A full demo page in `index.html`.
- Copy-ready section recipes in `patterns/`.
- Design guidance in `DESIGN-PATTERNS.md`.

## Quick start

Copy the `src` folder into your site and include:

```html
<link rel="stylesheet" href="src/primlink-ui.css">
<script type="module" src="src/primlink-ui.js"></script>
```

For the recommended typography, add this in the document head:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
```

Then open `index.html` for a complete working example.

## Local preview

```powershell
npm install
npm start
```

Open `http://127.0.0.1:7070`.

## Brand customization

Override tokens after importing the kit:

```css
:root {
  --ui-primary: #062B55;
  --ui-accent: #36A853;
  --ui-heading-font: "Montserrat", sans-serif;
  --ui-body-font: "Inter", sans-serif;
}
```

## Suggested page structure

1. Sticky header
2. Image-led hero or inner-page hero
3. Compact service/card grid
4. Split image/text story section
5. Values or benefits cards
6. Projects or proof section
7. CTA band
8. Deep navy footer

Keep homepage sections compact. On desktop, most sections should feel visually complete within about 650px unless the content naturally needs more room.

