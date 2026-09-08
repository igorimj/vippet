import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <ServicesSection />
        <ReviewsSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
