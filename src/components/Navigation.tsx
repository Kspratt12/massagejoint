"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { contactInfo } from "@/data/contact";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <Logo
                className="h-10 md:h-12 w-auto"
                variant={isScrolled ? "dark" : "light"}
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 hover:opacity-70 ${
                    isScrolled ? "text-charcoal" : "text-ivory"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={contactInfo.booking.main}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage text-ivory text-sm px-6 py-2.5 rounded-full hover:bg-sage-dark active:bg-sage-dark transition-colors duration-300 font-light tracking-wide touch-manipulation"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center touch-manipulation"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block w-6 h-[1.5px] transition-all duration-300 ${
                    isMobileOpen
                      ? "rotate-45 translate-y-[4.5px] bg-ivory"
                      : isScrolled
                      ? "bg-charcoal"
                      : "bg-ivory"
                  }`}
                />
                <span
                  className={`block w-6 h-[1.5px] transition-all duration-300 ${
                    isMobileOpen
                      ? "-rotate-45 -translate-y-[4.5px] bg-ivory"
                      : isScrolled
                      ? "bg-charcoal"
                      : "bg-ivory"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/98 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-ivory text-2xl font-serif tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={contactInfo.booking.main}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 bg-sage text-ivory text-lg px-10 py-3.5 rounded-full hover:bg-sage-dark active:bg-sage-dark transition-colors duration-300 tracking-wide touch-manipulation"
              >
                Book Now
              </motion.a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 flex flex-col items-center gap-2 text-stone text-sm"
              >
                <a href={`tel:${contactInfo.phoneRaw}`} className="hover:text-ivory transition-colors">
                  {contactInfo.phone}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-ivory transition-colors">
                  {contactInfo.email}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
