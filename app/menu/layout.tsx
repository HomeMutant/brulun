import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu · Brulun — Asian fusion, curries & Western classics",
  description:
    "Explore Brulun's full menu: noodles, rice, ikan bawal, homemade curry, soups, Western best sellers, and a full drinks list.",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
