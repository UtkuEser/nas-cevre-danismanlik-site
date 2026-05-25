import {
  Users,
  FileCheck,
  FileText,
  Trash2,
  Recycle,
  ScrollText,
  SearchCheck,
  BookOpen,
} from "lucide-react";

const SERVICE_ICONS = [
  Users,
  FileCheck,
  FileText,
  Trash2,
  Recycle,
  ScrollText,
  SearchCheck,
  BookOpen,
];

interface ServiceCardProps {
  title: string;
  desc: string;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function ServiceCard({ title, desc, index, isSelected, onClick }: ServiceCardProps) {
  const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
  return (
    <button
      onClick={onClick}
      className={`group text-left flex flex-col gap-4 p-5 rounded-xl border transition-all duration-200 cursor-pointer w-full ${
        isSelected
          ? "bg-white border-[#E8620C] shadow-sm"
          : "bg-white border-[#E2E2E2] hover:border-[#E8620C]/50 hover:shadow-sm"
      }`}
    >
      {/* İkon */}
      <div
        className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-200 ${
          isSelected ? "bg-[#E8620C]" : "bg-[#F7F7F5] group-hover:bg-[#FEF0E6]"
        }`}
      >
        <Icon
          size={20}
          className={`transition-colors duration-200 ${
            isSelected ? "text-white" : "text-[#4B4B4B] group-hover:text-[#E8620C]"
          }`}
          strokeWidth={1.5}
        />
      </div>

      {/* Başlık */}
      <div className="flex flex-col gap-1.5">
        <h3
          className={`font-bold text-sm leading-snug transition-colors duration-200 ${
            isSelected ? "text-[#E8620C]" : "text-[#1C1C1C]"
          }`}
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {title}
        </h3>
        <p
          className="text-[#8A8A8A] text-xs leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {desc}
        </p>
      </div>

      {/* Alt seçim göstergesi */}
      <div
        className={`h-0.5 rounded-full transition-all duration-200 ${
          isSelected ? "bg-[#E8620C] w-8" : "bg-transparent w-0"
        }`}
      />
    </button>
  );
}
