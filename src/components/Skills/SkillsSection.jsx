import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  FileCode, 
  Cpu, 
  Coffee, 
  Terminal, 
  Database, 
  Atom, 
  Palette, 
  Sparkles, 
  Globe, 
  Layout, 
  Layers, 
  Server, 
  Zap, 
  Flame, 
  Box, 
  Cloud, 
  Activity, 
  Network, 
  GitBranch, 
  CheckCircle2, 
  Workflow, 
  Users 
} from 'lucide-react'

// Icon map helper
const iconMap = {
  Code2, FileCode, Cpu, Coffee, Terminal, Database, Atom, Palette, 
  Sparkles, Globe, Layout, Layers, Server, Zap, Flame, Box, 
  Cloud, Activity, Network, GitBranch, CheckCircle2, Workflow, Users
}

export default function SkillsSection({ skillsData }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...skillsData.categories.map(c => c.name)]

  const filteredCategories = selectedCategory === 'All'
    ? skillsData.categories
    : skillsData.categories.filter(c => c.name === selectedCategory)

  return (
    <div className="space-y-6">
      
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
              selectedCategory === cat
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-semibold shadow-sm'
                : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCategories.map((category, catIdx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: catIdx * 0.05 }}
            className="rounded-2xl p-5 bg-slate-900/60 backdrop-blur-md border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="mb-2">
                <h3 className="text-sm font-bold text-white tracking-wide">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {category.description}
                </p>
              </div>

              {/* Skills Chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2
                  const isAdvanced = skill.level === 'Advanced'

                  return (
                    <div
                      key={skill.name}
                      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 cursor-default"
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-slate-200">{skill.name}</span>
                      
                      {/* Proficiency pill */}
                      <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                        isAdvanced 
                          ? 'text-cyan-300 bg-cyan-500/10' 
                          : 'text-slate-400 bg-white/5'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>{category.skills.length} competencies</span>
              <span className="text-cyan-400/80">Production Ready</span>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}
