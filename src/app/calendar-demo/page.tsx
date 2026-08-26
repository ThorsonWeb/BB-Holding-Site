import type { Metadata } from "next";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import BookingCalendarEmbed from "@/components/BookingCalendarEmbed";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Booking Calendar Demo",
  description: "See the Beacon CRM booking calendar in action — live table availability and instant reservations for your venue.",
  robots: { index: false, follow: false },
};

export default function CalendarDemoPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        <header className="relative overflow-hidden px-6 py-16 lg:px-24 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,236,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,81,250,0.12),transparent_35%)]" aria-hidden="true"></div>
          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-headline text-4xl font-bold uppercase tracking-tighter text-on-surface md:text-6xl">
              The <span className="text-primary italic">booking calendar</span> your venue could be running
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
              This is a live demo of the Beacon CRM booking widget &mdash; pick a slot and see how easy it is for players to reserve a table.
            </p>
          </div>
        </header>

        <section className="px-6 pb-24 lg:px-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-outline-variant/15 bg-surface-container p-6 shadow-2xl md:p-10">
            <BookingCalendarEmbed
              embedKey="kPUc1Gh0sE1FMpE3K_CYUi6saikjl8Um6ilnFOthPoE"
              host="https://beacon-crm.com"
            />
          </div>

          <div className="mx-auto mt-6 flex max-w-5xl items-center justify-center gap-2 text-center text-sm text-on-surface-variant">
            <Icon name="code" className="text-primary" />
            <p>
              Easily customisable with CSS &mdash; this calendar blends in perfectly with our branding via a simple snippet, and yours can too.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
