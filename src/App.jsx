import React, { useEffect, useState, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import SoundController from './utils/SoundController';

function App() {
  const sfx = useMemo(() => new SoundController(), []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const unlockAudio = () => {
      sfx.init();
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
    };

    document.addEventListener('click', unlockAudio);
    document.addEventListener('keydown', unlockAudio);

    // Attach sounds to interactive elements
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .game-card, .community-card, .feature, .tech-item')) {
        sfx.playHover();
      }
    };

    const handleClick = (e) => {
      if (e.target.closest('a, button, .game-card, .community-card, .feature, .tech-item')) {
        sfx.playClick();
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
    };
  }, [sfx]);

  return (
    <div className="App">
      <BackgroundCanvas />
      <Navbar sfx={sfx} />
      <main>
        <Hero />
        <GameGrid />
        <Features />
        <TechStack />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
