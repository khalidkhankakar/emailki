# Design — emailki

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page. Extend this file when the system
needs to grow.

## Genre
playful

## Macrostructure Family
- Marketing pages: Marquee Hero with off-register product composition and a statement footer.
- App pages: Component Playground with dense template navigation and preview/code split.
- Content pages: Long Document, typography only.

## Theme
- `--color-paper` oklch(0.9885 0.0057 84.5659)
- `--color-paper-2` oklch(0.9686 0.0091 78.2818)
- `--color-paper-3` oklch(0.9363 0.0218 83.2637)
- `--color-paper-4` oklch(0.9 0.05 74.9889)
- `--color-ink` oklch(0.2161 0.0061 56.0434)
- `--color-muted` oklch(0.5534 0.0116 58.0708)
- `--color-rule` oklch(0.8866 0.0404 89.6994)
- `--color-accent` oklch(0.5553 0.1455 48.9975)
- `--color-accent-2` oklch(0.3598 0.0497 229.3202)
- `--color-accent-3` oklch(0.6806 0.1423 75.834)
- `--color-focus` oklch(0.7049 0.1867 47.6044)

## Typography
- Display: Merriweather, weight 900, style normal.
- Body: Oxanium, weight 400 to 800.
- Mono: Fira Code, weight 500 to 700.
- Wordmark: Fira Code, weight 700.
- Display tracking: 0.
- Type scale anchor: `--text-display = clamp(3.2rem, 8vw + 0.25rem, 8.5rem)`.

## Spacing
4-point named scale. Pages must use named tokens (`var(--space-md)`), never raw
values for repeatable spacing.

## Motion
- Easings: `--ease-out`, `--ease-in`, `--ease-in-out`.
- Reveal pattern: none for app pages; restrained hover lift for interactive tiles.
- Reduced-motion fallback: opacity-only, no spatial motion beyond 150 ms.

## Microinteractions Stance
- Silent success.
- Hover lift only on actionable elements.
- Focus rings appear instantly.
- Dashboard mode changes are instant and preserve scroll position.

## CTA Voice
- Primary CTA: slab or pill depending on context, single-line verb phrase.
- Secondary CTA: typographic link or bordered chip.

## Per-page Allowances
- Marketing pages may use Tier-A CSS product composition.
- App pages must not use decorative hero imagery.
- Content pages stay typography only.

## What Pages Must Share
- emailki wordmark.
- Warm OKLCH palette and low-chroma accent placement.
- Merriweather display, Oxanium body, Fira Code mono.
- Off-register alignment: one deliberate translated layer or mismatched rule per major viewport.
- Focus ring, radius, and button rhythm.

## What Pages May Differ On
- Marketing pages may use larger display type and playful composition.
- App pages may increase density and reduce display scale.
- Footer appears only on public pages.

## Exports

### tokens.css
See `tokens.css` at the project root.
