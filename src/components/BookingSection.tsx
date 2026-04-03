"use client";

import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/data/contact";

export default function BookingSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory" id="booking">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <div className="section-divider" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal mb-3">
              Book Your Session
            </h2>
            <p className="text-charcoal/50 text-[15px] font-light max-w-md mx-auto leading-relaxed">
              Choose the path that fits you best and book in just a few steps.
            </p>
          </div>
        </AnimatedSection>

        {/* New / Returning Client Cards */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-2xl mx-auto mb-10">
            {/* New Client */}
            <a
              href={contactInfo.booking.newClient}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-charcoal rounded-2xl p-7 md:p-9 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 active:shadow-lg touch-manipulation"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sage/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-ivory mb-1.5">New Client</h3>
                <p className="text-ivory/45 text-sm font-light">
                  First time visiting? Welcome.
                </p>
              </div>
            </a>

            {/* Returning Client */}
            <a
              href={contactInfo.booking.returningClient}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-charcoal rounded-2xl p-7 md:p-9 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 active:shadow-lg touch-manipulation"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-champagne/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-champagne/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-champagne-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-ivory mb-1.5">Returning Client</h3>
                <p className="text-ivory/45 text-sm font-light">
                  Welcome back. Book your next session.
                </p>
              </div>
            </a>
          </div>
        </AnimatedSection>

        {/* Quick Booking Options */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              {
                label: "Massage",
                href: contactInfo.booking.main,
                external: true,
                icon: (
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
              },
              {
                label: "Skincare",
                href: contactInfo.booking.main,
                external: true,
                icon: (
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                ),
              },
              {
                label: "Gift Cards",
                href: contactInfo.booking.giftCard,
                external: true,
                icon: (
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                ),
              },
              {
                label: "Call or Text",
                href: `tel:${contactInfo.phoneRaw}`,
                external: false,
                icon: (
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-2.5 bg-fog/40 hover:bg-fog active:bg-fog rounded-xl py-5 px-4 transition-all duration-300 touch-manipulation"
              >
                <span className="text-sage group-hover:text-sage-dark transition-colors">
                  {item.icon}
                </span>
                <span className="text-[13px] text-charcoal/70 font-light tracking-wide">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Dual appointment note */}
        <AnimatedSection delay={0.2}>
          <p className="text-center text-charcoal/40 text-[13px] font-light mt-8 max-w-md mx-auto leading-relaxed">
            Need to schedule both massage and skincare in one visit?{" "}
            <a href={`tel:${contactInfo.phoneRaw}`} className="text-sage hover:text-sage-dark underline underline-offset-2 transition-colors">
              Call or text {contactInfo.phone}
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
