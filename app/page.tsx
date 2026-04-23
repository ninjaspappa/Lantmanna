import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fjärås Lantmanna — foder, trädgård, gasol, jordsäckar',
  description:
    'Lokal lantmanna-butik strax söder om Kungsbacka. Foder, trädgård, gasol, kläder och de gula jordsäckarna.',
};

export default function HomePage() {
  return (
    <section className="container py-16">
      {/* TODO: Agent 2 fills in hero + sortiment + varumärken. */}
      <h1 className="font-display text-4xl font-semibold tracking-tight text-primary md:text-6xl">
        Startsida
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
        Placeholder — ersätts av Agent 2.
      </p>
    </section>
  );
}
