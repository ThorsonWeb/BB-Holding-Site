"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNavBar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/for-players", label: "For Players" },
    { href: "/for-venues", label: "For Venues" },
    { href: "/roadmap", label: "Roadmap" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e14]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] [font-family:var(--font-space-grotesk)]">
      <div className="flex justify-between items-center px-6 md:px-8 h-16 md:h-20 w-full max-w-none">
        <div className="flex items-center gap-4">
          <Link
            href="/for-players"
            className="flex items-center gap-3 text-2xl font-black italic tracking-tighter text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] font-headline uppercase"
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
                className={`font-headline font-bold tracking-tight uppercase transition-all hover:text-cyan-300 hover:bg-white/5 px-3 py-2 ${
                  isActive
                    ? "text-[#00E5FF] border-b-2 border-[#00E5FF] pb-1"
                    : "text-slate-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center">
          <Link href="/join" className="inline-flex bg-primary-container text-on-primary-container font-headline font-bold uppercase px-6 py-2 rounded-lg active:scale-95 duration-200">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
