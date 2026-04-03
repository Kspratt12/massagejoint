"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/contact";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with cinematic gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero.png"
          alt="The Massage Joint treatment room"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-sage-light/90 text-xs md:text-sm tracking-[0.3em] uppercase font-light mb-8">
            Massage &amp; Skincare &middot; Apex, North Carolina
          </p>
          <h1 className="font-serif text-ivory text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.08] mb-7 max-w-4xl mx-auto tracking-tight">
            Relief starts the moment
            <span className="block mt-2">
              <em className="font-serif italic text-champagne-light/90">you walk in</em>
            </span>
          </h1>
          <p className="text-ivory/60 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-12">
            Therapeutic massage, custom skincare, and restorative care from a team that listens to your body and treats it with intention.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={contactInfo.booking.main}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sage hover:bg-sage-dark active:bg-sage-dark text-ivory px-10 py-4 rounded-full text-base font-light tracking-wider transition-all duration-300 hover:shadow-lg touch-manipulation min-w-[200px]"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="border border-ivory/30 hover:border-ivory/50 active:border-ivory/50 text-ivory px-10 py-4 rounded-full text-base font-light tracking-wider transition-all duration-300 touch-manipulation min-w-[200px]"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-ivory/30 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-ivory/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
