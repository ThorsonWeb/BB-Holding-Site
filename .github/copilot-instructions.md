# Copilot instructions for BB-Holding-Site

## Build, lint, and test commands

Use npm in this repository.

- `npm run dev` - start the Next.js dev server
- `npm run build` - create the static production build in `out/` for Cloudflare Pages
- `npm run start` - run the production server after a build
- `npm run lint` - run ESLint with the repo's Next.js + TypeScript config

There is currently **no test runner or `npm test` script configured** in `package.json`, so there is no supported full-suite or single-test command yet.

## High-level architecture

This is a small **Next.js App Router** marketing/holding site under `src/app`:

- `src/app/layout.tsx` is the root layout. It sets global metadata, loads the two `next/font/google` fonts into CSS variables, imports `globals.css`, forces the dark theme on `<html>`, and adds the Material Symbols stylesheet in `<head>`.
- Route pages are plain route files: `/` in `src/app/page.tsx`, `/for-players` in `src/app/for-players/page.tsx`, `/for-venues` in `src/app/for-venues/page.tsx`, `/roadmap` in `src/app/roadmap/page.tsx`, and `/join` in `src/app/join/page.tsx`.
- Shared chrome is implemented with reusable components in `src/components` rather than nested route layouts: `TopNavBar`, `Footer`, and `MobileBottomNav`.

The important routing detail is that **the shared navigation is composed manually inside each page**, not by `layout.tsx`:

- `/`, `/for-players`, `/for-venues`, and `/roadmap` render `TopNavBar`, page content, `Footer`, and `MobileBottomNav`.
- `/join` is intentionally different: it is a focused signup/landing flow that does **not** render `TopNavBar` or `MobileBottomNav`, and only shows `Footer` on desktop (`md` and up).

Styling is centralized in `src/app/globals.css` using **Tailwind CSS v4**:

- the file starts with `@import "tailwindcss";`
- design tokens live in a Tailwind `@theme` block (`--color-*`, `--font-*`, custom animations)
- shared utility classes such as `glass-panel`, `tactical-grid`, and the Material Symbols defaults are also defined there
- `next.config.ts` uses `output: "export"` and `images.unoptimized: true` so the site can deploy as a static export to Cloudflare Pages

## Key conventions

- Use the TypeScript path alias `@/*` for imports from `src` (for example `@/components/TopNavBar`), not long relative paths.
- Keep the existing **Battle Beacon "tactical / neon sci-fi" visual language** intact: uppercase headline-heavy copy, cyan/magenta/lime accent colors, and utility classes built from the theme tokens in `globals.css`.
- Prefer reusing the shared chrome components in `src/components` instead of duplicating nav/footer markup in a page.
- If a new route should share the standard site shell, follow the current page pattern and compose `TopNavBar` + main content + `Footer` + `MobileBottomNav` inside that route file. Do not assume `layout.tsx` already provides that shell.
- Fonts are wired through `next/font/google` in `src/app/layout.tsx` and exposed as `font-headline` / `font-body` theme tokens. Reuse those tokens instead of introducing ad hoc font classes.
- Pages currently use plain `<img>` tags for the large remote marketing images. `next.config.ts` does **not** define `images.remotePatterns`, so switching those images to `next/image` requires updating Next.js image configuration first.
- `public/` currently only contains default static assets; most page imagery is remote and embedded directly in the route components.
- A repo-scoped Playwright MCP server is configured in `.vscode/mcp.json` for browser-based UI inspection and interaction from Copilot-compatible editors.
- `eslint.config.mjs` extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`, so keep changes compatible with strict TypeScript and standard Next.js lint rules.
