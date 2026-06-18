import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import TopNavBar from "@/components/TopNavBar";

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-on-surface-variant">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-8 md:p-10">
      <h2 className="mb-6 text-3xl font-bold uppercase text-on-surface">{title}</h2>
      {children}
    </section>
  );
}

export default function AppPrivacyPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        <section className="px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                <span className="text-primary text-[10px] font-headline font-bold tracking-widest uppercase">
                  Privacy Policy
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-black uppercase tracking-tight text-on-surface md:text-6xl">
                Privacy Policy for Battle Beacon
              </h1>
              <p className="text-lg text-on-surface-variant">
                Operated by Tabletop Sports Ltd (Company No. 17163028)
              </p>
              <p className="mt-4 text-on-surface-variant">
                We are committed to protecting your privacy and ensuring your personal data is handled securely and transparently under UK data protection laws. This Privacy Policy explains how we collect, use, and protect your information when you use our app and services within the United Kingdom.
              </p>
              <p className="mt-4 text-sm text-on-surface-variant">Effective Date: June 18, 2026</p>
            </div>

            <div className="space-y-8">

              <Section title="1. Information You Provide to Us">
                <p className="mb-6 text-on-surface-variant">
                  When you create an account and use our app, we collect the following information directly from you:
                </p>
                <div className="space-y-5">
                  {[
                    {
                      label: "Account Credentials",
                      detail: "We collect your email address to establish and secure your account.",
                    },
                    {
                      label: "Profile Information",
                      detail:
                        "We collect your full name (which is strictly used for booking and payment processing), an optional nickname (which acts as your public-facing display name), and an optional profile picture.",
                    },
                    {
                      label: "General Location Data",
                      detail:
                        "We collect your postcode to accurately match you with nearby venues, shops, and gaming events.",
                    },
                    {
                      label: "Social Connections",
                      detail:
                        'We generate a unique "friend code" for your account and collect data regarding your friend requests and established friend lists to facilitate social gameplay.',
                    },
                    {
                      label: "Local Device Storage",
                      detail:
                        "We utilize secure local storage on your device (such as SecureStorage or device Preferences) to safely keep you logged in by storing your session tokens and saving your basic app preferences locally.",
                    },
                  ].map(({ label, detail }) => (
                    <div key={label}>
                      <p className="font-bold text-on-surface">{label}</p>
                      <p className="mt-1 text-on-surface-variant">{detail}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="2. Information Collected via Third Parties">
                <div className="space-y-5">
                  <div>
                    <p className="font-bold text-on-surface">Age Verification &amp; Social Features</p>
                    <p className="mt-1 text-on-surface-variant">
                      To unlock social features (such as direct messaging, public profiles, and the ability to host or join private games), users must verify their age. We use a secure third-party service, didit.me, for this process. If the app requests Camera permissions during this process, it is strictly to interface with didit.me. We do not capture, process, or store your biometric data, identity documents, or the photos used for verification. We only receive and store a boolean &quot;verified&quot; status and an approximate age bracket (if provided by didit.me).
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Financial Transactions</p>
                    <p className="mt-1 text-on-surface-variant">
                      When you book a table or event, payments are processed securely by our payment provider, Stripe. While we link your full name to the booking, we do not collect, process, or store your credit card numbers or raw financial data on our servers at any time.
                    </p>
                  </div>
                </div>
              </Section>

              <Section title="3. Location Data">
                <p className="text-on-surface-variant">
                  We do not track your real-time GPS location. To match you with local venues, shops, and gaming events, we rely exclusively on the postcode you voluntarily provide in your profile. We use this postcode solely to calculate proximity and display relevant events within a specific range of your area. We do not request device-level location permissions (such as iOS Location Services or Android Location).
                </p>
              </Section>

              <Section title="4. Gameplay, Social Data, and Crash Reporting">
                <div className="space-y-5">
                  <div>
                    <p className="font-bold text-on-surface">Gameplay &amp; Booking Records</p>
                    <p className="mt-1 text-on-surface-variant">
                      We use our proprietary, in-house CRM (Beacon-CRM) to manage and track your bookings, game hosting, game results, and specific player metadata (such as preferred games, armies, or deck types). We collect this to provide you with historical stats and to facilitate platform operations. We do not track direct app usage metrics, such as session duration, screen time, or specific button clicks.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Private Game Invites</p>
                    <p className="mt-1 text-on-surface-variant">
                      When you create or request to join a private game, we process the specific details of that invite, including the recipient, the chosen venue, and any custom notes you include in the request.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Sharing with Venues</p>
                    <p className="mt-1 text-on-surface-variant">
                      Your specific gameplay metadata (such as preferred games or armies) is only shared with a venue if you actively book an event with them, or if you explicitly set them as your &quot;Home Venue.&quot; Venues may use this data to tailor their marketing and curate local events. We do not broadcast your gameplay data to all venues on the platform.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Crash Reporting</p>
                    <p className="mt-1 text-on-surface-variant">
                      To ensure platform stability, we use Sentry.io to monitor errors and app crashes. If the app crashes, Sentry collects anonymous diagnostic data (such as device model, operating system, and the line of code that failed) so we can fix the bug. This crash data is not linked to your personal identity.
                    </p>
                  </div>
                </div>
              </Section>

              <Section title="5. Third-Party Service Providers (Data Processors)">
                <p className="mb-6 text-on-surface-variant">
                  To operate Battle Beacon and provide our core features, we use the following trusted third-party services. These providers act as data processors and are bound by strict data protection agreements:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      name: "Hetzner",
                      detail:
                        "For hosting our core infrastructure, servers, and databases. All our Hetzner servers are located exclusively in Germany. By keeping our servers within the European Economic Area (EEA) and avoiding regions like the US or Singapore, we ensure your data is protected under the strictest UK and European data protection standards.",
                    },
                    { name: "Stripe", detail: "For processing financial transactions and bookings." },
                    { name: "didit.me", detail: "For secure age verification." },
                    {
                      name: "Mailgun",
                      detail:
                        "For the delivery of transactional emails triggered by our in-house CRM (Beacon-CRM).",
                    },
                    { name: "Firebase", detail: "For routing and delivering in-app push notifications." },
                    {
                      name: "Sentry.io",
                      detail: "For monitoring app stability and tracking anonymous crash diagnostics.",
                    },
                    {
                      name: "Apple Store &amp; Google Play Services",
                      detail: "For app distribution and native platform metrics.",
                    },
                    {
                      name: "Cloudflare",
                      detail: "For secure content delivery network (CDN) hosting of profile pictures.",
                    },
                  ].map(({ name, detail }) => (
                    <div
                      key={name}
                      className="rounded-xl border border-outline-variant/15 bg-surface-container-high/60 p-5"
                    >
                      <p
                        className="font-bold text-on-surface"
                        dangerouslySetInnerHTML={{ __html: name }}
                      />
                      <p className="mt-1 text-sm text-on-surface-variant">{detail}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="6. Affiliate Links and Third-Party Websites">
                <p className="mb-4 text-on-surface-variant">
                  Our app may feature affiliate links or promotional offers from other businesses in the tabletop and gaming industry.
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="font-bold text-on-surface">No Direct Data Sharing</p>
                    <p className="mt-1 text-on-surface-variant">
                      We do not directly share your personal information, email address, or gaming data with our affiliate partners.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">External Links &amp; In-App Browsers</p>
                    <p className="mt-1 text-on-surface-variant">
                      If you click on an external event link or affiliate offer, you will be securely redirected to the partner&apos;s external website. For your convenience, some of these external sites may open within an in-app browser (WebView) inside Battle Beacon. Please note that even when viewed inside our app, these are entirely separate third-party websites. Any data you provide on those pages is governed by that business&apos;s own privacy policy, not ours.
                    </p>
                  </div>
                </div>
              </Section>

              <Section title="7. Communications and Notifications">
                <div className="space-y-5">
                  <div>
                    <p className="font-bold text-on-surface">Push Notifications</p>
                    <p className="mt-1 text-on-surface-variant">
                      We use Firebase to deliver relevant in-app push notifications, such as receiving a direct message from another player or a game invite. You can opt out of these notifications at any time via your device&apos;s native settings or within the app&apos;s notification preferences.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Transactional Emails</p>
                    <p className="mt-1 text-on-surface-variant">
                      We use our own proprietary, in-house CRM (Beacon-CRM) powered by Mailgun to send essential transactional emails, such as booking confirmations, cancellations, or payment receipts. Because these emails are strictly necessary to fulfill your bookings and provide our core service, you cannot opt out of them while your account remains active.
                    </p>
                  </div>
                </div>
              </Section>

              <Section title="8. Data Retention and Account Deletion (Right to Erasure)">
                <div className="space-y-5">
                  <div>
                    <p className="font-bold text-on-surface">Account Deletion</p>
                    <p className="mt-1 text-on-surface-variant">
                      You have the right to request the deletion of your account and personal data at any time directly within the app&apos;s settings menu.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Anonymization Process</p>
                    <p className="mt-1 text-on-surface-variant">
                      When you request an account deletion, we do not simply hide your profile. We permanently scrub all Personally Identifiable Information (PII)—including your name, email address, postcode, and profile picture—from our active databases.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Preservation of Non-Personal Data</p>
                    <p className="mt-1 text-on-surface-variant">
                      To maintain the structural integrity of our platform and provide accurate historical accounting for our venues, your past bookings and gameplay records will remain in our system. However, this data will be completely anonymized and permanently decoupled from your identity.
                    </p>
                  </div>
                </div>
              </Section>

              <Section title="9. Contact Us & Regulatory Information">
                <p className="mb-6 text-on-surface-variant">
                  Tabletop Sports Ltd is registered with the UK Information Commissioner&apos;s Office (ICO) under registration number ZC144988.
                </p>
                <p className="mb-6 text-on-surface-variant">
                  If you have any questions about this Privacy Policy, how we handle your data, or if you wish to exercise your data protection rights, please contact us at:
                </p>
                <div className="grid gap-4 sm:grid-cols-3 mb-8">
                  {[
                    { label: "Data Protection Enquiries", email: "data@battle-beacon.com" },
                    { label: "General Support", email: "support@battle-beacon.com" },
                    { label: "Press Enquiries", email: "press@battle-beacon.com" },
                  ].map(({ label, email }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-outline-variant/15 bg-surface-container-high/60 p-5"
                    >
                      <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-2">
                        {label}
                      </p>
                      <p className="text-primary font-medium">{email}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-outline-variant/20 bg-surface-container p-6 mb-6">
                  <p className="font-bold text-on-surface mb-1">Registered Address</p>
                  <p className="text-on-surface-variant">
                    Tabletop Sports Ltd, 31 Potternewton Lane, Leeds, England, LS7 3LW
                  </p>
                </div>
                <div className="rounded-xl border border-outline-variant/20 bg-surface-container p-6">
                  <p className="font-bold text-on-surface mb-2">Your Right to Complain</p>
                  <p className="text-on-surface-variant">
                    Under UK GDPR, if you believe we are mishandling your personal data, you have the right to lodge a complaint directly with the Information Commissioner&apos;s Office (ICO) at{" "}
                    <span className="text-primary">www.ico.org.uk</span>.
                  </p>
                </div>
              </Section>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
