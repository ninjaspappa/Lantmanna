'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Hem' },
  { href: '/jordsackar', label: 'Jordsäckar' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary-foreground/10 bg-primary text-primary-foreground backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-primary-foreground"
          onClick={() => setOpen(false)}
        >
          Fjärås Lantmanna
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-primary-foreground/85 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary-foreground/85 hover:bg-primary-foreground/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          'md:hidden overflow-hidden border-t border-primary-foreground/15 bg-primary transition-[max-height] duration-300',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        <ul className="container flex flex-col py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-base font-medium text-primary-foreground/85 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
