import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { IndustryCasesSection } from "@/components/IndustryCasesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <IndustryCasesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
