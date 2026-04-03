"use client";

import Logo from "./Logo";
import { contactInfo } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo className="h-10 w-auto mb-5" variant="light" />
            <p className="text-sm leading-relaxed text-ivory/60 max-w-xs">
              Massage, skincare, and restorative care in the heart of downtown Apex, North Carolina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ivory text-sm font-sans font-medium tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Our Team", href: "#team" },
                { label: "Reviews", href: "#reviews" },
                { label: "Contact", href: "#contact" },
                { label: "Book Appointment", href: contactInfo.booking.main, external: true },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-ivory/60 hover:text-ivory transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-ivory text-sm font-sans font-medium tracking-wider uppercase mb-5">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "Swedish Massage",
                "Deep Tissue",
                "Prenatal Massage",
                "Custom Facials",
                "Dermaplaning",
                "Lash Lift & Tint",
              ].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="text-sm text-ivory/60 hover:text-ivory transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ivory text-sm font-sans font-medium tracking-wider uppercase mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-ivory/60">
              <a
                href={contactInfo.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors duration-300"
              >
                {contactInfo.address.street}
                <br />
                {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
              </a>
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="hover:text-ivory transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-ivory transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                {contactInfo.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ivory/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">
            &copy; {new Date().getFullYear()} {contactInfo.businessName}. All rights reserved.
          </p>
          <p className="text-xs text-ivory/40">
            {contactInfo.address.city}, {contactInfo.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
