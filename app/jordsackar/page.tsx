import type { Metadata } from 'next';
import Image from 'next/image';
import JordsackSection from '@/components/JordsackSection';

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
];

export default function JordsackarPage() {
  return (
    <>
      <JordsackSection variant="full" />

      {/* Mer om jorden */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="max-w-xl space-y-5 text-foreground/85 [&>p]:leading-relaxed">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              Planteringsjord av riktigt bra kvalité
            </h2>
            <p>
              Plantjord 50 är en näringsrik planteringsjord i 50-liters säck, perfekt för rabatten,
              pallkragen, krukan och uppfräschningen av gräsmattan. Jorden är sållad, luftig och
              lätt att arbeta med — precis som en lantbutik ska sälja jord.
            </p>
            <p>
              Vi tar in Plantjord 50 på pall hela säsongen så hyllorna är alltid fyllda när våren
              kommer. Säckarna står under tak på gården, så du slipper blöta säckar och kan lasta
              själv direkt i bagaget. Behöver du fler än en pall? Säg till i kassan — vi fixar
              det.
            </p>
            <p className="rounded-2xl border border-earth/30 bg-earth/5 p-5 font-medium text-foreground">
              <strong className="font-display text-lg text-earth">Billigast på jorden.</strong>{' '}
              17,90 kr/säck — och det är inte ett rea-pris. Det är vad vi tar, hela säsongen.
              Ingen mängdrabatt, för vi kan inte göra det billigare än det redan är.
            </p>
          </div>

          <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
              alt="Lantlig miljö — jord och trädgård i Fjärås"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Så räknar du */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Så räknar du ut hur mycket jord du behöver
            </h2>
            <p className="mt-4 text-cream/85">
              Enkel tumregel: tänk på ytan du ska fylla × djupet i cm × 10 = liter jord.
            </p>
          </div>
          <div className="rounded-2xl border border-cream/20 bg-cream/10 p-6">
            <h3 className="font-display text-xl font-semibold">Pallkrage (120×80 cm)</h3>
            <p className="mt-2 text-cream/85">
              Fylld 20 cm djup = ca 192 liter → <strong>4 säckar Plantjord 50</strong>.
            </p>
          </div>
          <div className="rounded-2xl border border-cream/20 bg-cream/10 p-6">
            <h3 className="font-display text-xl font-semibold">Rabatt 10 m² × 10 cm</h3>
            <p className="mt-2 text-cream/85">
              Ca 1 000 liter → <strong>20 säckar</strong> (lite mer än en halvpall).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Ofta frågat
          </h2>
          <p className="mt-3 text-foreground/70">
            Kortfattade svar om gula jordsäckarna. Hittar du inte det du söker — ring oss eller
            kom förbi butiken.
          </p>

          <div className="mt-8 divide-y divide-earth/20 rounded-2xl border border-earth/20 bg-white/60">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group px-5 py-4 open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-primary marker:hidden">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="text-earth transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-foreground/80">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
