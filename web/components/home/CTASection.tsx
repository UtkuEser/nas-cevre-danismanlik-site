import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Dekoratif arka plan çizgiler */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        {/* Sol üst turuncu accent köşe */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#E8620C] opacity-20" />
        {/* Sağ alt turuncu accent köşe */}
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#E8620C] opacity-20" />

        {/* Sağ taraf — çizgisel mühendislik/belge illüstrasyonu */}
        <svg
          className="absolute right-8 top-1/2 -translate-y-1/2 w-[280px] h-[220px] opacity-[0.06]"
          viewBox="0 0 280 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Belge yığını */}
          <rect x="40" y="20" width="120" height="160" rx="2" stroke="#1C1C1C" strokeWidth="1.5" />
          <rect x="50" y="10" width="120" height="160" rx="2" stroke="#1C1C1C" strokeWidth="1.5" />
          <rect x="60" y="0" width="120" height="160" rx="2" stroke="#1C1C1C" strokeWidth="1.5" />
          <line x1="80" y1="35" x2="160" y2="35" stroke="#1C1C1C" strokeWidth="1" />
          <line x1="80" y1="52" x2="160" y2="52" stroke="#1C1C1C" strokeWidth="1" />
          <line x1="80" y1="69" x2="140" y2="69" stroke="#1C1C1C" strokeWidth="1" />
          <line x1="80" y1="86" x2="155" y2="86" stroke="#1C1C1C" strokeWidth="1" />
          {/* Onay işareti */}
          <circle cx="210" cy="80" r="32" stroke="#E8620C" strokeWidth="1.5" />
          <polyline
            points="197,80 207,90 224,68"
            stroke="#E8620C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Bağlantı çizgisi */}
          <line x1="180" y1="80" x2="178" y2="80" stroke="#E2E2E2" strokeWidth="1" strokeDasharray="4 4" />
          {/* Alt teknik çizgiler */}
          <line x1="40" y1="190" x2="240" y2="190" stroke="#1C1C1C" strokeWidth="1" />
          <rect x="100" y="170" width="30" height="20" stroke="#1C1C1C" strokeWidth="1" />
          <rect x="150" y="155" width="30" height="35" stroke="#1C1C1C" strokeWidth="1" />
          <rect x="200" y="163" width="25" height="27" stroke="#1C1C1C" strokeWidth="1" />
        </svg>

        {/* Yatay ince çizgi — derinlik hissi */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-[#E2E2E2] opacity-50" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        {/* Üst label */}
        <div className="inline-flex items-center gap-2 mb-6 justify-center">
          <div className="w-8 h-px bg-[#E8620C]" />
          <span
            className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Başvuru
          </span>
          <div className="w-8 h-px bg-[#E8620C]" />
        </div>

        {/* Başlık */}
        <h2
          className="text-2xl md:text-4xl font-extrabold text-[#1C1C1C] leading-snug mb-4 max-w-[600px] mx-auto"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Çevre süreçlerinizi kontrol altına almak için{" "}
          <span className="text-[#E8620C]">ilk adımı atın.</span>
        </h2>

        <p
          className="text-[#4B4B4B] text-base leading-relaxed mb-10 max-w-[480px] mx-auto"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          İşletmenizin çevre mevzuatı, izin, rapor ve denetim süreçlerini birlikte değerlendirelim.
        </p>

        <Button href="/basvuru" variant="primary" className="px-8 py-3.5 text-base">
          Başvuru Yap
        </Button>
      </div>
    </section>
  );
}
