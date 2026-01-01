import React from 'react';
import { motion } from 'framer-motion';

const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5"
        >
            {/* Logo */}
            <a href="#" className="text-white font-display font-bold text-xl md:text-2xl tracking-tighter hover:text-accent transition-colors">
                megzz
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
            <button className="md:hidden text-white font-mono text-xs uppercase">
                Menu
            </button>
        </motion.header>
    );
};

export default Navbar;
