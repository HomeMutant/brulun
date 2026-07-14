import type { Metadata } from "next";
import { Instagram, Facebook, MessageCircle, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact · Brulun — Aeropod, Tanjung Aru",
  description:
    "Find Brulun in Aeropod, Tanjung Aru, Kota Kinabalu. Connect on Instagram, Facebook, or WhatsApp.",
};

const socials = [
  { href: "https://instagram.com/brulun", label: "Instagram", Icon: Instagram },
  { href: "https://facebook.com/brulun", label: "Facebook", Icon: Facebook },
  { href: "https://wa.me/60000000000", label: "WhatsApp", Icon: MessageCircle },
];

export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center">
        <p className="divider-ornament text-xs uppercase tracking-[0.4em]">Find us</p>
        <h1 className="mt-6 font-display text-4xl text-primary sm:text-5xl">
          Come sit with us.
        </h1>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h2 className="font-display text-2xl text-primary">Brulun</h2>
          <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            Aeropod, Tanjung Aru, 88300 Kota Kinabalu, Sabah
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 shrink-0 text-accent" />
            +60 88-000 000
          </p>

          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Say hello
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <iframe
            title="Brulun on Google Maps"
            src="https://www.google.com/maps?q=Aeropod+Tanjung+Aru+Kota+Kinabalu&output=embed"
            className="h-full min-h-[320px] w-full"
            style={{ filter: "sepia(0.15) saturate(0.9) hue-rotate(-10deg)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
