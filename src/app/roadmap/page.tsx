import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function RoadmapPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-24 pb-20 px-6 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <header className="mb-16 md:mb-24 relative mt-8 md:mt-12">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 relative z-10">
            Strategic <span className="text-primary italic">Roadmap</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl font-body text-lg leading-relaxed relative z-10">
            The command deck&apos;s vision for the future of competitive tabletop management. Track our deployment status from active protocols to future logistics.
          </p>
        </header>

        {/* Roadmap Timeline Section */}
        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-outline-variant to-surface-container-lowest transform -translate-x-1/2"></div>

          {/* Milestone 1: Now Live */}
          <div className="relative mb-20 md:mb-32">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="lg:w-1/2 lg:text-right lg:pr-16 order-2 lg:order-1">
                <div className="inline-block px-4 py-1 bg-tertiary-container/20 text-tertiary font-headline font-bold tracking-widest uppercase text-xs mb-4 rounded-full">
                  Phase 01: Deployment
                </div>
                <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Now Live</h2>
                <div className="space-y-4">
                  <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border-l-2 border-tertiary text-left">
                    <h3 className="font-headline font-bold text-primary mb-1">Matchmaking</h3>
                    <p className="text-on-surface-variant text-sm">Automated player pairing based on competitive rankings and proximity.</p>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border-l-2 border-tertiary text-left">
                    <h3 className="font-headline font-bold text-primary mb-1">Venue Search</h3>
                    <p className="text-on-surface-variant text-sm">Locate verified LGS and community hubs in your operational sector.</p>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border-l-2 border-tertiary text-left">
                    <h3 className="font-headline font-bold text-primary mb-1">Basic Stat Tracking</h3>
                    <p className="text-on-surface-variant text-sm">Win/Loss telemetry for individual command records.</p>
                  </div>
                </div>
              </div>

              {/* Indicator */}
              <div className="relative z-10 flex items-center justify-center order-1 lg:order-2 lg:w-0 lg:-translate-x-6">
                <div className="w-12 h-12 shrink-0 rounded-full bg-surface-container border-4 border-tertiary flex items-center justify-center shadow-[0_0_20px_rgba(47,248,1,0.3)]">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-16 order-3 lg:order-3 w-full">
                <img
                  className="w-full h-64 object-cover rounded-xl opacity-60 grayscale hover:grayscale-0 transition-all duration-700 object-top"
                  alt="Current deployment: Battle Buddies mobile interface featuring tactical live briefings"
                  src="https://lh3.googleusercontent.com/aida/ADBb0uh6sUgWR90kWUyQbGGNKUSxG1lkSHGGNqxaxB3nHuHq-sXw1ECI3gVIfv7wsYR3un6SaWw-aUYuD5DAvVwlVi-StBl3Lk9gDz1MRY6-dJpSvfPB4g08shoS5Q3A-jRcJwQefvCIkEUy-pDWhQyFrkDZE2Co39YnViTaCOpn1CEXTit7f4ckaVXiaT1cSl25gtZcvKlxp_Tp1ZufDELg7d3zMhqcN9j2Sg-XMfiDrI0wmj_8aG71Ba0HVJ32YZ9D8Yybt2gsxWO3Ag"
                />
              </div>
            </div>
          </div>

          {/* Milestone 2: In Development */}
          <div className="relative mb-20 md:mb-32">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="lg:w-1/2 lg:pr-16 order-3 lg:order-1 w-full">
                <img
                  className="w-full h-64 object-cover rounded-xl opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Retro tech hardware and futuristic shop concept"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvCv1BCrX5i2sSFilV-ib-D0l19J4hl7atAOXsC-i-yPXeZAoVNjKeRIENbUUKUnRghrmXgFQ-mAG21W0TU8O7nW8IexgpFkqsn4dUWOeSVKZjIGKVJHQh1w1QxqPhknSXxkwgI-mXc6rHBqlcS7pEYL92DMLmRPNLXLYX8KxcoJUfiDb97MJYugSXObcPsjeSp6OTFKlK3EbVQJ6bJPbOrDQikHUj_ngh_5Td4coho860qBVTFMnt_9ESPRqSEd2SCcldklgFYzw"
                />
              </div>

              {/* Indicator */}
              <div className="relative z-10 flex items-center justify-center order-1 lg:order-2 lg:w-0 lg:-translate-x-6">
                <div className="w-12 h-12 shrink-0 rounded-full bg-surface-container border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(129,236,255,0.3)]">
                  <span className="material-symbols-outlined text-primary">engineering</span>
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-16 lg:text-left order-2 lg:order-3">
                <div className="inline-block px-4 py-1 bg-primary-container/20 text-primary font-headline font-bold tracking-widest uppercase text-xs mb-4 rounded-full">
                  Phase 02: Logistics
                </div>
                <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">In Development</h2>
                <div className="space-y-4">
                  <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border-l-2 border-primary">
                    <h3 className="font-headline font-bold text-primary mb-1">Points Shop</h3>
                    <p className="text-on-surface-variant text-sm">Monetize your victories. Spend earned points on cosmetic digital assets.</p>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border-l-2 border-primary">
                    <h3 className="font-headline font-bold text-primary mb-1">Team Management</h3>
                    <p className="text-on-surface-variant text-sm">Create and join gaming squads with shared telemetry and private channels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 3: Next Up */}
          <div className="relative mb-20 md:mb-32">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="lg:w-1/2 lg:text-right lg:pr-16 order-2 lg:order-1">
                <div className="inline-block px-4 py-1 bg-secondary-container/20 text-secondary font-headline font-bold tracking-widest uppercase text-xs mb-4 rounded-full">
                  Phase 03: Expansion
                </div>
                <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Next Up</h2>
                <div className="space-y-4">
                  <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border-l-2 border-secondary text-left">
                    <h3 className="font-headline font-bold text-primary mb-1">Venue Custom Themes</h3>
                    <p className="text-on-surface-variant text-sm">Personalize your shop&apos;s portal with sector-specific visual skins.</p>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border-l-2 border-secondary text-left">
                    <h3 className="font-headline font-bold text-primary mb-1">Tournament Brackets v2</h3>
                    <p className="text-on-surface-variant text-sm">Advanced double-elimination and Swiss pairings for massive events.</p>
                  </div>
                </div>
              </div>

              {/* Indicator */}
              <div className="relative z-10 flex items-center justify-center order-1 lg:order-2 lg:w-0 lg:-translate-x-6">
                <div className="w-12 h-12 shrink-0 rounded-full bg-surface-container border-4 border-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">upcoming</span>
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-16 order-3 lg:order-3 w-full">
                <div className="w-full h-64 bg-surface-container-high rounded-xl flex items-center justify-center border border-outline-variant/20 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #81ecff 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
                  <span className="material-symbols-outlined text-6xl text-secondary/40">rocket_launch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 4: Planned */}
          <div className="relative mb-20 md:mb-32">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="lg:w-1/2 lg:pr-16 order-3 lg:order-1 w-full">
                <div className="w-full h-48 bg-surface-container rounded-xl flex items-center justify-center border border-outline-variant/10">
                  <span className="material-symbols-outlined text-4xl text-outline/30">visibility</span>
                </div>
              </div>

              {/* Indicator */}
              <div className="relative z-10 flex items-center justify-center order-1 lg:order-2 lg:w-0 lg:-translate-x-6">
                <div className="w-12 h-12 shrink-0 rounded-full bg-surface-container border-4 border-outline flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">calendar_today</span>
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-16 lg:text-left order-2 lg:order-3">
                <div className="inline-block px-4 py-1 bg-surface-container-highest text-outline font-headline font-bold tracking-widest uppercase text-xs mb-4 rounded-full">
                  Phase 04: Horizon
                </div>
                <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Planned</h2>
                <div className="space-y-4">
                  <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border-l-2 border-outline">
                    <h3 className="font-headline font-bold text-on-surface-variant mb-1">Mobile App v2</h3>
                    <p className="text-on-surface-variant/60 text-sm">Complete tactical overhaul for field operations on iOS and Android.</p>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border-l-2 border-outline">
                    <h3 className="font-headline font-bold text-on-surface-variant mb-1">Global Leaderboards</h3>
                    <p className="text-on-surface-variant/60 text-sm">Inter-sector competitive rankings for ultimate tabletop supremacy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Request Feature Section */}
        <section className="mt-24 pt-24 border-t border-outline-variant/20 mb-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase mb-6">
                Request a <span className="text-secondary">Feature</span>
              </h2>
              <p className="text-on-surface-variant mb-8 text-lg font-body">
                Do you have tactical intelligence that could improve the Battle Buddies platform? Submit your feature proposal directly to High Command.
              </p>
              <div className="flex items-center gap-4 text-primary font-headline font-bold uppercase tracking-widest text-sm">
                <span className="material-symbols-outlined">forum</span>
                Active Community Review Process
              </div>
            </div>
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/15 shadow-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Feature Intel Name</label>
                  <input
                    className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline-variant/50 transition-all font-body p-3"
                    placeholder="e.g. Paint Progress Tracker"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Operational Details</label>
                  <textarea
                    className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline-variant/50 transition-all font-body resize-none p-3"
                    placeholder="Describe the tactical advantage of this feature..."
                    rows={4}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed font-headline font-bold py-4 rounded-lg uppercase tracking-widest hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all active:scale-95"
                  type="button"
                >
                  Submit to Command
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
