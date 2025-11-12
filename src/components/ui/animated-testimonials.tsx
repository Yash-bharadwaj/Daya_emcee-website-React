"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials,
  autoplay = true,
  autoplayDelay = 5000,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, testimonials.length]);

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  if (!testimonials.length) return null;

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center space-y-6"
          >
            {/* Stars Rating */}
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
              "{testimonials[current].quote}"
            </blockquote>

            {/* Author */}
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <div className="text-white font-semibold text-lg">
                  {testimonials[current].name}
                </div>
                <div className="text-slate-400 text-sm">
                  {testimonials[current].designation}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/50 border border-slate-600/50 text-white hover:bg-slate-700/50 transition-colors duration-200 flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/50 border border-slate-600/50 text-white hover:bg-slate-700/50 transition-colors duration-200 flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === current
                ? "bg-cyan-400 w-8"
                : "bg-slate-600 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}; 