import { operatingHours } from "@/lib/menuData";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">Brulun</h3>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
            © 2026 Brulun. Established 2022. Serving authentic Eastern &amp; Western flavors.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-accent">Visit</h4>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
            Aeropod, Tanjung Aru
            <br />
            88300 Kota Kinabalu, Sabah
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-accent">Hours</h4>
          <ul className="mt-3 space-y-1 text-sm text-primary-foreground/85">
            {operatingHours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="tabular-nums">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
