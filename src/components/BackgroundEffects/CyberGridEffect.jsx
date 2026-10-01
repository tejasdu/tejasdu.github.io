import React, { useEffect, useRef } from 'react'

export default function CyberGridEffect({ gridColor = '#06b6d4' }) {
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

    let offset = 0
    const horizon = height * 0.45
    const fov = 300

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      offset = (offset + 0.5) % 40

      ctx.save()

      // Horizontal lines with perspective
      for (let z = 40 - offset; z < 800; z += 35) {
        const y = horizon + (fov / (z + 100)) * (height - horizon)
        if (y > height) break

        const alpha = Math.min(1, Math.max(0, (y - horizon) / (height - horizon))) * 0.25
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.strokeStyle = gridColor
        ctx.globalAlpha = alpha
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Vertical perspective lines
      const numLines = 24
      for (let i = -numLines; i <= numLines; i++) {
        const xOffset = (i * width) / (numLines * 1.5)
        ctx.beginPath()
        ctx.moveTo(width / 2 + xOffset * 0.05, horizon)
        ctx.lineTo(width / 2 + xOffset * 2.5, height)
        ctx.strokeStyle = gridColor
        ctx.globalAlpha = 0.15
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Horizon glow line
      const grad = ctx.createLinearGradient(0, horizon - 2, 0, horizon + 30)
      grad.addColorStop(0, gridColor)
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.globalAlpha = 0.15
      ctx.fillRect(0, horizon, width, 40)

      ctx.restore()
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [gridColor])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: 0.8 }}
    />
  )
}
