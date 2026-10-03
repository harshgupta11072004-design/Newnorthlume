import Image from "next/image";
import HeroSection from "../components/Homecomponent/HeroSection";
import Brands from "../components/Homecomponent/Brands";
import PurposeSection from "../components/Homecomponent/PurposeSection";
import FeaturesSection from "../components/Homecomponent/FeaturesSection";
import ValuesSection from "../components/Homecomponent/ValuesSection";
import Processsection from "../components/Homecomponent/Processsection";
import IntegrationsSection from "../components/Homecomponent/IntegrationsSection";
import PricingSection from "../components/Homecomponent/PricingSection";
import Testimonials from "../components/Homecomponent/Testimonials";
import FAQ from "../components/Homecomponent/Faq";
import BlogComponent from "../components/Homecomponent/BlogComponent";

export default function Home() {


  return (
    <>
    <HeroSection />
    <Brands />
    <PurposeSection />
    <FeaturesSection />
    <ValuesSection />
    <Processsection />
    <IntegrationsSection />
    <PricingSection />
    <Testimonials />
    <FAQ />
    <BlogComponent />

    </>
  );
}
