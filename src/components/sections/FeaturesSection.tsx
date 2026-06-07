'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingImage from '@/components/ui/LoadingImage';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
}

const features: Feature[] = [
  {
    id: 'ai-chat',
    title: 'AI Chat',
    description: 'Talk to your business data in natural language — ask questions, get instant answers and insights powered by AI.',
    image: '/ai-chat-desktop.jpeg',
    mobileImage: '/ai-chat-mobile.jpeg'
  },
  {
    id: 'pos',
    title: 'Point of Sale',
    description: 'Fast, intuitive POS built for high-volume sales across multiple branches.',
    image: '/pos.png',
    mobileImage: '/mobile-pos.png',
  },
  {
    id: 'customer-app',
    title: 'Customer App',
    description: 'Let your customers browse products, place orders, and pay — all from their phone via QR code.',
    image: '/pos.png',
    mobileImage: '/customer-app.png',
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: 'Track stock levels in real-time, get AI-powered low-stock predictions, and manage transfers between branches.',
    image: '/inventory-desktop.png',
    mobileImage: '/inventory-mobile.png',
  },
  {
    id: 'analytics',
    title: 'AI Analytics',
    description: 'AI-powered insights that show you what\'s selling, peak hours, and growth opportunities — before you even ask.',
    image: '/dashboard.png',
  },
  {
    id: 'multi-branch',
    title: 'Multi-Branch',
    description: 'Manage all your locations from one dashboard — pricing, stock, and staff.',
    image: '/multi-branch-desktop.png',
    mobileImage: '/multi-branch-mobile.png',
  },
  {
    id: 'reports',
    title: 'Performance Reports',
    description: 'Automated reports for inventory, sales, customers, and financials — no spreadsheets needed.',
    image: '/report-desktop.png',
    mobileImage: '/report-mobile.png',
  },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section
      id="products"
      className="py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 bg-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header - left aligned, editorial style */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left mb-10 md:mb-14 gap-4">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] text-black leading-[1.2] font-normal">
              All you need to run <span className="text-blue-600">AI-powered</span> businesses
            </h2>
            <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
              From point of sale to analytics — one platform, zero complexity.
            </p>
          </div>
          <a
            href={process.env.NEXT_PUBLIC_SIGN_IN_URL || "https://luxeai.anasatech.com"}
            className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-7 pr-3 py-2.5 rounded-full hover:bg-neutral-800 transition-colors shrink-0"
          >
            Get Started
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-black">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </a>
        </div>

        {/* Features layout */}
        {/* Desktop: list on left, image on right */}
        <div className="hidden lg:flex gap-16 items-start">
          {/* Feature list */}
          <div className="w-2/5">
            {features.map((feature) => {
              const isActive = activeFeature.id === feature.id;
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full text-left py-3.5 border-b border-neutral-200 transition-all cursor-pointer ${
                    isActive ? 'border-b-2 border-b-black' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-sm md:text-base transition-colors ${
                        isActive ? 'text-black font-medium' : 'text-neutral-800'
                      }`}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-1.5 text-sm text-neutral-500 leading-relaxed"
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feature image */}
          <div className="w-3/5 sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden h-full flex items-center justify-center"
                style={{ backgroundColor: 'transparent' }}
              >
                {activeFeature.mobileImage && activeFeature.id === 'customer-app' ? (
                  /* iPhone frame for customer app */
                  <div className="w-[220px]">
                    <div className="relative px-[3px]">
                      <div className="absolute right-0 top-[28%] w-[3px] h-[12%] bg-[#1a1a1c] rounded-r-sm z-30" />
                      <div className="absolute left-0 top-[22%] w-[3px] h-[8%] bg-[#1a1a1c] rounded-l-sm z-30" />
                      <div className="absolute left-0 top-[32%] w-[3px] h-[8%] bg-[#1a1a1c] rounded-l-sm z-30" />
                      <div className="absolute left-0 top-[16%] w-[3px] h-[5%] bg-[#1a1a1c] rounded-l-sm z-30" />
                      <div className="bg-[#2c2c2e] rounded-[36px] p-[3px] shadow-xl ring-1 ring-[#48484a]">
                        <div className="relative bg-black rounded-[33px] overflow-hidden">
                          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[28%] h-[14px] bg-black rounded-full z-10" />
                          <LoadingImage
                            src={activeFeature.mobileImage}
                            alt={`${activeFeature.title} — Luxe AI`}
                            width={220}
                            height={476}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Computer frame for desktop screenshots */
                  <div className="w-full">
                    <div className="bg-[#e2e3e5] rounded-t-xl p-[6px] shadow-lg">
                      <div className="bg-white rounded-lg p-[3px]">
                        <div className="rounded-md overflow-hidden">
                          <LoadingImage
                            src={activeFeature.image}
                            alt={`${activeFeature.title} — Luxe AI`}
                            width={800}
                            height={500}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#e2e3e5] h-5 rounded-b-lg flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#c8c9cb]" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[8%] h-4 bg-gradient-to-b from-[#d4d5d7] to-[#bbbcbe] rounded-b-sm" />
                      <div className="w-[18%] h-[4px] bg-[#c8c9cb] rounded-full" />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: horizontal tabs + image below */}
        <div className="lg:hidden">
          {/* Scrollable tabs - same style as Use Cases section */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 border-b border-neutral-200 mb-6">
            {features.map((feature) => (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActiveFeature(feature)}
                className={`whitespace-nowrap text-xs font-medium tracking-wide uppercase pb-3 transition-all cursor-pointer ${
                  activeFeature.id === feature.id
                    ? 'text-black border-b-2 border-black'
                    : 'text-neutral-400'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          {/* Active feature content + image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-6"
            >
              <p className="text-base text-neutral-600 leading-relaxed mb-4">
                {activeFeature.description}
              </p>
              {activeFeature.mobileImage ? (
                /* iPhone frame for mobile screenshots */
                <div className="flex justify-center py-4">
                  <div className="w-[220px]">
                    <div className="relative px-[3px]">
                      {/* Side buttons */}
                      <div className="absolute right-0 top-[28%] w-[3px] h-[12%] bg-[#1a1a1c] rounded-r-sm z-30" />
                      <div className="absolute left-0 top-[22%] w-[3px] h-[8%] bg-[#1a1a1c] rounded-l-sm z-30" />
                      <div className="absolute left-0 top-[32%] w-[3px] h-[8%] bg-[#1a1a1c] rounded-l-sm z-30" />
                      <div className="absolute left-0 top-[16%] w-[3px] h-[5%] bg-[#1a1a1c] rounded-l-sm z-30" />
                      {/* Titanium frame */}
                      <div className="bg-[#2c2c2e] rounded-[36px] p-[3px] shadow-xl ring-1 ring-[#48484a]">
                        <div className="relative bg-black rounded-[33px] overflow-hidden">
                          {/* Dynamic Island */}
                          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[28%] h-[14px] bg-black rounded-full z-10" />
                          <LoadingImage
                            src={activeFeature.mobileImage}
                            alt={`${activeFeature.title} — Luxe AI`}
                            width={220}
                            height={476}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden">
                  <div className="p-4">
                    <div className="rounded-2xl overflow-hidden">
                      <LoadingImage
                        src={activeFeature.image}
                        alt={`${activeFeature.title} — Luxe AI`}
                        width={800}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
