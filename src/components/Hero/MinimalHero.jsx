import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, 
  Check, 
  ArrowUpRight,
  Mail
} from 'lucide-react'
import confetti from 'canvas-confetti'

export default function MinimalHero({ personal }) {
  const [copied, setCopied] = useState(false)
  const [titleIndex, setTitleIndex] = useState(0)

  const titles = [
    "Engineer",
    "B.S. in CS @ the University of Michigan"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3600)
    return () => clearInterval(timer)
  }, [titles.length])

  const handleCopyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(personal.socials.email)
    setCopied(true)
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.25 },
      colors: ['#ffffff', '#a1a1aa', '#38bdf8']
    })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="w-full space-y-6 text-left pt-6 sm:pt-8">
      
      {/* Top Identity Header (Bigger rounded-square profile photo + name + title) */}
      <div className="flex items-center gap-4 sm:gap-6 group">
        {personal.avatar ? (
          <div className="size-24 sm:size-28 rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl shrink-0 select-none relative ring-1 ring-zinc-700/60 transition-transform duration-200 hover:scale-[1.02]">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="size-20 sm:size-24 rounded-2xl sm:rounded-3xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono font-medium text-white text-lg shadow-sm select-none shrink-0">
            TD
          </div>
        )}

        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug">
            {personal.name}
          </h1>
          <div className="h-5 sm:h-6 overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={titles[titleIndex]}
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -7 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="text-xs sm:text-sm font-mono text-zinc-400 whitespace-nowrap"
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Expanded, Focused Editorial Storytelling (User's Exact Bio) */}
      <div className="space-y-4 text-left text-[15px] sm:text-[16px] leading-[1.75] text-zinc-300 font-normal">
        <p>
          I am a product and solutions-oriented software engineer who loves to identify ambiguous stakeholder needs and transform them into actionable execution plans to create real business impact.
        </p>

        <p>
          I recently completed a B.S. in Computer Science at the <span className="text-white font-medium underline decoration-zinc-700 decoration-1 underline-offset-4">University of Michigan</span> and am looking for the next step in my career. I thrive in environments where I can collaborate across teams, continuously learn, and problem-solve in fast-paced situations.
        </p>

        <p className="text-zinc-400">
          Outside of work, I'm deeply interested in exploring new cuisines, reading science fiction, and optimizing my fantasy football rosters.
        </p>

        {/* Minimal High-Signal Ledger (Only Focus) */}
        <div className="pt-2 pb-1 border-l-2 border-zinc-800/80 pl-3.5 text-xs sm:text-[13px] font-mono">
          <div className="flex items-baseline gap-2">
            <span className="text-zinc-500 whitespace-nowrap select-none">//&nbsp;focus:</span>
            <span className="text-zinc-300 leading-relaxed">
              Real-time systems, asynchronous pipelines, low-latency streaming, solutions engineering
            </span>
          </div>
        </div>
      </div>

      {/* Aesthetic Social Pill Hyperlinks with Official Monochrome Logos */}
      <div className="flex flex-wrap items-center gap-2.5 pt-2">
        
        {/* GitHub Pill */}
        <a
          href={personal.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all duration-150 shadow-sm group"
        >
          <svg viewBox="0 0 24 24" className="size-3.5 fill-current text-zinc-400 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>GitHub</span>
          <ArrowUpRight className="size-3 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
        </a>

        {/* LinkedIn Pill */}
        <a
          href={personal.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all duration-150 shadow-sm group"
        >
          <svg viewBox="0 0 24 24" className="size-3.5 fill-current text-zinc-400 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span>LinkedIn</span>
          <ArrowUpRight className="size-3 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
        </a>

        {/* Email Pill (Click to Copy, labeled "copy email") */}
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all duration-150 shadow-sm"
          title="Copy email"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-400" />
              <span className="text-emerald-400">copied!</span>
            </>
          ) : (
            <>
              <Mail className="size-3.5 text-zinc-400" />
              <span>Copy email</span>
            </>
          )}
        </button>

        {/* Resume Pill */}
        <a
          href={personal.socials.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all duration-150 shadow-sm group"
        >
          <FileText className="size-3.5 text-zinc-400 group-hover:text-white transition-colors" />
          <span>Resume</span>
          <ArrowUpRight className="size-3 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
        </a>

      </div>

    </section>
  )
}
