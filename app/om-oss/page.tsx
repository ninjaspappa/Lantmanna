import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om oss',
  description: 'Historien och värderingarna bakom Fjärås Lantmanna.',
};

export default function OmOssPage() {
  return (
    <section className="container py-16">
      {/* TODO: Agent 2 fyller i historia + värderingar från lantmanna.nu/om-oss */}
      <h1 className="font-display text-4xl font-semibold tracking-tight text-primary md:text-6xl">
        Om oss
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
        Placeholder — ersätts av Agent 2.
      </p>
    </section>
  );
}
