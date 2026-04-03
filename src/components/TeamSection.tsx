"use client";

import AnimatedSection from "./AnimatedSection";
import { teamMembers } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory" id="team">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-sage text-sm tracking-[0.2em] uppercase font-light mb-4">
              Meet Your Therapists
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
              Our Team
            </h2>
            <p className="text-charcoal/60 text-base md:text-lg font-light max-w-xl mx-auto">
              Licensed professionals who listen, care, and deliver real results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <div className="group bg-warm-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg h-full flex flex-col">
                {/* Portrait - all same aspect ratio */}
                <div className="aspect-[3/4] overflow-hidden bg-fog">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-lg text-charcoal mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-sage text-xs font-light tracking-wide mb-3">
                    {member.license}
                  </p>
                  <p className="text-charcoal/50 text-xs font-light mb-2">
                    {member.specialties}
                  </p>
                  <p className="text-charcoal/60 text-sm font-light leading-relaxed flex-1 mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-charcoal hover:bg-charcoal-light text-ivory text-sm px-6 py-2.5 rounded-full transition-colors duration-300 font-light tracking-wide mt-auto"
                  >
                    Book with {member.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
