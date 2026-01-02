import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Tech stack with icons
    const techStack = [
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'Bootstrap', icon: '🅱️' },
        { name: 'Tailwind', icon: '💨' },
        { name: 'JavaScript', icon: 'JS' },
        { name: 'TypeScript', icon: 'TS' },
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Three.js', icon: '🔺' },
        { name: 'Express.js', icon: '📦' },
        { name: 'Node.js', icon: '⬢' },
        { name: 'MySQL', icon: '🗄️' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Prisma', icon: '◇' },
        { name: 'Python', icon: '🐍' },
        { name: 'C++', icon: '⧺' },
        { name: 'Git', icon: '⎇' },
        { name: 'Figma', icon: '🎯' },
        { name: 'Matplotlib', icon: '📊' },
        { name: 'NumPy', icon: '🔢' },
        { name: 'Pandas', icon: '🐼' },
    ];

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

    return (
        <section
            id="about"
            ref={sectionRef}
            style={{
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
                backgroundColor: '#050505',
                color: '#ffffff',
                overflow: 'hidden',
            }}
        >
            {/* Continued grid from hero */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    pointerEvents: 'none',
                }}
            />

            {/* Accent glow - top right */}
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '-10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(230,57,70,0.08) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                }}
            />

            {/* Main Container */}
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '120px 48px',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Section Label */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            marginBottom: '64px',
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
                            About
                        </span>
                    </motion.div>

                    {/* Hero Row: Headline + Stats */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '64px',
                            flexWrap: 'wrap',
                            gap: '40px',
                        }}
                    >
                        {/* Headline */}
                        <motion.h2
                            variants={itemVariants}
                            style={{
                                fontFamily: '"Syne", sans-serif',
                                fontSize: 'clamp(36px, 5vw, 64px)',
                                fontWeight: 700,
                                lineHeight: 1.1,
                                letterSpacing: '-0.03em',
                                margin: 0,
                                maxWidth: '600px',
                            }}
                        >
                            <span style={{ color: '#ffffff' }}>I build </span>
                            <span style={{ color: '#E63946' }}>digital</span>
                            <br />
                            <span style={{ color: '#ffffff' }}>experiences</span>
                            <br />
                            <span style={{ color: 'rgba(255,255,255,0.3)' }}>that scale.</span>
                        </motion.h2>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            style={{
                                display: 'flex',
                                gap: '40px',
                            }}
                        >
                            {[
                                { number: '500+', label: 'DSA Problems' },
                                { number: '10+', label: 'Technologies' },
                                { number: '3+', label: 'Years Coding' },
                            ].map((stat, i) => (
                                <div
                                    key={stat.label}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        gap: '4px',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: '"Syne", sans-serif',
                                            fontSize: '28px',
                                            fontWeight: 700,
                                            color: '#ffffff',
                                        }}
                                    >
                                        {stat.number}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: '"JetBrains Mono", monospace',
                                            fontSize: '10px',
                                            color: '#6b7280',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                        }}
                                    >
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            width: '100%',
                            height: '1px',
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            marginBottom: '64px',
                        }}
                    />

                    {/* Content Row: Bio + Focus Areas */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '80px',
                        }}
                    >
                        {/* Bio Text */}
                        <motion.div variants={itemVariants}>
                            <p
                                style={{
                                    fontFamily: '"Inter", sans-serif',
                                    fontSize: '16px',
                                    lineHeight: 1.8,
                                    color: '#9ca3af',
                                    margin: 0,
                                }}
                            >
                                I'm <span style={{ color: '#ffffff' }}>Meghna Nair</span> — a full-stack developer specializing in the MERN stack, currently honing my craft in building production-grade web applications. I bring strong algorithmic thinking to every solution I architect, focusing on clean code and scalable system design. Driven by curiosity and a commitment to continuous growth, I'm mastering end-to-end development while actively exploring the <span style={{ color: '#E63946' }}>AI/ML landscape</span>.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Inter", sans-serif',
                                    fontSize: '16px',
                                    lineHeight: 1.8,
                                    color: '#9ca3af',
                                    margin: '20px 0 0 0',
                                }}
                            >
                                My approach? Start with the problem, not the solution. Whether it's optimizing
                                algorithms for competitive programming or architecting ML pipelines, I believe
                                the best code is the code you <span style={{ color: '#E63946' }}>don't have to write twice</span>.
                            </p>
                        </motion.div>

                        {/* Focus Areas */}
                        <motion.div
                            variants={itemVariants}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                paddingLeft: '40px',
                                borderLeft: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: '"JetBrains Mono", monospace',
                                    fontSize: '10px',
                                    color: '#6b7280',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    marginBottom: '8px',
                                }}
                            >
                                Currently focused on
                            </span>
                            {[
                                'Building production-ready web applications',
                                'Competitive programming & algorithmic thinking',
                                'Deep learning & computer vision research',
                                'System design & distributed architectures',
                            ].map((focus, i) => (
                                <motion.div
                                    key={focus}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '4px',
                                            height: '4px',
                                            backgroundColor: '#E63946',
                                            borderRadius: '50%',
                                            flexShrink: 0,
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily: '"Inter", sans-serif',
                                            fontSize: '14px',
                                            color: '#ffffff',
                                        }}
                                    >
                                        {focus}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Tech Stack Section */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            marginTop: '80px',
                        }}
                    >
                        {/* Tech Stack Label */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                marginBottom: '40px',
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: '"JetBrains Mono", monospace',
                                    fontSize: '11px',
                                    color: '#E63946',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.25em',
                                }}
                            >
                                Tech Stack
                            </span>
                            <div
                                style={{
                                    flex: 1,
                                    height: '1px',
                                    backgroundColor: 'rgba(255,255,255,0.08)',
                                }}
                            />
                        </div>

                        {/* Tech Grid */}
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '10px',
                            }}
                        >
                            {techStack.map((tech, i) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{
                                        delay: 0.8 + i * 0.04,
                                        duration: 0.4,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: 'rgba(230,57,70,0.15)',
                                        borderColor: '#E63946',
                                    }}
                                    style={{
                                        padding: '10px 18px',
                                        borderRadius: '4px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                    }}
                                >
                                    <span style={{ fontSize: '13px', opacity: 0.9 }}>
                                        {tech.icon}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: '"JetBrains Mono", monospace',
                                            fontSize: '11px',
                                            color: '#ffffff',
                                            letterSpacing: '0.03em',
                                        }}
                                    >
                                        {tech.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 900px) {
                    #about > div {
                        padding: 80px 24px !important;
                    }
                    #about > div > div > div:nth-child(4) {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                    #about > div > div > div:nth-child(4) > div:nth-child(2) {
                        padding-left: 0 !important;
                        border-left: none !important;
                        padding-top: 32px;
                        border-top: 1px solid rgba(255,255,255,0.08);
                    }
                }
                @media (max-width: 640px) {
                    #about > div > div > div:nth-child(2) {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 32px !important;
                    }
                    #about > div > div > div:nth-child(2) > div:last-child {
                        flex-wrap: wrap !important;
                        gap: 24px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
