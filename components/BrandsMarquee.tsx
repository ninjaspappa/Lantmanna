'use client';

// Brand marquee — 28 logos hosted locally under /public/brands/
// Download-script status (last run): 28/28 succeeded — no 404s, no text-pill fallbacks needed.
// If future re-runs 404 on any URL, add the brand name to MISSING_LOGOS below;
// those will render as a styled text pill instead of a broken image.

const MISSING_LOGOS = new Set<string>([
  // e.g. 'Hippo' — populate from download-brands.sh failures
]);

export const brands = [
  { name: 'Honda', logo: '/brands/honda.png', url: 'https://honda.se' },
  { name: 'Carhartt', logo: '/brands/carhartt.png', url: 'https://carhartt.com' },
  { name: 'Blundstone', logo: '/brands/blundstone.png', url: 'https://blundstone.se' },
  { name: 'Gardena', logo: '/brands/gardena.png', url: 'https://gardena.com' },
  { name: 'Krafft', logo: '/brands/krafft.png', url: 'https://kraffthastfoder.se' },
  { name: 'Bozita', logo: '/brands/bozita.png', url: 'https://bozita.se' },
  { name: 'Ryobi', logo: '/brands/ryobi.png', url: 'https://ryobitools.eu' },
  { name: 'Teknos', logo: '/brands/teknos.png', url: 'https://teknos.com' },
  { name: 'Jalas', logo: '/brands/jalas.png', url: 'https://ejendals.com' },
  { name: 'AGA', logo: '/brands/aga.png', url: 'https://aga.se' },
  { name: 'Air Liquide', logo: '/brands/air-liquide.png', url: 'https://airliquide.com' },
  { name: 'Fladen', logo: '/brands/fladen.png', url: 'https://fladen.se' },
  { name: 'Dogman', logo: '/brands/dogman.png', url: 'https://dogman.se' },
  { name: 'Doggy', logo: '/brands/doggy.png', url: 'https://doggy.se' },
  { name: 'Tegera', logo: '/brands/tegera.png', url: 'https://ejendals.com' },
  { name: 'Oregon', logo: '/brands/oregon.png', url: 'https://oregonproducts.com' },
  { name: 'Svenska Foder', logo: '/brands/svenska-foder.png', url: 'https://svenskafoder.se' },
  { name: 'Arion', logo: '/brands/arion.png', url: 'https://arionhorsecare.com' },
  { name: 'Brogaarden', logo: '/brands/brogaarden.png', url: 'https://brogaarden.eu' },
  { name: 'Hippo', logo: '/brands/hippo.png', url: 'https://hippofoder.se' },
  { name: 'Dodson & Horrell', logo: '/brands/dodson-horrell.png', url: 'https://dodsonandhorrell.com' },
  { name: 'Gelia', logo: '/brands/gelia.png', url: 'https://gelia.se' },
  { name: 'Carapax', logo: '/brands/carapax.png', url: 'https://carapax.se' },
  { name: 'Fodax', logo: '/brands/fodax.png', url: 'https://fodax.se' },
  { name: 'Grimsholm', logo: '/brands/grimsholm.png', url: 'https://grimsholm.com' },
  { name: 'Monster', logo: '/brands/monster-kattmat.png', url: 'https://monsterpet.se' },
  { name: 'Mjau', logo: '/brands/mjau.png', url: 'https://mjau.se' },
  { name: 'Everclean', logo: '/brands/everclean.png', url: 'https://everclean.se' },
] as const;

function BrandItem({ name, logo }: { name: string; logo: string }) {
  if (MISSING_LOGOS.has(name)) {
    return (
      <span className="mx-8 inline-flex h-12 shrink-0 items-center rounded-full border border-earth/40 bg-cream px-5 text-sm font-medium text-earth">
        {name}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- small lazy-loaded logos in marquee; plain <img> is intentional per plan.md
    <img
      src={logo}
      alt={name}
      className="mx-8 h-12 w-auto shrink-0 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
      loading="lazy"
      width={48}
      height={48}
    />
  );
}

export default function BrandsMarquee() {
  return (
    <section className="border-y border-border/60 bg-cream py-16">
      <div className="container">
        <h2 className="font-display text-2xl font-semibold text-primary md:text-3xl">
          Varumärken vi säljer
        </h2>
        <p className="mt-2 max-w-2xl text-foreground/70">
          Ett urval av de varumärken du hittar hos oss — från foder och hästvård till arbetskläder,
          trädgårdsmaskiner och gasol.
        </p>
      </div>

      {/* Mobil: swipa själv. Desktop: auto-scroll-marquee. */}
      <div className="lm-wrap group relative mt-10">
        {/* Edge fades — bara på desktop där marquee snurrar */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-cream to-transparent md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-cream to-transparent md:block" />

        <div className="lm-marquee flex w-max items-center px-4 md:px-0">
          {[...brands, ...brands].map((b, i) => (
            <BrandItem key={`${b.name}-${i}`} name={b.name} logo={b.logo} />
          ))}
        </div>
      </div>

      <p className="container mt-4 text-xs text-foreground/55 md:hidden">
        ← Svep för att se alla varumärken →
      </p>

      <style jsx>{`
        /* Mobil: touch-scroll, ingen animation */
        .lm-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x proximity;
          scrollbar-width: none;
        }
        .lm-wrap::-webkit-scrollbar {
          display: none;
        }

        /* Desktop: auto-marquee, ingen manuell scroll */
        @media (min-width: 768px) {
          .lm-wrap {
            overflow-x: hidden;
          }
          @keyframes lm-marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .lm-marquee {
            animation: lm-marquee 45s linear infinite;
            will-change: transform;
          }
          .group:hover .lm-marquee {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lm-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
