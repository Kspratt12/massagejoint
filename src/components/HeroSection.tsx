"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactInfo } from "@/data/contact";

const heroImages = [
  { src: "/images/hero/hero.png", alt: "The Massage Joint treatment room" },
  { src: "/images/hero/hero2.png", alt: "Massage therapy session" },
  { src: "/images/hero/hero3.png", alt: "Calming wellness atmosphere" },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Rotating Background Images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentImage].src}
            alt={heroImages[currentImage].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/35 to-charcoal/75 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/25 via-transparent to-charcoal/10 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 text-center pt-16 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-sage-light text-[11px] md:text-xs tracking-[0.35em] uppercase font-light mb-7 md:mb-9">
            Massage &amp; Skincare &middot; Apex, North Carolina
          </p>
          <h1 className="font-serif text-ivory text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.1] mb-6 md:mb-8 max-w-3xl mx-auto">
            Relief starts the moment
            <span className="block mt-1 md:mt-2">
              <em className="font-serif italic text-champagne-light">you walk in</em>
            </span>
          </h1>
          <p className="text-ivory/65 text-[15px] md:text-base lg:text-lg max-w-md md:max-w-lg mx-auto font-light leading-relaxed mb-10 md:mb-12">
            Therapeutic massage, custom skincare, and restorative care from a team that listens to your body and treats it with intention.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <a
            href={contactInfo.booking.main}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sage hover:bg-sage-dark active:bg-sage-dark text-ivory px-9 py-3.5 rounded-full text-[15px] font-light tracking-wide transition-all duration-300 hover:shadow-lg touch-manipulation w-full sm:w-auto sm:min-w-[190px] text-center"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="border border-ivory/25 hover:border-ivory/45 active:border-ivory/45 text-ivory/90 px-9 py-3.5 rounded-full text-[15px] font-light tracking-wide transition-all duration-300 touch-manipulation w-full sm:w-auto sm:min-w-[190px] text-center"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Image indicators + scroll combined at bottom */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-5">
        <div className="flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`h-[2px] rounded-full transition-all duration-500 touch-manipulation ${
                i === currentImage ? "bg-ivory/70 w-10" : "bg-ivory/25 w-6"
              }`}
              aria-label={`Show image ${i + 1}`}
            />
          ))}
        </div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 text-ivory/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
