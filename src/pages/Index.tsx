import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import ProjectSpotlight from "@/components/ProjectSpotlight";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurApproach from "@/components/OurApproach";
import Services from "@/components/Services";
import HappyClients from "@/components/HappyClients";
import CTA from "@/components/CTA";
import PaymentMethods from "@/components/PaymentMethods";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Testimonials />
      <ProjectSpotlight />
      <CaseStudies />
      <WhyChooseUs />
      <OurApproach />
      <Services />
      <HappyClients />
      <CTA />
      <PaymentMethods />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
