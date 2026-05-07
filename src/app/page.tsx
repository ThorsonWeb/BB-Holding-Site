import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Link from "next/link";

const homepageTickerItems = [
  "FIND MORE GAMES NEAR YOU",
  "GET NOTIFIED ABOUT NEW GAMES AND EVENTS AT YOUR FAVOURITE STORES",
  "EARN AN EXCLUSIVE EARLY SIGNUP BADGE",
  "BUILD A PLAYER PROFILE WITH AWARDS, BADGES, AND BRAGGING RIGHTS",
  "BEACON CRM: BOOKINGS, EVENTS, CRM, AUTOMATIONS, AND FORMS",
  "MORE TABLES BOOKED, MORE EVENTS RUN, MORE PLAYERS IN STORE",
];

const supportedGames = [
  { label: "Warhammer 40", className: "text-primary" },
  { label: "Pokemon", className: "text-secondary" },
  { label: "Age of Sigmar", className: "text-tertiary" },
  { label: "Killteam", className: "text-primary-container" },
  { label: "Spearhead", className: "text-secondary" },
  { label: "Bolt Action", className: "text-primary" },
  { label: "Trench Crusade", className: "text-tertiary" },
  { label: "D&D", className: "text-primary-container" },
  { label: "Magic the Gathering", className: "text-secondary" },
  { label: "Star Wars Legion", className: "text-primary" },
  { label: "Legion", className: "text-tertiary" },
  { label: "Board Games", className: "text-primary-container" },
  { label: "Card Games", className: "text-secondary" },
];

const venueProtocolItems = [
  {
    title: "More Tables Booked",
    description:
      "Turn table availability into confirmed bookings with an easy booking system built for busy local gaming venues.",
  },
  {
    title: "More Events Run",
    description:
      "Use Beacon CRM to manage bookings, events, payments, customer records, automations, and forms in one place.",
  },
  {
    title: "Stronger Customer Loyalty",
    description:
      "Keep players engaged with better communication, follow-ups, and repeat visits that grow your community over time.",
  },
];

