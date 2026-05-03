# Empuls Feature Page Guide

Learnings from building the Spot Awards page (`/platform/spot-awards`). Use this as the canonical reference when building any new product feature page.

---

## Stack

- Next.js 15.5+ static export (`output: "export"`) — no async server data, no `revalidate`
- React 19, TypeScript, Tailwind CSS v3, `motion/react` v12
- `'use client'` only on components using hooks — `page.tsx` is always a server component
- `images: { unoptimized: true }` — use plain `<img>` tags or `next/image`
- Path alias: `@/*` → repo root

---

## File Structure

```
app/platform/[feature]/
  page.tsx                  ← server component: metadata + imports only

components/[feature]/
  Hero.tsx
  HowItWorks.tsx
  FeatureBento.tsx
  Testimonials.tsx
  Integrations.tsx
  FAQ.tsx
  FinalCTA.tsx
```

**Always import all sections in `page.tsx`** — sections are easy to build and forget to wire up (this happened with `Challenge` and `UseCases` on Spot Awards, costing a full review cycle).

---

## Design Tokens

Never use raw hex values. Always use Tailwind tokens:

| Token | Hex | Use |
|---|---|---|
| `bg-dark-300` | #081B2D | Dark navy sections |
| `bg-light-100` | #F6F7F9 | Subtle grey sections |
| `bg-light-000` / `bg-white` | #FFFFFF | White sections |
| `text-blue-200` | #1D61F6 | Primary CTA, eyebrow labels |
| `text-dark-300` | #081B2D | Headings |
| `text-dark-100` | — | Body / secondary |
| `text-dark-000` | — | Muted / tertiary |
| `border-light-200` | — | Card borders |
| `shadow-menu` | — | Hover card shadow |

---

## Section Background Rhythm

Alternate dark/light to create visual engagement. Never two adjacent plain-white sections.

```
Hero            bg-dark-300
How It Works    bg-white or bg-light-100
Feature Bento   bg-white
Use Cases       light blue gradient (linear-gradient 135deg, #d4e3ff → #ccdaff)
Testimonials    bg-dark-300
Integrations    bg-white
FAQ             bg-light-100
Final CTA       bg-dark-300
```

---

## Dark Section Template

Copy this exactly for every `bg-dark-300` section:

```tsx
<section className="relative bg-dark-300 py-20 lg:py-28 overflow-hidden">
  <div className="dark-dot-grid absolute inset-0 pointer-events-none" />
  <div className="blob-1 absolute -top-40 left-1/4 w-[550px] h-[550px] rounded-full pointer-events-none"
    style={{ background: "radial-gradient(circle, rgba(29,97,246,0.26) 0%, transparent 65%)" }} />
  <div className="blob-2 absolute -bottom-20 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none"
    style={{ background: "radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 65%)" }} />
  <div className="relative z-10 max-w-[1280px] mx-auto px-6">
    {/* content */}
  </div>
</section>
```

`dark-dot-grid`, `blob-1/2/3` classes are defined in `app/globals.css`. Do not redefine them.

**Never place two adjacent dark sections** — they create a visible seam because each section has its own independent dot-grid and blob animations. If content logically belongs together on a dark background (e.g. a stats strip following a hero), put it inside the same `<section>` tag separated by a `border-t border-white/10` divider.

---

## Animation Pattern

```tsx
'use client'
import { motion, useReducedMotion } from 'motion/react'

const ease = [0, 0, 0.2, 1] as const
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } }
}

const reduce = useReducedMotion() // always guard — never skip this
```

- Scroll-triggered: `whileInView` + `viewport={{ once: true }}`
- Above-the-fold only: `initial` + `animate`
- Count-up stats: initialise `useState(target)` not `useState(0)` — prevents flash of zero on first render

---

## Component Rules

### Eyebrow labels
```tsx
<p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">
  Label text
</p>
```

### Section headlines
- Light section: `text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight`
- Dark section: same but `text-white`

### CTAs
- Primary: `bg-blue-200 text-white rounded-xl px-7 py-3.5 font-semibold hover:bg-blue-300`
- Secondary on dark: `border border-white/30 bg-white/5 text-white rounded-xl px-6 py-3.5`
- Secondary on light: `border border-light-200 text-dark-300 rounded-xl px-6 py-3.5`

### Cards
- Light section: `bg-white border border-light-200 rounded-2xl`
- Dark section: `bg-white/8 border border-white/12 rounded-2xl`
- Always add: `hover:shadow-menu hover:-translate-y-1 transition-all duration-200`

### Stats strips (dark bg)
```tsx
<div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
```
Stat numbers: `text-white` only — never multi-colour (no blue+orange+green together).

---

## UI Mocks

Build from divs — no external screenshots.

- Dark section mocks: `bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl`
- Light section mocks: plain white cards with `border border-light-200 shadow-sm`
- Floating chips: `style={{ animation: "float 3s ease-in-out Xs infinite alternate" }}`
- `@keyframes float` is defined per-component in a `<style jsx>` block

---

## Integrations Section

- Use logos from `public/logos/integrations/` (14 logos available: Slack, Teams, Gmail, Outlook, Google Chat, Workday, SAP SuccessFactors, BambooHR, Darwinbox, Keka, Rippling, Zoho, ADP, UKG)
- **Never include the Empuls logo in the integration grid** — it's the product being sold, not a third-party tool
- Spread logos across 3 rows for the marquee, avoid duplicates in the visible frame
- Bottom strip: label as "Channels" and "HRIS & Payroll" with small icon tiles

---

## Things That Went Wrong on Spot Awards (avoid repeating)

1. **Sections not imported in page.tsx** — `Challenge` and `UseCases` were built but never added to the page. Always check `page.tsx` imports match all built components.
2. **Adjacent dark sections create seams** — independent dot-grid animations create a visible join line. Merge into one `<section>` with a divider instead.
3. **Count-up initialising at 0** — `useState(0)` shows "0M+" before animation fires. Use `useState(target)`.
4. **SVG gradient IDs scope** — when using `linearGradient` inside SVG, use unique IDs per instance (e.g. `ab-grad-${idx}`) to avoid gradients bleeding across components.
5. **Absolute SVG painting over icon** — when layering an SVG shape behind an icon, wrap the icon in `<span className="relative z-10">` to ensure it renders above the absolute SVG.
6. **Stale `.next` cache** — after any significant component change, `rm -rf .next` before restarting dev server to avoid module-not-found runtime errors.
7. **`bg-light-000` vs `bg-white`** — both are white (#FFFFFF). On a `bg-light-100` grey section, cards should be `bg-white` to pop. Don't use `bg-light-000` for cards on grey backgrounds.

---

## Assets

```
public/logos/spot-awards/     — customer logos (Bosch, CGI, Kennametal, Luminous, Western Digital)
public/logos/integrations/    — 14 integration tool logos
public/rewards/               — product reward images (Amazon, Apple Watch, Uber, flight)
public/screenshots/product/   — product UI screenshots (14 images, 576px wide)
```

---

## Deployment

- **Netlify:** `npx netlify-cli deploy --build --prod` (linked to `empuls-websitedemo.netlify.app`)
- **Vercel:** `npx vercel --prod --yes` (project: `chinmay997s-projects/empuls-website`)
- Build output: `out/` directory (static HTML export)
- Always run `npm run build` locally to verify before deploying
