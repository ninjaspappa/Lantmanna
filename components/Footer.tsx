import Link from 'next/link';
import { openingHours } from '@/lib/openingHours';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
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
          <ul className="mt-3 space-y-1 text-sm text-primary-foreground/80">
            <li>Mån–Fre: {openingHours.mondayToFriday}</li>
            <li>Lördag: {openingHours.saturday}</li>
            <li>Söndag: {openingHours.sunday}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Snabblänkar</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <Link href="/jordsackar" className="text-primary-foreground/80 hover:text-primary-foreground">
                Jordsäckar
              </Link>
            </li>
            <li>
              <Link href="/om-oss" className="text-primary-foreground/80 hover:text-primary-foreground">
                Om oss
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-primary-foreground/80 hover:text-primary-foreground">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/integritet" className="text-primary-foreground/80 hover:text-primary-foreground">
                Integritetspolicy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container flex flex-col items-center justify-between gap-2 py-4 text-xs text-primary-foreground/70 sm:flex-row">
          <p>© {year} Fjärås Lantmanna</p>
          <Link href="/integritet" className="hover:text-primary-foreground">
            Integritetspolicy
          </Link>
        </div>
      </div>
    </footer>
  );
}
