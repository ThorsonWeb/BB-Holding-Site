import type { Metadata } from "next";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import FeatureRow from "@/components/FeatureRow";
import { BrowserShot, PhoneStage } from "@/components/Screenshot";
import { NORTHMARK_FEATURES_URL, NORTHMARK_URL } from "@/content/links";

export const metadata: Metadata = {
  title: "Table Booking Software for Game Stores",
  description:
    "NorthMark CRM runs table bookings, payments, events, customer records and automated follow-up for game stores, and puts your venue in front of players on the Battle Beacon app.",
};

const workflowTriggers = [
  "A booking is made or cancelled",
  "A payment completes or fails",
  "A form is submitted",
  "A tag, stage or field changes",
  "An award is given or an event ends",
];

const workflowSteps = ["Email", "SMS", "Wait", "Condition", "Move stage", "Add tag", "Check award", "API call"];

export default function ForVenuesPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        <header className="relative overflow-hidden px-6 py-20 lg:px-24 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,236,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,81,250,0.12),transparent_35%)]" aria-hidden="true"></div>
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-5 font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                For game stores, clubs and event organisers
              </p>
              <h1 className="mb-6 text-4xl uppercase leading-[1.05] text-on-surface md:text-5xl xl:text-6xl">
                Fill more tables with <span className="text-primary">NorthMark CRM</span>
              </h1>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
                Bookings, payments, events, customer records and automated follow-up in one place. Every table and event you publish also shows up for players on the Battle Beacon app.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href={NORTHMARK_URL} external variant="primary">
                  Start Free on NorthMark
                </Button>
                <Button href="/book-a-demo" variant="outline">
                  Book a Demo
                </Button>
              </div>
            </div>
            <BrowserShot id="crm-dashboard" className="neon-glow-primary" />
          </div>
        </header>

        <FeatureRow
          num="01"
          label="Bookings & calendar"
          title={<>A booking calendar that <span className="text-primary">knows your tables.</span></>}
          body="Give every bookable thing its own type, with its own length, capacity, price and opening hours. Customers see live slots and book themselves, on your website or in the Battle Beacon app."
          points={[
            "Table types for standard tables, painting stations and big boards",
            "Weekly hours, one-off changes and blackout days",
            "Add the calendar to your own website with one line of code",
          ]}
          visual={<BrowserShot id="crm-bookings-calendar" />}
        />

        <div className="bg-surface-container-low/40">
          <FeatureRow
            num="02"
            label="Payments"
            accent="secondary"
            reverse
            title={<>Paid at booking. <span className="text-secondary">Fewer empty tables.</span></>}
            body="Customers pay when they book, so the slot is theirs and you're not chasing anyone on the day. Connect the provider you already use and the money goes straight to you."
            points={["Stripe, Square, PayPal and SumUp", "A receipt when it goes through, a nudge when it fails"]}
            visual={<BrowserShot id="crm-payments-checkout" />}
          />
        </div>

        <FeatureRow
          num="03"
          label="Events"
          accent="tertiary"
          title={<>Tournaments and game nights <span className="text-tertiary">that sell themselves.</span></>}
          body="Publish an event, set the places and price, and share the link. NorthMark handles sign-ups, payment and the tables the event needs."
          points={[
            "Ticketed sign-up: see who's coming and what's left",
            "Events hold their tables, so there's no double-booking",
            "Co-host with other venues and organisers",
            "Run the day in Battle Beacon: check-in, rounds, pairings and results",
          ]}
          visual={<BrowserShot id="crm-events-manager" />}
        />

        <div className="bg-surface-container-low/40">
          <FeatureRow
            num="04"
            label="Forms & customer records"
            reverse
            title={<>Every enquiry, <span className="text-primary">one customer list.</span></>}
            body="Forms, bookings, event sign-ups and imports all build the same customer record, so you see someone's whole history in one place."
            points={[
              "Embeddable contact, enquiry and sign-up forms",
              "Your own fields: favourite game, army, club",
              "Tags, applied by hand or automatically",
              "Bring your existing list in with a CSV",
            ]}
            visual={<BrowserShot id="crm-forms-builder" />}
          />
        </div>

        <FeatureRow
          num="05"
          label="Pipelines"
          accent="secondary"
          title={<>See where everyone is, <span className="text-secondary">at a glance.</span></>}
          body="Boards for the things you track: enquiries, party bookings, league sign-ups, trade accounts. Drag a card to move it on, and let the move start the follow-up."
          points={["As many pipelines as you need", "Name and reorder stages to match how you work"]}
          visual={<BrowserShot id="crm-leads-kanban" />}
        />

        {/* Workflows: the signature feature gets a full-width panel */}
        <section className="px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl rounded-md border border-outline-variant/20 bg-surface-container p-8 md:p-12">
            <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-tertiary">06 · Workflows</p>
            <div className="mb-10 grid gap-8 lg:grid-cols-2">
              <h2 className="text-3xl uppercase leading-[1.05] text-on-surface md:text-5xl">
                Follow-up that <span className="text-tertiary">runs itself.</span>
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Build reminders, win-backs and event follow-ups as a flowchart. Pick what starts it, add the steps, switch it on, or start from a template and change the wording. One-click buttons in emails, like &ldquo;I&apos;m coming&rdquo; or &ldquo;Rebook&rdquo;, send each customer down the right path.
              </p>
            </div>
            <BrowserShot id="crm-workflows-editor" className="mb-10" />
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-label text-sm font-bold uppercase tracking-wider text-on-surface">Starts when</h3>
                <ul className="space-y-2">
                  {workflowTriggers.map((trigger) => (
                    <li key={trigger} className="flex gap-3 text-on-surface-variant">
                      <Icon name="bolt" className="text-lg text-tertiary" />
                      {trigger}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-label text-sm font-bold uppercase tracking-wider text-on-surface">Steps you can add</h3>
                <ul className="flex flex-wrap gap-2">
                  {workflowSteps.map((step) => (
                    <li key={step} className="rounded-sm border border-tertiary/30 bg-tertiary/5 px-3 py-1 font-label text-xs font-bold uppercase text-tertiary">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FeatureRow
          num="07"
          label="Awards"
          accent="secondary"
          title={<>Give people something to <span className="text-secondary">come back for.</span></>}
          body="Create your own awards, like tournament winner, best painted or 10 visits, and hand them out after an event. Every award lands on the customer's record and can start a congratulations workflow."
          points={["Award a whole table or event at once", "A leaderboard of who's collected the most"]}
          visual={<BrowserShot id="crm-awards-leaderboard" />}
        />

        <div className="bg-surface-container-low/40">
          <FeatureRow
            num="08"
            label="Venue profile & media"
            reverse
            title={<>Show people what it&apos;s like <span className="text-primary">inside.</span></>}
            body="Your details, amenities and best photos in one place, plus a gallery for your website that you approve before anything goes live."
            points={["Parking, food and accessibility at a glance", "Photo folders with approval before publishing"]}
            visual={<BrowserShot id="crm-venue-profile" />}
          />
        </div>

        {/* Works with Battle Beacon */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="min-w-0">
              <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">Works with Battle Beacon</p>
              <h2 className="mb-5 text-3xl uppercase leading-[1.05] text-on-surface md:text-5xl">
                Players find you <span className="text-secondary">in the app.</span>
              </h2>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-on-surface-variant">
                Battle Beacon is the player app that sits on top of NorthMark. Your tables, games and events show up for players nearby, and they book and pay without leaving the app.
              </p>
              <ul className="space-y-3">
                {[
                  "Players host games at your store and book the table in the same step",
                  "Regulars set you as their local store, so your games top their feed",
                  "Your events appear in Nearby Events for players around you",
                  "Premium venues get a gold tag in the app",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-on-surface">
                    <Icon name="check_circle" fill className="mt-0.5 shrink-0 text-xl text-secondary" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/for-players" variant="outline">
                  See the Player App
                </Button>
              </div>
            </div>
            <PhoneStage ids={["app-venue-profile", "app-nearby-events"]} glow="secondary" />
          </div>
        </section>

        <section className="px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-5xl diagonal-both border border-primary/20 bg-surface-container-high px-6 py-12 text-center shadow-2xl md:p-16 tactical-grid relative overflow-hidden">
            <h2 className="mb-5 text-3xl uppercase text-on-surface md:text-5xl">
              Run your venue on <span className="text-primary">NorthMark CRM</span>
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
              Start on the free plan and upgrade when you&apos;re taking enough bookings for it to pay for itself. Or book a call and we&apos;ll show you round.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href={NORTHMARK_URL} external variant="primary" size="lg">
                Start Free on NorthMark
              </Button>
              <Button href={NORTHMARK_FEATURES_URL} external variant="outline" size="lg">
                Every Feature
              </Button>
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
