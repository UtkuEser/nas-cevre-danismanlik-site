"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-sm border-b border-[#E2E2E2]" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/nas-logo.png"
            alt="Nas Çevre Danışmanlık Mühendislik"
            className="h-9 lg:h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#4B4B4B] hover:text-[#1C1C1C] transition-colors duration-150"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/basvuru"
            className="hidden sm:inline-flex items-center px-5 py-2 bg-[#E8620C] text-white text-sm font-semibold rounded hover:bg-[#CF5409] transition-colors duration-150"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Başvuru Yap
          </Link>
          <button
            className="lg:hidden p-2 text-[#1C1C1C]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#E2E2E2] bg-white">
          <nav className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#4B4B4B] hover:text-[#1C1C1C] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/basvuru"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#E8620C] text-white text-sm font-semibold rounded hover:bg-[#CF5409] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Başvuru Yap
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
