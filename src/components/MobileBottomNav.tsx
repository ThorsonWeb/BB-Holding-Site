import Link from "next/link";

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 w-full glass-panel border-t border-outline-variant/20 z-50 h-16 px-4 pb-safe flex justify-around items-center">
      <Link href="/lobby" className="flex flex-col items-center gap-1 text-primary transition-all duration-300">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
        <span className="text-[10px] font-headline font-bold uppercase tracking-tighter">Lobby</span>
      </Link>
      <Link href="/lobby" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-slate-300 transition-all duration-300">
        <span className="material-symbols-outlined">shield</span>
        <span className="text-[10px] font-headline font-bold uppercase tracking-tighter">Armory</span>
      </Link>
      <Link href="/roadmap" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-slate-300 transition-all duration-300">
        <span className="material-symbols-outlined">map</span>
        <span className="text-[10px] font-headline font-bold uppercase tracking-tighter">Roadmap</span>
      </Link>
      <Link href="/join" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-slate-300 transition-all duration-300">
        <span className="material-symbols-outlined">person</span>
        <span className="text-[10px] font-headline font-bold uppercase tracking-tighter">HQ</span>
      </Link>
    </div>
  );
}
