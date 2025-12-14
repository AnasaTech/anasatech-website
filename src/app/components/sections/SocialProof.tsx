'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaBuilding, 
  FaChartLine, 
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa';
import { IconType } from 'react-icons';

// Type definitions
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  business: string;
  location: string;
  image?: string;
  result?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
}

interface Metric {
  value: string;
  label: string;
  icon: IconType;
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "When I was expecting my baby, I thought I'd have to put my business on hold. But with Luxe POS AI assistant and daily contributions feature, I was able to run everything from home. The AI helped me track sales, manage inventory, and even guided me through difficult decisions. I never missed a beat, and my business actually grew during my pregnancy!",
    author: 'Elizabeth Aryee',
    business: 'Babebox',
    location: 'Accra, Ghana',
    image: '/elizabeth.jpeg',
    result: '35% increase in sales efficiency',
    linkedin: 'https://www.linkedin.com/in/elizabetharyee212/',
  },
  {
    id: '2',
    quote: 'GadaInfo made organizing our projects and forms for our different clients easy. The integrated AI system helped us analyse the survey by easy chatting with our survey as asking it questions. Highly recommended for any organization focusing on offline data collection in Africa.',
    author: 'Mrs. Margaret Takyi-Micah',
    business: 'Nest of Ideas',
    location: 'Accra, Ghana',
    image: '/margaret.jpeg',
    result: 'Multiple forms and projects managed seamlessly',
    linkedin: 'https://www.linkedin.com/in/margaret-takyi-micah-business-growth-strategist-coach-05494337/',
    twitter: 'https://x.com/MicahTakyi',
  },
  {
    id: '3',
    quote: "We were struggling with losses due to poor systems across our locations. Since switching to Luxe, we're sailing smoothly! The multi-branch system keeps everything synchronized, and the AI chat feature made setting up our new branch incredibly easy. It walked us through every step - from inventory setup to staff training. We've turned our losses into profits!",
    author: 'Lat&Jay',
    business: 'Lat&Jay Electronics',
    location: 'Ghana, Nigeria',
    image: '/latjay.png',
    result: '100% up time and amazing multi-branch management',
    facebook: 'https://www.facebook.com/profile.php?id=100063604656961&_rdc=1&_rdr#',
  },
  {
    id: '4',
    quote: 'We were struggling with a system that went offline all the time especially at our peak hours. Now we are able to manage all our branches in a very seamless way without any compromise on up-time',
    author: 'Masters Pizza',
    business: 'Dakar Innovation Hub',
    location: 'Dakar, Senegal',
    image: '/masterspizza.png',
    result: '100% up time and ease of use',
    instagram: "https://www.instagram.com/masterspizzagh/"
  }
];

// Key metrics data
const metrics: Metric[] = [
  {
    value: '99.9%',
    label: 'Up-time',
    icon: FaBuilding
  },
  {
    value: '223K+',
    label: 'Transactions Processed',
    icon: FaChartLine
  },
  {
    value: '97%',
    label: 'Customer Satisfaction',
    icon: FaStar
  }
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="social-proof" className="py-24 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#0074b7] font-medium text-sm tracking-wider uppercase mb-4 block">
              Trusted by Businesses Across Africa
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Success Stories from{' '}
              <span className="bg-gradient-to-r from-[#003b73] via-[#0074b7] to-[#60a3d9] bg-clip-text text-transparent">
                Our Customers
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              See how businesses across Africa are transforming their operations with our products
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#0074b7]/20 transition-all duration-300 text-center border border-gray-100 hover:border-[#bfd7ed]">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#003b73] to-[#0074b7] flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg"
                  >
                    <metric.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#003b73] to-[#0074b7] bg-clip-text text-transparent mb-2"
                  >
                    {metric.value}
                  </motion.div>

                  {/* Label */}
                  <div className="text-gray-600 font-medium text-base">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="max-w-4xl mx-auto">
              {/* Carousel Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#bfd7ed]/20 to-[#60a3d9]/10" />

                {/* Content - Split Layout */}
                <div className="relative p-8 md:p-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="grid md:grid-cols-[300px_1fr] gap-8 items-center"
                    >
                      {/* Left Side - Customer Details */}
                      <div className="flex flex-col items-center text-center">
                        {/* Customer Image */}
                        {testimonials[currentIndex].image && (
                          <div className="relative w-32 h-32 mb-4">
                            <Image
                              src={testimonials[currentIndex].image || '/placeholder-avatar.jpg'}
                              alt={testimonials[currentIndex].author}
                              fill
                              className="rounded-full object-cover border-4 border-[#bfd7ed]"
                              sizes="128px"
                            />
                          </div>
                        )}

                        {/* Author Info */}
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                          {testimonials[currentIndex].author}
                        </h4>
                        <p className="text-base text-[#0074b7] font-semibold mb-1">
                          {testimonials[currentIndex].business}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          {testimonials[currentIndex].location}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 mb-4">
                          {testimonials[currentIndex].linkedin && (
                            <a
                              href={testimonials[currentIndex].linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:scale-110 transition-transform"
                              aria-label="LinkedIn"
                            >
                              <FaLinkedinIn className="w-5 h-5" />
                            </a>
                          )}
                          {testimonials[currentIndex].twitter && (
                            <a
                              href={testimonials[currentIndex].twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
                              aria-label="Twitter"
                            >
                              <FaTwitter className="w-5 h-5" />
                            </a>
                          )}
                          {testimonials[currentIndex].facebook && (
                            <a
                              href={testimonials[currentIndex].facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
                              aria-label="Facebook"
                            >
                              <FaFacebookF className="w-5 h-5" />
                            </a>
                          )}
                          {testimonials[currentIndex].instagram && (
                            <a
                              href={testimonials[currentIndex].instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center text-white hover:scale-110 transition-transform"
                              aria-label="Instagram"
                            >
                              <FaInstagram className="w-5 h-5" />
                            </a>
                          )}
                        </div>

                        {/* Result Badge */}
                        {testimonials[currentIndex].result && (
                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                            {testimonials[currentIndex].result}
                          </div>
                        )}
                      </div>

                      {/* Right Side - Testimonial Message */}
                      <div className="flex flex-col justify-center">
                        {/* Star Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                          "{testimonials[currentIndex].quote}"
                        </blockquote>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons with enhanced effects */}
                <motion.button
                  onClick={handlePrevious}
                  whileHover={{ scale: 1.15, x: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 min-w-[44px] min-h-[44px] rounded-full bg-white shadow-lg hover:shadow-2xl hover:shadow-[#0074b7]/30 flex items-center justify-center transition-all group"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="w-5 h-5 text-[#0074b7] group-hover:text-[#003b73] transition-colors" />
                </motion.button>

                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.15, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 min-w-[44px] min-h-[44px] rounded-full bg-white shadow-lg hover:shadow-2xl hover:shadow-[#0074b7]/30 flex items-center justify-center transition-all group"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="w-5 h-5 text-[#0074b7] group-hover:text-[#003b73] transition-colors" />
                </motion.button>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-12 h-3 bg-[#0074b7]'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -right-32 w-64 h-64 bg-[#bfd7ed]/20 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        className="absolute bottom-1/4 -left-32 w-64 h-64 bg-[#60a3d9]/20 rounded-full blur-3xl" 
      />
    </section>
  );
}