const playerProtocolItems = [
  {
    title: "Find More Games",
    description:
      "See local games, open tables, and venue events in one place so it is easier to get involved.",
  },
  {
    title: "Play More Games",
    description:
      "Get notified when your favourite stores post new games and events so you never miss a good opportunity to play.",
  },
  {
    title: "Win More Games",
    description:
      "Track your results, build your profile, and unlock awards, badges, and early adopter bragging rights as you improve.",
  },
];

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        <div className="w-full overflow-hidden border-y border-primary/10 bg-surface-container-lowest py-4">
          <div className="flex w-max min-w-full animate-[marquee_32s_linear_infinite] whitespace-nowrap py-4">
            <div className="flex items-center px-8 gap-12">
              {supportedGames.map((game) => (
                <span
                  key={game.label}
                  className={`font-headline text-sm font-bold tracking-widest uppercase ${game.className}`}
                >
                  {game.label}
                </span>
              ))}
            </div>
            <div className="flex items-center px-8 gap-12" aria-hidden="true">
              {supportedGames.map((game) => (
                <span
                  key={`${game.label}-duplicate`}
                  className={`font-headline text-sm font-bold tracking-widest uppercase ${game.className}`}
                >
                  {game.label}
                </span>
              ))}
            </div>
          </div>
        </div>

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
                  For Players &amp; Venues
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-on-surface tracking-tighter leading-[1.1] md:leading-[0.9] uppercase mb-6">
                More Games. <br />
                <span className="text-primary italic">Better Events.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-body max-w-2xl">
                Battle Beacon helps players find more games, play more often, track progress, and earn bragging rights. For venues, Beacon CRM helps fill tables, run better events, improve customer loyalty, and keep local communities coming back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/join"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold uppercase rounded-lg shadow-lg active:scale-95 transition-transform text-center"
                >
                  Sign Up Early
                </Link>
                <Link
                  href="/for-venues"
                  className="px-8 py-4 bg-transparent border border-outline-variant text-primary font-headline font-bold uppercase rounded-lg hover:bg-primary/5 transition-all text-center"
                >
                  For Venues
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
                  Players miss games, venues miss bookings, and disconnected tools make every event harder to run than it should be.
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
                    Help players find games faster and make it simple for venues to turn interest into table bookings and event signups.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Quick Table Booking
                    </li>
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Fast Event Sign-up
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
                    Give players more reasons to come back with profiles, stat tracking, awards, badges, and an exclusive early signup badge.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Unique Player Profiles
                    </li>
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Badges, Awards &amp; Bragging Rights
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
                    Beacon CRM gives venues one place to manage bookings, events, CRM, automations, and forms without juggling multiple tools.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Booking &amp; Event Management
                    </li>
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      CRM, Automations &amp; Forms
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
                    Keep players connected to their favourite stores with instant alerts for newly posted games, fresh events, and open tables.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Favourite Store Alerts
                    </li>
                    <li className="flex items-center gap-3 text-sm text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      New Game &amp; Event Notifications
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
                    src="/homescreen.jpeg"
                  />
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <h2 className="text-4xl md:text-5xl font-bold uppercase text-on-surface tracking-tight mb-8 leading-none">
                  One Platform. <span className="text-secondary">Real Momentum.</span>
                </h2>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                  Battle Beacon gives players a better way to discover games and improve over time, while giving venues a smarter way to manage events and grow loyalty.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined">explore</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase text-on-surface mb-2">Smart Venue Discovery</h4>
                      <p className="text-on-surface-variant">
                        Show players where games are happening, which stores have space, and what events are worth booking into next.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined">leaderboard</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase text-on-surface mb-2">Player Profile &amp; Rewards</h4>
                      <p className="text-on-surface-variant">
                        Every player gets a unique profile to track progress, unlock rewards, and show off badges, awards, and early adopter status.
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
              {homepageTickerItems.map((item) => (
                <span key={item} className="text-primary font-headline text-sm font-bold tracking-widest uppercase">
                  {item}
                </span>
              ))}
            </div>
            {/* Duplicate for seamless scrolling */}
            <div className="flex items-center px-8 gap-12" aria-hidden="true">
              {homepageTickerItems.map((item) => (
                <span key={`${item}-duplicate`} className="text-primary font-headline text-sm font-bold tracking-widest uppercase">
                  {item}
                </span>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-on-surface">Growth for Venues</h2>
              <p className="text-on-surface-variant text-lg mb-8 max-w-xl">
                Beacon CRM helps venues book more tables, run more events, improve customer loyalty, and keep more players engaged in store.
              </p>
              <div className="space-y-6">
                {venueProtocolItems.map((item) => (
                  <div key={item.title} className="p-6 bg-surface-container rounded-xl">
                    <h4 className="text-lg font-bold text-primary uppercase mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Player Benefits */}
            <div className="bg-surface py-12 md:py-16 md:pl-12 border-t md:border-t-0 md:border-l border-outline-variant/10">
              <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-headline font-bold text-xs uppercase mb-6">
                Player Protocol
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-on-surface">Momentum for Players</h2>
              <p className="text-on-surface-variant text-lg mb-8 max-w-xl">
                Find more games, play more games, win more games, and stay connected to the stores and communities you care about most.
              </p>
              <div className="space-y-6">
                {playerProtocolItems.map((item) => (
                  <div key={item.title} className="p-6 bg-surface-container rounded-xl border border-secondary/20">
                    <h4 className="text-lg font-bold text-secondary uppercase mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm">{item.description}</p>
                  </div>
                ))}
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
              Join Before Launch
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 font-body">
              Sign up early to claim your place in the first wave of Battle Beacon players and venues, and unlock the early adopter badge before launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/join"
                className="px-12 py-5 bg-primary text-on-primary font-headline font-black text-xl uppercase rounded-lg shadow-[0_0_30px_rgba(129,236,255,0.4)] hover:scale-105 transition-transform"
              >
                Sign Up as a Venue
              </Link>
              <Link
                href="/join"
                className="px-12 py-5 bg-secondary text-on-secondary font-headline font-black text-xl uppercase rounded-lg shadow-[0_0_30px_rgba(255,81,250,0.4)] hover:scale-105 transition-transform"
              >
                Sign Up as a Player
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
