# Fjärås Lantmanna — Varumärken & Logotyper

Alla varumärken butiken lyfter fram på sin nuvarande startsida (lantmanna.nu), med logotyp-URLs redo att användas i marquee/grid.

**Strategi för Claude Code:**
1. **Primär källa** — `lantmanna.nu/wp-content/uploads/2023/11/` (redan optimerade, 150×150px, hotlinkbara)
2. **Backup / bättre kvalitet** — Wikipedia Commons SVG:er där sådana finns
3. Ladda ner alla till `/public/brands/` under build för att undvika hotlink-beroende

---

## 📋 Kopieringsbar array för `components/BrandsMarquee.tsx`

```ts
export const brands = [
  { name: "Honda", logo: "/brands/honda.png", url: "https://honda.se" },
  { name: "Carhartt", logo: "/brands/carhartt.png", url: "https://carhartt.com" },
  { name: "Blundstone", logo: "/brands/blundstone.png", url: "https://blundstone.se" },
  { name: "Gardena", logo: "/brands/gardena.png", url: "https://gardena.com" },
  { name: "Krafft", logo: "/brands/krafft.png", url: "https://kraffthastfoder.se" },
  { name: "Bozita", logo: "/brands/bozita.png", url: "https://bozita.se" },
  { name: "Ryobi", logo: "/brands/ryobi.png", url: "https://ryobitools.eu" },
  { name: "Teknos", logo: "/brands/teknos.png", url: "https://teknos.com" },
  { name: "Jalas", logo: "/brands/jalas.png", url: "https://ejendals.com" },
  { name: "AGA", logo: "/brands/aga.png", url: "https://aga.se" },
  { name: "Air Liquide", logo: "/brands/air-liquide.png", url: "https://airliquide.com" },
  { name: "Fladen", logo: "/brands/fladen.png", url: "https://fladen.se" },
  { name: "Dogman", logo: "/brands/dogman.png", url: "https://dogman.se" },
  { name: "Doggy", logo: "/brands/doggy.png", url: "https://doggy.se" },
  { name: "Tegera", logo: "/brands/tegera.png", url: "https://ejendals.com" },
  { name: "Oregon", logo: "/brands/oregon.png", url: "https://oregonproducts.com" },
  { name: "Svenska Foder", logo: "/brands/svenska-foder.png", url: "https://svenskafoder.se" },
  { name: "Arion", logo: "/brands/arion.png", url: "https://arionhorsecare.com" },
  { name: "Brogaarden", logo: "/brands/brogaarden.png", url: "https://brogaarden.eu" },
  { name: "Hippo", logo: "/brands/hippo.png", url: "https://hippofoder.se" },
  { name: "Dodson & Horrell", logo: "/brands/dodson-horrell.png", url: "https://dodsonandhorrell.com" },
  { name: "Gelia", logo: "/brands/gelia.png", url: "https://gelia.se" },
  { name: "Carapax", logo: "/brands/carapax.png", url: "https://carapax.se" },
  { name: "Fodax", logo: "/brands/fodax.png", url: "https://fodax.se" },
  { name: "Grimsholm", logo: "/brands/grimsholm.png", url: "https://grimsholm.com" },
  { name: "Monster", logo: "/brands/monster-kattmat.png", url: "https://monsterpet.se" },
  { name: "Mjau", logo: "/brands/mjau.png", url: "https://mjau.se" },
  { name: "Everclean", logo: "/brands/everclean.png", url: "https://everclean.se" },
] as const;
```

---

## 🔧 Download-script (kör först, innan build)

Spara som `scripts/download-brands.sh` och kör `bash scripts/download-brands.sh`:

