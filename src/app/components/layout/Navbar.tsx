'use client';
import { useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { handleScroll } from '@/app/utils/scroll';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const menuItems = [
        { href: "#hero", label: "Home" },
        { href: "#products", label: "Products" },
        { href: "#about", label: "About" },
        { href: "#social-proof", label: "Testimonials" },
        { href: "#contact", label: "Contact" }
    ];


    return (
        <nav className="fixed w-full bg-white md:bg-white/80 md:backdrop-blur-md z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/#" onClick={(e) => handleScroll(e, "#hero")} className="inline-block">
                            <Image 
                              src="/logo.png" 
                              alt="Anasatech - Building the Future of African Business" 
                              width={120} 
                              height={40}
                              priority
                              quality={90}
                              className="hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered with enhanced styling */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex gap-12"> {/* Increased gap for better spacing */}
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="relative group"
                                    onClick={(e) => handleScroll(e, item.href)}
                                    onMouseEnter={() => setActiveLink(item.href)}
                                    onMouseLeave={() => setActiveLink('')}
                                >
                                    <span className={`
                                        font-poppins font-medium text-[15px] tracking-wide
                                        ${activeLink === item.href ? 'text-[#0074b7]' : 'text-gray-800'}
                                        transition-colors duration-200 ease-in-out
                                        hover:text-[#0074b7]
                                    `}>
                                        {item.label}
                                    </span>
                                    
                                    {/* Animated underline */}
                                    <span className="
                                        absolute -bottom-1 left-0 w-full h-0.5
                                        bg-[#0074b7] transform scale-x-0
                                        transition-transform duration-200 ease-out
                                        group-hover:scale-x-100
                                    "></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Button */}
                    <div className="flex-1 hidden md:flex justify-end">
                        <Link 
                            href={"#contact"}
                            className="
                            font-poppins font-semibold text-[15px]
                            bg-[#0074b7] text-white 
                            px-7 py-2.5 rounded-full
                            hover:bg-[#003b73] 
                            transition-all duration-200
                            shadow-sm hover:shadow-md"
                            onClick={(e) => handleScroll(e, "#contact")}
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-gray-600 hover:text-[#0074b7] focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {!isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu - Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 top-20 md:hidden bg-white backdrop-blur-xl z-40"
                    >
                        <div className="container mx-auto px-4 py-8 h-full">
                            <div className="flex flex-col gap-6 h-full">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={(e) => {
                                                handleScroll(e, item.href);
                                                setIsOpen(false);
                                            }}
                                            className="
                                                block font-poppins font-semibold text-2xl
                                                text-gray-800 hover:text-[#0074b7] 
                                                transition-colors py-3 border-b border-gray-200
                                                min-h-[44px] flex items-center
                                            "
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-auto"
                                >
                                    <Link
                                        href={"#contact"}
                                        onClick={(e) => {
                                            handleScroll(e, "#contact");
                                            setIsOpen(false);
                                        }}
                                        className="
                                        block text-center font-poppins font-semibold text-lg
                                        bg-[#0074b7] text-white 
                                        px-8 py-4 rounded-full
                                        hover:bg-[#003b73]
                                        transition-all duration-200
                                        min-h-[44px]
                                        "
                                    >
                                        Let's Talk
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
