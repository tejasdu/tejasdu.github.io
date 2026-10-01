import React from 'react'

export default function AmbientAuroraEffect({ primaryColor = '#06b6d4', secondaryColor = '#8b5cf6' }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Aurora glow orb 1 */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full blur-[120px] opacity-25 animate-pulse-slow transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${primaryColor} 0%, rgba(0,0,0,0) 70%)`,
        }}
      />
      {/* Aurora glow orb 2 */}
      <div
        className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-20 animate-pulse-slow transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${secondaryColor} 0%, rgba(0,0,0,0) 70%)`,
          animationDelay: '2s',
        }}
      />
      {/* Aurora glow orb 3 */}
      <div
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-15 animate-pulse-slow transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, #3b82f6 0%, rgba(0,0,0,0) 70%)`,
          animationDelay: '4s',
        }}
      />
      
      {/* Subtle Noise Overlay for high-end film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  )
}
