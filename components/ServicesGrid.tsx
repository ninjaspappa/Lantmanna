import Image from 'next/image';
import {
  Wheat,
  Dog,
  HardHat,
  Flower2,
  Flame,
  Fish,
  PaintRoller,
  Rabbit,
  Hexagon,
  Tractor,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = {
  title: string;
  icon: LucideIcon;
  image: string;
  lead: string;
  brands?: string[];
  hint?: string;
};

const services: Service[] = [
  {
    title: 'Foder & lantbruk',
    icon: Wheat,
    image:
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80',
    lead: 'Fullfoder, spannmål och tillskott till gården — från de svenska lantbrukens favoritleverantörer.',
    brands: ['Svenska Foder', 'Fodax', 'Grimsholm'],
  },
  {
    title: 'Hästfoder & stall',
    icon: Rabbit,
    image:
      'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&w=1200&q=80',
    lead: 'Allt för hästen — marknadsledande foder, tillskott och vårdprodukter för stora och små stall.',
    brands: ['Krafft', 'Brogaarden', 'Hippo', 'Dodson & Horrell'],
  },
  {
    title: 'Hund & katt',
    icon: Dog,
    image:
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80',
    lead: 'Mat, tillbehör och skötsel för familjens fyrbenta — svenska och nordiska kvalitetsmärken.',
    brands: ['Bozita', 'Doggy', 'Dogman', 'Mjau', 'Fodax'],
  },
  {
    title: 'Arbetskläder & skydd',
    icon: HardHat,
    image: '/images/carhartt.png',
    lead: 'Slitstarka plagg och skor för den som jobbar ute — från kängan till handsken.',
    brands: ['Carhartt', 'Blundstone', 'Arbesko', 'Jalas', 'Tegera'],
  },
  {
    title: 'Trädgård & maskiner',
    icon: Flower2,
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    lead: 'Gräsklippare, motorsågar, bevattning och trädgårdsredskap — för både villan och gården.',
    brands: ['Honda', 'Ryobi', 'Gardena', 'Oregon'],
  },
  {
    title: 'Gasol och Gas',
    icon: Flame,
    image: '/images/gasol-lantmanna.jpg',
    lead: 'Gasol till grillen och stugan, svetsgas och industrigas — på plats i butiken, när du behöver det.',
    brands: ['AGA', 'Air Liquide'],
    hint: 'Vi byter ut din gasolflaska eller svetsgas — välkommen in!',
  },
  {
    title: 'Fiske & fritid',
    icon: Fish,
    image: '/images/fiske-lantmanna.jpg',
    lead: 'Spön, beten och tillbehör för fisket i Kungsbackafjorden och sjöarna runt omkring.',
    brands: ['Fladen'],
  },
  {
    title: 'Färg & kemtekniskt',
    icon: PaintRoller,
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80',
    lead: 'Färg för ute och inne, rengöring och kemtekniskt — rätt burk för rätt jobb.',
    brands: ['Teknos', 'Gelia', 'Carapax'],
  },
  {
    title: 'Biodling',
    icon: Hexagon,
    image:
      'https://images.unsplash.com/photo-1568526381923-caf3fd520382?auto=format&fit=crop&w=1200&q=80',
    lead: 'Allt biodlaren behöver — ramar, kupor, slungor, dräkter och vax. Vi hjälper både nya och erfarna biodlare.',
  },
  {
    title: 'Mark & Anläggning',
    icon: Tractor,
    image: '/images/mark-anlaggning.jpg',
    lead: 'För dig som anlägger trädgård, bygger stenmur eller gräver in en ny rabatt — material och redskap som håller.',
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
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-white/60 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                  <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cream/95 text-primary shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">{s.lead}</p>
                  {s.hint && (
                    <p className="mt-3 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-medium text-primary">
                      {s.hint}
                    </p>
                  )}
                  {s.brands && s.brands.length > 0 && (
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
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
