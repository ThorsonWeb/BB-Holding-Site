"use client";

import { useEffect } from "react";

const BEACON_FORM_SCRIPT_ID = "beacon-feedback-form-script";
const BEACON_FORM_STYLE_ID = "beacon-form-style-overrides";
const BEACON_FORM_SCRIPT_SRC = "https://beacon-crm.com/embed/forms.js";

const BEACON_FORM_OVERRIDES = `
#beacon-feedback-form.bform {
  --bform-primary: var(--color-primary) !important;
  --bform-primary-light: rgba(129, 236, 255, 0.14) !important;
  --bform-accent: var(--color-secondary) !important;
  --bform-bg: transparent !important;
  --bform-text: var(--color-on-surface) !important;
  --bform-text-light: var(--color-on-surface-variant) !important;
  --bform-border: rgba(68, 72, 79, 0.7) !important;
  --bform-border-light: rgba(68, 72, 79, 0.35) !important;
  --bform-error: var(--color-error) !important;
  --bform-success-bg: rgba(47, 248, 1, 0.08) !important;
  --bform-success-text: var(--color-tertiary) !important;
  --bform-radius: 14px !important;
  --bform-font: var(--font-plus-jakarta-sans), sans-serif !important;
  max-width: none !important;
  border: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  overflow: visible !important;
}

#beacon-feedback-form.bform .bform-header {
  padding: 0 0 1.25rem !important;
  border-bottom: 1px solid rgba(68, 72, 79, 0.35) !important;
}

#beacon-feedback-form.bform .bform-logo {
  width: 44px !important;
  height: 44px !important;
  border-radius: 12px !important;
  object-fit: cover !important;
  box-shadow: 0 0 20px rgba(129, 236, 255, 0.18) !important;
}

#beacon-feedback-form.bform .bform-title {
  margin: 0 0 0.5rem !important;
  color: var(--color-on-surface) !important;
  font-family: var(--font-space-grotesk), sans-serif !important;
  font-size: 1.9rem !important;
  font-weight: 800 !important;
  line-height: 1 !important;
  letter-spacing: -0.04em !important;
  text-transform: uppercase !important;
}

#beacon-feedback-form.bform .bform-description {
  color: var(--color-on-surface-variant) !important;
  font-size: 0.95rem !important;
  line-height: 1.7 !important;
}

#beacon-feedback-form.bform .bform-body {
  padding: 1.5rem 0 0 !important;
  gap: 1.1rem !important;
}

#beacon-feedback-form.bform .bform-field {
  gap: 0.45rem !important;
}

#beacon-feedback-form.bform .bform-label {
  margin-left: 0.25rem !important;
  color: var(--color-on-surface-variant) !important;
  font-family: var(--font-space-grotesk), sans-serif !important;
  font-size: 0.65rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.22em !important;
  text-transform: uppercase !important;
}

#beacon-feedback-form.bform .bform-input,
#beacon-feedback-form.bform .bform-select,
#beacon-feedback-form.bform .bform-textarea {
  border: 1px solid rgba(68, 72, 79, 0.35) !important;
  border-bottom: 2px solid rgba(68, 72, 79, 0.55) !important;
  border-radius: 0.9rem 0.9rem 0.35rem 0.35rem !important;
  padding: 0.95rem 1rem !important;
  background: var(--color-surface-container-highest) !important;
  color: var(--color-on-surface) !important;
  font-size: 0.95rem !important;
  line-height: 1.45 !important;
}

#beacon-feedback-form.bform .bform-input::placeholder,
#beacon-feedback-form.bform .bform-textarea::placeholder {
  color: rgba(168, 171, 179, 0.4) !important;
}

#beacon-feedback-form.bform .bform-input:focus,
#beacon-feedback-form.bform .bform-select:focus,
#beacon-feedback-form.bform .bform-textarea:focus {
  border-color: rgba(129, 236, 255, 0.55) !important;
  border-bottom-color: var(--color-primary) !important;
  box-shadow: 0 0 0 4px rgba(129, 236, 255, 0.12) !important;
}

#beacon-feedback-form.bform .bform-select {
  background-color: var(--color-surface-container-highest) !important;
}

#beacon-feedback-form.bform .bform-textarea {
  min-height: 130px !important;
}

#beacon-feedback-form.bform .bform-radio-group {
  gap: 0.75rem !important;
  border-radius: 1rem !important;
  background: var(--color-surface-container-highest) !important;
  padding: 1rem !important;
  border: 1px solid rgba(68, 72, 79, 0.3) !important;
}

#beacon-feedback-form.bform .bform-radio-label {
  color: var(--color-on-surface) !important;
}

#beacon-feedback-form.bform .bform-help,
#beacon-feedback-form.bform .bform-error {
  margin-left: 0.25rem !important;
  font-size: 0.74rem !important;
  line-height: 1.45 !important;
}

#beacon-feedback-form.bform .bform-submit {
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

#beacon-feedback-form.bform .bform-submit:hover {
  opacity: 1 !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 14px 34px rgba(129, 236, 255, 0.28) !important;
}

#beacon-feedback-form.bform .bform-submit:disabled {
  transform: none !important;
  box-shadow: none !important;
}

#beacon-feedback-form.bform .bform-success,
#beacon-feedback-form.bform .bform-msg {
  margin: 1.25rem 0 0 !important;
  border-radius: 1rem !important;
  padding: 1rem 1.1rem !important;
}

#beacon-feedback-form.bform .bform-success {
  border: 1px solid rgba(47, 248, 1, 0.16) !important;
}

#beacon-feedback-form.bform .bform-msg--error {
  background: rgba(159, 5, 25, 0.18) !important;
  color: var(--color-on-error-container) !important;
  border: 1px solid rgba(255, 113, 108, 0.2) !important;
}

@media (max-width: 640px) {
  #beacon-feedback-form.bform .bform-title {
    font-size: 1.5rem !important;
  }

  #beacon-feedback-form.bform .bform-header,
  #beacon-feedback-form.bform .bform-body {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
`;

function injectOverrides() {
  let style = document.getElementById(BEACON_FORM_STYLE_ID) as HTMLStyleElement | null;

  if (!style) {
    style = document.createElement("style");
    style.id = BEACON_FORM_STYLE_ID;
    style.textContent = BEACON_FORM_OVERRIDES;
  }

  document.head.appendChild(style);
}

export default function BeaconFeedbackFormEmbed() {
  useEffect(() => {
    injectOverrides();

    const existing = document.getElementById(BEACON_FORM_SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = BEACON_FORM_SCRIPT_ID;
    script.src = BEACON_FORM_SCRIPT_SRC;
    script.async = true;
    script.onload = () => injectOverrides();

    document.body.appendChild(script);
  }, []);

  return (
    <div className="rounded-xl border border-outline-variant/15 bg-surface-container p-4 md:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
      <div
        id="beacon-feedback-form"
        data-form-key="FEEDBACK_FORM_KEY_HERE"
        data-host="https://beacon-crm.com"
      ></div>
    </div>
  );
}
