import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Phone } from 'lucide-react';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import BrandsMarquee from '@/components/BrandsMarquee';
import JordsackSection from '@/components/JordsackSection';
import { openingHours } from '@/lib/openingHours';

export const metadata: Metadata = {
  title: 'Lanthandel i Fjärås sedan 1925 – Fjärås Lantmanna',
  description:
    'Fjärås Lantmanna — lanthandel i Fjärås utanför Kungsbacka. Foder, trädgård, arbetskläder, gasol och de gula jordsäckarna nu 19 kr/st.',
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
            <p className="mt-4 text-xs text-primary-foreground/70">
              {/* TODO: Jesper — bekräfta öppettider (lib/openingHours.ts) */}
              Öppettider uppdateras vid helgdagar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
