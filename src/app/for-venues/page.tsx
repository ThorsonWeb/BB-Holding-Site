import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Link from "next/link";
import JoinLink from "@/components/JoinLink";

export default function ForVenuesPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        <header className="relative overflow-hidden px-6 py-20 lg:px-24 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,236,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,81,250,0.12),transparent_35%)]"></div>
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <p className="font-headline text-xs font-bold uppercase tracking-widest text-primary mb-4">Game Stores</p>
              <h1 className="mb-6 font-headline text-5xl font-bold uppercase tracking-tighter text-on-surface md:text-7xl">
                Grow your venue with <span className="text-primary italic">Beacon CRM</span>
              </h1>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
                Battle Beacon helps venue owners manage table bookings, paid events, marketing, customer engagement, and day-to-day operations in one easy-to-use CRM built for local gaming communities.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <JoinLink className="rounded-lg bg-gradient-to-r from-primary to-primary-container px-8 py-4 text-center font-headline font-bold uppercase tracking-tight text-on-primary-container transition-all hover:scale-105 active:scale-95">
                  Sign Up
                </JoinLink>
                <Link
                  href="/roadmap"
                  className="rounded-lg border border-outline-variant px-8 py-4 text-center font-headline font-bold uppercase tracking-tight text-on-surface transition-all hover:bg-surface-container-high"
                >
                  View Roadmap
                </Link>
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl border border-outline-variant/20 bg-surface-container-low p-6 shadow-2xl">
              <div className="rounded-2xl border border-primary/20 bg-surface-container p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">event_seat</span>
                  <h2 className="font-headline text-lg font-bold uppercase text-on-surface">
                    Bookings and events
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Offer table booking, manage ticketed events, and take payments through one system instead of stitching together separate tools.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-outline-variant/20 bg-surface-container p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">forum</span>
                    <h2 className="font-headline text-sm font-bold uppercase text-on-surface">
                      Customer engagement
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Keep players informed with updates, reminders, and follow-up communication that helps them come back more often.
                  </p>
                </div>
                <div className="rounded-2xl border border-outline-variant/20 bg-surface-container p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">bolt</span>
                    <h2 className="font-headline text-sm font-bold uppercase text-on-surface">
                      Automation workflows
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Automate marketing, reminders, and repeat admin tasks so your team can spend more time serving customers in-store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-surface px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <h2 className="mb-4 font-headline text-4xl font-bold uppercase tracking-tight text-on-surface md:text-5xl">
                Everything your store needs <span className="text-primary">in one place</span>
              </h2>
              <p className="text-lg text-on-surface-variant">
                Beacon CRM is designed to replace clunky combinations of booking apps, event tools, forms, and marketing systems with one connected platform.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-outline-variant/15 bg-surface-container p-8">
                <span className="material-symbols-outlined mb-5 text-4xl text-primary">calendar_month</span>
                <h3 className="mb-3 font-headline text-2xl font-bold uppercase text-on-surface">
                  Event management
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Create and manage casual nights, leagues, prereleases, tournaments, and special events from one calendar.
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/15 bg-surface-container p-8">
                <span className="material-symbols-outlined mb-5 text-4xl text-secondary">payments</span>
                <h3 className="mb-3 font-headline text-2xl font-bold uppercase text-on-surface">
                  Paid bookings
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Let players reserve tables, buy tickets, and pay online through an integrated payment gateway that reduces admin.
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/15 bg-surface-container p-8">
                <span className="material-symbols-outlined mb-5 text-4xl text-tertiary">assignment</span>
                <h3 className="mb-3 font-headline text-2xl font-bold uppercase text-on-surface">
                  Smart forms
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Create interest forms for new releases, upcoming activities, leagues, and community feedback without extra software.
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/15 bg-surface-container p-8">
                <span className="material-symbols-outlined mb-5 text-4xl text-primary">campaign</span>
                <h3 className="mb-3 font-headline text-2xl font-bold uppercase text-on-surface">
                  Marketing automation
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Trigger email and customer engagement workflows that help fill events, promote products, and bring players back.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-24 lg:px-24">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="mb-4 font-headline text-4xl font-bold uppercase tracking-tight text-on-surface md:text-5xl">
                Put live venue content <span className="text-secondary">on your site</span>
              </h2>
              <p className="mb-8 text-lg text-on-surface-variant">
                Drop embeddable widgets onto any page to show what is happening at your store — events, availability, booking links — without touching them again.
              </p>
              <div className="space-y-5">
                <div className="rounded-xl bg-surface-container p-6">
                  <h3 className="mb-2 font-headline text-xl font-bold uppercase text-on-surface">
                    Event widgets
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Show upcoming events, live availability, and booking links directly on your website or landing pages.
                  </p>
                </div>
                <div className="rounded-xl bg-surface-container p-6">
                  <h3 className="mb-2 font-headline text-xl font-bold uppercase text-on-surface">
                    Games and community widgets
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Highlight active game systems, current interest, and player activity so customers can quickly see why they should visit.
                  </p>
                </div>
                <div className="rounded-xl bg-surface-container p-6">
                  <h3 className="mb-2 font-headline text-xl font-bold uppercase text-on-surface">
                    Store presence
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Keep your venue looking active and welcoming across your site, event pages, and future campaign landing pages.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-outline-variant/15 bg-surface-container p-8 shadow-2xl">
              <div className="mb-8">
                <div className="mb-4 inline-flex rounded-full bg-secondary/10 px-3 py-1">
                  <span className="font-headline text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Planned next
                  </span>
                </div>
                <h2 className="mb-4 font-headline text-4xl font-bold uppercase tracking-tight text-on-surface">
                  One CRM, even more <span className="text-primary">under one roof</span>
                </h2>
                <p className="text-lg text-on-surface-variant">
                  The longer-term plan is to help venues manage even more of the business from one place, reducing reliance on expensive third-party apps.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-xl border border-outline-variant/15 bg-surface-container-high p-5">
                  <span className="material-symbols-outlined text-primary">storefront</span>
                  <div>
                    <h3 className="mb-1 font-headline text-lg font-bold uppercase text-on-surface">
                      Ecommerce platform
                    </h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      Sell tickets, products, and future offers from the same platform that already handles your events and customer data.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-outline-variant/15 bg-surface-container-high p-5">
                  <span className="material-symbols-outlined text-secondary">integration_instructions</span>
                  <div>
                    <h3 className="mb-1 font-headline text-lg font-bold uppercase text-on-surface">
                      Simpler tool stack
                    </h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      Replace disconnected booking, forms, marketing, and engagement tools with a platform built around local game store workflows.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-outline-variant/15 bg-surface-container-high p-5">
                  <span className="material-symbols-outlined text-tertiary">groups</span>
                  <div>
                    <h3 className="mb-1 font-headline text-lg font-bold uppercase text-on-surface">
                      Better customer relationships
                    </h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      Build a clearer view of your community so you can promote the right events, grow attendance, and reward loyal players.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-primary/20 bg-gradient-to-t from-surface-container-high to-surface p-10 text-center shadow-2xl md:p-14">
            <h2 className="mb-5 font-headline text-4xl font-bold uppercase tracking-tighter text-on-surface md:text-5xl">
              Ready to run your venue through <span className="text-primary">Beacon CRM</span>?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
              Bring bookings, events, payments, forms, marketing, and customer engagement into one platform that is built for local gaming stores.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <JoinLink className="rounded-lg bg-primary px-10 py-4 font-headline font-bold uppercase tracking-tight text-on-primary transition-transform hover:scale-105">
                Sign Up
              </JoinLink>
              <Link
                href="/for-players"
                className="rounded-lg border border-outline-variant px-10 py-4 font-headline font-bold uppercase tracking-tight text-on-surface transition-colors hover:bg-surface-container-high"
              >
                View Player Side
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
