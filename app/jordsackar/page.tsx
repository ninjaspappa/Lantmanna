import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jordsäckar — Fjärås Lantmanna',
  description:
    'De gula jordsäckarna hos Fjärås Lantmanna — kvalitetsjord till trädgården. Hitta hit och handla direkt i butik.',
};

export default function JordsackarPage() {
  return (
    <section className="container py-16">
      {/* TODO: Agent 3 bygger JordsackSection och använder den här. */}
      <h1 className="font-display text-4xl font-semibold tracking-tight text-primary md:text-6xl">
        Jordsäckar
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
        Placeholder — ersätts av Agent 3.
      </p>
    </section>
  );
}
