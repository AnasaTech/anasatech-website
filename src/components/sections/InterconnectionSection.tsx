'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { HiSparkles, HiTruck, HiUserGroup } from 'react-icons/hi2';

export default function InterconnectionSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
      };

  return (
    <section
      id="how-it-works"
      className="py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 bg-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-6"
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          {...fadeUp}
        >
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
            3 Apps. 1 Powerful Ecosystem.
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-20 max-w-2xl mx-auto"
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          {...fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-[36px] text-black leading-[1.2] font-normal">
            Three Powerful Apps.<br />
            One <span className="text-blue-600">Connected</span> Advantage.
          </h2>
          <p className="mt-5 text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg mx-auto">
            When Luxe AI, Homerun, and Pulse AI work together, your business runs smarter, faster, and stronger.
          </p>
        </motion.div>

        {/* Product cards - Luxe AI full height left, Homerun + Pulse stacked right */}
        <motion.div
          className="relative"
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          {...fadeUp}
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-[5fr_2fr_5fr] gap-4 lg:gap-0 items-stretch">
            {/* SVG connection lines overlay - desktop only */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
              <style>{`@keyframes dashFlow { from { stroke-dashoffset: 20; } to { stroke-dashoffset: 0; } } .dash-animate { animation: dashFlow 1.2s linear infinite; }`}</style>
              {/* Line from left card to center (straight horizontal) */}
              <line x1="500" y1="300" x2="552" y2="300" stroke="#93c5fd" strokeWidth="2" strokeDasharray="6 4" className="dash-animate" />
              {/* Line from center up then right to Homerun (vertical up, then horizontal right) */}
              <path d="M 600 252 L 600 150 L 700 150" fill="none" stroke="#6ee7b7" strokeWidth="2" strokeDasharray="6 4" className="dash-animate" />
              {/* Line from center down then right to Pulse (vertical down, then horizontal right) */}
              <path d="M 600 348 L 600 450 L 700 450" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeDasharray="6 4" className="dash-animate" />
            </svg>

            {/* Luxe AI - Full height left */}
            <div className="relative z-10 bg-[#f3f3f3] rounded-2xl p-5 md:p-6 border border-neutral-100 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-black">Luxe AI</h3>
                  <p className="text-sm text-neutral-600">AI-Driven ERP</p>
                </div>
              </div>
              <p className="text-base text-neutral-700 leading-relaxed mb-5">
                Manage your entire business from finance and inventory to sales and customer data with AI-powered insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Finance', 'Inventory', 'Sales', 'Analytics', 'Operations'].map((tag) => (
                  <span key={tag} className="text-sm text-black bg-white px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              {/* POS image */}
              <div className="mt-auto rounded-2xl overflow-hidden">
                <Image
                  src="/pos.png"
                  alt="Luxe AI POS interface"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Center column - Data Sync circle only */}
            <div className="hidden lg:flex items-center justify-center">
              <motion.div
                className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span className="text-xs font-semibold text-white text-center leading-tight">Data<br/>Sync</span>
              </motion.div>
            </div>

            {/* Mobile Data Sync badge - shown between cards on mobile */}
            <div className="lg:hidden flex flex-col items-center -my-3 relative z-10">
              <div className="w-px h-4 border-l-2 border-dashed border-blue-300" />
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-[9px] font-semibold text-white text-center leading-tight">Data<br/>Sync</span>
              </div>
              <div className="w-px h-4 border-l-2 border-dashed border-blue-300" />
            </div>

            {/* Right column - Homerun + Pulse stacked */}
            <div className="relative z-10 flex flex-col gap-4 h-full">
              {/* Homerun */}
              <div className="bg-[#f3f3f3] rounded-2xl p-5 md:p-6 border border-neutral-100 flex-1">
                <div className="flex items-center gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-black">Homerun</h3>
                  <p className="text-sm text-neutral-600">Delivery App</p>
                </div>
                  <span className="text-[11px] font-medium text-white bg-black px-3 py-1 rounded-full ml-auto">
                    Soon
                  </span>
                </div>
                <p className="text-base text-neutral-700 leading-relaxed mb-3">
                  Streamline your last-mile deliveries, track in real-time, and keep your customers happy, every time.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Route Optimization', 'Live Tracking', 'Proof of Delivery', 'Analytics'].map((tag) => (
                    <span key={tag} className="text-sm text-black bg-white px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile connector between Homerun and Pulse */}
              <div className="lg:hidden flex justify-center -my-2">
                <div className="w-px h-4 border-l-2 border-dashed border-neutral-300" />
              </div>

              {/* Luxe Pulse */}
              <div className="bg-[#f3f3f3] rounded-2xl p-5 md:p-6 border border-neutral-100 flex-1">
                <div className="flex items-center gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-black">Luxe Pulse</h3>
                  <p className="text-sm text-neutral-600">Human Resource Platform</p>
                </div>
                  <span className="text-[11px] font-medium text-white bg-black px-3 py-1 rounded-full ml-auto">
                    Soon
                  </span>
                </div>
                <p className="text-base text-neutral-700 leading-relaxed mb-3">
                  Empower your people. From scheduling to payroll, manage your workforce smarter with AI.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Scheduling', 'Payroll', 'Performance', 'Attendance'].map((tag) => (
                    <span key={tag} className="text-sm text-black bg-white px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          className="mt-12 text-center text-sm text-neutral-500"
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          {...fadeUp}
        >
          ✦ Different apps. One ecosystem. Infinite possibilities. <span className="text-blue-600 font-medium">This is how you grow.</span>
        </motion.p>
      </div>
    </section>
  );
}
