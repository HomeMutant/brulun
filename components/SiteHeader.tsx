"use client";

import { useState, useEffect } from "react"; // Added useEffect
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // This effect runs only on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If we haven't mounted yet (server side), 
  // we render a shell that matches what the server expects.
  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-display text-2xl tracking-wide text-primary">Brulun</span>
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
              Est. 2022
            </span>
          </Link>
          {/* We render the desktop nav even on server because it doesn't change based on state */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                className="rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground sm:text-[13px]"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-display text-2xl tracking-wide text-primary">Brulun</span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Est. 2022
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border/70 bg-background px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {nav.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  href={n.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium uppercase tracking-[0.18em] ${
                    active ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
