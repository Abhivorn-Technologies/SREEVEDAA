import type { Metadata } from "next";
import { Hanken_Grotesk, Playfair_Display } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

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
  metadataBase: new URL("https://sreevedaa.com"),
  title: {
    template: "%s | Sreeveda",
    default: "Sreeveda – Interior designers & architects in Hyderabad",
  },
  description:
    "Full-stack interior design studio delivering thoughtful homes, workplaces, and commercial spaces across Hyderabad & India.",
  icons: {
    icon: "/images/favicon_letterboxed.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sreevedaa.com",
    title: "Sreeveda",
    description: "Full-stack interior design studio delivering thoughtful homes, workplaces, and commercial spaces.",
    siteName: "Sreeveda",
    images: [
      {
        url: "/images/og-image.jpg", // We'll add this placeholder
        width: 1200,
        height: 630,
        alt: "Sreeveda",
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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
