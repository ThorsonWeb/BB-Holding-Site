import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import GameSelector from "@/components/GameSelector";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import JoinLink from "@/components/JoinLink";

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Battle Beacon",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  description:
    "Battle Beacon helps tabletop players find more games and book more tables. Beacon CRM helps venues fill tables, run events, and grow their local gaming community.",
};

const homepageTickerItems = [
  "FIND MORE GAMES NEAR YOU",
  "GET NOTIFIED ABOUT NEW GAMES AND EVENTS AT YOUR FAVOURITE STORES",
  "EARN AN EXCLUSIVE EARLY SIGNUP BADGE",
  "BUILD A PLAYER PROFILE WITH AWARDS, BADGES, AND BRAGGING RIGHTS",
  "BEACON CRM: BOOKINGS, EVENTS, CRM, AUTOMATIONS, AND FORMS",
  "MORE TABLES BOOKED, MORE EVENTS RUN, MORE PLAYERS IN STORE",
];

const supportedGames = [
  { label: "Warhammer 40,000", className: "text-primary" },
  { label: "Pokémon TCG", className: "text-secondary" },
  { label: "Age of Sigmar", className: "text-tertiary" },
  { label: "Kill Team", className: "text-primary-container" },
  { label: "Magic: The Gathering", className: "text-secondary" },
  { label: "Dungeons & Dragons", className: "text-primary" },
  { label: "Star Wars: Legion", className: "text-tertiary" },
  { label: "Bolt Action", className: "text-primary-container" },
  { label: "Board Games", className: "text-secondary" },
  { label: "Card Games", className: "text-primary" },
];

const painPoints = [
  {
    num: "01",
    icon: "cloud_off",
    title: "Fragmented Communication",
    description:
      "WhatsApp groups and Discord pings get buried in the noise. Players miss game postings before they ever see them.",
  },
  {
    num: "02",
    icon: "edit_document",
    title: "No Match Records",
    description:
      "Manual score sheets and word of mouth are the only way to track results. History disappears the moment the game ends.",
  },
  {
    num: "03",
    icon: "storefront",
    title: "Venues Miss Bookings",
    description:
      "Store owners have no reliable way to reach their local player base and turn interest into confirmed bookings.",
  },
  {
    num: "04",
    icon: "person_off",
    title: "Isolated Players",
    description:
      "Without a shared hub, finding regular opponents and staying connected to local gaming communities is harder than it should be.",
  },
];

const solutionItems = [
  {
    icon: "hub",
    title: "Unified Discovery & Booking",
    description:
      "Help players find games faster and make it simple for venues to turn interest into table bookings and event signups.",
    bullets: ["Quick Table Booking", "Fast Event Sign-up"],
    span: "lg:col-span-7",
  },
  {
    icon: "notifications_active",
    title: "Live Store Alerts",
    description:
      "Instant alerts for newly posted games, fresh events, and open tables at the stores you follow.",
    bullets: ["Favourite Store Alerts"],
    span: "lg:col-span-5",
  },
  {
    icon: "analytics",
    title: "Player Profiles & Achievements",
    description:
      "Profiles, stat tracking, awards, badges, and an exclusive early signup badge.",
    bullets: ["Unique Player Profiles"],
    span: "lg:col-span-5",
  },
  {
    icon: "dashboard_customize",
    title: "Venue CRM & Automation",
    description:
      "One place to manage bookings, events, customer engagement, and automations without juggling multiple tools.",
    bullets: ["Booking & Event Management", "CRM, Automations & Forms"],
    span: "lg:col-span-7",
  },
];

