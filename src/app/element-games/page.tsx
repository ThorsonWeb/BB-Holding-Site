import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import BeaconCalendarEmbed from "@/components/BeaconCalendarEmbed";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Element Games x Battle Beacon | Book a Table",
  description: "Element Games' North West Gaming Centre now runs table booking and events through Battle Beacon. Find open tables and reserve your slot at Stockport.",
  robots: { index: false, follow: false },
};

const FEATURES = [
  {
    tag: "Discovery",
    title: "Find Open Tables",
    body: "See live table availability at Element Games Stockport before you even leave the house.",
  },
  {
    tag: "Booking",
    title: "Reserve in Seconds",
    body: "Pick a game, pick a slot, confirm. No calls, no waiting on a WhatsApp group reply.",
  },
  {
    tag: "Loyalty",
    title: "Track Your Games",
    body: "Every visit builds your Battle Beacon profile: badges, stats, and bragging rights.",
  },
];

export default function ElementGamesPage() {
  return (
    <div className={`${oswald.variable} ${inter.variable} min-h-screen bg-[#0d0d0d] text-[#f2f0ee] font-[family-name:var(--font-inter)]`}>
      {/* HEADER */}
      <header className="flex items-center justify-between gap-6 px-6 py-5 md:px-12 bg-black border-b-[3px] border-[#0af]">
        <div className="flex items-center gap-3">
          {/* TODO(asset): replace with the real Element Games logo mark */}
          <div className="w-9 h-9 -skew-x-[8deg] bg-[#0af] flex items-center justify-center font-[family-name:var(--font-oswald)] font-bold text-lg text-white shrink-0">
            EG
          </div>
          <div className="font-[family-name:var(--font-oswald)] font-semibold text-lg tracking-wide text-white whitespace-nowrap">
            ELEMENT GAMES
          </div>
          <div className="hidden md:block w-px h-6 bg-[#333] mx-1" />
          <div className="hidden md:block font-[family-name:var(--font-oswald)] font-medium text-sm tracking-wider text-[#999] uppercase whitespace-nowrap">
            North West Gaming Centre
          </div>
        </div>
        <nav className="flex items-center gap-4 md:gap-8">
          <a href="#booking" className="hidden sm:inline text-[#ccc] text-sm font-semibold uppercase tracking-wide no-underline hover:text-white transition-colors">
            Book a Table
          </a>
          <a href="#events" className="hidden sm:inline text-[#ccc] text-sm font-semibold uppercase tracking-wide no-underline hover:text-white transition-colors">
            Events
          </a>
          <a href="#booking" className="bg-[#0af] text-white font-bold text-[13px] uppercase tracking-wide px-5 py-2.5 rounded-sm no-underline hover:opacity-90 transition-opacity">
            Book Now
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-b from-[#111] to-[#0d0d0d]">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(0,170,255,0.4) 0 2px, transparent 2px 40px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#0af]/10 border border-[#0af] px-3.5 py-1.5 rounded-sm font-[family-name:var(--font-oswald)] text-xs font-semibold tracking-[0.15em] uppercase text-[#0af] mb-7">
            Now Live at Stockport
          </div>
          <h1 className="font-[family-name:var(--font-oswald)] font-bold text-5xl md:text-[64px] leading-[1.02] uppercase text-white mb-6">
            Book Your
            <br />
            Table. Instantly.
          </h1>
          <p className="text-lg md:text-[19px] leading-relaxed text-[#b8b5b2] max-w-xl mb-10">
            Element Games Gaming Centre now runs table booking and events through Battle Beacon &mdash; find open tables, reserve your slot, and never miss a game night at Stockport again.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#booking" className="bg-[#0af] text-white font-[family-name:var(--font-oswald)] font-semibold text-base uppercase tracking-wide px-8 py-4 rounded-sm no-underline hover:opacity-90 transition-opacity">
              Book a Table
            </a>
            <a href="/join" className="border border-[#444] text-white font-[family-name:var(--font-oswald)] font-semibold text-base uppercase tracking-wide px-8 py-4 rounded-sm no-underline hover:border-[#0af] transition-colors">
              Join Battle Beacon
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="events" className="px-6 md:px-12 py-14 md:py-18 bg-[#151515] border-t border-b border-[#262626]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-[#0d0d0d] border border-[#262626] p-8 rounded">
              <div className="font-[family-name:var(--font-oswald)] text-[13px] font-semibold tracking-[0.1em] uppercase text-[#0af] mb-3">
                {f.tag}
              </div>
              <div className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-white mb-2.5">
                {f.title}
              </div>
              <div className="text-[15px] leading-relaxed text-[#a3a09d]">{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING WIDGET */}
      <section id="booking" className="px-6 md:px-12 py-16 md:py-22 max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="font-[family-name:var(--font-oswald)] text-[13px] font-semibold tracking-[0.2em] uppercase text-[#0af] mb-3.5">
            Powered by Battle Beacon
          </div>
          <h2 className="font-[family-name:var(--font-oswald)] font-bold text-3xl md:text-[38px] uppercase text-white mb-4">
            Reserve a Table
          </h2>
          <p className="text-[#a3a09d] text-base max-w-lg mx-auto">
            Pick a game, pick a slot. Live availability at the Stockport Gaming Centre.
          </p>
        </div>

        <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-6 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <BeaconCalendarEmbed
            embedKey="oRaqLEqbhMNDtFAnQueiNFKfWHiL44oW92UjSV6eLik"
            host="https://beacon-crm.com"
          />
        </div>

        <div className="text-center mt-6 text-[13px] text-[#777]">
          By reserving, you agree to Battle Beacon&apos;s{" "}
          <a href="/privacy" className="text-[#0af] hover:underline">
            Privacy Notice
          </a>
          .
        </div>
      </section>

      {/* EARLY ACCESS STRIP */}
      <section className="bg-[#0af] px-6 py-12 text-center">
        <div className="font-[family-name:var(--font-oswald)] font-bold text-2xl md:text-[26px] uppercase text-white mb-2.5">
          Get In Before Launch
        </div>
        <div className="text-white/85 text-[15px] mb-6 max-w-lg mx-auto">
          Sign up early to lock your Battle Beacon badge and priority booking at Element Games Stockport.
        </div>
        <a href="/join" className="inline-block bg-black text-white font-[family-name:var(--font-oswald)] font-semibold text-[15px] uppercase tracking-wide px-8 py-3.5 rounded no-underline hover:opacity-85 transition-opacity">
          Sign Up Free
        </a>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-10 bg-black flex flex-wrap items-center justify-between gap-4">
        <div className="font-[family-name:var(--font-oswald)] text-sm text-[#777]">
          &copy; Element Games Ltd 2026 &middot; Table booking powered by Battle Beacon
        </div>
        <div className="flex flex-wrap gap-6">
          <a href="https://elementgames.co.uk/store-information" className="text-[#777] text-[13px] no-underline hover:text-[#ccc]">
            Stockport Store
          </a>
          <a href="https://elementgames.co.uk/north-west-gaming-centre" className="text-[#777] text-[13px] no-underline hover:text-[#ccc]">
            Gaming Centre
          </a>
          <a href="/for-venues" className="text-[#777] text-[13px] no-underline hover:text-[#ccc]">
            Battle Beacon for Venues
          </a>
        </div>
      </footer>
    </div>
  );
}
