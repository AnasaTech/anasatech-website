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
  FaMicrosoft 
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
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/3911318.jpg",
      chatBubbles: [
        {
          text: "Tests passed!",
          position: "left-[70%] top-[15%]",
          style: "bg-[#0074b7]/40 border-[#0074b7]",
          textColor: "text-black"
        },
        {
          text: "Ok, deploy! 🚀",
          position: "left-[25%] top-[60%]",
          style: "bg-white/90 border border-[#0074b7]",
          textColor: "text-gray-600"
        }
      ]
    },
    {
      image: "/tech-min.jpg",
      chatBubbles: [
        {
          text: "I am done building the feature! ✨",
          position: "left-[50%] bottom-[15%]",
          style: "bg-blue-500/90",
          textColor: "text-white"
        }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id='hero' className="min-h-screen sm:pt-0 md:pt-24 lg:pt-0 flex items-center justify-center bg-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full opacity-50">
          <div className="absolute inset-0 grid grid-cols-6 gap-2 transform rotate-12 scale-150">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="col-span-1">
                {[...Array(12)].map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.03, 0.06, 0.03] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: (i + j) * 0.1,
                    }}
                    className="h-8 w-full bg-purple-200 mb-2 rounded-full"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10 mt-0 sm:mt-4 md:mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6">
                <span className="bg-gradient-to-r from-[#003b73] via-[#60a3d9] via-[#0074b7] to-[#bfd7ed] bg-clip-text text-transparent">
                  {`We <Paint /> \n Your Dreams`}
                </span>
                <br />
                <span className="text-black">Into Reality</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed"
              >
                Crafting exceptional websites, mobile apps, and backend solutions 
                that drive growth and innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  href={"#contact"} 
                  onClick={(e) => handleScroll(e, "#contact")} 
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#003b73] text-white rounded-full font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#0074b7]-200"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-[#0074b7] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
                <Link 
                  href={"#projects"} 
                  onClick={(e) => handleScroll(e, "#projects")}  
                  className="relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0074b7] rounded-full font-bold border-2 border-[#0074b7] hover:bg-[#bfd7ed] transition-all"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right column - Visual elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px] w-full">
                {/* Main circular container */}
                <motion.div
                  animate={{
                    rotateY: [0, 10, 0],
                    rotateX: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Main image container */}
                  <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]">
                    {/* Image carousel */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-r from-[#bfd7ed] to-[#B3CEE5]/20">
                      <div className="absolute inset-4 bg-white rounded-full shadow-lg overflow-hidden">
                        <div className="relative w-full h-full">
                          {slides.map((slide, index) => (
                            <div
                              key={index}
                              className={`absolute inset-0 transition-opacity duration-1000 ${
                                currentSlide === index ? 'opacity-100' : 'opacity-0'
                              }`}
                            >
                              <Image
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover rounded-full"
                                priority={index === 0}
                                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 400px"
                              />
                              
                              {/* Chat Bubbles */}
                              <div className="absolute inset-0">
                                {slide.chatBubbles.map((bubble, bubbleIndex) => (
                                  <div
                                    key={bubbleIndex}
                                    className={`absolute ${bubble.style} ${bubble.position} p-2 rounded-lg transform -translate-x-1/2 text-xs sm:text-sm md:text-base`}
                                  >
                                    <span className={bubble.textColor}>
                                      {bubble.text}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Tech Stack Indicators */}
                    <div className="absolute inset-0 pointer-events-none">
                      {techStack.map((tech, index) => {
                        const angle = (index * (360 / techStack.length)) * (Math.PI / 180);
                        // Adjust radius based on screen size - further out on mobile, closer on desktop
                        const radius = typeof window !== 'undefined' 
                          ? window.innerWidth < 640 
                            ? Math.min(window.innerWidth * 0.35, 280) // Further on mobile
                            : window.innerWidth < 768
                              ? Math.min(window.innerWidth * 0.25, 300) // Closer on tablet
                              : window.innerWidth < 1024
                                ? Math.min(window.innerWidth * 0.2, 320) // Even closer on small desktop
                                : 280 // Closest on large desktop
                          : 280;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, x: 0, y: 0 }}
                            animate={{ 
                              opacity: 1,
                              x: x,
                              y: y,
                              rotate: [0, 5, 0, -5, 0],
                            }}
                            transition={{
                              delay: tech.delay,
                              duration: 0.8,
                              rotate: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          >
                            <div className="bg-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-1.5 sm:gap-2 md:gap-3 border border-gray-100">
                              <tech.icon className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ${tech.color}`} />
                              <span className="text-[10px] sm:text-xs md:text-sm font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent whitespace-nowrap">
                                {tech.name}
                              </span>
                              <div className={`absolute inset-0 ${tech.color} opacity-5 blur-sm rounded-xl -z-10`} />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Background lines */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[560px] h-[280px] sm:h-[320px] md:h-[400px] lg:h-[560px] -z-10">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="w-full h-full"
                      >
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-200/50 to-transparent"
                            style={{
                              transform: `rotate(${i * 30}deg) translateX(-50%)`,
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px]">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-[#0074b7]/10 to-[#0074b7]/10 rounded-full blur-3xl"
                  />
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
