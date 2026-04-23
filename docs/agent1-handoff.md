# Agent 1 → Handoff Notes

## Scaffolding strategy
Manually scaffolded (not `create-next-app`) because the project root was non-empty (docs/, scripts/, .git/, loose plan.md/brands.md). Manual scaffold guaranteed zero risk to pre-existing files.

## Versions pinned
- `next@14.2.33` (Next 14 as required by plan — NOT 15/16)
- `react@18.3.1`, `react-dom@18.3.1`
- `tailwindcss@3.4`, `tailwindcss-animate`
- `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`
- No `@next/font` — using `next/font/google` directly.

## Decisions made
1. **shadcn/ui**: did NOT run `npx shadcn init` interactively. Instead wrote `components.json` + `lib/utils.ts` (cn) manually matching shadcn New York / neutral / CSS-variables defaults. Agent 2/3 can `npx shadcn@latest add <component>` and it will drop into `components/ui/`.
2. **Button starter**: skipped (`npx shadcn add button`) — Agents 2/3 install components on-demand to avoid bloat.
3. **Tailwind colors**: design tokens (`primary`, `accent`, `cream`, `earth`, `earth-light`) added as named colors alongside shadcn's CSS-var system. Use `bg-primary`, `text-earth`, `bg-cream`, etc.
4. **Fonts**: Inter (body, `--font-inter`) + Fraunces (display, `--font-fraunces`) via `next/font/google`. Tailwind `font-sans` = Inter, `font-display` = Fraunces. Headings get Fraunces via a global `@layer base h1..h6` rule in `app/globals.css`.
5. **Plausible**: loaded via `next/script` with `strategy="afterInteractive"`, `data-domain="lantmanna.nu"`. Unconditional — Plausible is cookieless, GDPR-clean.
6. **CookieBanner**: localStorage key `lantmanna-cookie-consent` ∈ `"accepted" | "declined"`. Exports `useCookieConsent()` hook that reacts to both cross-tab `storage` events and same-tab `lantmanna:consent-change` events. Agent 2: conditionally render Maps iframe when hook returns `"accepted"`.
7. **ShareLocationButton**: minimal stub only (navigator.share → clipboard fallback). Agent 3 will expand and wire into `JordsackSection`.

## TODOs embedded in code (grep for "TODO")
- `app/layout.tsx` — og:image 1200×630 still missing (Agent 2/4)
- `components/Footer.tsx` — contact placeholders (adress, telefon, e-post)
- `app/page.tsx`, `app/jordsackar/page.tsx`, `app/om-oss/page.tsx`, `app/kontakt/page.tsx`, `app/integritet/page.tsx` — all placeholders
- `lib/openingHours.ts` — hours are guesses, confirm with butiken

## Files created
```
app/layout.tsx, app/page.tsx, app/globals.css
app/jordsackar/page.tsx, app/om-oss/page.tsx, app/kontakt/page.tsx, app/integritet/page.tsx
app/robots.ts, app/sitemap.ts
components/Navbar.tsx, components/Footer.tsx, components/CookieBanner.tsx, components/ShareLocationButton.tsx
lib/utils.ts, lib/openingHours.ts
next.config.js (with all 11 301-redirects + image remotePatterns)
tailwind.config.ts, postcss.config.js, tsconfig.json, components.json
package.json, .gitignore, .eslintrc.json, next-env.d.ts
public/brands/.gitkeep, public/images/.gitkeep
```

## What Agents 2 & 3 should watch out for
- **Do NOT change Next version.** Pinned to 14.2.33. `npm run build` must continue to pass.
- **No `src/` dir.** Everything at root: `app/`, `components/`, `lib/`.
- **Use the token classes** (`bg-cream`, `bg-primary`, `text-earth`) rather than arbitrary hex values — they're wired in `tailwind.config.ts`.
- **Headings auto-inherit Fraunces** via the base layer. Don't add `font-display` to every `<h1>` unless you want to be explicit.
- **Footer / Navbar** already render around every page via `app/layout.tsx`. Page components should NOT re-render them.
- **Maps iframe**: gate behind `useCookieConsent() === 'accepted'` — GDPR requirement.
- **Hero image**: must use `next/image` with `priority` per plan.md performance checklist.
- **remotePatterns** already allow `images.unsplash.com`, `plus.unsplash.com`, `lantmanna.nu`. Add more in `next.config.js` if needed.
- **Redirects**: `/foder`, `/fagelmat`, `/sallskapsdjur`, `/biodling`, `/fiske`, `/tradgard`, `/va`, `/farg-kemtekniskt`, `/gasol-industrigas`, `/arbetsklader` all → `/#sortiment`. That anchor must exist on the home page once Agent 2 builds the sortiment section. `/gardsrundan` → `/kontakt`.

## Build status
`npm run build` — PASSES. 10 routes generated, all static.
