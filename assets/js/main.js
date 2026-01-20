// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Typed.js Animation
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

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const hamburgerIcon = document.querySelector('.hamburger i');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (hamburgerIcon) {
                    hamburgerIcon.classList.remove('fa-times');
                    hamburgerIcon.classList.add('fa-bars');
                }
            }
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Toggle icon
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// --- Sound Controller (Web Audio API) ---
// --- Sound Controller (Web Audio API) ---
class SoundController {
    constructor() {
        this.context = null;
        this.masterGain = null;
        this.muted = localStorage.getItem('ragebyters_muted') === 'true';
        this.initialized = false;

        // Wait for DOM to be ready before finding button
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.updateMuteState());
        } else {
            this.updateMuteState();
        }
    }

    init() {
        if (this.initialized) return;

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return; // Browser doesn't support Web Audio API

        this.context = new AudioContext();
        this.masterGain = this.context.createGain();
        this.masterGain.connect(this.context.destination);
        this.masterGain.gain.value = 0.3; // Default volume

        this.initialized = true;

        // Resume context if it starts suspended (Chrome policy)
        if (this.context.state === 'suspended') {
            this.context.resume();
        }
    }

    playTone(frequency, type, duration, startTime = 0) {
        if (this.muted) return;
        if (!this.initialized) this.init();

        // Safety check
        if (!this.context) return;

        // Try to resume context if suspended
        if (this.context.state === 'suspended') {
            this.context.resume().catch(e => console.warn(e));
        }

        const osc = this.context.createOscillator();
        const gain = this.context.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(frequency, this.context.currentTime + startTime);

        gain.gain.setValueAtTime(this.masterGain.gain.value, this.context.currentTime + startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + startTime + duration);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(this.context.currentTime + startTime);
        osc.stop(this.context.currentTime + startTime + duration);
    }

    playHover() {
        this.playTone(400, 'sine', 0.1);
    }

    playClick() {
        this.playTone(600, 'square', 0.1);
        this.playTone(800, 'square', 0.1, 0.1);
    }

    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('ragebyters_muted', this.muted);
        this.updateMuteState();

        // Initialize audio if unmuting
        if (!this.muted && !this.initialized) {
            this.init();
        }
    }

    updateMuteState() {
        // Ensure DOM is ready
        const btn = document.getElementById('mute-btn');
        if (btn) {
            btn.innerHTML = this.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
            btn.style.color = this.muted ? 'var(--text-dim)' : 'var(--accent-cyan)';
        }
    }
}

// Initialize Sound Controller
const sfx = new SoundController();

// Unlock Audio Context on first user interaction
const unlockAudio = () => {
    sfx.init();
    document.removeEventListener('click', unlockAudio);
    document.removeEventListener('keydown', unlockAudio);
};

document.addEventListener('click', unlockAudio);
document.addEventListener('keydown', unlockAudio);

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Mute Button Logic
    const muteBtn = document.getElementById('mute-btn');
    if (muteBtn) {
        // Force update state once DOM is ready
        sfx.updateMuteState();

        muteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent triggering unlockAudio redundant calls if not needed
            sfx.toggleMute();
        });
    }

    // Interactive Elements Sound triggers
    const attachSounds = () => {
        const interactives = document.querySelectorAll('a, button, .game-card, .community-card, .feature, .tech-item');
        interactives.forEach(el => {
            // Prevent duplicate listeners
            if (el.dataset.soundAttached) return;
            el.dataset.soundAttached = 'true';

            el.addEventListener('mouseenter', () => sfx.playHover());
            el.addEventListener('click', () => sfx.playClick());
        });
    };

    attachSounds();

    // Re-attach sounds if AOS adds new elements or dynamic content loads?
    // For now, this is static site so it's fine.
});
