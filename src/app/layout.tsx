import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.themassagejointapex.com"),
  title: "The Massage Joint | Massage & Skincare in Apex, NC",
  description:
    "Licensed massage therapy and professional skincare in downtown Apex, North Carolina. Deep tissue, Swedish, prenatal massage, custom facials, dermaplaning, and more. Book online today.",
  keywords:
    "massage apex nc, massage therapy, deep tissue massage, swedish massage, prenatal massage, facial, dermaplaning, skincare, apex north carolina, the massage joint",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The Massage Joint | Massage & Skincare in Apex, NC",
    description:
      "Licensed massage therapy and professional skincare in downtown Apex, North Carolina. Book your session online.",
    url: "https://www.themassagejointapex.com",
    siteName: "The Massage Joint",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero/hero.png",
        width: 1200,
        height: 630,
        alt: "The Massage Joint — Massage & Skincare in Apex, NC",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
