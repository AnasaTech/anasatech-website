import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutContent from '@/components/sections/AboutContent';

export const metadata = {
  title: 'About | Anasatech',
  description: 'Women-led innovation transforming African businesses with accessible, powerful software solutions.',
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
