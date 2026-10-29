import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import GameSelector from "@/components/GameSelector";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import JoinLink from "@/components/JoinLink";
import { BrowserShot, PhoneShot } from "@/components/Screenshot";
import { NORTHMARK_URL } from "@/content/links";

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Battle Beacon",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  description:
    "Battle Beacon helps tabletop players find a game, book the table and track their results. NorthMark CRM helps venues fill tables, run events and bring players back.",
};

const homepageTickerItems = [
  "GAME ON IN THREE TAPS",
  "FIND OPEN GAMES NEAR YOU TONIGHT",
  "HOST A GAME, THE TABLE BOOKS ITSELF",
  "EVERY WIN GOES ON YOUR RECORD",
  "EARLY SIGN-UPS GET AN EXCLUSIVE BADGE",
  "STORES: FILL YOUR QUIET NIGHTS",
  "PAID UPFRONT, FEWER NO-SHOWS",
  "POWERED BY NORTHMARK CRM",
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
    who: "Players",
    icon: "forum",
    title: "“Anyone up for a game Friday?”",
    description:
      "The message sinks in a 200-person group chat. Two replies turn up on Sunday. Friday's gone.",
  },
  {
    num: "02",
    who: "Players",
    icon: "table_restaurant",
    title: "“Is there a table free?”",
    description:
      "Nobody picks up the phone, so you carry your army across town and every table's taken.",
  },
  {
    num: "03",
    who: "Players",
    icon: "sticky_note_2",
    title: "“Who won last time?”",
    description: "Results live on scraps of paper and in people's memories. Mostly in arguments.",
  },
  {
    num: "04",
    who: "Venues",
    icon: "event_busy",
    title: "“Why is Tuesday so quiet?”",
    description:
      "There are players nearby who'd come in tonight. They just don't know you've got space.",
  },
  {
    num: "05",
    who: "Venues",
    icon: "receipt_long",
    title: "“Has everyone paid for Saturday?”",
    description:
      "Sign-ups in a spreadsheet, payments in three different apps, and a handful of no-shows on the day.",
  },
];

const appHighlights = [
  {
    id: "app-find-game",
    title: "Find a game",
    description:
      "Pop in your postcode and see every open game near you: what's being played, who's hosting and how many seats are left.",
    accent: "text-primary",
  },
  {
    id: "app-host-game",
    title: "Book the table",
    description:
      "Pick a store, a table and a time. Your game goes live for players to join, and the table's booked for you.",
    accent: "text-secondary",
  },
  {
    id: "app-profile",
    title: "Play & rank up",
    description:
      "Log the result in seconds. Every win, award and point stacks up on a profile that follows you to every table.",
    accent: "text-tertiary",
  },
];

const playerBenefits = [
  { icon: "casino", title: "Play more often", description: "Open games near you, any night of the week." },
  { icon: "group_add", title: "Meet new opponents", description: "Then keep them, with friend codes, messages and private invites." },
  { icon: "notifications_active", title: "Never miss an event", description: "Tournaments and launch nights land on your phone first." },
  { icon: "military_tech", title: "Bragging rights that stick", description: "A lifetime record and awards everyone can see." },
];

const venueBenefits = [
  { icon: "event_seat", title: "Fill your quiet nights", description: "Every open table is shown live to players nearby." },
  { icon: "payments", title: "Get paid upfront", description: "Tables and tickets are paid at booking, so no-shows cost you less." },
  { icon: "confirmation_number", title: "Events that sell themselves", description: "Publish once. Players sign up and pay without a single message." },
  { icon: "autorenew", title: "Regulars who come back", description: "Awards, reminders and win-backs go out on autopilot." },
];

const connectSteps = [
  {
    icon: "edit_calendar",
    title: "The store opens it up",
    description: "Tables, opening hours and events go live in NorthMark CRM.",
  },
  {
    icon: "notifications_active",
    title: "Players nearby see it",
    description: "Open slots and events pop up in Battle Beacon straight away.",
  },
  {
    icon: "credit_card",
    title: "They book and pay",
    description: "Seats and tables are paid upfront, so nobody's left holding an empty table.",
  },
  {
    icon: "swords",
    title: "Game day runs itself",
    description: "Check-in, rounds, pairings and results, all from the app.",
  },
  {
    icon: "military_tech",
    title: "Everyone comes back",
    description: "Awards land on player profiles and NorthMark sends the “see you next week”.",
  },
];

