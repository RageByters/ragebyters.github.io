import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h3 style={{ color: 'var(--accent-red)', marginBottom: '20px' }}>RAGEBYTERS</h3>

                <div className="social-links">
                    <a href="https://github.com/ragebyters" title="GitHub" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://discord.gg" title="Discord" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-discord"></i>
                    </a>
                    <a href="https://youtube.com" title="YouTube" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="mailto:hello@ragebyters.dev" title="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>

                <div className="divider"></div>

                <div className="footer-links">
                    <a href="https://github.com/ragebyters" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#games">Games</a>
                    <a href="#features">Features</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#tech">Tech</a>
                    <a href="#community">Community</a>
                    <a href="https://github.com/ragebyters/ragebyters.github.io/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">License</a>
                </div>

                <p style={{ marginTop: '30px', fontSize: '0.9rem' }}>
                    RageByters © 2026 | Open Source Gaming Arcade
                </p>
                <p style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
                    Built with ❤️ and pure rage by the community.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
