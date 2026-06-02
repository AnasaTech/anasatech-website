import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PrivacyContent from './privacy-content';

export const metadata = {
  title: 'Privacy Policy | Luxe AI',
  description: 'Learn how Luxe AI by Kintari Technologies Limited collects, uses, and protects your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
