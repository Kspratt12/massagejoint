"use client";

import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/data/contact";

export default function GiftCardSection() {
  return (
    <section className="py-14 md:py-18 bg-linen">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <AnimatedSection>
          <div className="relative bg-charcoal rounded-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-sage rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-champagne rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative px-8 py-14 md:px-16 md:py-20 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-ivory/10 flex items-center justify-center ring-1 ring-ivory/[0.08]">
                <img
                  src="/images/logo.png"
                  alt="The Massage Joint"
                  className="w-12 h-12 object-contain"
                />
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
                className="inline-flex bg-champagne hover:bg-champagne-light active:bg-champagne-light text-charcoal px-10 py-4 rounded-full text-base font-light tracking-wider transition-all duration-300 touch-manipulation"
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
