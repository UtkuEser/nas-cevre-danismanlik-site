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
        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#E8620C]" />
            <span
              className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Başvuru Formu
            </span>
          </div>
          <h1
            className="text-2xl md:text-[36px] font-extrabold text-[#1C1C1C] leading-snug mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Başvuru ve Ön Görüşme Formu
          </h1>
          <p
            className="text-[#4B4B4B] text-base leading-relaxed max-w-[520px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            İşletmenizin ihtiyaç duyduğu çevre danışmanlığı ve mühendislik süreçlerini
            değerlendirmek için formu doldurun. Ekibimiz sizinle iletişime geçsin.
          </p>
        </div>
      </div>

      {/* İçerik */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-[340px_1fr] gap-10 items-start">

          {/* Sol — güven paneli */}
          <div className="flex flex-col gap-6">
            {/* Güven noktaları */}
            <div className="bg-white border border-[#E2E2E2] rounded-lg p-6">
              <h2
                className="text-base font-bold text-[#1C1C1C] mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Başvurunuz hakkında
              </h2>
              <ul className="flex flex-col gap-3">
                {TRUST_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#E8620C] mt-0.5 shrink-0" strokeWidth={1.5} />
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

            {/* İletişim */}
            <div className="bg-white border border-[#E2E2E2] rounded-lg p-6">
              <h2
                className="text-base font-bold text-[#1C1C1C] mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Doğrudan İletişim
              </h2>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#E8620C] shrink-0" strokeWidth={1.5} />
                  <span className="text-[#4B4B4B] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    {FOOTER.contact.phone}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#E8620C] shrink-0" strokeWidth={1.5} />
                  <span className="text-[#4B4B4B] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    {FOOTER.contact.email}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#E8620C] shrink-0" strokeWidth={1.5} />
                  <span className="text-[#4B4B4B] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    {FOOTER.contact.address}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sağ — form */}
          <div className="bg-white border border-[#E2E2E2] rounded-lg p-6 md:p-8">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </main>
  );
}
