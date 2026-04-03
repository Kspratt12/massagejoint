"use client";

import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/data/contact";

export default function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-white" id="contact">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-14">
            <div className="section-divider" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal mb-3">
              Location &amp; Contact
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <AnimatedSection>
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[350px] rounded-2xl overflow-hidden bg-fog">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5!2d-78.8503!3d35.7327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf3155b46e30d%3A0x5e7e06bcbb8a0c90!2s106%20W%20Chatham%20St%2C%20Apex%2C%20NC%2027502!5e0!3m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Massage Joint Location"
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className="bg-ivory rounded-2xl p-8 md:p-10 h-full flex flex-col justify-center border border-fog/60">
              <h3 className="font-serif text-2xl text-charcoal mb-8">Get in Touch</h3>

              <div className="space-y-6">
                {/* Address */}
                <a
                  href={contactInfo.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal mb-0.5">Address</p>
                    <p className="text-sm text-charcoal/60 font-light group-hover:text-sage transition-colors">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal mb-0.5">Phone</p>
                    <p className="text-sm text-charcoal/60 font-light group-hover:text-sage transition-colors">
                      {contactInfo.phone}
                    </p>
                    <p className="text-xs text-charcoal/40 font-light mt-0.5">Call or text anytime</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal mb-0.5">Email</p>
                    <p className="text-sm text-charcoal/60 font-light group-hover:text-sage transition-colors">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-sage" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal mb-0.5">Instagram</p>
                    <p className="text-sm text-charcoal/60 font-light group-hover:text-sage transition-colors">
                      {contactInfo.instagramHandle}
                    </p>
                  </div>
                </a>
              </div>

              {/* Dual appointment note */}
              <div className="mt-8 pt-6 border-t border-fog">
                <p className="text-sm text-charcoal/50 font-light leading-relaxed">
                  <span className="text-charcoal/70 font-medium">Dual Appointments:</span>{" "}
                  {contactInfo.dualAppointmentNote}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
