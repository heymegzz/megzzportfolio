import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Work = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'PeerNova',
            description: 'Enterprise campus platform built for 1,000+ concurrent users — enabling study groups, resource sharing, and real-time collaboration. Features JWT auth, role-based access, TanStack Query reducing API calls by 70%, and Zustand state persistence with offline support.',
            tech: ['React 19', 'Node.js', 'Express', 'MySQL', 'Prisma', 'Tailwind'],
            liveUrl: 'https://peer-nova.vercel.app/',
            githubUrl: 'https://github.com/heymegzz/PeerNova',
            year: '2025',
            category: 'Full-Stack',
            image: '/peernova.png',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
            id="work"
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

            {/* Accent glow - left side */}
            <div
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '-15%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(230,57,70,0.06) 0%, transparent 70%)',
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
                    {/* Section Header */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            marginBottom: '80px',
                            flexWrap: 'wrap',
                            gap: '24px',
                        }}
                    >
                        <div>
                            {/* Label */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    marginBottom: '24px',
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
                                    Selected Work
                                </span>
                            </div>
                            {/* Headline */}
                            <h2
                                style={{
                                    fontFamily: '"Syne", sans-serif',
                                    fontSize: 'clamp(32px, 4vw, 48px)',
                                    fontWeight: 700,
                                    letterSpacing: '-0.02em',
                                    margin: 0,
                                    color: '#ffffff',
                                }}
                            >
                                Projects that <span style={{ color: '#E63946' }}>matter</span>
                            </h2>
                        </div>

                        {/* Project count */}
                        <div
                            style={{
                                fontFamily: '"JetBrains Mono", monospace',
                                fontSize: '12px',
                                color: '#6b7280',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}
                        >
                            01 Projects
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px',
                        }}
                    >
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                variants={itemVariants}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                style={{
                                    position: 'relative',
                                    borderRadius: '8px',
                                    border: '1px solid',
                                    borderColor: hoveredProject === project.id ? 'rgba(230,57,70,0.4)' : 'rgba(255,255,255,0.08)',
                                    backgroundColor: hoveredProject === project.id ? 'rgba(230,57,70,0.03)' : 'rgba(255,255,255,0.02)',
                                    transition: 'all 0.4s ease',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    display: 'grid',
                                    gridTemplateColumns: project.image ? '1fr 1fr' : '1fr',
                                }}
                            >
                                {/* Project Content */}
                                <div style={{ padding: '48px' }}>
                                    {/* Project Number */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '48px',
                                            right: project.image ? '50%' : '48px',
                                            fontFamily: '"Syne", sans-serif',
                                            fontSize: '64px',
                                            fontWeight: 700,
                                            color: 'rgba(255,255,255,0.03)',
                                            lineHeight: 1,
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Top Row: Category + Year */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '16px',
                                            marginBottom: '24px',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: '"JetBrains Mono", monospace',
                                                fontSize: '10px',
                                                color: '#E63946',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.15em',
                                                padding: '6px 12px',
                                                border: '1px solid rgba(230,57,70,0.3)',
                                                borderRadius: '4px',
                                            }}
                                        >
                                            {project.category}
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: '"JetBrains Mono", monospace',
                                                fontSize: '10px',
                                                color: '#6b7280',
                                                letterSpacing: '0.1em',
                                            }}
                                        >
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Project Title */}
                                    <h3
                                        style={{
                                            fontFamily: '"Syne", sans-serif',
                                            fontSize: 'clamp(28px, 3vw, 36px)',
                                            fontWeight: 700,
                                            letterSpacing: '-0.02em',
                                            margin: '0 0 16px 0',
                                            color: '#ffffff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                        }}
                                    >
                                        {project.title}
                                        <motion.span
                                            animate={{
                                                x: hoveredProject === project.id ? 4 : 0,
                                                y: hoveredProject === project.id ? -4 : 0,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ArrowUpRight
                                                size={24}
                                                style={{
                                                    color: hoveredProject === project.id ? '#E63946' : '#6b7280',
                                                    transition: 'color 0.3s ease',
                                                }}
                                            />
                                        </motion.span>
                                    </h3>

                                    {/* Description */}
                                    <p
                                        style={{
                                            fontFamily: '"Inter", sans-serif',
                                            fontSize: '15px',
                                            lineHeight: 1.7,
                                            color: '#9ca3af',
                                            margin: '0 0 32px 0',
                                            maxWidth: '600px',
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Bottom Row: Tech Stack + Links */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            gap: '24px',
                                        }}
                                    >
                                        {/* Tech Stack */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                gap: '8px',
                                                flexWrap: 'wrap',
                                            }}
                                        >
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    style={{
                                                        fontFamily: '"JetBrains Mono", monospace',
                                                        fontSize: '10px',
                                                        color: '#6b7280',
                                                        padding: '6px 12px',
                                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                                        borderRadius: '4px',
                                                        letterSpacing: '0.05em',
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                gap: '16px',
                                            }}
                                        >
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    fontFamily: '"JetBrains Mono", monospace',
                                                    fontSize: '11px',
                                                    color: '#9ca3af',
                                                    textDecoration: 'none',
                                                    transition: 'color 0.3s ease',
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                                                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                                            >
                                                <Github size={14} />
                                                Code
                                            </a>
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    fontFamily: '"JetBrains Mono", monospace',
                                                    fontSize: '11px',
                                                    color: '#9ca3af',
                                                    textDecoration: 'none',
                                                    transition: 'color 0.3s ease',
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.color = '#E63946'}
                                                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                                            >
                                                <ExternalLink size={14} />
                                                Live
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Image - Browser Mockup */}
                                {project.image && (
                                    <div
                                        style={{
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '40px 20px 40px 0',
                                            perspective: '1000px',
                                        }}
                                    >
                                        <motion.div
                                            animate={{
                                                y: hoveredProject === project.id ? -8 : 0,
                                                rotateY: hoveredProject === project.id ? -2 : -5,
                                                rotateX: hoveredProject === project.id ? 2 : 5,
                                            }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                            style={{
                                                width: '100%',
                                                maxWidth: '480px',
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                boxShadow: hoveredProject === project.id
                                                    ? '0 40px 80px rgba(0,0,0,0.5), 0 0 40px rgba(230,57,70,0.15)'
                                                    : '0 25px 50px rgba(0,0,0,0.4)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                transition: 'box-shadow 0.4s ease',
                                            }}
                                        >
                                            {/* Browser Chrome */}
                                            <div
                                                style={{
                                                    background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
                                                    padding: '12px 16px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                                                }}
                                            >
                                                {/* Traffic lights */}
                                                <div style={{ display: 'flex', gap: '6px' }}>
                                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f57' }} />
                                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#28ca42' }} />
                                                </div>
                                                {/* URL bar */}
                                                <div
                                                    style={{
                                                        flex: 1,
                                                        marginLeft: '12px',
                                                        padding: '6px 12px',
                                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                                        borderRadius: '6px',
                                                        fontFamily: '"JetBrains Mono", monospace',
                                                        fontSize: '10px',
                                                        color: '#666',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap',
                                                    }}
                                                >
                                                    {project.liveUrl.replace('https://', '')}
                                                </div>
                                            </div>
                                            {/* Screenshot */}
                                            <div style={{ position: 'relative', overflow: 'hidden' }}>
                                                <motion.img
                                                    src={project.image}
                                                    alt={project.title}
                                                    animate={{
                                                        scale: hoveredProject === project.id ? 1.02 : 1,
                                                    }}
                                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                                    style={{
                                                        width: '100%',
                                                        display: 'block',
                                                        objectFit: 'cover',
                                                        objectPosition: 'top center',
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </motion.article>
                        ))}
                    </div>

                    {/* More Projects CTA */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            marginTop: '64px',
                            textAlign: 'center',
                        }}
                    >
                        <a
                            href="https://github.com/heymegzz"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontFamily: '"JetBrains Mono", monospace',
                                fontSize: '12px',
                                color: '#6b7280',
                                textDecoration: 'none',
                                padding: '12px 24px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '4px',
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
                        >
                            View all on GitHub
                            <ArrowUpRight size={14} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 900px) {
                    #work article {
                        grid-template-columns: 1fr !important;
                    }
                    #work article > div:first-child {
                        order: 2;
                    }
                    #work article > div:last-child {
                        order: 1;
                        min-height: 200px !important;
                    }
                }
                @media (max-width: 768px) {
                    #work > div {
                        padding: 80px 24px !important;
                    }
                    #work article > div:first-child {
                        padding: 32px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Work;
