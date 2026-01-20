const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let lines = [];
const speed = 2;
const gap = 40;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initLines();
}

class Line {
    constructor(y) {
        this.y = y;
    }

    update() {
        this.y += speed;
        if (this.y > height) {
            this.y = height / 2;
        }
    }

    draw() {
        ctx.beginPath();
        // Perspective trick: shorter lines at top, wider at bottom?
        // Actually for a simple retro grid, we just draw horizontal lines
        // But to make it 3D, we need a vanishing point (center of screen, usually horizon is lower)

        // Simple Synthwave Grid: 
        // 1. Moving Horizontal lines (from horizon down)
        // 2. Static Vertical lines (fanning out from perspective center)

        // Draw this specific horizontal line
        // Opacity based on proximity to bottom (more visible) vs horizon (faded)
        // Horizon y = height / 2;

        if (this.y < height / 2) return; // Don't draw above horizon depending on style

        const alpha = ((this.y - height / 2) / (height / 2)) * 0.5;
        ctx.strokeStyle = `rgba(255, 23, 68, ${alpha})`;
        ctx.lineWidth = 1;

        ctx.moveTo(0, this.y);
        ctx.lineTo(width, this.y);
        ctx.stroke();
    }
}

function initLines() {
    lines = [];
    // Create horizontal lines originating from horizon (h/2) to bottom (h)
    for (let y = height / 2; y < height; y += gap) {
        lines.push(new Line(y));
    }
}

function drawVerticals() {
    const horizonY = height / 2;
    const centerX = width / 2;
    // Fan out lines
    // Count: ~20 lines
    const count = 30;

    ctx.strokeStyle = 'rgba(124, 58, 237, 0.2)';
    ctx.lineWidth = 1;

    for (let i = -count; i <= count; i++) {
        const x = centerX + i * 100; // Spread at bottom

        ctx.beginPath();
        ctx.moveTo(centerX, horizonY); // Origin at horizon center
        // Extend past screen bottom to ensure coverage
        // Calculate slope to find x at y=height

        ctx.lineTo(x, height);
        ctx.stroke();
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw "Sun" or Glow at horizon
    const gradient = ctx.createLinearGradient(width / 2, height / 2 - 50, width / 2, height / 2 + 50);
    gradient.addColorStop(0, 'rgba(255, 23, 68, 0)');
    gradient.addColorStop(0.5, 'rgba(255, 23, 68, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 23, 68, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, height / 2 - 50, width, 100);

    drawVerticals();

    lines.forEach(line => {
        line.update();
        line.draw();
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();
