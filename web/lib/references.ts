export type Reference = {
  name: string;
  logo: string | null;
  alt: string;
  size?: "large";
};

export const REFERENCES: Reference[] = [
  // Kamu, sağlık, eğitim ve büyük kurumlar
  {
    name: "Uşak Havalimanı",
    logo: "/images/references/usak-havalimani.svg",
    alt: "Uşak Havalimanı",
  },
  {
    name: "Uşak Şeker Fabrikası",
    logo: "/images/references/usak-seker-fabrikasi.svg",
    alt: "Uşak Şeker Fabrikası",
  },
  {
    name: "Dünya Göz Hastanesi",
    logo: "/images/references/dunya-goz-hastanesi.svg",
    alt: "Dünya Göz Hastanesi",
  },
  {
    name: "Kula Devlet Hastanesi",
    logo: "/images/references/kula-devlet-hastanesi.svg",
    alt: "Kula Devlet Hastanesi",
    size: "large",
  },
  {
    name: "Selendi Devlet Hastanesi",
    logo: "/images/references/selendi-devlet-hastanesi.svg",
    alt: "Selendi Devlet Hastanesi",
    size: "large",
  },
  {
    name: "Okan Üniversitesi",
    logo: "/images/references/okan-universitesi.svg",
    alt: "Okan Üniversitesi",
  },
  // Üretim, tekstil, deri, enerji ve sanayi
  {
    name: "Uşak Büyükbaş Deri İşleme Tesisi",
    logo: "/images/references/usak-buyukbas-deri-isleme-tesisi.svg",
    alt: "Uşak Büyükbaş Deri İşleme Tesisi",
  },
  {
    name: "Cevahir Deri",
    logo: "/images/references/usak-cevahir-deri.svg",
    alt: "Cevahir Deri",
  },
  {
    name: "Ege Damla Deri",
    logo: "/images/references/ege-damla-deri.svg",
    alt: "Ege Damla Deri",
  },
  {
    name: "SAÇLI Tekstil",
    logo: "/images/references/sacli-tekstil.svg",
    alt: "SAÇLI Tekstil",
  },
  {
    name: "NURSA Tekstil",
    logo: "/images/references/nursa-tekstil.svg",
    alt: "NURSA Tekstil",
  },
  {
    name: "Akel Yün",
    logo: "/images/references/akel-yun.svg",
    alt: "Akel Yün",
  },
  {
    name: "Pozitif Yün",
    logo: "/images/references/pozitif-yun.svg",
    alt: "Pozitif Yün",
  },
  {
    name: "Mensis Enerji",
    logo: "/images/references/mensis-enerji.svg",
    alt: "Mensis Enerji",
  },
  // Logo dosyası henüz yok — tipografik placeholder
  {
    name: "Ege İz Yem",
    logo: null,
    alt: "Ege İz Yem",
  },
  {
    name: "Argem Metalürji",
    logo: null,
    alt: "Argem Metalürji",
  },
];
