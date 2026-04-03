"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/contact";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Hero image - swap this with real hero photo or video */}
        <img
          src="/images/hero/hero.png"
          alt="The Massage Joint treatment room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-sage-light text-sm md:text-base tracking-[0.25em] uppercase font-light mb-6">
            Apex, North Carolina
          </p>
          <h1 className="font-serif text-ivory text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 max-w-4xl mx-auto">
            Relief starts the moment
            <span className="block mt-1">
              <em className="font-serif italic text-champagne-light">you walk in</em>
            </span>
          </h1>
          <p className="text-ivory/70 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Massage, skincare, and restorative care from a team of licensed professionals
            who listen to your body and treat it with intention.
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
            className="bg-sage hover:bg-sage-dark text-ivory px-10 py-4 rounded-full text-base font-light tracking-wider transition-all duration-300 hover:shadow-lg"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="border border-ivory/30 hover:border-ivory/60 text-ivory px-10 py-4 rounded-full text-base font-light tracking-wider transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-ivory/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
