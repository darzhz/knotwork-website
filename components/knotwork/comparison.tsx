'use client'

import Image from 'next/image'

export default function KnotworkComparison() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Knotwork & Knotty</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Knotwork */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-accent">Knotwork</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground">Visual editor</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground">Flow design</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground">Thinking space</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground">Compose and iterate</span>
              </li>
            </ul>
          </div>

          {/* Knotty */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-accent">Knotty</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground">CLI runner</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground">Execution engine</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground">No opinions, just results</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground">CI/CD integration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Code example */}
        <div className="mt-12 p-6 bg-secondary rounded-md border border-border">
          <p className="text-sm text-muted-foreground mb-3">Run your flows with Knotty:</p>
          <code className="text-foreground font-mono block p-4 bg-background rounded border border-border">
            $ knotty run auth-flow.knot
          </code>
        </div>
        {/* Joke */}
        <p className="mt-8 text-center text-muted-foreground italic">
          Knotty does not judge your knots.
        </p>

        {/* TUI */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-2xl mt-12">
          <Image
            src="/tui.png"
            alt="Knotty CLI"
            fill
            className="object-cover"
          />
        </div>


      </div>
    </section>
  )
}
