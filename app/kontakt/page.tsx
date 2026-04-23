import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Besöksadress, telefon, e-post och öppettider till Fjärås Lantmanna. Hitta hit via karta.',
};

export default function KontaktPage() {
  return (
    <section className="container py-16">
      {/* TODO: Agent 2 fyller i org-nr, adress, e-post, karta (conditional på cookie consent) */}
      <h1 className="font-display text-4xl font-semibold tracking-tight text-primary md:text-6xl">
        Kontakt
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
        Placeholder — ersätts av Agent 2.
      </p>
    </section>
  );
}
