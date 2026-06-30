import type { Metadata } from "next";
import Footer from "@/components/Footer";
import TopNavBar from "@/components/TopNavBar";
import MobileBottomNav from "@/components/MobileBottomNav";
import BeaconFeedbackFormEmbed from "@/components/BeaconFeedbackFormEmbed";

export const metadata: Metadata = {
  title: "Beta Feedback | Battle Beacon",
  description: "Submit your feedback for the Battle Beacon closed beta. Help us build the best tabletop gaming app.",
  robots: { index: false, follow: false },
};

const testAreas = [
  {
    icon: "sports_esports",
    label: "Creating Games",
    description: "Create games with different systems, sizes, and visibility settings.",
    color: "primary",
  },
  {
    icon: "group_add",
    label: "Joining Games",
    description: "Browse, request to join, and respond to game invites.",
    color: "secondary",
  },
  {
    icon: "person_add",
    label: "Adding Friends",
    description: "Search for players, send requests, and manage your friend list.",
    color: "primary",
  },
  {
    icon: "chat",
    label: "Sending Messages",
    description: "Start conversations, reply, and check in-app notifications.",
    color: "secondary",
  },
  {
    icon: "flag",
    label: "Reporting",
    description: "Use report tools on content or behaviour you find problematic.",
    color: "primary",
  },
  {
    icon: "verified_user",
    label: "Age Verification",
    description: "Go through the age validation flow and note any friction.",
    color: "secondary",
  },
  {
    icon: "lock",
    label: "Private Games",
    description: "Set up a private game, invite specific players, and confirm end-to-end.",
    color: "primary",
  },
];

export default function AppFeedbackPage() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col">
      <TopNavBar />

      <main className="relative flex-grow pt-24 md:pt-28 pb-24 tactical-grid">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-5%] left-[-10%] w-[40%] h-[50%] bg-primary/8 blur-[140px] rounded-full"></div>
          <div className="absolute bottom-[-5%] right-[-10%] w-[40%] h-[50%] bg-secondary/8 blur-[140px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">

          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border-l-2 border-primary mb-6">
              <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase">
                Closed Beta
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-on-surface tracking-tighter leading-[1.05] uppercase mb-5">
              Send Your<br />
              <span className="text-primary">Report.</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl mx-auto">
              Found a bug? Got a suggestion? Noticed something that feels off? We want to hear all of it — no detail is too small. Your feedback shapes what ships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT — test checklist */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <div className="mb-6">
                  <span className="font-headline text-xs font-bold tracking-widest uppercase text-secondary">
                    Your Objectives
                  </span>
                  <h2 className="text-2xl font-bold uppercase text-on-surface tracking-tight mt-2 mb-1">
                    What to Test
                  </h2>
                  <div className="h-0.5 w-10 bg-secondary"></div>
                </div>

                <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                  These are the key areas to focus on. Note anything broken, confusing, or missing when you submit.
                </p>

                <ul className="space-y-3">
                  {testAreas.map((area) => (
                    <li
                      key={area.label}
                      className={`flex items-start gap-4 p-4 rounded-xl bg-surface-container border ${
                        area.color === "primary"
                          ? "border-primary/10 hover:border-primary/25"
                          : "border-secondary/10 hover:border-secondary/25"
                      } transition-colors`}
                    >
                      <span
                        className={`material-symbols-outlined text-xl mt-0.5 shrink-0 ${
                          area.color === "primary" ? "text-primary" : "text-secondary"
                        }`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {area.icon}
                      </span>
                      <div>
                        <div
                          className={`font-headline text-xs font-bold tracking-widest uppercase mb-0.5 ${
                            area.color === "primary" ? "text-primary" : "text-secondary"
                          }`}
                        >
                          {area.label}
                        </div>
                        <div className="text-sm text-on-surface-variant leading-relaxed">
                          {area.description}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="lg:col-span-7">
              <BeaconFeedbackFormEmbed />
            </div>

          </div>
        </div>
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>
      <MobileBottomNav />
    </div>
  );
}
