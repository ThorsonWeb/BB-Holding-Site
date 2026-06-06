"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const VALID_THEMES = ["default", "40k", "pokemon", "mtg", "starwars", "boardgames"];
const LINK_ID = "bb-theme-stylesheet";

export default function ThemeLoader() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("theme") ?? "";
  const theme = VALID_THEMES.includes(raw) ? raw : "default";

  useEffect(() => {
    let el = document.getElementById(LINK_ID) as HTMLLinkElement | null;
    if (!el) {
      el = document.createElement("link");
      el.id = LINK_ID;
      el.rel = "stylesheet";
      document.head.appendChild(el);
    }
    el.href = `/themes/${theme}.css`;
  }, [theme]);

  return null;
}
