import Button from "@/components/ui/Button";
import { HERO } from "@/lib/content";
import { Play, ShieldCheck, FileText, Globe } from "lucide-react";

const FEATURE_BADGES = [
  { icon: ShieldCheck, label: "Çevre İzin ve Lisans" },
  { icon: FileText, label: "Teknik Rapor & ÇED" },
  { icon: Globe, label: "LWG Danışmanlığı" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[720px] lg:min-h-[760px] pt-[72px] lg:pt-[200px] pb-16 lg:pb-[80px]">
      <div className="max-w-[1320px] mx-auto px-6">
        {/*
          Mobil (tek kolon):  1-başlık · 2-video · 3-açıklama · 4-butonlar+rozetler
          Desktop (2 kolon):  Sol → başlık/açıklama/butonlar  |  Sağ → video
          HTML sırası mobil akışla uyumlu; desktop explicit grid placement ile yönetilir.
        */}
        <div className="grid lg:grid-cols-[3fr_4fr] gap-4 lg:gap-x-10 lg:gap-y-4">

          {/* ─── 1. BAŞLIK (label + H1) ─── */}
          <div className="lg:col-start-1 lg:row-start-1 flex flex-col gap-2 lg:gap-3">
            {/* Üst etiket */}
            <div className="inline-flex items-center gap-2.5 w-fit">
              <div className="w-6 h-px bg-[#E8620C]" />
              <span
                className="text-[#E8620C] text-[11px] font-semibold uppercase tracking-[0.14em]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Çevre Danışmanlık & Mühendislik
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-[38px] md:text-[44px] lg:text-[50px] font-extrabold leading-[1.1] text-[#1C1C1C]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              İşletmenizin<br />
              Çevre Süreçlerini<br />
              <span className="text-[#E8620C]">Güvenle Yönetin</span>
            </h1>
          </div>

          {/* ─── 2. VİDEO KARTI ─── */}
          {/* Mobil: başlığın hemen altı · Desktop: sağ kolon, tüm satırları kapsar */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:flex lg:items-center relative w-full max-w-[480px] mx-auto lg:max-w-none">
            {/* Teknik köşe frame — sağ üst (yalnızca desktop) */}
            <div
              className="hidden lg:block absolute -top-3 -right-3 w-10 h-10 border-t border-r border-[#E8620C] opacity-40 pointer-events-none"
              aria-hidden
            />

            {/* Video kart */}
            <div className="relative w-full aspect-video bg-white border border-[#E2E2E2] rounded-xl overflow-hidden shadow">

              {/* Arka plan — çizgisel fabrika illüstrasyonu */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.07]"
                viewBox="0 0 560 315"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="265" x2="560" y2="265" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="30" y="145" width="95" height="120" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="50" y="88" width="14" height="57" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="80" y="72" width="14" height="73" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="42" y="175" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="72" y="175" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="102" y="175" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="145" y="110" width="80" height="155" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="162" y="58" width="12" height="52" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="188" y="44" width="12" height="66" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="155" y="140" width="18" height="13" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="185" y="140" width="18" height="13" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="250" y="85" width="100" height="180" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="268" y="32" width="14" height="53" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="306" y="20" width="14" height="65" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="262" y="120" width="22" height="15" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="296" y="120" width="22" height="15" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="262" y="155" width="22" height="15" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="296" y="155" width="22" height="15" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="375" y="100" width="90" height="165" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="392" y="50" width="12" height="50" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="424" y="38" width="12" height="62" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="385" y="135" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="417" y="135" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="449" y="135" width="14" height="14" stroke="#1C1C1C" strokeWidth="0.7" />
                <rect x="485" y="130" width="60" height="135" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="498" y="88" width="10" height="42" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="520" y="76" width="10" height="54" stroke="#1C1C1C" strokeWidth="1" />
                <rect x="18" y="208" width="32" height="44" rx="1" stroke="#E8620C" strokeWidth="0.9" />
                <line x1="24" y1="218" x2="44" y2="218" stroke="#E8620C" strokeWidth="0.7" />
                <line x1="24" y1="226" x2="44" y2="226" stroke="#E8620C" strokeWidth="0.7" />
                <line x1="24" y1="234" x2="38" y2="234" stroke="#E8620C" strokeWidth="0.7" />
                <circle cx="524" cy="220" r="18" stroke="#E8620C" strokeWidth="0.9" />
                <polyline points="516,220 521,226 533,213" stroke="#E8620C" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Üst bar */}
              <div className="absolute top-0 left-0 right-0 flex items-center gap-3 px-4 py-2.5 lg:px-5 lg:py-3 border-b border-[#F0F0EE]">
                <div className="w-[3px] h-4 bg-[#E8620C] rounded-full" />
                <span
                  className="text-[#4B4B4B] text-[10px] lg:text-[11px] font-semibold tracking-wide"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Nas Çevre Danışmanlık Mühendislik
                </span>
              </div>

              {/* Merkez — play butonu */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full bg-[#E8620C] flex items-center justify-center shadow-md hover:bg-[#CF5409] transition-colors cursor-pointer">
                  <Play size={18} className="text-white ml-0.5" fill="white" />
                </div>
              </div>

              {/* Alt bar */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2.5 lg:px-5 lg:py-3 border-t border-[#F0F0EE] bg-white/95">
                <span
                  className="text-[#1C1C1C] text-[11px] lg:text-xs font-bold"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Kurumsal Tanıtım Videosu
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#8A8A8A] border border-[#E2E2E2] rounded px-2 py-0.5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8620C] opacity-60 inline-block" />
                  Yakında
                </span>
              </div>
            </div>

            {/* Teknik köşe frame — sol alt (yalnızca desktop) */}
            <div
              className="hidden lg:block absolute -bottom-3 -left-3 w-8 h-8 border-b border-l border-[#E2E2E2] pointer-events-none"
              aria-hidden
            />
          </div>

          {/* ─── 3. AÇIKLAMA METNİ ─── */}
          <div className="lg:col-start-1 lg:row-start-2">
            <p
              className="text-[#4B4B4B] text-[14px] md:text-[15px] leading-[1.65] md:leading-[1.75] max-w-[440px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {HERO.subtitle}
            </p>
          </div>

          {/* ─── 4. BUTONLAR + ROZETLER ─── */}
          <div className="lg:col-start-1 lg:row-start-3 flex flex-col gap-2.5 lg:gap-3">
            <div className="flex flex-wrap gap-2.5">
              <Button href="/basvuru" variant="primary" className="px-5 py-2.5 lg:px-6 lg:py-3">
                {HERO.cta1}
              </Button>
              <Button href="#hizmetler" variant="ghost" className="px-5 py-2.5 lg:px-6 lg:py-3">
                {HERO.cta2}
              </Button>
            </div>
            <div className="hidden sm:flex sm:flex-wrap gap-2">
              {FEATURE_BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-[#F7F7F5] border border-[#E2E2E2] rounded-md"
                >
                  <Icon size={12} className="text-[#E8620C] shrink-0" strokeWidth={1.5} />
                  <span
                    className="text-[#4B4B4B] text-[11px] font-semibold"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Alt dekoratif fabrika silüeti — yalnızca desktop */}
      <div
        className="hidden lg:block absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none select-none"
        aria-hidden
        style={{ opacity: 0.055 }}
      >
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="188" x2="1440" y2="188" stroke="#1C1C1C" strokeWidth="0.8" />
          <line x1="0" y1="130" x2="1440" y2="130" stroke="#1C1C1C" strokeWidth="0.3" strokeDasharray="6 14" />
          <line x1="0" y1="72" x2="1440" y2="72" stroke="#1C1C1C" strokeWidth="0.3" strokeDasharray="6 14" />
          <rect x="0" y="148" width="110" height="40" stroke="#1C1C1C" strokeWidth="0.7" />
          <rect x="16" y="136" width="12" height="52" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="40" y="126" width="12" height="62" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="12" y="156" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="42" y="156" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="72" y="156" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="120" y="110" width="130" height="78" stroke="#1C1C1C" strokeWidth="0.7" />
          <rect x="140" y="78" width="14" height="32" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="172" y="60" width="14" height="50" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="208" y="70" width="14" height="40" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="132" y="128" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="164" y="128" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="196" y="128" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="132" y="154" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="164" y="154" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="265" y="90" width="160" height="98" stroke="#1C1C1C" strokeWidth="0.7" />
          <rect x="285" y="48" width="16" height="42" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="322" y="30" width="16" height="60" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="360" y="42" width="16" height="48" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="275" y="112" width="24" height="16" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="311" y="112" width="24" height="16" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="347" y="112" width="24" height="16" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="383" y="112" width="28" height="16" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="275" y="142" width="24" height="16" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="311" y="142" width="24" height="16" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="347" y="142" width="24" height="16" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="383" y="142" width="28" height="16" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="275" y="168" width="24" height="20" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="311" y="168" width="24" height="20" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="440" y="118" width="120" height="70" stroke="#1C1C1C" strokeWidth="0.7" />
          <rect x="456" y="88" width="14" height="30" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="488" y="72" width="14" height="46" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="520" y="82" width="14" height="36" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="450" y="136" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="480" y="136" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="510" y="136" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="540" y="136" width="12" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="450" y="162" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="480" y="162" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="576" y="148" width="90" height="40" stroke="#1C1C1C" strokeWidth="0.7" />
          <rect x="590" y="130" width="12" height="18" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="616" y="122" width="12" height="26" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="584" y="158" width="16" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="610" y="158" width="16" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="638" y="158" width="16" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="682" y="105" width="140" height="83" stroke="#1C1C1C" strokeWidth="0.7" />
          <rect x="700" y="68" width="14" height="37" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="734" y="50" width="14" height="55" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="768" y="62" width="14" height="43" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="692" y="124" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="724" y="124" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="756" y="124" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="788" y="124" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="692" y="150" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="724" y="150" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="756" y="150" width="22" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="840" y="122" width="110" height="66" stroke="#1C1C1C" strokeWidth="0.7" />
          <rect x="856" y="92" width="12" height="30" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="886" y="76" width="12" height="46" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="916" y="86" width="12" height="36" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="850" y="140" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="878" y="140" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="906" y="140" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="934" y="140" width="12" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="850" y="164" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="878" y="164" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="968" y="138" width="130" height="50" stroke="#1C1C1C" strokeWidth="0.7" />
          <rect x="984" y="112" width="12" height="26" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="1010" y="98" width="12" height="40" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="1040" y="108" width="12" height="30" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="976" y="152" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1004" y="152" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1032" y="152" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1060" y="152" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1088" y="152" width="18" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1116" y="115" width="100" height="73" stroke="#1C1C1C" strokeWidth="0.7" />
          <rect x="1130" y="82" width="12" height="33" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="1158" y="66" width="12" height="49" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="1186" y="76" width="12" height="39" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="1124" y="134" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1154" y="134" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1184" y="134" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1124" y="160" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1154" y="160" width="20" height="14" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1232" y="148" width="80" height="40" stroke="#1C1C1C" strokeWidth="0.7" />
          <rect x="1248" y="124" width="10" height="24" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="1270" y="110" width="10" height="38" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="1292" y="118" width="10" height="30" stroke="#1C1C1C" strokeWidth="0.6" />
          <rect x="1240" y="158" width="16" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1264" y="158" width="16" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1288" y="158" width="16" height="12" stroke="#1C1C1C" strokeWidth="0.5" />
          <rect x="1320" y="158" width="120" height="30" stroke="#1C1C1C" strokeWidth="0.7" />
        </svg>
      </div>
    </section>
  );
}
