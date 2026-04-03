"use client";

import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                {/* Swap with real interior/treatment room photo */}
                <img
                  src="/images/hero/hero2.png"
                  alt="Inside The Massage Joint treatment space"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-charcoal text-ivory p-6 md:p-8 rounded-xl shadow-xl max-w-[220px]">
                <p className="text-3xl font-serif text-champagne-light mb-1">74+</p>
                <p className="text-sm font-light text-ivory/70">Five-star Google reviews</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.15}>
            <div>
              <p className="text-sage text-sm tracking-[0.2em] uppercase font-light mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal leading-snug mb-6">
                Where healing meets
                <span className="block text-sage-dark italic">intentional care</span>
              </h2>
              <div className="space-y-5 text-charcoal/70 font-light leading-relaxed">
                <p>
                  The Massage Joint was founded on a simple belief: everyone deserves access to real, results-driven bodywork and skincare from people who genuinely care. Located in the heart of downtown Apex, North Carolina, we have built a practice rooted in listening, precision, and trust.
                </p>
                <p>
                  Our team of licensed massage therapists and a skilled esthetician brings together years of specialized training in deep tissue work, prenatal care, migraine and pain management, TMJ relief, custom facials, and more. Every session is tailored to your body, your goals, and what you need most that day.
                </p>
                <p>
                  This is not a franchise. This is not a rush-through appointment. This is a place where people come in carrying stress, tension, pain, or burnout and leave feeling genuinely better. That is what we are here for.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
