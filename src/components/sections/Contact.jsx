import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';

const Contact = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [copied, setCopied] = React.useState(false);

    const email = 'meghna@example.com'; // User will update this

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/heymegzz',
            icon: Github,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/meghna-nair-159458227/',
            icon: Linkedin,
        },
        {
            name: 'LeetCode',
            url: 'https://leetcode.com/u/heymegzz/',
            icon: null, // Custom SVG
        },
    ];

    return (
        <section
            id="contact"
            ref={sectionRef}
            style={{
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
                backgroundColor: '#050505',
                color: '#ffffff',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Grid background */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    pointerEvents: 'none',
                }}
            />

            {/* Accent glow - centered */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(230,57,70,0.08) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                    pointerEvents: 'none',
                }}
            />

            {/* Main Container */}
            <div
                style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '120px 48px',
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                }}
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{
                        textAlign: 'center',
                    }}
                >
                    {/* Section Label */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '16px',
                            marginBottom: '48px',
                        }}
                    >
                        <div
                            style={{
                                width: '40px',
                                height: '1px',
                                backgroundColor: '#E63946',
                            }}
                        />
                        <span
                            style={{
                                fontFamily: '"JetBrains Mono", monospace',
                                fontSize: '11px',
                                color: '#E63946',
                                textTransform: 'uppercase',
                                letterSpacing: '0.25em',
                            }}
                        >
                            Get In Touch
                        </span>
                        <div
                            style={{
                                width: '40px',
                                height: '1px',
                                backgroundColor: '#E63946',
                            }}
                        />
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h2
                        variants={itemVariants}
                        style={{
                            fontFamily: '"Syne", sans-serif',
                            fontSize: 'clamp(36px, 6vw, 72px)',
                            fontWeight: 700,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            margin: '0 0 32px 0',
                        }}
                    >
                        Let's build
                        <br />
                        <span style={{ color: '#E63946' }}>something great</span>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        variants={itemVariants}
                        style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: '17px',
                            lineHeight: 1.7,
                            color: '#9ca3af',
                            maxWidth: '500px',
                            margin: '0 auto 56px auto',
                        }}
                    >
                        Currently open to internship opportunities.
                        If you're working on something interesting, I'd love to hear about it.
                    </motion.p>

                    {/* Email CTA */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            marginBottom: '64px',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '20px 32px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255,255,255,0.02)',
                            }}
                        >
                            <Mail size={20} style={{ color: '#E63946' }} />
                            <a
                                href={`mailto:${email}`}
                                style={{
                                    fontFamily: '"JetBrains Mono", monospace',
                                    fontSize: '16px',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {email}
                            </a>
                            <button
                                onClick={handleCopyEmail}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backgroundColor: 'transparent',
                                    color: '#6b7280',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.borderColor = '#E63946';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6b7280';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                }}
                                title="Copy email"
                            >
                                {copied ? <Check size={14} /> : <Copy size={14} />}
                            </button>
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            width: '60px',
                            height: '1px',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            margin: '0 auto 48px auto',
                        }}
                    />

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '32px',
                            marginBottom: '80px',
                        }}
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontFamily: '"JetBrains Mono", monospace',
                                    fontSize: '12px',
                                    color: '#6b7280',
                                    textDecoration: 'none',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#E63946'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                            >
                                {link.icon ? (
                                    <link.icon size={16} />
                                ) : (
                                    // LeetCode custom icon
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                    </svg>
                                )}
                                {link.name}
                            </a>
                        ))}
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            borderTop: '1px solid rgba(255,255,255,0.05)',
                            paddingTop: '48px',
                        }}
                    >
                        <p
                            style={{
                                fontFamily: '"JetBrains Mono", monospace',
                                fontSize: '11px',
                                color: '#4b5563',
                                letterSpacing: '0.1em',
                                margin: 0,
                            }}
                        >
                            Designed & Built by <span style={{ color: '#9ca3af' }}>Meghna Nair</span>
                        </p>
                        <p
                            style={{
                                fontFamily: '"JetBrains Mono", monospace',
                                fontSize: '10px',
                                color: '#374151',
                                letterSpacing: '0.1em',
                                margin: '8px 0 0 0',
                            }}
                        >
                            © {new Date().getFullYear()}
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 640px) {
                    #contact > div {
                        padding: 80px 24px !important;
                    }
                    #contact > div > div > div:nth-child(5) {
                        flex-direction: column !important;
                        gap: 12px !important;
                    }
                    #contact > div > div > div:nth-child(5) > div {
                        flex-wrap: wrap !important;
                        justify-content: center !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
