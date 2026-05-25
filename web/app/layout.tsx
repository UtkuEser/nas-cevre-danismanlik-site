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

export const metadata: Metadata = {
  title: "Nas Çevre Danışmanlık Mühendislik | Çevre Danışmanlığı ve Mevzuat Uyumu",
  description:
    "Nas Çevre Danışmanlık Mühendislik; çevre danışmanlığı, çevre izinleri, teknik raporlar, atık yönetimi, toprak koruma projeleri, LWG ve yurtdışı denetim danışmanlığı alanlarında profesyonel destek sağlar.",
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
