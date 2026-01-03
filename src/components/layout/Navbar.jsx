import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Header */}
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-5 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5"
            >
                {/* Logo */}
                <a href="#" className="block w-10 h-10 hover:opacity-80 transition-opacity z-[60]">
                    <img src="/favicon.svg" alt="Logo" className="w-full h-full object-contain" />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-widest relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Trigger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white hover:text-accent transition-colors z-[60] relative p-2"
                    aria-label="Toggle Menu"
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                    </motion.div>
                </button>
            </motion.header>

            {/* Mobile Menu Overlay - OUTSIDE header for proper positioning */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-50 md:hidden overflow-hidden"
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

                        {/* Subtle accent glow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.15, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent rounded-full blur-[120px]"
                        />

                        {/* Header area with logo and close button */}
                        <div className="absolute top-0 left-0 right-0 px-6 py-5 flex justify-between items-center">
                            <a href="#" onClick={() => setIsOpen(false)} className="block w-10 h-10">
                                <img src="/favicon.svg" alt="Logo" className="w-full h-full object-contain" />
                            </a>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-accent transition-colors p-2"
                                aria-label="Close Menu"
                            >
                                <motion.div
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <X size={28} strokeWidth={1.5} />
                                </motion.div>
                            </button>
                        </div>

                        {/* Decorative lines */}
                        <div className="absolute top-20 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="absolute bottom-20 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* Navigation Links */}
                        <nav className="relative h-full flex flex-col justify-center items-center gap-8 px-6">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        filter: 'blur(0px)',
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -20,
                                        transition: { duration: 0.2, delay: (links.length - i - 1) * 0.05 }
                                    }}
                                    transition={{
                                        delay: 0.1 + i * 0.08,
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="relative group w-full"
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-4 py-3 w-full"
                                    >
                                        {/* Number indicator */}
                                        <span className="text-[11px] font-mono text-accent/70 tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                                            0{i + 1}
                                        </span>

                                        {/* Link text */}
                                        <span className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight uppercase relative overflow-hidden">
                                            <span className="relative z-10 group-hover:text-accent transition-colors duration-300">
                                                {link.name}
                                            </span>
                                        </span>

                                        {/* Arrow indicator */}
                                        <motion.span
                                            className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                            initial={{ x: -10 }}
                                            whileHover={{ x: 0 }}
                                        >
                                            →
                                        </motion.span>
                                    </a>

                                    {/* Subtle underline */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent/50 group-hover:w-1/2 transition-all duration-300 ease-out" />
                                </motion.div>
                            ))}
                        </nav>

                        {/* Bottom decoration - social hint */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="absolute bottom-8 left-0 right-0 flex justify-center"
                        >
                            <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase">
                                Scroll to explore
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
