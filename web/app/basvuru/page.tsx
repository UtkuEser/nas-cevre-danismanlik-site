import type { Metadata } from "next";
import ApplicationForm from "@/components/basvuru/ApplicationForm";
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { FOOTER } from "@/lib/content";

export const metadata: Metadata = {
  title: "Başvuru Yap | Nas Çevre Danışmanlık Mühendislik",
  description:
    "Çevre danışmanlığı, izin, teknik rapor, toprak koruma, LWG ve denetim danışmanlığı ihtiyaçlarınız için Nas Çevre Danışmanlık başvuru formunu doldurun.",
};

const TRUST_POINTS = [
  "Başvurunuz 1 iş günü içinde değerlendirilir",
  "Ücretsiz ön görüşme imkânı",
  "İşletmenize özel çözüm yaklaşımı",
  "Gizlilik ve KVKK uyumu",
];

export default function BasvuruPage() {
  return (
    <main className="pt-16 min-h-screen bg-[#F7F7F5]">
      {/* Sayfa başlığı */}
      <div className="bg-white border-b border-[#E2E2E2]">
        <div className="max-w-[1200px] mx-auto px-6 py-8 md:py-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#E8620C]" />
            <span
              className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Başvuru
            </span>
          </div>
          <h1
            className="text-[22px] md:text-[32px] font-extrabold text-[#1C1C1C] leading-snug mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            İşletmeniz İçin Çevre Süreçlerini Değerlendirelim
          </h1>
          <p
            className="text-[#4B4B4B] text-base leading-relaxed max-w-[560px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Çevre danışmanlığı, izin süreçleri, teknik raporlar, atık yönetimi ve mevzuat uyumu
            ihtiyaçlarınız için formu doldurun; ekibimiz sizinle iletişime geçsin.
          </p>
        </div>
      </div>

      {/* İçerik */}
      <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-14">
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">

          {/* Sol — güven paneli (mobilde sonra gösterilir) */}
          <div className="flex flex-col gap-5 order-2 lg:order-1">

            {/* Güven noktaları */}
            <div className="bg-white border border-[#E2E2E2] rounded-xl p-6 shadow-sm">
              <h2
                className="text-sm font-extrabold text-[#1C1C1C] mb-4 pb-4 border-b border-[#F0F0EE]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Başvurunuz Hakkında
              </h2>
              <ul className="flex flex-col gap-4">
                {TRUST_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={15}
                      className="text-[#E8620C] mt-0.5 shrink-0"
                      strokeWidth={1.5}
                    />
                    <span
                      className="text-[#4B4B4B] text-sm leading-snug"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Doğrudan İletişim */}
            <div className="bg-white border border-[#E2E2E2] rounded-xl p-6 shadow-sm">
              <h2
                className="text-sm font-extrabold text-[#1C1C1C] mb-4 pb-4 border-b border-[#F0F0EE]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Doğrudan İletişim
              </h2>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <Phone size={15} className="text-[#E8620C] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <a
                    href="tel:+905053975054"
                    className="text-[#4B4B4B] text-sm leading-snug hover:text-[#E8620C] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {FOOTER.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={15} className="text-[#E8620C] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <a
                    href="mailto:nasmuhendislik2016@gmail.com"
                    className="text-[#4B4B4B] text-sm leading-snug hover:text-[#E8620C] transition-colors break-all"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {FOOTER.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="text-[#E8620C] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span
                    className="text-[#4B4B4B] text-sm leading-snug"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {FOOTER.contact.address}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sağ — form (mobilde önce gösterilir) */}
          <div className="bg-white border border-[#E0E0E0] rounded-xl p-7 md:p-10 shadow-sm order-1 lg:order-2">
            <ApplicationForm />
          </div>

        </div>
      </div>
    </main>
  );
}
