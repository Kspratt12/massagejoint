"use client";

import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/data/contact";

export default function GiftCardSection() {
  return (
    <section className="py-20 md:py-24 bg-linen">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <AnimatedSection>
          <div className="relative bg-charcoal rounded-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-sage rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-champagne rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative px-8 py-14 md:px-16 md:py-20 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-champagne/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-champagne-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-4">
                Give the Gift of Relief
              </h2>
              <p className="text-ivory/60 text-base md:text-lg font-light max-w-lg mx-auto mb-8">
                Share the experience of real rest and recovery. E-gift cards are available for any service and any amount.
              </p>
              <a
                href={contactInfo.booking.giftCard}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-champagne hover:bg-champagne-light text-charcoal px-10 py-4 rounded-full text-base font-light tracking-wider transition-all duration-300"
              >
                Purchase a Gift Card
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
