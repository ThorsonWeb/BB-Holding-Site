import type { Metadata } from "next";
import { Audiowide, Roboto, Anonymous_Pro } from "next/font/google";
import "./globals.css";

const audiowide = Audiowide({
  variable: "--font-audiowide",
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const anonymousPro = Anonymous_Pro({
  variable: "--font-anonymous-pro",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const SITE_URL = "https://battle-beacon.com";
const SITE_NAME = "Battle Beacon";
const SITE_DESCRIPTION =
  "Battle Beacon helps tabletop players find a game, book the table and track their results. NorthMark CRM helps venues fill tables, run events and bring players back.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Find Games, Book Tables, Grow Your Venue`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Find Games, Book Tables, Grow Your Venue`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Find Games, Book Tables, Grow Your Venue`,
    description: SITE_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/bb-logo.jpeg`,
  legalName: "TableTop Sports Ltd",
  email: "support@battle-beacon.com",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${audiowide.variable} ${roboto.variable} ${anonymousPro.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`font-body bg-background text-on-surface selection:bg-primary selection:text-on-primary antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
