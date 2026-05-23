'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingImage from '@/components/ui/LoadingImage';

interface Customer {
  id: string;
  name: string;
  industry: string;
  location: string;
  image: string;
  imageAlt: string;
  quote: string;
  stats: { value: string; label: string }[];
  cta: { label: string; href: string };
  color: string;
  features: { name: string; desc: string }[];
}

const customers: Customer[] = [
  {
    id: 'lat-and-jay',
    name: 'Lat & Jay',
    industry: 'Smartphone Replacement Screens',
    location: 'Ghana',
    image: '/lat-and-jay.png',
    imageAlt: 'Lat & Jay — 8 branches across Ghana',
    quote: 'With Luxe AI, we manage 8 branches across Greater Accra, Central Region, and Ashanti Region — all from one dashboard. The AI tells us which branches need stock before we even check, transfers happen in seconds, and we always know exactly what we have. It has completely transformed how we run our business.',
    stats: [
      { value: '8', label: 'Branches' },
      { value: '3', label: 'Regions' },
      { value: '1', label: 'Dashboard' },
    ],
    cta: { label: 'Shop Lat & Jay today', href: '#' },
    color: '#f97316',
    features: [
      { name: 'Multi-Branch POS', desc: 'Process sales across 8 locations simultaneously' },
      { name: 'Stock Transfers', desc: 'Move inventory between branches in seconds' },
      { name: 'Inventory Tracking', desc: 'Track 1000+ screen models in real-time' },
      { name: 'Sales Analytics', desc: 'See which branches and products perform best' },
    ],
  },
  {
    id: 'babebox',
    name: 'Babebox',
    industry: 'Baby Products — Wipes, Diapers & Clothes',
    location: 'Makola Market, Accra',
    image: '/babebox.png',
    imageAlt: 'Babebox — baby products in Makola Market',
    quote: 'In the heart of Makola, speed is everything. The AI predicts which products will sell out this week so we restock before it happens. Luxe AI helps us serve customers faster, track every variant, and our customers can even reorder from home — it keeps them coming back.',
    stats: [
      { value: '1', label: 'Branch' },
      { value: '500+', label: 'Products' },
      { value: '0', label: 'Stockouts' },
    ],
    cta: { label: 'Shop Babebox today', href: '#' },
    color: '#14b8a6',
    features: [
      { name: 'Point of Sale', desc: 'Fast checkout for high-traffic market sales' },
      { name: 'Product Variants', desc: 'Manage sizes and brands for diapers and clothes' },
      { name: 'Low Stock Alerts', desc: 'Never run out of best-selling items' },
      { name: 'Customer App', desc: 'Customers reorder their favorites from home' },
    ],
  },
];

export default function CustomerSpotlightSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const customer = customers[currentIndex];

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % customers.length);
      }, 7000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section
      className="py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8"
      style={{ backgroundColor: '#f3f3f3' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left mb-12 md:mb-16 gap-4">
          <div>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-blue-600 mb-3 block">
              Customer Spotlight
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] text-black leading-[1.2] font-normal">
              They chose Luxe AI. Here&apos;s why.
            </h2>
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

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-[220px] sm:h-[300px] lg:h-auto lg:min-h-[500px]">
                <LoadingImage
                  src={customer.image}
                  alt={customer.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1" style={{ color: customer.color }}>
                  {customer.name}
                </h3>
                <p className="text-sm text-neutral-400 mb-6">
                  {customer.industry} · {customer.location}
                </p>

                <blockquote className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 sm:mb-8">
                  <span className="text-2xl font-bold text-black leading-none">&ldquo;</span>{customer.quote}<span className="text-2xl font-bold text-black leading-none">&rdquo;</span>
                </blockquote>

                {/* Stats */}
                <div className="flex gap-6 sm:gap-8 mb-8">
                  {customer.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">{stat.value}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features - desktop: vertical list with descriptions */}
                <div className="hidden md:block space-y-3 mb-8">
                  {customer.features.map((feature) => (
                    <div key={feature.name} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-1 shrink-0 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      <span className="text-sm text-neutral-700">
                        <strong>{feature.name}</strong> — {feature.desc}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Features - mobile: compact pills */}
                <div className="md:hidden flex flex-wrap gap-2 justify-center mb-6">
                  {customer.features.map((feature) => (
                    <span key={feature.name} className="text-xs font-medium text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-full">
                      {feature.name}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={customer.cta.href}
                  className="inline-flex items-center gap-3 text-white text-sm font-medium pl-6 pr-2 py-2.5 rounded-full transition-opacity hover:opacity-90 self-center md:self-start"
                  style={{ backgroundColor: customer.color }}
                >
                  {customer.cta.label}
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {customers.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? 'w-8 bg-black' : 'w-2 bg-neutral-300'
              }`}
              aria-label={`View ${customers[idx].name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
