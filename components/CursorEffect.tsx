import React, { useEffect, useRef } from 'react';

const CursorEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; color: string; alpha: number; speedX: number; speedY: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Darker, Saturated Aesthetic Palette (High contrast on white background)
    const colors = [
      '#dc2626', // Red 600
      '#d97706', // Amber 600
      '#059669', // Emerald 600
      '#2563eb', // Blue 600
      '#7c3aed', // Violet 600
      '#db2777', // Pink 600
      '#0891b2', // Cyan 600
    ];

    const createParticle = (x: number, y: number) => {
      const size = Math.random() * 8 + 4; // Slightly larger for better visibility
      const color = colors[Math.floor(Math.random() * colors.length)];
      const speedX = (Math.random() - 0.5) * 2;
      const speedY = (Math.random() - 0.5) * 2;
      
      particles.push({ x, y, size, color, alpha: 1, speedX, speedY });
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Create multiple particles for a rich trail effect
      for(let i=0; i<3; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.alpha -= 0.02; // Fade out
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default CursorEffect;