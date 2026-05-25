import FAQItem from "@/components/ui/FAQItem";
import { FAQS } from "@/lib/content";
import Link from "next/link";

export default function FAQSection() {
  return (
    <section id="sss" className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Başlık */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-px bg-[#E8620C]" />
            <span
              className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Sık Sorulan Sorular
            </span>
            <div className="w-8 h-px bg-[#E8620C]" />
          </div>
          <h2
            className="text-2xl md:text-[32px] font-extrabold text-[#1C1C1C] leading-snug mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Çevre Danışmanlığı Hakkında
            <br />
            <span className="text-[#E8620C]">Sık Sorulan Sorular</span>
          </h2>
          <p
            className="text-[#4B4B4B] text-base max-w-[520px] mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Çevre mevzuatı, izin süreçleri ve danışmanlık hizmetlerimiz hakkında en çok merak
            edilen soruları ve yanıtlarını aşağıda bulabilirsiniz.
          </p>
        </div>

        {/* Accordion listesi */}
        <div className="max-w-[820px] mx-auto">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}

          {/* Alt CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#F7F7F5] border border-[#E2E2E2] rounded-xl">
            <div>
              <p
                className="text-[#1C1C1C] font-bold text-base"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Sorunuzu bulamadınız mı?
              </p>
              <p
                className="text-[#4B4B4B] text-sm mt-0.5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Başvuru formunu doldurarak özel değerlendirme talep edebilirsiniz.
              </p>
            </div>
            <Link
              href="/basvuru"
              className="shrink-0 inline-flex items-center px-6 py-3 bg-[#E8620C] text-white text-sm font-semibold rounded-lg hover:bg-[#CF5409] transition-colors"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Başvuru Yap
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
