import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Package, CreditCard, ArrowRight } from 'lucide-react';
import ShareLocationButton from '@/components/ShareLocationButton';
import { cn } from '@/lib/utils';

interface JordsackSectionProps {
  variant?: 'compact' | 'full';
}

const pricing = [
  {
    label: 'Styck',
    price: '17,90 kr',
    note: 'Plantjord 50 – 50 liter per säck.',
  },
  {
    label: 'Halvpall',
    price: '322 kr',
    note: '18 säckar × 17,90 kr. För lilla trädgården.',
  },
  {
    label: 'Helpall',
    price: '644 kr',
    note: '36 säckar × 17,90 kr. För hela projektet.',
  },
] as const;

const steps = [
  {
    icon: MapPin,
    title: 'Kör till butiken',
    body: 'Fjärås Lantmannaväg 11, 439 74 Fjärås. Pallen står alltid under tak vid lagret.',
  },
  {
    icon: Package,
    title: 'Fyll säckarna själv',
    body: 'Ta spaden, fyll så mycket du vill. Matjorden är sållad och redo för rabatten.',
  },
  {
    icon: CreditCard,
    title: 'Betala i kassan',
    body: 'Kort, Swish eller faktura — som det passar dig bäst.',
  },
];

export default function JordsackSection({ variant = 'full' }: JordsackSectionProps) {
  const isCompact = variant === 'compact';

  return (
    <section
      id="jordsackar"
      className={cn(
        'relative overflow-hidden bg-earth text-earth-foreground',
        isCompact ? 'py-14 md:py-20' : 'py-20 md:py-28',
      )}
    >
      {/* subtle texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 60%, #fff 1px, transparent 1px)',
          backgroundSize: '36px 36px, 52px 52px',
        }}
      />

      <div className="container relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center rounded-full bg-cream/15 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cream">
              Lokal favorit
            </span>
            <h2
              className={cn(
                'mt-4 font-display font-semibold tracking-tight',
                isCompact ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl',
              )}
            >
              Plantjord 50 – gula jordsäckarna
            </h2>
            <p className="mt-5 max-w-xl text-lg text-cream/90 md:text-xl">
              <strong className="font-semibold">Billigast på jorden</strong> — planteringsjord av
              riktigt bra kvalité. Hämta direkt i butiken, alltid under tak, alltid redo.
            </p>

            {/* Pricing */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pricing.map((p) => (
                <div
                  key={p.label}
                  className="rounded-2xl border border-cream/20 bg-cream/10 p-5 backdrop-blur-sm"
                >
                  <div className="text-xs font-medium uppercase tracking-widest text-cream/70">
                    {p.label}
                  </div>
                  <div className="mt-2 font-display text-3xl font-semibold text-cream">
                    {p.price}
                  </div>
                  <p className="mt-2 text-sm text-cream/80">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-cream/70">
              Priser inkl. moms. Ingen mängdrabatt — priset är redan billigast på jorden. Hämtas i butiken.
            </p>

            {/* Steps — shown in full, abbreviated in compact */}
            {!isCompact && (
              <div className="mt-12">
                <h3 className="font-display text-2xl font-semibold text-cream">
                  Så här gör du
                </h3>
                <ol className="mt-6 grid gap-5 sm:grid-cols-3">
                  {steps.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <li
                        key={s.title}
                        className="relative rounded-2xl border border-cream/20 bg-cream/5 p-5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-earth">
                            <Icon className="h-5 w-5" aria-hidden />
                          </span>
                          <span className="font-display text-sm uppercase tracking-widest text-cream/70">
                            Steg {i + 1}
                          </span>
                        </div>
                        <h4 className="mt-4 font-display text-lg font-semibold text-cream">
                          {s.title}
                        </h4>
                        <p className="mt-2 text-sm text-cream/85">{s.body}</p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}

            {isCompact && (
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/85">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden /> Hämta i butiken
                </li>
                <li className="flex items-center gap-2">
                  <Package className="h-4 w-4" aria-hidden /> Fyll själv under tak
                </li>
                <li className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" aria-hidden /> Kort, Swish eller faktura
                </li>
              </ul>
            )}

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/kontakt#karta"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cream px-6 py-3 text-sm font-semibold text-earth transition-colors hover:bg-cream/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-earth"
              >
                Hitta hit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <ShareLocationButton
                url="https://lantmanna.nu/jordsackar"
                title="Plantjord 50 hos Fjärås Lantmanna"
                text="Billigast på jorden — 17,90 kr/säck (50 L), 644 kr helpall"
                className="border-cream text-cream hover:bg-cream hover:text-earth focus-visible:ring-cream focus-visible:ring-offset-earth"
              />
            </div>

            {isCompact && (
              <div className="mt-6">
                <Link
                  href="/jordsackar"
                  className="inline-flex items-center gap-1 text-sm font-medium text-cream underline-offset-4 hover:underline"
                >
                  Läs mer om jordsäckarna
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-cream/20 shadow-2xl">
            <Image
              src="/images/plantjord-50.jpg"
              alt="Plantjord 50 – 50 liters gul planteringsjord-säck från Fjärås Lantmanna, staplad i trädgård"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
