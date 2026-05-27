import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES_SEO } from "@/lib/servicesSeo";
import { buildMetadata } from "@/lib/seo";
import FAQItem from "@/components/ui/FAQItem";

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

  return (
    <main className="pt-16">

      {/* Hero */}
      <div className="bg-[#F7F7F5] border-b border-[#E2E2E2]">
        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
          <nav className="flex items-center gap-2 text-xs text-[#8A8A8A] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
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
            className="text-[28px] md:text-[40px] font-extrabold text-[#1C1C1C] leading-snug mb-5 max-w-[680px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {service.title}
          </h1>
          <p
            className="text-[#4B4B4B] text-base md:text-lg leading-relaxed mb-8 max-w-[600px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {service.intro}
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
              <div className="w-10 h-0.5 bg-[#E8620C] mb-5" />
              <p
                className="text-[#4B4B4B] text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {service.scope}
              </p>
            </section>

            {/* Hangi işletmeler */}
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

            {/* Süreç */}
            <section className="mb-12">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Süreç Nasıl İlerler?
              </h2>
              <div className="w-10 h-0.5 bg-[#E8620C] mb-5" />
              <p
                className="text-[#4B4B4B] text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {service.process}
              </p>
            </section>

            {/* Nas Çevre desteği */}
            <section className="mb-14 bg-[#F7F7F5] border border-[#E2E2E2] rounded-xl p-6 md:p-8">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Nas Çevre Bu Süreçte Nasıl Destek Sağlar?
              </h2>
              <p
                className="text-[#4B4B4B] text-base leading-relaxed mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {service.nasSupport}
              </p>
              <ul className="flex flex-col gap-2.5">
                {["Mevzuata uygun süreç yönetimi", "Yasal sürelerinin takibi", "Teknik doküman hazırlama", "Yetkili makam koordinasyonu"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-[#E8620C] shrink-0" strokeWidth={1.5} />
                    <span className="text-[#4B4B4B] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* SSS */}
            <section className="mb-14">
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
