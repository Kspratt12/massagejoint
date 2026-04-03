"use client";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "text-charcoal" : "text-ivory";
  const subColor = variant === "dark" ? "text-charcoal/60" : "text-ivory/60";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Real logo image */}
      <img
        src="/images/logo.png"
        alt="The Massage Joint"
        className="h-9 md:h-10 w-auto object-contain"
      />
      {/* Text alongside logo */}
      <div className="hidden sm:flex flex-col leading-none">
        <span className={`text-[9px] tracking-[0.2em] uppercase font-light ${subColor}`}>
          The
        </span>
        <span className={`text-base md:text-lg font-serif tracking-wide ${textColor} -mt-0.5`}>
          Massage Joint
        </span>
      </div>
    </div>
  );
}
