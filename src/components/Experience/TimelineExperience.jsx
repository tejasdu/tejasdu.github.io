import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { renderTechIcon } from '../Skills/TechIcons'

export default function TimelineExperience({ experiences }) {
  return (
    <div className="divide-y divide-zinc-800/80 space-y-8 first:pt-0 text-left">
      {experiences.map((exp) => (
        <article key={exp.id} className="pt-8 first:pt-0 group">
          
          {/* Company Header (ratneshc.com style: logo avatar + name + link icon) */}
          <header className="mb-4 flex items-center gap-3">
            {exp.logo ? (
              <div className={`size-7 sm:size-8 rounded-lg overflow-hidden shrink-0 border border-zinc-800 shadow-sm flex items-center justify-center ${exp.logoBg || 'bg-zinc-900'} group-hover:border-zinc-700 transition-colors`}>
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className={`w-full h-full ${
                    exp.logoFit === 'cover-left' 
                      ? 'object-cover object-left' 
                      : 'object-cover'
                  }`}
                />
              </div>
            ) : (
              <div className="size-7 sm:size-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono text-xs text-zinc-300 shrink-0 select-none">
                {exp.company.charAt(0)}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <h3 className="flex items-center gap-2 text-base sm:text-lg font-medium text-white truncate">
                {exp.company}
              </h3>
            </div>

            {exp.companyUrl && (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors p-1"
                aria-label={`Visit ${exp.company}`}
              >
                <ArrowUpRight className="size-4" />
              </a>
            )}
          </header>

          {/* Grid Timeline Layout (ratneshc.com exact layout: grid-cols-[24px_1fr]) */}
          <div className="grid gap-x-3 gap-y-4 grid-cols-[24px_1fr]">
            
            {/* Left Column: Continuous vertical line & node dot */}
            <span aria-hidden="true" className="col-start-1 flex justify-center pt-2" style={{ gridRow: '1 / -1' }}>
              <span className="min-h-full w-px bg-zinc-800" />
            </span>
            <div className="col-start-1 flex flex-col" style={{ gridRow: 1 }}>
              <div className="flex justify-center pt-2" aria-hidden="true">
                <span className="size-2 rounded-full bg-zinc-400 group-hover:bg-white transition-colors" />
              </div>
            </div>

            {/* Right Column: Role Title, Location | Date, Bullet Points, Tech Pills */}
            <div className="min-w-0 col-start-2" style={{ gridRow: 1 }}>
              <div className="relative z-10 mb-1 flex min-w-0 items-center justify-between gap-3">
                <h4 className="min-w-0 flex-1 text-base font-medium text-white">
                  {exp.role}
                </h4>
              </div>

              {/* Location instead of Type of Work + Date Range */}
              <div className="relative z-10 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-400 font-mono">
                <span>{exp.location}</span>
                <span className="h-3.5 w-px bg-zinc-800" />
                <time>{exp.period}</time>
              </div>

              {/* Spaced Bullet Points */}
              <div className="pt-3">
                <ul className="ml-4 list-disc space-y-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="pl-1 marker:text-zinc-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Monochrome Black & White Tech Stack Pills */}
              <ul className="flex flex-wrap gap-2 pt-4" aria-label="Skills and technologies used">
                {exp.techStack.map((tech) => (
                  <li key={tech}>
                    <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] bg-zinc-900/90 text-zinc-300 border border-zinc-800/80 shadow-sm cursor-default hover:border-zinc-700 hover:text-white transition-colors">
                      {renderTechIcon(tech)}
                      <span>{tech}</span>
                    </span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </article>
      ))}
    </div>
  )
}
