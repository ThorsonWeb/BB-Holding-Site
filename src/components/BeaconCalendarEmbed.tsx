"use client";

import { useEffect } from "react";

const BEACON_CALENDAR_SCRIPT_ID = "beacon-calendar-script";
const BEACON_CALENDAR_STYLE_ID = "beacon-calendar-style-overrides";

// Class names and CSS custom properties below are taken directly from the
// widget's own source (fetched from https://beacon-crm.com/embed/calendar.js
// and calendar.css) — the widget renders its DOM at runtime via fetch(), so
// it can't be inspected through the page's server-rendered HTML. The widget
// is heavily variable-driven (--bcal-*), which this override leans on; a
// handful of rules below hit hardcoded (non-variable) colors in the base
// stylesheet directly, since those don't respond to the custom properties.
const BEACON_CALENDAR_OVERRIDES = `
#beacon-calendar.bcal {
  --bcal-primary: #0af !important;
  --bcal-primary-light: rgba(0, 170, 255, 0.14) !important;
  --bcal-secondary: #a3a09d !important;
  --bcal-accent: #0af !important;
  --bcal-bg: transparent !important;
  --bcal-text: #f2f0ee !important;
  --bcal-text-light: #a3a09d !important;
  --bcal-border: #2a2a2a !important;
  --bcal-border-light: #242424 !important;
  --bcal-radius: 6px !important;
  --bcal-radius-full: 9999px !important;
  --bcal-font: var(--font-inter), sans-serif !important;
  max-width: none !important;
  border: 0 !important;
  background: transparent !important;
  border-radius: 0 !important;
}

/* Our page already has its own "Reserve a Table" heading above the widget —
   drop the widget's internal header so the two don't repeat each other. */
#beacon-calendar.bcal .bcal-header,
#beacon-calendar.bcal .bcal-price {
  display: none !important;
}

#beacon-calendar.bcal .bcal-layout {
  min-height: 0 !important;
  gap: 2.5rem !important;
}

#beacon-calendar.bcal .bcal-calendar-panel {
  flex: 0.85 !important;
  border-right: 1px solid #242424 !important;
  padding: 0 2rem 0 0 !important;
}

#beacon-calendar.bcal .bcal-booking-panel {
  flex: 1.3 !important;
  padding: 0 !important;
  max-height: none !important;
  overflow-y: visible !important;
}

#beacon-calendar.bcal .bcal-section-label,
#beacon-calendar.bcal .bcal-date-heading,
#beacon-calendar.bcal .bcal-month-label,
#beacon-calendar.bcal .bcal-field label {
  font-family: var(--font-oswald), sans-serif !important;
  text-transform: uppercase !important;
}

#beacon-calendar.bcal .bcal-section-label,
#beacon-calendar.bcal .bcal-date-heading {
  font-size: 0.8rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  color: #fff !important;
}

#beacon-calendar.bcal .bcal-month-label {
  font-size: 0.9rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.03em !important;
}

#beacon-calendar.bcal .bcal-day--outside .bcal-day-num,
#beacon-calendar.bcal .bcal-day--past .bcal-day-num {
  color: #3a3a3a !important;
}

#beacon-calendar.bcal .bcal-timezone {
  border-top-color: #242424 !important;
}

#beacon-calendar.bcal .bcal-slot {
  border-width: 1px !important;
  font-family: var(--font-oswald), sans-serif !important;
  letter-spacing: 0.02em !important;
  text-transform: uppercase !important;
  font-size: 0.82rem !important;
  transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.1s !important;
}

#beacon-calendar.bcal .bcal-slot:hover {
  border-color: #0af !important;
}

#beacon-calendar.bcal .bcal-no-slots {
  border: 1px dashed #2a2a2a !important;
  border-radius: 6px !important;
}

/* The form only has 4 live fields (first/last name, email, mobile) once the
   game-system and table-count fields are hidden below — lay them out as a
   2-up grid so the wider booking panel doesn't leave a narrow single-column
   form stranded in all that extra space. */
#beacon-calendar.bcal .bcal-form {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 1.1rem 1rem !important;
}

#beacon-calendar.bcal .bcal-field {
  gap: 0.4rem !important;
}

#beacon-calendar.bcal .bcal-field label {
  font-size: 0.7rem !important;
  letter-spacing: 0.14em !important;
  color: #8a8785 !important;
}

#beacon-calendar.bcal .bcal-field input,
#beacon-calendar.bcal .bcal-field select {
  background: #1a1a1a !important;
  border-radius: 6px !important;
  padding: 0.8rem 0.95rem !important;
  font-size: 0.9rem !important;
  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s !important;
  color-scheme: dark;
}

#beacon-calendar.bcal .bcal-field input:hover,
#beacon-calendar.bcal .bcal-field select:hover {
  border-color: #3a3a3a !important;
}

#beacon-calendar.bcal .bcal-field input::placeholder {
  color: #666 !important;
}

/* The Element Games flow doesn't need a game-system picker or a table-count
   field — the venue books a slot, not a specific table quota. Hidden rather
   than removed since the widget renders this markup itself at runtime. */
#beacon-calendar.bcal .bcal-field:has(select[name="gameSystem"]),
#beacon-calendar.bcal .bcal-field:has(input[name="gameSystem"]),
#beacon-calendar.bcal .bcal-field:has(input[name="tablesRequested"]) {
  display: none !important;
}

#beacon-calendar.bcal .bcal-submit {
  grid-column: 1 / -1 !important;
  padding: 0.95rem 1.5rem !important;
  font-family: var(--font-oswald), sans-serif !important;
  letter-spacing: 0.05em !important;
  text-transform: uppercase !important;
  font-weight: 600 !important;
  transition: background 0.15s, opacity 0.15s, transform 0.1s !important;
}

#beacon-calendar.bcal .bcal-submit:hover {
  background: #0af !important;
  opacity: 0.88 !important;
}

#beacon-calendar.bcal .bcal-msg--success {
  background: rgba(62, 207, 110, 0.1) !important;
  color: #3ecf6e !important;
  border: 1px solid rgba(62, 207, 110, 0.3) !important;
}

#beacon-calendar.bcal .bcal-msg--error {
  background: rgba(255, 113, 108, 0.1) !important;
  color: #ff716c !important;
  border: 1px solid rgba(255, 113, 108, 0.3) !important;
}

@media (max-width: 640px) {
  #beacon-calendar.bcal .bcal-calendar-panel {
    border-right: none !important;
    border-bottom: 1px solid #242424 !important;
    padding: 0 0 1.5rem 0 !important;
  }

  #beacon-calendar.bcal .bcal-form {
    grid-template-columns: 1fr !important;
  }
}
`;

function injectOverrides() {
  let style = document.getElementById(BEACON_CALENDAR_STYLE_ID) as HTMLStyleElement | null;

  if (!style) {
    style = document.createElement("style");
    style.id = BEACON_CALENDAR_STYLE_ID;
    style.textContent = BEACON_CALENDAR_OVERRIDES;
  }

  document.head.appendChild(style);
}

interface Props {
  embedKey: string;
  host: string;
}

export default function BeaconCalendarEmbed({ embedKey, host }: Props) {
  useEffect(() => {
    injectOverrides();

    // Always remove and re-add the script so it re-executes against the
    // current #beacon-calendar element (client-side navigation gives it a
    // new DOM node that a cached script instance has never seen).
    const existing = document.getElementById(BEACON_CALENDAR_SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = BEACON_CALENDAR_SCRIPT_ID;
    script.src = `${host}/embed/calendar.js`;
    script.async = true;
    script.onload = () => injectOverrides();

    document.body.appendChild(script);
  }, [host]);

  return (
    <div id="beacon-calendar" data-embed-key={embedKey} data-host={host}></div>
  );
}