```bash
#!/bin/bash
mkdir -p public/brands
cd public/brands

BASE="https://lantmanna.nu/wp-content/uploads/2023/11"

curl -o honda.png         "$BASE/Honda-150x150.png"
curl -o carhartt.png      "$BASE/Carhartt-new-150x150.png"
curl -o blundstone.png    "$BASE/Blundstone-square-150x150.jpg"
curl -o gardena.png       "$BASE/Gardena-150x150.png"
curl -o krafft.png        "$BASE/Krafft-150x150.png"
curl -o bozita.png        "$BASE/Bozita-150x150.png"
curl -o ryobi.png         "$BASE/Ryobi-150x150.png"
curl -o teknos.png        "$BASE/Teknos-150x150.png"
curl -o jalas.png         "$BASE/Jalas-150x150.png"
curl -o aga.png           "$BASE/AGA-150x150.png"
curl -o air-liquide.png   "$BASE/Air-Liquide-150x150.jpg"
curl -o fladen.png        "$BASE/Fladen-150x150.png"
curl -o dogman.png        "$BASE/Dogman-150x150.png"
curl -o doggy.png         "$BASE/Doggy-150x150.png"
curl -o tegera.png        "$BASE/Tegera-1-150x150.png"
curl -o oregon.png        "$BASE/Oregon-square-150x150.png"
curl -o svenska-foder.png "$BASE/Svenska-foder-150x150.png"
curl -o arion.png         "$BASE/Arion-150x150.jpg"
curl -o brogaarden.png    "$BASE/Brogaarden-150x150.png"
curl -o hippo.png         "$BASE/Hippo.png"
curl -o dodson-horrell.png "$BASE/Dodson-och-Hrrell-150x150.png"
curl -o gelia.png         "$BASE/Gelia-150x150.jpg"
curl -o carapax.png       "$BASE/Carapax-150x150.jpg"
curl -o fodax.png         "$BASE/Fodax-150x150.png"
curl -o grimsholm.png     "$BASE/Grimsholm-150x150.png"
curl -o monster-kattmat.png "$BASE/Monster-kattmat-150x150.png"
curl -o mjau.png          "$BASE/Mjau-150x150.png"
curl -o everclean.png     "$BASE/Everclean-150x150.jpg"

echo "✅ Alla logotyper nedladdade till public/brands/"
```

---

## 🎯 Kategorisering (om vi vill sortera grid istället för marquee)

### 🏗️ Bygg, verktyg & maskiner
- **Honda** – motorer, gräsklippare, trädgårdsmaskiner
- **Ryobi** – elverktyg
- **Oregon** – kedjor, trimmertråd, motorsåg-tillbehör
- **Gardena** – trädgårdsredskap, bevattning
- **Teknos** – färg
- **Gelia** – el & installation

### 🦺 Arbetskläder & skydd
- **Carhartt** – arbetsbyxor, jackor
- **Blundstone** – kängor
- **Jalas** – skyddsskor (Ejendals)
- **Tegera** – handskar (Ejendals)

### 🐴 Hästfoder & stall
- **Krafft** – marknadsledande hästfoder (Lantmännen)
- **Brogaarden** – hästfoder (dansk)
- **Hippo** – hästfoder
- **Dodson & Horrell** – hästfoder (brittisk)
- **Carapax** – hästtillskott
- **Arion** – hästvårdsprodukter

### 🐕 Hund- & kattmat
- **Bozita** – hund & katt (svensk)
- **Doggy** – hundmat
- **Dogman** – hundtillbehör
- **Monster** – kattmat
- **Mjau** – kattmat
- **Everclean** – kattsand

### 🌾 Foder & lantbruk
- **Svenska Foder** – lantbruksfoder
- **Fodax** – foder
- **Grimsholm** – gräsfrö, trimmertråd

### 🔥 Gasol
- **AGA** – gasol, industrigas
- **Air Liquide** – gas

### 🎣 Fiske
- **Fladen** – fiskeutrustning

---

## 📝 Noter för Claude Code

- **Alla logotyper har likadan aspect ratio (150×150)** — perfekt för marquee.
- I marquee-komponenten: rendera varje logga i `<img>` med `className="h-12 w-auto grayscale hover:grayscale-0 transition"` för proffsigt resultat.
- Duplicera arrayen i marquee-loopen för seamless scroll (`[...brands, ...brands]`).
- Om någon URL ger 404 — sätt placeholder-div med varumärkesnamn i text istället för trasig bild.
- Vill du uppgradera kvalitet senare: Wikipedia Commons har SVG för Honda, Carhartt, Ryobi, AGA, Air Liquide, Bozita, Gardena — sök "`<brand> logo svg wikipedia commons`".
