"use client";

import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/data/contact";

const reasons = [
  {
    title: "Pain & Tension Relief",
    description: "Targeted bodywork for chronic pain, muscle tension, and injury recovery from licensed therapists who understand your body.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Migraine Support",
    description: "Specialized techniques for migraine management and TMJ symptom relief that have helped hundreds of clients find lasting comfort.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Prenatal Care",
    description: "Certified prenatal massage therapists who understand the changing needs of expectant mothers and provide safe, nurturing support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Mobility & Stretching",
    description: "Table Thai massage and assisted stretching sessions designed to improve your range of motion and keep you moving freely.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Custom Skincare",
    description: "Facials, dermaplaning, and treatments customized to your skin type using professional-grade products for visible, lasting results.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Calming Environment",
    description: "A clean, peaceful space in downtown Apex designed to help you decompress from the moment you arrive to the moment you leave.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

/* Canvas-based rain for buttery smooth performance */
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
      const count = Math.floor((w * h) / 3000); // density based on area
      drops = [];
      for (let i = 0; i < count; i++) {
        drops.push({
          x: Math.random() * w,
          y: Math.random() * h,
          speed: 1.5 + Math.random() * 3,
          length: 12 + Math.random() * 20,
          opacity: 0.06 + Math.random() * 0.14,
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
        ctx.lineTo(drop.x - 0.3, drop.y + drop.length);
        ctx.strokeStyle = `rgba(255,255,255,${drop.opacity})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        drop.y += drop.speed;
        drop.x -= 0.15; // slight wind

        if (drop.y > h + drop.length) {
          drop.y = -drop.length;
          drop.x = Math.random() * w;
        }
        if (drop.x < -5) {
          drop.x = w + 5;
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
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ opacity: 1 }}
    />
  );
}

export default function WhyBookSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden" id="why-book">
      {/* Deep dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-charcoal to-[#1a1a1a]" />

      {/* Ambient glow spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sage/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-champagne/[0.03] rounded-full blur-[100px]" />

      {/* Canvas rain */}
      <RainCanvas />

      {/* Fog/mist layers */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1a1a1a]/40 to-transparent" />
      </div>

      <div className="relative z-[3] max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-14">
            <div className="w-12 h-[1px] bg-sage-light/20 mx-auto mb-6" />
            <p className="text-sage-light/50 text-[11px] tracking-[0.3em] uppercase font-light mb-4">
              The experience
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-ivory/95 mb-3">
              Why Clients Book Here
            </h2>
            <p className="text-ivory/35 text-[15px] font-light max-w-md mx-auto leading-relaxed">
              Real care for real concerns. Here is what brings people through our door.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.08}>
              <div className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 md:p-7 h-full transition-all duration-500 hover:bg-white/[0.07] hover:border-white/[0.1] hover:shadow-[0_0_40px_rgba(139,158,139,0.06)]">
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sage/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-sage-light/60 mb-4 group-hover:text-sage-light/80 transition-colors duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="font-serif text-[17px] text-ivory/90 mb-2.5 group-hover:text-ivory transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-ivory/35 text-[13px] font-light leading-relaxed group-hover:text-ivory/45 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center mt-10">
            <a
              href={contactInfo.booking.main}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-sage/90 hover:bg-sage active:bg-sage-dark text-ivory px-10 py-3.5 rounded-full text-[14px] font-light tracking-wider transition-all duration-300 touch-manipulation shadow-[0_0_30px_rgba(139,158,139,0.15)] hover:shadow-[0_0_40px_rgba(139,158,139,0.25)]"
            >
              Book Your Session
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
