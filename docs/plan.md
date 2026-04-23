# 🚜 Fjärås Lantmanna — Komplett Plan v1.0

Modern, mobilvänlig sajt för Fjärås Lantmanna. Ersätter nuvarande WordPress-sajt på lantmanna.nu.

---

## 🎯 Mål

Snyggt digitalt visitkort + enkel info-sajt. Fräsch, ljus, grön profil. Mobile-first. Huvudkonvertering: **gula jordsäckarna** med hitta-hit-flöde.

---

## 🛠 Teknisk stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **Deploy**: Vercel
- **Git**: `github.com/ninjaspappa/Lantmanna` (publikt)
- **Analytics**: Plausible (GDPR-clean, ingen cookie-banner behövs för analytics)
- **Lokal path**: `/Users/bottenanna/lantmanna/`

---

## ✅ MUST-HAVE FÖR v1.0 (blocker för launch)

Dessa måste vara på plats **innan** vi går live. Skippa inga.

### 1. 301-redirects från gamla URLs
Annars tappar vi SEO-rankings som butiken byggt upp i 10+ år. Se sektion "🔀 301 Redirects" nedan.

### 2. Meta-tags & SEO grund
- Kopiera befintliga `<title>` och `<meta description>` från nuvarande sajt (se Agent 0 nedan)
- Varje sida har unik title + description
- Open Graph-tags för snygga delningar på Facebook/iMessage
- `robots.txt` (modern, se sektion nedan)
- `sitemap.xml` via `app/sitemap.ts`

### 3. Org-nr, besöksadress & e-post på kontaktsidan
Svensk konsumentlag + e-handelslag kräver detta synligt. Be Jesper om:
- Organisationsnummer
- Fullständig besöksadress (gatuadress, postnummer, ort)
- En e-postadress för kundkontakt

### 4. GDPR / Cookie-banner
Google Maps-iframe sätter cookies → måste godkännas.
- Använd [`vanilla-cookieconsent`](https://cookieconsent.orestbida.com/) eller [`react-cookie-consent`](https://www.npmjs.com/package/react-cookie-consent)
- Maps laddas inte förrän användaren godkänt
- Enkel integritetspolicy-sida: `/integritet`

### 5. Egen URL för jordsäckarna
`/jordsackar` som dedikerad sida (kan innehålla samma komponent som hero-sektionen på startsidan).
Anledning: butiken kan dela direktlänk i Facebook-inlägg → konverterar bättre.

### 6. Hero-bild optimerad med `next/image`
Alla bilder via `next/image`, hero med `priority`. Annars tankar Lighthouse-score < 70 och SEO tar stryk.

### 7. Favicon + Open Graph-bild
Be Anna/Jesper om logotyp i högupplöst (SVG helst). Generera favicon.ico, apple-touch-icon.png, og:image (1200×630).

### 8. Plausible Analytics installerat
Inte Google Analytics — Plausible är GDPR-clean och kräver ingen banner. ~9€/mån. Script i `app/layout.tsx`.

---

## 🎨 Designprofil

- **Palett**:
  - Primary: skogsgrön `#2D6A3E`
  - Accent: mossgrön `#4A8B3D`
  - Bakgrund: kräm `#FAF7F0`
  - CTA (jordsäckar): jord `#8B6F47`
  - Ljus jord: `#C9A96E`
- **Typografi**: Fraunces (display) + Inter (body) via `next/font/google`
- **Känsla**: ljus, fräsch, modern-landsbygd. Filippa K möter Granngården.
- **Bilder**: Unsplash CC0 (6–8 st), ersätts senare med egna butiksbilder

---

## 📄 Sidstruktur

```
/                    → Startsida (hero, jordsäckar, sortiment, varumärken, CTA)
/jordsackar          → Dedikerad jordsäck-sida ⭐
/om-oss              → Historia, värderingar (copy från lantmanna.nu/om-oss)
/kontakt             → Karta, telefon, adress, öppettider, org-nr, e-post
/integritet          → GDPR-policy (must-have)
```

---

## 🔀 301 Redirects — MÅSTE konfigureras

**Var lägger jag koden? → `next.config.js` i projektroten.** (Inte hos Loopia/DNS-hanteraren — DNS vet bara var domänen pekar, inte url-paths.)

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Gamla kategorisidor → närmaste nya destination
      { source: '/foder', destination: '/#sortiment', permanent: true },
      { source: '/fagelmat', destination: '/#sortiment', permanent: true },
      { source: '/sallskapsdjur', destination: '/#sortiment', permanent: true },
      { source: '/biodling', destination: '/#sortiment', permanent: true },
      { source: '/fiske', destination: '/#sortiment', permanent: true },
      { source: '/tradgard', destination: '/#sortiment', permanent: true },
      { source: '/va', destination: '/#sortiment', permanent: true },
      { source: '/farg-kemtekniskt', destination: '/#sortiment', permanent: true },
      { source: '/gasol-industrigas', destination: '/#sortiment', permanent: true },
      { source: '/arbetsklader', destination: '/#sortiment', permanent: true },
      { source: '/gardsrundan', destination: '/kontakt', permanent: true },
      // 'om-oss' behåller samma path — ingen redirect behövs
    ];
  },
};