const venueBenefits = [
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

const playerBenefits = [
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
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

        {/* Hero — asymmetric split, no boxed pill badge */}
        <section className="relative overflow-hidden bg-surface pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-6xl md:text-8xl font-black text-on-surface tracking-tighter leading-[0.92] uppercase mb-8">
                More games.
                <br />
                <span className="text-primary italic">Better events.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-body max-w-xl">
                Battle Beacon helps players find more games, play more often, track progress, and earn bragging rights. For venues, Beacon CRM helps fill tables, run better events, and keep local communities coming back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <JoinLink variant="primary">Sign Up Early</JoinLink>
                <Button href="/for-venues" variant="outline">
                  For Venues
                </Button>
              </div>
              <GameSelector />
            </div>

            <div className="lg:col-span-5 relative">
              <div
                className="relative aspect-[4/5] rounded-[2rem] diagonal-both bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low border border-outline-variant/20 overflow-hidden tactical-grid"
              >
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" aria-hidden="true" />
                <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full" aria-hidden="true" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 p-8 text-center">
                  <span className="ghost-numeral text-[7rem] md:text-[9rem]">01</span>
                  <p className="font-headline font-bold uppercase tracking-[0.2em] text-on-surface-variant text-sm max-w-[16rem]">
                    One system for every table, every game, every venue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points — editorial numbered list, not a card grid */}
        <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-6xl font-bold uppercase text-on-surface tracking-tight leading-[0.95]">
                How it works now isn&apos;t working.
              </h2>
            </div>

            <ul className="divide-y divide-outline-variant/15 border-t border-b border-outline-variant/15">
              {painPoints.map((item) => (
                <li key={item.num} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 group">
                  <span className="md:col-span-2 ghost-numeral text-4xl md:text-5xl text-error/40" style={{ WebkitTextStroke: "1px color-mix(in srgb, var(--color-error) 40%, transparent)" }}>
                    {item.num}
                  </span>
                  <div className="md:col-span-3 flex items-center gap-3">
                    <Icon name={item.icon} className="text-error text-2xl" />
                    <h3 className="text-lg font-bold uppercase text-on-surface">{item.title}</h3>
                  </div>
                  <p className="md:col-span-7 text-on-surface-variant text-base leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution — asymmetric bento, icon inline (not giant faded corner glyph) */}
        <section className="py-24 bg-surface relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold uppercase text-on-surface tracking-tight leading-[0.95]">
                One platform. <span className="text-primary">Real momentum.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {solutionItems.map((item) => (
                <div
                  key={item.title}
                  className={`${item.span} bg-surface-container-low rounded-2xl p-8 md:p-10 border border-outline-variant/15 hover:border-primary/30 transition-colors`}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon name={item.icon} />
                    </div>
                    <h3 className="text-xl font-bold uppercase text-on-surface">{item.title}</h3>
                  </div>
                  <p className="text-on-surface-variant mb-6 max-w-md">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold uppercase text-primary"
                      >
                        <Icon name="check_circle" className="text-xs" fill />
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative w-full">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full" aria-hidden="true"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 blur-3xl rounded-full" aria-hidden="true"></div>
                <div className="relative z-10 p-4 bg-surface-container-high rounded-[2rem] diagonal-top border border-outline-variant/30 shadow-2xl">
                  {/* TODO(asset): replace with a real Battle Beacon app screenshot */}
                  <img alt="Battle Beacon app home screen" className="rounded-[1.5rem] w-full" src="/homescreen.jpeg" />
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <h2 className="text-4xl md:text-5xl font-bold uppercase text-on-surface tracking-tight mb-8 leading-none">
                  One app. <span className="text-secondary">Every game night.</span>
                </h2>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                  Battle Beacon gives players a better way to discover games and improve over time, while giving venues a smarter way to manage events and grow loyalty.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
                      <Icon name="explore" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold uppercase text-on-surface mb-2">Smart Venue Discovery</h3>
                      <p className="text-on-surface-variant">
                        Show players where games are happening, which stores have space, and what events are worth booking into next.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-secondary text-on-secondary rounded-full flex items-center justify-center">
                      <Icon name="leaderboard" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold uppercase text-on-surface mb-2">Player Profile &amp; Rewards</h3>
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
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-on-surface">Growth for Venues</h2>
              <p className="text-on-surface-variant text-lg mb-8 max-w-xl">
                Beacon CRM helps venues book more tables, run more events, improve customer loyalty, and keep more players engaged in store.
              </p>
              <div className="space-y-6">
                {venueBenefits.map((item) => (
                  <div key={item.title} className="p-6 bg-surface-container rounded-xl">
                    <h3 className="text-lg font-bold text-primary uppercase mb-2">{item.title}</h3>
                    <p className="text-on-surface-variant text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Player Benefits */}
            <div className="bg-surface py-12 md:py-16 md:pl-12 border-t md:border-t-0 md:border-l border-outline-variant/10">
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-on-surface">Momentum for Players</h2>
              <p className="text-on-surface-variant text-lg mb-8 max-w-xl">
                Find more games, play more games, win more games, and stay connected to the stores and communities you care about most.
              </p>
              <div className="space-y-6">
                {playerBenefits.map((item) => (
                  <div key={item.title} className="p-6 bg-surface-container rounded-xl border border-secondary/20">
                    <h3 className="text-lg font-bold text-secondary uppercase mb-2">{item.title}</h3>
                    <p className="text-on-surface-variant text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA — diagonal-cut full-bleed panel */}
        <section className="py-32 relative overflow-hidden diagonal-both bg-surface-container-high tactical-grid">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-primary/10 blur-[160px] rounded-full" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-on-surface mb-8 tracking-tighter">
              Join before launch
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 font-body">
              Sign up early to claim your place in the first wave of Battle Beacon players and venues, and unlock the early adopter badge before launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <JoinLink variant="primary" size="lg">
                Sign Up as a Venue
              </JoinLink>
              <JoinLink variant="accent" size="lg">
                Sign Up as a Player
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
