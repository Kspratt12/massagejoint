"use client";

import AnimatedSection from "./AnimatedSection";

export default function OwnerSection() {
  return (
    <section className="py-14 md:py-20 bg-linen" id="about">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-12">
            <div className="section-divider" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal mb-3">
              Meet the Owner
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-ivory rounded-2xl border border-fog/60 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Owner Photo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-sage/20 ring-offset-4 ring-offset-ivory">
                    <img
                      src="/images/owner.jpg"
                      alt="Peter Kerr, Owner of The Massage Joint"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Owner Message */}
                <div className="flex-1 text-center md:text-left">
                  <p className="font-serif text-xl md:text-2xl text-charcoal mb-1">
                    Peter Kerr
                  </p>
                  <p className="text-charcoal/40 text-[13px] font-light mb-5">
                    Owner &middot; LMBT 13771
                  </p>

                  <div className="space-y-4 text-charcoal/55 font-light leading-[1.85] text-[15px]">
                    <p>
                      At The Massage Joint, you will know that you are the focus while you are here as every session is customized to your needs. We have thoroughly experienced, licensed massage therapists &amp; estheticians on staff.
                    </p>
                    <p>
                      Thank you for trusting us in your care. You are supporting local families every time you choose The Massage Joint!
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-fog">
                    {/* Awards */}
                    <div className="flex flex-col gap-2 mt-1">
                      {[
                        "2021 Finalist: Best Massage Therapist in the Triangle — INDY Week",
                        "2022 Best Massage Therapy in Apex — Suburban Living Magazine",
                        "2024 Best Massage Therapy in Apex — Suburban Living Magazine",
                      ].map((award) => (
                        <p key={award} className="text-[12px] text-sage-dark/70 font-light flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-champagne flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {award}
                        </p>
                      ))}
                    </div>

                    {/* IndyWeek Badge */}
                    <div className="mt-5">
                      <img
                        src="/images/2021-owner-star.jpg"
                        alt="2021 INDY Week Finalist — Best Massage Therapist in the Triangle"
                        className="h-16 md:h-20 w-auto mx-auto md:mx-0 rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
