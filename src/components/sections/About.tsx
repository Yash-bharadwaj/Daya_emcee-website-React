"use client";

import { motion } from "motion/react";
import { scrollRevealViewport } from "@/lib/motion-presets";
import { BackgroundBeams } from "../ui/background-beams";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams />
      
      {/* Additional Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={scrollRevealViewport}
            className="relative flex items-center justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden gradient-daya p-[2px] max-w-md mx-auto">
              <div className="rounded-3xl overflow-hidden bg-slate-800">
                <img
                  src="/DayaEmcee/images/image25.jpeg"
                  alt="Emcee Daya"
                  className="w-full h-auto object-cover rounded-3xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={scrollRevealViewport}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                About <span className="gradient-daya-text-bright">Emcee Daya</span>
              </h2>
              <div className="w-24 h-1 gradient-daya mb-6"></div>
            </div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                With a passion for creating unforgettable moments, <span className="text-[#fdbb2d] font-semibold">Emcee Daya</span> brings energy, professionalism, and charisma to every event. Based in <span className="text-[#fdbb2d] font-semibold">Hyderabad</span>, Daya has been hosting events since 2024, quickly establishing himself as one of the most sought-after emcees in the region.
              </p>
              <p>
                Specializing in weddings, corporate events, cultural celebrations, and private parties, Emcee Daya understands that every event is unique. His ability to connect with audiences, manage event flow seamlessly, and keep the energy high throughout makes him the perfect choice for your special occasion.
              </p>
              <p>
                Whether it's a grand wedding reception, an intimate engagement party, or a corporate product launch, Emcee Daya brings professionalism, enthusiasm, and an unwavering commitment to making your event truly memorable.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <div className="text-2xl font-bold gradient-daya-text mb-2">100+</div>
                <div className="text-sm text-slate-400">Events Hosted</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <div className="text-2xl font-bold gradient-daya-text mb-2">2024</div>
                <div className="text-sm text-slate-400">Since</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

