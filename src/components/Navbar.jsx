import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';

const Navbar = ({ sfx }) => {
    const [isMuted, setIsMuted] = useState(localStorage.getItem('ragebyters_muted') === 'true');
    const [isNavActive, setIsNavActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (sfx) {
            sfx.updateMuteState(isMuted);
        }
    }, [isMuted, sfx]);

    const toggleMute = (e) => {
        e.preventDefault();
        const newMuted = !isMuted;
        setIsMuted(newMuted);
        localStorage.setItem('ragebyters_muted', newMuted);
        if (sfx) {
            sfx.toggleMute(newMuted);
        }
    };

    const navItems = ['Games', 'Features', 'Roadmap'];

    return (
        <>
            <motion.nav
                initial={{ y: -100, x: '-50%' }}
                animate={{ y: 0, x: '-50%' }}
                className={`glass ${scrolled ? 'scrolled' : ''}`}
                style={{
                    boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.6)' : 'none',
                }}
            >
                <a href="#home" className="nav-logo">
                    <div className="logo-icon" style={{
                        width: 32,
                        height: 32,
                        background: 'var(--accent-cyan)',
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--bg-core)',
                        fontWeight: 900
                    }}>R</div>
                    <span style={{ letterSpacing: '0.05em' }}>RageByters</span>
                </a>

                <ul className="nav-links">
                    {navItems.map((item) => (
                        <motion.li key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </motion.li>
                    ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMute}
                        style={{
                            background: 'var(--bg-glass)',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            padding: '8px',
                            borderRadius: '12px',
                            display: 'flex'
                        }}
                    >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </motion.button>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsNavActive(!isNavActive)}
                        style={{
                            background: 'var(--accent-cyan)',
                            border: 'none',
                            color: 'var(--bg-core)',
                            cursor: 'pointer',
                            padding: '8px',
                            borderRadius: '12px',
                            display: 'none' // Controlled by CSS media query
                        }}
                    >
                        {isNavActive ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            <style>{`
        @media (max-width: 768px) {
          .mobile-toggle { display: flex !important; }
        }
      `}</style>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isNavActive && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="glass"
                        style={{
                            position: 'fixed',
                            top: '90px',
                            left: '5%',
                            width: '90%',
                            zIndex: 999,
                            borderRadius: '24px',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                        }}
                    >
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsNavActive(false)}
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--text-primary)',
                                    fontSize: '1.2rem',
                                    fontWeight: 700,
                                    padding: '12px',
                                    borderRadius: '12px',
                                    background: 'rgba(255,255,255,0.05)'
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
