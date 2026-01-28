import React from 'react';

const Roadmap = () => {
    const items = [
        { icon: '1️⃣', title: 'Phase 1: Foundation', desc: 'Launch main portal and first 3 games. Build community, set up GitHub organization.', status: 'In Progress', side: 'right' },
        { icon: '2️⃣', title: 'Phase 2: Expansion', desc: 'Add 10+ more games, implement leaderboards, user accounts system.', status: 'Upcoming', side: 'left' },
        { icon: '3️⃣', title: 'Phase 3: Community', desc: 'Discord bot integration, game jam events, community forums, streaming features.', status: 'Planned', side: 'right' },
        { icon: '4️⃣', title: 'Phase 4: Monetization', desc: 'Optional cosmetics, sponsorships, donations. Keep core games 100% free.', status: 'Future', side: 'left' },
        { icon: '5️⃣', title: 'Phase 5: Global Scale', desc: 'Mobile apps, tournaments, partnerships. World domination via mini-games.', status: 'Vision', side: 'right' }
    ];

    return (
        <div className="section" style={{ background: 'rgba(0, 0, 0, 0.3)' }} id="roadmap">
            <div className="container">
                <h2 className="section-title">Development Roadmap</h2>

                <div className="roadmap">
                    {items.map((item, i) => (
                        <div key={i} className="roadmap-item" data-aos={item.side === 'right' ? 'fade-right' : 'fade-left'}>
                            <div className="roadmap-icon">{item.icon}</div>
                            <div className="roadmap-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className="roadmap-status">{item.status}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
