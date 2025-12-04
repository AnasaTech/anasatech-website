import Hero from '@/app/components/sections/Hero';
import Products from '@/app/components/sections/Products';
import About from '@/app/components/sections/About';
import SocialProof from '@/app/components/sections/SocialProof';
import Contact from '@/app/components/sections/Contact';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

export default function Home() {
  return (
    <div className="">
      <main>
        <Navbar/>
        <Hero />
        <Products />
        <About />
        <SocialProof />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
