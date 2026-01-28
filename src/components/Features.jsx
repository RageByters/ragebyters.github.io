import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, Globe, Code, Trophy, Cpu, Palette } from 'lucide-react';

const Features = () => {
    const features = [
        { icon: <Zap color="var(--accent-cyan)" />, title: 'Lightning Fast', desc: 'Optimized for zero latency. Direct browser execution with no backend overhead.' },
        { icon: <Shield color="var(--accent-magenta)" />, title: '100% Open Source', desc: 'Total transparency. Audit the code, fork it, or build your own version.' },
        { icon: <Users color="var(--accent-cyan)" />, title: 'Community Driven', desc: 'Designed by players. New features and games are voted on by the community.' },
        { icon: <Globe color="var(--accent-magenta)" />, title: 'Play Anywhere', desc: 'No installs. No accounts. Just open and play on any modern device.' },
        { icon: <Code color="var(--accent-cyan)" />, title: 'Easy to Contribute', desc: 'Clean architecture makes it easy for developers to submit new games.' },
        { icon: <Cpu color="var(--accent-magenta)" />, title: 'Advanced Engine', desc: 'Powered by modern web tech for smooth, high-frame-rate arcade action.' },
        { icon: <Palette color="var(--accent-cyan)" />, title: 'Stunning Visuals', desc: 'Premium aesthetics that bring the arcade experience into the future.' },
        { icon: <Trophy color="var(--accent-magenta)" />, title: 'Global Competition', desc: 'Live leaderboards and achievements to prove your arcade dominance.' }
    ];

    return (
        <section className="section" id="features">
            <div className="container">
                <h2 className="section-title">Engineered for <span className="text-gradient-cyan">Rage</span></h2>

                <div className="features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="glass-card"
                            style={{ padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                        >
                            <div style={{
                                width: 48,
                                height: 48,
                                borderRadius: 12,
                                background: 'var(--bg-glass)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 20
                            }}>
                                {f.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: 12, fontWeight: 700 }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
