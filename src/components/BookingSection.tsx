"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/data/contact";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function MiniCalendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [view, setView] = useState<"month" | "week">("month");

  const daysInMonth = useMemo(() => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  }, [currentMonth, currentYear]);

  const firstDayOfMonth = useMemo(() => {
    return new Date(currentYear, currentMonth, 1).getDay();
  }, [currentMonth, currentYear]);

  const currentWeekStart = useMemo(() => {
    const d = selectedDate || today.getDate();
    const date = new Date(currentYear, currentMonth, d);
    const day = date.getDay();
    return d - day;
  }, [selectedDate, currentMonth, currentYear, today]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const isToday = (day: number) => {
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
  };

  const isPast = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  };

  const handleDateClick = (day: number) => {
    if (isPast(day)) return;
    setSelectedDate(day);
  };

  const handleBook = () => {
    window.open(contactInfo.booking.main, "_blank");
  };

  const weekDays = useMemo(() => {
    const days: (number | null)[] = [];
    for (let i = 0; i < 7; i++) {
      const d = currentWeekStart + i;
      if (d >= 1 && d <= daysInMonth) {
        days.push(d);
      } else {
        days.push(null);
      }
    }
    return days;
  }, [currentWeekStart, daysInMonth]);

  return (
    <div className="bg-warm-white rounded-2xl border border-fog/60 p-5 md:p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <button onClick={prevMonth} className="w-8 h-8 rounded-full hover:bg-fog flex items-center justify-center transition-colors touch-manipulation">
          <svg className="w-4 h-4 text-charcoal/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="text-center">
          <p className="font-serif text-lg text-charcoal">{MONTHS[currentMonth]} {currentYear}</p>
        </div>
        <button onClick={nextMonth} className="w-8 h-8 rounded-full hover:bg-fog flex items-center justify-center transition-colors touch-manipulation">
          <svg className="w-4 h-4 text-charcoal/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* View toggle */}
      <div className="flex gap-1 bg-fog/40 rounded-lg p-0.5 mb-4">
        <button
          onClick={() => setView("month")}
          className={`flex-1 py-1.5 text-[11px] tracking-wide rounded-md transition-all touch-manipulation ${
            view === "month" ? "bg-white text-charcoal shadow-sm" : "text-charcoal/50 hover:text-charcoal/70"
          }`}
        >
          Month
        </button>
        <button
          onClick={() => setView("week")}
          className={`flex-1 py-1.5 text-[11px] tracking-wide rounded-md transition-all touch-manipulation ${
            view === "week" ? "bg-white text-charcoal shadow-sm" : "text-charcoal/50 hover:text-charcoal/70"
          }`}
        >
          Week
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] text-charcoal/35 font-light tracking-wider uppercase py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentMonth}-${view}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          {view === "month" ? (
            <div className="grid grid-cols-7 gap-y-1">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const past = isPast(day);
                const todayDay = isToday(day);
                const selected = selectedDate === day;
                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    disabled={past}
                    className={`aspect-square rounded-full flex items-center justify-center text-[13px] transition-all duration-200 touch-manipulation ${
                      selected
                        ? "bg-sage text-ivory font-medium"
                        : todayDay
                        ? "bg-sage/15 text-sage-dark font-medium ring-1 ring-sage/30"
                        : past
                        ? "text-charcoal/20 cursor-default"
                        : "text-charcoal/70 hover:bg-fog cursor-pointer"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-7 gap-1">
              {weekDays.map((day, i) => {
                if (day === null) return <div key={i} className="aspect-square" />;
                const past = isPast(day);
                const todayDay = isToday(day);
                const selected = selectedDate === day;
                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    disabled={past}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-200 touch-manipulation ${
                      selected
                        ? "bg-sage text-ivory"
                        : todayDay
                        ? "bg-sage/15 text-sage-dark ring-1 ring-sage/30"
                        : past
                        ? "text-charcoal/20 cursor-default"
                        : "text-charcoal/70 hover:bg-fog cursor-pointer"
                    }`}
                  >
                    <span className="text-base font-medium">{day}</span>
                  </button>
                );
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Book button */}
      <button
        onClick={handleBook}
        className={`w-full mt-5 py-3 rounded-full text-[14px] font-light tracking-wide transition-all duration-300 touch-manipulation ${
          selectedDate
            ? "bg-sage hover:bg-sage-dark text-ivory shadow-sm"
            : "bg-charcoal hover:bg-charcoal-light text-ivory"
        }`}
      >
        {selectedDate
          ? `Book for ${MONTHS[currentMonth]} ${selectedDate}`
          : "Select a date to book"
        }
      </button>
    </div>
  );
}

export default function BookingSection() {
  return (
    <section className="py-14 md:py-20 bg-ivory" id="booking">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left: Client type + quick actions */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-4">
              {/* New / Returning Client Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={contactInfo.booking.newClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-charcoal rounded-xl p-6 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 touch-manipulation"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sage/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-sage/15 flex items-center justify-center">
                      <svg className="w-4.5 h-4.5 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-base text-ivory mb-1">New Client</h3>
                    <p className="text-ivory/40 text-[12px] font-light">First visit? Start here.</p>
                  </div>
                </a>

                <a
                  href={contactInfo.booking.returningClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-charcoal rounded-xl p-6 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 touch-manipulation"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-champagne/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-champagne/15 flex items-center justify-center">
                      <svg className="w-4.5 h-4.5 text-champagne-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-base text-ivory mb-1">Returning Client</h3>
                    <p className="text-ivory/40 text-[12px] font-light">Book your next session.</p>
                  </div>
                </a>
              </div>

              {/* Quick service selection */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: "Massage", href: contactInfo.booking.main, ext: true, icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
                  { label: "Skincare", href: contactInfo.booking.main, ext: true, icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Gift Cards", href: contactInfo.booking.giftCard, ext: true, icon: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21" },
                  { label: "Call / Text", href: `tel:${contactInfo.phoneRaw}`, ext: false, icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.ext ? "_blank" : undefined}
                    rel={item.ext ? "noopener noreferrer" : undefined}
                    className="group flex flex-col items-center gap-2 bg-fog/30 hover:bg-fog rounded-xl py-4 px-3 transition-all duration-300 touch-manipulation"
                  >
                    <svg className="w-4 h-4 text-sage group-hover:text-sage-dark transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="text-[11px] text-charcoal/60 font-light tracking-wide">{item.label}</span>
                  </a>
                ))}
              </div>

              {/* Dual appointment note */}
              <p className="text-charcoal/35 text-[12px] font-light text-center leading-relaxed pt-1">
                Need both massage and skincare?{" "}
                <a href={`tel:${contactInfo.phoneRaw}`} className="text-sage hover:text-sage-dark underline underline-offset-2 transition-colors">
                  Call or text {contactInfo.phone}
                </a>
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Interactive Calendar */}
          <AnimatedSection delay={0.2}>
            <MiniCalendar />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
