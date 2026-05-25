import { CheckCircle2 } from "lucide-react";
import { WHY_NAS } from "@/lib/content";

export default function WhyNasSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol — başlık ve madde listesi */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#E8620C]" />
              <span
                className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Neden Nas?
              </span>
            </div>
            <h2
              className="text-2xl md:text-[32px] font-extrabold text-[#1C1C1C] leading-snug mb-8"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Neden Nas Çevre Danışmanlık?
            </h2>
            <ul className="flex flex-col gap-4">
              {WHY_NAS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#E8620C] mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span
                    className="text-[#4B4B4B] text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ — dekoratif görsel panel */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="w-full aspect-square max-w-[360px] bg-[#F7F7F5] rounded-2xl border border-[#E2E2E2] flex items-center justify-center overflow-hidden">
              {/* Çizgisel teknik illüstrasyon */}
              <svg
                viewBox="0 0 320 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-64 h-64 opacity-60"
              >
                {/* Merkez onay dairesi */}
                <circle cx="160" cy="160" r="60" stroke="#E8620C" strokeWidth="1.5" />
                <circle cx="160" cy="160" r="80" stroke="#E2E2E2" strokeWidth="1" strokeDasharray="4 4" />
                <polyline
                  points="140,160 155,175 180,148"
                  stroke="#E8620C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Belge ikonları */}
                <rect x="30" y="60" width="60" height="75" rx="2" stroke="#1C1C1C" strokeWidth="1" />
                <line x1="42" y1="82" x2="78" y2="82" stroke="#1C1C1C" strokeWidth="1" />
                <line x1="42" y1="94" x2="78" y2="94" stroke="#1C1C1C" strokeWidth="1" />
                <line x1="42" y1="106" x2="68" y2="106" stroke="#1C1C1C" strokeWidth="1" />
                {/* Sağ belge */}
                <rect x="230" y="60" width="60" height="75" rx="2" stroke="#1C1C1C" strokeWidth="1" />
                <line x1="242" y1="82" x2="278" y2="82" stroke="#1C1C1C" strokeWidth="1" />
                <line x1="242" y1="94" x2="278" y2="94" stroke="#1C1C1C" strokeWidth="1" />
                <line x1="242" y1="106" x2="268" y2="106" stroke="#1C1C1C" strokeWidth="1" />
                {/* Alt bağlantı çizgileri */}
                <line x1="90" y1="97" x2="105" y2="130" stroke="#E2E2E2" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="230" y1="97" x2="215" y2="130" stroke="#E2E2E2" strokeWidth="1" strokeDasharray="3 3" />
                {/* Alt fabrika */}
                <rect x="110" y="240" width="100" height="50" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="125" y="218" width="15" height="22" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="180" y="218" width="15" height="22" stroke="#1C1C1C" strokeWidth="1" />
                <line x1="110" y1="260" x2="210" y2="260" stroke="#E2E2E2" strokeWidth="1" />
                {/* Bağlantı */}
                <line x1="160" y1="220" x2="160" y2="240" stroke="#E2E2E2" strokeWidth="1" strokeDasharray="3 3" />
              </svg>
            </div>

            {/* Köşe turuncu accent */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#E8620C] rounded-tr-lg opacity-40" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#E8620C] rounded-bl-lg opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
