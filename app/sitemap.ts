import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { UPDATED } from '@/lib/jsonld';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 1 }];
}
