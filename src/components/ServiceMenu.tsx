"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { serviceCategories, cancellationPolicy, chairMassageInfo } from "@/data/services";
import { contactInfo } from "@/data/contact";

export default function ServiceMenu() {
  const [activeCategory, setActiveCategory] = useState("massage");

  const currentCategory = serviceCategories.find((c) => c.id === activeCategory);

  return (
    <section className="py-20 md:py-24 bg-warm-white" id="services">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-14">
            <div className="section-divider" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal mb-3">
              Services &amp; Pricing
            </h2>
            <p className="text-charcoal/50 text-[15px] font-light max-w-md mx-auto leading-relaxed">
              Every treatment is personalized. Every price is transparent.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 mb-10">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-[13px] font-light tracking-wide transition-all duration-300 touch-manipulation ${
                  activeCategory === cat.id
                    ? "bg-charcoal text-ivory shadow-sm"
                    : "bg-fog/50 text-charcoal/60 hover:bg-fog hover:text-charcoal/80"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Services List */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="max-w-4xl mx-auto"
            >
              {currentCategory.description && (
                <p className="text-center text-charcoal/50 text-[13px] font-light mb-8 max-w-lg mx-auto">
                  {currentCategory.description}
                </p>
              )}

              <div className="space-y-3">
                {currentCategory.services.map((service) => (
                  <div
                    key={service.name}
                    className="bg-ivory rounded-xl p-5 md:p-7 border border-fog/40 hover:border-fog/70 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-serif text-lg text-charcoal mb-1.5">
                          {service.name}
                        </h3>
                        <p className="text-charcoal/50 text-[13px] font-light leading-relaxed">
                          {service.description}
                        </p>
                        {service.note && (
                          <p className="text-charcoal/40 text-[12px] font-light leading-relaxed mt-2 italic">
                            {service.note}
                          </p>
                        )}
                      </div>

                      {/* Clickable price buttons that link to booking */}
                      <div className="flex flex-wrap md:flex-col gap-2 md:items-end md:min-w-[190px]">
                        {service.prices.map((p, i) => (
                          <a
                            key={i}
                            href={contactInfo.booking.main}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-3 bg-fog/30 hover:bg-sage/10 rounded-lg px-4 py-2 transition-all duration-300 touch-manipulation cursor-pointer border border-transparent hover:border-sage/20"
                          >
                            <span className="text-[12px] text-charcoal/45 font-light min-w-[70px]">
                              {p.duration}
                            </span>
                            <span className="text-[14px] text-charcoal group-hover:text-sage-dark font-medium transition-colors">
                              {p.price}
                            </span>
                            <svg className="w-3 h-3 text-charcoal/0 group-hover:text-sage transition-all duration-300 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chair Massage & Events - with background image */}
        <AnimatedSection delay={0.15}>
          <div className="max-w-4xl mx-auto mt-10 rounded-2xl overflow-hidden relative">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="/images/services/double-loyalty-points.png"
                alt="Chair massage and events"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/80" />
            </div>

            <div className="relative p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-xl md:text-2xl text-ivory mb-2">
                  {chairMassageInfo.title}
                </h3>
                <p className="text-ivory/55 text-sm font-light mb-1">
                  {chairMassageInfo.services.join(" · ")}
                </p>
                <p className="text-ivory/40 text-[13px] font-light">
                  {chairMassageInfo.cta}
                </p>
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex bg-sage hover:bg-sage-dark text-ivory px-8 py-3 rounded-full text-sm font-light tracking-wide transition-colors duration-300 touch-manipulation whitespace-nowrap"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Cancellation Policy - tighter spacing */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto mt-6 text-center">
            <p className="text-charcoal/35 text-[11px] font-light leading-relaxed">
              <span className="font-medium text-charcoal/45">Cancellation Policy:</span>{" "}
              {cancellationPolicy.text} {cancellationPolicy.contact}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
