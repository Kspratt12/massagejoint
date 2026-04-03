"use client";

import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/data/contact";

export default function BookingSection() {
  return (
    <section className="py-14 md:py-20 bg-ivory" id="booking">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-12">
            <div className="section-divider" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal mb-3">
              Book Your Session
            </h2>
            <p className="text-charcoal/50 text-[15px] font-light max-w-md mx-auto leading-relaxed">
              Choose the path that fits you best and book in just a few steps.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Left: Spa image */}
          <AnimatedSection delay={0.1}>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-full">
              <img
                src="/images/hero/hero.png"
                alt="Relaxing spa treatment"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-ivory/90 font-serif text-lg">Your wellness,</p>
                <p className="text-champagne-light font-serif text-lg italic">your way.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Booking options */}
          <div className="lg:col-span-3 space-y-4">
            {/* New & Returning */}
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={contactInfo.booking.newClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5 touch-manipulation"
                >
                  <div className="absolute inset-0">
                    <img src="/images/hero/hero3.png" alt="Spa treatment for new clients" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-charcoal/75 group-hover:bg-charcoal/65 transition-all duration-500" />
                  </div>
                  <div className="relative p-6 md:p-7">
                    <div className="w-10 h-10 mb-4 rounded-full bg-sage/20 flex items-center justify-center">
                      <svg className="w-4.5 h-4.5 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-lg text-ivory mb-1">New Client</h3>
                    <p className="text-ivory/45 text-[13px] font-light mb-4">First visit? Start here.</p>
                    <span className="inline-flex items-center gap-1.5 text-sage-light text-[12px] font-light group-hover:gap-2.5 transition-all duration-300">
                      Book now
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </a>

                <a
                  href={contactInfo.booking.returningClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5 touch-manipulation"
                >
                  <div className="absolute inset-0">
                    <img src="/images/services/himalayan-stones.png" alt="Relaxing massage for returning clients" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-charcoal/75 group-hover:bg-charcoal/65 transition-all duration-500" />
                  </div>
                  <div className="relative p-6 md:p-7">
                    <div className="w-10 h-10 mb-4 rounded-full bg-champagne/20 flex items-center justify-center">
                      <svg className="w-4.5 h-4.5 text-champagne-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-lg text-ivory mb-1">Returning Client</h3>
                    <p className="text-ivory/45 text-[13px] font-light mb-4">Welcome back.</p>
                    <span className="inline-flex items-center gap-1.5 text-champagne-light text-[12px] font-light group-hover:gap-2.5 transition-all duration-300">
                      Book now
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </AnimatedSection>

            {/* Quick actions */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { label: "Massage", desc: "From $45", href: contactInfo.booking.main, ext: true, icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
                  { label: "Skincare", desc: "From $85", href: contactInfo.booking.main, ext: true, icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Gift Cards", desc: "Any amount", href: contactInfo.booking.giftCard, ext: true, icon: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21" },
                  { label: "Call / Text", desc: "919-624-9864", href: `tel:${contactInfo.phoneRaw}`, ext: false, icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.ext ? "_blank" : undefined}
                    rel={item.ext ? "noopener noreferrer" : undefined}
                    className="group flex flex-col items-center gap-1.5 bg-warm-white hover:bg-fog/80 border border-fog/50 hover:border-sage/20 rounded-xl py-5 px-3 transition-all duration-300 touch-manipulation"
                  >
                    <svg className="w-5 h-5 text-sage/70 group-hover:text-sage-dark transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="text-[12px] text-charcoal/70 font-medium tracking-wide">{item.label}</span>
                    <span className="text-[10px] text-charcoal/35 font-light">{item.desc}</span>
                  </a>
                ))}
              </div>
            </AnimatedSection>

            {/* Dual appointment note */}
            <AnimatedSection delay={0.25}>
              <p className="text-charcoal/35 text-[12px] font-light text-center leading-relaxed">
                Need both massage and skincare?{" "}
                <a href={`tel:${contactInfo.phoneRaw}`} className="text-sage hover:text-sage-dark underline underline-offset-2 transition-colors">
                  Call or text {contactInfo.phone}
                </a>
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
