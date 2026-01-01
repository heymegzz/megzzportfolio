import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react';

const Hero = () => {
    const containerStyle = {
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 48px',
        overflow: 'hidden',
        backgroundColor: '#050505',
        color: '#ffffff',
    };

    const gridStyle = {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
    };

    const glowStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(230,57,70,0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
    };

    const contentStyle = {
        zIndex: 10,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1000px',
    };

    const badgeStyle = {
        marginBottom: '40px',
        padding: '10px 20px',
        borderRadius: '9999px',
        border: '1px solid rgba(255,255,255,0.15)',
        backgroundColor: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    };

    const dotOuterStyle = {
        position: 'relative',
        width: '6px',
        height: '6px',
    };

    const dotPingStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: '#22c55e',
        opacity: 0.5,
        animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
    };

    const dotStyle = {
        position: 'relative',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: '#22c55e',
    };

    const badgeTextStyle = {
        fontSize: '11px',
        fontFamily: '"JetBrains Mono", monospace',
        color: 'rgba(255,255,255,0.8)',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        marginLeft: '4px',
    };

    const nameStyle = {
        fontSize: 'clamp(48px, 14vw, 160px)',
        lineHeight: 0.85,
        fontFamily: '"Syne", sans-serif',
        fontWeight: 700,
        color: '#ffffff',
        letterSpacing: '-0.04em',
        margin: 0,
    };

    const bioContainerStyle = {
        marginTop: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
    };

    const bioLine1Style = {
        fontSize: '14px',
        fontFamily: '"JetBrains Mono", monospace',
        color: '#ffffff',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
    };

    const bioLine2Style = {
        fontSize: '12px',
        fontFamily: '"JetBrains Mono", monospace',
        color: '#9ca3af',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
    };

    const socialsContainerStyle = {
        marginTop: '48px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    };

    const socialLinkStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.15)',
        backgroundColor: 'rgba(255,255,255,0.05)',
        color: '#9ca3af',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    };

    const scrollStyle = {
        position: 'absolute',
        bottom: '48px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
    };

    const scrollTextStyle = {
        fontSize: '9px',
        fontFamily: '"JetBrains Mono", monospace',
        color: '#6b7280',
        textTransform: 'uppercase',
        letterSpacing: '0.25em',
    };

    const handleHover = (e, isEnter) => {
        if (isEnter) {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.borderColor = '#E63946';
            e.currentTarget.style.backgroundColor = 'rgba(230,57,70,0.1)';
            e.currentTarget.style.transform = 'scale(1.1)';
        } else {
            e.currentTarget.style.color = '#9ca3af';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.transform = 'scale(1)';
        }
    };

    return (
        <section id="hero" style={containerStyle}>

            {/* Grid */}
            <div style={gridStyle} />

            {/* Glow */}
            <div style={glowStyle} />

            <div style={contentStyle}>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1, duration: 0.6 }}
                    style={badgeStyle}
                >
                    <span style={dotOuterStyle}>
                        <span style={dotPingStyle} />
                        <span style={dotStyle} />
                    </span>
                    <span style={badgeTextStyle}>Open to Internships</span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                    style={nameStyle}
                >
                    MEGHNA NAIR
                </motion.h1>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    style={bioContainerStyle}
                >
                    <p style={bioLine1Style}>
                        Full-Stack Developer <span style={{ color: '#E63946' }}>&</span> AI/ML Engineer
                    </p>
                    <p style={bioLine2Style}>
                        DSA • Competitive Programming • Scalable Systems
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8, duration: 0.6 }}
                    style={socialsContainerStyle}
                >
                    <a href="https://github.com/heymegzz" target="_blank" rel="noopener noreferrer" title="GitHub"
                        style={socialLinkStyle}
                        onMouseEnter={(e) => handleHover(e, true)}
                        onMouseLeave={(e) => handleHover(e, false)}
                    >
                        <Github size={22} />
                    </a>

                    <a href="https://leetcode.com/u/heymegzz/" target="_blank" rel="noopener noreferrer" title="LeetCode"
                        style={socialLinkStyle}
                        onMouseEnter={(e) => handleHover(e, true)}
                        onMouseLeave={(e) => handleHover(e, false)}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                        </svg>
                    </a>

                    <a href="https://codeforces.com/profile/heymegzz" target="_blank" rel="noopener noreferrer" title="Codeforces"
                        style={socialLinkStyle}
                        onMouseEnter={(e) => handleHover(e, true)}
                        onMouseLeave={(e) => handleHover(e, false)}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                            <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/meghna-nair-159458227/" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                        style={socialLinkStyle}
                        onMouseEnter={(e) => handleHover(e, true)}
                        onMouseLeave={(e) => handleHover(e, false)}
                    >
                        <Linkedin size={22} />
                    </a>

                    <a href="https://drive.google.com/file/d/1nJwR-5-uAqsIK13VEqj2RCdT01eeOwDE/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume"
                        style={socialLinkStyle}
                        onMouseEnter={(e) => handleHover(e, true)}
                        onMouseLeave={(e) => handleHover(e, false)}
                    >
                        <FileText size={22} />
                    </a>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2, duration: 1 }}
                style={scrollStyle}
            >
                <span style={scrollTextStyle}>Scroll</span>
                <ArrowDown size={14} style={{ color: 'rgba(230,57,70,0.6)' }} />
            </motion.div>

            {/* Keyframe for ping animation */}
            <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>

        </section>
    );
};

export default Hero;
