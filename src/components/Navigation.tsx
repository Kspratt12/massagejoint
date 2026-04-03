"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { contactInfo } from "@/data/contact";

const navLinks = [
  { label: "About", href: "#about" },
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
            ? "bg-ivory/97 backdrop-blur-lg shadow-[0_1px_3px_rgba(0,0,0,0.04)] py-0"
            : "bg-transparent py-1"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex-shrink-0 transition-opacity duration-300 hover:opacity-80 cursor-pointer">
              <Logo variant={isScrolled ? "dark" : "light"} />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] tracking-[0.04em] transition-colors duration-300 hover:opacity-70 ${
                    isScrolled ? "text-charcoal/80 hover:text-charcoal" : "text-ivory/80 hover:text-ivory"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={contactInfo.booking.main}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[13px] px-6 py-2 rounded-full tracking-[0.03em] transition-all duration-300 touch-manipulation ${
                  isScrolled
                    ? "bg-sage text-ivory hover:bg-sage-dark"
                    : "bg-ivory/15 backdrop-blur-sm text-ivory border border-ivory/20 hover:bg-ivory/25"
                }`}
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
              <div className="flex flex-col gap-[5px]">
                <span
                  className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
                    isMobileOpen
                      ? "rotate-45 translate-y-[3.25px] bg-ivory"
                      : isScrolled
                      ? "bg-charcoal"
                      : "bg-ivory"
                  }`}
                />
                <span
                  className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
                    isMobileOpen
                      ? "-rotate-45 -translate-y-[3.25px] bg-ivory"
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
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-ivory/90 text-xl font-serif tracking-wide hover:text-ivory transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="w-8 h-[1px] bg-ivory/15 my-2"
              />

              <motion.a
                href={contactInfo.booking.main}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-sage text-ivory text-base px-10 py-3.5 rounded-full hover:bg-sage-dark active:bg-sage-dark transition-colors duration-300 tracking-wide touch-manipulation"
              >
                Book Now
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex flex-col items-center gap-2 text-ivory/40 text-sm"
              >
                <a href={`tel:${contactInfo.phoneRaw}`} className="hover:text-ivory/70 transition-colors">
                  {contactInfo.phone}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-ivory/70 transition-colors">
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
