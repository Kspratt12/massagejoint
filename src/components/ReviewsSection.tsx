"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { reviews, reviewStats } from "@/data/reviews";

function GoogleLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewVideo({ src, reviewerName }: { src: string; reviewerName: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      // Auto-hide custom overlay after 2s
      setTimeout(() => setShowControls(false), 2000);
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
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
    <div
      className="mt-4 rounded-xl overflow-hidden relative bg-charcoal/5 cursor-pointer"
      onClick={togglePlay}
      onMouseEnter={() => setShowControls(true)}
      onTouchStart={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        src={src}
        muted={isMuted}
        playsInline
        preload="metadata"
        className="w-full rounded-xl"
        style={{ maxHeight: "240px", objectFit: "cover" }}
        onEnded={() => { setIsPlaying(false); setShowControls(true); }}
        onPause={() => { setIsPlaying(false); setShowControls(true); }}
        onPlay={() => setIsPlaying(true)}
        aria-label={`Video review by ${reviewerName}`}
      >
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        {!isPlaying && (
          <div className="w-14 h-14 rounded-full bg-charcoal/60 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-6 h-6 text-ivory ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>

      {/* Mute/Unmute button - always accessible */}
      <button
        onClick={toggleMute}
        className={`absolute bottom-3 right-3 w-9 h-9 rounded-full bg-charcoal/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
          isPlaying || showControls ? "opacity-100" : "opacity-0"
        }`}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg className="w-4 h-4 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* Video label */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-charcoal/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
        <svg className="w-3 h-3 text-ivory" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <span className="text-[10px] text-ivory font-light">Video Review</span>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-ivory" id="reviews">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <div className="section-divider" />
            <div className="flex items-center justify-center gap-3 mb-4">
              <GoogleLogo className="w-7 h-7" />
              <div className="flex items-center gap-2">
                <StarRating rating={5} />
                <span className="text-charcoal font-medium">{reviewStats.averageRating}</span>
              </div>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal mb-2">
              What Our Clients Say
            </h2>
            <p className="text-charcoal/50 text-[15px] font-light">
              {reviewStats.totalReviews} reviews on Google
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedReviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={i * 0.05}>
              <div className="bg-warm-white rounded-xl p-6 border border-fog/60 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sage-dark text-sm font-medium">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-medium text-charcoal truncate">
                        {review.name}
                      </h4>
                      {review.badge && (
                        <span className="text-[10px] text-sage bg-sage/10 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                          {review.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <StarRating rating={review.rating} />
                      <span className="text-xs text-charcoal/40">{review.timeAgo}</span>
                    </div>
                  </div>
                  <GoogleLogo className="w-4 h-4 flex-shrink-0 mt-1" />
                </div>

                {/* Price tag */}
                {review.priceTag && (
                  <span className="inline-flex self-start text-xs text-sage-dark bg-sage/10 px-2.5 py-1 rounded-full mb-3">
                    {review.priceTag}
                  </span>
                )}

                {/* Review text */}
                <p className="text-charcoal/70 text-sm font-light leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Photos */}
                {review.hasPhotos && review.photos && (
                  <div className="flex gap-2 mt-4">
                    {review.photos.map((photo, j) => (
                      <button
                        key={j}
                        onClick={() => setLightboxImage(photo)}
                        className="w-16 h-16 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 active:opacity-70 transition-opacity touch-manipulation"
                        aria-label={`View photo ${j + 1} by ${review.name}`}
                      >
                        <img
                          src={photo}
                          alt={`Review photo by ${review.name}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Video - fully iPhone compatible */}
                {review.hasVideo && review.videoSrc && (
                  <ReviewVideo src={review.videoSrc} reviewerName={review.name} />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Show more / less */}
        {reviews.length > 6 && (
          <AnimatedSection>
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sage hover:text-sage-dark text-sm font-light tracking-wide underline underline-offset-4 transition-colors duration-300 touch-manipulation py-2 px-4"
              >
                {showAll ? "Show fewer reviews" : `Show all ${reviews.length} reviews`}
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="Review photo"
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-ivory/20 backdrop-blur-sm flex items-center justify-center text-ivory hover:bg-ivory/30 transition-colors touch-manipulation"
              onClick={() => setLightboxImage(null)}
              aria-label="Close image"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
