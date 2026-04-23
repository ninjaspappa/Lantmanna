import type { Metadata } from 'next';
import JordsackSection from '@/components/JordsackSection';

export const metadata: Metadata = {
  title: 'Jordsäckar i Fjärås – 19 kr/st hos Lantmanna',
  description:
    'Billig matjord i Fjärås/Kungsbacka: styckpris 19 kr, halvpall och helpall. Fyll dina gula jordsäckar själv och hämta direkt i butiken — alltid under tak.',
  openGraph: {
    title: 'Jordsäckar i Fjärås – 19 kr/st hos Lantmanna',
    description:
      'Billig matjord i Fjärås/Kungsbacka: 19 kr/styck, hämta på pall i butiken. Gula jordsäckar, alltid under tak.',
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
