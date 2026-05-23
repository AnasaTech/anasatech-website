'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
      };

  const fadeIn = shouldReduceMotion
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 40, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
      };

  const transition = (delay: number) =>
    shouldReduceMotion
      ? {}
      : { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-24 sm:pt-28 md:pt-36 lg:pt-40"
      style={{ backgroundColor: '#f3f3f3' }}
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top-left circle */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-neutral-200/60" />
        {/* Top-right circle */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-neutral-200/40" />
        {/* Bottom decorative dots */}
        <div className="absolute bottom-1/3 left-10 w-2 h-2 rounded-full bg-neutral-200" />
        <div className="absolute bottom-1/4 right-16 w-3 h-3 rounded-full bg-neutral-100" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline */}
        <motion.h1
          className="text-[26px] sm:text-4xl md:text-[44px] text-black leading-[1.2] font-normal"
          {...fadeUp}
          transition={transition(0.3)}
        >
          Businesses Get Smarter
          <br />
          With Our Intelligent <span className="text-blue-600">AI Solutions</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-4 md:mt-5 text-sm md:text-base text-neutral-500 max-w-md mx-auto leading-relaxed"
          {...fadeUp}
          transition={transition(0.5)}
        >
          Boost your business efficiency with our AI-powered platform designed to
          streamline operations and enhance collaboration.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-6 md:mt-6 flex flex-row items-center justify-center gap-3"
          {...fadeUp}
          transition={transition(0.7)}
        >
          <a
            href="https://app.luxeai.com"
            className="inline-flex items-center gap-3 bg-black text-white text-sm font-medium pl-5 pr-2 py-2 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Get Started
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-black">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-3 bg-white text-black text-sm font-medium pl-2 pr-5 py-2 rounded-full hover:bg-neutral-50 transition-colors border border-neutral-200"
          >
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black text-white">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </span>
            Watch Demo
          </a>
        </motion.div>
      </div>

      {/* Device Mockups - MacBook + iPhone side by side */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 mt-14 md:mt-10 pb-16"
        {...fadeIn}
        transition={transition(0.9)}
      >
        <div className="relative flex items-end justify-center">
          {/* iMac Frame - Silver (hidden on mobile, phone is hero) */}
          <div className="hidden sm:block flex-1 max-w-5xl">
            {/* Display housing */}
            <div className="bg-[#e2e3e5] rounded-t-xl md:rounded-t-2xl p-[6px] md:p-[10px] shadow-lg">
              {/* Screen bezel - white */}
              <div className="bg-white rounded-lg md:rounded-xl p-[3px] md:p-[4px]">
                <div className="rounded-md md:rounded-lg overflow-hidden">
                  <Image
                    src="/dashboard.png"
                    alt="Luxe AI Dashboard — real-time sales tracking and business analytics"
                    width={1200}
                    height={750}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Chin - silver with logo area */}
            <div className="bg-[#e2e3e5] h-5 md:h-8 rounded-b-lg flex items-center justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#c8c9cb]" />
            </div>
            {/* Stand neck */}
            <div className="flex flex-col items-center">
              <div className="w-[8%] h-6 md:h-10 bg-gradient-to-b from-[#d4d5d7] to-[#bbbcbe] rounded-b-sm" />
              {/* Stand base - oval foot */}
              <div className="w-[22%] h-[6px] md:h-[10px] bg-[#c8c9cb] rounded-full shadow-sm" />
            </div>
          </div>

          {/* iPhone 16 Pro Max Frame - Customer App */}
          <div className="sm:absolute sm:right-0 md:right-4 lg:right-8 sm:bottom-0 z-20 w-[240px] sm:w-[100px] md:w-[180px] lg:w-[220px] mx-auto sm:mx-0">
            {/* Phone frame wrapper - px-[3px] accommodates side buttons within bounds */}
            <div className="relative px-[3px]">
              {/* Side buttons - right side (power) */}
              <div className="absolute right-0 top-[28%] w-[3px] h-[12%] bg-[#1a1a1c] rounded-r-sm z-30" />
              {/* Side buttons - left side (volume up) */}
              <div className="absolute left-0 top-[22%] w-[3px] h-[8%] bg-[#1a1a1c] rounded-l-sm z-30" />
              {/* Side buttons - left side (volume down) */}
              <div className="absolute left-0 top-[32%] w-[3px] h-[8%] bg-[#1a1a1c] rounded-l-sm z-30" />
              {/* Side buttons - left side (action button) */}
              <div className="absolute left-0 top-[16%] w-[3px] h-[5%] bg-[#1a1a1c] rounded-l-sm z-30" />
              {/* Titanium frame - thinner bezel */}
              <div className="bg-[#2c2c2e] rounded-[36px] p-[3px] shadow-xl ring-1 ring-[#48484a]">
                {/* Screen area */}
                <div className="relative bg-black rounded-[33px] overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[28%] h-[14px] bg-black rounded-full z-10" />
                  {/* Screen content */}
                  <Image
                    src="/customer-app.png"
                    alt="Luxe AI Customer App — self-service ordering from your phone"
                    width={220}
                    height={476}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
