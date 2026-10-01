import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring physics for smooth follower motion
  const springConfig = { damping: 28, stiffness: 450, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Detect clickable elements to expand cursor
    const handleElementHover = (e) => {
      const target = e.target
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousemove', handleElementHover)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousemove', handleElementHover)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible, cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      {/* Outer subtle follower ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-white/30 mix-blend-difference"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 36 : 22,
          height: isHovered ? 36 : 22,
          transition: 'width 0.2s ease-out, height 0.2s ease-out, border-color 0.2s ease-out',
        }}
      />
      {/* Center solid circle dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-white mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 6 : 5,
          height: isHovered ? 6 : 5,
        }}
      />
    </>
  )
}
