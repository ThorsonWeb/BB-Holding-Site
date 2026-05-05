import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10"></div>
            <img
              className="w-full h-full object-cover"
              alt="Dramatic cinematic shot of high-quality painted wargaming miniatures"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXRXmXMdp4uoYC2CjT1wvtUv-UnfIK6IKHUO7W0AJTQomToNrCBFtrJmtFFaSy9npd2LGXWCyBy0yFUy3DifFvF63UzzCMsoVPdvw8J8asb9syjJS8yTxSnPOE5nC4hhMUalG-PlgQTX5QKDhHM2lJoTSKPjYTpQEaa2UiVYwmd98ZQyLb4SC3_K4pVt9b2hHRkBl5NZNh4j2jfiUQRUMC0XKyOmsNOO5yyhuFOJBTrtTVdju083d3aRQxVv85x8sM4eaZxsPgXis"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border-l-2 border-primary mb-6">
                <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase">
                  System Initialization Complete
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-on-surface tracking-tighter leading-[1.1] md:leading-[0.9] uppercase mb-6">
                From Fog of War <br />
                <span className="text-primary italic">To Tactical Command</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-body max-w-2xl">
                The tabletop ecosystem is fractured. Disjointed chats, lost scores, and empty venues are relics of the past. Battle Beacon centralizes the skirmish, empowering players and shop owners with military-grade management tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/join"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold uppercase rounded-lg shadow-lg active:scale-95 transition-transform text-center"
                >
                  Initialize Deployment
                </Link>
                <Link
                  href="/for-players"
                  className="px-8 py-4 bg-transparent border border-outline-variant text-primary font-headline font-bold uppercase rounded-lg hover:bg-primary/5 transition-all text-center"
                >
                  For Players
                </Link>
              </div>
            </div>
          </div>

          {/* Tactical Decorative Elements */}
          <div className="absolute right-8 bottom-8 text-right hidden xl:block z-20">
            <div className="text-on-surface-variant font-headline text-xs tracking-tighter uppercase space-y-1 opacity-50">
              <p>LAT: 51.5074° N</p>
              <p>LONG: 0.1278° W</p>
              <p>STATUS: OPERATIONAL</p>
            </div>
          </div>
        </section>

        {/* The Chaos (Pains) Section */}
        <section className="py-24 bg-surface relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-12 gap-12 items-end mb-16">
              <div className="col-span-12 md:col-span-7">
                <h2 className="text-4xl md:text-5xl font-bold uppercase text-on-surface tracking-tight mb-4">
                  The Chaos of the Old Way
                </h2>
                <div className="h-1 w-24 bg-error mb-6"></div>
                <p className="text-on-surface-variant text-lg">
                  Legacy systems are failing your community. Manual processes lead to critical failure points in event execution and player retention.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pain Card 1 */}
              <div className="bg-surface-container-low p-8 border-l-2 border-error/30 hover:border-error transition-all group">
                <div className="mb-6">
                  <span className="material-symbols-outlined text-error text-4xl group-hover:scale-110 transition-transform">cloud_off</span>
                </div>
                <h3 className="text-xl font-bold uppercase mb-3 text-on-surface">Fragmented Comms</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  WhatsApp groups and Discord pings get buried in the noise. Players miss critical updates and local deployments.
                </p>
              </div>

              {/* Pain Card 2 */}
              <div className="bg-surface-container-low p-8 border-l-2 border-error/30 hover:border-error transition-all group">
                <div className="mb-6">
                  <span className="material-symbols-outlined text-error text-4xl group-hover:scale-110 transition-transform">edit_document</span>
                </div>
                <h3 className="text-xl font-bold uppercase mb-3 text-on-surface">Paper Tracking</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Manual score entry on scribbled sheets creates data silos and human error. History is lost the moment the game ends.
                </p>
              </div>

              {/* Pain Card 3 */}
              <div className="bg-surface-container-low p-8 border-l-2 border-error/30 hover:border-error transition-all group">
                <div className="mb-6">
                  <span className="material-symbols-outlined text-error text-4xl group-hover:scale-110 transition-transform">storefront</span>
                </div>
                <h3 className="text-xl font-bold uppercase mb-3 text-on-surface">Ghost Venues</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Shop owners struggle to fill tables without real-time visibility into their local player base&apos;s schedule and intent.
                </p>
              </div>

              {/* Pain Card 4 */}
              <div className="bg-surface-container-low p-8 border-l-2 border-error/30 hover:border-error transition-all group">
                <div className="mb-6">
                  <span className="material-symbols-outlined text-error text-4xl group-hover:scale-110 transition-transform">person_off</span>
                </div>
                <h3 className="text-xl font-bold uppercase mb-3 text-on-surface">Isolated Players</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Without a centralized hub, finding new opponents or consistent games becomes a logistical nightmare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution (Tactical Command) Section */}
        <section className="py-24 bg-surface-container-low relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold uppercase text-primary tracking-tight mb-4">
                  Tactical Command Restored
                </h2>
                <div className="h-1 w-24 bg-primary mb-6"></div>
                <p className="text-on-surface-variant text-lg max-w-2xl">
                  Deploying the Battle Beacon protocol. A unified operating system for the tabletop industry.
                </p>
              </div>
              <div className="bg-surface-container-highest p-4 border border-outline-variant/20 rounded-lg shrink-0">
                <span className="text-secondary font-headline font-bold uppercase text-xs">
                  Signal Strength: Optimal
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Solution 1 */}
              <div className="bg-surface-container p-10 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl text-primary">hub</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold uppercase mb-4 text-on-surface">Unified Discovery &amp; Booking</h3>
                  <p className="text-on-surface-variant mb-8 max-w-md">
                    Browse local tournaments, book a table, and secure your spot in seconds. One app, every venue, zero friction.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Instant Registration
                    </li>
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      QR Code Check-in
                    </li>
                  </ul>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="bg-surface-container p-10 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl text-primary">analytics</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold uppercase mb-4 text-on-surface">Performance Analytics</h3>
                  <p className="text-on-surface-variant mb-8 max-w-md">
                    Track your games, grow a standout player profile, and earn badges, awards, and bragging rights that show your progress.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Live Win/Loss Ratios
                    </li>
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Badges &amp; Player Awards
                    </li>
                  </ul>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="bg-surface-container p-10 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl text-primary">dashboard_customize</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold uppercase mb-4 text-on-surface">Venue CRM &amp; Automation</h3>
                  <p className="text-on-surface-variant mb-8 max-w-md">
                    Automated tournament pairings, automated customer engagement, and real-time inventory hooks for tournament packs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Player Retention Tools
                    </li>
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Revenue Heatmaps
                    </li>
                  </ul>
                </div>
              </div>

              {/* Solution 4 */}
              <div className="bg-surface-container p-10 rounded-xl relative overflow-hidden group border-2 border-primary/20">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl text-primary">radar</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold uppercase mb-4 text-on-surface">Tactical Radar</h3>
                  <p className="text-on-surface-variant mb-8 max-w-md">
                    Real-time notifications for local skirmishes. If a game is happening in your sector, your deck will alert you immediately.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Geofenced Alerts
                    </li>
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      LFG Matchmaking
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative w-full">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 blur-3xl rounded-full"></div>
                <div className="relative z-10 p-4 bg-surface-container-high rounded-3xl border border-outline-variant/30 shadow-2xl">
                  <img
                    alt="App Screens"
                    className="rounded-2xl w-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiXQq_jvI9mYdsK2QK9sU1fYgiht5ghpx7q3HWzfFmWLOUQWdPE3LGECcP4uzq7fH2nsnNo6Y7QTIdRyOihfh1TJfKLY9T8FlKC7Ln2KziCOwk0I3E6KaTZyykIW1xfiFWNMCoE4Fm8ysJMKQAZSdotFpKRFEThlx9BZsLZ0CrBIY3UqdSyd0L5Fri6ZBkI8nQZ8-jZeWIJGKc9D07ql9sHCCkFv3zkGOwXu5Go50JAGceUtptlKqVq1IzCuVLHbQ1SIakAuvlvj4"
                  />
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <h2 className="text-4xl md:text-5xl font-bold uppercase text-on-surface tracking-tight mb-8 leading-none">
                  The Command <span className="text-secondary">Interface</span>
                </h2>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                  Our dashboard isn&apos;t just a list—it&apos;s your tactical HUD. Experience seamless transitions from global venue searching to granular player performance data.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined">explore</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase text-on-surface mb-2">Venue Recon</h4>
                      <p className="text-on-surface-variant">
                        Intelligent map views showing live activity, table availability, and community ratings for every shop in your sector.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined">leaderboard</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase text-on-surface mb-2">Digital Dossier</h4>
                      <p className="text-on-surface-variant">
                        Every player gets a unique profile to showcase win streaks, awards, badges, and early adopter bragging rights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Battle Ticker */}
        <div className="w-full bg-surface-container-lowest py-4 border-y border-primary/10 overflow-hidden">
          <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] w-fit">
            <div className="flex items-center px-8 gap-12">
              <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase">LIVE_INTEL: SECTOR_7_TOURNAMENT_ACTIVE</span>
              <span className="text-slate-500">•</span>
              <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase">NEW_VENUE: GALAXY_GAMES_ONLINE</span>
              <span className="text-slate-500">•</span>
              <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase">ARMORY_RESTOCK: 15:00_UTC</span>
              <span className="text-slate-500">•</span>
              <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase">EARLY_ADOPTER_BADGE: FIRST_WAVE_UNLOCKED</span>
              <span className="text-slate-500">•</span>
              <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase">LIVE_INTEL: SECTOR_7_TOURNAMENT_ACTIVE</span>
            </div>
            {/* Duplicate for seamless scrolling */}
            <div className="flex items-center px-8 gap-12" aria-hidden="true">
              <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase">LIVE_INTEL: SECTOR_7_TOURNAMENT_ACTIVE</span>
              <span className="text-slate-500">•</span>
              <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase">NEW_VENUE: GALAXY_GAMES_ONLINE</span>
              <span className="text-slate-500">•</span>
              <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase">ARMORY_RESTOCK: 15:00_UTC</span>
              <span className="text-slate-500">•</span>
              <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase">EARLY_ADOPTER_BADGE: FIRST_WAVE_UNLOCKED</span>
              <span className="text-slate-500">•</span>
              <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase">LIVE_INTEL: SECTOR_7_TOURNAMENT_ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Venue vs Player Benefits */}
        <section className="py-24 bg-surface relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10">
            {/* Venue Benefits */}
            <div className="bg-surface py-12 md:py-16 md:pr-12">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-headline font-bold text-xs uppercase mb-6">
                Venue Protocol
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 text-on-surface">Dominance for Owners</h2>
              <div className="space-y-6">
                <div className="p-6 bg-surface-container rounded-xl">
                  <h4 className="text-lg font-bold text-primary uppercase mb-2">Custom Themes</h4>
                  <p className="text-on-surface-variant text-sm">
                    Reskin your shop’s digital presence with custom neon palettes and industrial themes to match your physical aesthetic.
                  </p>
                </div>
                <div className="p-6 bg-surface-container rounded-xl">
                  <h4 className="text-lg font-bold text-primary uppercase mb-2">Advanced Telemetry</h4>
                  <p className="text-on-surface-variant text-sm">
                    Know your peak hours, most popular game systems, and player lifetime value with industrial-grade analytics.
                  </p>
                </div>
              </div>
            </div>

            {/* Player Benefits */}
            <div className="bg-surface py-12 md:py-16 md:pl-12 border-t md:border-t-0 md:border-l border-outline-variant/10">
              <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-headline font-bold text-xs uppercase mb-6">
                Player Protocol
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 text-on-surface">Prestige for Players</h2>
              <div className="space-y-6">
                <div className="p-6 bg-surface-container rounded-xl border border-secondary/20">
                  <h4 className="text-lg font-bold text-secondary uppercase mb-2">Bragging Rights</h4>
                  <p className="text-on-surface-variant text-sm">
                    Shareable victory cards and automated social media integration for your most epic tabletop triumphs.
                  </p>
                </div>
                <div className="p-6 bg-surface-container rounded-xl border border-secondary/20">
                  <h4 className="text-lg font-bold text-secondary uppercase mb-2">Points Shop</h4>
                  <p className="text-on-surface-variant text-sm">
                    Earn Credits for every match played. Redeem for exclusive digital cosmetic tags or discounts at partner venues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-30 grayscale"
              alt="Industrial metal textures with glowing cyan circuitry lines"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV8n0pE1l8vzl9huPAqLmBuagWEgLDNRI-EqToFP2GKtpgD_4lE30MnDqe6Le8tvYnrg2etUJHnw-oTl_eEXsDk6x5KJOn0IYIr-CpmG74bNAMiHLfHab5F3sclFomNt-YQXFZJFzDzBd61I9pNUM0-01oWhHUIjS_nGi1Md25iM1NNOtBwOavp2pV_ThoqctlgpPmxyggc7fuPa7Qa7N2C3LsTff687QcAEDZNtosoB65dzxGu7boC86tlqOOEXzKk1GcQq0UV7g"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/80 to-surface"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-black uppercase text-on-surface mb-8 tracking-tighter">
              Secure Your Sector
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 font-body">
              Join the elite network of tabletop generals. Deployment is imminent. Are you ready to take command?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/join"
                className="px-12 py-5 bg-primary text-on-primary font-headline font-black text-xl uppercase rounded-lg shadow-[0_0_30px_rgba(129,236,255,0.4)] hover:scale-105 transition-transform"
              >
                Register Venue
              </Link>
              <Link
                href="/join"
                className="px-12 py-5 bg-secondary text-on-secondary font-headline font-black text-xl uppercase rounded-lg shadow-[0_0_30px_rgba(255,81,250,0.4)] hover:scale-105 transition-transform"
              >
                Create Player ID
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
