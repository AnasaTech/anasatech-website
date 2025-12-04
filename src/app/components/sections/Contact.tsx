'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import toast from 'react-hot-toast';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const fireConfetti = () => {
    // Colors matching your theme
    const colors = ['#bfd7ed', '#60a3d9', '#0074b7', '#003b73'];
    
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors,
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors,
      });
    }, 250);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const LoadingBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 overflow-hidden">
      <div 
        className="bg-[#0074b7] h-1.5 rounded-full animate-[loading_1s_ease-in-out_infinite]"
        style={{ width: '100%' }}
      />
    </div>
  );


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      // Show success message and confetti
      toast.success('Message sent successfully!');
      fireConfetti();

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      toast.success("Your message has been sent!");
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section id='contact' className="py-24 bg-gradient-to-br from-[#003b73] via-[#0074b7] to-[#003b73] relative overflow-hidden font-poppins">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#60a3d9]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#bfd7ed]/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#bfd7ed] font-medium text-sm tracking-wider uppercase mb-4 block">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6  bg-clip-text ">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray max-w-2xl mx-auto text-base md:text-lg">
                Interested in Luxe POS or Gatherly? Request a demo, ask about our products, or get in touch with our team. We're here to help you succeed.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Contact Cards */}
                {[
                  {
                    icon: FiMail,
                    title: "Email",
                    content: "info@anasatech.com",
                    link: "mailto:info@anasatech.com"
                  },
                  {
                    icon: FiPhone,
                    title: "Phone",
                    content: "+233 (547) 157-531",
                    link: "tel:+233547157531"
                  },
                  {
                    icon: FiMapPin,
                    title: "Office",
                    content: "ACP Junction, Josana Estates",
                    link: "https://maps.google.com"
                  }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-start p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#0074b7]/20 transition-all duration-300 group border border-gray-100"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-12 h-12 bg-gradient-to-br from-[#bfd7ed] to-[#60a3d9] rounded-xl flex items-center justify-center group-hover:from-[#0074b7] group-hover:to-[#003b73] transition-all duration-300 shadow-md"
                    >
                      <item.icon className="w-6 h-6 text-[#003b73] group-hover:text-white transition-colors" />
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#0074b7] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-base">{item.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-gray mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg text-black text-base bg-gray-50 border border-gray-200 focus:border-[#0074b7] focus:ring-2 focus:ring-[#0074b7] focus:outline-none transition-colors min-h-[44px]"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-gray mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-black text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0074b7] focus:ring-2 focus:ring-[#0074b7] focus:outline-none transition-colors min-h-[44px]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-base font-medium text-gray mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-black text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0074b7] focus:ring-2 focus:ring-[#0074b7] focus:outline-none transition-colors min-h-[44px]"
                    placeholder="Product Demo Request, Sales Inquiry, Support..."
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-base font-medium text-gray mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 text-black text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0074b7] focus:ring-2 focus:ring-[#0074b7] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your business needs and which product you're interested in..."
                  />
                </div>

                {/* Submit Button with enhanced effects */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-full md:w-auto px-8 py-4 bg-white text-[#003b73] text-base rounded-full 
                    font-semibold flex items-center justify-center gap-2 min-h-[44px] overflow-hidden
                    ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-2xl hover:shadow-white/20'} 
                    transition-all duration-300`}
                >
                  <span className="relative z-10">{isLoading ? 'Sending...' : 'Send Message'}</span>
                  <motion.div
                    animate={isHovered && !isLoading ? { x: [0, 4, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="relative z-10"
                  >
                    <FiSend className="w-5 h-5" />
                  </motion.div>
                  {!isLoading && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#bfd7ed] to-[#60a3d9]"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
