"use client";

import { useState } from "react";
import { REFERENCES, type Reference } from "@/lib/references";

function ReferenceCard({ ref }: { ref: Reference }) {
  const [imgError, setImgError] = useState(false);
  const showPlaceholder = !ref.logo || imgError;
  const isLarge = ref.size === "large";

  return (
    <div
      tabIndex={0}
      className={`group flex items-center justify-center bg-white border border-[#E2E2E2] rounded-lg h-[110px] overflow-hidden hover:border-[#E8620C] hover:shadow-md active:border-[#E8620C] active:shadow-md focus-within:border-[#E8620C] focus-within:shadow-md focus-visible:outline-none transition-all duration-300 ease-out ${
        isLarge ? "p-2" : "p-3"
      }`}
    >
      {!showPlaceholder ? (
        <div
          className={`flex items-center justify-center shrink-0 ${
            isLarge ? "w-[90%] h-[90px]" : "w-[88%] h-[82px]"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ref.logo as string}
            alt={ref.alt}
            onError={() => setImgError(true)}
            className="max-w-full max-h-full w-auto h-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] group-active:grayscale-0 group-active:opacity-100 group-active:scale-[1.03] group-focus-within:grayscale-0 group-focus-within:opacity-100 group-focus-within:scale-[1.03] transition-all duration-300 ease-out"
          />
        </div>
      ) : (
        <span
          className="text-[#6A6A6A] text-sm font-semibold text-center leading-tight px-2 opacity-60 group-hover:opacity-100 group-hover:text-[#1C1C1C] group-active:opacity-100 group-active:text-[#1C1C1C] group-focus-within:opacity-100 group-focus-within:text-[#1C1C1C] transition-all duration-300 ease-out"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {ref.name}
        </span>
      )}
    </div>
  );
}

function StatsBar() {
  return (
    <div className="grid grid-cols-2 divide-x divide-[#E2E2E2] border border-[#E2E2E2] rounded-lg mb-10 bg-[#FAFAF9]">
      <div className="flex flex-col items-center justify-center py-5 px-6">
        <span
          className="text-[30px] font-extrabold text-[#E8620C] leading-none"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          +100
        </span>
        <span
          className="text-[#4B4B4B] text-xs font-medium text-center mt-2 leading-snug"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Firma ve Kurumsal İşletme
        </span>
      </div>
      <div className="flex flex-col items-center justify-center py-5 px-6">
        <span
          className="text-[30px] font-extrabold text-[#E8620C] leading-none"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          20+ Yıl
        </span>
        <span
          className="text-[#4B4B4B] text-xs font-medium text-center mt-2 leading-snug"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Saha ve Mevzuat Deneyimi
        </span>
      </div>
    </div>
  );
}

export default function ReferencesSection() {
  return (
    <section id="referanslar" className="bg-white border-y border-[#E2E2E2]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div className="max-w-[720px] mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#E8620C]" />
            <span
              className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Referanslar
            </span>
          </div>
          <h2
            className="text-[22px] md:text-[28px] font-extrabold text-[#1C1C1C] leading-snug mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Birlikte Çalıştığımız İşletmeler
          </h2>
          <p
            className="text-[#4B4B4B] text-base leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Nas Çevre Danışmanlık Mühendislik; kamu, sağlık, eğitim, tekstil,
            deri, enerji ve sanayi alanlarında faaliyet gösteren işletmelere
            çevre mevzuatı, izin, rapor, atık yönetimi ve denetim süreçlerinde
            profesyonel destek sağlar.
          </p>
        </div>

        <StatsBar />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {REFERENCES.map((ref) => (
            <ReferenceCard key={ref.name} ref={ref} />
          ))}
        </div>

        <p
          className="mt-10 text-[#9A9A9A] text-xs text-center"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Referans bilgileri, ilgili işletmelerin paylaşım izinleri
          doğrultusunda gösterilmektedir.
        </p>
      </div>
    </section>
  );
}
