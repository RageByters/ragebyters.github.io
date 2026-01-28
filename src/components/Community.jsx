import React from 'react';

const Community = () => {
    const links = [
        { icon: '🐙', title: 'GitHub', desc: 'Fork, contribute, submit PRs.', link: 'https://github.com/ragebyters', delay: 0 },
        { icon: '💬', title: 'Discord', desc: 'Chat, collaborate, hang out.', link: 'https://discord.gg', delay: 100 },
        { icon: '🐦', title: 'Twitter', desc: 'Latest updates and news.', link: 'https://twitter.com', delay: 200 },
        { icon: '📧', title: 'Email', desc: 'Questions or suggestions?', link: 'mailto:hello@ragebyters.dev', delay: 300 },
        { icon: '📺', title: 'YouTube', desc: 'Tutorials & gameplay.', link: 'https://youtube.com', delay: 400 }
    ];

    return (
        <>
            <div className="section" id="community">
                <div className="container">
                    <h2 className="section-title">Join The Community</h2>

                    <div className="community-grid">
                        {links.map((c, i) => (
                            <div key={i} className="community-card" data-aos="flip-left" data-aos-delay={c.delay}>
                                <div className="community-icon">{c.icon}</div>
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                                <a href={c.link} target="_blank" rel="noopener noreferrer">
                                    {c.title === 'Email' ? 'Contact Us' : c.title === 'Discord' ? 'Join Server' : 'Visit'} <i className={c.title === 'Email' ? "fas fa-paper-plane" : "fas fa-external-link-alt"}></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="cta-section">
                    <div className="cta-content">
                        <div className="cta-text">Ready to Join the Rage?</div>
                        <div className="cta-subtext">Start playing, contributing, or creating with RageByters. The future is unwritten.</div>
                        <div className="btn-group">
                            <a href="https://github.com/ragebyters" className="btn-primary" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i> View on GitHub
                            </a>
                            <a href="https://github.com/ragebyters/ragebyters.github.io" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-code-branch"></i> Fork This Site
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Community;
