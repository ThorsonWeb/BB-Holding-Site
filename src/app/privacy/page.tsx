import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import TopNavBar from "@/components/TopNavBar";

const servicesAndGoodsItems = [
  "Names and contact details",
  "Purchase or account history",
  "Account information",
  "Website user information (including user journeys and cookie tracking)",
  "Photographs or video recordings",
  "Information relating to compliments or complaints",
  "Information relating to sponsorship",
];

const customerAccountsItems = [
  "Names and contact details",
  "Purchase history",
  "Account information, including registration details",
  "Marketing preferences",
];

const marketingItems = [
  "Names and contact details",
  "Location data",
  "Recorded images, such as photos or videos",
];

const researchItems = [
  "Names and contact details",
  "Location data",
  "Recorded images, such as photos or videos",
];

const complaintsItems = [
  "Names and contact details",
  "Account information",
  "Purchase or service history",
  "Customer or client accounts and records",
  "Correspondence",
];

const rightsItems = [
  "Your right of access - You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions which means you may not receive all the information you ask for. Read more about the right of access.",
  "Your right to rectification - You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete. Read more about the right to rectification.",
  "Your right to erasure - You have the right to ask us to delete your personal information. Read more about the right to erasure.",
  "Your right to restriction of processing - You have the right to ask us to limit how we can use your personal information. Read more about the right to restriction of processing.",
  "Your right to object to processing - You have the right to object to the processing of your personal data. Read more about the right to object to processing.",
  "Your right to data portability - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you. Read more about the right to data portability.",
  "Your right to withdraw consent - When we use consent as our lawful basis you have the right to withdraw your consent at any time. Read more about the right to withdraw consent.",
];

const provideServicesBases = [
  "Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.",
  "Legitimate interests - we’re collecting or using your information because it benefits you, our organisation or someone else, without causing an undue risk of harm to anyone. All of your data protection rights may apply, except the right to portability. Our legitimate interests are:",
  "For more information on our use of legitimate interests as a lawful basis you can contact us using the contact details set out above.",
];

const accountBases = [
  "Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.",
  "Contract - we have to collect or use the information so we can enter into or carry out a contract with you. All of your data protection rights may apply except the right to object.",
  "Legitimate interests - we’re collecting or using your information because it benefits you, our organisation or someone else, without causing an undue risk of harm to anyone. All of your data protection rights may apply, except the right to portability. Our legitimate interests are:",
  "For more information on our use of legitimate interests as a lawful basis you can contact us using the contact details set out above.",
];

const marketingBases = [
  "Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.",
  "Legitimate interests - we’re collecting or using your information because it benefits you, our organisation or someone else, without causing an undue risk of harm to anyone. All of your data protection rights may apply, except the right to portability. Our legitimate interests are:",
  "For more information on our use of legitimate interests as a lawful basis you can contact us using the contact details set out above.",
];

const researchBases = [
  "Legitimate interests - we’re collecting or using your information because it benefits you, our organisation or someone else, without causing an undue risk of harm to anyone. All of your data protection rights may apply, except the right to portability. Our legitimate interests are:",
  "For more information on our use of legitimate interests as a lawful basis you can contact us using the contact details set out above.",
];

const queryBases = [
  "Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.",
  "Legal obligation - we have to collect or use your information so we can comply with the law. All of your data protection rights may apply, except the right to erasure, the right to object and the right to data portability.",
];

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

