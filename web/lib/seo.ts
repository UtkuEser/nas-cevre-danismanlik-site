import { siteConfig } from "@/lib/siteConfig";

export const SITE_URL = siteConfig.url;
const OG_IMAGE = `${SITE_URL}${siteConfig.ogImage}`;

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website" as const,
      locale: "tr_TR",
      siteName: "Nas Çevre Danışmanlık Mühendislik",
      images: [{ url: OG_IMAGE, width: 512, height: 512, alt: title }],
    },
    twitter: {
      card: "summary" as const,
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
