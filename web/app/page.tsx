import HeroSection from "@/components/home/HeroSection";
import TrustMessageSection from "@/components/home/TrustMessageSection";
import ServicesSection from "@/components/home/ServicesSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import SectorsSection from "@/components/home/SectorsSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyNasSection from "@/components/home/WhyNasSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

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
      <ExpertiseSection />
      <SectorsSection />
      <ProcessSection />
      <WhyNasSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
