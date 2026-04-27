import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Phone, Wrench } from 'lucide-react';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import BrandsMarquee from '@/components/BrandsMarquee';
import JordsackSection from '@/components/JordsackSection';
import { openingHours, openingHoursNote } from '@/lib/openingHours';

export const metadata: Metadata = {
  title: 'Lanthandel i Fjärås sedan 1925 – Fjärås Lantmanna',
  description:
    'Fjärås Lantmanna — lanthandel i Fjärås utanför Kungsbacka. Foder, trädgård, arbetskläder, gasol och Plantjord 50 – billigast på jorden, 17,90 kr/säck.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Lanthandel i Fjärås sedan 1925 – Fjärås Lantmanna',
    description:
      'Foder, trädgård, arbetskläder, gasol och jordsäckar i Fjärås utanför Kungsbacka. Personlig service i över 100 år.',
    url: 'https://lantmanna.nu/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <JordsackSection />
      <ServicesGrid />
      <BrandsMarquee />

      {/* Verkstad på gården */}
      <section className="bg-cream py-20">
        <div className="container grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/60 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1400&q=80"
              alt="Verkstad i lantbutik — service av maskiner och redskap"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Wrench className="h-3.5 w-3.5" aria-hidden />
              Verkstad på gården
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary md:text-5xl">
              Vi har en verkstad på gården
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">
              Tillsammans hjälper vi dig med allt från traktorer till motorsågar — service,
              reparationer och slitdelar. Besök verkstaden, lämna in det som strular, och avsluta
              affären i butikens kassa.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-foreground/75 sm:grid-cols-2">
              <li className="rounded-lg bg-white/60 px-3 py-2 ring-1 ring-border/60">
                ✦ Traktorer & lantbruksmaskiner
              </li>
              <li className="rounded-lg bg-white/60 px-3 py-2 ring-1 ring-border/60">
                ✦ Motorsågar & röjsågar
              </li>
              <li className="rounded-lg bg-white/60 px-3 py-2 ring-1 ring-border/60">
                ✦ Gräsklippare & trimmer
              </li>
              <li className="rounded-lg bg-white/60 px-3 py-2 ring-1 ring-border/60">
                ✦ Service, slipning & reservdelar
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Hör av dig
                <Phone className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — Kom förbi */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Kom förbi</h2>
            <p className="mt-4 max-w-lg text-primary-foreground/85">
              Vi finns i Fjärås, några minuter från E6. Kika in, titta på hyllorna och fråga efter
              det du behöver — vi hjälper gärna till.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt#karta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white"
              >
                <MapPin className="h-4 w-4" aria-hidden />
                Vägbeskrivning
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/70 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Kontakta oss
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-6 backdrop-blur">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <Clock className="h-5 w-5" aria-hidden />
              Öppettider
            </h3>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-6 border-b border-primary-foreground/15 pb-2">
                <dt>Måndag–Fredag</dt>
                <dd className="font-medium">{openingHours.mondayToFriday}</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-primary-foreground/15 pb-2">
                <dt>Lördag</dt>
                <dd className="font-medium">{openingHours.saturday}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt>Söndag</dt>
                <dd className="font-medium">{openingHours.sunday}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-primary-foreground/70">{openingHoursNote}</p>
          </div>
        </div>
      </section>
    </>
  );
}
