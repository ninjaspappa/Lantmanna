'use client';

import { useEffect, useRef, useState } from 'react';
import { Share2, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ShareLocationButtonProps {
  url: string;
  title?: string;
  text?: string;
  className?: string;
}

export default function ShareLocationButton({
  url,
  title,
  text,
  className,
}: ShareLocationButtonProps) {
  const [canShare, setCanShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      setCanShare(true);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const showCopied = () => {
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  const fallbackCopy = (value: string): boolean => {
    if (typeof document === 'undefined') return false;
    try {
      const input = document.createElement('textarea');
      input.value = value;
      input.setAttribute('readonly', '');
      input.style.position = 'absolute';
      input.style.left = '-9999px';
      document.body.appendChild(input);
      input.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(input);
      return ok;
    } catch {
      return false;
    }
  };

  const handleClick = async () => {
    if (typeof navigator === 'undefined') return;

    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title, text, url });
      } catch (err) {
        // Silently swallow AbortError; anything else, try clipboard.
        const name = (err as { name?: string } | null)?.name;
        if (name === 'AbortError') return;
      }
      return;
    }

    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(url);
        showCopied();
        return;
      } catch {
        // fall through
      }
    }

    if (fallbackCopy(url)) {
      showCopied();
      return;
    }

    if (typeof window !== 'undefined') {
      window.alert(`Kopiera länken: ${url}`);
    }
  };

  const Icon = canShare ? Share2 : copied ? Check : Copy;
  const label = copied
    ? 'Länken kopierad!'
    : canShare
      ? 'Dela plats'
      : 'Kopiera länk';

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        aria-label={canShare ? 'Dela plats' : 'Kopiera länk till jordsäckarna'}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-md border-2 border-earth bg-transparent px-5 py-2.5 text-sm font-medium text-earth transition-colors hover:bg-earth hover:text-earth-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-earth focus-visible:ring-offset-2',
          className,
        )}
      >
        <Icon className="h-4 w-4" aria-hidden />
        <span>{label}</span>
      </button>
      <span
        role="status"
        aria-live="polite"
        className="sr-only"
      >
        {copied ? 'Länken kopierad till urklipp.' : ''}
      </span>
    </span>
  );
}
