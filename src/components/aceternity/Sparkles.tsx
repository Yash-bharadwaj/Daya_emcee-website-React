import React, { useEffect, useState } from 'react'

interface SparkleProps {
  x: number
  y: number
  delay: number
}

const Sparkle: React.FC<SparkleProps> = ({ x, y, delay }) => {
  return (
    <div
      className="absolute w-1 h-1 bg-primary rounded-full animate-sparkle"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        animationDelay: `${delay}s`
      }}
    />
  )
}

interface SparklesProps {
  count?: number
  className?: string
}

export const Sparkles: React.FC<SparklesProps> = ({ count = 20, className }) => {
  const [sparkles, setSparkles] = useState<Array<{ x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }))
      setSparkles(newSparkles)
    }

    generateSparkles()
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {sparkles.map((sparkle, i) => (
        <Sparkle key={i} x={sparkle.x} y={sparkle.y} delay={sparkle.delay} />
      ))}
    </div>
  )
} 