const venuePoints = [
  { icon: "event_seat", label: "Table bookings with live slots" },
  { icon: "payments", label: "Payments at booking" },
  { icon: "confirmation_number", label: "Ticketed events and tournaments" },
  { icon: "contacts", label: "Customer records, forms and pipelines" },
  { icon: "account_tree", label: "Automated follow-up workflows" },
  { icon: "emoji_events", label: "Awards and leaderboards" },
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

        {/* Hero — copy left, the app itself on the right */}
        <section className="relative overflow-hidden bg-surface pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-7xl text-on-surface leading-[1.02] uppercase mb-8">
                More games.
                <br />
                <span className="text-primary italic">Fuller tables.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-body max-w-xl">
                Battle Beacon finds you a game at a store near you, books the table and keeps score. Stores run it all from NorthMark CRM, so every open table gets seen and every seat gets filled.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <JoinLink variant="primary">Get Early Access</JoinLink>
                <Button href="/for-venues" variant="outline">
                  For Venues
                </Button>
              </div>
              <GameSelector />
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute -top-16 -right-8 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" aria-hidden="true" />
              <div className="absolute -bottom-16 -left-8 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full" aria-hidden="true" />
              <PhoneShot id="app-dashboard" className="relative max-w-[300px] neon-glow-primary" />
              <div className="absolute top-[18%] left-0 glass-panel border border-outline-variant/30 rounded-md px-4 py-3 shadow-2xl" aria-hidden="true">
                <p className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">Table booked</p>
                <p className="font-headline text-sm text-on-surface">Fri · 19:00</p>
              </div>
              <div className="absolute bottom-[16%] right-0 glass-panel border border-secondary/40 rounded-md px-4 py-3 shadow-2xl" aria-hidden="true">
                <p className="font-label text-[10px] uppercase tracking-wider text-secondary">Player joined</p>
                <p className="font-headline text-sm text-on-surface">3 / 4 seats</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points — editorial numbered list, not a card grid */}
        <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mb-16">
              <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-error">Sound familiar?</p>
              <h2 className="text-4xl md:text-5xl uppercase text-on-surface leading-[1.02]">
                Getting a game shouldn&apos;t be <span className="text-error">this hard.</span>
              </h2>
            </div>

            <ul className="divide-y divide-outline-variant/15 border-t border-b border-outline-variant/15">
              {painPoints.map((item) => (
                <li key={item.num} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 group">
                  <span className="md:col-span-2 ghost-numeral text-4xl md:text-5xl text-error/40" style={{ WebkitTextStroke: "1px color-mix(in srgb, var(--color-error) 40%, transparent)" }}>
                    {item.num}
                  </span>
                  <div className="md:col-span-5">
                    <p className="mb-2 flex items-center gap-2 font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      <Icon name={item.icon} className="text-base text-error" />
                      {item.who}
                    </p>
                    <h3 className="text-lg md:text-xl text-on-surface">{item.title}</h3>
                  </div>
                  <p className="md:col-span-5 text-on-surface-variant text-base leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>

            <p className="mt-16 text-2xl md:text-3xl font-headline uppercase text-on-surface">
              Battle Beacon <span className="text-primary">fixes all five.</span>
            </p>
          </div>
        </section>

        {/* Inside the app */}
        <section className="py-24 bg-surface relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">How it works</p>
                <h2 className="text-4xl md:text-5xl uppercase text-on-surface leading-[1.02] mb-6">
                  Game on in <span className="text-primary">three taps.</span>
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  No group chats, no phone calls, no score sheets. Just you, a table and someone to play.
                </p>
              </div>
              <Button href="/for-players" variant="outline" className="self-start md:self-auto">
                Every App Feature
              </Button>
            </div>

            <ul className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
              {appHighlights.map((item, i) => (
                <li key={item.id} className="flex flex-col items-center text-center">
                  <PhoneShot id={item.id} className="mb-8 max-w-[260px]" />
                  <p className="mb-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">Step {i + 1}</p>
                  <h3 className={`mb-2 text-xl uppercase ${item.accent}`}>{item.title}</h3>
                  <p className="max-w-xs text-on-surface-variant">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Battle Ticker */}
        <div className="w-full bg-surface-container-lowest py-4 border-y border-primary/10 overflow-hidden">
          <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] w-fit">
            <div className="flex items-center px-8 gap-12">
              {homepageTickerItems.map((item) => (
                <span key={item} className="text-primary font-headline text-sm tracking-widest uppercase">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center px-8 gap-12" aria-hidden="true">
              {homepageTickerItems.map((item) => (
                <span key={`${item}-duplicate`} className="text-primary font-headline text-sm tracking-widest uppercase">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits for both sides of the table */}
        <section className="py-24 bg-surface relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mb-16">
              <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-tertiary">Everybody wins</p>
              <h2 className="text-4xl md:text-5xl uppercase text-on-surface leading-[1.02]">
                Built for both sides <span className="text-tertiary">of the table.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-md border border-secondary/25 bg-surface-container-low p-8 md:p-10">
                <p className="mb-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">For players</p>
                <h3 className="mb-8 text-2xl md:text-3xl uppercase text-on-surface">More games. Less hassle.</h3>
                <ul className="mb-10 space-y-6">
                  {playerBenefits.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <Icon name={item.icon} className="mt-0.5 text-2xl text-secondary" />
                      <div>
                        <p className="font-bold text-on-surface">{item.title}</p>
                        <p className="text-on-surface-variant">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <JoinLink variant="accent">Get Early Access</JoinLink>
              </div>

              <div className="rounded-md border border-primary/25 bg-surface-container-low p-8 md:p-10">
                <p className="mb-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">For venues</p>
                <h3 className="mb-8 text-2xl md:text-3xl uppercase text-on-surface">Fuller tables. Less admin.</h3>
                <ul className="mb-10 space-y-6">
                  {venueBenefits.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <Icon name={item.icon} className="mt-0.5 text-2xl text-primary" />
                      <div>
                        <p className="font-bold text-on-surface">{item.title}</p>
                        <p className="text-on-surface-variant">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button href="/for-venues" variant="primary">
                  See What Venues Get
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How the app and NorthMark connect */}
        <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mb-16">
              <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-tertiary">How it connects</p>
              <h2 className="text-4xl md:text-5xl uppercase text-on-surface leading-[1.02] mb-6">
                One store calendar. <span className="text-tertiary">Every player nearby.</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                The moment a store puts a table or an event up in NorthMark CRM, players nearby see it in Battle Beacon, book it and play it. No double entry, no chasing payments, no waiting on a WhatsApp reply.
              </p>
            </div>

            <div className="relative mb-20 lg:pr-48">
              <BrowserShot id="crm-events-manager" />
              <div className="mx-auto mt-10 w-[220px] lg:absolute lg:-bottom-12 lg:right-0 lg:mt-0">
                <PhoneShot id="app-nearby-events" className="neon-glow-magenta" />
              </div>
            </div>

            <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-outline-variant/15 bg-outline-variant/15 sm:grid-cols-2 lg:grid-cols-5">
              {connectSteps.map((step, i) => (
                <li key={step.title} className="bg-surface-container-low p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <Icon name={step.icon} className="text-2xl text-tertiary" />
                    <span className="font-label text-xs text-outline">0{i + 1}</span>
                  </div>
                  <h3 className="mb-2 text-base uppercase text-on-surface">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* For venues: NorthMark CRM */}
        <section className="py-24 bg-surface relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">For venues</p>
              <h2 className="text-4xl md:text-5xl uppercase text-on-surface leading-[1.02] mb-6">
                Run your whole store from <span className="text-primary">NorthMark CRM.</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Battle Beacon brings the players. NorthMark handles everything after that: bookings, payments, event tickets, your customer list and the follow-up that brings people back. Start free and upgrade when it&apos;s paying for itself.
              </p>
              <ul className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {venuePoints.map((point) => (
                  <li key={point.label} className="flex items-center gap-3 text-on-surface">
                    <Icon name={point.icon} className="text-xl text-primary" />
                    <span className="text-sm">{point.label}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={NORTHMARK_URL} external variant="primary">
                  Explore NorthMark CRM
                </Button>
                <Button href="/for-venues" variant="outline">
                  Venue Features
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <BrowserShot id="crm-dashboard" />
            </div>
          </div>
        </section>

        {/* Final CTA — diagonal-cut full-bleed panel */}
        <section className="py-32 relative overflow-hidden diagonal-both bg-surface-container-high tactical-grid">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-primary/10 blur-[160px] rounded-full" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-4xl md:text-6xl uppercase text-on-surface mb-8">
              Be first to the table.
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 font-body">
              Battle Beacon lands on iOS and Android soon. Sign up now to be first in line and grab the early sign-up badge, which only the first wave will ever get. Running a store? Start free on NorthMark CRM and be ready for the players on day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <JoinLink variant="accent" size="lg">
                Sign Up as a Player
              </JoinLink>
              <Button href={NORTHMARK_URL} external variant="primary" size="lg">
                Start Free as a Venue
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
