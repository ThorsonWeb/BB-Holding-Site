import BeaconCrmFormEmbed from "@/components/BeaconCrmFormEmbed";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import TopNavBar from "@/components/TopNavBar";
import Link from "next/link";

const WHAT_DELETED = [
  "Account profile and display name",
  "Game history, match results, and XP",
  "Saved army lists and deck lists",
  "Direct messages and conversations",
  "Venue bookings (where not yet fulfilled)",
  "Profile photo and uploaded content",
];

const WHAT_RETAINED = [
  { item: "Payment and transaction records", reason: "7 years — HMRC legal obligation" },
  { item: "Abuse reports and moderation logs", reason: "Legitimate interest in safety" },
  { item: "Aggregated, anonymised game statistics", reason: "No longer linked to your identity" },
];

export default function AppDeleteAccountPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        <section className="px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl">

            {/* Header */}
            <div className="mb-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-error/20 bg-error/10 px-3 py-1">
                <span className="text-error text-[10px] font-headline font-bold tracking-widest uppercase">
                  Data Rights
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-black uppercase tracking-tight text-on-surface md:text-6xl">
                Delete Your Account
              </h1>
              <p className="text-lg text-on-surface-variant">
                You have the right to request erasure of your personal data under{" "}
                <strong className="text-on-surface">UK GDPR Article 17</strong>. Complete the form
                below and we will process your request within 30 days.
              </p>
            </div>

            {/* What happens info cards */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    delete_forever
                  </span>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface">
                    What gets deleted
                  </h2>
                </div>
                <ul className="space-y-2">
                  {WHAT_DELETED.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined mt-0.5 text-base text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>
                    schedule
                  </span>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface">
                    What we must retain
                  </h2>
                </div>
                <ul className="space-y-3">
                  {WHAT_RETAINED.map(({ item, reason }) => (
                    <li key={item} className="text-sm">
                      <p className="text-on-surface">{item}</p>
                      <p className="text-on-surface-variant">{reason}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Warning */}
            <div className="mb-8 flex items-start gap-3 rounded-2xl border border-error/20 bg-error/8 p-5">
              <span className="material-symbols-outlined mt-0.5 text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
                warning
              </span>
              <p className="text-sm text-on-surface-variant">
                <strong className="text-on-surface">Account deletion is permanent and cannot be undone.</strong>{" "}
                Any active venue bookings will be cancelled. If you have a paid subscription, please
                cancel it first to avoid further charges.
              </p>
            </div>

            {/* Form */}
            <BeaconCrmFormEmbed
              formKey="TLVgaHcIrNYPQMBj4Gi8PJVrXlSNFE8TyaoEP0eli0s"
              host="https://beacon-crm.com"
            />

            {/* Footer links */}
            <p className="mt-8 text-center text-sm text-on-surface-variant">
              Need help or prefer to contact us directly?{" "}
              <a href="mailto:support@battle-beacon.com" className="text-primary underline underline-offset-2">
                support@battle-beacon.com
              </a>
              {" · "}
              <Link href="/app-privacy" className="text-primary underline underline-offset-2">
                Privacy Policy
              </Link>
            </p>

          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
