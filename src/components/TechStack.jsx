import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
    const techs = [
        { name: 'React 19', category: 'Logic', icon: '⚛️' },
        { name: 'Framer Motion', category: 'Animation', icon: '🎬' },
        { name: 'Lucide', category: 'Icons', icon: '✨' },
        { name: 'Web Audio API', category: 'Sound', icon: '🔊' },
        { name: 'Vite', category: 'Build', icon: '⚡' },
        { name: 'Github Actions', category: 'CI/CD', icon: '🚀' }
    ];

    return (
        <section className="section" id="tech">
            <div className="container">
                <h2 className="section-title">The <span className="text-gradient-magenta">Tech Stack</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
                    {techs.map((t, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="glass"
                            style={{
                                padding: 24,
                                borderRadius: 20,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{ fontSize: '2rem', marginBottom: 12 }}>{t.icon}</div>
                            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>{t.name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.category}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
