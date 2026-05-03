import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MouseSpotlight from "./components/MouseSpotlight";
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
    default: "Eric Denis — AI-Augmented Senior PM",
    template: "%s · Eric Denis",
  },
  description:
    "AI-Augmented Senior PM. Ten years of SaaS, with a music-tech specialism. 360° view from rights bodies and distributors to the artists, labels, and festivals on the other side.",
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
    title: "Eric Denis — AI-Augmented Senior PM",
    description:
      "Ten years of SaaS with a music-tech specialism. 360° view from the deep tech to the stage.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Denis — AI-Augmented Senior PM",
    description:
      "Ten years of SaaS with a music-tech specialism. 360° view from the deep tech to the stage.",
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
        <MouseSpotlight />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
