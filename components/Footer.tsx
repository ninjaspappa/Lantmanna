import Image from 'next/image';
import Link from 'next/link';
import { openingHours } from '@/lib/openingHours';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Lantmannen-figur — sticker upp ovanför footern, ingen padding */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-56 w-40 select-none sm:h-72 sm:w-56 md:h-96 md:w-64 lg:h-[28rem] lg:w-80">
        <Image
          src="/images/lantmannen.png"
          alt=""
          fill
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 256px, 320px"
          className="object-contain object-bottom"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 grid gap-10 py-12 pr-32 md:grid-cols-3 md:pr-52 lg:pr-60">
        <div>
          <h3 className="font-display text-lg font-semibold">Fjärås Lantmanna</h3>
          <p className="mt-3 text-sm text-primary-foreground/80">
            Fjärås Lantmannaväg 11
            <br />
            439 74 Fjärås
            <br />
            <a href="tel:+46300540005" className="hover:text-primary-foreground">
              0300-54 00 05
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Öppettider</h3>
          <ul className="mt-3 space-y-0.5 text-sm leading-tight text-primary-foreground/80">
            <li>Mån–Fre: {openingHours.mondayToFriday}</li>
            <li>Lördag: {openingHours.saturday}</li>
            <li>Söndag: {openingHours.sunday}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Snabblänkar</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <Link
                href="/jordsackar"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                Jordsäckar
              </Link>
            </li>
            <li>
              <Link
                href="/om-oss"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                Om oss
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-primary-foreground/15">
        <div className="container py-4 pr-32 text-xs text-primary-foreground/70 md:pr-52 lg:pr-60">
          <p>
            © {year} Fjärås Lantmanna
            <span className="mx-2 text-primary-foreground/40">—</span>
            <Link href="/integritet" className="hover:text-primary-foreground">
              Integritetspolicy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
