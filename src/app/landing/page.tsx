import { Suspense } from "react";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import LandingContent from "./LandingContent";

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
