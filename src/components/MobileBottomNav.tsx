"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const GAMES = [
  { label: "Warhammer 40,000", theme: "40k" },
  { label: "Pokémon TCG", theme: "pokemon" },
  { label: "Magic: The Gathering", theme: "mtg" },
  { label: "Star Wars: Unlimited", theme: "starwars" },
  { label: "Board Games & D&D", theme: "boardgames" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [sheetOpen, setSheetOpen] = useState(false);

  const navItems = [
    { href: "/for-players", label: "Players", icon: "grid_view" },
    { href: "/for-venues", label: "Game Stores", icon: "storefront" },
    { href: "/roadmap", label: "Roadmap", icon: "map" },
    { href: "/join", label: "Sign Up", icon: "person" },
  ];

  function selectGame(theme: string) {
    setSheetOpen(false);
    router.push(`/landing?theme=${theme}`);
  }

  return (
    <>
      {/* Bottom sheet backdrop */}
      {sheetOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setSheetOpen(false)}
        />
      )}

      {/* Game picker sheet */}
      <div
        className={`md:hidden fixed bottom-16 left-0 right-0 z-50 bg-surface-container-high border-t border-outline-variant/30 rounded-t-2xl shadow-[0_-8px_40px_rgba(0,0,0,0.5)] transition-transform duration-300 ${
          sheetOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-outline-variant/50" />
        </div>
        <p className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-center py-3">
          Pick Your Game
        </p>
        <div className="px-4 pb-6 space-y-2">
          {GAMES.map((game) => (
            <button
              key={game.theme}
              onClick={() => selectGame(game.theme)}
              className="w-full text-left px-4 py-3 rounded-xl font-headline font-bold uppercase tracking-tight text-on-surface hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {game.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom nav bar */}
      <div className="md:hidden fixed bottom-0 w-full glass-panel border-t border-outline-variant/20 z-50 h-16 px-4 pb-safe flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive ? "text-primary" : "text-on-surface-variant hover:text-slate-300"
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-headline font-bold uppercase tracking-tighter">
                {item.label}
              </span>
            </Link>
          );
        })}

        <button
          onClick={() => setSheetOpen((v) => !v)}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            sheetOpen ? "text-primary" : "text-on-surface-variant hover:text-slate-300"
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={sheetOpen ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            sports_esports
          </span>
          <span className="text-[10px] font-headline font-bold uppercase tracking-tighter">
            Games
          </span>
        </button>
      </div>
    </>
  );
}
