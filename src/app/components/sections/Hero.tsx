'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id='hero' className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003b73] via-[#0074b7] to-[#60a3d9]">
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-br from-[#0074b7]/50 via-transparent to-[#bfd7ed]/30"
          style={{ backgroundSize: '200% 200%' }}
        />
      </div>

      {/* Decorative gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-r from-[#bfd7ed]/40 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-gradient-to-l from-[#60a3d9]/40 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#003b73]/20 via-[#0074b7]/30 to-transparent rounded-full blur-3xl"
      />

      {/* Floating particles - using deterministic values to avoid hydration mismatch */}
      {[...Array(20)].map((_, i) => {
        // Use index-based deterministic values instead of Math.random()
        const leftPosition = ((i * 37) % 100);
        const topPosition = ((i * 53) % 100);
        const duration = 3 + ((i * 0.3) % 2);
        const delay = (i * 0.25) % 5;
        
        return (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${leftPosition}%`,
              top: `${topPosition}%`,
            }}
          />
        );
      })}

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Centered content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
              {/* Badge */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Building for Africa</span>
              </motion.div> */}

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="block text-white"
                >
                  Building the Future
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block bg-gradient-to-r from-[#bfd7ed] via-white to-[#bfd7ed] bg-clip-text text-transparent"
                >
                  of African Businesses
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-base sm:text-lg lg:text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                We create innovative software products that empower businesses across Africa. 
                From point-of-sale systems to data collection platforms, 
                our solutions are built for the African market.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link 
                      href={"https://luxe.anasatech.com"} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-8 py-4 bg-white text-[#003b73] text-base rounded-full font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-white/20 w-full sm:w-auto text-center min-h-[44px] flex items-center justify-center"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Try Luxe POS
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-[#bfd7ed]"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link 
                      href={"https://gadainfo.anasatech.com"} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-8 py-4 bg-white/10 backdrop-blur-md text-white text-base rounded-full font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 w-full sm:w-auto text-center min-h-[44px] flex items-center justify-center"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Try GadaInfo
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                </div>

                {/* Social proof section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20">
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map((i) => (
                        <motion.div 
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-[#bfd7ed] border-2 border-white/50"
                        />
                      ))}
                    </div>
                    <span className="text-base text-white/90 font-medium">Trusted by many businesses</span>
                  </div>
                  <div className="flex items-center gap-2 text-base text-white/80">
                    <span className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                      <span className="ml-2">Powering African businesses</span>
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-10" />
    </section>
  );
}
