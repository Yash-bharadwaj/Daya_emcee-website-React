import React from 'react'
import { cn } from '@/lib/utils'

interface HeroHighlightProps {
  children: React.ReactNode
  className?: string
}

export const HeroHighlight: React.FC<HeroHighlightProps> = ({ children, className }) => {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="relative z-20 animate-fadeIn">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 dark:from-primary/10 dark:to-accent/10" />
    </div>
  )
}

interface TextRevealProps {
  text: string
  className?: string
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className }) => {
  const words = text.split(' ')
  
  return (
    <div className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-2 animate-slideUp"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl filter-none font-black tracking-tight">
            {word}
          </span>
        </span>
      ))}
    </div>
  )
} 