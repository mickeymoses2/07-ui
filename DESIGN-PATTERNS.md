# Design Patterns

This kit is built around a calm, premium, consultancy-style visual language: evidence, trust, delivery, and operational reliability.

## Core personality

- Corporate, not stiff.
- Professional, not generic.
- Image-led, not text-heavy.
- Clean and spacious, but compact.
- Trustworthy, with clear hierarchy and practical calls to action.

## Color system

Use navy for authority, green for momentum, white for clarity, and light grey for separation.

| Token | Default | Usage |
| --- | --- | --- |
| `--ui-primary` | `#062B55` | Headers, primary buttons, hero overlays, section anchors |
| `--ui-primary-2` | `#07305F` | Alternate navy surfaces |
| `--ui-footer` | `#03203F` | Footer and deep CTA backgrounds |
| `--ui-accent` | `#36A853` | CTAs, underlines, active states, icon alternates |
| `--ui-accent-soft` | `#E9F7ED` | Value pills, soft badges, highlighted panels |
| `--ui-text` | `#14213D` | Headings and important text |
| `--ui-body` | `#4A5568` | Paragraphs and secondary copy |
| `--ui-muted` | `#718096` | Metadata and supporting copy |
| `--ui-section` | `#F7F9FC` | Alternating backgrounds |
| `--ui-border` | `#E5EAF0` | Card and form borders |

## Typography pattern

- Headings: Montserrat, 700–800 weight.
- Body: Inter, 400–600 weight.
- Buttons and navigation: uppercase or semi-uppercase, 700–800 weight.
- Keep paragraphs short: one to three lines in cards, four to six lines in section intros.

## Layout rhythm

- Use `ui-section` for normal sections.
- Use `ui-section ui-section--light` to alternate long pages.
- Use `ui-container` for a centered max width.
- Use `ui-grid ui-grid--2`, `ui-grid--3`, or `ui-grid--4` depending on content density.
- Use split layouts for story and credibility sections.

Preferred section order for consultancy sites:

1. Hero with strong value proposition and two CTAs.
2. Compact service grid.
3. About or company story split panel.
4. Mission/values or proof cards.
5. Projects/previous work cards.
6. Why choose us checklist.
7. CTA band.
8. Footer.

## Hero pattern

Use realistic photography and a navy overlay. The hero should sell clarity quickly:

- H1: one strong promise.
- Paragraph: one sentence explaining who the brand helps and how.
- CTAs: primary action + secondary information route.
- Avoid placing long paragraphs in the hero.

## Card pattern

All cards should share:

- White background.
- `1px` border.
- 14–18px radius.
- Soft navy-tinted shadow.
- Small hover lift.
- Icon badge or image top.

Card text rule: title + two-line description. If content needs more, link to an inner page.

## Image pattern

Best image types:

- Business teams in meetings.
- Analytics/dashboard review.
- Fieldwork and training sessions.
- Logistics/fleet coordination.
- Modern office environments.
- Partnership and stakeholder meetings.

Avoid generic cartoons unless the website is intentionally illustrative.

## Compact-section rule

On desktop, most homepage sections should stay visually compact:

- Hero: 580–650px.
- Service grid: 2 rows where possible.
- Split panels: around 420–560px.
- CTA: 260–360px.

Inner pages can be longer, but start with short heroes of 260–360px.

## Accessibility pattern

- Every form field has a visible label.
- Every interactive element has a visible focus state.
- Decorative images use empty alt text or `aria-hidden`.
- Use readable contrast on navy and green surfaces.
- Respect `prefers-reduced-motion`.

## Naming convention

Component classes use the `ui-` prefix so the kit can live alongside existing website CSS:

- `ui-header`
- `ui-hero`
- `ui-card`
- `ui-service-card`
- `ui-project-card`
- `ui-button`
- `ui-footer`

