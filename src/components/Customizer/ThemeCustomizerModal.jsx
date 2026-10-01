import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Check, Palette, Eye, Cpu, Compass, Layers } from 'lucide-react'

export const THEMES = [
  {
    id: 'minimal',
    name: 'Modern Minimalist',
    subtitle: 'Linear / Vercel dark mode',
    description: 'Deep slate & zinc backdrop, frosted glassmorphism, crisp modern typography, subtle cyan/indigo borders.',
    badge: 'Popular',
    colors: ['#090d16', '#06b6d4', '#6366f1'],
    accentHex: '#06b6d4',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    subtitle: 'Vibrant futuristic glow',
    description: 'Deep pitch-black backdrop, high-contrast electric cyan and neon violet drop-shadows, sharp tech aesthetic.',
    badge: 'High Impact',
    colors: ['#050508', '#00f2fe', '#9d4edd'],
    accentHex: '#00f2fe',
  },
  {
    id: 'terminal',
    name: 'Retro Terminal',
    subtitle: 'Hacker / Systems dev',
    description: 'Monospace typography, dark phosphor matrix green and amber accents, terminal command prompt styling.',
    badge: 'Dev Vibe',
    colors: ['#070d0a', '#10b981', '#00ff88'],
    accentHex: '#10b981',
  },
  {
    id: 'luxe',
    name: 'Luxe Midnight',
    subtitle: 'Refined editorial dark',
    description: 'Deep onyx background with warm champagne gold and amber accents, ultra-clean executive finish.',
    badge: 'Elegant',
    colors: ['#0a0a0c', '#f59e0b', '#fbbf24'],
    accentHex: '#f59e0b',
  }
]

export const EFFECTS = [
  {
    id: 'constellation',
    name: 'Particle Constellation',
    subtitle: 'Interactive connected mesh',
    description: 'Smooth glowing canvas nodes that connect with subtle lines and react dynamically to mouse movement and proximity.',
    icon: Compass,
    previewType: 'particles'
  },
  {
    id: 'aurora',
    name: 'Ambient Aurora',
    subtitle: 'Fluid glowing mesh gradient',
    description: 'Dreamy, slow-moving blurred color orbs with a subtle film grain texture behind frosted glass cards.',
    icon: Sparkles,
    previewType: 'aurora'
  },
  {
    id: 'starfield',
    name: 'Interactive Starfield',
    subtitle: '3D drifting cosmic dust',
    description: 'Gentle twinkling stars floating at varying depths, creating depth and dimension without visual distraction.',
    icon: Eye,
    previewType: 'stars'
  },
  {
    id: 'cybergrid',
    name: 'Perspective Cyber Grid',
    subtitle: 'Moving 3D wireframe plane',
    description: 'Retro-futuristic perspective grid gently gliding into the horizon, adding a high-tech engineering feel.',
    icon: Cpu,
    previewType: 'grid'
  }
]

export default function ThemeCustomizerModal({
  isOpen,
  onClose,
  activeTheme,
  setActiveTheme,
  activeEffect,
  setActiveEffect
}) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-slate-900/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  Live Style & Effect Previewer
                </h2>
                <p className="text-xs text-slate-400">
                  Click any aesthetic or background below to see it applied to your portfolio in real time!
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto py-5 space-y-6 pr-1">
            
            {/* 1. Background Visual Effects Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  1. Choose Visual Background Effect ({EFFECTS.length} styles)
                </label>
                <span className="text-[11px] font-mono text-slate-400">
                  Active: <span className="text-white capitalize">{activeEffect}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EFFECTS.map((effect) => {
                  const isSelected = activeEffect === effect.id
                  const Icon = effect.icon

                  return (
                    <div
                      key={effect.id}
                      onClick={() => setActiveEffect(effect.id)}
                      className={`p-4 rounded-2xl cursor-pointer border transition-all duration-200 select-none ${
                        isSelected
                          ? 'bg-gradient-to-br from-cyan-950/60 to-slate-900 border-cyan-400/80 shadow-lg shadow-cyan-950/40'
                          : 'bg-slate-950/40 hover:bg-slate-950/70 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                          <h4 className="text-sm font-bold text-white">{effect.name}</h4>
                        </div>
                        {isSelected && (
                          <span className="p-1 rounded-full bg-cyan-400/20 text-cyan-300">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400/80 block mb-1">
                        {effect.subtitle}
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {effect.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 2. Visual Theme & Aesthetic Selector */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-bold">
                  <Palette className="w-3.5 h-3.5" />
                  2. Choose Color Aesthetic ({THEMES.length} palettes)
                </label>
                <span className="text-[11px] font-mono text-slate-400">
                  Active: <span className="text-white capitalize">{activeTheme}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {THEMES.map((theme) => {
                  const isSelected = activeTheme === theme.id

                  return (
                    <div
                      key={theme.id}
                      onClick={() => setActiveTheme(theme.id)}
                      className={`p-4 rounded-2xl cursor-pointer border transition-all duration-200 select-none ${
                        isSelected
                          ? 'bg-gradient-to-br from-indigo-950/60 to-slate-900 border-indigo-400/80 shadow-lg shadow-indigo-950/40'
                          : 'bg-slate-950/40 hover:bg-slate-950/70 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          {/* Color dots preview */}
                          <div className="flex items-center -space-x-1">
                            {theme.colors.map((c, i) => (
                              <span
                                key={i}
                                className="w-3.5 h-3.5 rounded-full border border-white/20"
                                style={{ backgroundColor: c }}
                              />
                            ))}
                          </div>
                          <h4 className="text-sm font-bold text-white">{theme.name}</h4>
                        </div>
                        {isSelected ? (
                          <span className="p-1 rounded-full bg-indigo-400/20 text-indigo-300">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400">
                            {theme.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-indigo-400/90 block mb-1">
                        {theme.subtitle}
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {theme.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between shrink-0">
            <span className="text-xs text-slate-400 font-mono">
              💡 Changes apply immediately in the background
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 transition-all"
            >
              Keep This Style
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  )
}
