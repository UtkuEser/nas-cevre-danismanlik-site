import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SERVICES_SEO } from "@/lib/servicesSeo";
import { REGIONS_SEO } from "@/lib/regionsSeo";
import { BLOG_POSTS } from "@/lib/blogSeo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/basvuru`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES_SEO.map((s) => ({
    url: `${SITE_URL}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const regionPages: MetadataRoute.Sitemap = REGIONS_SEO.map((r) => ({
    url: `${SITE_URL}/bolgeler/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishDate),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...regionPages, ...blogPages];
}
