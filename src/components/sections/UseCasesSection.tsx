'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiChartBar, HiBuildingOffice2, HiCube, HiLightBulb, HiDevicePhoneMobile, HiQrCode, HiClock, HiShoppingBag, HiCreditCard, HiBanknotes } from 'react-icons/hi2';

interface UseCase {
  id: string;
  tab: string;
  headline: string;
  points: { icon: React.ReactNode; text: string }[];
  image: string;
  imageAlt: string;
  imageType: 'desktop' | 'payment';
}

const useCases: UseCase[] = [
  {
    id: 'customer-app',
    tab: 'Customer Experience',
    headline: 'Your Customers Order From Anywhere',
    points: [
      { icon: <HiQrCode className="w-5 h-5" />, text: 'One QR scan opens your full menu — no app download' },
      { icon: <HiDevicePhoneMobile className="w-5 h-5" />, text: 'Customers browse, customize, and order from their phone' },
      { icon: <HiClock className="w-5 h-5" />, text: 'Reduce wait times and serve more customers per hour' },
      { icon: <HiShoppingBag className="w-5 h-5" />, text: 'AI recommends items based on past orders — increasing average order value' },
    ],
    image: '/customer-ordering.png',
    imageAlt: 'Happy customer ordering from their phone at home using Luxe AI',
    imageType: 'desktop',
  },
  {
    id: 'operations',
    tab: 'Operations',
    headline: 'Run Every Branch Like Your Best One',
    points: [
      { icon: <HiChartBar className="w-5 h-5" />, text: 'Real-time sales tracking across all your locations' },
      { icon: <HiCube className="w-5 h-5" />, text: 'Smart inventory keeps stock levels balanced everywhere' },
      { icon: <HiBuildingOffice2 className="w-5 h-5" />, text: 'Offline-first POS keeps operations running at all times' },
      { icon: <HiLightBulb className="w-5 h-5" />, text: 'AI insights surface issues before they impact service' },
    ],
    image: '/shop-operations.png',
    imageAlt: 'African shop owner managing sales of phones and laptops with Luxe AI',
    imageType: 'desktop',
  },
  {
    id: 'payments',
    tab: 'Payments',
    headline: 'Accept Payment From Every Channel',
    points: [
      { icon: <HiBanknotes className="w-5 h-5" />, text: 'Cash, mobile money, and card — all in one checkout' },
      { icon: <HiDevicePhoneMobile className="w-5 h-5" />, text: 'MTN MoMo, Telecel Cash, and more integrated natively' },
      { icon: <HiCreditCard className="w-5 h-5" />, text: 'Credit sales let customers pay part now or pay later' },
      { icon: <HiChartBar className="w-5 h-5" />, text: 'Real-time payment analytics and daily settlement reports' },
    ],
    image: '/dashboard.png',
    imageAlt: 'Luxe AI payment dashboard showing multiple payment channels',
    imageType: 'payment',
  },
];