export default function PrivacyPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow pt-16 md:pt-20">
        <section className="px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                <span className="text-primary text-[10px] font-headline font-bold tracking-widest uppercase">
                  Privacy Notice
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-black uppercase tracking-tight text-on-surface md:text-6xl">
                Battle Beacon Customer Privacy Notice
              </h1>
              <p className="text-lg text-on-surface-variant">
                Registered name: Tabletop Sports Ltd
              </p>
              <p className="mt-4 text-on-surface-variant">
                We are the controller of your personal data. For more information on controllers and their responsibilities please see guidance on data protection principles, definitions, and key terms.
              </p>
              <p className="mt-4 text-on-surface-variant">
                This privacy notice tells you what to expect us to do with your personal information.
              </p>
              <p className="mt-4 text-sm text-on-surface-variant">Last updated: 5 May 2026</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <section className="rounded-2xl border border-outline-variant/20 bg-surface-container p-8">
                <h2 className="mb-4 text-2xl font-bold uppercase text-on-surface">Contact Details</h2>
                <div className="space-y-3 text-on-surface-variant">
                  <p>Email</p>
                  <p className="text-primary">tom@battle-beacon.com</p>
                </div>
              </section>

              <section className="rounded-2xl border border-outline-variant/20 bg-surface-container p-8">
                <h2 className="mb-4 text-2xl font-bold uppercase text-on-surface">Contents</h2>
                <PolicyList
                  items={[
                    "Contact details",
                    "What information we collect, use, and why",
                    "Lawful bases and data protection rights",
                    "Where we get personal information from",
                    "How long we keep information",
                    "Who we share information with",
                    "How to complain",
                  ]}
                />
              </section>
            </div>

            <div className="mt-12 space-y-10">
              <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-8 md:p-10">
                <h2 className="mb-8 text-3xl font-bold uppercase text-on-surface">
                  What Information We Collect, Use, and Why
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">
                      To provide services and goods, including delivery
                    </h3>
                    <PolicyList items={servicesAndGoodsItems} />
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">
                      For the operation of customer accounts and guarantees
                    </h3>
                    <PolicyList items={customerAccountsItems} />
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">
                      For service updates or marketing purposes
                    </h3>
                    <PolicyList items={marketingItems} />
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">
                      For research or archiving purposes
                    </h3>
                    <PolicyList items={researchItems} />
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">
                      For dealing with queries, complaints or claims
                    </h3>
                    <PolicyList items={complaintsItems} />
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-8 md:p-10">
                <h2 className="mb-6 text-3xl font-bold uppercase text-on-surface">
                  Lawful Bases and Data Protection Rights
                </h2>
                <p className="mb-4 text-on-surface-variant">
                  Under UK data protection law, we must have a lawful basis for collecting and using your personal information. There is a list of possible lawful bases in the UK GDPR. You can find out more about lawful bases on the ICO&apos;s website.
                </p>
                <p className="mb-6 text-on-surface-variant">
                  Which lawful basis we rely on may affect your data protection rights which are set out in brief below. You can find out more about your data protection rights and the exemptions which may apply on the ICO&apos;s website:
                </p>
                <PolicyList items={rightsItems} />
                <p className="mt-6 text-on-surface-variant">
                  If you make a request, we must respond to you without undue delay and in any event within one month.
                </p>
                <p className="mt-4 text-on-surface-variant">
                  To make a data protection rights request, please contact us using the contact details at the top of this privacy notice.
                </p>
              </section>

              <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-8 md:p-10">
                <h2 className="mb-8 text-3xl font-bold uppercase text-on-surface">
                  Our Lawful Bases for the Collection and Use of Your Data
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">
                      To provide services and goods
                    </h3>
                    <PolicyList items={provideServicesBases} />
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">
                      For the operation of customer accounts and guarantees
                    </h3>
                    <PolicyList items={accountBases} />
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">
                      For service updates or marketing purposes
                    </h3>
                    <PolicyList items={marketingBases} />
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">
                      For research or archiving purposes
                    </h3>
                    <PolicyList items={researchBases} />
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">
                      For dealing with queries, complaints or claims
                    </h3>
                    <PolicyList items={queryBases} />
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-8 md:p-10">
                <h2 className="mb-4 text-3xl font-bold uppercase text-on-surface">
                  Where We Get Personal Information From
                </h2>
                <PolicyList
                  items={[
                    "Directly from you",
                    "Publicly available sources",
                    "Third parties: gaming stores, or other customers that may upload or include customer details to their own accounts, of which we will have access to for the purposes of marketing, legitimate interest, core function of our service",
                  ]}
                />
              </section>

              <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-8 md:p-10">
                <h2 className="mb-4 text-3xl font-bold uppercase text-on-surface">
                  How Long We Keep Information
                </h2>
                <div className="space-y-4 text-on-surface-variant">
                  <p>We keep personal information for 24 months after a user&apos;s last sign in.</p>
                </div>
              </section>

              <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-8 md:p-10">
                <h2 className="mb-6 text-3xl font-bold uppercase text-on-surface">
                  Who We Share Information With
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">Data Processors</h3>
                    <div className="space-y-5 text-on-surface-variant">
                      <div>
                        <p className="font-bold text-on-surface">Stripe</p>
                        <p>This data processor does the following activities for us: payment processer for taking payments from</p>
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">Mailgun</p>
                        <p>This data processor does the following activities for us: sending emails</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold uppercase text-primary">
                      Others We Share Personal Information With
                    </h3>
                    <PolicyList
                      items={[
                        "Publicly on our website, social media or other marketing and information media",
                        "Suppliers and service providers",
                      ]}
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-8 md:p-10">
                <h2 className="mb-6 text-3xl font-bold uppercase text-on-surface">How to Complain</h2>
                <div className="space-y-4 text-on-surface-variant">
                  <p>
                    If you have any concerns about our use of your personal data, you can make a complaint to us using the contact details at the top of this privacy notice.
                  </p>
                  <p>
                    If you remain unhappy with how we&apos;ve used your data after raising a complaint with us, you can also complain to the ICO.
                  </p>
                  <div className="rounded-xl border border-outline-variant/20 bg-surface-container p-6">
                    <p className="font-bold text-on-surface">Information Commissioner&apos;s Office</p>
                    <p>Wycliffe House</p>
                    <p>Water Lane</p>
                    <p>Wilmslow</p>
                    <p>Cheshire</p>
                    <p>SK9 5AF</p>
                    <p className="mt-4">Helpline number: 0303 123 1113</p>
                    <p className="mt-2">Website: https://www.ico.org.uk/make-a-complaint</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
