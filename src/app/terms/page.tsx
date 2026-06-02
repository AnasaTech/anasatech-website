import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TermsContent from './terms-content';

export const metadata = {
  title: 'Terms of Service | Luxe AI',
  description: 'Terms and conditions for using Luxe AI by Kintari Technologies Limited.',
};

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <TermsContent />
      <Footer />
    </main>
  );
}
