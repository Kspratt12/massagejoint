"use client";

import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/data/contact";

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
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>

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
            className="inline-flex bg-sage/90 hover:bg-sage active:bg-sage-dark text-ivory px-12 py-4 rounded-full text-base md:text-lg font-light tracking-wider transition-all duration-300 hover:shadow-xl touch-manipulation"
          >
            Book Your Appointment
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
