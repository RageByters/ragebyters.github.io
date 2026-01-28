import React from 'react';

const Features = () => {
    const features = [
        { icon: '⚡', title: 'Lightning Fast', desc: 'Zero loading times. Pure browser gaming. Play instantly.', delay: 0 },
        { icon: '🔓', title: '100% Open Source', desc: 'Every game, every line. All code on GitHub. No secrets.', delay: 100 },
        { icon: '👥', title: 'Community Driven', desc: 'Made by gamers, for gamers. Your voice matters.', delay: 200 },
        { icon: '🌍', title: 'No Downloads', desc: 'Web-based only. Works everywhere. No installations.', delay: 300 },
        { icon: '🛠️', title: 'Easy to Contribute', desc: 'One repo per game. Pick your project. Build with friends.', delay: 400 },
        { icon: '💪', title: 'Pure Rage', desc: 'Games designed to challenge. Fail, rage, retry forever.', delay: 500 },
        { icon: '🎨', title: 'Creative Freedom', desc: 'Build any game you imagine. No restrictions.', delay: 600 },
        { icon: '🏆', title: 'Leaderboards', desc: 'Track scores, compete globally, earn bragging rights.', delay: 700 }
    ];

    return (
        <div className="section" id="features" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
            <div className="container">
                <h2 className="section-title">Why RageByters?</h2>

                <div className="features">
                    {features.map((f, i) => (
                        <div key={i} className="feature" data-aos="zoom-in" data-aos-delay={f.delay}>
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
