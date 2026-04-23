import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Package, CreditCard, ArrowRight, Sun } from 'lucide-react';
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
        'relative overflow-hidden bg-sunny text-sunny-foreground',
        isCompact ? 'py-14 md:py-20' : 'py-20 md:py-28',
      )}
    >
      {/* sunburst / prickmönster overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #2A1F05 1px, transparent 1.5px), radial-gradient(circle at 80% 60%, #2A1F05 1px, transparent 1.5px)',
          backgroundSize: '36px 36px, 52px 52px',
        }}
      />

      {/* glödande sol-cirkel i bakgrunden */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/25 blur-3xl"
      />

      <div className="container relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sunny-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sunny-foreground">
              <Sun className="h-3.5 w-3.5" aria-hidden />
              Våren är här
            </span>
            <h2
              className={cn(
                'mt-4 font-display font-semibold tracking-tight text-sunny-foreground',
                isCompact ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl',
              )}
            >
              Plantjord 50 – gula jordsäckarna
            </h2>
            <p className="mt-5 max-w-xl text-lg text-sunny-foreground/90 md:text-xl">
              <strong className="font-semibold">Billigast på jorden</strong> — planteringsjord av
              riktigt bra kvalité. Hämta direkt i butiken, alltid under tak, alltid redo för
              rabatten, pallkragen eller gräsmattan.
            </p>

            {/* Pricing */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pricing.map((p) => (
                <div
                  key={p.label}
                  className="rounded-2xl border-2 border-sunny-foreground/15 bg-white/40 p-5 backdrop-blur-sm"
                >
                  <div className="text-xs font-semibold uppercase tracking-widest text-sunny-foreground/70">
                    {p.label}
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold text-sunny-foreground">
                    {p.price}
                  </div>
                  <p className="mt-2 text-sm text-sunny-foreground/80">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-sunny-foreground/75">
              Priser inkl. moms. Ingen mängdrabatt — priset är redan billigast på jorden. Hämtas i
              butiken.
            </p>

            {/* Steps */}
            {!isCompact && (
              <div className="mt-12">
                <h3 className="font-display text-2xl font-semibold text-sunny-foreground">
                  Så här gör du
                </h3>
                <ol className="mt-6 grid gap-5 sm:grid-cols-3">
                  {steps.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <li
                        key={s.title}
                        className="relative rounded-2xl border border-sunny-foreground/15 bg-white/30 p-5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sunny-foreground text-sunny">
                            <Icon className="h-5 w-5" aria-hidden />
                          </span>
                          <span className="font-display text-sm font-semibold uppercase tracking-widest text-sunny-foreground/70">
                            Steg {i + 1}
                          </span>
                        </div>
                        <h4 className="mt-4 font-display text-lg font-semibold text-sunny-foreground">
                          {s.title}
                        </h4>
                        <p className="mt-2 text-sm text-sunny-foreground/85">{s.body}</p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}

            {isCompact && (
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-sunny-foreground/85">
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
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-sunny"
              >
                Hitta hit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <ShareLocationButton
                url="https://lantmanna.nu/jordsackar"
                title="Plantjord 50 hos Fjärås Lantmanna"
                text="Billigast på jorden — 17,90 kr/säck (50 L), 644 kr helpall"
                className="border-sunny-foreground/40 text-sunny-foreground hover:bg-sunny-foreground hover:text-sunny focus-visible:ring-sunny-foreground focus-visible:ring-offset-sunny"
              />
            </div>

            {isCompact && (
              <div className="mt-6">
                <Link
                  href="/jordsackar"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-sunny-foreground underline-offset-4 hover:underline"
                >
                  Läs mer om jordsäckarna
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-4 border-sunny-foreground/10 shadow-2xl">
            <Image
              src="/images/plantjord-50.png"
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
