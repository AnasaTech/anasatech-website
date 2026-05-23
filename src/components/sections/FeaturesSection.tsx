'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 'ai-chat',
    title: 'AI Chat',
    description: 'Talk to your business data in natural language — ask questions, get instant answers and insights powered by AI.',
    image: '/dashboard.png',
  },
  {
    id: 'pos',
    title: 'Point of Sale',
    description: 'Fast, intuitive POS built for high-volume sales across multiple branches.',
    image: '/pos.png',
  },
  {
    id: 'customer-app',
    title: 'Customer App',
    description: 'Let your customers browse menus, place orders, and pay — all from their phone via QR code.',
    image: '/pos.png',
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: 'Track stock levels in real-time, get AI-powered low-stock predictions, and manage transfers between branches.',
    image: '/dashboard.png',
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
    image: '/pos.png',
  },
  {
    id: 'reports',
    title: 'Financial Reports',
    description: 'Automated reports for sales, expenses, and profit — no spreadsheets needed.',
    image: '/dashboard.png',
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
            href="https://app.luxeai.com"
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
                className="rounded-2xl overflow-hidden p-6 md:p-8 h-full flex items-center"
                style={{ backgroundColor: '#f3f3f3' }}
              >
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src={activeFeature.image}
                    alt={`${activeFeature.title} — Luxe AI`}
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
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
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#f3f3f3' }}>
                <div className="p-4">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={activeFeature.image}
                      alt={`${activeFeature.title} — Luxe AI`}
                      width={800}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
