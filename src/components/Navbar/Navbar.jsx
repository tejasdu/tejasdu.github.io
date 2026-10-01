import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, Sliders, Sparkles } from 'lucide-react'

export default function Navbar({ onOpenCustomizer, activeTheme, activeEffect }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/70 border-b border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              TD
            </div>
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-30 blur transition duration-300 -z-10" />
          </div>
          <div>
            <span className="font-semibold tracking-tight text-white text-sm sm:text-base">Tejas Dumpeta</span>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to SWE Roles</span>
            </div>
          </div>
        </div>

        {/* Action Controls & Interactive Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Preset Customizer Button - Key Feature for User Preview! */}
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-purple-500/15 hover:from-cyan-500/25 hover:to-purple-500/25 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50 shadow-sm transition-all duration-200 group"
            title="Preview Themes & Visual Backgrounds"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
            <span className="hidden sm:inline">Theme & Effect Switcher</span>
            <span className="sm:hidden">Theme</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 font-mono hidden md:inline">
              Live Preview
            </span>
          </button>

          {/* Social Quick-Access */}
          <div className="flex items-center gap-1 pl-2 border-l border-white/10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </header>
  )
}
