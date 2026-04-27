import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Wrench } from 'lucide-react';
import ContactMap from '@/components/ContactMap';
import { openingHours, openingHoursNote } from '@/lib/openingHours';

export const metadata: Metadata = {
  title: 'Kontakt & Hitta hit',
  description:
    'Besöksadress, telefon, e-post och öppettider till Fjärås Lantmanna i Fjärås utanför Kungsbacka. Hitta hit via karta och få vägbeskrivning.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  return (
    <article className="bg-cream">
      <header className="border-b border-border/60 bg-white/40">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-primary/80">Kontakt</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-primary md:text-6xl">
            Kontakt &amp; hitta hit
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75">
            Välkommen in i butiken i Fjärås, eller hör av dig via telefon eller e-post — vi
            hjälper gärna till.
          </p>
        </div>
      </header>

      <div className="container grid gap-12 py-16 md:grid-cols-2 md:py-20">
        <div className="space-y-8">
          {/* Öppettider — högst upp */}
          <section>
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
              <Clock className="h-5 w-5" aria-hidden />
              Öppettider
            </h2>
            <dl className="mt-3 space-y-1.5 text-foreground/85">
              <div className="flex justify-between border-b border-border/60 pb-1.5">
                <dt>Måndag–Fredag</dt>
                <dd className="font-medium">{openingHours.mondayToFriday}</dd>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-1.5">
                <dt>Lördag</dt>
                <dd className="font-medium">{openingHours.saturday}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Söndag</dt>
                <dd className="font-medium">{openingHours.sunday}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm text-foreground/65">{openingHoursNote}</p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
              <MapPin className="h-5 w-5" aria-hidden />
              Besöksadress
            </h2>
            <address className="mt-3 not-italic text-foreground/85">
              <p>Fjärås Lantmannaväg 11</p>
              <p>439 74 Fjärås</p>
            </address>
          </section>

          <section>
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
              <Phone className="h-5 w-5" aria-hidden />
              Telefon butiken
            </h2>
            <p className="mt-3 text-foreground/85">
              <a href="tel:+46300540005" className="underline hover:text-primary">
                0300-54 00 05
              </a>
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
              <Wrench className="h-5 w-5" aria-hidden />
              Telefon verkstad
            </h2>
            <p className="mt-3 text-foreground/85">
              <a href="tel:+46300563256" className="underline hover:text-primary">
                0300-56 32 56
              </a>
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
              <Mail className="h-5 w-5" aria-hidden />
              E-post
            </h2>
            <p className="mt-3 text-foreground/85">
              <a href="mailto:info@lantmanna.nu" className="underline hover:text-primary">
                info@lantmanna.nu
              </a>
            </p>
          </section>
        </div>

        <section id="karta" className="scroll-mt-24">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
            <MapPin className="h-5 w-5" aria-hidden />
            Hitta hit
          </h2>
          <p className="mt-2 mb-4 text-foreground/75">
            Fjärås Lantmanna ligger 1 minut från avfart 56 Fjärås (E6) söder om Kungsbacka. Kör
            förbi Shell och Mekonomen så hittar du oss.
          </p>
          <ContactMap />
        </section>
      </div>
    </article>
  );
}
