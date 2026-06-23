"use client";

import { useState, FormEvent } from "react";
import { APPLICATION_SERVICES } from "@/lib/content";

type FormState = "idle" | "sending" | "success" | "error";

const BUSINESS_TYPES = [
  "Fabrika / Üretim Tesisi",
  "Otel / Konaklama",
  "Hastane / Sağlık Tesisi",
  "İnşaat Firması",
  "Organize Sanayi Bölgesi",
  "Geri Dönüşüm Tesisi",
  "Tarım / Sulama İşletmesi",
  "Lojistik / Depolama",
  "Deri / Tekstil",
  "Gıda Üretim Tesisi",
  "Diğer",
];

const EMPTY_FORM = {
  companyName: "",
  contactName: "",
  phone: "",
  email: "",
  city: "",
  activityArea: "",
  businessType: "",
  service: "",
  details: "",
  kvkk: false,
};

export default function ApplicationForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({ ...EMPTY_FORM });
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    console.log("Başvuru formu gönderiliyor", formData);

    try {
      const res = await fetch("/api/basvuru", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, _hp: honeypot }),
      });

      console.log("API response", res.status);

      if (res.ok) {
        setFormState("success");
        setFormData({ ...EMPTY_FORM });
        setHoneypot("");
      } else {
        setFormState("error");
      }
    } catch (err) {
      console.error("Başvuru fetch hatası:", err);
      setFormState("error");
    }
  };

  const inputCls =
    "w-full px-4 py-3 text-sm text-[#1C1C1C] bg-white border border-[#E2E2E2] rounded-md hover:border-[#C8C8C8] focus:outline-none focus:border-[#E8620C] focus:ring-2 focus:ring-[#E8620C]/20 transition-colors placeholder:text-[#BEBEBE]";

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-[#FEF0E6] flex items-center justify-center mb-6">
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
            <circle cx="16" cy="16" r="14" stroke="#E8620C" strokeWidth="1.5" />
            <polyline
              points="10,16 14,20 22,11"
              stroke="#E8620C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3
          className="text-xl font-extrabold text-[#1C1C1C] mb-3"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Başvurunuz Alındı
        </h3>
        <p
          className="text-[#4B4B4B] text-sm leading-relaxed max-w-[360px]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Başvurunuz alınmıştır. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Honeypot — botlar için görünmez alan */}
      <input
        type="text"
        name="_hp"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ display: "none" }}
      />
      {/* Satır 1 — Firma + Yetkili */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#1C1C1C]" style={{ fontFamily: "Manrope, sans-serif" }}>
            Firma Adı <span className="text-[#E8620C]">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Firma adı"
            className={inputCls}
            style={{ fontFamily: "Inter, sans-serif" }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#1C1C1C]" style={{ fontFamily: "Manrope, sans-serif" }}>
            Yetkili Kişi <span className="text-[#E8620C]">*</span>
          </label>
          <input
            type="text"
            name="contactName"
            required
            value={formData.contactName}
            onChange={handleChange}
            placeholder="Ad Soyad"
            className={inputCls}
            style={{ fontFamily: "Inter, sans-serif" }}
          />
        </div>
      </div>

      {/* Satır 2 — Telefon + E-posta */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#1C1C1C]" style={{ fontFamily: "Manrope, sans-serif" }}>
            Telefon <span className="text-[#E8620C]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="0(5xx) xxx xx xx"
            className={inputCls}
            style={{ fontFamily: "Inter, sans-serif" }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#1C1C1C]" style={{ fontFamily: "Manrope, sans-serif" }}>
            E-posta <span className="text-[#E8620C]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="ornek@firma.com"
            className={inputCls}
            style={{ fontFamily: "Inter, sans-serif" }}
          />
        </div>
      </div>

      {/* Satır 3 — Şehir + Faaliyet Alanı */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#1C1C1C]" style={{ fontFamily: "Manrope, sans-serif" }}>
            Şehir
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="İl"
            className={inputCls}
            style={{ fontFamily: "Inter, sans-serif" }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#1C1C1C]" style={{ fontFamily: "Manrope, sans-serif" }}>
            Faaliyet Alanı
          </label>
          <input
            type="text"
            name="activityArea"
            value={formData.activityArea}
            onChange={handleChange}
            placeholder="Ör: Tekstil üretimi, geri dönüşüm"
            className={inputCls}
            style={{ fontFamily: "Inter, sans-serif" }}
          />
        </div>
      </div>

      {/* Satır 4 — İşletme türü */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#1C1C1C]" style={{ fontFamily: "Manrope, sans-serif" }}>
          İşletme Türü
        </label>
        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className={`${inputCls} appearance-none`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <option value="">Seçiniz</option>
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Satır 5 — İhtiyaç duyulan hizmet */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#1C1C1C]" style={{ fontFamily: "Manrope, sans-serif" }}>
          İhtiyaç Duyulan Hizmet <span className="text-[#E8620C]">*</span>
        </label>
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className={`${inputCls} appearance-none`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <option value="">Seçiniz</option>
          {APPLICATION_SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Satır 6 — Açıklama */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#1C1C1C]" style={{ fontFamily: "Manrope, sans-serif" }}>
          Kısa Açıklama / Talep Detayları
        </label>
        <textarea
          name="details"
          rows={4}
          value={formData.details}
          onChange={handleChange}
          placeholder="İşletmenizin mevcut durumu, ihtiyacınız hakkında kısa bilgi verebilirsiniz."
          className={`${inputCls} resize-none`}
          style={{ fontFamily: "Inter, sans-serif" }}
        />
      </div>

      {/* KVKK */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="kvkk"
          name="kvkk"
          required
          checked={formData.kvkk}
          onChange={handleChange}
          className="mt-0.5 accent-[#E8620C] w-4 h-4 shrink-0"
        />
        <label
          htmlFor="kvkk"
          className="text-xs text-[#4B4B4B] leading-relaxed cursor-pointer"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Kişisel verilerimin işlenmesine ilişkin{" "}
          <a href="/kvkk" className="text-[#E8620C] underline hover:no-underline">
            KVKK / Gizlilik Politikası
          </a>{" "}
          metnini okudum, onaylıyorum.
        </label>
      </div>

      {/* Hata mesajı */}
      {formState === "error" && (
        <p className="text-red-600 text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          Başvuru gönderilirken bir sorun oluştu. Lütfen tekrar deneyin veya doğrudan iletişim bilgilerimizden bize ulaşın.
        </p>
      )}

      {/* Gönder butonu */}
      <button
        type="submit"
        disabled={formState === "sending"}
        className="w-full sm:w-auto sm:min-w-[180px] px-8 py-3 bg-[#E8620C] text-white text-sm font-semibold rounded-md hover:bg-[#CF5409] active:bg-[#B84B08] transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {formState === "sending" ? "Gönderiliyor…" : "Başvuruyu Gönder"}
      </button>
    </form>
  );
}
