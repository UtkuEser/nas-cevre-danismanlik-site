import { Scale, ClipboardCheck, Wrench } from "lucide-react";

const ICONS = [Scale, ClipboardCheck, Wrench];

interface TrustCardProps {
  title: string;
  desc: string;
  index: number;
}

export default function TrustCard({ title, desc, index }: TrustCardProps) {
  const Icon = ICONS[index % ICONS.length];
  return (
    <div className="relative flex items-start gap-5 p-6 bg-white border border-[#E2E2E2] rounded-xl overflow-hidden">
      {/* Sol turuncu accent çizgi */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E8620C] rounded-l-xl" />

      {/* İkon */}
      <div className="w-12 h-12 rounded-xl bg-[#FEF0E6] flex items-center justify-center shrink-0">
        <Icon size={24} className="text-[#E8620C]" strokeWidth={1.5} />
      </div>

      {/* Metin */}
      <div className="flex flex-col gap-1.5">
        <h3
          className="text-[#1C1C1C] font-bold text-base leading-snug"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {title}
        </h3>
        <p
          className="text-[#4B4B4B] text-sm leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
