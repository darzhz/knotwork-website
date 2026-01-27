'use client'

import { ArrowRight, Github } from 'lucide-react'
import ThreadNode from '@/components/knotwork/thread-node'

export default function KnotworkHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl text-center">
        {/* Thread node visualization */}
        <div className="mb-12 flex justify-center">
          <ThreadNode />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
          Knotwork
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Visual API testing. No loose ends.
        </p>

        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          Tie requests, data, and logic into executable flows.
          <br />
          Design visually. Run with Knotty.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-opacity flex items-center gap-2 group">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://github.com/knotwork"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-muted-foreground text-muted-foreground font-semibold rounded-md hover:bg-secondary transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
