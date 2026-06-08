// JSON-LD structured data — laddas i <head> via layout.
// Konstanterna är factory-funktioner så `dateModified` blir färskt vid varje
// render/revalidate. Daglig cron i app/api/cron/refresh håller datumet rullande
// utan att vi behöver deploya manuellt.

const SITE = 'https://lantmanna.nu';

function nowIso(): string {
  return new Date().toISOString();
}

export function localBusinessJsonLd() {
  return {
  '@context': 'https://schema.org',
  '@type': ['Store', 'LocalBusiness'],
  '@id': `${SITE}/#localbusiness`,
  name: 'Fjärås Lantmanna',
  alternateName: ['Lantmanna Fjärås', 'Fjärås Lantmannaförening'],
  description:
    'Lanthandel i Fjärås utanför Kungsbacka sedan 1925. Foder, trädgård, arbetskläder, gasol, jord och verkstad — personlig service i över 100 år.',
  url: SITE,
  logo: `${SITE}/icon.png`,
  image: `${SITE}/opengraph-image`,
  telephone: '+46300540005',
  email: 'info@lantmanna.nu',
  priceRange: '$$',
  currenciesAccepted: 'SEK',
  paymentAccepted: 'Cash, Credit Card, Invoice',
  foundingDate: '1925',
  slogan: 'Till gagn för bygden',
  dateModified: nowIso(),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fjärås Lantmannaväg 11',
    postalCode: '439 74',
    addressLocality: 'Fjärås',
    addressRegion: 'Halland',
    addressCountry: 'SE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 57.4485,
    longitude: 12.1505,
  },
  areaServed: [
    { '@type': 'City', name: 'Kungsbacka' },
    { '@type': 'City', name: 'Fjärås' },
    { '@type': 'City', name: 'Onsala' },
    { '@type': 'City', name: 'Åsa' },
    { '@type': 'City', name: 'Frillesås' },
    { '@type': 'AdministrativeArea', name: 'Halland' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:30',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '15:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/fjaraslantmanna',
    'https://www.youtube.com/@grasklipparmannen69',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sortiment',
    itemListElement: [
      { '@type': 'OfferCatalog', name: 'Foder & sällskapsdjur' },
      { '@type': 'OfferCatalog', name: 'Trädgård & odling' },
      { '@type': 'OfferCatalog', name: 'Arbetskläder & skor' },
      { '@type': 'OfferCatalog', name: 'Gasol & svetsgas' },
      { '@type': 'OfferCatalog', name: 'Jord & anläggning' },
      { '@type': 'OfferCatalog', name: 'Färg & kemtekniskt' },
      { '@type': 'OfferCatalog', name: 'Infästning & skruv' },
      { '@type': 'OfferCatalog', name: 'Biodling' },
      { '@type': 'OfferCatalog', name: 'Verkstad — service & reparation' },
    ],
  },
  } as const;
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    name: 'Fjärås Lantmanna',
    url: SITE,
    inLanguage: 'sv-SE',
    publisher: { '@id': `${SITE}/#localbusiness` },
    dateModified: nowIso(),
  } as const;
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE}/#organization`,
    name: 'Fjärås Lantmanna',
    url: SITE,
    logo: `${SITE}/icon.png`,
    foundingDate: '1925',
    legalName: 'Fjärås Lantmannaförening ek. för.',
    sameAs: [
      'https://www.facebook.com/fjaraslantmanna',
      'https://www.youtube.com/@grasklipparmannen69',
    ],
    dateModified: nowIso(),
  } as const;
}

export function plantjordProductJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE}/jordsackar#plantjord-50`,
    name: 'Plantjord 50',
    description:
      'Planteringsjord 50 liter — bra kvalité, säljs på pall under tak. 17,90 kr/säck hos Fjärås Lantmanna.',
    brand: { '@type': 'Brand', name: 'Fjärås Lantmanna' },
    category: 'Trädgård > Jord & anläggning',
    image: `${SITE}/images/plantjord-50.png`,
    dateModified: nowIso(),
    offers: {
      '@type': 'Offer',
      price: '17.90',
      priceCurrency: 'SEK',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: `${SITE}/jordsackar`,
      seller: { '@id': `${SITE}/#localbusiness` },
    },
  } as const;
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

type JsonLd = Record<string, unknown> | readonly Record<string, unknown>[];

export function JsonLd({ data }: { data: JsonLd }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
