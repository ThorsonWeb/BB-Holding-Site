import type { Metadata } from "next";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Button from "@/components/Button";
import JoinLink from "@/components/JoinLink";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "For Players",
  description:
    "Find more games, play more often, and track your progress with Battle Beacon. Discover local tabletop games, open tables, and store events near you.",
};

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
        <header className="relative pt-16 md:pt-24 pb-20 px-6 lg:px-24 overflow-hidden min-h-[90vh] flex items-center tactical-grid">
          <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full bg-gradient-to-l from-primary/10 via-background to-background"></div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="max-w-2xl relative z-10">
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
                <JoinLink variant="primary">Join Battle Beacon</JoinLink>
                <Button disabled className="flex-col items-center leading-tight">
                  <span>Download App</span>
                  <span className="text-[10px] normal-case tracking-normal font-normal">Coming soon</span>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full" aria-hidden="true"></div>
              <div className="relative w-[320px] aspect-[9/19] rounded-[3rem] border-[8px] border-surface-container-highest shadow-2xl overflow-hidden animate-float">
                {/* TODO(asset): replace with a real Battle Beacon app screenshot */}
                <img alt="Battle Beacon app interface" className="w-full h-full object-cover" src="/homescreen.jpeg" />
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
                  <Icon name={item.icon} className="text-xs" />
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
                  <Icon name={item.icon} className="text-xs" />
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
              <div className="absolute inset-0 opacity-40 tactical-grid" aria-hidden="true"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-4 mb-6">
                    <span className="px-4 py-2 rounded bg-error text-on-error font-headline font-bold text-xs uppercase flex items-center gap-2">
                      <Icon name="swords" className="text-sm" /> Find Game
                    </span>
                    <span className="px-4 py-2 rounded bg-surface-container-highest border border-outline-variant/50 text-on-surface font-headline font-bold text-xs uppercase flex items-center gap-2">
                      <Icon name="groups" className="text-sm" /> Host Game
                    </span>
                  </div>
                  <h2 className="text-3xl font-headline font-bold text-on-surface mb-4 uppercase">Arrange More Games</h2>
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
              <div className="mb-auto relative z-10">
                <Icon name="trending_up" className="text-secondary text-4xl mb-6" />
                <h2 className="text-2xl font-headline font-bold text-on-surface mb-2 uppercase">14 Win Streak</h2>
                <p className="text-on-surface-variant text-sm mb-6">
                  Every game builds your record. Results, achievements, and a profile worth showing off &mdash; all in one place.
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

            {/* Feature 3: Find Your Store */}
            <div className="md:col-span-12 rounded-xl bg-surface-container p-8 border border-outline-variant/10 flex flex-col md:flex-row gap-8 items-center group overflow-hidden">
              <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/20 mb-4">
                  <span className="text-primary text-[10px] font-headline font-bold tracking-widest uppercase">Local Gaming Stores</span>
                </div>
                <h2 className="text-4xl font-headline font-bold text-on-surface mb-4 uppercase">Find Your Store</h2>
                <p className="text-on-surface-variant text-lg max-w-2xl">
                  See what&apos;s on at local game stores near you &mdash; open tables, game nights, upcoming events &mdash; and book in without the back-and-forth.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/for-venues" variant="outline" size="sm" className="gap-2">
                    <Icon name="location_on" className="text-lg" />
                    Find Stores Near You
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/2 aspect-video rounded-lg border border-outline-variant/30 bg-surface-container-high flex flex-col items-center justify-center gap-3 group-hover:border-primary/50 transition-all">
                {/* TODO(asset): replace with real venue photography */}
                <Icon name="storefront" className="text-5xl text-primary/50" />
                <span className="text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant">
                  Venue photos coming soon
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-24 px-6 lg:px-24 bg-surface-container-low/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true"></div>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-10 uppercase tracking-tighter leading-tight">
                More games. <br /><span className="text-primary">Less friction.</span>
              </h2>
              <ul className="divide-y divide-outline-variant/15 border-t border-outline-variant/15">
                {[
                  {
                    num: "01",
                    title: "Find Games Nearby",
                    description: "See what's on at stores near you this week — open tables, game nights, events.",
                  },
                  {
                    num: "02",
                    title: "Track Your Progress",
                    description: "Track results, unlock awards and badges, and build a player profile that shows off your journey.",
                  },
                  {
                    num: "03",
                    title: "Earn Early Adopter Status",
                    description: "Join early to claim a signup badge only ever available to the first wave of players.",
                  },
                  {
                    num: "04",
                    title: "Support Local Stores",
                    description: "Book tables, stay in touch with your favourite venues, and help local scenes grow.",
                  },
                ].map((step) => (
                  <li key={step.num} className="flex gap-6 items-baseline py-6">
                    <span className="ghost-numeral text-3xl w-10 shrink-0">{step.num}</span>
                    <div>
                      <h3 className="text-lg font-headline font-bold text-on-surface uppercase mb-1">{step.title}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative flex justify-center">
              <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full" aria-hidden="true"></div>
              <div className="relative w-[340px] aspect-[9/19] rounded-[3.5rem] p-4 bg-surface-container-highest border-[1px] border-outline-variant/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                  {/* TODO(asset): replace with a real Battle Beacon app screenshot */}
                  <img alt="Battle Beacon app showing a hosted game listing" className="w-full h-full object-cover" src="/hostgamescreen.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto p-8 md:p-14 diagonal-both bg-surface-container-high border border-primary/20 relative overflow-hidden tactical-grid">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-3xl rounded-full" aria-hidden="true"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 blur-3xl rounded-full" aria-hidden="true"></div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6 uppercase tracking-tighter relative z-10">Ready to Play?</h2>
            <p className="text-on-surface-variant text-lg mb-10 relative z-10 max-w-2xl mx-auto">
              The Battle Beacon app is coming soon &mdash; sign up for news and be first to know when it launches.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <Button disabled>
                <Icon name="phone_iphone" className="text-3xl text-on-surface-variant" />
                <div className="text-left normal-case">
                  <p className="text-[10px] text-secondary uppercase font-bold tracking-tight">Coming Soon</p>
                  <p className="text-lg font-headline font-bold text-on-surface leading-tight">App Store</p>
                </div>
              </Button>
              <Button disabled>
                <Icon name="play_arrow" className="text-3xl text-on-surface-variant" />
                <div className="text-left normal-case">
                  <p className="text-[10px] text-secondary uppercase font-bold tracking-tight">Coming Soon</p>
                  <p className="text-lg font-headline font-bold text-on-surface leading-tight">Google Play</p>
                </div>
              </Button>
              <JoinLink variant="primary">Sign Up for News</JoinLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
