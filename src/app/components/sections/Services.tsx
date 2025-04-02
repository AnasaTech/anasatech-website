// components/sections/Services.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Creating stunning, responsive websites that engage users and drive conversions. We focus on performance and user experience.",
      icon: "https://cdn-icons-png.flaticon.com/512/1336/1336494.png",
      features: ["Custom Websites", "Web Applications", "E-commerce Solutions"]
    },
    {
      title: "AI Agent Development",
      description: "Building intelligent AI agents for Customer Service chatbots and automation of complex tasks to enhance business operations using cutting-edge Generative AI Models",
      icon: "https://cdn-icons-png.flaticon.com/512/4616/4616809.png",
      features: [
        "Custom AI Agents",
        "Process Automation"
      ]
    },
    {
      title: "Mobile Apps",
      description: "Building native and cross-platform mobile solutions that provide seamless experiences across all devices.",
      icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",
      features: ["iOS & Android", "React Native", "Flutter"]
    },
    {
      title: "Backend Development",
      description: "Developing robust and scalable backend infrastructure that powers your digital solutions securely.",
      icon: "https://cdn-icons-png.flaticon.com/512/1185/1185915.png",
      features: ["API Development", "Cloud Solutions", "Database Design"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-[#f5f5f5] relative overflow-hidden font-poppins">
      {/* Background decorative elements */}

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#0074b7] font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-black">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We transform your ideas into reality with our comprehensive development services
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Service Card Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 bg-[#bfd7ed]/30 rounded-lg flex items-center justify-center group-hover:bg-[#0074b7] transition-colors duration-300">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={28}
                      height={28}
                      className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#0074b7] text-black transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2 text-[#003b73]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                {/* <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div> */}
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-colors shadow-sm hover:shadow-md">
            View All Services
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
