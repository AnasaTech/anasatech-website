import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HashScroll from '@/components/ui/HashScroll';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AIShowcaseSection from '@/components/sections/AIShowcaseSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import InterconnectionSection from '@/components/sections/InterconnectionSection';
import CustomerSpotlightSection from '@/components/sections/CustomerSpotlightSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <HashScroll />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AIShowcaseSection />
      <UseCasesSection />
      <InterconnectionSection />
      <CustomerSpotlightSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
