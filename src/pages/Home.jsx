// sections
import { HeroSection } from "@/components/home/HeroSection";
import LogosSection from "@/components/home/LogosSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/WorksSection";
import Testimonials from "@/components/home/Testimonials";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <div className="flex-1 w-full">
      {/* Hero Section */}
      <HeroSection />
      {/* Logos Section */}
      <LogosSection />
      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Home;
