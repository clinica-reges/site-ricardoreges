import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/cirurgia-laser-prostata/', priority: 0.9 },
  { path: '/cirurgia-robotica/', priority: 0.9 },
  { path: '/echolaser/', priority: 0.8 },
  { path: '/pos-prostatectomia/', priority: 0.8 },
  { path: '/avaliacao-urodinamica/', priority: 0.8 },
  { path: '/sobre/', priority: 0.7 },
  { path: '/agendar/', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: 'monthly',
    priority: r.priority,
  }));
}
