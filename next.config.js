/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'lantmanna.nu' },
      { protocol: 'https', hostname: 'www.lantmanna.nu' },
    ],
  },
  async redirects() {
    return [
      { source: '/foder', destination: '/#sortiment', permanent: true },
      { source: '/fagelmat', destination: '/#sortiment', permanent: true },
      { source: '/sallskapsdjur', destination: '/#sortiment', permanent: true },
      { source: '/biodling', destination: '/#sortiment', permanent: true },
      { source: '/fiske', destination: '/#sortiment', permanent: true },
      { source: '/tradgard', destination: '/#sortiment', permanent: true },
      { source: '/va', destination: '/#sortiment', permanent: true },
      { source: '/farg-kemtekniskt', destination: '/#sortiment', permanent: true },
      { source: '/gasol-industrigas', destination: '/#sortiment', permanent: true },
      { source: '/arbetsklader', destination: '/#sortiment', permanent: true },
      { source: '/gardsrundan', destination: '/kontakt', permanent: true },
    ];
  },
};

module.exports = nextConfig;
