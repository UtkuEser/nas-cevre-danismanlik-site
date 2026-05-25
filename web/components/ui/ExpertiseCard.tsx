import {
  FileBarChart,
  Layers,
  Droplets,
  Globe,
} from "lucide-react";

const EXPERTISE_ICONS = [FileBarChart, Layers, Droplets, Globe];

interface ExpertiseCardProps {
  title: string;
  desc: string;
  index: number;
}

export default function ExpertiseCard({ title, desc, index }: ExpertiseCardProps) {
  const Icon = EXPERTISE_ICONS[index % EXPERTISE_ICONS.length];
  return (
    <div className="flex flex-col gap-4 p-6 bg-white border border-[#E2E2E2] rounded-lg border-l-[3px] border-l-[#E8620C] hover:shadow-sm transition-shadow duration-200">
      <div className="w-10 h-10 rounded-lg bg-[#FEF0E6] flex items-center justify-center">
        <Icon size={20} className="text-[#E8620C]" strokeWidth={1.5} />
      </div>
      <h3
        className="text-[#1C1C1C] font-bold text-base leading-snug"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {title}
      </h3>
      <p className="text-[#4B4B4B] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
        {desc}
      </p>
    </div>
  );
}
