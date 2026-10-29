import type { Metadata } from "next";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Button from "@/components/Button";
import JoinLink from "@/components/JoinLink";
import Icon from "@/components/Icon";
import FeatureRow from "@/components/FeatureRow";
import { PhoneShot, PhoneStage } from "@/components/Screenshot";

export const metadata: Metadata = {
  title: "For Players",
  description:
    "Find a game near you, host your own and book the table, log results and build a player record. Battle Beacon is the app for tabletop players and the stores they play at.",
};

const tickerItems = [
  { accent: "primary", icon: "search", label: "Find open games at stores near you" },
  { accent: "default", icon: "table_restaurant", label: "Host a game and book the table in one go" },
  { accent: "secondary", icon: "emoji_events", label: "Log results and build your lifetime record" },
  { accent: "primary", icon: "group_add", label: "Add friends by code and send private invites" },
  { accent: "secondary", icon: "storefront", label: "Pin your local store to the top of your feed" },
  { accent: "default", icon: "notifications_active", label: "Hear about nearby events first" },
  { accent: "primary", icon: "workspace_premium", label: "Early sign-ups get an exclusive badge" },
];

const jumpLinks = [
  { href: "#find", label: "Find a game" },
  { href: "#host", label: "Host & book" },
  { href: "#my-games", label: "My Games" },
  { href: "#results", label: "Results" },
  { href: "#profile", label: "Profile" },
  { href: "#friends", label: "Friends" },
  { href: "#stores", label: "Stores" },
  { href: "#events", label: "Events" },
  { href: "#themes", label: "Themes" },
];

