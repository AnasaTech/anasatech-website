'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { handleScroll } from '@/app/utils/scroll';
import Chatbot from '../chatbot/Chatbot';
import confetti from 'canvas-confetti';


export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#contact" },
        { name: "Mobile Development", href: "#contact" },
        { name: "Cloud Solutions", href: "#contact" },
      ]
    },
    {
      title: "Be bold to innovate",
      links: [
        { name: "Let's breathe life into your ideas", href: "#contact"},
      ]
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" }
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showScroll, setShowScroll] = useState(false);



    const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
    };



    const fireConfetti = () => {
      // Fire confetti from left edge
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0, y: 0.8 }
      });
  
      // Fire confetti from right edge
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 1, y: 0.8 }
      });
    };
  
    const handleSubscribe = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!email) {
        toast.error('Email is required');
        return;
      }
  
      try {
        setIsLoading(true);
        
        const response = await fetch('/api/newsletter/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message || 'Subscription failed');
        }
  
        // Fire confetti on success
        fireConfetti();
        
        toast.success('Thank you for subscribing!');
        setEmail('');
        
      } catch (error) {
        toast.error(error instanceof Error ? error.message : 'Subscription failed');
      } finally {
        setIsLoading(false);
      }
    };
  
      useEffect(() => {
        const checkScrollTop = () => {
          const scrolled = window.pageYOffset;
          setShowScroll(scrolled > 300);
        };
    
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
      }, []);

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden font-poppins">
    {/* Decorative Elements */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div className="container mx-auto px-4">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <Link href="/#" onClick={(e) => handleScroll(e, "#hero")}>
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={140}
              height={40}
              className="mb-6"
            />
          </Link>
          <p className="text-gray-600 mb-8 pr-4 leading-relaxed">
            Transforming ideas into digital realities. We create innovative solutions 
            that help businesses thrive in the digital age.
          </p>

          {/* Newsletter Signup Form */}
          <form onSubmit={handleSubscribe} className="relative max-w-md">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="Enter your email"
                className={`
                  w-full px-6 py-4 rounded-full bg-gray-50
                  border transition-colors duration-200
                  ${error ? 'border-[#0074b7] focus:border-[#0074b7]' : 'border-gray-100 focus:border-[#0074b7]'}
                  focus:outline-none
                `}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`
                  absolute right-2 top-1/2 -translate-y-1/2 
                  bg-[#0074b7] text-white px-6 py-2 rounded-full 
                  text-sm font-medium transition-all duration-200
                  hover:bg-[#003b73] disabled:bg-purple-400
                  flex items-center gap-2
                `}
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
            
            {/* Error Message */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-2 ml-4"
              >
                {error}
              </motion.p>
            )}

            {/* Privacy Notice */}
            <p className="text-gray-500 text-xs mt-3 ml-4">
              By subscribing, you agree to our{' '}
              <Link href="/privacy" className="text-[#0074b7] hover:text-purple-700 underline">
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>

        {/* Links Columns */}
        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-gray-900 font-semibold mb-6">{section.title}</h3>
            <ul className="space-y-4">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link 
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-600 hover:text-[#0074b7] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#003b73] hover:text-white transition-all"
                whileHover={{ y: -3 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Additional Links */}
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-600 hover:text-[#0074b7] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-[#0074b7] transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-600 hover:text-[#0074b7] transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll to Top Button with AnimatePresence */}
    <AnimatePresence>
      {showScroll && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#003b73] text-white flex items-center justify-center shadow-lg hover:bg-[#0074b7] transition-colors"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
    {/* <Chatbot /> */}
  </footer>
  );
}
