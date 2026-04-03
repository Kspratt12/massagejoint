"use client";

import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/images/services/scalp-facials.png"
                  alt="Inside The Massage Joint treatment space"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-4 right-4 md:-right-4 bg-charcoal text-ivory py-4 px-5 md:py-5 md:px-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <p className="text-xl font-serif text-champagne-light leading-none">74+</p>
                    <p className="text-[10px] font-light text-ivory/50 mt-0.5">Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.12}>
            <div className="lg:pl-4">
              <p className="text-sage text-[11px] tracking-[0.25em] uppercase font-light mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] text-charcoal leading-snug mb-6">
                Where healing meets
                <span className="block text-sage-dark italic mt-0.5">intentional care</span>
              </h2>
              <div className="space-y-4 text-charcoal/55 font-light leading-[1.85] text-[15px]">
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
