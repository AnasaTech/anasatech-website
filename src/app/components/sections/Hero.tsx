'use client';
import { useState, useEffect } from 'react';
import { handleScroll } from '@/app/utils/scroll';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaReact, 
  FaAws, 
  FaDocker, 
  FaNodeJs, 
  FaLaravel,
  FaMicrosoft,
  FaHeart 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiPostgresql, 
  SiRedis, 
} from 'react-icons/si';

const techStack = [
  { name: 'React', color: 'text-green-700', icon: FaReact, delay: 1 },
  { name: 'TypeScript', color: 'text-blue-600', icon: SiTypescript, delay: 1.2 },
  { name: 'AWS', color: 'text-orange-400', icon: FaAws, delay: 1.4 },
  { name: 'Node.js', color: 'text-green-500', icon: FaNodeJs, delay: 1.6 },
  { name: 'PostgreSQL', color: 'text-blue-600', icon: SiPostgresql, delay: 1.8 },
  { name: 'Redis', color: 'text-red-500', icon: SiRedis, delay: 2 },
  { name: 'Docker', color: 'text-blue-400', icon: FaDocker, delay: 2.2 },
  { name: 'Laravel', color: 'text-red-600', icon: FaLaravel, delay: 2.4 },
  { name: 'Azure', color: 'text-blue-400', icon: FaMicrosoft, delay: 2.6 }
];

export default function Hero() {
  return (
    <section id='hero' className="min-h-screen pt-20 md:-pt-24 flex items-center justify-center bg-white relative overflow-hidden">      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6">
                <span className="bg-gradient-to-r from-[#003b73] via-[#60a3d9] to-[#bfd7ed] bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="text-black">Digital Vision</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed px-4 sm:px-0"
              >
                Turn your bold ideas into powerful digital solutions. 
                From concept to launch, we'll help you build  
                <span className='text-violet-600 font-bold'> software products </span>
                your customers will love ❤️
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Link 
                    href={"#contact"} 
                    onClick={(e) => handleScroll(e, "#contact")} 
                    className="group relative px-6 sm:px-12 py-3 sm:py-4 bg-[#003b73] text-white rounded-full font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#0074b7]-200 w-full sm:w-auto text-center"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute inset-0 bg-[#0074b7] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                  <Link 
                    href={"#projects"} 
                    onClick={(e) => handleScroll(e, "#projects")}  
                    className="relative px-6 sm:px-12 py-3 sm:py-4 bg-white text-[#0074b7] rounded-full font-bold border-2 border-[#0074b7] hover:bg-[#bfd7ed] transition-all w-full sm:w-auto text-center"
                  >
                    See Success Stories
                  </Link>
                </div>

                {/* Social proof section */}
                <div className="flex flex-col items-center lg:items-start gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map((i) => (
                        <div 
                          key={i} 
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-800 to-blue-100 border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">Trusted locally and globally</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="flex items-center">
                      ⭐⭐⭐⭐⭐
                      <span className="ml-1">4.9/5 Client satisfaction</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>            
            {/* Right column - Visual elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0 h-[400px] sm:h-[500px] select-none"
            >

              {/* Main container */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0">
                  {/* Main Card */}
                  <Link
                    href="https://luxe.anasatech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div
                      className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:right-0 md:left-auto md:top-0 top-0 w-[300px] sm:w-[380px]"
                    >
                      <motion.div
                        className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,59,115,0.3)]"
                        whileHover={{ scale: 1.02, shadow: "[0_30px_60px_rgba(0,59,115,0.4)]" }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Main Image */}
                        <div className="relative h-[400px] sm:h-[500px] mb-2">
                          <Image
                            src="/pointofsale.avif"
                            alt="Luxe Point of Sale System"
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 300px, 380px"
                            priority
                          />
                          {/* Content Overlay */}
                          <div className="absolute inset-0 z-20">
                            {/* Top Badge */}
                            <div className="absolute top-6 left-6 right-6">
                              <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium text-gray-800">Try live demo now</span>
                                  </div>
                                  <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    →
                                  </motion.div>
                                </div>
                              </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                  <div className="h-px flex-1 bg-white/30" />
                                  <span className="text-white/70 text-sm font-medium">Featured Product</span>
                                  <div className="h-px flex-1 bg-white/30" />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white">
                                  Luxe POS System
                                </h3>
                                
                                <div className="flex items-center gap-4">
                                  <div className="flex -space-x-2">
                                    {[1,2,3].map((i) => (
                                      <div 
                                        key={i}
                                        className="text-3xl"
                                      >
                                        ❤️
                                      </div>
                                    ))}
                                  </div>
                                  <span className="text-white/90 text-sm">
                                    Built with love
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Hover Overlay */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.2 }}
                              className="absolute inset-0 bg-gradient-to-b from-[#003b73]/80 to-[#003b73]/95 flex items-center justify-center"
                            >
                              <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                className="text-center px-8"
                              >
                                <motion.div 
                                  className="mb-4"
                                  animate={{ y: [0, -10, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-12 w-12 text-white/90 mx-auto" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                  >
                                    <path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={1.5} 
                                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" 
                                    />
                                  </svg>
                                </motion.div>
                                <p className="text-xl font-medium text-white mb-2">
                                  Experience Luxe POS
                                </p>
                                <p className="text-white/80 text-sm">
                                  Click anywhere to try our demo
                                </p>
                              </motion.div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </Link>

                  {/* Background Gradient Orb */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#003b73]/20 via-[#0074b7]/20 to-transparent blur-3xl"
                    />
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
