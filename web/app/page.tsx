import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustMessageSection from "@/components/home/TrustMessageSection";
import ServicesSection from "@/components/home/ServicesSection";
import LocalSeoSection from "@/components/home/LocalSeoSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import SectorsSection from "@/components/home/SectorsSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyNasSection from "@/components/home/WhyNasSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nas Çevre Danışmanlık | Uşak Çevre Danışmanlığı",
  description:
    "Nas Çevre Danışmanlık Mühendislik; Uşak'ta çevre danışmanlığı, çevre izin ve lisans süreçleri, ÇED süreçleri, atık yönetimi, sıfır atık danışmanlığı, çevre beyanları ve denetim hazırlığı alanlarında profesyonel destek sağlar.",
  alternates: {
    canonical: "https://nascevre.com/",
  },
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <HeroSection />
      <TrustMessageSection />
      <ServicesSection />
      <LocalSeoSection />
      <ExpertiseSection />
      <SectorsSection />
      <ProcessSection />
      <WhyNasSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
