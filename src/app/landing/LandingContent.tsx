"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/Button";
import JoinLink from "@/components/JoinLink";
import Icon from "@/components/Icon";

const LINK_ID = "bb-theme-stylesheet";

import defaultCopy from "@/themes/default.json";
import copy40k from "@/themes/40k.json";
import pokemonCopy from "@/themes/pokemon.json";
import mtgCopy from "@/themes/mtg.json";
import starWarsCopy from "@/themes/starwars.json";
import boardGamesCopy from "@/themes/boardgames.json";

interface ThemeCopy {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  pain: {
    sectionHeading: string;
    sectionSubheading: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
  solution: {
    sectionHeading: string;
    sectionSubheading: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
      bullets: string[];
    }>;
  };
  cta: {
    heading: string;
    subheading: string;
    buttonPlayer: string;
    buttonVenue: string;
  };
}

const THEMES: Record<string, ThemeCopy> = {
  default: defaultCopy,
  "40k": copy40k,
  pokemon: pokemonCopy,
  mtg: mtgCopy,
  starwars: starWarsCopy,
  boardgames: boardGamesCopy,
};

export default function LandingContent() {
  const searchParams = useSearchParams();
  const rawTheme = searchParams.get("theme") ?? "";
  const themeKey = rawTheme in THEMES ? rawTheme : "default";
  const copy = THEMES[themeKey];

  useEffect(() => {
    let el = document.getElementById(LINK_ID) as HTMLLinkElement | null;
    if (!el) {
      el = document.createElement("link");
      el.id = LINK_ID;
      el.rel = "stylesheet";
      document.head.appendChild(el);
    }
    el.href = `/themes/${themeKey}.css`;
  }, [themeKey]);

  return (
    <>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 tactical-grid opacity-30" aria-hidden="true" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/10 via-transparent to-transparent z-0" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full z-0" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black text-on-surface tracking-tighter leading-[0.92] uppercase mb-8">
              {copy.hero.headline}
              <br />
              <span className="text-primary italic">{copy.hero.headlineAccent}</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-body max-w-2xl">
              {copy.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <JoinLink variant="primary">{copy.hero.ctaPrimary}</JoinLink>
              <Button href="/for-venues" variant="outline">
                {copy.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-6xl font-bold uppercase text-on-surface tracking-tight leading-[0.95] mb-4">
              {copy.pain.sectionHeading}
            </h2>
            <p className="text-on-surface-variant text-lg">
              {copy.pain.sectionSubheading}
            </p>
          </div>

          <ul className="divide-y divide-outline-variant/15 border-t border-b border-outline-variant/15">
            {copy.pain.items.map((item, index) => (
              <li key={item.title} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8">
                <span className="md:col-span-2 ghost-numeral text-4xl md:text-5xl text-error/40" style={{ WebkitTextStroke: "1px color-mix(in srgb, var(--color-error) 40%, transparent)" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-3 flex items-center gap-3">
                  <Icon name={item.icon} className="text-error text-2xl" />
                  <h3 className="text-lg font-bold uppercase text-on-surface">{item.title}</h3>
                </div>
                <p className="md:col-span-7 text-on-surface-variant text-base leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 bg-surface relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold uppercase text-primary tracking-tight leading-[0.95] mb-4">
              {copy.solution.sectionHeading}
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              {copy.solution.sectionSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {copy.solution.items.map((item, index) => (
              <div
                key={item.title}
                className={`${index === 0 ? "lg:col-span-12" : "lg:col-span-6"} bg-surface-container-low rounded-2xl p-8 md:p-10 border border-outline-variant/15 hover:border-primary/30 transition-colors`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-on-surface">{item.title}</h3>
                </div>
                <p className="text-on-surface-variant mb-6 max-w-md">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold uppercase text-primary"
                    >
                      <Icon name="check_circle" className="text-xs" fill />
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden diagonal-both bg-surface-container-high tactical-grid">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-primary/10 blur-[160px] rounded-full" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-on-surface mb-8 tracking-tighter">
            {copy.cta.heading}
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant mb-12 font-body max-w-2xl mx-auto">
            {copy.cta.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <JoinLink variant="primary" size="lg">{copy.cta.buttonPlayer}</JoinLink>
            <JoinLink variant="accent" size="lg">{copy.cta.buttonVenue}</JoinLink>
          </div>
        </div>
      </section>
    </>
  );
}
