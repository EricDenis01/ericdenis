import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ericdenis.com"),
  title: {
    default: "Eric Denis — Product Leader · AI, Music & Technology",
    template: "%s · Eric Denis",
  },
  description:
    "Senior product leader at the intersection of AI, music rights, and builder culture. 10+ years building SaaS for music monitoring, royalties, and content recognition.",
  keywords: [
    "Eric Denis",
    "Product Manager",
    "AI",
    "Music Tech",
    "Music Rights",
    "Royalties",
    "Content Recognition",
    "Barcelona",
    "Senior PM",
  ],
  authors: [{ name: "Eric Denis", url: "https://ericdenis.com" }],
  creator: "Eric Denis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ericdenis.com",
    siteName: "Eric Denis",
    title: "Eric Denis — Product Leader · AI, Music & Technology",
    description:
      "Senior product leader at the intersection of AI, music rights, and builder culture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Denis — Product Leader · AI, Music & Technology",
    description:
      "Senior product leader at the intersection of AI, music rights, and builder culture.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-body antialiased">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
