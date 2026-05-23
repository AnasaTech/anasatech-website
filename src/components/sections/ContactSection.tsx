'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
      };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const business = formData.get('business') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: `New inquiry from ${business || name}`,
          message: business ? `Business: ${business}\n\n${message}` : message,
        }),
      });

      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="cta" className="py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left - text */}
          <motion.div
            className="lg:w-1/2"
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            {...fadeUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-[36px] text-black leading-[1.2] font-normal text-center md:text-left">
              Ready to grow smarter?
            </h2>
            <p className="mt-4 text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
              Tell us about your business and we&apos;ll show you how Luxe AI can help. No commitment, no pressure.
            </p>
            <div className="mt-10 flex justify-center md:justify-start">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <span className="text-sm text-neutral-600">info@anasatech.com</span>
              </div>
            </div>

            {/* Trust signals - compact on mobile */}
            <div className="mt-6 pt-6 border-t border-neutral-100">
              <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start">
                <span className="text-xs text-neutral-400 flex items-center gap-1">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  24h response
                </span>
                <span className="text-xs text-neutral-400 flex items-center gap-1">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Free demo
                </span>
                <span className="text-xs text-neutral-400 flex items-center gap-1">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  No commitment
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            className="lg:w-1/2"
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            {...fadeUp}
          >
            {status === 'success' ? (
              <div className="bg-[#f3f3f3] rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">Message sent!</h3>
                <p className="text-sm text-neutral-500">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#f3f3f3] rounded-2xl p-6 sm:p-8 md:p-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-xs font-medium text-neutral-600 mb-1.5 block">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-medium text-neutral-600 mb-1.5 block">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="business" className="text-xs font-medium text-neutral-600 mb-1.5 block">Business name</label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="Your business"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-medium text-neutral-600 mb-1.5 block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                    placeholder="Tell us about your business..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-black text-white text-sm font-medium py-3.5 rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
