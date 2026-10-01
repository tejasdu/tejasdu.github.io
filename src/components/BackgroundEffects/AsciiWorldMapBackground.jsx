import React, { useEffect, useRef, useState } from 'react'
import { ASCII_WORLD_MAP, PING_LOCATION } from '../../data/asciiMapData'

export default function AsciiWorldMapBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

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

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    const ROWS = ASCII_WORLD_MAP.length // 52
    const COLS = ASCII_WORLD_MAP[0].length // 194

    // Dynamic cartographic glyph set for landmasses
    const LAND_GLYPHS = ['*', '+', '#', '%', 'x', 'o', '=']

    // Precompute cell data for 60fps performance
    const cells = []
    for (let r = 0; r < ROWS; r++) {
      const rowStr = ASCII_WORLD_MAP[r]
      for (let c = 0; c < COLS; c++) {
        const isLand = rowStr[c] === '*'
        if (isLand) {
          // Stable deterministic glyph per coordinate
          const glyphIdx = (r * 37 + c * 19) % LAND_GLYPHS.length
          cells.push({
            r,
            c,
            glyph: LAND_GLYPHS[glyphIdx],
            isLand: true,
            baseAlpha: 0.22 + ((r * 13 + c * 7) % 8) * 0.02 // 0.22 - 0.36
          })
        } else if ((r % 5 === 0 && c % 10 === 0) || (r === 26 && c % 6 === 0)) {
          // Faint oceanic navigational grid dots & Equator indicator
          cells.push({
            r,
            c,
            glyph: r === 26 ? '·' : '·',
            isLand: false,
            baseAlpha: r === 26 ? 0.08 : 0.04
          })
        }
      }
    }

    let time = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      time += 0.02

      // Sizing & Responsive Positioning
      // Ensure world map occupies ~92% width on desktop, comfortably centered
      let targetMapWidth = Math.min(width * 0.94, 1680)
      if (width < 768) {
        targetMapWidth = Math.max(width * 1.25, 680)
      }

      const charWidth = targetMapWidth / COLS
      // Monospace character aspect ratio (height ~1.58x width)
      const charHeight = charWidth * 1.58
      const totalMapHeight = ROWS * charHeight

      let startX = (width - targetMapWidth) / 2
      const startY = Math.max(25, (height - totalMapHeight) * 0.42)

      // Guarantee Ann Arbor ping is always visible on narrow screens
      const rawPingX = startX + (PING_LOCATION.col + 0.5) * charWidth
      if (rawPingX < 60) {
        startX += (60 - rawPingX)
      }

      const mouse = mouseRef.current

      // Subtle horizontal radar sweep (repeats every ~14 seconds)
      const sweepX = startX + ((time * 36) % (targetMapWidth + 120)) - 60

      // 1. Draw ASCII Character Grid
      const fontSize = Math.max(7, Math.floor(charHeight * 0.94))
      ctx.font = `${fontSize}px 'Fira Code', 'JetBrains Mono', 'Courier New', monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      cells.forEach((cell) => {
        const x = startX + (cell.c + 0.5) * charWidth
        const y = startY + (cell.r + 0.5) * charHeight

        // Distance to cursor for interactive highlight
        const dx = x - mouse.x
        const dy = y - mouse.y
        const distToMouse = Math.sqrt(dx * dx + dy * dy)
        const mouseBoost = distToMouse < 130 ? (1 - distToMouse / 130) * 0.32 : 0

        // Distance to radar sweep
        const distToSweep = Math.abs(x - sweepX)
        const sweepBoost = distToSweep < 90 ? (1 - distToSweep / 90) * 0.14 : 0

        // Distance to screen center (to de-clutter behind the main reading column)
        const distFromCenter = Math.abs(x - width / 2)
        const fadeRadius = 460 // Starts fading further outwards (460px radius)
        let centerDampen = 1
        if (distFromCenter < fadeRadius) {
          // Smooth progressive falloff: faint in center (0.08), ramping up towards 1.0 at fadeRadius
          const ratio = distFromCenter / fadeRadius
          centerDampen = 0.08 + 0.92 * Math.pow(ratio, 1.7)
        }

        let alpha = (cell.baseAlpha + mouseBoost + sweepBoost) * centerDampen

        if (cell.isLand) {
          // Cartographic shimmer
          const shimmer = Math.sin(time * 1.2 + cell.c * 0.12 + cell.r * 0.25) * 0.04
          alpha = Math.max(0.02, Math.min(0.9, alpha + shimmer))

          if (mouseBoost > 0.06 || sweepBoost > 0.06) {
            ctx.fillStyle = '#38bdf8' // Cyan highlight
          } else {
            ctx.fillStyle = '#cbd5e1' // Clean slate-white
          }
        } else {
          // Ocean coordinates
          ctx.fillStyle = '#64748b'
          alpha = Math.max(0.01, Math.min(0.18, alpha))
        }

        ctx.globalAlpha = alpha
        ctx.fillText(cell.glyph, x, y)
      })

      // 2. Ann Arbor, Michigan Ping Coordinates
      const pingX = startX + (PING_LOCATION.col + 0.5) * charWidth
      const pingY = startY + (PING_LOCATION.row + 0.5) * charHeight

      // Ping Ripple Shockwaves (3 smooth concentric expanding rings)
      const numRings = 3
      for (let i = 0; i < numRings; i++) {
        const ringProgress = (time * 0.55 + i / numRings) % 1
        const ringRadius = 5 + ringProgress * 36
        const ringAlpha = Math.max(0, (1 - ringProgress) * 0.65)

        ctx.beginPath()
        ctx.arc(pingX, pingY, ringRadius, 0, Math.PI * 2)
        ctx.strokeStyle = '#06b6d4' // Vibrant cyan
        ctx.lineWidth = 1.3
        ctx.globalAlpha = ringAlpha
        ctx.stroke()
      }

      // Outer Beacon Glow
      ctx.beginPath()
      ctx.arc(pingX, pingY, 8, 0, Math.PI * 2)
      ctx.fillStyle = '#38bdf8'
      ctx.globalAlpha = 0.4 + Math.sin(time * 3.5) * 0.2
      ctx.fill()

      // Inner Sharp Beacon Core
      ctx.beginPath()
      ctx.arc(pingX, pingY, 3.5, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.globalAlpha = 1
      ctx.fill()

      // 3. Technical HUD Leader Line & Callout Badge
      const isNarrow = width < 720
      const pointRight = pingX + 180 < width
      const dirX = pointRight ? 1 : -1

      const leaderDx = (isNarrow ? 32 : 48) * dirX
      const leaderDy = isNarrow ? -22 : -32
      const leaderH = (isNarrow ? 95 : 125) * dirX

      const cornerX = pingX + leaderDx
      const cornerY = pingY + leaderDy
      const endX = cornerX + leaderH
      const endY = cornerY

      // Leader Line
      ctx.beginPath()
      ctx.moveTo(pingX, pingY)
      ctx.lineTo(cornerX, cornerY)
      ctx.lineTo(endX, endY)
      ctx.strokeStyle = '#06b6d4'
      ctx.lineWidth = 1.2
      ctx.globalAlpha = 0.8
      ctx.stroke()

      // End Anchor Point
      ctx.fillStyle = '#38bdf8'
      ctx.fillRect(endX - 2, endY - 2, 4, 4)

      // HUD Text Callout
      ctx.textAlign = pointRight ? 'left' : 'right'
      const textOffset = pointRight ? 6 : -6

      // Primary Title Badge
      ctx.font = `600 ${isNarrow ? 10 : 11}px 'Fira Code', monospace`
      ctx.fillStyle = '#38bdf8'
      ctx.globalAlpha = 1
      ctx.fillText(`● ANN ARBOR, MI`, cornerX + textOffset, cornerY - 14)

      // Secondary Coordinates & System Tag
      ctx.font = `500 ${isNarrow ? 8.5 : 9.5}px 'Fira Code', monospace`
      ctx.fillStyle = '#94a3b8'
      ctx.globalAlpha = 0.85
      ctx.fillText(`${PING_LOCATION.coords} // BASE NODE`, cornerX + textOffset, cornerY - 3)

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Interactive Canvas for ASCII World Map and Ann Arbor Ping */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-[1] opacity-90 transition-opacity duration-1000"
      />

      {/* 2. Soft Center Reading Vignette Scrim (darkens the center reading column in front of the map) */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 920px 100% at 50% 50%, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0.72) 48%, rgba(0, 0, 0, 0.15) 82%, transparent 100%)'
        }}
      />

      {/* 3. Sleek Telemetry Corner Badges */}
      <div className="hidden xl:flex fixed left-5 bottom-5 z-[3] flex-col gap-0.5 font-mono text-[9px] text-zinc-500 tracking-wider pointer-events-none">
        <span className="text-zinc-400 font-medium">SYS // WORLD_MAP_ASCII.GRID</span>
        <span>PROJ // KAVRAYSKIY-VII (194×52)</span>
      </div>

      <div className="hidden xl:flex fixed right-5 bottom-5 z-[3] flex-col items-end gap-0.5 font-mono text-[9px] text-zinc-500 tracking-wider pointer-events-none">
        <span className="text-cyan-400 font-medium">LOCATION // ANN ARBOR, MI</span>
        <span>42.28° N, 83.74° W • SWE '26</span>
      </div>
    </div>
  )
}
