import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  Terminal,
  Code,
  BookOpen
} from 'lucide-react'
import confetti from 'canvas-confetti'

const ROTATING_TITLES = [
  "Computer Science Graduate",
  "Distributed Systems Enthusiast",
  "Full-Stack Web Architect",
  "High-Performance Cloud Builder"
]

export default function Hero({ personal, activeTheme }) {
  const [titleIndex, setTitleIndex] = useState(0)
  const [isCopied, setIsCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  // Rotating title effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  // Copy email handler with subtle confetti burst
  const handleCopyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(personal.socials.email)
    setIsCopied(true)
    
    // Confetti effect
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.35 },
      colors: ['#06b6d4', '#8b5cf6', '#10b981']
    })

    setTimeout(() => setIsCopied(false), 2400)
  }

  return (
    <section className="relative pt-8 pb-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Hero Card with Glassmorphism */}
        <div className="relative rounded-2xl p-6 sm:p-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300">
          
          {/* Subtle top ambient glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            
            {/* Left Content */}
            <div className="space-y-4 flex-1">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{personal.statusBadge}</span>
              </div>

              {/* Headline with Cool Animated Text */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                  Hey, I'm{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 font-extrabold">
                    {personal.name}
                  </span>
                </h1>
                
                {/* Animated Rotating Subtitle */}
                <div className="h-8 sm:h-9 mt-1.5 flex items-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={titleIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="flex items-center gap-2 text-base sm:text-lg font-mono text-cyan-400"
                    >
                      <Terminal className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{ROTATING_TITLES[titleIndex]}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Short Bio */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                {personal.shortBio}
              </p>

              {/* Location & Quick Meta */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  <span>B.S. in Computer Science (2026)</span>
                </div>
              </div>

            </div>

            {/* Quick Stats / Tech Stack Mini-Card */}
            <div className="md:w-64 shrink-0 flex flex-col gap-2.5 p-4 rounded-xl bg-slate-950/40 border border-white/5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                Quick Snapshot
              </span>
              {personal.quickStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[11px] text-slate-500 font-mono">{stat.label}</span>
                  <span className="text-xs font-medium text-slate-200">{stat.value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Socials & Action Row */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            
            {/* Social Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800/80 hover:bg-slate-700/80 text-white border border-white/10 hover:border-cyan-500/40 transition-all duration-200 shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800/80 hover:bg-slate-700/80 text-white border border-white/10 hover:border-indigo-500/40 transition-all duration-200 shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800/80 hover:bg-slate-700/80 text-white border border-white/10 hover:border-emerald-500/40 transition-all duration-200 shadow-sm relative group"
                title="Click to copy email address"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-slate-300" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={personal.socials.resume}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/30 hover:to-indigo-500/30 text-cyan-300 border border-cyan-500/40 transition-all duration-200 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume / CV</span>
              </a>
            </div>

            {/* Smooth Dropdown Accordion Trigger ("More Info") */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors ml-auto group"
            >
              <span>{isExpanded ? "Hide Details" : "More About Me"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
              </motion.div>
            </button>

          </div>

          {/* Smooth Expandable "More Info" Section */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-5 pt-5 border-t border-white/5 space-y-4">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      Background & Academic Focus
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {personal.extendedBio}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-slate-950/40 border border-white/5">
                      <div className="text-xs font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                        Key Coursework
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-mono">
                        Distributed Systems, Operating Systems, Database Management Systems, Algorithms & Complexity, Computer Networks, Compilers.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/40 border border-white/5">
                      <div className="text-xs font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-emerald-400" />
                        Engineering Philosophy
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        I believe in pragmatic simplicity: write testable code, minimize cognitive overhead, measure bottlenecks with real metrics, and prioritize user empathy.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  )
}
