"use client";
import React from 'react'
import { motion } from "motion/react";
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision'
import { FlipWords } from '../ui/flip-words'
import { Button } from '../ui/button'
import { Instagram, Phone, Mail, Play, Star } from 'lucide-react'

interface HeroData {
  title: string
  subtitle: string
  booking: string
  email: string
  instagram: string
  youtube: string
}

interface HeroProps {
  data: HeroData
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/DayaEmcee/images/image1.1.jpeg" 
          alt="Emcee Daya"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      <BackgroundBeamsWithCollision className="z-10">
        <></>
      </BackgroundBeamsWithCollision>
      
      <div className="relative z-50 max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8 pt-4 sm:pt-0">
        {/* Premium Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center space-x-2 text-[#fdbb2d] text-xs sm:text-sm md:text-base font-medium"
        >
          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current animate-pulse" />
          <span>Professional Emcee Services</span>
          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current animate-pulse" />
        </motion.div>

        {/* Main Heading with Line Highlight Effect */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-tight drop-shadow-2xl px-2"
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              Emcee <span className="relative inline-block gradient-daya-text-bright">Daya
                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{
                    delay: 1,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 left-0 h-0.5 sm:h-1 gradient-daya rounded-full"
                />
                {/* Glow effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.5,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 gradient-daya rounded-full blur-sm opacity-75"
                />
              </span>
            </span>
          </motion.h1>
        </div>

        {/* Subtitle with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="space-y-3 md:space-y-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white max-w-4xl mx-auto leading-relaxed drop-shadow-2xl px-2">
            <span className="text-white inline-flex items-center flex-wrap justify-center lg:justify-start gap-1">
              <FlipWords 
                words={["Energy", "Vibrant", "Dynamic", "Electric", "Powerful", "Energetic"]} 
                duration={2500}
                className="text-white"
              />{" "}
              <FlipWords 
                words={["Moments", "Memories", "Celebrations", "Experiences", "Events", "Magic"]} 
                duration={2500}
                className="text-white"
              />{" "}
              <FlipWords 
                words={["Memories", "Forever", "Unforgettable", "Timeless", "Priceless", "Cherished"]} 
                duration={2500}
                className="text-white"
              />
            </span>
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-2">
            Turn your events into <span className="text-[#fdbb2d] font-semibold">unforgettable experiences</span> with 
            engaging hosting that captivates audiences and creates memorable moments.
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start items-center px-2"
        >
          <Button 
            size="lg" 
            className="group gradient-daya border-0 shadow-2xl text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 h-auto transition-all duration-300 hover:scale-105 hover:opacity-90 w-full sm:w-auto"
            onClick={() => window.open(`tel:${data.booking}`, '_self')}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 group-hover:animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base">Book Your Event: {data.booking}</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-[#fdbb2d]/50 bg-slate-800/50 backdrop-blur-sm text-white hover:bg-[#fdbb2d]/10 hover:border-[#fdbb2d] font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 h-auto shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            onClick={() => window.open(`mailto:${data.email}`, '_self')}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 group-hover:animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base">Let's Collaborate</span>
          </Button>
        </motion.div>

        {/* Social Media Links with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 md:space-x-8"
        >
          <a 
            href={data.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 gradient-daya rounded-full blur-lg sm:blur-xl opacity-60 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            <div className="relative p-3 sm:p-4 md:p-5 rounded-full gradient-daya text-white hover:scale-110 transition-all duration-300 cursor-interactive shadow-2xl">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </div>
          </a>
          
          {/* Demo Reel Button */}
          <a 
            href="#reels" 
            className="group relative"
          >
            <div className="absolute inset-0 gradient-daya rounded-full blur-lg sm:blur-xl opacity-60 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            <div className="relative p-3 sm:p-4 md:p-5 rounded-full gradient-daya text-white hover:scale-110 transition-all duration-300 cursor-interactive shadow-2xl">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </div>
          </a>
        </motion.div>

        {/* Experience Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.1,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-center lg:justify-start items-center text-center lg:text-left max-w-md sm:max-w-lg md:max-w-2xl mx-auto lg:mx-0"
        >
          <div className="flex flex-col items-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black gradient-daya-text">2024</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">Since</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black gradient-daya-text">Hyderabad</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">Location</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black gradient-daya-text">100+</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">Events Hosted</div>
          </div>
        </motion.div>

          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* Image Container with Simple Gradient Border */}
            <div className="relative rounded-3xl overflow-hidden gradient-daya p-[2px] max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden bg-slate-900"
              >
                <img
                  src="/DayaEmcee/images/image1.1.jpeg"
                  alt="Emcee Daya"
                  className="w-full h-auto max-h-[500px] md:max-h-[600px] object-cover rounded-3xl"
                />
              </motion.div>
            </div>

            {/* Floating Particles */}
            {[
              { left: '15%', top: '20%', delay: 0, duration: 2.5, xOffset: -8 },
              { left: '45%', top: '15%', delay: 0.5, duration: 3, xOffset: 10 },
              { left: '75%', top: '25%', delay: 1, duration: 2.8, xOffset: -5 },
              { left: '25%', top: '70%', delay: 0.3, duration: 3.2, xOffset: 12 },
              { left: '60%', top: '75%', delay: 0.8, duration: 2.7, xOffset: -10 },
              { left: '85%', top: '60%', delay: 1.2, duration: 3.1, xOffset: 7 },
            ].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#fdbb2d] rounded-full"
                animate={{
                  y: [0, -20, 0],
                  x: [0, particle.xOffset, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#fdbb2d]/60 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-[#fdbb2d]/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 