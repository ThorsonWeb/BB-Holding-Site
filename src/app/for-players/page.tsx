import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Link from "next/link";
import JoinLink from "@/components/JoinLink";

const tickerItems = [
  {
    accent: "primary",
    icon: "groups",
    label: "Meet local players and find more games near you",
  },
  {
    accent: "default",
    icon: "event",
    label: "Set up a game in minutes and fill the table faster",
  },
  {
    accent: "secondary",
    icon: "trending_up",
    label: "Track your results and see your game improve over time",
  },
  {
    accent: "primary",
    icon: "military_tech",
    label: "Build a unique profile with awards, badges, and bragging rights",
  },
  {
    accent: "secondary",
    icon: "workspace_premium",
    label: "Earn an exclusive early signup badge only available to early adopters",
  },
  {
    accent: "default",
    icon: "storefront",
    label: "Discover store events, book tables, and back your local scene",
  },
  {
    accent: "primary",
    icon: "sports_esports",
    label: "Play more often across the games and communities you love",
  },
];

export default function ForPlayersPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <header className="relative pt-16 md:pt-24 pb-20 px-6 lg:px-24 overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute top-0 right-0 -z-10 w-full lg:w-2/3 h-full opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-primary/20 via-background to-background"></div>
            <img
              alt="Tactical map"
              className="w-full h-full object-cover grayscale mix-blend-screen"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRm_V-uCtaXOG2Ux9sUCAWk18b0s_RfyZUiv66v5Twr-crVYvitbgIFY_qLk627zAKbIL4QyNaIOKJDAzOUGORC5Z7c9e6uPPgEzl7ztteOI6i3OigKhS-yzv2AJCubTyxOK65aAN9-EDDLAPU-oDtvNzoo6-3QF_gk1ohcZ4d2gYtHoQ3wB7ChlCkH88CpZmIiaAYvdLyuAa9RCtdH4u9h7T8TabIMp-lSDqI0LNsi6QPxS3plU5V0S_uNIPnALlDcxo2YV0zknc"
            />
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="max-w-2xl relative z-10">
              <p className="font-headline text-xs font-bold uppercase tracking-widest text-secondary mb-4">Players</p>
              <h1 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface mb-6 leading-[1.1] md:leading-[0.9]">
                LEVEL UP YOUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                  TABLETOP GAME.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                Battle Beacon helps you arrange games more easily, play more often, meet new players, build a profile you are proud of, earn badges and bragging rights, and support the local gaming stores you love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <JoinLink className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-headline font-bold rounded-lg scale-100 hover:scale-105 active:scale-95 transition-all neon-glow-primary uppercase tracking-tight text-center">
                  Join Battle Beacon
                </JoinLink>
                <button disabled className="px-8 py-4 bg-transparent border border-outline-variant text-on-surface-variant font-headline font-bold rounded-lg opacity-50 cursor-not-allowed uppercase tracking-tight flex flex-col items-center leading-tight">
                  <span>Download App</span>
                  <span className="text-[10px] normal-case tracking-normal font-normal">Coming soon</span>
                </button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full"></div>
              <div className="relative w-[320px] aspect-[9/19] rounded-[3rem] border-[8px] border-surface-container-highest shadow-2xl overflow-hidden animate-float">
                <img
                  alt="Battle Beacon app interface"
                  className="w-full h-full object-cover"
                  src="/homescreen.jpeg"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Live Ticker Component */}
        <div className="bg-surface-container-lowest border-y border-outline-variant/10 py-3 overflow-hidden whitespace-nowrap">
          <div className="flex animate-[marquee_30s_linear_infinite] w-fit">
            <div className="flex gap-12 items-center px-6">
              {tickerItems.map((item) => (
                <span
                  key={item.label}
                  className={`font-headline font-bold text-sm tracking-widest uppercase flex items-center gap-2 ${
                    item.accent === "primary"
                      ? "text-primary"
                      : item.accent === "secondary"
                        ? "text-secondary"
                        : "text-on-surface-variant"
                  }`}
                >
                  <span className="material-symbols-outlined text-xs">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex gap-12 items-center px-6" aria-hidden="true">
              {tickerItems.map((item) => (
                <span
                  key={`${item.label}-duplicate`}
                  className={`font-headline font-bold text-sm tracking-widest uppercase flex items-center gap-2 ${
                    item.accent === "primary"
                      ? "text-primary"
                      : item.accent === "secondary"
                        ? "text-secondary"
                        : "text-on-surface-variant"
                  }`}
                >
                  <span className="material-symbols-outlined text-xs">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features Bento Grid */}
        <section className="py-24 px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
            {/* Feature 1: Find Games & Host Games */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-all min-h-[300px]">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <img
                  alt="Deployments"
                  className="w-full h-full object-cover object-center scale-150 transform translate-y-20"
                  src="https://lh3.googleusercontent.com/aida/ADBb0uh6sUgWR90kWUyQbGGNKUSxG1lkSHGGNqxaxB3nHuHq-sXw1ECI3gVIfv7wsYR3un6SaWw-aUYuD5DAvVwlVi-StBl3Lk9gDz1MRY6-dJpSvfPB4g08shoS5Q3A-jRcJwQefvCIkEUy-pDWhQyFrkDZE2Co39YnViTaCOpn1CEXTit7f4ckaVXiaT1cSl25gtZcvKlxp_Tp1ZufDELg7d3zMhqcN9j2Sg-XMfiDrI0wmj_8aG71Ba0HVJ32YZ9D8Yybt2gsxWO3Ag"
                />
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-4 mb-6">
                    <span className="px-4 py-2 rounded bg-[#C63F3F] text-white font-headline font-bold text-xs uppercase flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">swords</span> Find Game
                    </span>
                    <span className="px-4 py-2 rounded bg-surface-container-highest border border-outline-variant/50 text-on-surface font-headline font-bold text-xs uppercase flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">groups</span> Host Game
                    </span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-on-surface mb-4 uppercase">Arrange More Games</h3>
                  <p className="text-on-surface-variant text-lg max-w-md">
                    Find people to play with, organise your own game nights, and make it easier to get regular games in across the systems you play.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-primary uppercase border border-primary/20">Open Tables</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-primary uppercase border border-primary/20">Weekly Meetups</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-primary uppercase border border-primary/20">Store Events</span>
                </div>
              </div>
            </div>

            {/* Feature 2: Win Streak */}
            <div className="md:col-span-4 rounded-xl bg-surface-container-high p-8 border border-outline-variant/10 relative overflow-hidden flex flex-col group min-h-[300px]">
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-5 scale-150 transform rotate-12 group-hover:opacity-10 transition-opacity pointer-events-none">
                <img
                  alt="Win Streak Data"
                  className="w-48"
                  src="https://lh3.googleusercontent.com/aida/ADBb0uh6sUgWR90kWUyQbGGNKUSxG1lkSHGGNqxaxB3nHuHq-sXw1ECI3gVIfv7wsYR3un6SaWw-aUYuD5DAvVwlVi-StBl3Lk9gDz1MRY6-dJpSvfPB4g08shoS5Q3A-jRcJwQefvCIkEUy-pDWhQyFrkDZE2Co39YnViTaCOpn1CEXTit7f4ckaVXiaT1cSl25gtZcvKlxp_Tp1ZufDELg7d3zMhqcN9j2Sg-XMfiDrI0wmj_8aG71Ba0HVJ32YZ9D8Yybt2gsxWO3Ag"
                />
              </div>
              <div className="mb-auto relative z-10">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">trending_up</span>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2 uppercase">14 Win Streak</h3>
                  <p className="text-on-surface-variant text-sm mb-6">
                    Every game builds your record. Results, achievements, and a profile worth showing off — all in one place.
                  </p>
              </div>
              <div className="space-y-3 relative z-10 mt-auto">
                <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[72%] shadow-[0_0_10px_rgba(255,81,250,0.5)]"></div>
                </div>
                <div className="flex justify-between text-[10px] font-headline font-bold text-on-surface-variant uppercase">
                  <span>Campaign: 72%</span>
                  <span className="text-secondary">Next Tier: Elite</span>
                </div>
              </div>
            </div>

            {/* Feature 3: Strategic Venues */}
            <div className="md:col-span-12 rounded-xl bg-surface-container p-8 border border-outline-variant/10 flex flex-col md:flex-row gap-8 items-center group overflow-hidden">
              <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/20 mb-4">
                  <span className="text-primary text-[10px] font-headline font-bold tracking-widest uppercase">Local Gaming Stores</span>
                </div>
                <h3 className="text-4xl font-headline font-bold text-on-surface mb-4 uppercase">Find Your Store</h3>
                  <p className="text-on-surface-variant text-lg max-w-2xl">
                    See what's on at local game stores near you — open tables, game nights, upcoming events — and book in without the back-and-forth.
                  </p>
                <div className="mt-8 flex gap-4">
                  <div className="flex items-center gap-2 text-primary font-headline font-bold uppercase text-xs cursor-pointer hover:underline">
                    <span className="material-symbols-outlined text-lg">location_on</span> Find Stores Near You
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 relative">
                <div className="aspect-video rounded-lg overflow-hidden border border-outline-variant/30 group-hover:border-primary/50 transition-all">
                  <img
                    alt="Venue 1"
                    className="w-full h-full object-cover object-bottom scale-150"
                    src="https://pub-891f30df07134fc0a4846b9569f8d1d3.r2.dev/005dcc96-abf2-486c-8989-a0fb6f6425cf/c55e027b-de9d-4bfb-9d90-46727abbc54f/venuetgs.png"
                  />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden border border-outline-variant/30 group-hover:border-primary/50 transition-all opacity-80">
                  <img
                    alt="Venue 2"
                    className="w-full h-full object-cover object-top scale-150"
                    src="https://lh3.googleusercontent.com/aida/ADBb0uh6sUgWR90kWUyQbGGNKUSxG1lkSHGGNqxaxB3nHuHq-sXw1ECI3gVIfv7wsYR3un6SaWw-aUYuD5DAvVwlVi-StBl3Lk9gDz1MRY6-dJpSvfPB4g08shoS5Q3A-jRcJwQefvCIkEUy-pDWhQyFrkDZE2Co39YnViTaCOpn1CEXTit7f4ckaVXiaT1cSl25gtZcvKlxp_Tp1ZufDELg7d3zMhqcN9j2Sg-XMfiDrI0wmj_8aG71Ba0HVJ32YZ9D8Yybt2gsxWO3Ag"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-24 px-6 lg:px-24 bg-surface-container-low/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-8 uppercase tracking-tighter leading-tight">
                More games. <br /><span className="text-primary">Less friction.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-surface-container-highest border border-primary/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold text-on-surface uppercase mb-2">Find Games Nearby</h4>
                    <p className="text-on-surface-variant">See what's on at stores near you this week — open tables, game nights, events — so picking up a game is actually easy.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-surface-container-highest border border-secondary/30 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">military_tech</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold text-on-surface uppercase mb-2">Track Your Progress</h4>
                    <p className="text-on-surface-variant">Track results, unlock awards and badges, and build a player profile that shows off your tabletop journey.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-surface-container-highest border border-primary/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold text-on-surface uppercase mb-2">Earn Early Adopter Status</h4>
                    <p className="text-on-surface-variant">Join early to claim an exclusive signup badge that will only ever be available to the first wave of Battle Beacon players.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-surface-container-highest border border-tertiary/30 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined">storefront</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold text-on-surface uppercase mb-2">Support Local Stores</h4>
                    <p className="text-on-surface-variant">Book tables, stay in touch with your favourite venues, and help local stores build stronger gaming communities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative flex justify-center">
              {/* App Mockup Background Glow */}
              <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full"></div>
              <div className="relative w-[340px] aspect-[9/19] rounded-[3.5rem] p-4 bg-surface-container-highest border-[1px] border-outline-variant/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                  <img
                    alt="Full mobile UI showcase"
                    className="w-full h-full object-cover"
                    src="/hostgamescreen.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-t from-surface-container-high to-surface border border-primary/20 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/5 blur-3xl rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6 uppercase tracking-tighter relative z-10">Ready to Deploy?</h2>
            <p className="text-on-surface-variant text-lg mb-10 relative z-10 max-w-2xl mx-auto">
              Join 10,000+ players already dominating the tabletop meta. The Battle Beacon app is coming soon, so sign up for news and be first to know when deployment begins.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button
                disabled
                className="flex items-center gap-3 px-8 py-4 bg-surface-container-highest rounded-lg border border-outline-variant/60 opacity-60 cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-3xl text-on-surface-variant">phone_iphone</span>
                <div className="text-left">
                  <p className="text-[10px] text-secondary uppercase font-bold">Coming Soon</p>
                  <p className="text-lg font-headline font-bold text-on-surface leading-tight">App Store</p>
                </div>
              </button>
              <button
                disabled
                className="flex items-center gap-3 px-8 py-4 bg-surface-container-highest rounded-lg border border-outline-variant/60 opacity-60 cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-3xl text-on-surface-variant">play_arrow</span>
                <div className="text-left">
                  <p className="text-[10px] text-secondary uppercase font-bold">Coming Soon</p>
                  <p className="text-lg font-headline font-bold text-on-surface leading-tight">Google Play</p>
                </div>
              </button>
              <JoinLink className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-headline font-bold rounded-lg scale-100 hover:scale-105 active:scale-95 transition-all neon-glow-primary uppercase tracking-tight">
                Sign Up for News
              </JoinLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
