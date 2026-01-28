import React, { useState, useEffect } from 'react';

const Navbar = ({ sfx }) => {
    const [isMuted, setIsMuted] = useState(localStorage.getItem('ragebyters_muted') === 'true');
    const [isNavActive, setIsNavActive] = useState(false);

    useEffect(() => {
        if (sfx) {
            sfx.updateMuteState(isMuted);
        }
    }, [isMuted, sfx]);

    const toggleMute = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const newMuted = !isMuted;
        setIsMuted(newMuted);
        localStorage.setItem('ragebyters_muted', newMuted);
        if (sfx) {
            sfx.toggleMute(newMuted);
        }
    };

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    const closeNav = () => {
        setIsNavActive(false);
    };

    return (
        <nav>
            <a href="#home" className="nav-logo">
                <img src="/assets/images/logo.png" alt="RageByters Logo" style={{ height: '30px' }} />
                RageByters
            </a>
            <button id="mute-btn" title="Toggle Sound" onClick={toggleMute}>
                <i className={isMuted ? "fas fa-volume-mute" : "fas fa-volume-up"}></i>
            </button>
            <div className="hamburger" onClick={toggleNav}>
                <i className={isNavActive ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
                <li><a href="#games" onClick={closeNav}>Games</a></li>
                <li><a href="#features" onClick={closeNav}>Features</a></li>
                <li><a href="#roadmap" onClick={closeNav}>Roadmap</a></li>
                <li><a href="#tech" onClick={closeNav}>Tech</a></li>
                <li><a href="#community" onClick={closeNav}>Community</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
