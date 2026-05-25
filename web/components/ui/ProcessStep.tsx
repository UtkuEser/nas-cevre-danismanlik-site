interface ProcessStepProps {
  number: string;
  title: string;
  desc: string;
  isLast?: boolean;
}

export default function ProcessStep({ number, title, desc, isLast }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-start gap-4 relative">
      {/* Connector line (desktop) */}
      {!isLast && (
        <div className="absolute top-5 left-10 right-0 h-px bg-[#E2E2E2] hidden lg:block" />
      )}
      <div className="w-10 h-10 rounded-full bg-[#E8620C] flex items-center justify-center shrink-0 relative z-10">
        <span
          className="text-white text-xs font-bold"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {number}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3
          className="text-[#1C1C1C] font-bold text-base"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-[#4B4B4B] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}
