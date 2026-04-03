"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { featuredServices } from "@/data/services";

export default function FeaturedServices() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-sage text-sm tracking-[0.2em] uppercase font-light mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
              Featured Services
            </h2>
            <p className="text-charcoal/60 text-base md:text-lg font-light max-w-xl mx-auto">
              From therapeutic massage to rejuvenating skincare, every treatment is tailored to you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.08}>
              <motion.a
                href={service.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-warm-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1 h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-serif text-xl text-charcoal">{service.name}</h3>
                    <span className="text-sm text-sage font-light whitespace-nowrap mt-1">
                      {service.startingPrice}
                    </span>
                  </div>
                  <p className="text-charcoal/60 text-sm font-light leading-relaxed mb-4">
                    {service.benefit}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sage text-sm font-light group-hover:gap-3 transition-all duration-300">
                    Book Now
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
