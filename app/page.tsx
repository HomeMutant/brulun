"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "@/public/hero.jpg";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Signature Brulun grilled fish over aromatic rice"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/85" />
        </div>
        <div className="relative mx-auto flex min-h-[86vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center text-primary-foreground">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.5em] text-accent"
          >
            Established 2022 · Kota Kinabalu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl"
          >
            A kitchen built on
            <span className="italic text-accent"> heritage</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg"
          >
            Established in 2022, Brulun, a combination of Brunei & Lundayeh, is a family friendly and cozy restaurant serving eastern & western cuisine. We hope you enjoy the dining experience and will always be always be happy to see you!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/menu"
              className="rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            >
              View the menu
            </Link>
            <Link
              href="/reservation"
              className="rounded-full border border-primary-foreground/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              Book a table
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="divider-ornament text-xs uppercase tracking-[0.4em]">Our story</p>
        <h2 className="mt-6 font-display text-4xl text-primary sm:text-5xl">
          Two traditions, one long table.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Brulun opened in 2022, bringing together Brunei and Lundayeh cooking alongside Western favourites, a family-friendly, cozy spot for everything from wok-fried noodles to grilled steaks.
        </p>
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[
            { to: "/menu", label: "The Menu", desc: "Signature dishes, drinks & desserts" },
            { to: "/reservation", label: "Reservations", desc: "Reserve your seat at the table" },
            { to: "/contact", label: "Find Us", desc: "Aeropod, Tanjung Aru" },
          ].map((c) => (
            <Link
              key={c.to}
              href={c.to}
              className="group rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            >
              <h3 className="font-display text-2xl text-primary">{c.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <span className="mt-4 inline-block text-xs uppercase tracking-[0.25em] text-accent transition-transform group-hover:translate-x-1">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
