import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let lines = [];
    const speed = 2;
    const gap = 40;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initLines();
    };

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
        if (this.y < height / 2) return;

        const alpha = ((this.y - height / 2) / (height / 2)) * 0.5;
        ctx.strokeStyle = `rgba(255, 23, 68, ${alpha})`;
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(0, this.y);
        ctx.lineTo(width, this.y);
        ctx.stroke();
      }
    }

    const initLines = () => {
      lines = [];
      for (let y = height / 2; y < height; y += gap) {
        lines.push(new Line(y));
      }
    };

    const drawVerticals = () => {
      const horizonY = height / 2;
      const centerX = width / 2;
      const count = 30;

      ctx.strokeStyle = 'rgba(124, 58, 237, 0.2)';
      ctx.lineWidth = 1;

      for (let i = -count; i <= count; i++) {
        const x = centerX + i * 100;
        ctx.beginPath();
        ctx.moveTo(centerX, horizonY);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

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
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef}></canvas>;
};

export default BackgroundCanvas;
