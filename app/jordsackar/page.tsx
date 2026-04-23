import type { Metadata } from 'next';
import Image from 'next/image';
import JordsackSection from '@/components/JordsackSection';
import ParallaxImage from '@/components/ParallaxImage';
import CatPaws from '@/components/CatPaws';

export const metadata: Metadata = {
  title: 'Plantjord 50 – 17,90 kr/säck hos Fjärås Lantmanna',
  description:
    'Billigast på jorden — Plantjord 50 i Fjärås/Kungsbacka: 17,90 kr/säck (50 L), halvpall och helpall. Planteringsjord av riktigt bra kvalité, alltid under tak.',
  openGraph: {
    title: 'Plantjord 50 – 17,90 kr/säck hos Fjärås Lantmanna',
    description:
      'Plantjord 50 – 17,90 kr/säck, 50 L planteringsjord. Hämta på pall direkt i butiken i Fjärås. Alltid under tak.',
    type: 'website',
    url: '/jordsackar',
  },
};

const faqs: { q: string; a: string }[] = [
  {
    q: 'Hur betalar jag?',
    a: 'Du betalar i kassan — kort, Swish eller faktura för företagskunder. Ingen förbeställning behövs för enstaka säckar.',
  },
  {
    q: 'När kan jag hämta?',
    a: 'Under butikens ordinarie öppettider. Pallen står alltid under tak så du slipper regnet.',
  },
  {
    q: 'Är jorden bra för odling?',
    a: 'Ja, det är sållad matjord som passar för rabatter, pallkragar och gräsmatta. Vill du ha extra näring för köksväxter kan du blanda med kompost eller planteringsjord.',
  },
  {
    q: 'Kan jag få hem jorden levererad?',
    a: 'Vi säljer jorden som självhämtning i butiken. Hör av dig på kontaktsidan om du behöver en större mängd — vi hjälper till att hitta en lösning.',
  },
  {
    q: 'Hur mycket jord behöver jag till 1 m²?',
    a: 'Tumregel: ca 100 liter per m² vid 10 cm djup. En säck räcker typiskt till en mindre planteringsyta — fråga oss gärna i butiken, vi räknar med dig.',
  },
  {
    q: 'Kan jag själv lasta en hel pall?',
    a: 'Absolut — vi hjälper gärna till att lyfta upp pallen med gaffeltruck på släp eller pickup. Berätta i kassan så löser vi det smidigt.',
  },
];

