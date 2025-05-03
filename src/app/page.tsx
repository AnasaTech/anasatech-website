import Hero from '@/app/components/sections/Hero';
import Services from '@/app/components/sections/Services';
import Projects from '@/app/components/sections/Projects';
import Technologies from '@/app/components/sections/Technologies';
import Contact from '@/app/components/sections/Contact';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

export default function Home() {
  return (
    <div className="">
      <main>
        <Navbar/>
        <Hero />
        <Services />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
