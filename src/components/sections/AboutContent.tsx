'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { HiLightBulb, HiHeart, HiChartBar, HiUserGroup } from 'react-icons/hi2';

export default function AboutContent() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
      };

  return (
    <>
      {/* Hero - centered */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-8 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            {...fadeUp}
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-black bg-[#f3f3f3] px-4 py-1.5 rounded-full mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[56px] text-black leading-[1.1] font-medium">
              Transforming how African businesses operate, grow, & thrive.
            </h1>
            <p className="mt-6 text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto">
              At Anasatech, we build accessible, powerful software that empowers African businesses — especially women entrepreneurs — to compete and win.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Green section - Who We Are + Customer App phone */}
      <section style={{ backgroundColor: '#f3f3f3' }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              {...fadeUp}
            >
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-blue-600 mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] text-black leading-[1.15] font-medium mb-6">
                We sit at the intersection of technology and African commerce.
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mb-8">
                We&apos;re a women-led company building tools that help African entrepreneurs thrive — offline-first, mobile money native, multi-branch from day one.
              </p>
              <a
                href="https://app.luxeai.com"
                className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </a>
            </motion.div>

            {/* Devices */}
            <motion.div
              className="flex items-end justify-center gap-4"
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              {...fadeUp}
            >
              {/* iMac */}
              <div className="flex-1 max-w-[400px]">
                <div className="bg-[#e2e3e5] rounded-t-xl p-[5px]">
                  <div className="bg-white rounded-lg p-[3px]">
                    <div className="rounded-md overflow-hidden">
                      <Image src="/dashboard.png" alt="Luxe AI Dashboard" width={500} height={312} className="w-full h-auto" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#e2e3e5] h-4 rounded-b-lg flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#c8c9cb]" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-[8%] h-5 bg-gradient-to-b from-[#d4d5d7] to-[#bbbcbe]" />
                  <div className="w-[20%] h-[5px] bg-[#c8c9cb] rounded-full" />
                </div>
              </div>

              {/* Phone */}
              <div className="relative w-[80px] md:w-[100px] shrink-0">
                <div className="absolute -right-[1.5px] top-[28%] w-[2px] h-[12%] bg-[#1a1a1c] rounded-r-sm z-20" />
                <div className="absolute -left-[1.5px] top-[22%] w-[2px] h-[8%] bg-[#1a1a1c] rounded-l-sm z-20" />
                <div className="absolute -left-[1.5px] top-[32%] w-[2px] h-[8%] bg-[#1a1a1c] rounded-l-sm z-20" />
                <div className="bg-[#2c2c2e] rounded-[16px] md:rounded-[20px] p-[2px] shadow-lg ring-1 ring-[#48484a]">
                  <div className="relative bg-black rounded-[14px] md:rounded-[18px] overflow-hidden">
                    <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[28%] h-[6px] bg-black rounded-full z-10" />
                    <Image src="/customer-app.png" alt="Customer App" width={100} height={216} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder + Stats */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            {...fadeUp}
          >
            {/* Founder */}
            <div className="lg:w-1/3">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/emerald.png"
                  alt="Emerald Adjei — CEO & Co-Founder of Anasatech"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">Emerald Adjei</h3>
                <p className="text-sm text-blue-600">CEO & Co-Founder</p>
              </div>
            </div>

            {/* Stats + Mission */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl sm:text-4xl md:text-[44px] text-black leading-[1.15] font-medium mb-8">
                Our mission is economic empowerment through technology.
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl mb-4">
                We believe that when women lead in tech, everyone benefits. Our products are built from the ground up with African markets in mind, creating opportunities for economic empowerment across the continent.
              </p>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl">
                Beyond Luxe AI, we&apos;re building an interconnected ecosystem of AI-powered apps — Homerun for delivery management and Luxe Pulse for human resources. Together, these products will revolutionize how African businesses operate, giving every entrepreneur access to the same intelligent tools that power the world&apos;s best companies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values - bordered cards grid */}
      <section className="py-20 md:py-28 px-6 md:px-8" style={{ backgroundColor: '#f3f3f3' }}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-14"
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            {...fadeUp}
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-black bg-white px-4 py-1.5 rounded-full mb-6">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] text-black leading-[1.15] font-medium">
              What drives everything we build.
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            {...fadeUp}
          >
            {[
              { icon: <HiLightBulb className="w-6 h-6" />, title: 'Innovation', desc: 'We push boundaries to create cutting-edge solutions that solve real problems.' },
              { icon: <HiHeart className="w-6 h-6" />, title: 'Women Empowerment', desc: 'Championing women in tech and creating tools that help women entrepreneurs thrive.' },
              { icon: <HiChartBar className="w-6 h-6" />, title: 'Impact', desc: 'Focused on creating measurable positive change in the communities we serve.' },
              { icon: <HiUserGroup className="w-6 h-6" />, title: 'Community', desc: 'Growing together with our customers and partners across the continent.' },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200">
                <div className="w-12 h-12 rounded-xl bg-[#f3f3f3] flex items-center justify-center text-black mb-5">
                  {value.icon}
                </div>
                <h3 className="text-base font-semibold text-black mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