module.exports = nextConfig;
```

**Viktigt:** `permanent: true` ger HTTP 301 (permanent). Det signalerar till Google/ChatGPT/sökmotorer att den nya URL:n har *ärvt* rankingen från den gamla.

### Gamla URL-trädet (befintliga sajten) — bekräftat från lantmanna.nu

```
/                        → Startsida
/om-oss/                 → Om Oss
/arbetsklader/           → Arbetskläder
/biodling/               → Biodling
/fiske/                  → Fiske
/foder/                  → Foder
/fagelmat/               → Fågelmat
/farg-kemtekniskt/       → Färg/Kemtekniskt
/gasol-industrigas/      → Gasol/Industrigas
/gardsrundan/            → Hemkörning
/sallskapsdjur/          → Sällskapsdjur
/tradgard/               → Trädgård
/va/                     → VA
```

Alla ovan måste ha 301 till närmaste nya URL.

---

## 🤖 Modern robots.txt — för ChatGPT, Claude, Perplexity m.fl.

Skapa `app/robots.ts` (Next.js genererar `/robots.txt` automatiskt):

```ts
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // ✅ Explicit tillåt AI-sökmotorer (de rankar sajter som tillåter dem)
      { userAgent: 'GPTBot', allow: '/' },            // OpenAI / ChatGPT
      { userAgent: 'OAI-SearchBot', allow: '/' },     // ChatGPT search
      { userAgent: 'ChatGPT-User', allow: '/' },      // ChatGPT browsing
      { userAgent: 'ClaudeBot', allow: '/' },         // Anthropic Claude
      { userAgent: 'Claude-Web', allow: '/' },        // Claude browsing
      { userAgent: 'PerplexityBot', allow: '/' },     // Perplexity
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },   // Google AI (Gemini/SGE)
      { userAgent: 'Applebot-Extended', allow: '/' }, // Apple Intelligence
      { userAgent: 'Bytespider', allow: '/' },        // TikTok AI
      { userAgent: 'CCBot', allow: '/' },             // Common Crawl (används av många LLMs)
      { userAgent: 'Amazonbot', allow: '/' },         // Amazon Alexa/AI
      { userAgent: 'Meta-ExternalAgent', allow: '/' },// Meta AI
      { userAgent: 'FacebookBot', allow: '/' },
      { userAgent: 'DuckAssistBot', allow: '/' },     // DuckDuckGo AI
      { userAgent: 'YouBot', allow: '/' },            // You.com
      { userAgent: 'cohere-ai', allow: '/' },         // Cohere
      { userAgent: 'Diffbot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },           // Bing (Copilot)
    ],
    sitemap: 'https://lantmanna.nu/sitemap.xml',
    host: 'https://lantmanna.nu',
  };
}
```

**Varför explicit allow för varje AI-bot?**
Sedan 2024 har flera sajter börjat *blockera* AI-crawlers per default. Genom att uttryckligen tillåta dem signalerar vi till sökmotorer och AI-assistenter att sajten är ok att indexera — vilket ökar chansen att Fjärås Lantmanna dyker upp när någon frågar ChatGPT "var köper jag jordsäckar i Kungsbacka?".

---

## 🔍 Meta-tags — kopiera från befintlig sajt

Agent 0 (ny, läggs till före alla andra) ska scrapa befintlig sajt och dumpa alla meta-tags till en fil som content-agent läser.

### Agent 0 — SEO-scrape-agent

```bash
# Körs först av alla, innan Agent 1
```

**Uppgifter:**
1. Scrapa följande URLs och extrahera `<title>`, `<meta name="description">`, `<meta property="og:*">` för varje:
   - https://lantmanna.nu/
   - https://lantmanna.nu/om-oss/
   - https://lantmanna.nu/arbetsklader/
   - https://lantmanna.nu/biodling/
   - https://lantmanna.nu/fiske/
   - https://lantmanna.nu/foder/
   - https://lantmanna.nu/fagelmat/
   - https://lantmanna.nu/farg-kemtekniskt/
   - https://lantmanna.nu/gasol-industrigas/
   - https://lantmanna.nu/gardsrundan/
   - https://lantmanna.nu/sallskapsdjur/
   - https://lantmanna.nu/tradgard/
   - https://lantmanna.nu/va/

2. Spara som `docs/existing-meta.json`:
```json
{
  "/": {
    "title": "...",
    "description": "...",
    "og:title": "...",
    "og:description": "...",
    "og:image": "..."
  },
  "/om-oss": { ... }
}
```

3. Använd `curl` + `grep`/`awk` eller kör ett litet Node-script:
```bash
npm install -D cheerio node-fetch
node scripts/scrape-meta.js
```

4. Content-agent använder sedan dessa metadata i `export const metadata` per sida (förbättrat & förkortat där det behövs — WordPress-titlar brukar vara långa).

---

## 📦 Uppdaterad projektstruktur

```
/Users/bottenanna/lantmanna/
├── app/
│   ├── layout.tsx               # Navbar + Footer + Plausible + cookie-banner
│   ├── page.tsx                 # Startsida
│   ├── jordsackar/page.tsx      # ⭐ Dedikerad jordsäck-URL
│   ├── om-oss/page.tsx
│   ├── kontakt/page.tsx
│   ├── integritet/page.tsx      # GDPR-policy (must-have)
│   ├── robots.ts                # Modern AI-vänlig robots.txt
│   ├── sitemap.ts               # Auto-genererad sitemap
│   └── api/                     # (tomt tills vidare)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── JordsackSection.tsx      # ⭐ Återanvänds på / och /jordsackar
│   ├── ServicesGrid.tsx
│   ├── BrandsMarquee.tsx
│   ├── CookieBanner.tsx
│   └── ShareLocationButton.tsx
├── docs/
│   └── existing-meta.json       # Scrape från Agent 0
├── lib/
│   └── openingHours.ts          # Centraliserade öppettider
├── public/
│   ├── brands/                  # Nedladdade via scripts/download-brands.sh
│   ├── images/                  # Butiksbilder (Unsplash → egna senare)
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── og-image.png             # 1200x630 för sociala delningar
├── scripts/
│   ├── download-brands.sh
│   └── scrape-meta.js
├── next.config.js               # ⭐ 301-redirects här
├── tailwind.config.ts
└── package.json
```

---

## 🤖 Uppdaterad agent-orkestrering

Ordning:

```
Agent 0 (scrape-meta) ──┐
                        │
