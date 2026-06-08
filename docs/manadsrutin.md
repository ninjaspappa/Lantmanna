# Månadsrutin för lantmanna.nu

Kort lista över vad som faktiskt gör skillnad för att hålla sajten levande
i Googles, AI-sökarnas och kundernas ögon — utan att det blir en heltidsgrej.

Tidsåtgång: **20–30 min/månad**. Gör det första vardagen i månaden, samtidigt
som du läser månadsrapporten som mailas automatiskt.

---

## Varje månad (måste-göra)

### 1. Läs månadsrapporten (2 min)
Du får ett mail från `jesper@humanji.se` med trafikstatistik första vardagen
varje månad. Skumma den:

- **Sidvisningar** trend uppåt eller nedåt jämfört med förra månaden?
- **Toppsidor** — är det jordsäckar fortfarande, eller har något annat ryckt?
- **Varifrån** — kommer trafiken från Google, Facebook, direkt, AI-sök?

Det här är din "tempokänsla" inför resten av rutinen.

### 2. Google Business Profile — minst 1 inlägg (10 min)
Det här är **viktigast** för lokal sökning på "lantmanna Kungsbacka",
"foder Fjärås" osv. Gå till [business.google.com](https://business.google.com)
och lägg upp **ett** av följande:

- Ny produkt eller varugrupp som kommit in (foto + 2 meningar)
- Säsongspåminnelse ("Nu fyller vi på Plantjord-pallarna")
- Bild från butiken eller verkstaden den senaste månaden
- Erbjudande eller kampanj (om något pågår)

> Tips: foto direkt från mobilen är bättre än ingen post alls.
> Googles AI rankar profiler som uppdateras månadsvis högre i lokalsök.

### 3. Facebook — minst 1 inlägg (5 min)
Samma logik. Ett foto + en mening räcker. Sajten länkar till Facebook-sidan,
och Facebook-flödet är inbäddat på mobilen — så tomheten där märks.

---

## Varannan månad (rekommenderat)

### 4. Byt eller justera "Just nu i butiken" på sajten
Säsongen rör sig och sajten ska följa med. Be Jesper byta:

- **Mars–maj:** Plantjord, vårfoder, trädgårdsmaskiner
- **Juni–aug:** Bevattning, grill/gasol, fiske
- **Sep–nov:** Vinterfoder, höstplantering, ved
- **Dec–feb:** Fågelmat, halkbekämpning, sandsäck, verkstadsservice
  (gräsklippare in nu så de är klara till våren)

> Det räcker att ändra hero-texten och hint-rutor på Hemkörning eller
> Servicelistan. Kortfattat mail till Jesper med "byt till X-säsong nu" gör jobbet.

---

## Varje kvartal (max 30 min)

### 5. Snabb sanity check
- Öppna [lantmanna.nu](https://lantmanna.nu) på mobilen — ser allt rätt ut?
- Klicka på telefonnummer, e-post, karta — fungerar de?
- Sök på Google: "lantmanna fjärås" — kommer ni först? Står öppettiderna rätt?
- Är något pris eller telefonnummer på sajten inaktuellt? Säg till.

### 6. Be Jesper kolla
- Att daglig `refresh`-cronen kör som tänkt
  (Vercel-dashboarden → Cron Jobs → grön check)
- Att månadsrapporten faktiskt kommit (sök i mailen)
- Att Google Search Console inte flaggar några fel
  ([search.google.com/search-console](https://search.google.com/search-console))

---

## Vad sajten gör automatiskt åt dig

Du behöver **inte** tänka på följande — det rullar av sig självt:

- ✅ Sitemap uppdateras dagligen via cron (`/api/cron/refresh`)
- ✅ `dateModified` i strukturerad data rullar fram dagligen
- ✅ Månadsrapport mailas första vardagen varje månad
- ✅ Alla viktiga AI-bottar (ChatGPT, Claude, Perplexity, Google AI, Bing,
     Apple Intelligence) är tillåtna att indexera sajten
- ✅ `llms.txt` ger AI-sökarna en stensäker brief om Fjärås Lantmanna
- ✅ JSON-LD strukturerad data säger till Google: lanthandel, öppettider,
     adress, kontakt, sortiment

---

## När ska du höra av dig till Jesper?

- Något pris eller telefon är fel
- Ny varugrupp eller produkt ska in
- Säsongen ska bytas på sajten
- Trafiken sjunker tre månader i rad
- Du vill lägga till en ny sida (t.ex. "Verkstadsbokning online")
- Något ser konstigt ut eller ger fel

---

*Senast uppdaterad: juni 2026. Justera rutinen om något inte funkar för er —
det viktiga är att den blir gjord, inte att den följs perfekt.*
