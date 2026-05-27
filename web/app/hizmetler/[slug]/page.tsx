import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES_SEO } from "@/lib/servicesSeo";
import { SITE_URL, buildMetadata } from "@/lib/seo";
import FAQItem from "@/components/ui/FAQItem";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_SEO.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_SEO.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/hizmetler/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_SEO.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((rs) => SERVICES_SEO.find((s) => s.slug === rs))
    .filter(Boolean);

  const pageUrl = `${SITE_URL}/hizmetler/${service.slug}`;
  const schemas = [
    serviceSchema({ name: service.title, description: service.metaDescription, url: pageUrl }),
    faqSchema(service.faqs),
    breadcrumbSchema([
      { name: "Ana Sayfa", url: SITE_URL },
      { name: "Hizmetler", url: `${SITE_URL}/#hizmetler` },
      { name: service.title, url: pageUrl },
    ]),
  ];

  return (
    <main className="pt-16">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* Hero */}
      <div className="bg-[#F7F7F5] border-b border-[#E2E2E2]">
        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
          <nav
            className="flex items-center gap-2 text-xs text-[#8A8A8A] mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <Link href="/" className="hover:text-[#E8620C] transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/#hizmetler" className="hover:text-[#E8620C] transition-colors">Hizmetler</Link>
            <span>/</span>
            <span className="text-[#4B4B4B]">{service.title}</span>
          </nav>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#E8620C]" />
            <span
              className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Hizmetlerimiz
            </span>
          </div>
          <h1
            className="text-[28px] md:text-[40px] font-extrabold text-[#1C1C1C] leading-snug mb-5 max-w-[720px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {service.h1}
          </h1>
          <p
            className="text-[#4B4B4B] text-base md:text-lg leading-relaxed mb-3 max-w-[640px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {service.introParagraph1}
          </p>
          <p
            className="text-[#4B4B4B] text-base leading-relaxed mb-8 max-w-[640px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {service.introParagraph2}
          </p>
          <Link
            href="/basvuru"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8620C] text-white text-sm font-semibold rounded-lg hover:bg-[#CF5409] transition-colors"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Başvuru Yap
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>

      {/* İçerik */}
      <div className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[760px]">

            {/* Hizmet Kapsamı */}
            <section className="mb-12">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Hizmet Kapsamı
              </h2>
              <div className="w-10 h-0.5 bg-[#E8620C] mb-6" />
              <ul className="flex flex-col gap-3">
                {service.scopeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="text-[#E8620C] mt-0.5 shrink-0"
                      strokeWidth={1.5}
                    />
                    <span
                      className="text-[#4B4B4B] text-base leading-snug"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Hangi İşletmeler */}
            <section className="mb-12">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Hangi İşletmeler İçin Gereklidir?
              </h2>
              <div className="w-10 h-0.5 bg-[#E8620C] mb-5" />
              <p
                className="text-[#4B4B4B] text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {service.targetBusinesses}
              </p>
            </section>

            {/* Süreç — 4 adım */}
            <section className="mb-12">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Süreç Nasıl İlerler?
              </h2>
              <div className="w-10 h-0.5 bg-[#E8620C] mb-6" />
              <div className="flex flex-col gap-4">
                {service.processSteps.map((step, i) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#E8620C] text-white text-sm font-bold flex items-center justify-center shrink-0" style={{ fontFamily: "Manrope, sans-serif" }}>
                        {i + 1}
                      </div>
                      {i < service.processSteps.length - 1 && (
                        <div className="w-px flex-1 bg-[#E2E2E2] mt-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <p
                        className="font-bold text-[#1C1C1C] text-base mb-1"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="text-[#4B4B4B] text-sm leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Nas Çevre desteği */}
            <section className="mb-12 bg-[#F7F7F5] border border-[#E2E2E2] rounded-xl p-6 md:p-8">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Nas Çevre Bu Süreçte Nasıl Destek Sağlar?
              </h2>
              <p
                className="text-[#4B4B4B] text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {service.nasSupport}
              </p>
            </section>

            {/* SSS */}
            <section className="mb-12">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-6"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Sık Sorulan Sorular
              </h2>
              {service.faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </section>

            {/* İlgili Hizmetler */}
            {relatedServices.length > 0 && (
              <section className="mb-14">
                <h2
                  className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-4"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  İlgili Hizmetler
                </h2>
                <div className="w-10 h-0.5 bg-[#E8620C] mb-6" />
                <div className="grid sm:grid-cols-2 gap-3">
                  {relatedServices.map((rs) => {
                    if (!rs) return null;
                    return (
                      <Link
                        key={rs.slug}
                        href={`/hizmetler/${rs.slug}`}
                        className="flex items-center justify-between gap-3 p-4 border border-[#E2E2E2] rounded-xl hover:border-[#E8620C] hover:bg-[#FFF8F4] transition-colors group"
                      >
                        <span
                          className="text-[#1C1C1C] text-sm font-semibold group-hover:text-[#E8620C] transition-colors"
                          style={{ fontFamily: "Manrope, sans-serif" }}
                        >
                          {rs.title}
                        </span>
                        <ArrowRight
                          size={15}
                          className="text-[#8A8A8A] group-hover:text-[#E8620C] shrink-0 transition-colors"
                          strokeWidth={1.5}
                        />
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-[#1C1C1C] rounded-xl">
              <div>
                <p
                  className="text-white font-bold text-base mb-1"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Bu hizmet için başvuru yapın
                </p>
                <p className="text-[#9A9A9A] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  Ekibimiz 1 iş günü içinde sizinle iletişime geçer.
                </p>
              </div>
              <Link
                href="/basvuru"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#E8620C] text-white text-sm font-semibold rounded-lg hover:bg-[#CF5409] transition-colors"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Başvuru Yap
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
