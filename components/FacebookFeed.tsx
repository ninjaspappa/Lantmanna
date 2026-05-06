'use client';

import { useState } from 'react';
import { Facebook, ExternalLink } from 'lucide-react';

const PAGE_URL =
  'https://www.facebook.com/p/Fj%C3%A4r%C3%A5s-Lantmanna-100063622535503/';

const pluginUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  PAGE_URL,
)}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

export default function FacebookFeed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="bg-cream py-16 md:hidden">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Facebook className="h-3.5 w-3.5" aria-hidden />
              Senaste på Facebook
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              Följ oss på Facebook
            </h2>
            <p className="mt-2 max-w-xl text-foreground/70">
              Erbjudanden, säsongsnyheter och bilder från butiken — direkt från vår sida.
            </p>
          </div>
          <a
            href={PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/60 px-4 py-2 text-sm font-medium text-foreground/80 transition hover:border-primary/40 hover:text-primary"
          >
            Öppna på facebook.com
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>

        {!loaded ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border/70 bg-white/40 p-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2]">
              <Facebook className="h-7 w-7" aria-hidden />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-primary">
              Visa Facebook-flöde
            </h3>
            <p className="mt-2 max-w-md text-sm text-foreground/65">
              Klicka för att ladda flödet. Facebook sätter cookies i din webbläsare när
              flödet laddas — därför väntar vi tills du själv vill se det.
            </p>
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              <Facebook className="h-4 w-4" aria-hidden />
              Ladda flödet
            </button>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
            <iframe
              src={pluginUrl}
              title="Fjärås Lantmanna på Facebook"
              loading="lazy"
              allow="encrypted-media"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[600px] w-full"
              style={{ border: 'none' }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
