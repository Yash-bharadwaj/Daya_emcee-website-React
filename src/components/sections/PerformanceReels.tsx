"use client";

import { motion } from "motion/react";
import { BackgroundBeams } from "../ui/background-beams";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

function LazyVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
        }
      },
      { rootMargin: "240px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !shouldLoad) return;
    v.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <div ref={wrapRef} className="aspect-[9/16] h-96 w-auto">
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="none"
      />
    </div>
  );
}

export function PerformanceReels() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      setTimeout(checkScrollability, 300);
    }
  };

  useEffect(() => {
    // Check scrollability after a short delay to ensure container is rendered
    const timer = setTimeout(() => {
      checkScrollability();
    }, 100);
    
    window.addEventListener('resize', checkScrollability);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScrollability);
    };
  }, []);

  const reels = [
    {
      id: 1,
      video: "/DayaEmcee/videos/video1.mp4",
    },
    {
      id: 2,
      video: "/DayaEmcee/videos/video2.mp4",
    },
    {
      id: 3,
      video: "/DayaEmcee/videos/video3.mp4",
    },
    {
      id: 4,
      video: "/DayaEmcee/videos/video4.mp4",
    },
    {
      id: 5,
      video: "/DayaEmcee/videos/video5.mp4",
    },
    {
      id: 6,
      video: "/DayaEmcee/videos/video6.mp4",
    },
    {
      id: 7,
      video: "/DayaEmcee/videos/video7.mp4",
    },
    {
      id: 8,
      video: "/DayaEmcee/videos/video8.mp4",
    },
  ];

  return (
    <section id="reels" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams />
      
      {/* Additional Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-slate-950 to-slate-950 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Performance Reels
          </h2>
          <div className="w-24 h-1 gradient-daya mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Watch Emcee Daya in action - bringing 
            <span className="text-[#fdbb2d] font-semibold"> energy and excitement</span> to every event
          </p>
        </motion.div>

        {/* Performance Reels - Scrollable with Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 relative"
        >
          <div className="relative">
            {/* Left Navigation Button */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full gradient-daya text-white shadow-2xl transition-all duration-300 ${
                canScrollLeft 
                  ? 'opacity-100 hover:scale-110 cursor-pointer' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full gradient-daya text-white shadow-2xl transition-all duration-300 ${
                canScrollRight 
                  ? 'opacity-100 hover:scale-110 cursor-pointer' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              onScroll={checkScrollability}
              className="overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex space-x-6 px-2 md:px-4" style={{ width: 'max-content' }}>
                {reels.map((reel) => (
                  <div key={reel.id} className="shrink-0">
                    <div className="overflow-hidden rounded-lg border-2 border-transparent gradient-daya p-[2px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className="rounded-lg overflow-hidden bg-slate-800/50 h-full">
                        <LazyVideo
                          src={reel.video}
                          className="h-full w-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg md:text-xl text-slate-300 mb-6">
            Experience the energy that makes every event 
            <span className="gradient-daya-text font-bold"> unforgettable</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
} 