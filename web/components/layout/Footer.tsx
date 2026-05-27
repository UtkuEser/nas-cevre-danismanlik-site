import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FOOTER } from "@/lib/content";
import { SERVICES_SEO } from "@/lib/servicesSeo";
import { REGIONS_SEO } from "@/lib/regionsSeo";
import { BLOG_POSTS } from "@/lib/blogSeo";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Kolon 1 — Marka */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo/nas-logo.png"
                alt="Nas Çevre Danışmanlık Mühendislik"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-[#9A9A9A] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              {FOOTER.description}
            </p>
          </div>

          {/* Kolon 2 — Hizmetler */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Hizmetler
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_SEO.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="text-[#9A9A9A] text-sm hover:text-[#E8620C] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolon 3 — Bölgeler + Blog */}
          <div className="flex flex-col gap-8">
            <div>
              <h4
                className="text-white font-bold text-sm uppercase tracking-wider mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Bölgeler
              </h4>
              <ul className="space-y-2.5">
                {REGIONS_SEO.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/bolgeler/${r.slug}`}
                      className="text-[#9A9A9A] text-sm hover:text-[#E8620C] transition-colors"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {r.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-white font-bold text-sm uppercase tracking-wider mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Blog
              </h4>
              <ul className="space-y-2.5">
                {BLOG_POSTS.slice(0, 4).map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="text-[#9A9A9A] text-sm hover:text-[#E8620C] transition-colors leading-snug"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kolon 4 — İletişim */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              İletişim
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#E8620C] mt-0.5 shrink-0" />
                <span className="text-[#9A9A9A] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  {FOOTER.contact.phone}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#E8620C] mt-0.5 shrink-0" />
                <span className="text-[#9A9A9A] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  {FOOTER.contact.email}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E8620C] mt-0.5 shrink-0" />
                <span className="text-[#9A9A9A] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  {FOOTER.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="mt-12 pt-6 border-t border-[#2E2E2E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6A6A6A] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            © {new Date().getFullYear()} Nas Çevre Danışmanlık Mühendislik. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/kvkk"
              className="text-[#6A6A6A] text-xs hover:text-[#E8620C] transition-colors"
            >
              KVKK / Gizlilik Politikası
            </Link>
            <span
              className="text-[#3A3A3A] text-[13px] tracking-wide hover:text-[#E8620C] transition-colors duration-200 cursor-default select-none"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              by EEK
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
