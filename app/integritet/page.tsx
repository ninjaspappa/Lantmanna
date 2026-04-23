import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description:
    'Så hanterar Fjärås Lantmanna i Kungsbacka personuppgifter, cookies och tredjepartstjänster enligt GDPR. Anonym statistik via Plausible, karta via samtycke.',
  alternates: { canonical: '/integritet' },
};

export default function IntegritetPage() {
  return (
    <article className="bg-cream">
      <header className="border-b border-border/60 bg-white/40">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-primary/80">
            Integritet
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-primary md:text-6xl">
            Integritetspolicy
          </h1>
          <p className="mt-4 text-sm text-foreground/60">Senast uppdaterad: 2026-04-23</p>
        </div>
      </header>

      <div className="container max-w-3xl space-y-6 py-16 text-foreground/85 md:py-20 [&>p]:leading-relaxed">
        <p>
          Fjärås Lantmanna värnar om din integritet. Den här sidan beskriver kortfattat vilka
          personuppgifter vi hanterar när du besöker lantmanna.nu, vilka cookies och
          tredjepartstjänster vi använder samt vilka rättigheter du har enligt dataskydds­förordningen
          (GDPR).
        </p>

        <h2 className="font-display text-2xl font-semibold text-primary pt-4">
          Vilka personuppgifter vi samlar in
        </h2>
        <p>
          Vi samlar inte in några personuppgifter via webbplatsen i normalfallet. Vi driver ingen
          e-handel och har inga kontaktformulär som lagrar dina uppgifter. Kontaktar du oss via
          e-post eller telefon hanterar vi dina uppgifter endast för att kunna svara dig, och
          sparar dem inte längre än nödvändigt.
        </p>

        <h2 className="font-display text-2xl font-semibold text-primary pt-4">
          Cookies och lokal lagring
        </h2>
        <p>
          Vi använder inga spårande cookies för marknadsföring. Det enda vi lagrar i din webbläsare
          är ett litet värde (i <code className="rounded bg-muted px-1 py-0.5 text-xs">localStorage</code>)
          som kommer ihåg om du godkänt eller avböjt vår cookie-banner — så vi inte frågar dig igen
          varje gång du besöker sajten.
        </p>

        <h2 className="font-display text-2xl font-semibold text-primary pt-4">
          Besöksstatistik — Plausible
        </h2>
        <p>
          För att få en grov bild av hur sajten används använder vi{' '}
          <a
            href="https://plausible.io/data-policy"
            className="underline hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plausible Analytics
          </a>
          . Plausible är cookielöst, GDPR-klart och anonymiserat — ingen personlig data samlas in
          eller delas, och du kan inte spåras mellan sajter.
        </p>

        <h2 className="font-display text-2xl font-semibold text-primary pt-4">
          Google Maps — efter samtycke
        </h2>
        <p>
          På kontaktsidan kan en karta från Google Maps visas. Google Maps sätter cookies och
          tillåter Google att samla in information om dig — därför laddar vi kartan först när du
          aktivt godkänt det via cookie-bannern. Innan samtycke visas bara en länk att öppna
          Google Maps i ett nytt fönster på din egen risk.
        </p>

        <h2 className="font-display text-2xl font-semibold text-primary pt-4">Tredjepartstjänster</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Plausible Analytics</strong> — anonym besöksstatistik (EU-baserat).
          </li>
          <li>
            <strong>Google Maps</strong> — visas endast efter samtycke. Google kan samla in
            IP-adress och enhetsinformation.
          </li>
          <li>
            <strong>Vercel</strong> — webbhosting. Vercel behandlar förfrågningar för att servera
            sidan och loggar tekniska uppgifter (t.ex. IP-adress) för drift och säkerhet.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-semibold text-primary pt-4">
          Dina rättigheter enligt GDPR
        </h2>
        <p>
          Du har rätt att begära information om vilka personuppgifter vi har om dig, att få
          felaktiga uppgifter rättade, att begära att vi raderar uppgifter (&rdquo;rätt att bli
          glömd&rdquo;), att begränsa behandlingen samt att invända mot behandling. Du har även
          rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).
        </p>

        <h2 className="font-display text-2xl font-semibold text-primary pt-4">
          Kontakt för dataskyddsfrågor
        </h2>
        <p>
          Har du frågor om hur vi hanterar dina personuppgifter, hör av dig till oss:{' '}
          {/* TODO: Jesper — fyll i e-postadress för dataskyddsfrågor */}
          <strong>TODO: e-post</strong>. Se även vår{' '}
          <Link href="/kontakt" className="underline hover:text-primary">
            kontaktsida
          </Link>
          .
        </p>

        <p className="pt-8 text-sm text-foreground/60">
          Personuppgiftsansvarig: Fjärås Lantmanna. Senast uppdaterad: 2026-04-23.
        </p>
      </div>
    </article>
  );
}
