import React from 'react';
import { motion } from 'framer-motion';
import { Play, Github } from 'lucide-react';

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
    };

    return (
        <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    style={{ textAlign: 'center' }}
                >
                    <motion.div variants={item} style={{ marginBottom: 24 }}>
                        <span style={{
                            padding: '8px 16px',
                            borderRadius: '100px',
                            background: 'rgba(34, 211, 238, 0.1)',
                            color: 'var(--accent-cyan)',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            border: '1px solid rgba(34, 211, 238, 0.2)'
                        }}>
                            Now Live: Rage Snake 2.0
                        </span>
                    </motion.div>

                    <motion.h1 variants={item} style={{
                        fontSize: 'clamp(3rem, 10vw, 6rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        letterSpacing: '-0.04em',
                        marginBottom: 24
                    }}>
                        Experience <br />
                        <span className="text-gradient-cyan">Bite-Sized Chaos</span>
                    </motion.h1>

                    <motion.p variants={item} style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: 600,
                        margin: '0 auto 40px',
                        lineHeight: 1.6
                    }}>
                        A collection of single-player web games designed to push your skills to the limit. Open source, community-driven, and purely browser-based.
                    </motion.p>

                    <motion.div variants={item} style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
                        <a href="#games" className="btn-premium btn-cyan">
                            <Play size={20} fill="currentColor" />
                            Play Now
                        </a>
                        <a href="https://github.com/ragebyters" target="_blank" className="btn-premium btn-outline">
                            <Github size={20} />
                            View GitHub
                        </a>
                    </motion.div>

                    <motion.div variants={item} className="stats-bar" style={{ marginTop: 80, border: 'none' }}>
                        {[
                            { label: 'Games Live', value: '1' },
                            { label: 'Community contributors', value: '12+' },
                            { label: 'Source Control', value: '100%' }
                        ].map((stat, i) => (
                            <div key={i} className="stat">
                                <div className="stat-number" style={{ fontSize: '2.5rem', color: 'var(--text-primary)' }}>{stat.value}</div>
                                <div className="stat-label" style={{ fontWeight: 600 }}>{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
