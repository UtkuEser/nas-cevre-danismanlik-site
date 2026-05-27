import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const OG_IMAGE = "https://nascevre.com/images/logo/nas-logo.png";

export const metadata: Metadata = {
  title: "Nas Çevre Danışmanlık Mühendislik | Çevre Danışmanlığı ve Mevzuat Uyumu",
  description:
    "Nas Çevre Danışmanlık Mühendislik; çevre danışmanlığı, çevre izinleri, teknik raporlar, atık yönetimi, toprak koruma projeleri, LWG ve yurtdışı denetim danışmanlığı alanlarında profesyonel destek sağlar.",
  icons: {
    icon: "/images/logo/nas-logo.png",
    shortcut: "/images/logo/nas-logo.png",
    apple: "/images/logo/nas-logo.png",
  },
  openGraph: {
    title: "Nas Çevre Danışmanlık Mühendislik",
    description:
      "Çevre danışmanlığı, çevre izin ve lisans süreçleri, atık yönetimi ve mevzuat uyumu alanlarında profesyonel destek.",
    url: "https://nascevre.com",
    siteName: "Nas Çevre Danışmanlık Mühendislik",
    locale: "tr_TR",
    type: "website",
    images: [{ url: OG_IMAGE, width: 512, height: 512, alt: "Nas Çevre Danışmanlık Mühendislik" }],
  },
  twitter: {
    card: "summary",
    title: "Nas Çevre Danışmanlık Mühendislik",
    description:
      "Çevre danışmanlığı, çevre izin ve lisans süreçleri, atık yönetimi ve mevzuat uyumu alanlarında profesyonel destek.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
