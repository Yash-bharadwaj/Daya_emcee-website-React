import React, { useState, useEffect } from 'react'

interface Testimonial {
  quote: string
  name: string
  designation: string
  src: string
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  autoplayDelay?: number
}

export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials,
  autoplay = true,
  autoplayDelay = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsAnimating(false)
      }, 250)
    }, autoplayDelay)

    return () => clearInterval(interval)
  }, [autoplay, autoplayDelay, testimonials.length])

  const currentTestimonial = testimonials[currentIndex]

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsAnimating(false)
      }, 250)
    }
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className={`text-center space-y-6 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
          "{currentTestimonial.quote}"
        </blockquote>
        
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
            {currentTestimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
            <p className="text-sm text-muted-foreground">{currentTestimonial.designation}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary scale-125'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
} 