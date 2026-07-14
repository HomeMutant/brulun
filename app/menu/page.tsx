"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { menuData, type MenuItem, type Variation } from "@/lib/menuData";

const toneClass: Record<NonNullable<Variation["tone"]>, string> = {
  green: "bg-primary/10 text-primary border-primary/30",
  navy: "bg-secondary/10 text-secondary border-secondary/30",
  ochre: "bg-accent/20 text-accent-foreground border-accent/50",
  earth: "bg-earth/10 text-earth border-earth/30",
};

const sectionAccent: Record<string, string> = {
  asian: "text-primary",
  western: "text-secondary",
  drinks: "text-secondary",
  addons: "text-earth",
};

export default function MenuPage() {
  const [active, setActive] = useState<{ item: MenuItem; key: string } | null>(null);
  const sections = useMemo(() => menuData, []);

  return (
    <div className="relative">
      {/* Sticky category nav */}
      <div className="sticky top-[65px] z-30 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl overflow-x-auto px-4 py-3">
          <ul className="flex min-w-max gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="rounded-full border border-border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-accent hover:text-primary"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pb-6 pt-16 text-center">
        <p className="divider-ornament text-xs uppercase tracking-[0.4em]">The Menu</p>
        <h1 className="mt-6 font-display text-5xl text-primary sm:text-6xl">
          Cooked slow, served warm.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Hover a dish on desktop, or tap on mobile, to see the plate.
        </p>
      </section>

      {/* Categories */}
      <div className="mx-auto max-w-5xl space-y-16 px-6 pb-24">
        {sections.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-40">
            <div className="mb-6 text-center">
              {cat.subtitle && (
                <p className={`text-[11px] uppercase tracking-[0.35em] ${sectionAccent[cat.section]}`}>
                  {cat.subtitle}
                </p>
              )}
              <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
                {cat.title}
              </h2>
              <div className="mx-auto mt-3 h-px w-16 bg-accent/70" />
            </div>

            <ul className="grid grid-cols-1 gap-x-12 gap-y-1 md:grid-cols-2">
              {cat.items.map((item) => {
                const key = `${cat.id}-${item.code}`;
                const isActive = active?.key === key;
                return (
                  <li key={key} className="relative">
                    <button
                      type="button"
                      onMouseEnter={() => setActive({ item, key })}
                      onMouseLeave={() =>
                        setActive((cur) => (cur?.key === key ? null : cur))
                      }
                      onClick={() =>
                        setActive((cur) => (cur?.key === key ? null : { item, key }))
                      }
                      className={`group flex w-full items-baseline gap-3 rounded-lg px-2 py-3 text-left transition-colors hover:bg-muted/60 ${
                        isActive ? "bg-muted/60" : ""
                      }`}
                    >
                      <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                        {item.code}
                      </span>
                      <span className="font-display text-lg text-foreground">{item.name}</span>
                      <span className="mx-2 flex-1 border-b border-dotted border-border/80" />
                      <span className="tabular-nums font-medium text-foreground">
                        RM {item.price.toFixed(2)}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-border bg-card p-3 shadow-2xl"
                        >
                          {item.image && (
                            <div className="overflow-hidden rounded-xl">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={item.image}
                                alt={item.name}
                                loading="lazy"
                                className="h-40 w-full object-cover"
                              />
                            </div>
                          )}
                          <div className="mt-3 flex items-baseline justify-between gap-2">
                            <p className="font-display text-base text-primary">{item.name}</p>
                            <p className="tabular-nums text-sm font-semibold text-accent">
                              RM {item.price.toFixed(2)}
                            </p>
                          </div>
                          {item.variations && item.variations.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {item.variations.map((v) => (
                                <span
                                  key={v.label}
                                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest ${
                                    v.tone
                                      ? toneClass[v.tone]
                                      : "border-border bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {v.label}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
