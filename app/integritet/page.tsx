import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description:
    'Så hanterar Fjärås Lantmanna personuppgifter, cookies och tredjepartstjänster.',
};

export default function IntegritetPage() {
  return (
    <section className="container py-16">
      {/* TODO: Agent 2 skriver GDPR-policy (400 ord) */}
      <h1 className="font-display text-4xl font-semibold tracking-tight text-primary md:text-6xl">
        Integritetspolicy
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
        Placeholder — ersätts av Agent 2.
      </p>
    </section>
  );
}
