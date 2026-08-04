import type { Metadata } from "next";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Button from "@/components/Button";
import JoinLink from "@/components/JoinLink";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Table Booking Software for Game Stores",
  description:
    "Let players book a table at your venue online with Beacon CRM. Manage table bookings, paid events, marketing, and customer engagement in one platform built for local gaming stores.",
};

export default function ForVenuesPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        <header className="relative overflow-hidden px-6 py-20 lg:px-24 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,236,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,81,250,0.12),transparent_35%)]" aria-hidden="true"></div>
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <h1 className="mb-6 font-headline text-5xl font-bold uppercase tracking-tighter text-on-surface md:text-7xl">
                Let players book a table at your venue with <span className="text-primary italic">Beacon CRM</span>
              </h1>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
                Battle Beacon helps venue owners take table bookings online, run paid events, and manage marketing, customer engagement, and day-to-day operations in one easy-to-use CRM built for local gaming communities.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <JoinLink variant="primary">Sign Up</JoinLink>
                <Button href="/book-a-demo" variant="outline">
                  Book a Demo
                </Button>
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl border border-outline-variant/20 bg-surface-container-low p-6 shadow-2xl">
              <div className="rounded-2xl border border-primary/20 bg-surface-container p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Icon name="event_seat" className="text-primary" />
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
                    <Icon name="forum" className="text-secondary" />
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
                    <Icon name="bolt" className="text-tertiary" />
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
                Everything your venue needs <span className="text-primary">in one place</span>
              </h2>
              <p className="text-lg text-on-surface-variant">
                Beacon CRM is designed to replace clunky combinations of booking apps, event tools, forms, and marketing systems with one connected platform.
              </p>
            </div>

            <ul className="grid gap-px bg-outline-variant/10 md:grid-cols-2 xl:grid-cols-4 rounded-2xl overflow-hidden border border-outline-variant/10">
              {[
                {
                  num: "01",
                  icon: "calendar_month",
                  title: "Event management",
                  description: "Create and manage casual nights, leagues, prereleases, tournaments, and special events from one calendar.",
                },
                {
                  num: "02",
                  icon: "payments",
                  title: "Paid bookings",
                  description: "Let players book a table, buy tickets, and pay online through an integrated payment gateway.",
                },
                {
                  num: "03",
                  icon: "assignment",
                  title: "Smart forms",
                  description: "Create interest forms for new releases, upcoming activities, leagues, and community feedback.",
                },
                {
                  num: "04",
                  icon: "campaign",
                  title: "Marketing automation",
                  description: "Trigger email and engagement workflows that help fill events, promote products, and bring players back.",
                },
              ].map((item) => (
                <li key={item.num} className="bg-surface-container p-8 relative">
                  <span className="ghost-numeral absolute top-4 right-6 text-4xl text-primary/15" aria-hidden="true">
                    {item.num}
                  </span>
                  <Icon name={item.icon} className="mb-5 text-3xl text-primary relative" />
                  <h3 className="mb-3 font-headline text-lg font-bold uppercase text-on-surface relative">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant relative">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-24 lg:px-24">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="mb-4 font-headline text-4xl font-bold uppercase tracking-tight text-on-surface md:text-5xl">
                Put live venue content <span className="text-secondary">on your site</span>
              </h2>
              <p className="mb-8 text-lg text-on-surface-variant">
                Drop embeddable widgets onto any page to show what is happening at your store &mdash; events, availability, booking links &mdash; without touching them again.
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
                <div className="mb-4 inline-flex rounded-full bg-secondary/25 px-3 py-1">
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
                  <Icon name="storefront" className="text-primary" />
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
                  <Icon name="integration_instructions" className="text-secondary" />
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
                  <Icon name="groups" className="text-tertiary" />
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
          <div className="mx-auto max-w-5xl diagonal-both border border-primary/20 bg-surface-container-high p-10 text-center shadow-2xl md:p-16 tactical-grid relative overflow-hidden">
            <h2 className="mb-5 font-headline text-4xl font-bold uppercase tracking-tighter text-on-surface md:text-5xl">
              Ready to run your venue through <span className="text-primary">Beacon CRM</span>?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
              Bring bookings, events, payments, forms, marketing, and customer engagement into one platform that is built for local gaming stores.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <JoinLink variant="primary" size="lg">Sign Up</JoinLink>
              <Button href="/book-a-demo" variant="outline" size="lg">
                Book a Demo
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
