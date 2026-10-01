import React, { useEffect, useRef } from 'react'

export default function DottedMapSideEffect() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Map dots data generated from simplified world continents
    // Scaled to sit subtly on the right side of the viewport
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Simplified continental point clusters [normX (0..1), normY (0..1)]
    // Concentrated on world landmasses
    const rawLandmassCenters = [
      // North America (East & West)
      { x: 0.18, y: 0.28, rx: 0.12, ry: 0.14, density: 40 },
      // Europe
      { x: 0.52, y: 0.24, rx: 0.08, ry: 0.09, density: 30 },
      // East Asia
      { x: 0.78, y: 0.32, rx: 0.14, ry: 0.14, density: 45 },
      // South Asia / India
      { x: 0.68, y: 0.42, rx: 0.06, ry: 0.08, density: 20 },
      // South America
      { x: 0.28, y: 0.68, rx: 0.07, ry: 0.16, density: 25 },
      // Africa
      { x: 0.52, y: 0.54, rx: 0.09, ry: 0.16, density: 35 },
      // Australia
      { x: 0.85, y: 0.75, rx: 0.08, ry: 0.09, density: 20 },
    ]

    // Generate dotted points
    const points = []
    rawLandmassCenters.forEach((land) => {
      for (let i = 0; i < land.density; i++) {
        const angle = Math.random() * Math.PI * 2
        const r = Math.sqrt(Math.random())
        const px = land.x + Math.cos(angle) * r * land.rx
        const py = land.y + Math.sin(angle) * r * land.ry

        points.push({
          relX: px,
          relY: py,
          baseAlpha: Math.random() * 0.15 + 0.05,
          twinkle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.01 + 0.005
        })
      }
    })

    // Also add subtle matrix grid dots along the right edge
    const edgeDots = []
    const cols = 8
    const rows = 35
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        edgeDots.push({
          col: c,
          row: r,
          alpha: Math.max(0.01, (1 - c / cols) * 0.08)
        })
      }
    }

    let time = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      time += 0.02

      // Only draw on the right half/side of the screen so it stays subtly on the margin
      // Target area: right side, from center right to edge
      const mapWidth = Math.min(width * 0.65, 540)
      const mapHeight = mapWidth * 0.6
      const startX = width - mapWidth * 0.85 // offset so it bleeds off the right edge
      const startY = height * 0.15

      // 1. Draw World Map Dotted Points
      ctx.fillStyle = '#ffffff'
      points.forEach((pt) => {
        const x = startX + pt.relX * mapWidth
        const y = startY + pt.relY * mapHeight

        // Don't draw if it spills too far left into main text column
        if (x < width * 0.45) return

        const currentAlpha = pt.baseAlpha + Math.sin(time + pt.twinkle) * 0.03
        ctx.globalAlpha = Math.max(0.02, Math.min(0.25, currentAlpha))
        ctx.beginPath()
        ctx.arc(x, y, 1.25, 0, Math.PI * 2)
        ctx.fill()
      })

      // 2. Pulsing Pin Node on Location (e.g. US / Home Node)
      const pinX = startX + 0.22 * mapWidth
      const pinY = startY + 0.29 * mapHeight

      if (pinX > width * 0.45) {
        // Outer ping ripple
        const rippleSize = (time * 15) % 24
        const rippleAlpha = Math.max(0, (1 - rippleSize / 24) * 0.4)
        ctx.strokeStyle = '#38bdf8'
        ctx.globalAlpha = rippleAlpha
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(pinX, pinY, rippleSize, 0, Math.PI * 2)
        ctx.stroke()

        // Center bright dot
        ctx.fillStyle = '#38bdf8'
        ctx.globalAlpha = 0.85
        ctx.beginPath()
        ctx.arc(pinX, pinY, 2.5, 0, Math.PI * 2)
        ctx.fill()
      }

      // 3. Faint Vertical Edge Grid Dots (right side margin accent)
      const gridRight = width - 24
      edgeDots.forEach((d) => {
        const gx = gridRight - d.col * 16
        const gy = height * 0.08 + d.row * 22

        ctx.fillStyle = '#ffffff'
        ctx.globalAlpha = d.alpha
        ctx.beginPath()
        ctx.arc(gx, gy, 0.8, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas for dotted world map & right edge grid */}
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-80 transition-opacity duration-1000"
      />

      {/* Subtle Right-Edge Technical Coordinate Badge */}
      <div className="hidden xl:flex fixed right-4 bottom-8 flex-col items-end gap-1 font-mono text-[9px] text-zinc-700 tracking-widest select-none pointer-events-none">
        <span>LOC // 37°46'N 122°25'W</span>
        <span className="text-zinc-600">SYS // ONLINE • SWE 2026</span>
      </div>
    </div>
  )
}
