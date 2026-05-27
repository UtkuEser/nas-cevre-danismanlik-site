interface ServiceCardProps {
  title: string;
  desc: string;
  index: number;
  image: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function ServiceCard({ title, desc, image, isSelected, onClick }: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group text-left flex flex-col rounded-xl border overflow-hidden transition-all duration-200 cursor-pointer w-full hover:-translate-y-1 ${
        isSelected
          ? "border-[#E8620C] shadow-md"
          : "border-[#E2E2E2] hover:border-[#E8620C]/60 hover:shadow-sm"
      }`}
    >
      {/* Görsel alan — kart yüksekliğinin üst ~%40'ı */}
      <div className="relative h-32 overflow-hidden bg-[#F7F7F5] shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isSelected && (
          <div className="absolute inset-0 bg-[#E8620C]/10 pointer-events-none" />
        )}
      </div>

      {/* İçerik alan */}
      <div className="flex flex-col gap-2 p-4 bg-white flex-1">
        <h3
          className={`font-bold text-sm leading-snug transition-colors duration-200 ${
            isSelected ? "text-[#E8620C]" : "text-[#1C1C1C] group-hover:text-[#E8620C]"
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

        {/* Alt seçim göstergesi */}
        <div
          className={`mt-auto pt-2 h-0.5 rounded-full transition-all duration-300 ${
            isSelected
              ? "bg-[#E8620C] w-8"
              : "bg-transparent w-0 group-hover:bg-[#E8620C]/30 group-hover:w-4"
          }`}
        />
      </div>
    </button>
  );
}
