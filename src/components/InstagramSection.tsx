"use client";

import { useRef, useState, useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import { contactInfo } from "@/data/contact";

interface ReelData {
  id: string;
  caption: string;
  account?: string;
  localVideo?: string;
}

const instagramReels: ReelData[] = [
  {
    id: "DF3pMz1v0Xd",
    caption: "Behind the scenes at The Massage Joint",
    localVideo: "/videos/reel-1.mp4",
  },
  {
    id: "DKZ74XAxJ9u",
    caption: "Treatment highlights",
    localVideo: "/videos/reel-2.mp4",
  },
  {
    id: "DVkRMvVjeuz",
    caption: "Wellness moments",
    localVideo: "/videos/reel-3.mp4",
  },
  {
    id: "DVmxW8eDIpz",
    caption: "Emily Eva Esthetics",
    account: "emilyevaesthetics",
    localVideo: "/videos/reel-4.mp4",
  },
  {
    id: "DUzRA4djZ28",
    caption: "Relaxation at its finest",
    localVideo: "/videos/reel-5.mp4",
  },
  {
    id: "DVFcOKsDUTF",
    caption: "Skincare expertise",
    localVideo: "/videos/reel-6.mp4",
  },
];

function NativeReelVideo({ reel }: { reel: ReelData }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const account = reel.account || "themassagejointapex";
  const reelUrl = `https://www.instagram.com/${account}/reel/${reel.id}/`;

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  return (
    <div className="aspect-[9/16] rounded-xl overflow-hidden bg-charcoal relative group">
      <video
        ref={videoRef}
        src={reel.localVideo}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Play overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-charcoal/20"
          onClick={togglePlay}
        >
          <div className="w-12 h-12 rounded-full bg-charcoal/50 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-5 h-5 text-ivory ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Mute button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-charcoal/50 backdrop-blur-sm flex items-center justify-center touch-manipulation z-10"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg className="w-3.5 h-3.5 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* IG link */}
      <a
        href={reelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-charcoal/50 backdrop-blur-sm flex items-center justify-center touch-manipulation z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="View on Instagram"
        onClick={(e) => e.stopPropagation()}
      >
        <svg className="w-3.5 h-3.5 text-ivory" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
        </svg>
      </a>

      {/* Reel label */}
      <div className="absolute top-2 left-2 flex items-center gap-1 bg-charcoal/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
        <svg className="w-2.5 h-2.5 text-ivory" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
        </svg>
        <span className="text-[9px] text-ivory font-light">Reel</span>
      </div>
    </div>
  );
}

function EmbedReelVideo({ reel }: { reel: ReelData }) {
  const [loaded, setLoaded] = useState(false);
  const account = reel.account || "themassagejointapex";
  const reelUrl = `https://www.instagram.com/${account}/reel/${reel.id}/`;
  const embedUrl = `https://www.instagram.com/reel/${reel.id}/embed/`;

  return (
    <div className="aspect-[9/16] rounded-xl overflow-hidden bg-fog relative group">
      <iframe
        src={embedUrl}
        className="w-full h-full border-0"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
        title={reel.caption}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />

      {!loaded && (
        <div className="absolute inset-0 bg-fog flex flex-col items-center justify-center gap-3">
          <svg className="w-8 h-8 text-sage/40 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
          </svg>
          <span className="text-xs text-charcoal/30 font-light">Loading...</span>
        </div>
      )}

      <a
        href={reelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-3 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2"
        aria-label={`Open on Instagram`}
      >
        <svg className="w-4 h-4 text-ivory" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
        </svg>
        <span className="text-ivory text-xs font-light">View on Instagram</span>
      </a>
    </div>
  );
}

export default function InstagramSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <AnimatedSection>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-6 h-6 text-sage" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <p className="text-sage text-sm tracking-[0.2em] uppercase font-light">
                Follow Along
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
              On Instagram
            </h2>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/60 text-base font-light hover:text-sage transition-colors"
            >
              {contactInfo.instagramHandle}
            </a>
          </div>
        </AnimatedSection>

        {/* Instagram Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramReels.map((reel, i) => (
            <AnimatedSection key={reel.id} delay={i * 0.05}>
              {reel.localVideo ? (
                <NativeReelVideo reel={reel} />
              ) : (
                <EmbedReelVideo reel={reel} />
              )}
            </AnimatedSection>
          ))}
        </div>

        {/* Follow CTA */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-10">
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light active:bg-charcoal-light text-ivory px-8 py-3 rounded-full text-sm font-light tracking-wide transition-colors duration-300 touch-manipulation"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              </svg>
              Follow {contactInfo.instagramHandle}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
