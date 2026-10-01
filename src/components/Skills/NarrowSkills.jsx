import React from 'react'
import { renderTechIcon } from './TechIcons'

export default function NarrowSkills({ skillsData }) {
  return (
    <div className="space-y-6 text-left">
      {skillsData.categories.map((category) => (
        <div key={category.name} className="space-y-2.5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            // {category.name.toLowerCase()}
          </h4>

          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800/90 hover:border-zinc-700 hover:text-white transition-all duration-150 flex items-center gap-2 select-none cursor-default shadow-sm"
              >
                {renderTechIcon(skill)}
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
