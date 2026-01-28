import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generate } from 'random-words';
import {
    Keyboard,
    RotateCcw,
    Trophy,
    Zap,
    Timer,
    ArrowLeft,
    ChevronRight,
    Target
} from 'lucide-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const TypingTest = ({ onBack }) => {
    const [words, setWords] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [timeLeft, setTimeLeft] = useState(60);
    const [duration, setDuration] = useState(60);
    const [isActive, setIsActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [mistakes, setMistakes] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [wpmHistory, setWpmHistory] = useState([]);

    const inputRef = useRef(null);
    const timerRef = useRef(null);

    const generateWords = useCallback(() => {
        const newWords = generate(40);
        setWords(newWords);
        setUserInput('');
        setMistakes(0);
        setWpm(0);
        setAccuracy(100);
        setTimeLeft(duration);
        setIsActive(false);
        setIsFinished(false);
        setWpmHistory([]);
        if (timerRef.current) clearInterval(timerRef.current);
    }, [duration]);

    useEffect(() => {
        generateWords();
    }, [generateWords]);

    const startTimer = () => {
        setIsActive(true);
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    setIsFinished(true);
                    setIsActive(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            // Update WPM every second
            const timeSpent = (duration - timeLeft) || 1;
            const correctChars = userInput.length - mistakes;
            const currentWpm = Math.round((correctChars / 5) / (timeSpent / 60)) || 0;
            setWpm(currentWpm);
            setWpmHistory(prev => [...prev, currentWpm]);
        }
    }, [timeLeft, isActive, duration, userInput.length, mistakes]);

    const handleInput = (e) => {
        const value = e.target.value;
        if (!isActive && value.length > 0 && !isFinished) {
            startTimer();
        }

        const currentText = words.join(' ');
        const charIndex = value.length - 1;

        if (value.length > userInput.length) {
            if (value[charIndex] !== currentText[charIndex]) {
                setMistakes((prev) => prev + 1);
            }
        }

        setUserInput(value);

        // Calculate accuracy
        if (value.length > 0) {
            const acc = Math.round(((value.length - mistakes) / value.length) * 100);
            setAccuracy(acc < 0 ? 0 : acc);
        }

        if (value.length >= currentText.length) {
            setIsFinished(true);
            setIsActive(false);
            clearInterval(timerRef.current);
        }
    };

    const chartData = {
        labels: wpmHistory.map((_, i) => i + 1),
        datasets: [
            {
                fill: true,
                label: 'WPM',
                data: wpmHistory,
                borderColor: '#22d3ee',
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#f8fafc',
                bodyColor: '#22d3ee',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
            }
        },
        scales: {
            x: { display: false },
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#94a3b8' }
            }
        }
    };

    return (
        <div className="section" style={{ minHeight: '100vh', paddingTop: 100 }}>
            <div className="container">
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={onBack}
                    className="btn-outline"
                    style={{ marginBottom: 40, padding: '10px 20px', borderRadius: 100 }}
                >
                    <ArrowLeft size={18} style={{ marginRight: 8 }} />
                    Back to Arcade
                </motion.button>

                <header style={{ textAlign: 'center', marginBottom: 60 }}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-gradient-cyan"
                        style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-0.04em' }}
                    >
                        NEON TYPE
                    </motion.h1>
                    <p className="subtitle">UNLIMITED VELOCITY</p>
                </header>

                <div className="glass-card" style={{ padding: 60, position: 'relative' }}>
                    {/* Stats Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 60 }}>
                        <div className="stat-box">
                            <div className="stat-value" style={{ color: 'var(--accent-cyan)' }}>{wpm}</div>
                            <div className="stat-label">WPM</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-value" style={{ color: 'var(--accent-magenta)' }}>{accuracy}%</div>
                            <div className="stat-label">ACCURACY</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-value" style={{ color: 'var(--accent-violet)' }}>{timeLeft}s</div>
                            <div className="stat-label">TIME remaining</div>
                        </div>
                    </div>

                    {/* Words Area */}
                    <div
                        onClick={() => inputRef.current?.focus()}
                        style={{
                            position: 'relative',
                            fontSize: '1.75rem',
                            lineHeight: 1.8,
                            fontFamily: "'JetBrains Mono', monospace",
                            background: 'rgba(0,0,0,0.2)',
                            padding: 40,
                            borderRadius: 20,
                            cursor: 'text',
                            minHeight: 200,
                            userSelect: 'none'
                        }}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            autoFocus
                            className="typing-input"
                            value={userInput}
                            onChange={handleInput}
                            disabled={isFinished}
                            style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                        />

                        {words.join(' ').split('').map((char, i) => {
                            let color = 'var(--text-muted)';
                            let background = 'transparent';
                            let decoration = 'none';

                            if (i < userInput.length) {
                                if (userInput[i] === char) {
                                    color = 'var(--text-primary)';
                                } else {
                                    color = '#ef4444';
                                    background = 'rgba(239, 68, 68, 0.1)';
                                }
                            }

                            return (
                                <span
                                    key={i}
                                    style={{
                                        color,
                                        background,
                                        borderBottom: i === userInput.length ? '2px solid var(--accent-cyan)' : 'none',
                                        transition: 'all 0.1s ease'
                                    }}
                                >
                                    {char}
                                </span>
                            );
                        })}
                    </div>

                    {/* Controls */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
                        <button onClick={generateWords} className="btn-primary">
                            <RotateCcw size={18} />
                            Reset Challenge
                        </button>

                        <div style={{ display: 'flex', gap: 12 }}>
                            {[15, 30, 60].map(s => (
                                <button
                                    key={s}
                                    onClick={() => setDuration(s)}
                                    className={`diff-btn ${duration === s ? 'active' : ''}`}
                                >
                                    {s}s
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Overlay */}
                    <AnimatePresence>
                        {isFinished && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'rgba(2, 6, 23, 0.95)',
                                    zIndex: 20,
                                    borderRadius: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 40,
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <div style={{ width: '100%', maxWidth: 500, textAlign: 'center' }}>
                                    <Trophy size={60} color="var(--accent-cyan)" style={{ marginBottom: 20 }} />
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: 40 }}>BATTLE REPORT</h2>

                                    <div className="final-stats" style={{ marginBottom: 40 }}>
                                        <div className="final-stat">
                                            <span className="label">SPEED</span>
                                            <span className="value">{wpm} WPM</span>
                                        </div>
                                        <div className="final-stat">
                                            <span className="label">ACCURACY</span>
                                            <span className="value">{accuracy}%</span>
                                        </div>
                                    </div>

                                    <div style={{ height: 200, marginBottom: 40 }}>
                                        <Line data={chartData} options={chartOptions} />
                                    </div>

                                    <button onClick={generateWords} className="btn-primary" style={{ margin: '0 auto' }}>
                                        Retry Mission
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default TypingTest;
