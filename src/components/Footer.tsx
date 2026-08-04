import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background w-full py-12 md:py-16 mt-auto border-t border-outline-variant/15 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-lg font-bold text-slate-500 font-headline uppercase tracking-widest">
            BATTLE <span className="text-primary">BEACON</span>
          </div>
          <p className="font-body text-[10px] md:text-xs text-slate-500 opacity-80 mt-2 max-w-md text-center md:text-left">
            © 2026 Table Top Sports Ltd. Battle Beacon is a trading name of TableTop Sports Ltd, company number 17163028.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <Link href="/privacy" className="text-slate-500 hover:text-primary transition-colors font-body text-xs tracking-widest uppercase">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
