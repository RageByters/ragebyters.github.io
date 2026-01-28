import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    useEffect(() => {
        const typed = new Typed('.typed-text', {
            strings: [
                'Single-player web games designed to rage you.',
                'Open source. Community driven. Pure chaos.',
                'Play instantly. Contribute easily. Build with friends.',
                'No downloads. No installs. Just pure gaming.'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <header id="home">
            <h1>⚡ RAGEBYTERS ⚡</h1>
            <p className="subtitle">BITE-SIZED ARCADE</p>
            <p className="tagline">
                <span className="typed-text"></span>
            </p>

            <div className="stats-bar">
                <div className="stat">
                    <div className="stat-number">1</div>
                    <div className="stat-label">Games Live</div>
                </div>
                <div className="stat">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Open Source</div>
                </div>
                <div className="stat">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Rage Potential</div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
