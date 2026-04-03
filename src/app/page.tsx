"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import BookingSection from "@/components/BookingSection";
import AboutSection from "@/components/AboutSection";
import OwnerSection from "@/components/OwnerSection";
import FeaturedServices from "@/components/FeaturedServices";
import ServiceMenu from "@/components/ServiceMenu";
import TeamSection from "@/components/TeamSection";
import WhyBookSection from "@/components/WhyBookSection";
import ReviewsSection from "@/components/ReviewsSection";
import InstagramSection from "@/components/InstagramSection";
import GiftCardSection from "@/components/GiftCardSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TrustBar />
        <BookingSection />
        <AboutSection />
        <OwnerSection />
        <FeaturedServices />
        <ServiceMenu />
        <TeamSection />
        <WhyBookSection />
        <ReviewsSection />
        <InstagramSection />
        <GiftCardSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
