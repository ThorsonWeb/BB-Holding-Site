"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const navItems = [
    {
      href: "/for-players",
      label: "For Players",
      icon: "grid_view",
    },
    {
      href: "/for-venues",
      label: "For Venues",
      icon: "storefront",
    },
    {
      href: "/roadmap",
      label: "Roadmap",
      icon: "map",
    },
    {
      href: "/join",
      label: "Sign Up",
      icon: "person",
    },
  ];

  return (
    <div className="md:hidden fixed bottom-0 w-full glass-panel border-t border-outline-variant/20 z-50 h-16 px-4 pb-safe flex justify-around items-center">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              isActive
                ? "text-primary"
                : "text-on-surface-variant hover:text-slate-300"
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
    </div>
  );
}
