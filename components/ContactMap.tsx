'use client';

import { useCallback } from 'react';
import { useCookieConsent } from '@/components/CookieBanner';
import { MapPin } from 'lucide-react';

const LAT = 57.438151;
const LNG = 12.153275;
const LABEL = 'Fjärås Lantmanna';

// Google Maps embed URL — no API key required for `?q=lat,lng` form.
const mapsEmbedUrl = `https://www.google.com/maps?q=${LAT},${LNG}(${encodeURIComponent(
  LABEL,
)})&z=14&output=embed`;

const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;

export default function ContactMap() {
  const consent = useCookieConsent();

  const accept = useCallback(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('lantmanna-cookie-consent', 'accepted');
    window.dispatchEvent(new Event('lantmanna:consent-change'));
  }, []);

  if (consent === 'accepted') {
    return (
      <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm">
        <iframe
          title="Karta — Fjärås Lantmanna"
          src={mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-border/60 bg-white/60 p-8 text-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <MapPin className="h-5 w-5" aria-hidden />
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-primary">
          Karta laddas först när du godkänt cookies
        </h3>
        <p className="mt-2 max-w-md text-foreground/70">
          Google Maps sätter cookies på din dator. Av integritetsskäl laddar vi kartan först när
          du har godkänt det. Du kan alltid öppna butikens plats direkt i Google Maps nedan.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={accept}
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Godkänn & visa karta
        </button>
        <a
          href={mapsLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-cream px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
        >
          Öppna i Google Maps
        </a>
      </div>
    </div>
  );
}
