import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
    const steps = [
        { title: 'Alpha Launch', desc: 'Core portal and initial 3 games live. Community structure established.', status: 'DONE', color: 'var(--accent-cyan)' },
        { title: 'Expansion', desc: '10+ new games, leaderboard systems, and user profiles.', status: 'ACTIVE', color: 'var(--accent-magenta)' },
        { title: 'Engagement', desc: 'Tournament system, creator tools, and social integration.', status: 'PLANNED', color: 'var(--text-muted)' }
    ];

    return (
        <section className="section" id="roadmap">
            <div className="container">
                <h2 className="section-title">The <span className="text-gradient-cyan">Roadmap</span></h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 800, margin: '0 auto' }}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card"
                            style={{ padding: 32, display: 'flex', alignItems: 'center', gap: 32 }}
                        >
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 900,
                                color: step.color,
                                width: 60,
                                textAlign: 'center'
                            }}>0{i + 1}</div>

                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{step.title}</h3>
                                    <span style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 900,
                                        padding: '4px 10px',
                                        borderRadius: 4,
                                        background: step.status === 'ACTIVE' ? 'var(--accent-magenta)' : 'var(--bg-glass)',
                                        color: step.status === 'ACTIVE' ? 'white' : 'var(--text-muted)'
                                    }}>{step.status}</span>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
