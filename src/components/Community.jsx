import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Youtube, Mail, MessageCircle } from 'lucide-react';

const Community = () => {
    const socials = [
        { icon: <Github />, label: 'Github', link: 'https://github.com/ragebyters', color: '#fff' },
        { icon: <MessageCircle />, label: 'Discord', link: 'https://discord.gg', color: '#5865F2' },
        { icon: <Twitter />, label: 'Twitter', link: 'https://twitter.com', color: '#1DA1F2' },
        { icon: <Youtube />, label: 'Youtube', link: 'https://youtube.com', color: '#FF0000' }
    ];

    return (
        <section className="section" id="community" style={{ paddingBottom: 0 }}>
            <div className="container">
                <div className="glass-card" style={{
                    padding: '80px 40px',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.05), rgba(217, 70, 239, 0.05))',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <div className="bg-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1, background: 'var(--accent-violet)' }}></div>

                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: 24 }}>Join the <span className="text-gradient-magenta">Revolution</span></h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 40px' }}>
                        Be part of the next generation of web gaming. Contribute, compete, and connect with fellow RageByters.
                    </p>

                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {socials.map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.link}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="glass"
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 16,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-primary)',
                                    transition: 'var(--transition-smooth)'
                                }}
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>

                    <div style={{ marginTop: 60 }}>
                        <a href="mailto:hello@ragebyters.dev" className="btn-premium btn-cyan">
                            <Mail size={20} />
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
