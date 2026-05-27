import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { REGIONS_SEO } from "@/lib/regionsSeo";
import { SERVICES_SEO } from "@/lib/servicesSeo";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return REGIONS_SEO.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const region = REGIONS_SEO.find((r) => r.slug === slug);
  if (!region) return {};
  return buildMetadata({
    title: region.metaTitle,
    description: region.metaDescription,
    path: `/bolgeler/${region.slug}`,
  });
}

export default async function RegionPage({ params }: PageProps) {
  const { slug } = await params;
  const region = REGIONS_SEO.find((r) => r.slug === slug);
  if (!region) notFound();

  return (
    <main className="pt-16">

      {/* Hero */}
      <div className="bg-[#F7F7F5] border-b border-[#E2E2E2]">
        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
          <nav className="flex items-center gap-2 text-xs text-[#8A8A8A] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link href="/" className="hover:text-[#E8620C] transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#4B4B4B]">Bölgeler</span>
            <span>/</span>
            <span className="text-[#4B4B4B]">{region.city}</span>
          </nav>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#E8620C]" />
            <span
              className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Hizmet Bölgeleri
            </span>
          </div>
          <h1
            className="text-[28px] md:text-[40px] font-extrabold text-[#1C1C1C] leading-snug mb-5 max-w-[680px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {region.city} Çevre Danışmanlık Hizmetleri
          </h1>
          <p
            className="text-[#4B4B4B] text-base md:text-lg leading-relaxed mb-8 max-w-[600px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {region.intro}
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

            {/* Hangi işletmeler */}
            <section className="mb-12">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {region.city}&apos;da Çevre Danışmanlığı Hangi İşletmeler İçin Önemlidir?
              </h2>
              <div className="w-10 h-0.5 bg-[#E8620C] mb-5" />
              <p
                className="text-[#4B4B4B] text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {region.relevantBusinesses}
              </p>
            </section>

            {/* Sunulan hizmetler */}
            <section className="mb-12">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Sunulan Çevre Danışmanlık Hizmetleri
              </h2>
              <div className="w-10 h-0.5 bg-[#E8620C] mb-5" />
              <p
                className="text-[#4B4B4B] text-base leading-relaxed mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {region.servicesText}
              </p>
              {/* İlgili hizmet linkleri */}
              <div className="grid sm:grid-cols-2 gap-3">
                {SERVICES_SEO.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/hizmetler/${service.slug}`}
                    className="flex items-center justify-between gap-3 px-4 py-3 border border-[#E2E2E2] rounded-lg hover:border-[#E8620C]/60 hover:bg-[#FEF0E6]/40 transition-all group"
                  >
                    <span
                      className="text-[#1C1C1C] text-sm font-semibold group-hover:text-[#E8620C] transition-colors"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {service.title}
                    </span>
                    <ArrowRight size={14} className="text-[#8A8A8A] group-hover:text-[#E8620C] shrink-0 transition-colors" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Süreç */}
            <section className="mb-12">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Çevre İzin, Beyan ve Denetim Süreçleri
              </h2>
              <div className="w-10 h-0.5 bg-[#E8620C] mb-5" />
              <p
                className="text-[#4B4B4B] text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {region.processText}
              </p>
            </section>

            {/* Nas Çevre yaklaşımı */}
            <section className="mb-14 bg-[#F7F7F5] border border-[#E2E2E2] rounded-xl p-6 md:p-8">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#1C1C1C] mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Nas Çevre ile Süreç Yönetimi
              </h2>
              <p
                className="text-[#4B4B4B] text-base leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {region.nasApproach}
              </p>
            </section>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-[#1C1C1C] rounded-xl">
              <div>
                <p
                  className="text-white font-bold text-base mb-1"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {region.city} için başvuru yapın
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
