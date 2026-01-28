import React from 'react';

const TechStack = () => {
    const techs = [
        { icon: '🔶', name: 'HTML5', delay: 0 },
        { icon: '🎨', name: 'CSS3', delay: 50 },
        { icon: '⚙️', name: 'JavaScript', delay: 100 },
        { icon: '🐙', name: 'GitHub', delay: 150 },
        { icon: '📄', name: 'GitHub Pages', delay: 200 },
        { icon: '🎮', name: 'WebGL', delay: 250 }
    ];

    return (
        <div className="section" id="tech">
            <div className="container">
                <h2 className="section-title">Built With</h2>

                <div className="tech-stack">
                    {techs.map((t, i) => (
                        <div key={i} className="tech-item" data-aos="flip-left" data-aos-delay={t.delay}>
                            <div className="tech-icon">{t.icon}</div>
                            <div className="tech-name">{t.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
