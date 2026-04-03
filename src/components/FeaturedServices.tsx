"use client";

import AnimatedSection from "./AnimatedSection";
import { featuredServices } from "@/data/services";

export default function FeaturedServices() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <div className="section-divider" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal mb-3">
              Featured Services
            </h2>
            <p className="text-charcoal/50 text-[15px] font-light max-w-md mx-auto leading-relaxed">
              From therapeutic massage to rejuvenating skincare, every treatment is tailored to you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredServices.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.06}>
              <a
                href={service.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-warm-white rounded-2xl overflow-hidden border border-fog/30 hover:border-fog/60 transition-all duration-500 hover:shadow-md active:shadow-sm hover:-translate-y-0.5 h-full touch-manipulation"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h3 className="font-serif text-lg text-charcoal">{service.name}</h3>
                    <span className="text-[13px] text-sage font-light whitespace-nowrap mt-0.5">
                      {service.startingPrice}
                    </span>
                  </div>
                  <p className="text-charcoal/50 text-[13px] font-light leading-relaxed mb-4">
                    {service.benefit}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sage text-[13px] font-light group-hover:gap-2.5 transition-all duration-300">
                    Book Now
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
