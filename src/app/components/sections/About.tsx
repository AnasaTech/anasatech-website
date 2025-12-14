'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaLightbulb, 
  FaHandsHelping, 
  FaChartLine, 
  FaUsers 
} from 'react-icons/fa';
import { IconType } from 'react-icons';

// Type definitions
interface Value {
  icon: IconType;
  title: string;
  description: string;
}

interface Metric {
  value: string;
  label: string;
}

// Company values
const values: Value[] = [
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'We push boundaries to create cutting-edge solutions that solve real problems'
  },
  {
    icon: FaHandsHelping,
    title: 'Women Empowerment',
    description: 'Championing women in tech and creating tools that help women entrepreneurs thrive'
  },
  {
    icon: FaChartLine,
    title: 'Impact',
    description: 'Focused on creating measurable positive change in the communities we serve'
  },
  {
    icon: FaUsers,
    title: 'Community',
    description: 'Growing together with our customers and partners across the continent'
  }
];

// Achievement metrics
const metrics: Metric[] = [
  { value: '2', label: 'Products Launched' },
  { value: '99.9%', label: 'Up time' },
  { value: '5', label: 'Target countries in 2026' }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Split Layout (70/30) */}
          <div className="grid lg:grid-cols-[70%_30%] gap-12 lg:gap-16 items-center mb-20">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Label */}
              <span className="text-[#0074b7] font-medium text-sm tracking-wider uppercase mb-4 block">
                About Us
              </span>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Women-Led Innovation{' '}
                <span className="bg-gradient-to-r from-[#003b73] via-[#0074b7] to-[#60a3d9] bg-clip-text text-transparent">
                  Transforming Africa
                </span>
              </h2>

              {/* Mission Statement */}
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  At Anasatech, we're a women-led technology company on a mission to empower 
                  African businesses—especially women entrepreneurs—with accessible, powerful 
                  software solutions. We believe that when women lead in tech, everyone benefits.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Our products are built from the ground up with African markets in mind, 
                  addressing real challenges faced by women business owners and creating 
                  opportunities for economic empowerment across the continent.
                </p>
              </div>

              {/* Achievement Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#0074b7] mb-2">
                      {metric.value}
                    </div>
                    <div className="text-base text-gray-600">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - CEO Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Link
                href="https://www.linkedin.com/in/emerald-adjei/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_rgba(0,59,115,0.3)] transition-all duration-300 group cursor-pointer"
              >
                <Image
                  src="/ceo.jpeg"
                  alt="Emerald Adjei - CEO & Co-Founder of Anasatech, women-led technology company empowering African businesses"
                  fill
                  className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  loading="lazy"
                  quality={85}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003b73]/60 via-transparent to-transparent group-hover:from-[#003b73]/70 transition-colors duration-300" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl group-hover:bg-white transition-colors duration-300">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-gray-900 font-bold text-lg md:text-xl mb-1">
                          Emerald Adjei
                        </p>
                        <p className="text-[#0074b7] font-semibold text-base mb-2">
                          CEO & Co-Founder
                        </p>
                        <p className="text-gray-600 text-sm">
                          Leading innovation in African tech
                        </p>
                      </div>
                      <svg 
                        className="w-6 h-6 text-[#0074b7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Decorative Elements */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-[#bfd7ed]/30 rounded-full blur-2xl" 
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#60a3d9]/30 rounded-full blur-2xl" 
              />
            </motion.div>
          </div>

          {/* Company Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                The principles that guide everything we build and every decision we make
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-[#0074b7]/20 transition-all duration-300 h-full border border-gray-100 hover:border-[#bfd7ed]">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#003b73] to-[#0074b7] flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg"
                    >
                      <value.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0074b7] transition-colors">
                      {value.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/3 -right-40 w-80 h-80 bg-[#bfd7ed]/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        className="absolute bottom-1/3 -left-40 w-80 h-80 bg-[#60a3d9]/10 rounded-full blur-3xl" 
      />
    </section>
  );
}
