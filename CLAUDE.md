# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Commands

```bash
npm run dev       # local dev server (localhost:3000)
npm run build     # static export → out/
npm run lint      # Next.js ESLint
```

No test suite yet.

---

## Architecture

**Stack**: Next.js 15.3.1 · React 19 · TypeScript · Tailwind CSS v3.4 · Netlify

**Output mode**: `output: "export"` (fully static, `out/` dir). This means:
- No server components that do async data fetching at request time
- No `revalidate` or `generateStaticParams` needed until pages are added
- `images: { unoptimized: true }` — `next/image` works but skips optimization
- All pages generate as static HTML at build time

**Path alias**: `@/*` maps to the repo root.

---

## Design system

The entire color palette is defined in `tailwind.config.ts` — never use raw hex values in JSX. All semantic colors use Tailwind class names:

| Scale | Purpose |
|---|---|
| `blue-000/100/200/300` | Primary blue ramp (CTA, active states, brand accent) |
| `dark-000/100/200/300` | Text and border ramp (body, secondary, headings) |
| `light-000/100/200/300` | Surface ramp (white, subtle bg, borders) |
| `orange-000/100/200/300` | Xoxoday accent (celebratory, notification cards) |
| `green-000/100/200/300` | Success / positive states |

Custom shadows: `shadow-nav` (scrolled header), `shadow-menu` (dropdowns).
Custom animation: `animate-fade-in-down` (mega menus, dropdowns).
Font: Inter via `@import` in `globals.css` (should be migrated to `next/font/google`).

---

## Component overview

All components live flat in `components/` — no subdirectories yet.

**`Navbar.tsx`** (`'use client'`) — the main orchestrator. Manages scroll state, active mega menu, and mobile drawer open/close. Renders `ProductSwitcher`, `PlatformMenu`, and `MobileNav`. The `isDark` prop is `true` when floating over the dark hero (before scroll); passes down to control light/dark variants of logos and button styles.

**`ProductSwitcher.tsx`** (`'use client'`) — Xoxoday brand dropdown at the top-left. Switches between empuls / plum / compass. Logos served from `public/logos/` as `<img>` tags (not `next/image`).

**`PlatformMenu.tsx`** (`'use client'`) — two-panel mega menu. Left sidebar lists `CATEGORIES`; clicking a category reveals its items in a 2-col grid on the right. Footer row shows `PLATFORM_TOOLS`. All data sourced from `lib/nav-data.ts`.

**`MobileNav.tsx`** (`'use client'`) — right-side drawer for mobile. Mirrors desktop nav logic using accordion pattern for Platform categories.

**`Hero.tsx`** (`'use client'`) — full-viewport dark hero. Animated dot-grid via `<canvas>` + `requestAnimationFrame`. Floating UI cards use inline `@keyframes float`. Stats row and trusted-by logos hardcoded.

**`lib/nav-data.ts`** — single source of truth for all navigation content: 9 `CATEGORIES` (each with `overview` + `items`) and 3 `PLATFORM_TOOLS`.

---

## Current state (early build)

Only the homepage exists (`app/page.tsx`). The Platform mega menu is fully built; Solutions and Resources menus are stubs ("coming soon"). No additional routes have been added yet.

**Known gaps vs. CLAUDE-MASTER rules** (fix as you work in these areas):
- `globals.css` uses `@import` for Google Fonts — should use `next/font/google`
- `globals.css` has no `:root {}` design token block
- `<img>` tags used throughout components instead of `next/image`
- No `eslint-plugin-xoxoday-arch`, no Husky hooks
- `tailwind.config.ts` does not yet have the CLAUDE-MASTER brand token extensions (`primary`, `secondary`, `accent`, etc. mapped to CSS vars)
- `app/page.tsx` homepage `page.tsx` has no per-page metadata (`metadata` is only in `layout.tsx`)
