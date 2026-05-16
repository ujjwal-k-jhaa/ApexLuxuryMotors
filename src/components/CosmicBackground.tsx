import React, { useEffect, useRef } from 'react';

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Premium cosmic colors: deep space blue, subtle amethyst, and faded gold
    const colors = [
      { r: 15, g: 20, b: 40 },   // Deep slate blue
      { r: 25, g: 15, b: 35 },   // Dark amethyst
      { r: 212, g: 175, b: 55 }, // Gold (will be used very faintly)
    ];

    interface Particle {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      colorIndex: number;
      opacity: number;
      opacitySpeed: number;
      minOpacity: number;
      maxOpacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = 6; // Keep it low for a clean, flowing, minimal look

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 400 + 300, // Very large blurred orbs
        dx: (Math.random() - 0.5) * 0.5, // Slow horizontal movement
        dy: (Math.random() - 0.5) * 0.5, // Slow vertical movement
        colorIndex: i % colors.length,
        opacity: Math.random() * 0.1 + 0.05,
        opacitySpeed: (Math.random() - 0.5) * 0.002,
        minOpacity: 0.03,
        maxOpacity: i % colors.length === 2 ? 0.08 : 0.2, // Gold is fader
      });
    }

    const draw = () => {
      // Clear with deep black
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // We draw huge radial gradients for a nebula/cosmic flow effect
      particles.forEach((p) => {
        // Move
        p.x += p.dx;
        p.y += p.dy;

        // Bounce off invisible large boundaries (allow some offscreen wandering)
        if (p.x < -p.radius || p.x > width + p.radius) p.dx *= -1;
        if (p.y < -p.radius || p.y > height + p.radius) p.dy *= -1;

        // Pulse opacity softly
        p.opacity += p.opacitySpeed;
        if (p.opacity >= p.maxOpacity || p.opacity <= p.minOpacity) {
          p.opacitySpeed *= -1;
        }

        const color = colors[p.colorIndex];
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${p.opacity})`);
        gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle noise overlay for texture
      ctx.fillStyle = 'rgba(255, 255, 255, 0.015)';
      for (let i = 0; i < 2000; i++) {
         const x = Math.random() * width;
         const y = Math.random() * height;
         ctx.fillRect(x, y, 1, 1);
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
      {/* Soft vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
    </div>
  );
}
