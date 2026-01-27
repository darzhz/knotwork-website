'use client'

import { Play, ImageIcon } from 'lucide-react'

export default function KnotworkShowcase() {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-foreground">See It in Action</h2>
        <p className="text-muted-foreground mb-12">Explore how Knotwork makes API testing visual and intuitive.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Screenshots Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-4">Screenshots</h3>
            <div className="aspect-video bg-background rounded-lg border-2 border-dashed border-border flex items-center justify-center hover:border-accent/50 transition-colors cursor-pointer group">
              <div className="text-center">
                <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-accent mb-2 transition-colors" />
                <p className="text-muted-foreground text-sm">Screenshot placeholder</p>
              </div>
            </div>
            <div className="aspect-video bg-background rounded-lg border-2 border-dashed border-border flex items-center justify-center hover:border-accent/50 transition-colors cursor-pointer group">
              <div className="text-center">
                <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-accent mb-2 transition-colors" />
                <p className="text-muted-foreground text-sm">Screenshot placeholder</p>
              </div>
            </div>
          </div>

          {/* Videos Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-4">Quick Videos</h3>
            <div className="aspect-video bg-background rounded-lg border-2 border-dashed border-border flex items-center justify-center hover:border-accent/50 transition-colors cursor-pointer group">
              <div className="text-center">
                <Play className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-accent mb-2 transition-colors fill-current" />
                <p className="text-muted-foreground text-sm">Video placeholder</p>
              </div>
            </div>
            <div className="aspect-video bg-background rounded-lg border-2 border-dashed border-border flex items-center justify-center hover:border-accent/50 transition-colors cursor-pointer group">
              <div className="text-center">
                <Play className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-accent mb-2 transition-colors fill-current" />
                <p className="text-muted-foreground text-sm">Video placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
