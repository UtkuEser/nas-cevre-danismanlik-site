import SectorItem from "@/components/ui/SectorItem";
import { SECTORS } from "@/lib/content";

export default function SectorsSection() {
  return (
    <section id="sektorler" className="bg-[#F7F7F5] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Başlık */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-px bg-[#E8620C]" />
            <span
              className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Sektörler
            </span>
            <div className="w-8 h-px bg-[#E8620C]" />
          </div>
          <h2
            className="text-2xl md:text-[32px] font-extrabold text-[#1C1C1C] leading-snug mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Hangi Sektörlere Hizmet Veriyoruz?
          </h2>
          <p
            className="text-[#4B4B4B] text-base max-w-[480px] mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Farklı ölçeklerdeki işletmelere çevre danışmanlığı, mevzuata uyum ve mühendislik
            desteği sunuyoruz.
          </p>
        </div>

        {/* Sektör grid — 3/4 kolon, büyük kartlar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SECTORS.map((sector, i) => (
            <SectorItem key={sector} label={sector} index={i} />
          ))}
        </div>

        {/* Alt not */}
        <p
          className="text-center text-[#8A8A8A] text-xs mt-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Sektörünüz listede yer almıyorsa{" "}
          <a href="/basvuru" className="text-[#E8620C] hover:underline">
            bizimle iletişime geçin
          </a>
          , faaliyet alanınıza özel değerlendirme yapalım.
        </p>
      </div>
    </section>
  );
}
