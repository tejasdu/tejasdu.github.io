import React, { useEffect, useRef } from 'react'

export default function StarfieldEffect({ starColor = '#ffffff' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const numStars = 150
    const stars = []

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5,
        radius: Math.random() * 1.5 + 0.5,
        baseAlpha: Math.random() * 0.7 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2
      })
    }

    let time = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      time += 0.015

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        star.y -= star.z * 0.25
        if (star.y < 0) {
          star.y = height
          star.x = Math.random() * width
        }

        const twinkle = Math.sin(time * star.twinkleSpeed * 50 + star.twinkleOffset)
        const alpha = Math.max(0.1, Math.min(1, star.baseAlpha + twinkle * 0.25))

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * star.z * 0.7, 0, Math.PI * 2)
        ctx.fillStyle = starColor
        ctx.globalAlpha = alpha
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [starColor])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: 0.9 }}
    />
  )
}
