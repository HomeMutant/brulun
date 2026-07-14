"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <div className="text-center">
        <p className="divider-ornament text-xs uppercase tracking-[0.4em]">Reservations</p>
        <h1 className="mt-6 font-display text-4xl text-primary sm:text-5xl">Book a table</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          We hold your table for 15 minutes past your reservation time.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10"
      >
        {submitted ? (
          <div className="py-8 text-center">
            <h2 className="font-display text-2xl text-primary">Terima kasih!</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We've received your request and will confirm shortly via WhatsApp.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-full border border-input px-5 py-2 text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              New reservation
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <Field label="Full name">
              <input required type="text" className={inputCls} placeholder="Your name" />
            </Field>
            <Field label="Phone number">
              <input required type="tel" className={inputCls} placeholder="+60 12-345 6789" />
            </Field>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Date">
                <input required type="date" className={inputCls} />
              </Field>
              <Field label="Time">
                <input required type="time" className={inputCls} />
              </Field>
            </div>
            <Field label="Guests">
              <select required className={inputCls} defaultValue="">
                <option value="" disabled>
                  Select party size
                </option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
                <option value="9+">9 or more</option>
              </select>
            </Field>
            <Field label="Special requests">
              <textarea
                rows={4}
                className={inputCls}
                placeholder="Dietary notes, celebrations, seating preference…"
              />
            </Field>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Request reservation
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
