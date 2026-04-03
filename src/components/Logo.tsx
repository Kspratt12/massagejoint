"use client";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "#2C2C2C" : "#FAF8F5";
  const accentColor = "#8B9E8B";

  return (
    <svg
      viewBox="0 0 280 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="The Massage Joint"
    >
      {/* Leaf accent mark */}
      <ellipse cx="14" cy="25" rx="4" ry="12" fill={accentColor} opacity="0.3" transform="rotate(-15 14 25)" />
      <ellipse cx="14" cy="25" rx="2.5" ry="10" fill={accentColor} opacity="0.5" transform="rotate(-15 14 25)" />

      {/* THE */}
      <text
        x="28"
        y="22"
        fontFamily="'Inter', sans-serif"
        fontSize="10"
        fontWeight="400"
        letterSpacing="3"
        fill={textColor}
        opacity="0.7"
      >
        THE
      </text>

      {/* MASSAGE JOINT */}
      <text
        x="28"
        y="40"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="22"
        fontWeight="500"
        letterSpacing="1.5"
        fill={textColor}
      >
        Massage Joint
      </text>

      {/* Subtle underline accent */}
      <line x1="28" y1="44" x2="185" y2="44" stroke={accentColor} strokeWidth="0.75" opacity="0.4" />
    </svg>
  );
}
