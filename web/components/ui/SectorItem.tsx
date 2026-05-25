import {
  Factory,
  Building2,
  Hotel,
  Hospital,
  HardHat,
  Boxes,
  Zap,
  RotateCcw,
  Sprout,
  Shirt,
  UtensilsCrossed,
  Truck,
} from "lucide-react";

const SECTOR_ICONS = [
  Factory,
  Building2,
  Hotel,
  Hospital,
  HardHat,
  Boxes,
  Zap,
  RotateCcw,
  Sprout,
  Shirt,
  UtensilsCrossed,
  Truck,
];

interface SectorItemProps {
  label: string;
  index: number;
}

export default function SectorItem({ label, index }: SectorItemProps) {
  const Icon = SECTOR_ICONS[index % SECTOR_ICONS.length];
  return (
    <div className="group flex flex-col items-center gap-4 p-5 bg-white border border-[#E2E2E2] rounded-xl hover:border-[#E8620C]/40 hover:shadow-sm transition-all duration-200 cursor-default">
      {/* İkon wrapper */}
      <div className="w-14 h-14 rounded-xl bg-[#F7F7F5] group-hover:bg-[#FEF0E6] flex items-center justify-center transition-colors duration-200 border border-transparent group-hover:border-[#E8620C]/20">
        <Icon
          size={26}
          className="text-[#4B4B4B] group-hover:text-[#E8620C] transition-colors duration-200"
          strokeWidth={1.3}
        />
      </div>

      {/* Başlık */}
      <span
        className="text-[#1C1C1C] text-xs font-bold text-center leading-snug group-hover:text-[#E8620C] transition-colors duration-200"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {label}
      </span>

      {/* Alt turuncu çizgi göstergesi */}
      <div className="w-0 group-hover:w-6 h-0.5 bg-[#E8620C] rounded-full transition-all duration-200" />
    </div>
  );
}
