import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, FolderGit2, Wrench } from 'lucide-react'

export default function TabNav({ activeTab, setActiveTab, counts }) {
  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase, count: counts.experience },
    { id: 'projects', label: 'Projects', icon: FolderGit2, count: counts.projects },
    { id: 'skills', label: 'Skills & Stack', icon: Wrench, count: counts.skills },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2">
      <div className="flex items-center justify-center sm:justify-start">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {/* Active Background Pill Animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 via-indigo-500/25 to-purple-500/25 border border-cyan-400/40 rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <Icon className={`w-4 h-4 relative z-10 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span className="relative z-10">{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`relative z-10 text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-cyan-400/20 text-cyan-300' : 'bg-white/5 text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
