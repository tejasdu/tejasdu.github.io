import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Check,
  MapPin,
  GraduationCap,
  ChevronDown,
  Terminal,
  Sparkles,
  ArrowUpRight
} from 'lucide-react'
import confetti from 'canvas-confetti'

const ROTATING_ROLES = [
  "Computer Science Graduate",
  "Distributed Systems Enthusiast",
  "Full-Stack Web Architect",
  "Cloud & High-Throughput Builder"
]

export default function BentoHero({ personal }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  const handleCopyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(personal.socials.email)
    setCopied(true)
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.3 },
      colors: ['#ffffff', '#a1a1aa', '#38bdf8']
    })
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section className="w-full space-y-3">
      {/* 1. Primary Bento Profile Card */}
      <div className="rounded-2xl p-6 sm:p-7 bg-zinc-950/70 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-300">

        {/* Subtle accent highlight line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          {/* Avatar & Identity */}
          <div className="flex items-center gap-3.5">
            <div className="relative group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/15 flex items-center justify-center font-mono font-bold text-white shadow-inner text-base">
                TD
              </div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black" title="Available for hire" />
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                {personal.name}
              </h1>

              {/* Animated Rotating Role Title */}
              <div className="h-5 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIndex}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xs font-mono text-zinc-400 flex items-center gap-1.5"
                  >
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>{ROTATING_ROLES[roleIndex]}</span>
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-950/50 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to SWE Roles</span>
          </div>

        </div>

        {/* Bio */}
        <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-normal">
          {personal.shortBio}
        </p>

        {/* Social Links Row (Monochrome, sleek) */}
        <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 transition-colors"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </>
              )}
            </button>

            <a
              href={personal.socials.resume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* More info toggle */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors font-mono"
          >
            <span>{showMore ? 'Less' : 'More'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showMore ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Expandable Bio Drawer */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-white/5 space-y-2.5">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {personal.extendedBio}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* 2. Bento Sub-Row: Compact Info Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        {/* Education Tile */}
        <div className="p-4 rounded-xl bg-zinc-950/60 backdrop-blur-md border border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-300">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-zinc-400 block">Education</span>
              <span className="text-xs font-semibold text-white">B.S. Computer Science</span>
            </div>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
            2026
          </span>
        </div>

        {/* Location & Availability Tile */}
        <div className="p-4 rounded-xl bg-zinc-950/60 backdrop-blur-md border border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-300">
              <MapPin className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-zinc-400 block">Location</span>
              <span className="text-xs font-semibold text-white">United States</span>
            </div>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
            Relocation OK
          </span>
        </div>

      </div>
    </section>
  )
}
