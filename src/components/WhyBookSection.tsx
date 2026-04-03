"use client";

import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/data/contact";

const reasons = [
  {
    title: "Pain & Tension Relief",
    description: "Targeted bodywork for chronic pain, muscle tension, and injury recovery from licensed therapists who understand your body.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Migraine Support",
    description: "Specialized techniques for migraine management and TMJ symptom relief that have helped hundreds of clients find lasting comfort.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Prenatal Care",
    description: "Certified prenatal massage therapists who understand the changing needs of expectant mothers and provide safe, nurturing support.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Mobility & Stretching",
    description: "Table Thai massage and assisted stretching sessions designed to improve your range of motion and keep you moving freely.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Custom Skincare",
    description: "Facials, dermaplaning, and treatments customized to your skin type using professional-grade products for visible, lasting results.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Calming Environment",
    description: "A clean, peaceful space in downtown Apex designed to help you decompress from the moment you arrive to the moment you leave.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

export default function WhyBookSection() {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-sage-light text-sm tracking-[0.2em] uppercase font-light mb-4">
              Why The Massage Joint
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-4">
              Why Clients Book Here
            </h2>
            <p className="text-ivory/60 text-base md:text-lg font-light max-w-xl mx-auto">
              Real care for real concerns. Here is what brings people through our door.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.08}>
              <div className="bg-charcoal-light/50 border border-ivory/5 rounded-xl p-7 md:p-8 h-full transition-all duration-300 hover:border-ivory/10">
                <div className="text-sage-light mb-5">{reason.icon}</div>
                <h3 className="font-serif text-lg text-ivory mb-3">{reason.title}</h3>
                <p className="text-ivory/50 text-sm font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center mt-12">
            <a
              href={contactInfo.booking.main}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-sage hover:bg-sage-dark active:bg-sage-dark text-ivory px-10 py-4 rounded-full text-base font-light tracking-wider transition-all duration-300 touch-manipulation"
            >
              Book Your Session
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