Agent 1 (design) ──┬────┴──> Agent 2 (content) ──┐
                   │                              ├──> Agent 4 (deploy)
                   └────────> Agent 3 (jordsäck) ─┘
```

1. **Agent 0 — Scrape-agent**: hämtar meta-tags från lantmanna.nu, sparar till `docs/existing-meta.json`
2. **Agent 1 — Design**: scaffolding, färger, typografi, Navbar, Footer, shadcn, cookie-banner, Plausible
3. **Agent 2 — Content**: alla sidor inkl. `/integritet` + `/jordsackar` + kontakt med org-nr/adress/e-post, använder scraped meta från Agent 0
4. **Agent 3 — Jordsäck**: bygger `JordsackSection.tsx` + separat sida `/jordsackar`
5. **Agent 4 — Deploy**: verifierar build, git push, Vercel deploy, domänkoppling-instruktioner

---

## ⚡ Performance-checklista

- [ ] Alla bilder via `next/image`
- [ ] Hero-bild med `priority`
- [ ] Fonts via `next/font/google` (auto-optimering)
- [ ] Inga externa CSS-files
- [ ] Logotyper i marquee: `loading="lazy"` (ok med `<img>` för små filer)
- [ ] Sikt på Lighthouse > 90 på alla mätvärden

---

## 🔐 GDPR-minimum

Filer att skapa:
1. `components/CookieBanner.tsx` — dyker upp först, lagrar i localStorage
2. `app/integritet/page.tsx` — 400 ord policy: vad vi samlar (inget med Plausible), tredjeparts-tjänster (Google Maps), kontaktuppgifter
3. Google Maps-iframe laddas bara efter accept (conditional render baserat på cookie-state)

---

## 📋 Innan launch-checklista

### Teknisk
- [ ] Alla 301-redirects fungerar (testa med `curl -I lantmanna.nu/foder`)
- [ ] `robots.txt` serveras på `/robots.txt`
- [ ] `sitemap.xml` serveras på `/sitemap.xml`
- [ ] Meta-tags unika per sida
- [ ] Favicon + og:image finns
- [ ] Lighthouse > 90
- [ ] Cookie-banner fungerar
- [ ] Google Maps öppnar Apple Maps / Google Maps-app på iPhone (testa!)
- [ ] Plausible tracking verifierat

### Innehåll
- [ ] Org-nr bekräftat av Jesper
- [ ] Besöksadress bekräftad
- [ ] E-postadress bekräftad
- [ ] Jordsäckpriser (`[xx]`) ifyllda
- [ ] Exakta koordinater för Google Maps-embed

### Affärsmässigt
- [ ] Scope bekräftat mot kund (Anna/butikskontakt) skriftligt
- [ ] Vem äger domänen — butiken eller Humanji?
- [ ] Vem betalar Vercel-prenumeration om trafiken växer?
- [ ] Prislista för framtida ändringar efter launch överenskommen

### Launch
- [ ] DNS-uppdatering hos Loopia: A-record → `76.76.21.21`, CNAME www → `cname.vercel-dns.com`
- [ ] Google Search Console — verifiera ny sajt och skicka in sitemap
- [ ] Testa att alla gamla URL:er fortfarande leder rätt (301)
- [ ] Meddela Anna/butiken att det är live

---

## 🧾 Avgränsningar — v1.0 INGÅR INTE

- Ingen e-handel
- Ingen SMS-pin-funktion (skippad enligt beslut)
- Ingen Supabase eller backend
- Inga kundrecensioner
- Ingen bokningsfunktion
- Inga riktiga produktsidor (bara kategorisk översikt)
- Ingen flerspråkighet (bara svenska)

---

## 🌱 v1.1 — Nice-to-have efter launch

- Egna butiksbilder (Jesper fotar eller anlitar fotograf)
- SMS-pin-funktion om butiken vill
- Instagram-feed längst ner på startsidan
- "Veckans erbjudande"-banner som Jesper kan uppdatera via enkel CMS (Sanity eller TinaCMS)
- Kundrecensioner (Google Reviews-integration)
- Öppettidsschema som hanterar helgdagar automatiskt
