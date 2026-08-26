import type { Metadata } from "next";
import { Suspense } from "react";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import LandingContent from "./LandingContent";
import defaultCopy from "@/themes/default.json";

// Static export can't vary metadata by ?theme= at request time (no server to
// read query params at render time), so this uses the default theme's copy —
// what's actually served for the bare /landing URL and what crawlers see.
export const metadata: Metadata = {
  title: { absolute: defaultCopy.meta.title },
  description: defaultCopy.meta.description,
  alternates: { canonical: "/landing" },
};

export default function LandingPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        <Suspense>
          <LandingContent />
        </Suspense>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
