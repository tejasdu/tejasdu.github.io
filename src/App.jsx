import React from 'react'
import CustomCursor from './components/CustomCursor/CustomCursor'
import MinimalHero from './components/Hero/MinimalHero'
import SharedWindow from './components/Tabs/SharedWindow'
import DottedMapSideEffect from './components/BackgroundEffects/DottedMapSideEffect'
import { portfolioData } from './data/portfolioData'
import { ArrowUp } from 'lucide-react'

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white relative overflow-x-hidden antialiased">
      
      {/* 1. Custom Smooth Circle Dot Cursor (OS cursor is completely hidden via CSS) */}
      <CustomCursor />

      {/* 2. Minimal Background Effect: Dotted World Map on the side */}
      <DottedMapSideEffect />

      {/* 3. Main Focused Narrow Column (Directly starts with Hero, no top bar) */}
      <main className="relative z-10 max-w-[680px] mx-auto px-4 pb-24 space-y-12">
        
        {/* Minimal Hero (Bigger avatar & typography, aesthetic social pills, permanent info) */}
        <MinimalHero personal={portfolioData.personal} />

        {/* Shared Window (Experience, Projects, Education, Skills) */}
        <SharedWindow portfolioData={portfolioData} />

      </main>

      {/* 4. Minimalist Footer */}
      <footer className="relative z-10 border-t border-zinc-900 py-8 text-xs text-zinc-500 font-mono">
        <div className="max-w-[680px] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>© 2026 {portfolioData.personal.name}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
          >
            <span>top</span>
            <ArrowUp className="size-3" />
          </button>
        </div>
      </footer>

    </div>
  )
}
