import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Target, Users, Globe, Code, Shield, Trophy } from 'lucide-react';

const Card = ({ game }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-card"
            style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <img
                    src={game.image}
                    alt={game.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    padding: '4px 12px',
                    borderRadius: 20,
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(4px)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    {game.badge}
                </div>
            </div>

            <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 12, fontWeight: 700 }}>{game.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: 24, flex: 1 }}>{game.desc}</p>

                <a href={game.link} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    color: 'var(--accent-cyan)',
                    fontWeight: 700,
                    fontSize: '0.9rem'
                }}>
                    Launch Game
                    <ArrowUpRight size={18} />
                </a>
            </div>
        </motion.div>
    );
};

const GameGrid = () => {
    const games = [
        {
            title: 'Rage Snake',
            desc: 'Classic snake evolved. High-speed mechanics, obstacle shifts, and pure adrenaline.',
            image: '/assets/images/snake_thumb.png',
            badge: 'POPULAR',
            link: '/game-snake/'
        },
        {
            title: 'Neon Type',
            desc: 'A high-pressure typing challenge. Accuracy and speed are your only weapons.',
            image: '/assets/images/typing_thumb.png',
            badge: 'NEW',
            link: '/utilty-typing-test/index.html'
        }
    ];

    return (
        <section className="section" id="games">
            <div className="container">
                <h2 className="section-title">The <span className="text-gradient-cyan">Arcade</span></h2>

                <div className="game-grid">
                    {games.map((game, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card game={game} />
                        </motion.div>
                    ))}

                    <div className="glass-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: 40,
                        borderStyle: 'dashed',
                        background: 'transparent'
                    }}>
                        <div style={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            background: 'var(--bg-glass)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 20
                        }}>
                            <Code size={24} color="var(--text-muted)" />
                        </div>
                        <h3 style={{ color: 'var(--text-secondary)', marginBottom: 8 }}>More Coming</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We're building the next rage inducing experience.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameGrid;