export default function JordsackarPage() {
  return (
    <div className="relative bg-sunny">
      <CatPaws />

      {/* 16:9 hero-bild — plantjord-100, folk som lastar säckar */}
      <section className="relative aspect-video max-h-[70vh] w-full overflow-hidden">
        <ParallaxImage
          src="/images/plantjord-100.png"
          alt="Kunder lastar Plantjord-säckar på pall hos Fjärås Lantmanna en solig vårdag"
          priority
          strength={0.18}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sunny via-sunny/30 to-sunny/0" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container py-8 md:py-12">
            <p className="inline-flex items-center rounded-full bg-sunny-foreground px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sunny">
              Våren är här
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-sunny-foreground drop-shadow-sm md:text-6xl lg:text-7xl">
              Lasta pallen full med sol
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-sunny-foreground/90 md:text-xl">
              Plantjord 50 – de gula jordsäckarna som gör rabatten, pallkragen och villatomten
              redo för odlingssäsongen. Fyll bagaget, släpet eller hela pallen.
            </p>
          </div>
        </div>
      </section>

      <JordsackSection variant="full" />

      {/* Mer om jorden — nu gul */}
      <section className="relative overflow-hidden bg-sunny py-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-white/30 blur-3xl"
        />
        <div className="container relative grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="max-w-xl space-y-5 text-sunny-foreground/90 [&>p]:leading-relaxed">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-sunny-foreground md:text-4xl">
              Planteringsjord av riktigt bra kvalité
            </h2>
            <p>
              Plantjord 50 är en näringsrik planteringsjord i 50-liters säck, perfekt för
              rabatten, pallkragen, krukan och uppfräschningen av gräsmattan. Jorden är sållad,
              luftig och lätt att arbeta med — precis som en lantbutik ska sälja jord.
            </p>
            <p>
              Vi tar in Plantjord 50 på pall hela säsongen så hyllorna är alltid fyllda när våren
              kommer. Säckarna står under tak på gården, så du slipper blöta säckar och kan lasta
              själv direkt i bagaget. Behöver du fler än en pall? Säg till i kassan — vi fixar
              det.
            </p>
            <p>
              Många av våra stamkunder köper en halvpall på våren och fyller på med styckesäckar
              under sommaren. Andra tar helpallen direkt och hjälper grannen med det som blir
              över. Gör som du vill — vi hjälper till med lastning oavsett.
            </p>
            <p className="rounded-2xl border-2 border-sunny-foreground/20 bg-white/40 p-5 font-medium text-sunny-foreground">
              <strong className="font-display text-lg">Billigast på jorden.</strong> 17,90 kr/säck
              — och det är inte ett rea-pris. Det är vad vi tar, hela säsongen. Ingen mängdrabatt,
              för vi kan inte göra det billigare än det redan är.
            </p>
          </div>

          <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-sunny-foreground/10 shadow-xl">
            <Image
              src="/images/plantjord-50.png"
              alt="Plantjord 50 – 50 liters gula jordsäckar staplade i trädgård"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Så räknar du — fortsatt gul, men lite mörkare variant */}
      <section className="relative overflow-hidden bg-sunny-dark py-16 text-sunny-foreground md:py-20">
        <div className="container grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Så räknar du ut hur mycket jord du behöver
            </h2>
            <p className="mt-4 text-sunny-foreground/90">
              Enkel tumregel: ytan × djupet i cm × 10 = liter jord. Så här ser det ut för
              några vanliga projekt.
            </p>
          </div>
          <div className="rounded-2xl border border-sunny-foreground/20 bg-white/30 p-6 backdrop-blur-sm">
            <h3 className="font-display text-xl font-semibold">Pallkrage (120×80 cm)</h3>
            <p className="mt-2 text-sunny-foreground/90">
              Fylld 20 cm djup ≈ 192 liter → <strong>4 säckar Plantjord 50</strong>
            </p>
          </div>
          <div className="rounded-2xl border border-sunny-foreground/20 bg-white/30 p-6 backdrop-blur-sm">
            <h3 className="font-display text-xl font-semibold">Rabatt 10 m² × 10 cm</h3>
            <p className="mt-2 text-sunny-foreground/90">
              Ca 1 000 liter → <strong>20 säckar</strong> (lite mer än en halvpall).
            </p>
          </div>
          <div className="rounded-2xl border border-sunny-foreground/20 bg-white/30 p-6 backdrop-blur-sm">
            <h3 className="font-display text-xl font-semibold">Stor villatomt</h3>
            <p className="mt-2 text-sunny-foreground/90">
              Ny rabatt + topdressing på gräsmattan → <strong>helpallen 36 säckar</strong> räcker
              långt.
            </p>
          </div>
          <div className="rounded-2xl border border-sunny-foreground/20 bg-white/30 p-6 backdrop-blur-sm">
            <h3 className="font-display text-xl font-semibold">Kruka Ø 40 cm</h3>
            <p className="mt-2 text-sunny-foreground/90">
              Ca 30 liter → en säck delad på två krukor, lika enkelt.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — fortsatt gul */}
      <section className="bg-sunny py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-sunny-foreground md:text-4xl">
            Ofta frågat
          </h2>
          <p className="mt-3 text-sunny-foreground/80">
            Kortfattade svar om gula jordsäckarna. Hittar du inte det du söker — ring oss eller
            kom förbi butiken.
          </p>

          <div className="mt-8 divide-y divide-sunny-foreground/20 rounded-2xl border-2 border-sunny-foreground/15 bg-white/40 backdrop-blur-sm">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group px-5 py-4 open:bg-white/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-sunny-foreground marker:hidden">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="text-sunny-foreground/60 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sunny-foreground/85">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final bild — plantjord-200 som avslutande 16:9-panorama */}
      <section className="relative aspect-video max-h-[60vh] w-full overflow-hidden">
        <ParallaxImage
          src="/images/plantjord-200.png"
          alt="Plantjord hos Fjärås Lantmanna — fyll pallen, fyll våren"
          strength={0.2}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sunny-dark/70 via-sunny/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container py-8 md:py-12">
            <p className="font-display text-2xl font-semibold text-sunny-foreground drop-shadow-sm md:text-4xl">
              Vi ses i Fjärås — pallen är fylld.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
