import ProcessStep from "@/components/ui/ProcessStep";
import { PROCESS_STEPS } from "@/lib/content";

export default function ProcessSection() {
  return (
    <section id="surec" className="bg-[#F7F7F5] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Başlık */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-px bg-[#E8620C]" />
            <span
              className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Süreç
            </span>
            <div className="w-8 h-px bg-[#E8620C]" />
          </div>
          <h2
            className="text-2xl md:text-[32px] font-extrabold text-[#1C1C1C] leading-snug"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Danışmanlık Sürecimiz Nasıl İlerliyor?
          </h2>
        </div>

        {/* Adımlar — 4 kolon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              desc={step.desc}
              isLast={i === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
