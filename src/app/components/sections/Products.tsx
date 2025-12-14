'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaChartLine, 
  FaClipboardList, 
  FaBuilding, 
  FaMobileAlt,
  FaWpforms,
  FaRobot,
  FaDatabase,
  FaCloudDownloadAlt,
  FaChartBar
} from 'react-icons/fa';
import { IconType } from 'react-icons';

// Type definitions
interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  quote: string;
  author: string;
  business: string;
  result?: string;
}

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  demoUrl: string;
  image: string;
  stats?: Stat[];
  testimonial?: Testimonial;
}

// Product data
const products: Product[] = [
  {
    id: 'luxe-pos',
    name: 'Luxe POS',
    tagline: 'All-in-One Point of Sale for African Businesses',
    description: 'Transform your business operations with our comprehensive point-of-sale system designed specifically for African markets. Manage sales, inventory, and customers all in one powerful platform.',
    features: [
      {
        icon: FaChartLine,
        title: 'Sales Tracking & Analytics',
        description: 'Real-time insights into your business performance with detailed analytics and reporting'
      },
      {
        icon: FaClipboardList,
        title: 'Inventory Management',
        description: 'Keep track of stock levels, set alerts, and manage suppliers effortlessly'
      },
      {
        icon: FaBuilding,
        title: 'Multi-Branch Support',
        description: 'Manage multiple locations from a single dashboard with centralized control'
      },
      {
        icon: FaMobileAlt,
        title: 'Customer Mobile App',
        description: 'Engage customers with a dedicated mobile app for orders and loyalty programs'
      }
    ],
    demoUrl: 'https://luxe.anasatech.com',
    image: '/store_pos.png',
    stats: [
      { value: '20k+', label: 'Daily Transactions' }
    ],
    testimonial: {
      quote: 'Luxe POS has revolutionized how we manage our restaurant. The multi-branch feature is a game-changer.',
      author: 'Charles, IT Department',
      business: 'Masters Pizza',
      result: 'Increase in sales efficiency and ease of use'
    }
  },
  {
    id: 'gadainfo',
    name: 'GadaInfo',
    tagline: 'M&E Data Collection Platform for NGOs',
    description: 'Comprehensive monitoring and evaluation platform designed specifically for NGOs and development organizations across Africa. Streamline your M&E processes with offline data collection, automated reporting, and AI-powered impact analysis.',
    features: [
      {
        icon: FaWpforms,
        title: 'M&E Form Builder',
        description: 'Create monitoring and evaluation forms with pre-built templates for common M&E frameworks'
      },
      {
        icon: FaCloudDownloadAlt,
        title: 'Offline Field Data Collection',
        description: 'Collect beneficiary data and project metrics in remote areas without internet connectivity'
      },
      {
        icon: FaRobot,
        title: 'AI-Powered Impact Analysis',
        description: 'Automatically analyze program outcomes and generate impact reports using artificial intelligence'
      },
      {
        icon: FaDatabase,
        title: 'Project Data Management',
        description: 'Centralized dashboard to manage multiple projects, beneficiaries, and evaluation workflows'
      },
      {
        icon: FaChartBar,
        title: 'M&E Reporting & Dashboards',
        description: 'Generate donor reports and impact dashboards with real-time project performance metrics'
      },
      {
        icon: FaMobileAlt,
        title: 'Field-Ready Mobile App',
        description: 'Optimized for field officers and enumerators working in challenging environments'
      }
    ],
    demoUrl: 'https://gadainfo.anasatech.com',
    image: '/gadainfo.png',
    stats: [
      { value: '1k+', label: 'Forms Created' },
      { value: '120k', label: 'Data Points Collected' }
    ]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Innovative Solutions for{' '}
              <span className="bg-gradient-to-r from-[#003b73] via-[#0074b7] to-[#60a3d9] bg-clip-text text-transparent">
                African Markets
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Powerful software products designed to help African businesses thrive in the digital age
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group h-full"
              >
                {/* Product Card with glassmorphism */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-[#0074b7]/30 transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100"
                >
                  {/* Product Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={product.image}
                        alt={`${product.name} - ${product.tagline}`}
                        fill
                        className="object-cover rounded-t-3xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                        loading="lazy"
                        quality={85}
                      />
                    </motion.div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Product Name Badge with glassmorphism */}
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-6 left-6"
                    >
                      <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl border border-white/50">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-[#003b73] to-[#0074b7] bg-clip-text text-transparent">{product.name}</h3>
                      </div>
                    </motion.div>
                  </div>

                  {/* Product Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    {/* Tagline */}
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      {product.tagline}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed text-base">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6 flex-1">
                      <h5 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                        Key Features
                      </h5>
                      <div className="grid gap-3">
                        {product.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            className="flex items-start gap-3 group/feature cursor-pointer"
                          >
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#bfd7ed] to-[#60a3d9] flex items-center justify-center flex-shrink-0 group-hover/feature:from-[#0074b7] group-hover/feature:to-[#003b73] transition-all duration-300 shadow-md group-hover/feature:shadow-lg"
                            >
                              <feature.icon className="w-5 h-5 text-[#003b73] group-hover/feature:text-white transition-colors" />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-gray-900 text-sm group-hover/feature:text-[#0074b7] transition-colors">
                                {feature.title}
                              </p>
                              <p className="text-xs text-gray-600 mt-0.5">
                                {feature.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    {product.stats && product.stats.length > 0 && (
                      <div className="flex gap-6 mb-6 pb-6 border-b border-gray-200">
                        {product.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-[#0074b7]">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Testimonial */}
                    {product.testimonial && (
                      <div className="bg-gradient-to-br from-[#bfd7ed]/30 to-[#60a3d9]/20 rounded-2xl p-6 mb-6">
                        <p className="text-gray-700 italic mb-3 text-base leading-relaxed">
                          "{product.testimonial.quote}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-900 text-base">
                              {product.testimonial.author}
                            </p>
                            <p className="text-sm text-gray-600">
                              {product.testimonial.business}
                            </p>
                          </div>
                          {product.testimonial.result && (
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                              {product.testimonial.result}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* CTA Button with enhanced micro-interactions */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative px-8 py-4 bg-gradient-to-r from-[#003b73] via-[#0074b7] to-[#003b73] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white text-base rounded-full font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#0074b7]/40 flex items-center justify-center gap-2 min-h-[44px]"
                        style={{ backgroundSize: '200% 100%' }}
                      >
                        <span className="relative z-10">Try {product.name} Demo</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="relative z-10"
                        >
                          →
                        </motion.span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#60a3d9] to-[#bfd7ed]"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
