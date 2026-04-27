import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lantmanna.nu'),
  title: {
    default: 'Fjärås Lantmanna',
    template: '%s | Fjärås Lantmanna',
  },
  description:
    'Fjärås Lantmanna — lokal lantmanna-butik i Kungsbacka. Foder, trädgård, gasol, kläder och de gula jordsäckarna.',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: 'Fjärås Lantmanna',
    url: 'https://lantmanna.nu',
  },
  // TODO: add og:image (1200×630) once available — Agent 2/4
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-cream text-foreground antialiased">
        <Navbar />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <Script
          defer
          strategy="afterInteractive"
          data-domain="lantmanna.nu"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}
