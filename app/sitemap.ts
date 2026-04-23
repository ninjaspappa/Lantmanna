import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lantmanna.nu';
  const now = new Date();
  const routes: Array<{ path: string; priority: number }> = [
    { path: '/', priority: 1.0 },
    { path: '/jordsackar', priority: 0.9 },
    { path: '/om-oss', priority: 0.7 },
    { path: '/kontakt', priority: 0.8 },
    { path: '/integritet', priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority,
  }));
}
