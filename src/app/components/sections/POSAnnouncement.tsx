'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCashRegister, FaChartLine, FaClipboardList, FaUsers, FaBuilding, FaMobileAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function POSAnnouncement() {
  // Use a fixed value instead of window.innerWidth
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-[#003b73] to-[#0074b7] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {mounted && [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100, y: Math.random() * 100 - 50 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                x: [Math.random() * -100, 1000], // Use a fixed large value instead of window.innerWidth
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50]
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute h-8 w-8 rounded-full bg-white/10"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Announcement Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white/90 font-medium text-sm">🚀 NOW AVAILABLE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="relative">
                LUXE POS SYSTEM
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -bottom-2 left-0 h-3 bg-yellow-400/30 -z-10 rounded-full"
                />
              </span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            >
              The all-in-one solution to track, manage, and grow your business
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Everything you need to succeed
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: FaCashRegister, title: "Sales Tracking", desc: "Real-time transaction monitoring" },
                    { icon: FaChartLine, title: "Analytics", desc: "Powerful insights & reporting" },
                    { icon: FaClipboardList, title: "Inventory", desc: "Automated stock management" },
                    { icon: FaUsers, title: "Customer Data", desc: "Build lasting relationships" },
                    { icon: FaBuilding, title: "Multi-branch", desc: "Manage multiple locations easily" },
                    { icon: FaMobileAlt, title: "Customer App", desc: "Online ordering" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-white/70 text-sm">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-10"
                >
                  <Link
                    href="https://luxe.anasatech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-yellow-400 hover:bg-yellow-500 text-[#003b73] font-bold py-4 px-8 rounded-full text-center transition-all transform hover:scale-105 shadow-lg"
                  >
                    TRY THE LIVE DEMO
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Column - Image/Animation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/pointofsale.avif"
                    alt="Luxe POS System Dashboard"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Overlay with stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003b73]/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "All in One", label: "Variant business types" },
                        { value: "24/7", label: "Support" },
                        { value: "99.9%", label: "Uptime" },
                        { value: "FREE", label: "1 Week Free Trial" }
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                          className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center"
                        >
                          <div className="text-xl font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-white/80">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl" />
            </motion.div>
          </div>
          
          {/* Bottom Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl max-w-2xl">
              <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
              <p className="text-white italic mb-4">
                "Luxe POS transformed how we track our business. Sales are up 35% since implementation!"
              </p>
              <Link href={"https://bait-al-khair.com/"} className="text-white/80 text-sm">— Bait Al-Khair</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
