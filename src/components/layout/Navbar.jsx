import React, { useState } from 'react';
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

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5"
        >
            {/* Logo */}
            <a href="#" className="block w-10 h-10 hover:opacity-80 transition-opacity">
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
                className="md:hidden text-white hover:text-accent transition-colors z-50 relative p-2"
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center md:hidden"
                    >
                        <nav className="flex flex-col gap-12 items-center">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.1 + i * 0.1,
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="relative group"
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <span className="text-xs font-mono text-accent/80 tracking-widest">
                                            (0{i + 1})
                                        </span>
                                        <span className="text-5xl font-display font-bold text-white group-hover:text-accent transition-colors tracking-tighter uppercase relative">
                                            {link.name}
                                        </span>
                                    </a>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
