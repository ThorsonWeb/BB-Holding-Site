"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import JoinLink from "@/components/JoinLink";
import { useState, useRef, useEffect } from "react";

const GAMES = [
  { label: "Warhammer 40,000", theme: "40k" },
  { label: "Pokémon TCG", theme: "pokemon" },
  { label: "Magic: The Gathering", theme: "mtg" },
  { label: "Star Wars: Unlimited", theme: "starwars" },
  { label: "Board Games & D&D", theme: "boardgames" },
];

export default function TopNavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: "/for-players", label: "Players" },
    { href: "/for-venues", label: "Game Stores" },
    { href: "/roadmap", label: "Roadmap" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectGame(theme: string) {
    setOpen(false);
    router.push(`/landing?theme=${theme}`);
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] [font-family:var(--font-space-grotesk)]">
      <div className="flex justify-between items-center px-6 md:px-8 h-16 md:h-20 w-full max-w-none">
        <div className="flex items-center gap-4">
          <Link
            href="/for-players"
            className="flex items-center gap-3 text-2xl font-black italic tracking-tighter text-primary font-headline uppercase"
            style={{ filter: "drop-shadow(0 0 8px var(--color-primary))" }}
          >
            <Image
              src="/bb-logo.jpeg"
              alt="Battle Beacon logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span>BATTLE BEACON</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-headline font-bold tracking-tight uppercase transition-all hover:bg-white/5 px-3 py-2 ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-slate-400 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Game picker dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1.5 font-headline font-bold tracking-tight uppercase text-slate-400 hover:text-primary hover:bg-white/5 px-3 py-2 transition-all"
            >
              Pick Your Game
              <span
                className="material-symbols-outlined text-base leading-none transition-transform"
                style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                expand_more
              </span>
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-surface-container-high border border-outline-variant/30 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
                {GAMES.map((game) => (
                  <button
                    key={game.theme}
                    onClick={() => selectGame(game.theme)}
                    className="w-full text-left px-4 py-3 text-sm font-headline font-bold uppercase tracking-tight text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {game.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <JoinLink className="inline-flex bg-primary-container text-on-primary-container font-headline font-bold uppercase px-6 py-2 rounded-lg active:scale-95 duration-200">
            Sign Up
          </JoinLink>
        </div>
      </div>
    </nav>
  );
}
