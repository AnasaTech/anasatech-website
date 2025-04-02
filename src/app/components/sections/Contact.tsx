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
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section id='contact' className="py-24 bg-[#003b73] relative overflow-hidden font-poppins">
      {/* Background Elements */}
      <div className="container mx-auto px-4">
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
                Let's Start a Conversation
              </h2>
              <p className="text-gray max-w-2xl mx-auto text-lg">
                Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you as soon as possible.
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
                    content: "support@anasatech.com",
                    link: "mailto:support@anasatech.com"
                  },
                  {
                    icon: FiPhone,
                    title: "Phone",
                    content: "+233 (540) 184-420",
                    link: "tel:+233543344100"
                  },
                  {
                    icon: FiMapPin,
                    title: "Office",
                    content: "Amasaman Abehenease Junction",
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
                    className="flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-[#bfd7ed] rounded-xl flex items-center justify-center group-hover:bg-[#003b73] transition-colors">
                      <item.icon className="w-6 h-6 text-[#003b73] group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.content}</p>
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg text-black bg-gray-50 border border-gray-200 focus:border-[#0074b7] focus:ring-2 focus:ring-[#0074b7] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-black rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0074b7] focus:ring-2 focus:ring-[#0074b7] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-black rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0074b7] focus:ring-2 focus:ring-[#0074b7] focus:outline-none transition-colors"
                    placeholder="I want the coolest website"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 text-black rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0074b7] focus:ring-2 focus:ring-[#0074b7] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto px-8 py-4 bg-white text-[#003b73] rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#bfd7ed] transition-colors"
                >
                  <span>Send Message</span>
                  <motion.div
                    animate={isHovered ? { x: [0, 4, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    <FiSend className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
