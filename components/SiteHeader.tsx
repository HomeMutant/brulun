"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-display text-2xl tracking-wide text-primary">Brulun</span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Est. 2022
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                href={n.to}
                data-status={active ? "active" : undefined}
                className="rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground sm:text-[13px]"
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
