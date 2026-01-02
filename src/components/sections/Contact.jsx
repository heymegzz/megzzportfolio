import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Github, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormState({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

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
                padding: '120px 0',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {/* Background Effects */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 50% 100%, #1a1a1a 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    opacity: 0.2,
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '0%',
                    left: '20%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(230,57,70,0.05) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                }}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 10 }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1.5fr)',
                        gap: '64px',
                        alignItems: 'start'
                    }}
                >
                    {/* Left Column: Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                        <motion.div variants={itemVariants}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ width: '40px', height: '1px', backgroundColor: '#E63946' }} />
                                <span style={{ fontFamily: '"JetBrains Mono", monospace', color: '#E63946', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                                    Get in Touch
                                </span>
                            </div>
                            <h2 style={{ fontFamily: '"Syne", sans-serif', fontSize: '48px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px' }}>
                                Let's build something <br />
                                <span style={{ color: '#E63946' }}>extraordinary</span>.
                            </h2>
                            <p style={{ color: '#9ca3af', lineHeight: 1.8, fontSize: '16px', fontFamily: '"Inter", sans-serif' }}>
                                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E63946' }}>
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', color: '#6b7280', fontFamily: '"JetBrains Mono", monospace', marginBottom: '4px' }}>EMAIL</div>
                                    <a href="mailto:meghnaofficial66@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px', transition: 'color 0.2s' }} className="hover:text-accent">
                                        meghnaofficial66@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E63946' }}>
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', color: '#6b7280', fontFamily: '"JetBrains Mono", monospace', marginBottom: '4px' }}>LOCATION</div>
                                    <div style={{ color: '#fff', fontSize: '16px' }}>Jaipur, India</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
                                <div style={{ fontSize: '11px', color: '#6b7280', fontFamily: '"JetBrains Mono", monospace' }}>SOCIALS</div>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    {[
                                        { icon: Github, href: 'https://github.com/heymegzz' },
                                        { icon: Linkedin, href: 'https://linkedin.com/in/heymegzz' },
                                        { icon: Instagram, href: 'https://www.instagram.com/heymegzz/' }
                                    ].map((Social, index) => (
                                        <a
                                            key={index}
                                            href={Social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#fff',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = '#E63946';
                                                e.currentTarget.style.background = 'rgba(230,57,70,0.1)';
                                                e.currentTarget.style.color = '#E63946';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.color = '#fff';
                                            }}
                                        >
                                            <Social.icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            background: 'rgba(255,255,255,0.02)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            padding: '48px',
                            borderRadius: '16px',
                            position: 'relative'
                        }}
                    >
                        {/* Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '24px',
                            right: '24px',
                            background: 'rgba(230,57,70,0.1)',
                            border: '1px solid rgba(230,57,70,0.2)',
                            color: '#E63946',
                            padding: '6px 12px',
                            borderRadius: '100px',
                            fontSize: '10px',
                            fontFamily: '"JetBrains Mono", monospace',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <span style={{ width: '6px', height: '6px', background: '#E63946', borderRadius: '50%', display: 'block', animation: 'pulse 2s infinite' }}></span>
                            OPEN TO WORK
                        </div>
                        <style>{`
                            @keyframes pulse {
                                0% { box-shadow: 0 0 0 0 rgba(230,57,70, 0.4); }
                                70% { box-shadow: 0 0 0 6px rgba(230,57,70, 0); }
                                100% { box-shadow: 0 0 0 0 rgba(230,57,70, 0); }
                            }
                        `}</style>


                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '24px' }}>
                            <div>
                                <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#6b7280', marginBottom: '8px', textTransform: 'uppercase' }}>Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                    style={{
                                        width: '100%',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: '15px',
                                        outline: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    className="focus:border-accent focus:bg-white/5"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#6b7280', marginBottom: '8px', textTransform: 'uppercase' }}>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                    style={{
                                        width: '100%',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: '15px',
                                        outline: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    className="focus:border-accent focus:bg-white/5"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#6b7280', marginBottom: '8px', textTransform: 'uppercase' }}>Message</label>
                                <textarea
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                    rows={5}
                                    style={{
                                        width: '100%',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: '15px',
                                        outline: 'none',
                                        resize: 'vertical',
                                        transition: 'all 0.3s ease'
                                    }}
                                    className="focus:border-accent focus:bg-white/5"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    background: '#E63946',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '16px',
                                    borderRadius: '8px',
                                    fontFamily: '"Syne", sans-serif',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    cursor: isSubmitting ? 'wait' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    transition: 'all 0.3s ease',
                                    marginTop: '8px'
                                }}
                                className="hover:bg-red-600 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <p style={{ color: '#4ade80', fontSize: '14px', textAlign: 'center', marginTop: '8px' }}>
                                    Message sent successfully!
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p style={{ color: '#ef4444', fontSize: '14px', textAlign: 'center', marginTop: '8px' }}>
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #contact > div > div {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                    #contact .tech-spec-box {
                        margin-top: 48px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
