import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown } from 'lucide-react'
import { renderTechIcon } from '../Skills/TechIcons'

export default function NarrowProjects({ projects }) {
  const [openIds, setOpenIds] = useState({ 'proj-1': false })

  const toggleOpen = (id) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-8">
      {projects.map((proj) => {
        const isOpen = !!openIds[proj.id]

        return (
          <div key={proj.id} className="group space-y-2">
            
            {/* Title & Action Links Row */}
            <div className="flex items-baseline justify-between gap-3">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-medium text-white group-hover:text-zinc-200 transition-colors">
                  {proj.title}
                </h3>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                {proj.devpostUrl && (
                  <a
                    href={proj.devpostUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4 flex items-center gap-1"
                  >
                    <span>Devpost</span>
                    <ExternalLink className="size-3" />
                  </a>
                )}
                {proj.githubUrl && proj.githubUrl !== '#' && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4 flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <Github className="size-3" />
                  </a>
                )}
                {proj.liveUrl && proj.liveUrl !== '#' && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4 flex items-center gap-1"
                  >
                    <span>App</span>
                    <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {proj.tagline}
            </p>

            {/* Bullet Highlights */}
            <ul className="ml-4 list-disc space-y-1.5 text-xs text-zinc-400 leading-relaxed">
              {proj.highlights.map((h, i) => (
                <li key={i} className="pl-1 marker:text-zinc-600">
                  {h}
                </li>
              ))}
            </ul>

            {/* Tech Stack Pills & Architecture Toggle */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex flex-wrap gap-1.5">
                {proj.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-900/80 text-zinc-300 border border-zinc-800"
                  >
                    {renderTechIcon(tech)}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>

              {/* Elevated, Noticeable Architecture Dropdown Pill */}
              <button
                onClick={() => toggleOpen(proj.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium transition-all duration-150 select-none shadow-sm ${
                  isOpen
                    ? 'bg-zinc-800 text-white border border-zinc-600'
                    : 'bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <span>architecture & design</span>
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-zinc-400'}`} />
              </button>
            </div>

            {/* Expandable Architecture Drawer */}
            <AnimatePresence>
              {isOpen && proj.deepDive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 p-4 rounded-xl bg-zinc-950/90 border border-zinc-800/80 space-y-3 text-xs shadow-inner">
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-1 border-b border-zinc-800/60 font-mono text-[11px] text-zinc-400">
                      <span className="font-medium text-zinc-300">// system design & trade-offs</span>
                      <span className="text-[10px] text-zinc-500">architecture</span>
                    </div>

                    {/* Challenge & Solution Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60 space-y-1">
                        <span className="font-mono text-[11px] text-amber-400/90 font-medium tracking-wide block">
                          // Bottleneck:
                        </span>
                        <p className="text-zinc-300 leading-relaxed text-[12px] font-normal">
                          {proj.deepDive.problem}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60 space-y-1">
                        <span className="font-mono text-[11px] text-emerald-400/90 font-medium tracking-wide block">
                          // Architectural Solution:
                        </span>
                        <p className="text-zinc-300 leading-relaxed text-[12px] font-normal">
                          {proj.deepDive.solution}
                        </p>
                      </div>
                    </div>

                    {/* Pipeline Topology Block */}
                    <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/70 space-y-2">
                      <div className="flex items-center justify-between pb-1 border-b border-zinc-800/40">
                        <span className="font-mono text-[11px] text-cyan-400 font-medium tracking-wide">
                          // Pipeline Topology:
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">end-to-end data flow</span>
                      </div>
                      <pre className="font-mono text-[11px] text-zinc-200 bg-black/90 p-3 sm:p-4 rounded-lg border border-zinc-800/80 leading-relaxed overflow-x-auto whitespace-pre">
                        {proj.deepDive.architecture}
                      </pre>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        )
      })}
    </div>
  )
}
