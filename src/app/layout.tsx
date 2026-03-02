import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skdesignstudio.info"),
  title: {
    template: "%s | SK Design Studio",
    default: "SK Design Studio — Interior designers & architects in Hyderabad",
  },
  description:
    "Full-stack interior design studio delivering thoughtful homes, workplaces, and commercial spaces across Hyderabad & India.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SK Design Studio — Hyderabad interior designers & architects",
    description:
      "False ceilings, lighting design, turnkey builds, landscaping, and bespoke interiors built around the way you live.",
    url: "https://skdesignstudio.info",
    siteName: "SK Design Studio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hanken.variable} bg-slate-950 text-slate-100 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
