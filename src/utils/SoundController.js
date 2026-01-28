class SoundController {
    constructor() {
        this.context = null;
        this.masterGain = null;
        this.muted = localStorage.getItem('ragebyters_muted') === 'true';
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        this.context = new AudioContext();
        this.masterGain = this.context.createGain();
        this.masterGain.connect(this.context.destination);
        this.masterGain.gain.value = 0.3;

        this.initialized = true;

        if (this.context.state === 'suspended') {
            this.context.resume();
        }
    }

    playTone(frequency, type, duration, startTime = 0) {
        if (this.muted) return;
        if (!this.initialized) this.init();
        if (!this.context) return;

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

    toggleMute(isMuted) {
        this.muted = isMuted;
        if (!this.muted && !this.initialized) {
            this.init();
        }
    }

    updateMuteState(isMuted) {
        this.muted = isMuted;
    }
}

export default SoundController;
