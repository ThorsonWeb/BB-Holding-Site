# Handoff: Element Games x Battle Beacon Booking Landing Page

## Overview
A promo landing page for Element Games' Stockport Gaming Centre announcing that table booking and events now run through Battle Beacon. It combines Element Games branding with an embedded table-booking widget experience, plus an early-access CTA for Battle Beacon.

## About the Design Files
The bundled file (`Element Games x Battle Beacon Landing.dc.html`) is a **design reference built in HTML** — a working prototype showing intended look, layout, and interaction (game/day/table selection state), not production code to copy directly. Recreate this design in the target codebase's existing environment (React, Vue, etc.) using its established component patterns and libraries — or, if no frontend environment exists yet, choose the most appropriate framework and implement it there.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final as shown. Recreate pixel-perfectly using the codebase's existing libraries/patterns where they exist; otherwise implement exactly as specified below.

## Screens / Views
Single scrolling page, five sections:

### 1. Header
- Fixed-height bar, full width, background `#000`, bottom border 3px solid accent color.
- Padding: 20px 48px, flex row, space-between.
- Left: 38x38px logo mark (skewed -8deg square, accent bg, white "EG" wordmark, Oswald 700 20px) + "ELEMENT GAMES" wordmark (Oswald 600, 20px, white) + vertical divider + "North West Gaming Centre" label (Oswald 500, 14px, uppercase, letter-spacing 1px, color `#999`).
- Right nav: "Book a Table" / "Events" text links (14px, 600 weight, uppercase, color `#ccc`), and a solid "Sign In" pill button (accent bg, white text, 700 weight, 13px, padding 10px 20px, radius 2px).

### 2. Hero
- Padding 96px 48px 80px, background gradient `#111` → `#0d0d0d`, subtle 45deg diagonal accent-tinted repeating-stripe overlay at 5% opacity.
- Small pill badge: "Now Live at Stockport" (accent border/text, translucent accent bg, Oswald 600 12px uppercase letter-spacing 1.5px).
- H1: "Book Your / Table. Instantly." — Oswald 700, 64px, line-height 1.02, uppercase, white, two lines via `<br>`.
- Body paragraph: 19px, line-height 1.6, color `#b8b5b2`, max-width 560px.
- Two CTAs side by side (16px gap): solid accent "Book a Table" button, and outline (1px `#444` border) "Join Battle Beacon" button linking to `https://battle-beacon.com/join`. Both Oswald 600, 16px, uppercase, padding 16px 32px, radius 2px.

### 3. Features strip
- Background `#151515`, top/bottom border 1px `#262626`, padding 72px 48px.
- 3-column grid (max-width 1100px, centered, gap 32px). Each card: bg `#0d0d0d`, border 1px `#262626`, radius 4px, padding 32px.
- Card content: small accent uppercase eyebrow tag (Oswald 600 13px, letter-spacing 1.5px) → title (Oswald 600 22px white) → body copy (15px, `#a3a09d`).
- Cards (verbatim copy):
  1. Tag "Discovery", title "Find Open Tables", body "See live table availability at Element Games Stockport before you even leave the house."
  2. Tag "Booking", title "Reserve in Seconds", body "Pick a game, pick a slot, confirm. No calls, no waiting on a WhatsApp group reply."
  3. Tag "Loyalty", title "Track Your Games", body "Every visit builds your Battle Beacon profile: badges, stats, and bragging rights."

### 4. Booking widget
- Centered column, max-width 960px, padding 88px 48px.
- Header: accent eyebrow "Powered by Battle Beacon", H2 "Reserve a Table" (Oswald 700, 38px, uppercase), subcopy "Pick a game, pick a slot. Live availability at the Stockport Gaming Centre." (16px, `#a3a09d`, centered, max-width 520px).
- Widget card: bg `#161616`, border 1px `#2a2a2a`, radius 8px.
  - **Game tabs row**: 5 equal-width tab buttons (Warhammer 40,000 / Age of Sigmar / Kill Team / Board Games / D&D), border-right 1px `#2a2a2a` between them, bottom border 1px `#2a2a2a` under the row, Oswald 600 13px uppercase, inactive color `#888`, hover/active → white. Clicking sets the active game shown below.
  - **Body** (32px padding):
    - Row: current selection label ("{Game} · Stockport Gaming Centre", Oswald 600 16px white) + right-aligned "{N} tables open tonight" in accent color, 13px 600 weight.
    - **Day selector**: 6 pill buttons (THU–TUE), active pill = accent bg/border + white text; inactive = transparent bg, `#333` border, `#999` text. Oswald 600 14px, padding 10px 18px, radius 6px, min-width 64px.
    - **Table grid**: 4-column grid, gap 12px, 8 table cards. Each card: radius 6px, padding 16px 12px, centered text.
      - Status "Open": bg `#1a1a1a`, border `#2a2a2a`, opacity 1, status label color `#3ecf6e`.
      - Status "Booked": bg `#161616`, border `#242424`, opacity 0.55, status label color `#777`.
      - Status "Full": bg `#161616`, border `#242424`, opacity 0.4, status label color `#555`.
      - Card content: "Table {n}" (Oswald 600 15px white), time (12px `#999`), status label (11px, 700 weight, uppercase, letter-spacing 0.5px).
      - Seed data (8 tables): Table 1 6:00 PM Open, Table 2 6:00 PM Booked, Table 3 6:30 PM Open, Table 4 7:00 PM Open, Table 5 7:00 PM Booked, Table 6 7:30 PM Open, Table 7 8:00 PM Open, Table 8 8:00 PM Full.
    - Footer row: fine-print left ("By reserving, you agree to Battle Beacon's Privacy Notice." with link to `https://battle-beacon.com/privacy`, 13px `#777`) + right-aligned solid accent "Reserve Table" button linking to `https://battle-beacon.com/join` (Oswald 600 14px uppercase, padding 14px 28px, radius 4px).

