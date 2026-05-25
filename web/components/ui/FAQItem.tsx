"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  q: string;
  a: string;
}

export default function FAQItem({ q, a }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-[#E2E2E2] rounded-xl mb-3 overflow-hidden transition-shadow duration-200 ${
        open ? "shadow-sm border-[#E8620C]/20" : ""
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-6 px-7 py-5 text-left cursor-pointer bg-white hover:bg-[#FAFAFA] transition-colors duration-150"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="text-[#1C1C1C] font-bold text-base leading-snug"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {q}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
            open ? "bg-[#E8620C]" : "bg-[#F7F7F5]"
          }`}
        >
          <ChevronDown
            size={16}
            className={`transition-all duration-200 ${
              open ? "text-white rotate-180" : "text-[#4B4B4B]"
            }`}
          />
        </div>
      </button>

      {open && (
        <div className="px-7 pb-6 pt-1 bg-white border-t border-[#F0F0EE]">
          <p
            className="text-[#4B4B4B] text-base leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {a}
          </p>
        </div>
      )}
    </div>
  );
}
