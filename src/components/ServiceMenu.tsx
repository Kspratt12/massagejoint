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
    <section className="py-20 md:py-28 bg-warm-white" id="services">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-sage text-sm tracking-[0.2em] uppercase font-light mb-4">
              Full Menu
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
              Services & Pricing
            </h2>
            <p className="text-charcoal/60 text-base md:text-lg font-light max-w-xl mx-auto">
              Every treatment is personalized. Every price is transparent.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-light tracking-wide transition-all duration-300 touch-manipulation ${
                  activeCategory === cat.id
                    ? "bg-charcoal text-ivory"
                    : "bg-fog/60 text-charcoal/70 hover:bg-fog"
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              {currentCategory.description && (
                <p className="text-center text-charcoal/60 text-sm font-light mb-8 max-w-lg mx-auto">
                  {currentCategory.description}
                </p>
              )}

              <div className="space-y-4">
                {currentCategory.services.map((service) => (
                  <div
                    key={service.name}
                    className="bg-ivory rounded-xl p-6 md:p-8 border border-fog/50 hover:border-fog transition-colors duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-serif text-lg md:text-xl text-charcoal mb-2">
                          {service.name}
                        </h3>
                        <p className="text-charcoal/60 text-sm font-light leading-relaxed mb-1">
                          {service.description}
                        </p>
                        {service.note && (
                          <p className="text-charcoal/50 text-xs font-light leading-relaxed mt-2 italic">
                            {service.note}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-wrap md:flex-col gap-3 md:gap-2 md:items-end md:min-w-[180px]">
                        {service.prices.map((p, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 bg-fog/40 rounded-lg px-4 py-2"
                          >
                            <span className="text-xs text-charcoal/50 font-light min-w-[80px]">
                              {p.duration}
                            </span>
                            <span className="text-sm text-charcoal font-medium">
                              {p.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chair Massage & Events */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto mt-12 bg-charcoal rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-serif text-xl md:text-2xl text-ivory mb-3">
              {chairMassageInfo.title}
            </h3>
            <p className="text-ivory/60 text-sm font-light mb-2">
              {chairMassageInfo.services.join(" · ")}
            </p>
            <p className="text-ivory/50 text-sm font-light mb-5">
              {chairMassageInfo.cta}
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex bg-sage hover:bg-sage-dark text-ivory px-8 py-3 rounded-full text-sm font-light tracking-wide transition-colors duration-300"
            >
              Get a Quote
            </a>
          </div>
        </AnimatedSection>

        {/* Cancellation Policy */}
        <AnimatedSection delay={0.25}>
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-charcoal/40 text-xs font-light leading-relaxed">
              <span className="font-medium text-charcoal/50">Cancellation Policy:</span>{" "}
              {cancellationPolicy.text} {cancellationPolicy.contact}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
