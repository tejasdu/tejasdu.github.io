import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle,
  Lightbulb,
  Award
} from 'lucide-react'

export default function ExperienceSection({ experiences }) {
  // Track open state for each item (allowing multiple or individual toggles)
  const [expandedIds, setExpandedIds] = useState({ 'exp-1': true }) // First one open by default

  const toggleExpand = (id) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => {
        const isExpanded = !!expandedIds[exp.id]

        return (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className={`rounded-2xl transition-all duration-300 border ${
              isExpanded 
                ? 'bg-slate-900/80 border-cyan-500/30 shadow-xl shadow-cyan-950/20' 
                : 'bg-slate-900/50 hover:bg-slate-900/70 border-white/10 hover:border-white/20'
            }`}
          >
            {/* Header / Clickable Area */}
            <div 
              onClick={() => toggleExpand(exp.id)}
              className="p-5 sm:p-6 cursor-pointer select-none"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-cyan-400 font-medium text-sm flex items-center gap-1">
                      @ {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Dropdown toggle button */}
                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="text-xs text-cyan-400 font-mono hidden sm:inline">
                    {isExpanded ? 'Less info' : 'More info'}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-slate-300 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-cyan-400 bg-cyan-500/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Short Summary */}
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Smooth Expandable Dropdown Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-white/5 space-y-4">
                    
                    {/* Key Accomplishments with Bullet Points */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        Key Contributions & Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact & Key Learnings Meta Grid */}
                    {exp.details && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-xl bg-slate-950/50 border border-white/5 flex items-start gap-2.5">
                          <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[11px] font-mono text-cyan-400 block font-semibold">Production Impact</span>
                            <span className="text-xs text-slate-300">{exp.details.impact}</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-950/50 border border-white/5 flex items-start gap-2.5">
                          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[11px] font-mono text-amber-400 block font-semibold">Key Takeaway</span>
                            <span className="text-xs text-slate-300">{exp.details.keyLearning}</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )
      })}
    </div>
  )
}
