import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserve a table · Brulun",
  description:
    "Book your seat at Brulun — Aeropod, Tanjung Aru. Choose your date, time and party size.",
};

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
