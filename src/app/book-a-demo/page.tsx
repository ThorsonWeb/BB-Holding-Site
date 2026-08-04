import type { Metadata } from "next";
import Link from "next/link";
import BeaconBookingEmbed from "@/components/BeaconBookingEmbed";
import Footer from "@/components/Footer";
import TopNavBar from "@/components/TopNavBar";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Book a 20-minute call to see how Beacon CRM can run bookings, events, and customer engagement for your venue.",
};

export default function BookADemoPage() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col">
      <TopNavBar />
      <main className="relative flex-grow flex items-center justify-center tactical-grid px-6 pb-6 pt-24 md:pt-28 lg:px-12 lg:pb-12 mb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-container-low rounded-xl overflow-hidden relative z-10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
          <div className="lg:col-span-5 hidden lg:block relative overflow-hidden group">
            {/* TODO(asset): replace with a real photo of a venue demo/booking session */}
            <img
              alt="Battle Beacon app showing a hosted game listing"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/hostgamescreen.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface from-15% via-surface/90 via-55% to-surface/20" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full">
              <div className="mb-6">
                <p className="font-headline text-xl font-black text-primary leading-tight tracking-tight uppercase">
                  See it running your venue.<br />
                  <span className="text-white">Book a 20-minute call.</span>
                </p>
                <div className="h-1 w-24 bg-primary mt-2"></div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs font-medium">
                We&apos;ll walk through bookings, events, and CRM tools inside Beacon CRM and answer questions specific to your venue.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center">
            <div className="mb-10 text-center lg:text-left">
              <Link href="/" className="block font-headline text-3xl font-black text-primary italic tracking-tighter mb-2 hover:underline">
                BATTLE BEACON
              </Link>
              <h1 className="text-on-surface-variant font-medium tracking-wide uppercase text-[10px]">Book a Demo</h1>
            </div>

            <BeaconBookingEmbed />

            <p className="mt-12 text-center text-[11px] text-on-surface-variant font-medium">
              By booking a call, you agree to the{" "}
              <Link className="text-primary hover:underline" href="/privacy">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>

        {/* Floating status */}
        <div className="fixed bottom-24 lg:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-8 text-[9px] font-headline font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-on-surface-variant/40 whitespace-nowrap">
          <span>Battle Beacon</span>
          <div className="h-1 w-1 bg-primary rounded-full hidden sm:block"></div>
          <span className="hidden sm:inline">For Venues</span>
          <div className="h-1 w-1 bg-primary rounded-full hidden sm:block"></div>
          <span>Free demo call</span>
        </div>
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>
      <MobileBottomNav />
    </div>
  );
}
