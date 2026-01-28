import React, { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import TypingTest from './components/TypingTest';
import SoundController from './utils/SoundController';

const ArcadeHome = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Hero />
    <GameGrid />
    <Features />
    <Roadmap />
  </motion.div>
);

const AppContent = ({ sfx }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unlockAudio = () => {
      sfx.init();
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
    };

    document.addEventListener('click', unlockAudio);
    document.addEventListener('keydown', unlockAudio);

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .glass-card, .glass')) {
        sfx.playHover();
      }
    };

    const handleClick = (e) => {
      if (e.target.closest('a, button, .glass-card, .glass')) {
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
    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="noise-bg"></div>
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div style={{
        position: 'fixed',
        top: '30%',
        left: '20%',
        width: 400,
        height: 400,
        background: 'var(--accent-violet)',
        filter: 'blur(150px)',
        opacity: 0.1,
        zIndex: -1
      }}></div>

      <Navbar sfx={sfx} />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<ArcadeHome />} />
            <Route path="/typing-test" element={<TypingTest onBack={() => navigate('/')} />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  const sfx = useMemo(() => new SoundController(), []);

  return (
    <Router>
      <AppContent sfx={sfx} />
    </Router>
  );
}

export default App;
