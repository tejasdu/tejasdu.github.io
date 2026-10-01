import React from 'react'

export default function EducationSection({ education }) {
  return (
    <div className="space-y-6 text-left">
      
      {/* Degree Header with School Logo to the left */}
      <div className="flex items-center gap-3.5">
        {education.schoolLogo && (
          <div className="size-8 sm:size-9 rounded-lg overflow-hidden shrink-0 border border-zinc-800 bg-[#00274c] shadow-sm flex items-center justify-center">
            <img
              src={education.schoolLogo}
              alt={education.school}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="text-base font-medium text-white truncate">
              {education.degree}
            </h3>
            <span className="font-mono text-xs text-zinc-400 shrink-0">
              {education.period}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            {education.school}
          </p>
        </div>
      </div>

      {/* Relevant Coursework (Anubhav Agarwal style: // relevant coursework) */}
      <div className="pt-2 space-y-3">
        <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
          // relevant coursework
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {education.coursework.map((course, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg border border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-700/80 transition-colors"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-medium text-white">
                  {course.name}
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 block mt-1 leading-relaxed">
                {course.topic}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
