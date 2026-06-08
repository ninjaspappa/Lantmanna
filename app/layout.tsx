import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CatPaws from '@/components/CatPaws';
import { Analytics } from '@vercel/analytics/next';
import {
  JsonLd,
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from '@/components/StructuredData';
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

export const viewport: Viewport = {
  themeColor: '#2f5d3a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://lantmanna.nu'),
  title: {
    default: 'Fjärås Lantmanna — lanthandel i Kungsbacka sedan 1925',
    template: '%s | Fjärås Lantmanna',
  },
  description:
    'Lanthandel i Fjärås utanför Kungsbacka sedan 1925. Foder, trädgård, arbetskläder, gasol, jord och verkstad. Personlig service och de gula jordsäckarna — Plantjord 50, 17,90 kr/säck.',
  applicationName: 'Fjärås Lantmanna',
  authors: [{ name: 'Fjärås Lantmanna' }],
  generator: 'Next.js',
  keywords: [
    'Fjärås Lantmanna',
    'Lantmanna Fjärås',
    'lanthandel Kungsbacka',
    'lantbruksaffär Kungsbacka',
    'Kungsbacka lantmanna',
    'Fjärås butik',
    'foder Kungsbacka',
    'hästfoder Fjärås',
    'hundmat Kungsbacka',
    'kattmat Fjärås',
    'arbetskläder Kungsbacka',
    'Carhartt Kungsbacka',
    'gasol Kungsbacka',
    'svetsgas Fjärås',
    'plantjord Kungsbacka',
    'jord på pall Kungsbacka',
    'planteringsjord Fjärås',
    'Plantjord 50',
    'jordsäckar Kungsbacka',
    'trädgård Kungsbacka',
    'biodling Halland',
    'verkstad gräsklippare Kungsbacka',
    'service motorsåg Kungsbacka',
    'Onsala Åsa Frillesås Fjärås',
  ],
  category: 'shopping',
  alternates: {
    canonical: '/',
    languages: { 'sv-SE': '/' },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: 'Fjärås Lantmanna',
    url: 'https://lantmanna.nu',
    title: 'Fjärås Lantmanna — lanthandel i Kungsbacka sedan 1925',
    description:
      'Foder, trädgård, arbetskläder, gasol, jord och verkstad i Fjärås utanför Kungsbacka. Personlig service i över 100 år.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fjärås Lantmanna — lanthandel i Kungsbacka sedan 1925',
    description:
      'Foder, trädgård, arbetskläder, gasol och jordsäckar i Fjärås. Personlig service i över 100 år.',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon',
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={organizationJsonLd()} />
      </head>
      <body className="min-h-screen bg-cream text-foreground antialiased">
        <Navbar />
        <CatPaws />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <Analytics />
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
