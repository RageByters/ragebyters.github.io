import React from 'react';

const GameGrid = () => {
    const games = [
        {
            title: 'Snake',
            desc: 'Classic snake with rage mechanics. Eat, grow, survive.',
            icon: '🐍',
            badge: 'Live',
            link: '/game-snake/',
            delay: 0
        },
        {
            title: 'Typing Test',
            desc: 'Test your speed and precision under arcade pressure.',
            icon: '⌨️',
            badge: 'New!',
            link: '/utilty-typing-test/',
            delay: 100
        }
    ];

    return (
        <div className="section" id="games">
            <div className="container">
                <h2 className="section-title">Play Now</h2>

                <div className="game-grid">
                    {games.map((game, index) => (
                        <a key={index} href={game.link} className="game-card" data-aos="fade-up" data-aos-delay={game.delay}>
                            <div className="game-card-content">
                                <div className="game-icon">{game.icon}</div>
                                <div className="game-title">{game.title}</div>
                                <div className="game-desc">{game.desc}</div>
                                <div className="game-badge">{game.badge}</div>
                            </div>
                        </a>
                    ))}

                    <div className="coming-soon-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="coming-soon-content">
                            <div className="coming-soon-icon">⚙️</div>
                            <div className="coming-soon-badge">Coming Soon</div>
                        </div>
                    </div>

                    <div className="coming-soon-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="coming-soon-content">
                            <div className="coming-soon-icon">🚀</div>
                            <div className="coming-soon-badge">Coming Soon</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameGrid;
