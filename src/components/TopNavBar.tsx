import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e14]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center px-6 md:px-8 h-16 md:h-20 w-full max-w-none">
        <div className="flex items-center gap-4">
          <Link href="/lobby" className="text-2xl font-black italic tracking-tighter text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] font-headline uppercase">
            BATTLE BUDDIES
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/lobby" className="font-headline font-bold tracking-tight uppercase transition-all hover:text-cyan-300 hover:bg-white/5 px-3 py-2 text-slate-400">
            Lobby
          </Link>
          <Link href="/lobby" className="font-headline font-bold tracking-tight uppercase transition-all hover:text-cyan-300 hover:bg-white/5 px-3 py-2 text-slate-400">
            Armory
          </Link>
          <Link href="/lobby" className="font-headline font-bold tracking-tight uppercase transition-all hover:text-cyan-300 hover:bg-white/5 px-3 py-2 text-slate-400">
            Events
          </Link>
          <Link href="/roadmap" className="font-headline font-bold tracking-tight uppercase transition-all hover:text-cyan-300 hover:bg-white/5 px-3 py-2 text-[#00E5FF] border-b-2 border-[#00E5FF] pb-1">
            Roadmap
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="material-symbols-outlined p-2 text-slate-400 hover:text-primary hover:bg-[#151a21] transition-all duration-300 rounded-lg">
            notifications
          </button>
          <button className="material-symbols-outlined p-2 text-slate-400 hover:text-primary hover:bg-[#151a21] transition-all duration-300 rounded-lg">
            account_circle
          </button>
          <button className="md:hidden material-symbols-outlined text-primary">
            menu
          </button>
          <Link href="/join" className="hidden md:inline-flex bg-primary-container text-on-primary-container font-headline font-bold uppercase px-6 py-2 rounded-lg active:scale-95 duration-200">
            Deploy Hub
          </Link>
        </div>
      </div>
    </nav>
  );
}
