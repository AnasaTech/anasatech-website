'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

function ComingSoonModal({ product, onClose }: { product: string; onClose: () => void }) {
  const descriptions: Record<string, string> = {
    Homerun: 'Homerun is our upcoming delivery management platform. Smart routing, live tracking, and effortless dispatch — giving your customers the delivery experience they deserve. Coming in a few months.',
    'Pulse AI': 'Pulse AI is our upcoming human resource platform. From scheduling and attendance to payroll and performance — manage your workforce smarter with AI. Coming in a few months.',
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
      >
        <h3 className="text-xl font-semibold text-black mb-2">{product}</h3>
        <span className="inline-block text-[11px] font-medium text-white bg-black px-3 py-1 rounded-full mb-4">Coming Soon</span>
        <p className="text-sm text-neutral-600 leading-relaxed mb-6">{descriptions[product]}</p>
        <button
          onClick={onClose}
          className="w-full bg-black text-white text-sm font-medium py-3 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          Got it
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Footer() {
  const [modalProduct, setModalProduct] = useState<string | null>(null);

  const signInUrl = process.env.NEXT_PUBLIC_SIGN_IN_URL || 'https://luxeai.anasatech.com';

  return (
    <>
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Brand + address */}
            <div className="lg:w-1/4">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Anasatech" width={24} height={24} className="w-6 h-6" />
                <span className="text-lg font-semibold tracking-tight">
                  <span className="text-blue-400">ANASA</span><span className="text-white">TECH</span>
                </span>
              </div>
              <div className="mt-4 text-xs text-neutral-400 leading-relaxed">
                <p>Anasatech Ltd</p>
                <p>Accra, Ghana</p>
              </div>
              <p className="mt-6 text-xs text-neutral-500">
                © {new Date().getFullYear()} Anasatech Ltd. All rights reserved.
              </p>
            </div>

            {/* Link columns */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
              {/* Support */}
              <div>
                <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-400 mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="mailto:info@anasatech.com" className="text-xs text-neutral-300 hover:text-white transition-colors">info@anasatech.com</a></li>
                  <li><a href="#cta" className="text-xs text-neutral-300 hover:text-white transition-colors">Contact Sales</a></li>
                </ul>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-400 mb-4">Products</h4>
                <ul className="space-y-2">
                  <li><a href={signInUrl} className="text-xs text-neutral-300 hover:text-white transition-colors">Luxe AI</a></li>
                  <li><button type="button" onClick={() => setModalProduct('Homerun')} className="text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer">Homerun</button></li>
                  <li><button type="button" onClick={() => setModalProduct('Pulse AI')} className="text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer">Pulse AI</button></li>
                </ul>
              </div>

              {/* AI */}
              <div>
                <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-400 mb-4">AI</h4>
                <ul className="space-y-2">
                  <li><a href="/ai-chat" className="text-xs text-neutral-300 hover:text-white transition-colors">AI Chat</a></li>
                  <li><a href="/intelligence" className="text-xs text-neutral-300 hover:text-white transition-colors">Intelligence</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-400 mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-xs text-neutral-300 hover:text-white transition-colors">About Anasatech</a></li>
                  <li><a href="/careers" className="text-xs text-neutral-300 hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>

              {/* Policy */}
              <div>
                <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-400 mb-4">Policy</h4>
                <ul className="space-y-2">
                  <li><a href="/privacy" className="text-xs text-neutral-300 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-xs text-neutral-300 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {modalProduct && (
          <ComingSoonModal product={modalProduct} onClose={() => setModalProduct(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
