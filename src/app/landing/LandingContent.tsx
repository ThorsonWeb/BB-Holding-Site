"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

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

  return (
    <>
      {/* Theme stylesheet — React 19 hoists <link> to <head> */}
      <link rel="stylesheet" href={`/themes/${themeKey}.css`} precedence="high" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 tactical-grid opacity-30" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/10 via-transparent to-transparent z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border-l-2 border-primary mb-6">
              <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase">
                {copy.hero.badge}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-on-surface tracking-tighter leading-[1.1] md:leading-[0.9] uppercase mb-6">
              {copy.hero.headline}
              <br />
              <span className="text-primary italic">{copy.hero.headlineAccent}</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-body max-w-2xl">
              {copy.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/join"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold uppercase rounded-lg shadow-lg active:scale-95 transition-transform text-center"
              >
                {copy.hero.ctaPrimary}
              </Link>
              <Link
                href="/for-venues"
                className="px-8 py-4 bg-transparent border border-outline-variant text-primary font-headline font-bold uppercase rounded-lg hover:bg-primary/5 transition-all text-center"
              >
                {copy.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-8 bottom-8 text-right hidden xl:block z-10">
          <div className="text-on-surface-variant font-headline text-xs tracking-tighter uppercase space-y-1 opacity-40">
            <p>LAT: 51.5074° N</p>
            <p>LONG: 0.1278° W</p>
            <p>STATUS: OPERATIONAL</p>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-on-surface tracking-tight mb-4">
              {copy.pain.sectionHeading}
            </h2>
            <div className="h-1 w-24 bg-error mb-6" />
            <p className="text-on-surface-variant text-lg">
              {copy.pain.sectionSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.pain.items.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-low p-8 border-l-2 border-error/30 hover:border-error transition-all group"
              >
                <div className="mb-6">
                  <span className="material-symbols-outlined text-error text-4xl group-hover:scale-110 transition-transform block">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase mb-3 text-on-surface">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-primary tracking-tight mb-4">
              {copy.solution.sectionHeading}
            </h2>
            <div className="h-1 w-24 bg-primary mb-6" />
            <p className="text-on-surface-variant text-lg max-w-2xl">
              {copy.solution.sectionSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.solution.items.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container p-10 rounded-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <span className="material-symbols-outlined text-9xl text-primary">
                    {item.icon}
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold uppercase mb-4 text-on-surface">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant mb-8">{item.description}</p>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm text-secondary">
                        <span
                          className="material-symbols-outlined text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 tactical-grid opacity-20 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/80 to-surface z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-on-surface mb-8 tracking-tighter">
            {copy.cta.heading}
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant mb-12 font-body max-w-2xl mx-auto">
            {copy.cta.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/join"
              className="px-12 py-5 bg-primary text-on-primary font-headline font-black text-xl uppercase rounded-lg hover:scale-105 transition-transform"
            >
              {copy.cta.buttonPlayer}
            </Link>
            <Link
              href="/join"
              className="px-12 py-5 bg-secondary text-on-secondary font-headline font-black text-xl uppercase rounded-lg hover:scale-105 transition-transform"
            >
              {copy.cta.buttonVenue}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
