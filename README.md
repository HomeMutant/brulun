# Brulun — Next.js

Same site as the TanStack Start version, ported to Next.js 15 (App Router) + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — App Router routes (`/`, `/menu`, `/reservation`, `/contact`)
- `app/layout.tsx` — root layout with fonts, header, footer, metadata
- `app/globals.css` — design system (Brulun palette, Playfair + Montserrat)
- `components/SiteHeader.tsx`, `SiteFooter.tsx`
- `lib/menuData.ts` — full menu JSON schema
- `public/hero.jpg` — hero image