export default function ForPlayersPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <header className="relative pt-16 md:pt-24 pb-20 px-6 lg:px-24 overflow-hidden flex items-center tactical-grid">
          <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full bg-gradient-to-l from-primary/10 via-background to-background"></div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="max-w-2xl relative z-10">
              <p className="mb-5 font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                The Battle Beacon app
              </p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl text-on-surface mb-6 leading-[1.05] uppercase">
                Level up your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                  tabletop game.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                Find a game tonight, host your own and book the table, then log the result and watch your record grow. Warhammer, Magic, Pokémon, board games: if it&apos;s played on a table at your local store, it&apos;s on Battle Beacon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <JoinLink variant="primary">Get Early Access</JoinLink>
                <Button disabled className="flex-col items-center leading-tight">
                  <span>Download App</span>
                  <span className="text-[10px] normal-case tracking-normal font-normal">Coming soon</span>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full" aria-hidden="true"></div>
              <PhoneShot id="app-dashboard" className="relative max-w-[300px] animate-float neon-glow-primary" />
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
                  className={`font-headline text-sm tracking-widest uppercase flex items-center gap-2 ${
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
                  className={`font-headline text-sm tracking-widest uppercase flex items-center gap-2 ${
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

        {/* Feature jump links */}
        <nav aria-label="App features" className="sticky top-16 md:top-20 z-40 bg-background/85 backdrop-blur-xl border-b border-outline-variant/10">
          <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 hide-scrollbar md:px-8">
            {jumpLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="block rounded-sm border border-outline-variant/30 px-3 py-1.5 font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <FeatureRow
          id="find"
          num="01"
          label="Find a game"
          title={<>Someone near you wants a game <span className="text-primary">tonight.</span></>}
          body="Search by game, type or postcode and see the open games at stores around you: who's hosting, when it starts and how many seats are left."
          points={[
            "Filter by game system and venue",
            "A heads-up when a game is more than 10km from your postcode",
            "Games at your local store pinned to the top",
          ]}
          visual={<PhoneStage ids={["app-find-game"]} />}
        />

        <div className="bg-surface-container-low/40">
          <FeatureRow
            id="host"
            num="02"
            label="Host & book"
            accent="secondary"
            reverse
            title={<>Host a game. <span className="text-secondary">The table&apos;s booked too.</span></>}
            body="Pick your game, a store and a table type, then choose from the store's live slots. Your game goes up for players to join, and the table is held for you."
            points={[
              "Live availability straight from the store's booking calendar",
              "Pay when you book at stores that take payments, so the table is yours",
              "Store not on Battle Beacon yet? Request the booking anyway and get the details to send them",
            ]}
            visual={<PhoneStage ids={["app-host-game", "app-booking-confirmed"]} glow="secondary" />}
          />
        </div>

        <FeatureRow
          id="my-games"
          num="03"
          label="My Games"
          title={<>Every game you&apos;re in, <span className="text-primary">one swipe away.</span></>}
          body="The games you're hosting and the ones you've joined sit together on My Games and on your dashboard."
          points={[
            "Swipe a card to cancel, drop out or start playing",
            "Also on your dashboard, so your next game is the first thing you see",
            "A notification when someone joins your game",
          ]}
          visual={<PhoneStage ids={["app-my-games"]} />}
        />

        <div className="bg-surface-container-low/40">
          <FeatureRow
            id="results"
            num="04"
            label="Play & log results"
            accent="tertiary"
            reverse
            title={<>Log the result <span className="text-tertiary">before the dice are packed.</span></>}
            body="When the game's done, submit the result in a few taps. The form is built around each game type, so you record the winner and the details that matter for that game."
            points={[
              "Works for one-on-one games and bigger tables",
              "Wins, losses and draws go straight onto every player's record",
              "No more score sheets lost at the bottom of a bag",
            ]}
            visual={<PhoneStage ids={["app-submit-result"]} />}
          />
        </div>

        <FeatureRow
          id="profile"
          num="05"
          label="Your profile"
          accent="secondary"
          title={<>A record that follows you <span className="text-secondary">to every table.</span></>}
          body="Your profile keeps score across every game and every store: your lifetime record, level, points, reputation and the awards you've earned."
          points={[
            "Hosted and joined games, current and past",
            "Your awards, shown on your profile for everyone to see",
            "A private profile option, so only friends can see it",
          ]}
          visual={<PhoneStage ids={["app-profile"]} glow="secondary" />}
        />

        <div className="bg-surface-container-low/40">
          <FeatureRow
            id="friends"
            num="06"
            label="Friends & messages"
            reverse
            title={<>Bring your group <span className="text-primary">with you.</span></>}
            body="Add the people you meet at the table by friend code, message them to sort out the next game, or send a private invite for a set store, date and slot."
            points={[
              "Share your friend code in one tap",
              "Direct messages with friends",
              "Private invites for just the people you choose",
              "Block players if you need to",
            ]}
            visual={<PhoneStage ids={["app-messages", "app-private-invite"]} />}
          />
        </div>

        <FeatureRow
          id="stores"
          num="07"
          label="Your local store"
          accent="tertiary"
          title={<>Your store, <span className="text-tertiary">front and centre.</span></>}
          body="Set the store you play at most as your local store and its games go to the top of your feed. Every store page shows how booking works and what a table costs."
          points={[
            "Search stores by name or town",
            "Premium stores marked with a gold tag",
            "Want your store on Battle Beacon? Ask them to join from the app",
          ]}
          visual={<PhoneStage ids={["app-venue-profile"]} />}
        />

        <div className="bg-surface-container-low/40">
          <FeatureRow
            id="events"
            num="08"
            label="Events near you"
            accent="secondary"
            reverse
            title={<>Never miss a <span className="text-secondary">tournament</span> again.</>}
            body="Leagues, tournaments, launch nights and painting classes from the stores around you show up in Nearby Events, with places left and how to sign up."
            points={[
              "Notifications for nearby events, invites, messages and game requests",
              "Switch each one on or off, or mute them all",
              "Events come straight from the store's own calendar",
            ]}
            visual={<PhoneStage ids={["app-nearby-events"]} glow="secondary" />}
          />
        </div>

        <FeatureRow
          id="themes"
          num="09"
          label="Make it yours"
          title={<>Pick a look that <span className="text-primary">suits your army.</span></>}
          body="Switch the whole app between Classic, Synthwave, Dark, Light and Ocean, with seasonal themes when the time is right."
          points={["Themes change instantly, no restart", "Every screen follows your theme"]}
          visual={<PhoneStage ids={["app-themes"]} />}
        />

        {/* Call to Action */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto p-8 md:p-14 diagonal-both bg-surface-container-high border border-primary/20 relative overflow-hidden tactical-grid">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-3xl rounded-full" aria-hidden="true"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 blur-3xl rounded-full" aria-hidden="true"></div>
            <h2 className="text-4xl md:text-5xl text-on-surface mb-6 uppercase relative z-10">Ready to Play?</h2>
            <p className="text-on-surface-variant text-lg mb-10 relative z-10 max-w-2xl mx-auto">
              Battle Beacon is coming to the App Store and Google Play. Sign up now to hear the moment it lands and claim the early sign-up badge.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <Button disabled>
                <Icon name="phone_iphone" className="text-3xl text-on-surface-variant" />
                <div className="text-left normal-case">
                  <p className="text-[10px] text-secondary uppercase font-bold tracking-tight">Coming Soon</p>
                  <p className="text-lg font-headline text-on-surface leading-tight">App Store</p>
                </div>
              </Button>
              <Button disabled>
                <Icon name="play_arrow" className="text-3xl text-on-surface-variant" />
                <div className="text-left normal-case">
                  <p className="text-[10px] text-secondary uppercase font-bold tracking-tight">Coming Soon</p>
                  <p className="text-lg font-headline text-on-surface leading-tight">Google Play</p>
                </div>
              </Button>
              <JoinLink variant="primary">Get Early Access</JoinLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