// Payment logos - MoMo, Card, Cash
function PaymentLogos() {
  return (
    <div className="w-full space-y-3 sm:space-y-4">
      {/* Mobile Money row - 3 equal columns */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        <div className="flex items-center justify-center bg-white rounded-2xl sm:rounded-2xl p-2 sm:p-4">
          <Image src="/mtn-logo.jpg" alt="MTN Mobile Money" width={120} height={120} className="rounded-2xl sm:rounded-2xl w-full h-auto" />
        </div>
        <div className="flex items-center justify-center bg-white rounded-2xl sm:rounded-2xl p-2 sm:p-4">
          <Image src="/telecel-logo.webp" alt="Telecel Cash" width={120} height={120} className="rounded-2xl sm:rounded-2xl w-full h-auto" />
        </div>
        <div className="flex items-center justify-center bg-white rounded-2xl sm:rounded-2xl p-2 sm:p-4">
          <Image src="/airteltigo-logo.png" alt="AirtelTigo Cash" width={120} height={120} className="rounded-2xl sm:rounded-2xl w-full h-auto" />
        </div>
      </div>
      {/* Card + Cash row */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        <div className="flex items-center justify-center bg-white rounded-2xl sm:rounded-2xl p-2 sm:p-4">
          <Image src="/visa-logo.png" alt="Visa" width={120} height={120} className="rounded-2xl sm:rounded-2xl w-full h-auto" />
        </div>
        <div className="flex items-center justify-center bg-white rounded-2xl sm:rounded-2xl p-2 sm:p-4">
          <Image src="/mastercard-logo.png" alt="Mastercard" width={120} height={120} className="rounded-2xl sm:rounded-2xl w-full h-auto" />
        </div>
        <div className="flex items-center justify-center bg-white rounded-2xl sm:rounded-2xl p-4 sm:p-6">
          <svg width="48" height="42" viewBox="0 0 36 31" fill="none"><path d="M6.33 11.08C6.75 11.08 7.16 11.25 7.45 11.55 7.75 11.84 7.92 12.25 7.92 12.67 10.41 12.66 12.82 13.5 14.77 15.04H18.21C20.32 15.04 22.22 15.96 23.52 17.42H28.5C30 17.42 31.46 17.84 32.73 18.64 34 19.44 35.01 20.58 35.65 21.93 31.91 26.87 25.84 30.08 19 30.08 14.58 30.08 10.85 29.13 7.82 27.46 7.71 27.76 7.51 28.03 7.24 28.21 6.98 28.4 6.66 28.5 6.33 28.5H1.58C1.16 28.5.76 28.33.46 28.04.17 27.74 0 27.34 0 26.92V12.67C0 12.25.17 11.84.46 11.55.76 11.25 1.16 11.08 1.58 11.08H6.33ZM7.92 15.83V23.78L7.99 23.84C10.83 25.83 14.53 26.92 19 26.92 23.76 26.92 28.18 25.09 31.41 21.96L31.62 21.75 31.43 21.59C30.68 21.01 29.77 20.66 28.83 20.59L28.5 20.58H25.16C25.27 21.09 25.33 21.62 25.33 22.17V23.75H11.08V20.58L21.84 20.58 21.78 20.46C21.48 19.82 21.01 19.28 20.43 18.89 19.85 18.49 19.17 18.26 18.47 18.22L18.21 18.21H13.57C12.83 17.46 11.95 16.86 10.98 16.45 10.01 16.04 8.97 15.83 7.92 15.83ZM4.75 14.25H3.17V25.33H4.75V14.25ZM26.92 4.75C28.18 4.75 29.39 5.25 30.28 6.14 31.17 7.03 31.67 8.24 31.67 9.5 31.67 10.76 31.17 11.97 30.28 12.86 29.39 13.75 28.18 14.25 26.92 14.25 25.66 14.25 24.45 13.75 23.56 12.86 22.67 11.97 22.17 10.76 22.17 9.5 22.17 8.24 22.67 7.03 23.56 6.14 24.45 5.25 25.66 4.75 26.92 4.75ZM26.92 7.92C26.5 7.92 26.1 8.08 25.8 8.38 25.5 8.68 25.33 9.08 25.33 9.5 25.33 9.92 25.5 10.32 25.8 10.62 26.1 10.92 26.5 11.08 26.92 11.08 27.34 11.08 27.74 10.92 28.04 10.62 28.33 10.32 28.5 9.92 28.5 9.5 28.5 9.08 28.33 8.68 28.04 8.38 27.74 8.08 27.34 7.92 26.92 7.92ZM15.83 0C17.09 0 18.3.5 19.19 1.39 20.08 2.28 20.58 3.49 20.58 4.75 20.58 6.01 20.08 7.22 19.19 8.11 18.3 9 17.09 9.5 15.83 9.5 14.58 9.5 13.37 9 12.48 8.11 11.59 7.22 11.08 6.01 11.08 4.75 11.08 3.49 11.59 2.28 12.48 1.39 13.37.5 14.58 0 15.83 0ZM15.83 3.17C15.42 3.17 15.01 3.33 14.72 3.63 14.42 3.93 14.25 4.33 14.25 4.75 14.25 5.17 14.42 5.57 14.72 5.87 15.01 6.17 15.42 6.33 15.83 6.33 16.25 6.33 16.66 6.17 16.95 5.87 17.25 5.57 17.42 5.17 17.42 4.75 17.42 4.33 17.25 3.93 16.95 3.63 16.66 3.33 16.25 3.17 15.83 3.17Z" fill="#0EA44A"/></svg>
        </div>
      </div>
    </div>
  );
}

export default function UseCasesSection() {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section
      id="use-cases"
      className="relative py-10 md:py-14 lg:py-16"
      style={{ backgroundColor: '#f3f3f3' }}
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/4 h-full bg-gradient-to-l from-indigo-50/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section header - centered */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] text-black leading-[1.2] font-normal max-w-2xl">
            Built for how African businesses work
          </h2>
          <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg">
            From operations to payments — tools designed for real business scenarios.
          </p>
          <a
            href="https://app.luxeai.com"
            className="inline-flex items-center gap-3 bg-white text-black text-base font-medium pl-7 pr-3 py-2.5 rounded-full hover:bg-neutral-100 transition-colors border border-neutral-200"
          >
            Get Started
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </a>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 sm:gap-6 md:gap-10 border-b border-neutral-200 mb-8 md:mb-10 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              type="button"
              onClick={() => setActiveCase(uc)}
              className={`pb-4 text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase whitespace-nowrap transition-all cursor-pointer ${
                activeCase.id === uc.id
                  ? 'text-black border-b-2 border-black'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              {uc.tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
          >
            {/* Image / Payment logos - shown on mobile above content, and on desktop to the left */}
            <div className="w-full lg:w-1/2">
              {activeCase.imageType === 'payment' ? (
                <div className="flex items-center justify-center">
                  <PaymentLogos />
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden max-h-[200px] sm:max-h-none">
                  <Image
                    src={activeCase.image}
                    alt={activeCase.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              )}
            </div>

            {/* Points */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl sm:text-2xl md:text-[28px] text-black leading-[1.2] font-normal mb-6 sm:mb-8">
                {activeCase.headline}
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                {activeCase.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-neutral-200 last:border-0">
                    <span className="text-blue-600 mt-0.5 shrink-0">{point.icon}</span>
                    <span className="text-sm sm:text-base text-neutral-700 leading-relaxed">{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
