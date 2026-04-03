"use client";

import AnimatedSection from "./AnimatedSection";
import { teamMembers } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory" id="team">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <div className="section-divider" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal mb-3">
              Our Team
            </h2>
            <p className="text-charcoal/50 text-[15px] font-light max-w-md mx-auto leading-relaxed">
              Licensed professionals who listen, care, and deliver real results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <div className="group bg-warm-white rounded-2xl overflow-hidden border border-fog/40 hover:border-fog/80 transition-all duration-500 hover:shadow-lg h-full flex flex-col">
                {/* Portrait */}
                <div className="aspect-[3/4] overflow-hidden bg-fog">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-lg text-charcoal leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-sage text-[11px] font-light tracking-wider mt-1 mb-3 uppercase">
                    {member.license}
                  </p>

                  {/* Specialties chips */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {member.specialties.split(", ").slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] text-charcoal/50 bg-fog/60 px-2 py-0.5 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <p className="text-charcoal/55 text-[13px] font-light leading-relaxed flex-1 mb-5">
                    {member.bio}
                  </p>

                  <a
                    href={member.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-charcoal hover:bg-charcoal-light active:bg-charcoal-light text-ivory text-sm px-5 py-2.5 rounded-full transition-colors duration-300 font-light tracking-wide mt-auto touch-manipulation"
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
