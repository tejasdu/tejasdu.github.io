import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  ChevronDown, 
  Sparkles, 
  Layers, 
  Cpu, 
  AlertCircle, 
  CheckCircle2,
  Workflow
} from 'lucide-react'

export default function ProjectsSection({ projects }) {
  const [expandedIds, setExpandedIds] = useState({ 'proj-1': true }) // Open the first project by default

  const toggleExpand = (id) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="grid grid-cols-1 gap-5">
      {projects.map((project, index) => {
        const isExpanded = !!expandedIds[project.id]

        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className={`rounded-2xl transition-all duration-300 border ${
              isExpanded 
                ? 'bg-slate-900/80 border-cyan-500/30 shadow-xl shadow-cyan-950/20' 
                : 'bg-slate-900/50 hover:bg-slate-900/70 border-white/10 hover:border-white/20'
            }`}
          >
            {/* Project Card Content */}
            <div className="p-5 sm:p-6">
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  
                  {/* Category & Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors pt-1">
                    {project.title}
                  </h3>
                </div>

                {/* Live Action Links */}
                <div className="flex items-center gap-2 self-start sm:self-center">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/5"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/30 hover:to-indigo-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-all"
                      title="View Live Demo"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>

              {/* Tagline */}
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                {project.tagline}
              </p>

              {/* Highlights List */}
              <ul className="mt-3.5 space-y-1.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Accordion Toggle for Deep Dive */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono transition-colors group"
                >
                  <span>{isExpanded ? "Hide Architecture & Solution" : "View Architecture & Deep Dive"}</span>
                  <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                </button>
              </div>

            </div>

            {/* Smooth Expandable "Deep Dive" Content */}
            <AnimatePresence>
              {isExpanded && project.deepDive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden bg-slate-950/40 rounded-b-2xl"
                >
                  <div className="p-5 sm:p-6 border-t border-white/5 space-y-3.5">
                    
                    {/* Problem & Solution Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                        <span className="text-[11px] font-mono text-rose-400 flex items-center gap-1.5 font-semibold mb-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          Technical Challenge
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.deepDive.problem}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                        <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 font-semibold mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Engineering Solution
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.deepDive.solution}
                        </p>
                      </div>
                    </div>

                    {/* Architecture Breakdown */}
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                      <span className="text-[11px] font-mono text-indigo-400 flex items-center gap-1.5 font-semibold mb-1.5">
                        <Workflow className="w-3.5 h-3.5" />
                        System Architecture & Data Flow
                      </span>
                      <p className="text-xs font-mono text-cyan-300/90 leading-relaxed bg-black/40 p-2.5 rounded-lg border border-white/5">
                        {project.deepDive.architecture}
                      </p>
                    </div>

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
