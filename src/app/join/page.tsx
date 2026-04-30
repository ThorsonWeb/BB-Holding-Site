import Link from "next/link";
import Footer from "@/components/Footer";

export default function JoinPage() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col">
      <main className="relative flex-grow flex items-center justify-center tactical-grid p-6 lg:p-12 mb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-container-low rounded-xl overflow-hidden relative z-10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
          <div className="lg:col-span-5 hidden lg:block relative overflow-hidden group">
            <img
              alt="Tactical Gaming Environment"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeoUO_stCQSfZr9iGdkfBlaTaRQZG2bo7Bkrw0TbQZjHbGRYY2yNXqO3ZoWUZUSDFSoAv1pQl_vahBE_ypRwnOX0AB7k7WYVfHRej4mj42XdlSFzJtwkIfTMfpzaIk-NXVxllCDGGnl9iSi9yO9aCl6BUPTnlB0qlE99vDKfq7frpeShqlf7PffRCxeeS_rmX56xbKntEHE0iWZ_7X0edzLr5wNIhzuVuO2GYLz3kM2KaFPLYi1S06RQO1hYCAGdljFkITay8C8Ig"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full">
              <div className="mb-6">
                <p className="font-headline text-xl font-black text-primary leading-tight tracking-tight uppercase animate-pulse">
                  10,000+ COMMANDERS DEPLOYED.<br />
                  <span className="text-white">DON&apos;T GET LEFT IN THE FOG.</span>
                </p>
                <div className="h-1 w-24 bg-primary mt-2"></div>
              </div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-primary">Live Operations Active</span>
              </div>
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4 leading-none tracking-tighter italic uppercase">
                Master the<br /><span className="text-primary">Neon Sector.</span>
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs font-medium">
                The ultimate tactical command center for tournament organizers and elite players. Coordinate, compete, and conquer.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center">
            <div className="mb-10 text-center lg:text-left">
              <Link href="/" className="font-headline text-3xl font-black text-primary italic tracking-tighter mb-2 hover:underline">
                BATTLE BUDDIES
              </Link>
              <p className="text-on-surface-variant font-medium tracking-wide uppercase text-[10px]">Secure Gateway: Initialization Protocol</p>
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-2 p-1 bg-surface-container-highest rounded-lg relative">
                <button className="relative z-10 py-3 text-xs font-headline font-bold uppercase tracking-widest text-on-primary-fixed bg-primary rounded-md transition-all">
                  Player
                </button>
                <button className="relative z-10 py-3 text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-all">
                  Shop Owner
                </button>
              </div>
            </div>

            <form className="space-y-5">
              <div className="space-y-1">
                <label className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block ml-1">Codename / Full Name</label>
                <input
                  className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 text-on-surface focus:ring-0 focus:border-primary placeholder:text-on-surface-variant/30 font-medium py-3 px-4 transition-all rounded-t-lg outline-none"
                  placeholder="John 'Striker' Doe"
                  type="text"
                />
              </div>
              <div className="space-y-1">
                <label className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block ml-1">Communication Channel (Email)</label>
                <input
                  className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 text-on-surface focus:ring-0 focus:border-primary placeholder:text-on-surface-variant/30 font-medium py-3 px-4 transition-all rounded-t-lg outline-none"
                  placeholder="commander@sector.net"
                  type="email"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block ml-1">Access Key (Password)</label>
                  <input
                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 text-on-surface focus:ring-0 focus:border-primary placeholder:text-on-surface-variant/30 font-medium py-3 px-4 transition-all rounded-t-lg outline-none"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block ml-1">Primary Game / System</label>
                  <select className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 text-on-surface focus:ring-0 focus:border-primary font-medium py-3 px-4 transition-all rounded-t-lg appearance-none outline-none">
                    <option>Warhammer 40,000</option>
                    <option>Magic: The Gathering</option>
                    <option>Star Wars: Shatterpoint</option>
                    <option>Dungeons &amp; Dragons</option>
                  </select>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-headline font-bold uppercase py-4 rounded-lg tracking-[0.15em] shadow-[0_8px_24px_rgba(129,236,255,0.2)] hover:shadow-[0_12px_32px_rgba(129,236,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Join the Front Line
                </button>
              </div>
            </form>

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/20"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-headline font-bold tracking-[0.3em] text-on-surface-variant">
                <span className="bg-surface-container-low px-4">Satellite Authentication</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button className="flex items-center justify-center py-3 bg-surface-container-high border border-outline-variant/10 rounded-lg hover:bg-surface-container-highest transition-all group">
                <span className="material-symbols-outlined text-xl text-on-surface-variant group-hover:text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
              </button>
              <button className="flex items-center justify-center py-3 bg-surface-container-high border border-outline-variant/10 rounded-lg hover:bg-surface-container-highest transition-all group">
                <span className="material-symbols-outlined text-xl text-on-surface-variant group-hover:text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>sports_esports</span>
              </button>
              <button className="flex items-center justify-center py-3 bg-surface-container-high border border-outline-variant/10 rounded-lg hover:bg-surface-container-highest transition-all group">
                <span className="material-symbols-outlined text-xl text-on-surface-variant group-hover:text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>laptop_mac</span>
              </button>
            </div>

            <p className="mt-12 text-center text-[11px] text-on-surface-variant font-medium">
              By initializing your session, you agree to the <Link className="text-primary hover:underline" href="#">Strategic Privacy Protocol</Link> and <Link className="text-primary hover:underline" href="#">Terms of Service</Link>.
            </p>
          </div>
        </div>

        {/* Floating status */}
        <div className="fixed bottom-24 lg:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-8 text-[9px] font-headline font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-on-surface-variant/40 whitespace-nowrap">
          <span>Protocol v.2.04.1</span>
          <div className="h-1 w-1 bg-primary rounded-full hidden sm:block"></div>
          <span className="hidden sm:inline">Encrypted Signal Active</span>
          <div className="h-1 w-1 bg-primary rounded-full hidden sm:block"></div>
          <span>NEON SECTOR</span>
        </div>
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
