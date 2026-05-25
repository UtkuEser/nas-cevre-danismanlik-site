import TrustCard from "@/components/ui/TrustCard";
import { TRUST_MESSAGE } from "@/lib/content";
import { AlertTriangle } from "lucide-react";

export default function TrustMessageSection() {
  return (
    <section className="relative bg-[#F7F7F5] py-16 md:py-24 overflow-hidden">
      {/* Arka plan çizgisel dekor */}
      <div className="absolute right-0 top-0 bottom-0 pointer-events-none select-none" aria-hidden>
        <svg
          className="h-full w-[320px] opacity-[0.045]"
          viewBox="0 0 320 600"
          fill="none"
          preserveAspectRatio="xMaxYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="60" y="80" width="200" height="280" stroke="#1C1C1C" strokeWidth="1" />
          <rect x="80" y="60" width="200" height="280" stroke="#1C1C1C" strokeWidth="1" />
          <line x1="60" y1="160" x2="260" y2="160" stroke="#1C1C1C" strokeWidth="0.8" />
          <line x1="60" y1="220" x2="260" y2="220" stroke="#1C1C1C" strokeWidth="0.8" />
          <line x1="60" y1="280" x2="230" y2="280" stroke="#1C1C1C" strokeWidth="0.8" />
          <circle cx="240" cy="440" r="50" stroke="#E8620C" strokeWidth="1" />
          <polyline points="218,440 232,456 264,422" stroke="#E8620C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="80" y1="500" x2="280" y2="500" stroke="#1C1C1C" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">

          {/* Sol — güçlü metin */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-px bg-[#E8620C]" />
              <span
                className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Risk & Uyumluluk
              </span>
            </div>

            <h2
              className="text-2xl md:text-[32px] font-extrabold text-[#1C1C1C] leading-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {TRUST_MESSAGE.title}
            </h2>

            <p
              className="text-[#4B4B4B] text-base leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {TRUST_MESSAGE.body}
            </p>

            {/* Uyarı kutusu */}
            <div className="flex items-start gap-3 p-4 bg-white border border-[#E8620C]/20 rounded-xl">
              <AlertTriangle size={20} className="text-[#E8620C] shrink-0 mt-0.5" strokeWidth={1.5} />
              <p
                className="text-[#4B4B4B] text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                İşletmelerin çevre mevzuatına uyum yükümlülükleri, faaliyet alanı ve kapasitelerine
                göre farklılık göstermektedir. Yükümlülüklerinizi doğru belirlemek için uzman
                değerlendirmesi kritik önem taşır.
              </p>
            </div>

            {/* Turuncu ayırıcı çizgi */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-12 h-px bg-[#E8620C]" />
              <span
                className="text-[#8A8A8A] text-xs"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Nas Çevre Danışmanlık Mühendislik
              </span>
            </div>
          </div>

          {/* Sağ — 3 güçlü kart */}
          <div className="flex flex-col gap-4">
            {TRUST_MESSAGE.cards.map((card, i) => (
              <TrustCard key={card.title} title={card.title} desc={card.desc} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
