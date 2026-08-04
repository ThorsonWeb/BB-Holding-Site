"use client";

import { useEffect } from "react";

const BEACON_BOOKING_SCRIPT_ID = "beacon-booking-script";
const BEACON_BOOKING_STYLE_ID = "beacon-booking-style-overrides";
// PLACEHOLDER: swap for the real booking-widget script URL once provided.
const BEACON_BOOKING_SCRIPT_SRC = "https://beacon-crm.com/embed/booking.js";

// PLACEHOLDER: root selector/CSS variable contract guessed from BeaconFormEmbed's
// #beacon-form.bform pattern — verify against the real booking embed markup once available.
const BEACON_BOOKING_OVERRIDES = `
#beacon-booking.bcalendar {
  --bcal-primary: var(--color-primary) !important;
  --bcal-primary-light: rgba(129, 236, 255, 0.14) !important;
  --bcal-accent: var(--color-secondary) !important;
  --bcal-bg: transparent !important;
  --bcal-text: var(--color-on-surface) !important;
  --bcal-text-light: var(--color-on-surface-variant) !important;
  --bcal-border: rgba(68, 72, 79, 0.7) !important;
  --bcal-border-light: rgba(68, 72, 79, 0.35) !important;
  --bcal-radius: 14px !important;
  --bcal-font: var(--font-plus-jakarta-sans), sans-serif !important;
  max-width: none !important;
  border: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  overflow: visible !important;
}

#beacon-booking.bcalendar .bcal-title {
  margin: 0 0 0.5rem !important;
  color: var(--color-on-surface) !important;
  font-family: var(--font-space-grotesk), sans-serif !important;
  font-size: 1.9rem !important;
  font-weight: 800 !important;
  line-height: 1 !important;
  letter-spacing: -0.04em !important;
  text-transform: uppercase !important;
}

#beacon-booking.bcalendar .bcal-slot {
  border: 1px solid rgba(68, 72, 79, 0.35) !important;
  border-radius: 0.9rem !important;
  background: var(--color-surface-container-highest) !important;
  color: var(--color-on-surface) !important;
}

#beacon-booking.bcalendar .bcal-slot:hover,
#beacon-booking.bcalendar .bcal-slot--selected {
  border-color: rgba(129, 236, 255, 0.55) !important;
  box-shadow: 0 0 0 4px rgba(129, 236, 255, 0.12) !important;
}

#beacon-booking.bcalendar .bcal-submit {
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

#beacon-booking.bcalendar .bcal-submit:hover {
  opacity: 1 !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 14px 34px rgba(129, 236, 255, 0.28) !important;
}
`;

function injectOverrides() {
  let style = document.getElementById(BEACON_BOOKING_STYLE_ID) as HTMLStyleElement | null;

  if (!style) {
    style = document.createElement("style");
    style.id = BEACON_BOOKING_STYLE_ID;
    style.textContent = BEACON_BOOKING_OVERRIDES;
  }

  document.head.appendChild(style);
}

export default function BeaconBookingEmbed() {
  useEffect(() => {
    injectOverrides();

    const existing = document.getElementById(BEACON_BOOKING_SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = BEACON_BOOKING_SCRIPT_ID;
    script.src = BEACON_BOOKING_SCRIPT_SRC;
    script.async = true;
    script.onload = () => injectOverrides();

    document.body.appendChild(script);
  }, []);

  return (
    <div className="rounded-xl border border-outline-variant/15 bg-surface-container p-4 md:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
      <div
        id="beacon-booking"
        // PLACEHOLDER: swap for the real booking key once provided.
        data-booking-key="PLACEHOLDER_BOOKING_KEY"
        data-host="https://beacon-crm.com"
      ></div>
    </div>
  );
}
