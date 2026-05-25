"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { CORE_SERVICES } from "@/lib/content";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? CORE_SERVICES[selected] : null;

  return (
    <section id="hizmetler" className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Başlık */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#E8620C]" />
            <span
              className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Hizmetler
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2
                className="text-2xl md:text-[32px] font-extrabold text-[#1C1C1C] leading-snug mb-3"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Hizmetlerimiz
              </h2>
              <p
                className="text-[#4B4B4B] text-base max-w-[520px] leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                İşletmenizin faaliyet alanına göre çevre mevzuatı, izin, raporlama ve teknik proje
                süreçlerinde kapsamlı danışmanlık sağlıyoruz.
              </p>
            </div>
            <p
              className="text-[#8A8A8A] text-xs shrink-0"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Detay için hizmete tıklayın
            </p>
          </div>
        </div>

        {/* Kart grid — 4 kolon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {CORE_SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              desc={service.desc}
              index={i}
              isSelected={selected === i}
              onClick={() => setSelected((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>

        {/* Detay paneli — yalnızca seçili kart varsa gösterilir */}
        {active !== null && (
          <div className="bg-[#F7F7F5] border border-[#E2E2E2] rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-[1fr_auto] gap-0">
              <div className="p-8 md:p-10">
                {/* Üst satır */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-8 bg-[#E8620C] rounded-full" />
                  <h3
                    className="text-xl font-extrabold text-[#1C1C1C]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {active.title}
                  </h3>
                </div>

                {/* Açıklama */}
                <p
                  className="text-[#4B4B4B] text-base leading-relaxed mb-6 max-w-[600px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {active.detail}
                </p>

                {/* Bullet listesi */}
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-8">
                  {active.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-[#E8620C] mt-0.5 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span
                        className="text-[#4B4B4B] text-sm leading-snug"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/basvuru"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8620C] hover:gap-3 transition-all duration-150"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Bu hizmet için başvuru yap
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>

              {/* Sağ dekor paneli */}
              <div className="hidden md:flex items-center justify-center w-48 bg-[#1C1C1C]/[0.03] border-l border-[#E2E2E2] p-6">
                <svg
                  viewBox="0 0 120 160"
                  fill="none"
                  className="w-full opacity-40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="20" y="20" width="80" height="100" rx="2" stroke="#1C1C1C" strokeWidth="1" />
                  <rect x="28" y="28" width="80" height="100" rx="2" stroke="#1C1C1C" strokeWidth="1" />
                  <line x1="36" y1="52" x2="84" y2="52" stroke="#1C1C1C" strokeWidth="1" />
                  <line x1="36" y1="65" x2="84" y2="65" stroke="#1C1C1C" strokeWidth="1" />
                  <line x1="36" y1="78" x2="72" y2="78" stroke="#1C1C1C" strokeWidth="1" />
                  <line x1="36" y1="91" x2="80" y2="91" stroke="#1C1C1C" strokeWidth="1" />
                  <circle cx="84" cy="130" r="22" stroke="#E8620C" strokeWidth="1.2" />
                  <polyline
                    points="74,130 80,137 95,122"
                    stroke="#E8620C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
