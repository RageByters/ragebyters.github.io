import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '80px 24px 40px', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 60 }}>
                    <div style={{ maxWidth: 300 }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 16 }}>RAGEBYTERS</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Bite-sized arcade experiences designed for the modern web. Open source and community driven chaos.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: 100, flexWrap: 'wrap' }}>
                        <div>
                            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: 20, color: 'var(--text-primary)' }}>PLATFORM</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <li><a href="#games" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Games</a></li>
                                <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Features</a></li>
                                <li><a href="#roadmap" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Roadmap</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: 20, color: 'var(--text-primary)' }}>COMMUNITY</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <li><a href="https://github.com/ragebyters" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>GitHub</a></li>
                                <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Discord</a></li>
                                <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{
                    marginTop: 80,
                    paddingTop: 40,
                    borderTop: '1px solid var(--glass-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 20
                }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>© 2026 RageByters. Built with pure rage.</p>
                    <div style={{ display: 'flex', gap: 24 }}>
                        <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem' }}>Privacy</a>
                        <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem' }}>Terms</a>
                        <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem' }}>License</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
