import { ExternalLink } from 'lucide-react';

// OpenStreetMap-embed — sätter inga tredjeparts-tracking-cookies → ingen consent behövs.
// Funktionella cookies hos osm.org själv (legitimate interest), inte cross-site tracking.

const LAT = 57.438151;
const LNG = 12.153275;
const BBOX_DELTA = 0.008;
const bbox = `${(LNG - BBOX_DELTA).toFixed(5)},${(LAT - BBOX_DELTA / 2).toFixed(5)},${(LNG + BBOX_DELTA).toFixed(5)},${(LAT + BBOX_DELTA / 2).toFixed(5)}`;

const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${LAT},${LNG}`;
const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;
const appleMapsLink = `https://maps.apple.com/?ll=${LAT},${LNG}&q=Fjärås%20Lantmanna`;

export default function ContactMap() {
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm">
        <iframe
          title="Karta — Fjärås Lantmanna"
          src={osmEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full"
        />
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-cream px-4 py-2 font-medium text-foreground hover:bg-muted"
        >
          Öppna i Google Maps
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
        <a
          href={appleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-cream px-4 py-2 font-medium text-foreground hover:bg-muted"
        >
          Öppna i Apple Maps
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </div>
  );
}
