import { HeroSection } from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/WorksSection";
import Testimonials from "@/components/home/Testimonials";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <div className="flex-1 w-full space-y-4">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
