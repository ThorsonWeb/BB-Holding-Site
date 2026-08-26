"use client";

import { useEffect } from "react";

const SCRIPT_ID = "booking-calendar-script";
const STYLE_ID = "booking-calendar-style-overrides";

// Same #beacon-calendar.bcal widget/class contract as BeaconCalendarEmbed
// (see that file for how the classes were sourced), themed with the site's
// own CSS variables/fonts instead of the Element Games page's hardcoded
// palette, since this embed sits on a page that carries the rest of the
// Battle Beacon Material 3 design system around it.
const STYLE_OVERRIDES = `
#beacon-calendar.bcal {
  --bcal-primary: var(--color-primary) !important;
  --bcal-primary-light: rgba(129, 236, 255, 0.14) !important;
  --bcal-secondary: var(--color-on-surface-variant) !important;
  --bcal-accent: var(--color-secondary) !important;
  --bcal-bg: transparent !important;
  --bcal-text: var(--color-on-surface) !important;
  --bcal-text-light: var(--color-on-surface-variant) !important;
  --bcal-border: rgba(68, 72, 79, 0.7) !important;
  --bcal-border-light: rgba(68, 72, 79, 0.35) !important;
  --bcal-radius: 14px !important;
  --bcal-radius-full: 9999px !important;
  --bcal-font: var(--font-plus-jakarta-sans), sans-serif !important;
  max-width: none !important;
  border: 0 !important;
  background: transparent !important;
  border-radius: 0 !important;
}

/* Table type: underlined tabs instead of the widget's default filled pills. */
#beacon-calendar.bcal .bcal-type-tabs {
  gap: 0 !important;
  padding: 1rem 1.75rem 0 !important;
  border-bottom: 1px solid rgba(68, 72, 79, 0.35) !important;
}

#beacon-calendar.bcal .bcal-type-tab {
  height: auto !important;
  padding: 0.65rem 1.1rem !important;
  border-radius: 0 !important;
  border: none !important;
  border-bottom: 2px solid transparent !important;
  background: transparent !important;
  color: var(--color-on-surface-variant) !important;
  font-family: var(--font-space-grotesk), sans-serif !important;
  font-size: 0.78rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.06em !important;
  text-transform: uppercase !important;
  margin-bottom: -1px !important;
  transition: color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease !important;
}

#beacon-calendar.bcal .bcal-type-tab:hover {
  color: var(--color-on-surface) !important;
  border-color: rgba(129, 236, 255, 0.4) !important;
}

#beacon-calendar.bcal .bcal-type-tab[aria-selected="true"] {
  background: transparent !important;
  color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
  box-shadow: 0 4px 16px rgba(129, 236, 255, 0.28) !important;
}

/* Price/duration/capacity summary line for the selected table type — called
   out as a highlighted bar since it's the key info a booker scans for. */
#beacon-calendar.bcal .bcal-type-info {
  margin: 1rem 1.75rem 0 !important;
  padding: 0.85rem 1.1rem !important;
  border-radius: 0.75rem !important;
  background: rgba(129, 236, 255, 0.07) !important;
  border: 1px solid rgba(129, 236, 255, 0.18) !important;
  color: var(--color-on-surface) !important;
  font-family: var(--font-plus-jakarta-sans), sans-serif !important;
  font-size: 0.88rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.01em !important;
}

/* This demo books a table slot directly — no game-system picker or table-count
   quota needed. Hidden rather than removed since the widget renders this
   markup itself at runtime. */
#beacon-calendar.bcal .bcal-field:has(select[name="gameSystem"]),
#beacon-calendar.bcal .bcal-field:has(input[name="gameSystem"]),
#beacon-calendar.bcal .bcal-field:has(input[name="tablesRequested"]) {
  display: none !important;
}

#beacon-calendar.bcal .bcal-layout {
  min-height: 0 !important;
  gap: 2.5rem !important;
}

#beacon-calendar.bcal .bcal-calendar-panel {
  flex: 0.85 !important;
  border-right: 1px solid rgba(68, 72, 79, 0.35) !important;
  padding: 1.5rem 2rem 1.5rem 0 !important;
}

#beacon-calendar.bcal .bcal-booking-panel {
  flex: 1.3 !important;
  padding: 1.5rem 0 !important;
  max-height: none !important;
  overflow-y: visible !important;
}

/* Squared-off day cells instead of the widget's default circular numerals. */
#beacon-calendar.bcal .bcal-day-num {
  border-radius: 0.5rem !important;
}

#beacon-calendar.bcal .bcal-month-nav button {
  border-radius: 0.5rem !important;
}

#beacon-calendar.bcal .bcal-title {
  color: var(--color-on-surface) !important;
  font-family: var(--font-space-grotesk), sans-serif !important;
  font-weight: 800 !important;
  letter-spacing: -0.03em !important;
  text-transform: uppercase !important;
}

#beacon-calendar.bcal .bcal-section-label,
#beacon-calendar.bcal .bcal-date-heading,
#beacon-calendar.bcal .bcal-month-label,
#beacon-calendar.bcal .bcal-field label {
  font-family: var(--font-space-grotesk), sans-serif !important;
  text-transform: uppercase !important;
}

#beacon-calendar.bcal .bcal-section-label,
#beacon-calendar.bcal .bcal-date-heading {
  font-size: 0.8rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.08em !important;
  color: var(--color-on-surface) !important;
}

#beacon-calendar.bcal .bcal-month-label {
  font-size: 0.9rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.03em !important;
}

#beacon-calendar.bcal .bcal-timezone {
  border-top-color: rgba(68, 72, 79, 0.35) !important;
}

#beacon-calendar.bcal .bcal-slot {
  border: 1px solid rgba(68, 72, 79, 0.35) !important;
  border-radius: 0.9rem !important;
  background: var(--color-surface-container-highest) !important;
  color: var(--color-on-surface) !important;
  font-family: var(--font-plus-jakarta-sans), sans-serif !important;
  font-size: 0.85rem !important;
  transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.1s !important;
}

#beacon-calendar.bcal .bcal-slot:hover,
#beacon-calendar.bcal .bcal-slot--selected {
  border-color: rgba(129, 236, 255, 0.55) !important;
  box-shadow: 0 0 0 4px rgba(129, 236, 255, 0.12) !important;
}

#beacon-calendar.bcal .bcal-no-slots {
  border: 1px dashed rgba(68, 72, 79, 0.35) !important;
  border-radius: 0.9rem !important;
}

#beacon-calendar.bcal .bcal-form {
  gap: 1.1rem !important;
}

#beacon-calendar.bcal .bcal-field {
  gap: 0.4rem !important;
}

#beacon-calendar.bcal .bcal-field label {
  font-size: 0.7rem !important;
  letter-spacing: 0.14em !important;
  color: var(--color-on-surface-variant) !important;
}

#beacon-calendar.bcal .bcal-field input,
#beacon-calendar.bcal .bcal-field select {
  border: 1px solid rgba(68, 72, 79, 0.35) !important;
  background: var(--color-surface-container-highest) !important;
  color: var(--color-on-surface) !important;
  border-radius: 0.9rem !important;
  padding: 0.8rem 0.95rem !important;
  font-size: 0.9rem !important;
  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s !important;
  color-scheme: dark;
}

#beacon-calendar.bcal .bcal-field input:hover,
#beacon-calendar.bcal .bcal-field select:hover {
  border-color: rgba(129, 236, 255, 0.4) !important;
}

#beacon-calendar.bcal .bcal-field input:focus,
#beacon-calendar.bcal .bcal-field select:focus {
  border-color: rgba(129, 236, 255, 0.55) !important;
  box-shadow: 0 0 0 4px rgba(129, 236, 255, 0.12) !important;
}

#beacon-calendar.bcal .bcal-field input::placeholder {
  color: rgba(168, 171, 179, 0.4) !important;
}

#beacon-calendar.bcal .bcal-submit {
  margin-top: 0.9rem !important;
  padding: 1rem 1.25rem !important;
  border-radius: 0.9rem !important;
  background: linear-gradient(to right, var(--color-primary), var(--color-primary-container)) !important;
  color: var(--color-on-primary-fixed) !important;
  font-family: var(--font-space-grotesk), sans-serif !important;
  font-size: 0.9rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.16em !important;
  text-transform: uppercase !important;
  box-shadow: 0 10px 28px rgba(129, 236, 255, 0.2) !important;
  transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.2s ease !important;
}

#beacon-calendar.bcal .bcal-submit:hover {
  opacity: 1 !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 14px 34px rgba(129, 236, 255, 0.28) !important;
}

#beacon-calendar.bcal .bcal-msg--success {
  background: rgba(47, 248, 1, 0.08) !important;
  color: var(--color-tertiary) !important;
  border: 1px solid rgba(47, 248, 1, 0.16) !important;
}

#beacon-calendar.bcal .bcal-msg--error {
  background: rgba(159, 5, 25, 0.18) !important;
  color: var(--color-on-error-container) !important;
  border: 1px solid rgba(255, 113, 108, 0.2) !important;
}

@media (max-width: 640px) {
  #beacon-calendar.bcal .bcal-calendar-panel {
    border-right: none !important;
    border-bottom: 1px solid rgba(68, 72, 79, 0.35) !important;
    padding: 1.5rem 0 !important;
  }

  #beacon-calendar.bcal .bcal-form {
    grid-template-columns: 1fr !important;
  }
}
`;

function injectOverrides() {
  let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;

  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = STYLE_OVERRIDES;
  }

  document.head.appendChild(style);
}

interface Props {
  embedKey: string;
  host: string;
}

export default function BookingCalendarEmbed({ embedKey, host }: Props) {
  useEffect(() => {
    injectOverrides();

    // Always remove and re-add the script so it re-executes against the
    // current #beacon-calendar element (client-side navigation gives it a
    // new DOM node that a cached script instance has never seen).
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `${host}/embed/calendar.js`;
    script.async = true;
    script.onload = () => injectOverrides();

    document.body.appendChild(script);
  }, [host]);

  return (
    <div id="beacon-calendar" data-embed-key={embedKey} data-host={host}></div>
  );
}
