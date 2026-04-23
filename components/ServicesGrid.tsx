import {
  Wheat,
  Dog,
  HardHat,
  Flower2,
  Flame,
  Fish,
  PaintRoller,
  Rabbit,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = {
  title: string;
  icon: LucideIcon;
  lead: string;
  brands: string[];
};

const services: Service[] = [
  {
    title: 'Foder & lantbruk',
    icon: Wheat,
    lead: 'Fullfoder, spannmål och tillskott till gården — från de svenska lantbrukens favoritleverantörer.',
    brands: ['Svenska Foder', 'Fodax', 'Grimsholm'],
  },
  {
    title: 'Hästfoder & stall',
    icon: Rabbit,
    lead: 'Allt för hästen — marknadsledande foder, tillskott och vårdprodukter för stora och små stall.',
    brands: ['Krafft', 'Brogaarden', 'Hippo', 'Dodson & Horrell'],
  },
  {
    title: 'Hund & katt',
    icon: Dog,
    lead: 'Mat, tillbehör och skötsel för familjens fyrbenta — svenska och nordiska kvalitetsmärken.',
    brands: ['Bozita', 'Doggy', 'Dogman', 'Mjau'],
  },
  {
    title: 'Arbetskläder & skydd',
    icon: HardHat,
    lead: 'Slitstarka plagg och skor för den som jobbar ute — från kängan till handsken.',
    brands: ['Carhartt', 'Blundstone', 'Jalas', 'Tegera'],
  },
  {
    title: 'Trädgård & maskiner',
    icon: Flower2,
    lead: 'Gräsklippare, motorsågar, bevattning och trädgårdsredskap — för både villan och gården.',
    brands: ['Honda', 'Ryobi', 'Gardena', 'Oregon'],
  },
  {
    title: 'Gasol & VA',
    icon: Flame,
    lead: 'Gasol till grillen och stugan, industrigas samt VA-produkter — på plats i butiken, när du behöver det.',
    brands: ['AGA', 'Air Liquide'],
  },
  {
    title: 'Fiske & fritid',
    icon: Fish,
    lead: 'Spön, beten och tillbehör för fisket i Kungsbackafjorden och sjöarna runt omkring.',
    brands: ['Fladen'],
  },
  {
    title: 'Färg & kemtekniskt',
    icon: PaintRoller,
    lead: 'Färg för ute och inne, rengöring och kemtekniskt — rätt burk för rätt jobb.',
    brands: ['Teknos', 'Gelia', 'Carapax'],
  },
];

export default function ServicesGrid() {
  return (
    <section id="sortiment" className="bg-cream py-20 scroll-mt-24">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
            Ett helt sortiment under ett tak
          </h2>
          <p className="mt-4 text-foreground/70">
            Från foder och hästvård till arbetskläder, trädgårdsmaskiner, gasol och färg —
            välkommen in så hjälper vi dig att hitta rätt.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="group flex flex-col rounded-2xl border border-border/60 bg-white/60 p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">{s.lead}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {s.brands.map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-border bg-cream px-2.5 py-0.5 text-xs font-medium text-foreground/75"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
