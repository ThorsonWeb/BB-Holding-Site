import { Suspense } from "react";
import Link from "next/link";
import BeaconFormEmbed from "@/components/BeaconFormEmbed";
import Footer from "@/components/Footer";
import TopNavBar from "@/components/TopNavBar";
import MobileBottomNav from "@/components/MobileBottomNav";
import ThemeLoader from "@/components/ThemeLoader";

export default function JoinPage() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col">
      <Suspense><ThemeLoader /></Suspense>
      <TopNavBar />
      <main className="relative flex-grow flex items-center justify-center tactical-grid px-6 pb-6 pt-24 md:pt-28 lg:px-12 lg:pb-12 mb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-container-low rounded-xl overflow-hidden relative z-10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
          <div className="lg:col-span-5 hidden lg:block relative overflow-hidden group">
            <img
              alt="Tactical Gaming Environment"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/homescreen.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full">
              <div className="mb-6">
                <p className="font-headline text-xl font-black text-primary leading-tight tracking-tight uppercase animate-pulse">
                  Early access is open.<br />
                  <span className="text-white">Get in before launch.</span>
                </p>
                <div className="h-1 w-24 bg-primary mt-2"></div>
              </div>
              <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Free to sign up</p>
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4 leading-none tracking-tighter italic uppercase">
                Get In<br /><span className="text-primary">Before Launch.</span>
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs font-medium">
                Sign up now to lock in your exclusive early adopter badge, get first access when we launch, and never miss a game at your local store again.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center">
            <div className="mb-10 text-center lg:text-left">
              <Link href="/" className="font-headline text-3xl font-black text-primary italic tracking-tighter mb-2 hover:underline">
                BATTLE BEACON
              </Link>
              <p className="text-on-surface-variant font-medium tracking-wide uppercase text-[10px]">Early Access Sign Up</p>
            </div>

            <BeaconFormEmbed />

            <p className="mt-12 text-center text-[11px] text-on-surface-variant font-medium">
              By signing up, you agree to the{" "}
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
          <span className="hidden sm:inline">Early Access</span>
          <div className="h-1 w-1 bg-primary rounded-full hidden sm:block"></div>
          <span>Free to join</span>
        </div>
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>
      <MobileBottomNav />
    </div>
  );
}
