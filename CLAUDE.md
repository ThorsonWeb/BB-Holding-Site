# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Static export build to out/ (for Cloudflare Pages)
npm run start    # Run the production server after a build
npm run lint     # Run ESLint
```

There are no tests configured.

## Stack

- **Next.js 16.2.4** — App Router, `src/app/` directory. Read `node_modules/next/dist/docs/` before writing Next.js code; this version has breaking changes from older releases.
- **React 19.2.4** with TypeScript (strict mode)
- **Tailwind CSS v4** — configured entirely via `@theme {}` in `src/app/globals.css`, not `tailwind.config.js`
- Path alias: `@/*` → `./src/*`
- `next.config.ts` sets `output: "export"` and `images.unoptimized: true` — the site deploys as a static export to Cloudflare Pages, so anything requiring a Node server runtime (dynamic API routes, `next/image` optimization, etc.) won't work. Pages use plain `<img>` tags for remote marketing images.

## Architecture

### Page layout pattern
`layout.tsx` only sets the HTML shell, fonts, and dark mode class — there is no shared per-route layout. Each page file composes `<TopNavBar />`, `<main>`, `<Footer />`, and `<MobileBottomNav />` directly. `/join` is an exception: it skips `TopNavBar`/`MobileBottomNav` in its content flow and only shows `Footer` on desktop (`md` and up), since it's a focused signup flow.

### Game theming system (`/landing`, `/join`)
Marketing pages support a per-game-tabletop theme via a `?theme=` query param (`40k`, `pokemon`, `mtg`, `starwars`, `boardgames`, or `default`). Two independent pieces swap together, both keyed off the same `VALID_THEMES`/`THEMES` list:
- **Visual theme** — `ThemeLoader.tsx` (used standalone on `/join`) or the inline equivalent in `LandingContent.tsx` injects a `<link>` into `<head>` pointing at `/themes/{theme}.css` (static files in `public/themes/`), which override the `@theme` color tokens.
- **Copy** — `src/themes/{theme}.json` holds per-theme marketing copy (headline, pain points, solution bullets, CTA text), typed by the `ThemeCopy` interface in `LandingContent.tsx`, and is rendered directly (no CSS involved).

`GameSelector.tsx` links to `/landing?theme=X`; `JoinLink.tsx` forwards whatever theme is currently active to `/join?theme=X` so the visual theme carries through the funnel. When adding a new game theme, both a `public/themes/{name}.css` file and a `src/themes/{name}.json` copy file are needed, plus adding the key to `VALID_THEMES` (in `ThemeLoader.tsx` and `JoinLink.tsx`) and `THEMES` (in `LandingContent.tsx`).

### Color system
All design tokens live in the `@theme {}` block in `globals.css`. Colors follow a Material Design 3 naming convention (`--color-primary`, `--color-on-surface`, `--color-surface-container-high`, etc.) and are used as Tailwind utility classes (`bg-primary`, `text-on-surface`, etc.).

### Typography
Three Google Fonts (the "Futuristic" spec in `agents/DESIGN.md`) are loaded via `next/font/google` in `layout.tsx`. Their variable classes go on `<html>`, not `<body>`, because the `@theme` tokens resolve on `:root` and come out empty otherwise:
- `--font-audiowide` → `font-headline`, `font-display`, and `h1`–`h3` by default. Audiowide has a single 400 weight; faux bold is switched off, so `font-bold`/`font-black` on headings has no effect.
- `--font-roboto` → `font-body`
- `--font-anonymous-pro` → `font-label` (mono, for small uppercase labels, nav links and form field labels)

Embed style overrides reference the semantic tokens (`var(--font-headline)` etc.), never the raw font variables. Radii follow the spec too: `rounded-sm` is 4px and `rounded-md` is 8px, and those are the only two in use (phone mockups and `rounded-full` pills excepted).

Material Symbols icons are loaded via a `<link>` tag in `layout.tsx` and used with `<span className="material-symbols-outlined">icon_name</span>`. Fill state is toggled with inline `fontVariationSettings`.

### Custom Tailwind utilities (`globals.css`)
- `.glass-panel` — frosted glass surface
- `.tactical-grid` — subtle cyan grid background pattern
- `.neon-glow-primary` / `.neon-glow-cyan` / `.neon-glow-magenta` / `.neon-glow-border` — box-shadow glow effects
- `.neon-text-secondary` — text-shadow glow
- `.hide-scrollbar` — cross-browser scrollbar hide

### Scrolling tickers
Pages use CSS `animate-[marquee_30s_linear_infinite]` on a `w-fit` container with the content duplicated in an `aria-hidden` sibling for seamless infinite scroll.

### Screenshots
Every product screenshot slot is listed in `src/content/screenshots.json` (`app` = Battle Beacon phone shots, `crm` = NorthMark CRM desktop shots). Render them with `PhoneShot`, `PhoneStage` or `BrowserShot` from `src/components/Screenshot.tsx`. These are server components that check `public/screenshots/{app|crm}/{id}.{png,jpg,webp}` at build time and show a labelled placeholder when the file is missing, so they can't be used inside `"use client"` files. `npm run screenshots` regenerates `SCREENSHOTS.md`, the shot list with what to capture and where each one appears. The CRM images are copied from the NorthMark CRM repo's `wwwroot/img/site`.

### Products and links
The site promotes two products: the **Battle Beacon** player app (the "Battle Buddies" .NET MAUI repo) and **NorthMark CRM**, the venue platform (formerly Beacon CRM, repo `Beacon-CRM`). External NorthMark links use the constants in `src/content/links.ts`. The `Beacon*Embed` component names and `beacon.thorsonweb.co.uk` script URLs are internal and weren't renamed.

### Beacon form embeds
Three client components follow the same pattern: dynamically inject an external form script from `beacon.thorsonweb.co.uk`, inject style overrides into `<head>` via `useEffect` to theme the form with the site's CSS variables, and let the script mount into a form container div. Each wraps a different embedded Beacon form:
- `BeaconFormEmbed.tsx` — early-access signup, used on `/join`
- `BeaconCrmFormEmbed.tsx` — used on `/app-delete-account`
- `BeaconFeedbackFormEmbed.tsx` — used on `/app-feedback`

### App-facing legal/account pages
`/app-privacy`, `/app-eula`, `/app-delete-account`, and `/app-feedback` are standalone pages for the mobile app (privacy policy, EULA, account deletion request, feedback form) distinct from the marketing site's own `/privacy`.
