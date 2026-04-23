import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Sprout } from 'lucide-react';

// CC0-equivalent Unsplash photo — warm Swedish/Nordic countryside barn.
// Source: https://unsplash.com/photos/cd271d694d30 (Unsplash License: free commercial use).
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2400&q=80';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt="Svensk landsbygd — åker och röd lada i kvällssol"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/55 to-earth/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
      </div>

      <div className="container flex min-h-[72vh] flex-col justify-end py-20 md:min-h-[82vh] md:py-32">
        <p className="mb-4 inline-flex max-w-max items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-cream backdrop-blur">
          <Sprout className="h-3.5 w-3.5" aria-hidden />
          Lanthandel i Fjärås sedan 1925
        </p>

        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream drop-shadow-sm md:text-7xl">
          Fjärås Lantmanna
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-cream/90 md:text-xl">
          I 100 år har vi varit lanthandeln i Fjärås utanför Kungsbacka — foder, trädgård, gasol,
          arbetskläder och allt däremellan. Personlig service och lokal kännedom sedan tre
          generationer.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/jordsackar"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-earth px-6 py-3.5 text-sm font-semibold text-earth-foreground shadow-lg shadow-black/20 transition hover:bg-earth/90"
          >
            Jordsäckar nu 19 kr/st
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/kontakt#karta"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/10 px-6 py-3.5 text-sm font-semibold text-cream backdrop-blur transition hover:bg-white/20"
          >
            <MapPin className="h-4 w-4" aria-hidden />
            Hitta hit
          </Link>
        </div>
      </div>
    </section>
  );
}
