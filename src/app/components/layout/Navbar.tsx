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
        { href: "#services", label: "Services" },
        { href: "#technologies", label: "Technologies" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
    ];


    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/#" onClick={(e) => handleScroll(e, "#hero")}>
                            <Image src="/logo.png" alt="Company Logo" width={120} height={40} />
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
                            className="p-2 rounded-lg text-gray-600 hover:text-purple-600 focus:outline-none"
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

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex flex-col gap-4">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="
                                            font-poppins font-medium text-[15px]
                                            text-gray-800 hover:text-purple-600 
                                            transition-colors py-2
                                        "
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <Link
                                    href={"#contact"}
                                    onClick={() => setIsOpen(false)}
                                    className="
                                    font-poppins font-semibold text-[15px]
                                    bg-[#0074b7] text-white 
                                    px-7 py-3 rounded-full
                                    hover:bg-[#003b73]
                                    transition-all duration-200
                                    w-full
                                    "
                                >
                                    Let's Talk
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
