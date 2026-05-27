import { siteConfig } from "@/lib/siteConfig";

const SITE_URL = siteConfig.url;
const ORG_NAME = siteConfig.name;
const LOGO_URL = `${SITE_URL}${siteConfig.logo}`;
const AREA_SERVED = [
  "Uşak",
  "Kütahya",
  "Afyonkarahisar",
  "Denizli",
  "Manisa",
  "İzmir",
];

export type SchemaFAQ = { q: string; a: string };
export type BreadcrumbItem = { name: string; url: string };

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE_URL,
    description: siteConfig.description,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    areaServed: AREA_SERVED,
    knowsAbout: [
      "Çevre Danışmanlığı",
      "Çevre İzin ve Lisans",
      "ÇED Süreçleri",
      "Atık Yönetimi",
      "Sıfır Atık Danışmanlığı",
      "Çevre Beyanları",
      "Denetim Hazırlığı",
      "Mevzuat Takibi",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: ORG_NAME,
    url: SITE_URL,
    image: LOGO_URL,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressStreet,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
    areaServed: AREA_SERVED,
    priceRange: "$$",
  };
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    areaServed: AREA_SERVED,
    url,
  };
}

export function faqSchema(faqs: SchemaFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema({
  headline,
  description,
  url,
  datePublished,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    datePublished,
    dateModified: datePublished,
  };
}
