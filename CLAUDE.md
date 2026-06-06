# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```

There are no tests configured.

## Stack

- **Next.js 16.2.4** — App Router, `src/app/` directory. Read `node_modules/next/dist/docs/` before writing Next.js code; this version has breaking changes from older releases.
- **React 19.2.4** with TypeScript (strict mode)
- **Tailwind CSS v4** — configured entirely via `@theme {}` in `src/app/globals.css`, not `tailwind.config.js`
- Path alias: `@/*` → `./src/*`

## Architecture

### Color system
All design tokens live in the `@theme {}` block in `globals.css`. Colors follow a Material Design 3 naming convention (`--color-primary`, `--color-on-surface`, `--color-surface-container-high`, etc.) and are used as Tailwind utility classes (`bg-primary`, `text-on-surface`, etc.).

### Typography
Two Google Fonts loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables:
- `--font-space-grotesk` → used by `font-headline`, `font-label`, `font-display` utilities
- `--font-plus-jakarta-sans` → used by `font-body`

Material Symbols icons are loaded via a `<link>` tag in `layout.tsx` and used with `<span className="material-symbols-outlined">icon_name</span>`. Fill state is toggled with inline `fontVariationSettings`.

### Page layout pattern
`layout.tsx` only sets the HTML shell, fonts, and dark mode class. Each page file composes `<TopNavBar />`, `<main>`, `<Footer />`, and `<MobileBottomNav />` directly — there is no shared layout per route.

### Custom Tailwind utilities (`globals.css`)
- `.glass-panel` — frosted glass surface
- `.tactical-grid` — subtle cyan grid background pattern
- `.neon-glow-primary` / `.neon-glow-cyan` / `.neon-glow-magenta` / `.neon-glow-border` — box-shadow glow effects
- `.neon-text-secondary` — text-shadow glow
- `.hide-scrollbar` — cross-browser scrollbar hide

### Scrolling tickers
Pages use CSS `animate-[marquee_30s_linear_infinite]` on a `w-fit` container with the content duplicated in an `aria-hidden` sibling for seamless infinite scroll.

### BeaconFormEmbed
`src/components/BeaconFormEmbed.tsx` is a client component that dynamically injects an external signup form script from `beacon.thorsonweb.co.uk`. Style overrides are injected into `<head>` via `useEffect` to theme the form using the site's CSS variables. The form is mounted by the script into `<div id="beacon-form">`.
