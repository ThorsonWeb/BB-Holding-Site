import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import TopNavBar from "@/components/TopNavBar";

export const metadata: Metadata = {
  title: "App Terms of Use",
  description: "Terms of Use and End User License Agreement for the Battle Beacon mobile app.",
  alternates: { canonical: "/app-terms" },
};

const linkClass = "text-primary underline underline-offset-2 hover:text-primary/80";

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-md border border-outline-variant/20 bg-surface-container-low p-8 md:p-10">
      <div className="mb-4 inline-flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {number}
        </span>
        <h2 className="text-2xl font-bold uppercase text-on-surface">{title}</h2>
      </div>
      <div className="space-y-4 text-on-surface-variant">{children}</div>
    </section>
  );
}

function SubPoint({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-bold text-on-surface">{title}</p>
      <p className="mt-1">{children}</p>
    </div>
  );
}

export default function AppTermsPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        <section className="px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                <span className="text-primary text-[10px] font-headline font-bold tracking-widest uppercase">
                  Legal
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-black uppercase tracking-tight text-on-surface md:text-6xl">
                Terms of Use
              </h1>
              <p className="text-lg text-on-surface-variant">
                End User License Agreement for the Battle Beacon app
              </p>
              <p className="mt-4 text-on-surface-variant">
                This End User License Agreement (&quot;Agreement&quot;) is a binding legal contract between you
                (&quot;User&quot; or &quot;you&quot;) and Tabletop Sports Ltd (Company No. 17163028), operating as Battle
                Beacon (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>
              <p className="mt-4 text-on-surface-variant">
                By downloading, installing, or using the Battle Beacon mobile application (&quot;App&quot;), you agree
                to be bound by this Agreement. If you do not agree to these terms, do not download or use
                the App.
              </p>
              <p className="mt-4 text-on-surface-variant">
                How we collect and use your personal data is explained separately in our{" "}
                <Link href="/app-privacy" className={linkClass}>
                  App Privacy Policy
                </Link>
                .
              </p>
              <p className="mt-4 text-sm text-on-surface-variant">Effective Date: November 9, 2026</p>
            </div>

            <div className="space-y-6">

              <Section number="1" title="Grant of License">
                <p>
                  We grant you a revocable, non-exclusive, non-transferable, limited right to install and
                  use the App on a mobile device owned or controlled by you, strictly in accordance with
                  the terms and conditions of this Agreement and any applicable App Store or Google Play
                  Terms of Service. If you downloaded the App from the Apple App Store, you may only use it
                  on Apple-branded devices that you own or control, as permitted by the Usage Rules in the
                  Apple Media Services Terms and Conditions.
                </p>
              </Section>

              <Section number="2" title="App Store and Google Play Dependencies">
                <SubPoint title="Acknowledgment">
                  You acknowledge that this Agreement is between you and Tabletop Sports Ltd only, and not
                  with Apple Inc. or Google LLC. We, not Apple or Google, are solely responsible for the
                  App and its content.
                </SubPoint>
                <SubPoint title="Support and Maintenance">
                  Tabletop Sports Ltd is solely responsible for providing maintenance and support for the
                  App. Apple and Google have no obligation whatsoever to furnish any maintenance or support
                  services.
                </SubPoint>
                <SubPoint title="Warranty">
                  To the extent any warranty applies to the App, Tabletop Sports Ltd, not Apple or Google,
                  is responsible for it. If the App fails to conform to an applicable warranty, you may
                  notify Apple, and Apple will refund any purchase price you paid for the App. To the
                  maximum extent permitted by law, Apple has no other warranty obligation with respect to
                  the App.
                </SubPoint>
                <SubPoint title="Product Claims">
                  Tabletop Sports Ltd, not Apple or Google, is responsible for addressing any claims by you
                  or any third party relating to the App or your use of it, including product liability
                  claims, claims that the App fails to meet any legal or regulatory requirement, and claims
                  arising under consumer protection, privacy or similar legislation.
                </SubPoint>
                <SubPoint title="Intellectual Property Claims">
                  If a third party claims that the App or your possession and use of it infringes their
                  intellectual property rights, Tabletop Sports Ltd, not Apple or Google, is solely
                  responsible for investigating, defending, settling and discharging that claim.
                </SubPoint>
                <SubPoint title="Legal Compliance">
                  You represent and warrant that you are not located in a country that is subject to a UK
                  or US Government embargo, or that has been designated by the US Government as a
                  &quot;terrorist supporting&quot; country, and that you are not listed on any UK or US
                  Government list of prohibited or restricted parties.
                </SubPoint>
                <SubPoint title="Third-Party Terms">
                  You must comply with any applicable third-party terms when using the App, such as your
                  mobile network provider&apos;s terms for data usage.
                </SubPoint>
                <SubPoint title="Third-Party Beneficiary">
                  You acknowledge and agree that Apple and its subsidiaries are third-party beneficiaries
                  of this EULA, and that Apple will have the right to enforce this EULA against you.
                </SubPoint>
              </Section>

              <Section number="3" title="Account Creation and Age Restrictions">
                <SubPoint title="Age Requirement">
                  You must be at least 18 years of age to create an account, download, and use the App. By
                  using Battle Beacon, you represent and warrant that you are 18 or older.
                </SubPoint>
                <SubPoint title="Age Verification">
                  To access specific social features (including direct messaging, public profiles, and
                  private games), you must successfully pass our age verification process via our
                  third-party provider, didit.me, to definitively prove you meet this age requirement.
                </SubPoint>
                <SubPoint title="Account Security">
                  The App uses passwordless email authentication. You are responsible for maintaining
                  access to your registered email account and for all activity that occurs under your
                  account.
                </SubPoint>
              </Section>

              <Section number="4" title="User-Generated Content and Social Conduct">
                <p>
                  Battle Beacon allows users to create profiles, send direct messages, and organize private
                  games. We maintain a zero-tolerance policy for objectionable content, harassment, and
                  abusive behavior.
                </p>
                <SubPoint title="Prohibited Conduct">
                  You agree not to use the App to harass, abuse, threaten, defame, or otherwise infringe
                  upon the rights of any other user or venue.
                </SubPoint>
                <SubPoint title="Safety Features (Blocking & Reporting)">
                  The App provides immediate user-facing tools to ensure safety. You have the ability to
                  block any user at any time, which completely prevents them from contacting you. You also
                  have the right to report an entire conversation or specific user behavior directly to our
                  moderation team.
                </SubPoint>
                <SubPoint title="Content Ownership & Marketing License">
                  You retain ownership of any content you submit (such as profile pictures, army/deck
                  lists, match results, or photos). However, by uploading or submitting content to the App,
                  you grant Tabletop Sports Ltd a worldwide, royalty-free, perpetual license to host, use,
                  display, modify, and distribute that content within the App, on the public Battle Beacon
                  website (including live matchmaking and tournament statistics tickers), and across our
                  official social media channels and external marketing platforms.
                </SubPoint>
                <SubPoint title="Enforcement">
                  We reserve the right to review, monitor, or remove any user-generated content or
                  conversations at our sole discretion following a report. Users found violating these
                  safety rules or engaging in abusive behavior will have their accounts suspended or
                  permanently banned without notice or refund.
                </SubPoint>
              </Section>

              <Section number="5" title="Real-World Meetups and Venue Rules">
                <p>
                  Battle Beacon facilitates connections for tabletop gaming at physical, third-party venues.
                </p>
                <SubPoint title="Assumption of Risk">
                  You agree that any physical meetings, events, or interactions you arrange or attend via
                  the App are at your own risk.
                </SubPoint>
                <SubPoint title="No Liability for Physical Events">
                  Tabletop Sports Ltd is a software provider. We are not responsible for the conditions of
                  third-party venues, the conduct of venue staff, or the behavior of other users at
                  physical meetups.
                </SubPoint>
                <SubPoint title="Venue Policies">
                  When attending a venue booked through Battle Beacon, you agree to abide by the individual
                  rules, policies, and terms set by that specific physical shop or venue.
                </SubPoint>
              </Section>

              <Section number="6" title="Payments, Bookings, and Venue Communications">
                <SubPoint title="Processing">
                  All payments for table bookings or events are processed securely via Stripe.
                </SubPoint>
                <SubPoint title="Refunds and Cancellations">
                  Booking cancellations and refunds are subject to the specific policies of the venue you
                  are booking with. Tabletop Sports Ltd does not hold funds and cannot unilaterally issue
                  refunds for third-party venue bookings.
                </SubPoint>
                <SubPoint title="Venue Marketing Opt-In">
                  When booking at a venue, you may be offered the option to subscribe to that venue&apos;s
                  mailing list. If you opt in, your contact details will be shared with that venue, who
                  then becomes an independent data controller. Their use of your data is subsequently
                  governed by their own privacy policy.
                </SubPoint>
              </Section>

              <Section number="7" title="Intellectual Property">
                <p>
                  All intellectual property rights in the App, including its design, codebase, branding,
                  and proprietary algorithms (excluding User-Generated Content and third-party venue
                  branding), are owned by Tabletop Sports Ltd. You may not copy, modify, reverse engineer,
                  decompile, or create derivative works from the App.
                </p>
              </Section>

              <Section number="8" title="Virtual Items, XP, and Gamification Rewards">
                <p>
                  The App may include digital rewards, such as Experience Points (&quot;XP&quot;), profile badges,
                  or other virtual items (collectively, &quot;Virtual Items&quot;) earned through App interactions,
                  such as opting into venue mailing lists.
                </p>
                <SubPoint title="No Monetary Value">
                  You acknowledge and agree that Virtual Items have no real-world cash value and cannot be
                  exchanged for fiat currency, transferred outside the App, or sold to other users.
                </SubPoint>
                <SubPoint title="Limited License">
                  You do not own the Virtual Items you earn. Instead, you are granted a limited, revocable
                  license to use them within the App.
                </SubPoint>
                <SubPoint title="Right to Modify or Revoke">
                  Tabletop Sports Ltd reserves the right to manage, modify, regulate, or eliminate Virtual
                  Items at our sole discretion, without liability to you. If your account is suspended or
                  terminated for any reason, any accumulated Virtual Items are permanently forfeited.
                </SubPoint>
              </Section>

              <Section number="9" title="Limitation of Liability and Disclaimer of Warranties">
                <div className="rounded-md border border-outline-variant/20 bg-surface-container p-6">
                  <p className="text-sm uppercase tracking-wide text-on-surface-variant">
                    THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
                    EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY UK LAW, TABLETOP SPORTS
                    LTD DISCLAIMS ALL LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
                    DAMAGES ARISING OUT OF YOUR USE OF THE APP, YOUR INABILITY TO USE THE APP, OR YOUR
                    INTERACTIONS WITH OTHER USERS OR VENUES.
                  </p>
                </div>
                <SubPoint title="What We Do Not Exclude">
                  Nothing in this Agreement excludes or limits our liability for death or personal injury
                  caused by our negligence, for fraud or fraudulent misrepresentation, or for any other
                  liability that cannot be excluded or limited under the laws of England and Wales. Nothing
                  in this Agreement affects your statutory rights as a consumer.
                </SubPoint>
              </Section>

              <Section number="10" title="Termination">
                <p>
                  We reserve the right to terminate or suspend your access to the App immediately, without
                  prior notice or liability, for any reason whatsoever, including without limitation if you
                  breach this Agreement. Upon termination, your right to use the App will cease
                  immediately.
                </p>
                <p>
                  You can stop using the App at any time. To close your account and have your data
                  deleted, use the delete account option in the App or submit a request through our{" "}
                  <Link href="/app-delete-account" className={linkClass}>
                    account deletion page
                  </Link>
                  .
                </p>
              </Section>

              <Section number="11" title="Changes to This Agreement">
                <p>
                  We may update this Agreement from time to time, for example to reflect new features or
                  changes in the law. When we make a material change, we will update the effective date
                  above and let you know in the App or by email before the change takes effect. If you keep
                  using the App after that date, you accept the updated Agreement. If you do not agree, you
                  should stop using the App and delete your account.
                </p>
              </Section>

              <Section number="12" title="Governing Law">
                <p>
                  This Agreement shall be governed by and construed in accordance with the laws of England
                  and Wales. Any disputes arising under or in connection with this Agreement shall be
                  subject to the exclusive jurisdiction of the English courts.
                </p>
              </Section>

              <Section number="13" title="Contact Information">
                <p>
                  If you have any questions or concerns regarding this Agreement, please contact us at:
                </p>
                <div className="grid gap-4 sm:grid-cols-2 mt-2">
                  <div className="rounded-md border border-outline-variant/15 bg-surface-container-high/60 p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-2">
                      General Support
                    </p>
                    <p className="text-primary font-medium">support@battle-beacon.com</p>
                  </div>
                  <div className="rounded-md border border-outline-variant/15 bg-surface-container-high/60 p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-2">
                      Registered Address
                    </p>
                    <p className="text-on-surface">
                      Tabletop Sports Ltd, 31 Potternewton Lane, Leeds, England, LS7 3LW
                    </p>
                  </div>
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