### 5. Early-access CTA strip
- Full-width, background = accent color, padding 48px, centered text.
- Headline "Get In Before Launch" (Oswald 700, 26px, white, uppercase).
- Subcopy "Sign up early to lock your Battle Beacon badge and priority booking at Element Games Stockport." (rgba white 85%, 15px).
- Solid black button "Sign Up Free" linking to `https://battle-beacon.com/join` (Oswald 600 15px uppercase, padding 14px 30px, radius 4px).

### 6. Footer
- Background `#000`, padding 40px 48px, flex row space-between (wraps on narrow widths).
- Left: "© Element Games Ltd 2026 · Table booking powered by Battle Beacon" (Oswald 14px `#777`).
- Right: three text links (13px `#777`) — "Stockport Store" (`https://elementgames.co.uk/store-information`), "Gaming Centre" (`https://elementgames.co.uk/north-west-gaming-centre`), "Battle Beacon for Venues" (`https://battle-beacon.com/for-venues`).

## Interactions & Behavior
- Clicking a game tab sets it active and updates the "current selection" label above the table grid (no other layout change; table seed data does not currently vary per game — treat as a placeholder wiring point for real per-game/per-day availability data).
- Clicking a day pill sets it active (visual state only in this reference; wire to real availability queries in production).
- No animations/transitions beyond default hover states; no loading or error states are modeled — add per real API needs (e.g. table grid loading skeleton, booking-confirmation success/error state).
- Not designed responsive/mobile in this reference — treat breakpoints as an implementation decision using the codebase's existing responsive patterns.

## State Management
- `selectedGame` (string, one of the 5 game tabs) — drives the label text above the table grid.
- `selectedDayIdx` (index into the 6-day array) — drives active day-pill styling.
- Table/day/game data here is static seed data for the mockup; production should fetch real availability per venue/game/date from Battle Beacon's API.

## Design Tokens
- **Accent (primary)**: `#0af` (tweakable token — was `#e2211c` red in an earlier draft; final direction is blue `#0af`). Used for: header bottom border, badge border/text, buttons, feature-card eyebrow tags, active day pill, "tables open" label, open-table status color is a separate green.
- **Backgrounds**: `#0d0d0d` (page), `#000` (header/footer), `#111`→`#0d0d0d` gradient (hero), `#151515` (features strip), `#161616` (widget card), `#1a1a1a` / `#161616` (table cards).
- **Borders**: `#262626`, `#2a2a2a`, `#242424`, `#333`, `#444`.
- **Text**: `#f2f0ee` (base/white-ish), `#fff` (headings/emphasis), `#ccc`, `#b8b5b2`, `#a3a09d`, `#999`, `#888`, `#777`.
- **Status colors**: Open `#3ecf6e` (green), Booked `#777`, Full `#555`.
- **Typography**: Headings/labels/buttons — **Oswald** (weights 500/600/700), uppercase, tight tracking on large headings, wider letter-spacing (0.5–2px) on small labels. Body copy — **Inter** (400/500/600/700). Both loaded via Google Fonts.
- **Radii**: 2px (buttons in header/hero), 4px (feature cards, some buttons), 6px (day pills, table cards), 8px (widget card).
- **Spacing**: Section padding 48px horizontal throughout; vertical rhythm 72–96px between major sections; 32px card padding; 12–16px component gaps.

## Assets
- Element Games logo: represented here as a placeholder mark (skewed accent square with "EG" text) — replace with the real Element Games logo asset.
- No other images/icons used; all UI is CSS/typography-driven.

## Files
- `Element Games x Battle Beacon Landing.dc.html` — full design reference (HTML/inline CSS + a small amount of JS-driven interactive state for game/day selection).
