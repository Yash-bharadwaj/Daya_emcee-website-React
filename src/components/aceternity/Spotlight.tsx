import React, { useEffect, useState } from 'react'

interface SpotlightProps {
  className?: string
  size?: number
}

export const Spotlight: React.FC<SpotlightProps> = ({ className, size = 300 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className={`fixed pointer-events-none z-10 transition-all duration-200 ease-out ${className}`}
      style={{
        left: mousePosition.x - size / 2,
        top: mousePosition.y - size / 2,
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(20px)',
      }}
    />
  )
} 