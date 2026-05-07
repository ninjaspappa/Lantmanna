import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lantmanna.nu';
  const now = new Date();
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/jordsackar', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/kontakt', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/om-oss', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/integritet', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
