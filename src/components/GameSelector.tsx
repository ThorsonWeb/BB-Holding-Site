"use client";

import { useRouter } from "next/navigation";

const GAMES = [
  { label: "Warhammer 40,000", theme: "40k" },
  { label: "Pokémon TCG", theme: "pokemon" },
  { label: "Magic: The Gathering", theme: "mtg" },
  { label: "Star Wars: Unlimited", theme: "starwars" },
  { label: "Board Games & D&D", theme: "boardgames" },
];

export default function GameSelector() {
  const router = useRouter();

  return (
    <div className="mt-12 pt-8 border-t border-outline-variant/20">
      <p className="text-on-surface-variant font-headline font-bold text-xs tracking-widest uppercase mb-4">
        What do you like to play?
      </p>
      <div className="flex flex-wrap gap-3">
        {GAMES.map((game) => (
          <button
            key={game.theme}
            onClick={() => router.push(`/landing?theme=${game.theme}`)}
            className="px-4 py-2 rounded-lg border border-outline-variant/40 bg-surface-container text-on-surface-variant font-headline font-bold text-sm uppercase tracking-tight hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-95 transition-all"
          >
            {game.label}
          </button>
        ))}
      </div>
    </div>
  );
}
