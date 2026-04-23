'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Higher = more parallax. Keep between 0.1–0.4 for a subtle effect. */
  strength?: number;
  sizes?: string;
}

export default function ParallaxImage({
  src,
  alt,
  priority,
  className = '',
  strength = 0.25,
  sizes = '100vw',
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // Only apply while element is near viewport
        if (rect.bottom < -vh || rect.top > vh * 2) {
          ticking = false;
          return;
        }
        const offset = (rect.top + rect.height / 2 - vh / 2) * -strength;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.12)`;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [strength]);

  return (
    <div className={`absolute inset-0 will-change-transform ${className}`} ref={ref}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
