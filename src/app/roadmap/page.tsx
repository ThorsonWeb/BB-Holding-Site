import type { Metadata } from "next";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "See what's live today in Battle Beacon and what's coming next for players and venues.",
};

// TODO(client): replace placeholder roadmap phases/items below with real milestones before launch.
const roadmapHighlights = [
  {
    label: "Current Focus",
    value: "Phase 0X",
    tone: "text-primary border-primary/20 bg-primary/10",
  },
  {
    label: "Active Phases",
    value: "X Tracked",
    tone: "text-secondary border-secondary/40 bg-secondary/25",
  },
  {
    label: "Live Systems",
    value: "Placeholder",
    tone: "text-tertiary border-tertiary/20 bg-tertiary/10",
  },
];

const roadmapPhases = [
  {
    phase: "Phase 01",
    label: "Foundation",
    status: "Now Live",
    description:
      "Placeholder summary of what shipped in this phase — replace with a real description before launch.",
    brief:
      "Placeholder brief for this phase's live features.",
    accent: "tertiary",
    badgeClass: "bg-tertiary/10 text-tertiary border-tertiary/20",
    panelClass: "border-tertiary/25",
    icon: "check_circle",
    items: [
      {
        title: "Milestone Name",
        description: "One-line description of what shipped — replace with real milestone details.",
      },
      {
        title: "Milestone Name",
        description: "One-line description of what shipped — replace with real milestone details.",
      },
      {
        title: "Milestone Name",
        description: "One-line description of what shipped — replace with real milestone details.",
      },
    ],
  },
  {
    phase: "Phase 02",
    label: "Engagement",
    status: "In Development",
    description:
      "Placeholder summary of what's currently in active development — replace with a real description before launch.",
    brief:
      "Placeholder brief for this phase's in-progress features.",
    accent: "primary",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    panelClass: "border-primary/25",
    icon: "engineering",
    items: [
      {
        title: "Milestone Name",
        description: "One-line description of what's in progress — replace with real milestone details.",
      },
      {
        title: "Milestone Name",
        description: "One-line description of what's in progress — replace with real milestone details.",
      },
    ],
  },
  {
    phase: "Phase 03",
    label: "Growth",
    status: "Next Up",
    description:
      "Placeholder summary of what's planned next — replace with a real description before launch.",
    brief:
      "Placeholder brief for this phase's planned features.",
    accent: "secondary",
    badgeClass: "bg-secondary/25 text-secondary border-secondary/40",
    panelClass: "border-secondary/25",
    icon: "rocket_launch",
    items: [
      {
        title: "Milestone Name",
        description: "One-line description of what's planned — replace with real milestone details.",
      },
      {
        title: "Milestone Name",
        description: "One-line description of what's planned — replace with real milestone details.",
      },
    ],
  },
  {
    phase: "Phase 04",
    label: "Scale",
    status: "Planned",
    description:
      "Placeholder summary of the longer-range plan — replace with a real description before launch.",
    brief:
      "Placeholder brief for this phase's long-range plans.",
    accent: "outline",
    badgeClass: "bg-surface-container-high text-on-surface-variant border-outline-variant/30",
    panelClass: "border-outline-variant/30",
    icon: "explore",
    items: [
      {
        title: "Milestone Name",
        description: "One-line description of the long-range plan — replace with real milestone details.",
      },
      {
        title: "Milestone Name",
        description: "One-line description of the long-range plan — replace with real milestone details.",
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
          <div className="absolute inset-0 tactical-grid opacity-40" aria-hidden="true"></div>
          <div className="absolute -top-24 left-0 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" aria-hidden="true"></div>
          <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-secondary/10 blur-[140px]" aria-hidden="true"></div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div>
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
                    <Icon name="check_circle" className="text-sm" fill />
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
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                Phase by Phase
              </h2>
            </div>
            <p className="max-w-2xl text-on-surface-variant text-base md:text-lg">
              Each phase ships a set of features, gets real feedback, and informs what comes next. Nothing is set in stone — we ship, we learn, we iterate.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-outline-variant/70 to-transparent" aria-hidden="true"></div>

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
                            {phase.label}
                          </h3>
                          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8">
                            {phase.description}
                          </p>

                          <div className="space-y-4">
                            {phase.items.map((item, itemIndex) => (
                              <div
                                key={`${phase.phase}-${itemIndex}`}
                                className="rounded-xl border border-outline-variant/15 bg-surface-container-high/60 p-5"
                              >
                                <div className="flex items-start gap-3">
                                  <Icon
                                    name="arrow_forward"
                                    className={`mt-0.5 text-base ${
                                      phase.accent === "tertiary"
                                        ? "text-tertiary"
                                        : phase.accent === "primary"
                                          ? "text-primary"
                                          : phase.accent === "secondary"
                                            ? "text-secondary"
                                            : "text-on-surface-variant"
                                    }`}
                                  />
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
                          <Icon name={phase.icon} fill={phase.accent !== "outline"} />
                        </div>
                      </div>

                      <div className={isReversed ? "lg:order-1" : ""}>
                        <div className="relative flex min-h-[280px] h-full items-center justify-center overflow-hidden rounded-2xl border border-outline-variant/15 bg-surface-container-high shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                          <div className="absolute inset-0 opacity-20 tactical-grid" aria-hidden="true"></div>
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
                            aria-hidden="true"
                          ></div>
                          <div className="relative flex flex-col items-center text-center px-8">
                            <Icon
                              name={phase.icon}
                              className={`text-6xl ${
                                phase.accent === "tertiary"
                                  ? "text-tertiary/70"
                                  : phase.accent === "primary"
                                    ? "text-primary/70"
                                    : phase.accent === "secondary"
                                      ? "text-secondary/70"
                                      : "text-on-surface-variant/50"
                              }`}
                            />
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

      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
