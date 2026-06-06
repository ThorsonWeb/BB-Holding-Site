import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import JoinLink from "@/components/JoinLink";

const roadmapHighlights = [
  {
    label: "Current Focus",
    value: "Phase 02",
    tone: "text-primary border-primary/20 bg-primary/10",
  },
  {
    label: "Active Phases",
    value: "4 Tracked",
    tone: "text-secondary border-secondary/20 bg-secondary/10",
  },
  {
    label: "Live Systems",
    value: "Matchmaking + Venues",
    tone: "text-tertiary border-tertiary/20 bg-tertiary/10",
  },
];

const roadmapPhases = [
  {
    phase: "Phase 01",
    label: "Foundation",
    status: "Now Live",
    description:
      "The core platform is live. Players can find local venues, create profiles, and start logging game results. This is the base everything else builds on.",
    brief:
      "Core discovery, venue search, and player profiles are already live. Players can find games and start building a record from day one.",
    accent: "tertiary",
    badgeClass: "bg-tertiary/10 text-tertiary border-tertiary/20",
    panelClass: "border-tertiary/25",
    icon: "check_circle",
    items: [
      {
        title: "Player Matchmaking",
        description:
          "Find opponents near you based on the games you play and your availability.",
      },
      {
        title: "Venue Discovery",
        description:
          "Search for local game stores, see what's on, and find open tables.",
      },
      {
        title: "Result Tracking",
        description: "Log wins and losses and start building your player profile.",
      },
    ],
  },
  {
    phase: "Phase 02",
    label: "Engagement",
    status: "In Development",
    description:
      "We're building the features that give players more reasons to keep coming back — a rewards system and tools to play together as a group.",
    brief:
      "A points rewards system and team management tools are in active development right now. These are the features that turn casual users into regulars.",
    accent: "primary",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    panelClass: "border-primary/25",
    icon: "engineering",
    items: [
      {
        title: "Points & Rewards",
        description:
          "Earn points for playing and spend them on profile upgrades and cosmetic rewards.",
      },
      {
        title: "Team & Squad Tools",
        description:
          "Create a team, invite your regular group, and track results together.",
      },
    ],
  },
  {
    phase: "Phase 03",
    label: "Growth",
    status: "Next Up",
    description:
      "Once Phase 02 ships, the focus moves to giving venues more flexibility and improving the experience for stores running bigger events.",
    brief:
      "Planned for after Phase 02. Venue customisation and stronger tournament tooling for stores running leagues, championships, and bigger events.",
    accent: "secondary",
    badgeClass: "bg-secondary/10 text-secondary border-secondary/20",
    panelClass: "border-secondary/25",
    icon: "rocket_launch",
    items: [
      {
        title: "Venue Branding",
        description:
          "Game stores can customise their profile and event pages to match their own brand.",
      },
      {
        title: "Tournament Brackets v2",
        description:
          "Double-elimination and Swiss pairings for stores running serious competitive events.",
      },
    ],
  },
  {
    phase: "Phase 04",
    label: "Scale",
    status: "Planned",
    description:
      "Long-range plans to rebuild the mobile experience from the ground up and introduce global rankings that connect competitive players everywhere.",
    brief:
      "A rebuilt mobile app and global leaderboards are on the long-range plan. The goal is to connect every competitive player on the network, not just local ones.",
    accent: "outline",
    badgeClass: "bg-surface-container-high text-on-surface-variant border-outline-variant/30",
    panelClass: "border-outline-variant/30",
    icon: "explore",
    items: [
      {
        title: "Mobile App v2",
        description:
          "A fully rebuilt iOS and Android app designed around how players actually use it.",
      },
      {
        title: "Global Leaderboards",
        description:
          "Competitive rankings that go beyond your local store and connect players across the whole network.",
      },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-24 pb-20">
        <section className="relative overflow-hidden border-b border-outline-variant/15">
          <div className="absolute inset-0 tactical-grid opacity-40"></div>
          <div className="absolute -top-24 left-0 h-64 w-64 rounded-full bg-primary/10 blur-[120px]"></div>
          <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-secondary/10 blur-[140px]"></div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div>
                <p className="font-headline text-xs font-bold uppercase tracking-[0.28em] text-primary mb-6">Product Roadmap</p>

                <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-[1.05]">
                  What&apos;s live.
                  <br />
                  <span className="text-primary italic">What&apos;s coming.</span>
                </h1>

                <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-on-surface-variant">
                  A clear view of what is already in players&apos; hands, what we are building right now, and where Battle Beacon is headed for players, stores, and events.
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-low/80 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant">
                      Current Status
                    </p>
                    <h2 className="font-headline text-2xl font-bold uppercase text-on-surface mt-2">
                      Roadmap
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-tertiary/20 bg-tertiary/10 px-3 py-1 text-[10px] font-headline font-bold uppercase tracking-[0.22em] text-tertiary">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    Active
                  </span>
                </div>

                <div className="space-y-4">
                  {roadmapHighlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className={`rounded-xl border px-4 py-4 ${highlight.tone}`}
                    >
                      <p className="font-headline text-[10px] font-bold uppercase tracking-[0.24em] opacity-80">
                        {highlight.label}
                      </p>
                      <p className="mt-2 text-sm md:text-base font-bold uppercase tracking-wide">
                        {highlight.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="mb-12 md:mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-primary mb-3">
                The Phases
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                Phase by Phase
              </h2>
            </div>
            <p className="max-w-2xl text-on-surface-variant text-base md:text-lg">
              Each phase ships a set of features, gets real feedback, and informs what comes next. Nothing is set in stone — we ship, we learn, we iterate.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-outline-variant/70 to-transparent"></div>

            <div className="space-y-10 md:space-y-14">
              {roadmapPhases.map((phase, index) => {
                const isReversed = index % 2 === 1;
                const indicatorBorderClass =
                  phase.accent === "tertiary"
                    ? "border-tertiary text-tertiary shadow-[0_0_20px_rgba(47,248,1,0.25)]"
                    : phase.accent === "primary"
                      ? "border-primary text-primary shadow-[0_0_20px_rgba(129,236,255,0.25)]"
                      : phase.accent === "secondary"
                        ? "border-secondary text-secondary shadow-[0_0_20px_rgba(255,81,250,0.2)]"
                        : "border-outline text-on-surface-variant";

                return (
                  <article key={phase.phase} className="relative">
                    <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
                      <div className={isReversed ? "lg:order-3" : ""}>
                        <div
                          className={`h-full rounded-2xl border bg-surface-container-low p-6 md:p-8 shadow-[0_18px_50px_rgba(0,0,0,0.22)] ${phase.panelClass}`}
                        >
                          <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span
                              className={`inline-flex rounded-full border px-4 py-1 font-headline text-[10px] font-bold uppercase tracking-[0.24em] ${phase.badgeClass}`}
                            >
                              {phase.phase}: {phase.label}
                            </span>
                            <span className="font-headline text-xs font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                              {phase.status}
                            </span>
                          </div>

                          <h3 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
                            {phase.status}
                          </h3>
                          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8">
                            {phase.description}
                          </p>

                          <div className="space-y-4">
                            {phase.items.map((item) => (
                              <div
                                key={item.title}
                                className="rounded-xl border border-outline-variant/15 bg-surface-container-high/60 p-5"
                              >
                                <div className="flex items-start gap-3">
                                  <span
                                    className={`material-symbols-outlined mt-0.5 text-base ${
                                      phase.accent === "tertiary"
                                        ? "text-tertiary"
                                        : phase.accent === "primary"
                                          ? "text-primary"
                                          : phase.accent === "secondary"
                                            ? "text-secondary"
                                            : "text-on-surface-variant"
                                    }`}
                                  >
                                    arrow_forward
                                  </span>
                                  <div>
                                    <h4 className="font-headline font-bold uppercase text-on-surface mb-1">
                                      {item.title}
                                    </h4>
                                    <p className="text-sm leading-relaxed text-on-surface-variant">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 mx-auto lg:flex lg:items-start lg:justify-center">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-full border-4 bg-surface-container ${indicatorBorderClass}`}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={
                              phase.accent !== "outline"
                                ? { fontVariationSettings: "'FILL' 1" }
                                : undefined
                            }
                          >
                            {phase.icon}
                          </span>
                        </div>
                      </div>

                      <div className={isReversed ? "lg:order-1" : ""}>
                        <div className="relative flex min-h-[280px] h-full items-center justify-center overflow-hidden rounded-2xl border border-outline-variant/15 bg-surface-container-high shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                          <div className="absolute inset-0 opacity-20 tactical-grid"></div>
                          <div
                            className={`absolute h-40 w-40 rounded-full blur-3xl ${
                              phase.accent === "tertiary"
                                ? "bg-tertiary/10"
                                : phase.accent === "primary"
                                  ? "bg-primary/10"
                                  : phase.accent === "secondary"
                                    ? "bg-secondary/10"
                                    : "bg-outline/10"
                            }`}
                          ></div>
                          <div className="relative flex flex-col items-center text-center px-8">
                            <span
                              className={`material-symbols-outlined text-6xl ${
                                phase.accent === "tertiary"
                                  ? "text-tertiary/70"
                                  : phase.accent === "primary"
                                    ? "text-primary/70"
                                    : phase.accent === "secondary"
                                      ? "text-secondary/70"
                                      : "text-on-surface-variant/50"
                              }`}
                            >
                              {phase.icon}
                            </span>
                            <p className="mt-5 font-headline text-sm font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                              {phase.label}
                            </p>
                            <p className="mt-3 max-w-sm text-sm leading-relaxed text-on-surface-variant">
                              {phase.brief}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-8 pb-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start rounded-3xl border border-outline-variant/15 bg-surface-container-low p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
            <div>
              <p className="font-headline text-xs font-bold uppercase tracking-[0.24em] text-secondary mb-4">
                Community Input
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-5">
                Help Shape the
                <span className="text-secondary"> Next Phase</span>
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Got ideas for what we should build next? Share feature requests, quality-of-life improvements, or event tooling ideas and we will factor them into upcoming phases.
              </p>
              <div className="flex flex-wrap gap-4">
                <JoinLink
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-primary-dim px-6 py-3 font-headline font-bold uppercase tracking-wide text-on-primary-fixed transition-transform hover:scale-105 active:scale-95"
                >
                  Sign Up for Updates
                </JoinLink>
                <div className="inline-flex items-center gap-2 rounded-lg border border-outline-variant/20 px-4 py-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">
                    forum
                  </span>
                  Active community review process
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-outline-variant/15 bg-surface-container p-6 md:p-8">
              <form className="space-y-6">
                <div>
                  <label className="block font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Feature Name
                  </label>
                  <input
                    className="w-full rounded-xl border border-outline-variant/20 bg-surface-container-highest p-4 font-body text-on-surface placeholder:text-outline-variant/60 transition-all focus:border-primary focus:outline-none"
                    placeholder="e.g. Paint Progress Tracker"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Operational Details
                  </label>
                  <textarea
                    className="w-full resize-none rounded-xl border border-outline-variant/20 bg-surface-container-highest p-4 font-body text-on-surface placeholder:text-outline-variant/60 transition-all focus:border-primary focus:outline-none"
                    placeholder="Describe the tactical advantage of this feature..."
                    rows={5}
                  ></textarea>
                </div>
                <button
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-dim py-4 font-headline font-bold uppercase tracking-widest text-on-primary-fixed transition-all hover:shadow-[0_0_20px_rgba(129,236,255,0.35)] active:scale-95"
                  type="button"
                >
                  Submit to Command
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
