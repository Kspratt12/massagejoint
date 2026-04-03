"use client";

import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/data/contact";

function RainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let drops: { x: number; y: number; speed: number; length: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    const init = () => {
      resize();
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = Math.floor((w * h) / 4000);
      drops = [];
      for (let i = 0; i < count; i++) {
        drops.push({
          x: Math.random() * w,
          y: Math.random() * h,
          speed: 2 + Math.random() * 4,
          length: 15 + Math.random() * 25,
          opacity: 0.04 + Math.random() * 0.1,
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const drop of drops) {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - 0.4, drop.y + drop.length);
        ctx.strokeStyle = `rgba(255,255,255,${drop.opacity})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();

        drop.y += drop.speed;
        drop.x -= 0.2;

        if (drop.y > h + drop.length) {
          drop.y = -drop.length;
          drop.x = Math.random() * w;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const handleResize = () => { init(); };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
    />
  );
}

export default function FinalCTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero3.png"
          alt="Calming wellness atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Rain overlay */}
      <RainCanvas />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sage/[0.04] rounded-full blur-[100px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-snug mb-5 max-w-3xl mx-auto">
            Your body has been carrying a lot.
            <span className="block mt-2 text-champagne-light italic">
              Let us help you feel like yourself again.
            </span>
          </h2>
          <p className="text-ivory/50 text-base md:text-lg font-light max-w-lg mx-auto mb-8">
            Whether it is pain relief, stress recovery, or skincare that actually works, your next session is waiting.
          </p>
          <a
            href={contactInfo.booking.main}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-sage/90 hover:bg-sage active:bg-sage-dark text-ivory px-12 py-4 rounded-full text-base md:text-lg font-light tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,158,139,0.2)] touch-manipulation"
          >
            Book Your Appointment
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
