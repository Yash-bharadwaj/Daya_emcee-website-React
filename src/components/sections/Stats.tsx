"use client";

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'motion/react'
import { TrendingUp, Users, Calendar, Star } from 'lucide-react'

interface Achievement {
  number: number
  label: string
  suffix: string
}

interface StatsData {
  title: string
  subtitle: string
  achievements: Achievement[]
}

interface StatsProps {
  data: StatsData
}

// Counter animation component
const AnimatedCounter: React.FC<{ 
  from: number; 
  to: number; 
  duration?: number;
  suffix?: string;
}> = ({ from, to, duration = 2, suffix = '' }) => {
  const count = useMotionValue(from)
  const rounded = useSpring(count, { duration: duration * 1000 })
  const [displayValue, setDisplayValue] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      count.set(to)
    }
  }, [isInView, count, to])

  useEffect(() => {
    return rounded.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
  }, [rounded])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

const StatCard: React.FC<{ 
  title: string; 
  value: number; 
  suffix?: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  gradient: string;
}> = ({ title, value, suffix, description, icon, delay, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: "easeOut",
        type: "spring",
        bounce: 0.3
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      {/* Glowing background */}
      <div className={`absolute inset-0 ${gradient} opacity-20 group-hover:opacity-40 transition-all duration-500 rounded-2xl blur-xl`}></div>
      
      {/* Card */}
      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-[#fdbb2d]/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 ${gradient} opacity-20 rounded-2xl animate-pulse`}></div>
        </div>
        
        {/* Icon */}
        <motion.div 
          className="relative z-10 mb-6 flex justify-center"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", bounce: 0.6 }}
        >
          <div className={`p-4 rounded-full ${gradient} shadow-2xl`}>
            {icon}
          </div>
        </motion.div>

        {/* Number */}
        <div className="relative z-10 text-center mb-4">
          <motion.div 
            className="text-5xl md:text-6xl font-black gradient-daya-text mb-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <AnimatedCounter from={0} to={value} suffix={suffix || ''} />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white mb-2 text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-slate-400 text-center leading-relaxed">
          {description}
        </p>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#fdbb2d]/30 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export const Stats: React.FC<StatsProps> = ({ data }) => {
  const icons = [
    <TrendingUp className="w-8 h-8 text-white" />,
    <Calendar className="w-8 h-8 text-white" />,
    <Users className="w-8 h-8 text-white" />
  ]
  
  const gradients = [
    "gradient-daya",
    "gradient-daya", 
    "gradient-daya"
  ]

  const descriptions = [
    "Successful events and unforgettable hosting experiences across Hyderabad",
    "Started hosting events in 2024, quickly establishing a reputation for excellence",
    "Satisfied clients who trust our professional emcee services"
  ]

  return (
    <section id="stats" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(253, 187, 45, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(253, 187, 45, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        >
          <motion.div
            animate={{ 
              backgroundPosition: ['0px 0px', '50px 50px'] 
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(253, 187, 45, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(253, 187, 45, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        
        {/* Radial gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fdbb2d]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b21f1f]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#fdbb2d]/10 border border-[#fdbb2d]/20 rounded-full px-6 py-2 mb-6"
          >
            <Star className="w-4 h-4 text-[#fdbb2d]" />
            <span className="text-[#fdbb2d] font-medium">Premium Stats</span>
            <Star className="w-4 h-4 text-[#fdbb2d]" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {data.title.split(' ').slice(0, -1).join(' ')}{" "}
            <span className="gradient-daya-text">
              {data.title.split(' ').slice(-1)}
            </span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 gradient-daya mx-auto mb-6 rounded-full"
          />
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {data.achievements.map((achievement, index) => (
            <StatCard
              key={achievement.label}
              title={achievement.label}
              value={achievement.number}
              suffix={achievement.suffix}
              description={descriptions[index]}
              icon={icons[index]}
              delay={0.2 * (index + 1)}
              gradient={gradients[index]}
            />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Ready to become part of these numbers?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="gradient-daya hover:opacity-90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-2xl backdrop-blur-sm cursor-pointer"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 