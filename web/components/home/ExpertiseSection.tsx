import ExpertiseCard from "@/components/ui/ExpertiseCard";
import { EXPERTISE_SERVICES } from "@/lib/content";

export default function ExpertiseSection() {
  return (
    <section className="bg-[#F7F7F5] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Başlık */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#E8620C]" />
            <span
              className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Uzmanlık Alanları
            </span>
          </div>
          <h2
            className="text-2xl md:text-[32px] font-extrabold text-[#1C1C1C] leading-snug mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Teknik ve Uluslararası Süreçlerde Uzman Destek
          </h2>
          <p
            className="text-[#4B4B4B] text-base max-w-[560px] leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Sektörde fark yaratan, teknik derinlik gerektiren ve uluslararası standartları kapsayan
            özel hizmet alanlarımız.
          </p>
        </div>

        {/* 2+2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {EXPERTISE_SERVICES.map((item, i) => (
            <ExpertiseCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
