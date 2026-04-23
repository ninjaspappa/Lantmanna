import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Om oss',
  description:
    'Fjärås Lantmanna — lanthandel i Fjärås utanför Kungsbacka i över 100 år. Familjeägd butik med fokus på kvalitet, lokal kännedom och personlig service.',
  alternates: { canonical: '/om-oss' },
};

export default function OmOssPage() {
  return (
    <article className="bg-cream">
      <header className="relative overflow-hidden border-b border-border/60 bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2000&q=80"
            alt="Svenskt landskap med gård och åkrar"
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
            100 år av lanthandel i Fjärås
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/90">
            Vi har sålt foder, frön och redskap till bönder och villaägare i Fjärås sedan
            mellankrigstiden. Sortimentet har förändrats — viljan att hjälpa till har inte.
          </p>
        </div>
      </header>

      <div className="container grid gap-12 py-16 md:grid-cols-[1fr_320px] md:py-24">
        <div className="max-w-none space-y-6 text-foreground/85 [&>p]:leading-relaxed">
          <p>
            Fjärås Lantmanna startade som en liten lanthandel i Fjärås samhälle söder om Kungsbacka
            — en butik där bönderna hämtade foder, fröer och redskap på vägen hem från åkern.
            Under snart 100 år har butiken stått kvar på samma plats, drivits vidare av generation
            efter generation och vuxit i takt med bygden.
          </p>

          <p>
            Vi är fortfarande en klassisk lanthandel i ordets bästa bemärkelse. Här finns foder
            till hästen, grisen, kon, hönan och katten. Här finns trädgårdsmaskiner som håller,
            arbetskläder och kängor för den som jobbar ute året runt, gasol till grillen och
            stugan, och färg till det som behöver målas om. Och så — sedan flera år tillbaka — de
            gula jordsäckarna som blivit något av butikens signum under våren.
          </p>

          <figure className="my-4 overflow-hidden rounded-2xl">
            <div className="relative aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
                alt="Röd lantgård i svensk sommarkväll"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </figure>

          <h2 className="font-display text-2xl font-semibold text-primary pt-6">
            Familjeägd tradition
          </h2>

          <p>
            Det som skiljer oss från kedjebutikerna är att vi känner våra kunder. Många som kommer
            in genom dörren har handlat hos oss i decennier — en del är tredje generationen som
            fortsätter komma till samma butik som farfar gjorde. Det är en förmån vi tar på
            allvar, och vi försöker leva upp till den varje dag genom personlig service och ett
            sortiment som faktiskt motsvarar det lokala behovet.
          </p>

          <h2 className="font-display text-2xl font-semibold text-primary pt-6">
            Kvalitet framför kvantitet
          </h2>

          <p>
            Vi väljer våra leverantörer med omsorg. Det märks i hyllorna — här hittar du Krafft
            och Brogaarden till hästen, Bozita och Doggy till hunden, Carhartt och Blundstone för
            den som jobbar ute, Honda och Ryobi till gräsmattan och AGA till gasflaskan. Märken
            som levererar år efter år, och som vi själva använder hemma.
          </p>

          <blockquote className="relative my-10 border-l-4 border-earth bg-earth/5 p-6 md:p-8">
            <p className="font-display text-xl leading-snug text-primary md:text-2xl">
              &ldquo;En lanthandel är inte bara en butik — det är en plats där bygden möts. Det
              har vi hållit fast vid i 100 år, och det tänker vi fortsätta med.&rdquo;
            </p>
          </blockquote>

          <figure className="my-4 grid grid-cols-2 gap-3">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
                alt="Foderhyllor i lanthandel"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                alt="Häst i svensk hage"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
              />
            </div>
          </figure>

          <h2 className="font-display text-2xl font-semibold text-primary pt-6">
            Lokal kännedom
          </h2>

          <p>
            Vi vet vad som behövs när våren kommer och traktorerna ska ut på åkrarna. Vi vet när
            hästarna byter foder, när hundarna börjar fälla päls och när det är dags för nya
            bevattningsslangar i villaträdgården. Den lokala kännedomen gör att vi kan fylla
            hyllorna i rätt ordning — och ge rätt råd på köpet.
          </p>

          <h2 className="font-display text-2xl font-semibold text-primary pt-6">
            Personlig service
          </h2>

          <p>
            Vi är fortfarande en butik där du pratar med en människa bakom disken. Har du en
            fråga om vilket foder som passar din häst, hur mycket gasol du behöver till helgen
            eller vad skillnaden är mellan två trädgårdsslangar — fråga oss. Vi har svaret, och
            har vi det inte tar vi reda på det.
          </p>

          <p>
            Välkommen in i butiken, eller hör av dig om du undrar över något.{' '}
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
                <dd className="mt-0.5 font-medium">
                  {/* TODO: Jesper — bekräfta exakt startår */}
                  ca 1925
                </dd>
              </div>
              <div>
                <dt className="text-foreground/60">Ort</dt>
                <dd className="mt-0.5 font-medium">Fjärås, Kungsbacka</dd>
              </div>
              <div>
                <dt className="text-foreground/60">Ägarform</dt>
                <dd className="mt-0.5 font-medium">Familjeägd</dd>
              </div>
              <div>
                <dt className="text-foreground/60">Specialitet</dt>
                <dd className="mt-0.5 font-medium">
                  Foder, trädgård, arbetskläder, jordsäckar
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </article>
  );
}
