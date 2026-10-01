import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TimelineExperience from '../Experience/TimelineExperience'
import NarrowProjects from '../Projects/NarrowProjects'
import EducationSection from '../Education/EducationSection'
import NarrowSkills from '../Skills/NarrowSkills'

export default function SharedWindow({ portfolioData }) {
  const [activeTab, setActiveTab] = useState('experience')

  const tabs = [
    { id: 'experience', label: 'Experience', count: portfolioData.experiences.length },
    { id: 'projects', label: 'Projects', count: portfolioData.projects.length },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
  ]

  return (
    <section className="w-full space-y-7 pt-4">
      
      {/* Seamless Gradient Divider (fades softly to edges) */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      {/* Minimalist Tab Navigation with Number Counters & Sliding Underline */}
      <div className="flex items-center gap-6 sm:gap-8 border-b border-zinc-900/80 pb-2.5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-2.5 text-sm font-medium transition-colors select-none flex items-center gap-1.5 ${
                isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`text-[11px] font-mono transition-colors ${
                  isActive ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  ({tab.count})
                </span>
              )}
              
              {/* Active Underline Indicator */}
              {isActive && (
                <motion.div
                  layoutId="tabUnderline"
                  className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Shared Window Display Area */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === 'experience' && (
            <motion.div
              key="tab-experience"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <TimelineExperience experiences={portfolioData.experiences} />
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div
              key="tab-projects"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <NarrowProjects projects={portfolioData.projects} />
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              key="tab-education"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <EducationSection education={portfolioData.education} />
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="tab-skills"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <NarrowSkills skillsData={portfolioData.skills} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  )
}
