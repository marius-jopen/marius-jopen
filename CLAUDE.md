# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — run ESLint (flat config with Next.js core-web-vitals + TypeScript rules)

## Architecture

Personal portfolio site for Marius Jopen. Next.js 16 App Router with React 19, Tailwind CSS v4, and TypeScript.

**Content-driven architecture:** All website copy lives in `src/lib/content.ts`. Content changes should only touch this file — page components consume exported constants (`hero`, `about`, `projects`, `clients`, `contact`, `news`, `cta`, `footer`, `siteConfig`).

**Pages:**
- `src/app/page.tsx` — main landing page with inline `Container`, `Section`, and `SectionHeading` helper components
- `src/app/imprint/page.tsx` — legal imprint page

**Client components:** `src/components/EmailLink.tsx` and `src/components/EmailButton.tsx` are `"use client"` components that handle email interactions — on mobile they open mailto, on desktop they copy the email to clipboard.

## Style Conventions

- Light-only design (dark mode explicitly disabled in `globals.css`)
- Inter font via `next/font/google`
- Base text size is `text-lg` (set on `body`)
- Links use `hover:opacity-60` transition; buttons (`.btn`) override this to keep full opacity
- Path alias: `@/*` maps to `./src/*`
