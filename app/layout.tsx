import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brulun · Artisanal Eastern & Western Kitchen — Kota Kinabalu",
  description:
    "Brulun is a family-run kitchen in Aeropod, Tanjung Aru serving heritage Asian fusion, curries, and Western classics. Established 2022.",
  authors: [{ name: "Brulun" }],
  openGraph: {
    title: "Brulun · Artisanal Eastern & Western Kitchen",
    description:
      "Heritage Asian fusion, curries, and Western classics in Kota Kinabalu. Book a table at Brulun.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
