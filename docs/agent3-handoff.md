# Agent 3 → Handoff Notes

## Files delivered
- `components/JordsackSection.tsx` — server component, variant-driven (`compact` | `full`, default `full`). Imports client `ShareLocationButton`. Bold earth-brown (#8B6F47) background with cream accents, radial-dot texture overlay, Fraunces display headline.
- `components/ShareLocationButton.tsx` — full client upgrade. Web Share API when available, clipboard fallback with 2s "Länken kopierad!" state (useState + useRef timeout cleanup), `document.execCommand('copy')` fallback, `alert()` last-resort. Outline-style button, accepts `className` override, aria-label + focus ring + `aria-live` polite status.
- `app/jordsackar/page.tsx` — renders `<JordsackSection variant="full" />` + a "Ofta frågat" FAQ with 5 items using native `<details>/<summary>`. Metadata includes openGraph with explicit type/url.

## Design decisions
- **Compact variant**: drops the full 3-step flow in favour of an inline icon row (MapPin/Package/CreditCard), tighter vertical padding, and adds a "Läs mer om jordsäckarna" link pointing to `/jordsackar`. Both variants render all 3 pricing cards + CTAs per spec.
- **Background**: chose brand-earth (#8B6F47) over cream — section visibly stands apart from the rest of the home page. Used existing `bg-earth` / `text-earth-foreground` tokens; no new colors.
- **ShareLocationButton**: decoupled from any specific color via `className` prop. Default look uses earth tokens; inside `JordsackSection` it's overridden to cream-on-earth. SSR-safe — all `navigator`/`document`/`window` access is gated inside handlers or `useEffect`.
- **Image**: using `https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e` (soil/gardening) — already allowed in `next.config.js` remotePatterns.

## TODOs embedded in code (grep for "TODO")
- `components/JordsackSection.tsx`:
  - `{/* TODO: Jesper — halvpall-pris */}` — replace `[xx] kr`
  - `{/* TODO: Jesper — helpall-pris */}` — replace `[xx] kr`
  - `// TODO: Jesper — exakt gatuadress till Fjärås Stationsväg` — street number in step 1 copy

## Build
`npm run build` — PASSES. `/jordsackar` static, 6.63 kB page / 110 kB First Load JS. Only pre-existing warning is Agent 2's `<img>` in `BrandsMarquee.tsx` (not my file).

## For Agent 2
- `JordsackSection` exports default. Expected import in `app/page.tsx`:
  ```tsx
  import JordsackSection from '@/components/JordsackSection';
  // ...
  <JordsackSection variant="compact" />
  ```
- Anchor `#jordsackar` is set on the section element, so `/#jordsackar` links will scroll correctly.
