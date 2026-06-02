import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Careers | Anasatech',
  description: 'Join the team building AI-powered tools for African businesses.',
};

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-8" style={{ backgroundColor: '#f3f3f3' }}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-blue-600 mb-4">Careers</span>
          <h1 className="text-3xl sm:text-4xl md:text-[44px] text-black leading-[1.2] font-normal">
            Join us in building the future of African business.
          </h1>
          <p className="mt-6 text-base text-neutral-500 leading-relaxed max-w-xl mx-auto">
            We&apos;re a small, passionate team building AI-powered tools that empower entrepreneurs across Africa. We value impact, speed, and care.
          </p>
        </div>
      </section>
      <section className="py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <div className="bg-[#f3f3f3] rounded-2xl p-10 md:p-14">
            <h2 className="text-xl font-semibold text-black mb-3">No open positions at the moment</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              We don&apos;t have any openings right now. Check back later — when we&apos;re hiring, roles will be posted here.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
