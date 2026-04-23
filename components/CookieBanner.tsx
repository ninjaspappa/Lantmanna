'use client';

import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'lantmanna-cookie-consent';
export type ConsentValue = 'accepted' | 'declined' | null;

function readConsent(): ConsentValue {
  if (typeof window === 'undefined') return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === 'accepted' || v === 'declined' ? v : null;
}

/**
 * Reactive hook — returns current consent state and updates when
 * localStorage changes (even from other tabs or our own setters).
 */
export function useCookieConsent(): ConsentValue {
  const [consent, setConsent] = useState<ConsentValue>(null);

  useEffect(() => {
    setConsent(readConsent());

    const handler = () => setConsent(readConsent());
    window.addEventListener('storage', handler);
    window.addEventListener('lantmanna:consent-change', handler);

    return () => {
      window.removeEventListener('storage', handler);
      window.removeEventListener('lantmanna:consent-change', handler);
    };
  }, []);

  return consent;
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setConsent(readConsent());
  }, []);

  const set = useCallback((value: 'accepted' | 'declined') => {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event('lantmanna:consent-change'));
    setConsent(value);
  }, []);

  if (!mounted || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Samtycke för cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-cream/95 shadow-lg backdrop-blur"
    >
      <div className="container flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-foreground/80">
          Vi använder endast nödvändiga cookies samt anonym besöksstatistik (Plausible). Google
          Maps laddas först när du godkänner.{' '}
          <a href="/integritet" className="underline hover:text-primary">
            Läs mer
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => set('declined')}
            className="rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
          >
            Avböj
          </button>
          <button
            type="button"
            onClick={() => set('accepted')}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Godkänn
          </button>
        </div>
      </div>
    </div>
  );
}
