'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { label: 'Luxe AI', href: '#products', highlight: true },
  { label: 'Intelligence', href: '/intelligence' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#cta' },
];

function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onAfterClick?: () => void
) {
  // If it's a real page link (starts with /), let the browser handle it
  if (href.startsWith('/')) {
    onAfterClick?.();
    return;
  }

  // If we're not on the home page and the link is a hash, navigate to home first
  if (typeof window !== 'undefined' && window.location.pathname !== '/') {
    // Navigate to home page with the hash
    window.location.href = '/' + href;
    onAfterClick?.();
    return;
  }

  e.preventDefault();
  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  onAfterClick?.();
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set active based on current page path
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      setActiveSection(window.location.pathname);
    }

    const sections = ['cta', 'products'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-0 md:px-6 lg:px-8 md:pt-4"
      style={{ backgroundColor: 'transparent' }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Rounded navbar container - pill on desktop, flat bar on mobile */}
      <div className={`mx-auto max-w-6xl bg-white border-b border-neutral-100 md:border-0 md:rounded-full px-4 sm:px-6 py-1.5 md:py-3 transition-shadow duration-300 ${scrolled ? 'md:shadow-lg md:shadow-black/5 md:border md:border-neutral-100' : ''}`}>
        <div className="flex items-center justify-between relative">
          {/* Logo - icon on left for mobile, icon+text together on desktop */}
          <a
            href="#"
            onClick={(e) => handleSmoothScroll(e, '#')}
            aria-label="Anasatech - Back to top"
            className="flex items-center gap-2"
          >
            <Image src="/logo.png" alt="Anasatech" width={36} height={36} className="w-9 h-9 md:w-9 md:h-9" />
            <span className="hidden md:inline text-xl font-semibold tracking-tight">
              <span className="text-blue-600">ANASA</span><span className="text-black">TECH</span>
            </span>
          </a>

          {/* Mobile centered brand name */}
          <span className="md:hidden absolute left-1/2 -translate-x-1/2 text-lg font-semibold tracking-tight">
            <span className="text-blue-600">ANASA</span><span className="text-black">TECH</span>
          </span>

          {/* Desktop nav links - centered */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-sm font-medium transition-colors ${
                  link.highlight
                    ? 'text-blue-600 hover:text-blue-700'
                    : activeSection === link.href
                    ? 'text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs - right */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={process.env.NEXT_PUBLIC_SIGN_IN_URL || "https://luxeai.anasatech.com"}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors px-5 py-2 rounded-full border border-neutral-300 hover:border-neutral-400"
            >
              Log in
            </a>
            <a
              href={process.env.NEXT_PUBLIC_SIGN_UP_URL || "https://luxeai.anasatech.com/register"}
              className="text-sm font-medium text-white bg-black hover:bg-neutral-800 transition-colors px-5 py-2 rounded-full"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors min-h-[44px] min-w-[44px]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5M3.75 15h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-nav-drawer"
              className="fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors min-h-[44px] min-w-[44px]"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-1 mt-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href + link.label}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href, () => setMobileMenuOpen(false))}
                      className="text-lg font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg px-4 py-3 transition-colors min-h-[44px] flex items-center"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="mt-auto pt-6 space-y-3">
                  <a
                    href={process.env.NEXT_PUBLIC_SIGN_UP_URL || "https://luxeai.anasatech.com/register"}
                    className="block w-full text-center text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors px-4 py-3 rounded-full"
                  >
                    Sign Up
                  </a>
                  <a
                    href={process.env.NEXT_PUBLIC_SIGN_IN_URL || "https://luxeai.anasatech.com"}
                    className="block w-full text-center text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors px-4 py-3 rounded-full border border-neutral-200"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
