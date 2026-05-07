import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Om oss — 100 år av lanthandel i Fjärås',
  description:
    'Fjärås Lantmanna — modernt detaljhandelsbolag och ekonomisk förening i Fjärås utanför Kungsbacka sedan ca 1925. Brett sortiment, lokal kännedom och personlig service.',
  keywords: [
    'Fjärås Lantmanna historia',
    'lantmannaförening Fjärås',
    'ekonomisk förening Kungsbacka',
    'lanthandel sedan 1925',
    'Fjärås butik historia',
  ],
  alternates: { canonical: '/om-oss' },
  openGraph: {
    title: 'Om oss — 100 år av lanthandel i Fjärås',
    description:
      'Modernt detaljhandelsbolag och ekonomisk förening i Fjärås utanför Kungsbacka i ca 100 år.',
    url: 'https://lantmanna.nu/om-oss',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om oss — 100 år av lanthandel i Fjärås',
    description: 'Modernt detaljhandelsbolag och ekonomisk förening i ca 100 år.',
  },
};

export default function OmOssPage() {
  return (
    <article className="bg-cream">
      <header className="relative overflow-hidden border-b border-border/60 bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
            alt="Svensk landsbygd med röd lada och åkrar"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary" />
        </div>
        <div className="container relative py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-wider text-cream/80">Om oss</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
            Till gagn för bygden
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/90">
            Ett modernt detaljhandelsbolag med rötter i bygden — och en värdegrund som bygger på
            att vara till nytta för Fjärås och Kungsbacka.
          </p>
        </div>
      </header>

      <div className="container grid gap-12 py-16 md:grid-cols-[1fr_320px] md:py-24">
        <div className="max-w-none space-y-6 text-foreground/85 [&>p]:leading-relaxed">
          <p>
            Fjärås Lantmanna är ett modernt detaljhandelsbolag med värdegrunden att vara till
            gagn för bygden. Det gör vi genom att erbjuda ett brett standardsortiment, samt
            unika lösningar och produkter — till ett så bra pris som möjligt.
          </p>
          <p>
            I butiken arbetar ett team med olika kompetenser för att kunna hjälpa kunder att ta
            fram rätt lösning efter behov. Hos oss möter du en människa som lyssnar, frågar och
            ger råd — inte bara en kassa.
          </p>

          <h2 className="font-display text-2xl font-semibold text-primary pt-6">Historien</h2>

          <p>
            Fjärås Lantmanna har funnits i cirka 100 år och startades som en inköpsförening för
            lokala bönder och lantbrukare. De första lokalerna låg närmare järnvägsstationen
            (ungefär där Bräutigams Marsipan ligger idag), vilket gjorde det enklare att
            använda tågtransporter.
          </p>
          <p>
            Nuvarande lokaler byggdes på 1960-talet och har därefter byggts om och ut flera
            gånger. Många familjer har handlat här i generationer.
          </p>

          {/* Historiska bilder med årtal */}
          <figure className="my-6 grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-white/40">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/1935-flygfoto-Fjaras-station.png"
                  alt="Flygfoto över Fjärås station 1935"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-center gap-2 px-4 py-3 text-sm">
                <span className="rounded-full bg-primary px-2.5 py-0.5 font-display text-xs font-semibold text-primary-foreground">
                  1935
                </span>
                <span className="text-foreground/75">Flygfoto över Fjärås station</span>
              </figcaption>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-white/40">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Fjaras-Lantmanna-60-tal.jpg"
                  alt="Fjärås Lantmanna i nuvarande lokaler under 1960-talet"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-center gap-2 px-4 py-3 text-sm">
                <span className="rounded-full bg-primary px-2.5 py-0.5 font-display text-xs font-semibold text-primary-foreground">
                  1960-tal
                </span>
                <span className="text-foreground/75">Nuvarande lokaler byggs</span>
              </figcaption>
            </div>
          </figure>

          <h2 className="font-display text-2xl font-semibold text-primary pt-6">
            Ekonomisk förening
          </h2>

          <p>
            Fjärås Lantmanna är en ekonomisk förening — inte ett enskilt familjeföretag. Det
            betyder att vi drivs för bygdens skull, med fokus på långsiktighet snarare än
            kortsiktig vinst. Många som handlar hos oss har handlat här i generationer, och
            butiken finns kvar tack vare att den fyller en funktion i Fjärås.
          </p>

          <h2 className="font-display text-2xl font-semibold text-primary pt-6">
            Brett sortiment
          </h2>

          <p>
            Hos oss hittar du foder till hästen, hunden och katten, arbetskläder och kängor,
            trädgårdsmaskiner och redskap, gasol och svetsgas, färg och kemtekniskt, biodling,
            jord och anläggning, infästning och skruv — samt de gula jordsäckarna som blivit
            något av butikens signum under våren.
          </p>

          <blockquote className="relative my-10 border-l-4 border-earth bg-earth/5 p-6 md:p-8">
            <p className="font-display text-xl leading-snug text-primary md:text-2xl">
              &ldquo;Värdegrunden är enkel — vi ska vara till gagn för bygden. Det har vi
              hållit fast vid i 100 år, och det tänker vi fortsätta med.&rdquo;
            </p>
          </blockquote>

          <h2 className="font-display text-2xl font-semibold text-primary pt-6">
            Hör av dig
          </h2>

          <p>
            Vill du veta mer om något i sortimentet, behöver hjälp att hitta rätt lösning eller
            har en fråga vi inte hunnit svara på här — ring eller besök oss i butiken. Vi
            hjälper dig gärna.{' '}
            <Link href="/kontakt" className="font-medium text-primary underline hover:opacity-80">
              Kontakta oss här
            </Link>
            .
          </p>
        </div>

        <aside className="md:sticky md:top-24 md:self-start">
          <div className="rounded-2xl border border-border/60 bg-white/60 p-6">
            <h3 className="font-display text-lg font-semibold text-primary">Snabbfakta</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-foreground/60">Grundat</dt>
                <dd className="mt-0.5 font-medium">ca 1925</dd>
              </div>
              <div>
                <dt className="text-foreground/60">Ort</dt>
                <dd className="mt-0.5 font-medium">Fjärås, Kungsbacka</dd>
              </div>
              <div>
                <dt className="text-foreground/60">Ägarform</dt>
                <dd className="mt-0.5 font-medium">Ekonomisk förening</dd>
              </div>
              <div>
                <dt className="text-foreground/60">Värdegrund</dt>
                <dd className="mt-0.5 font-medium">Till gagn för bygden</dd>
              </div>
              <div>
                <dt className="text-foreground/60">Specialitet</dt>
                <dd className="mt-0.5 font-medium">
                  Brett sortiment med personlig service
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </article>
  );
}
