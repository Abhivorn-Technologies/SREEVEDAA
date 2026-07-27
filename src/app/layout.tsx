import type { Metadata } from "next";
import { Hanken_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skdesignstudio.info"),
  title: {
    template: "%s | SK Design Studio",
    default: "SK Design Studio – Interior designers & architects in Hyderabad",
  },
  description:
    "Full-stack interior design studio delivering thoughtful homes, workplaces, and commercial spaces across Hyderabad & India.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://skdesignstudio.info",
    title: "SK Design Studio",
    description: "Full-stack interior design studio delivering thoughtful homes, workplaces, and commercial spaces.",
    siteName: "SK Design Studio",
    images: [
      {
        url: "/images/og-image.jpg", // We'll add this placeholder
        width: 1200,
        height: 630,
        alt: "SK Design Studio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${hanken.variable} ${playfair.variable} font-sans antialiased text-slate-800 bg-white`}
      >
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
