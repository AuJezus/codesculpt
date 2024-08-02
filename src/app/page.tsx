import BenefitsSection from "@/components/sections/benefits";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import PresenceSection from "@/components/sections/presence";
import ServicesSection from "@/components/sections/services";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <ServicesSection />

      <PresenceSection />

      <BenefitsSection />

      <ContactSection />
    </main>
  );
}
