import { siteConfig } from "@/lib/siteConfig";

export const SITE_URL = siteConfig.url;

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
    },
  };
}
