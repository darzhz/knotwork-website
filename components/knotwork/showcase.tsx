'use client'

import { Play, ImageIcon } from 'lucide-react'
import Image from 'next/image'

export default function KnotworkShowcase() {
  const screenshots = [
    {
      src: '/Screenshot from 2026-01-28 20-14-04.png',
      alt: 'Knotwork Interface 1',
    },
    {
      src: '/Screenshot from 2026-01-28 20-14-10.png',
      alt: 'Knotwork Interface 2',
    },
    {
      src: '/Screenshot from 2026-01-28 20-14-17.png',
      alt: 'Knotwork Interface 3',
    },
    {
      src: '/Screenshot from 2026-01-28 20-14-26.png',
      alt: 'Knotwork Interface 4',
    },
  ]

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-foreground">See It in Action</h2>
        <p className="text-muted-foreground mb-12">Explore how Knotwork makes API testing visual and intuitive.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Screenshots Section */}
          {screenshots.map((screenshot, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-video relative bg-background rounded-lg border border-border overflow-hidden hover:border-accent/50 transition-colors cursor-pointer group shadow-sm">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}

          {/* Videos Section (Still placeholders for now) */}
          <div className="space-y-4">
            <div className="aspect-video bg-background rounded-lg border-2 border-dashed border-border flex items-center justify-center hover:border-accent/50 transition-colors cursor-pointer group">
              <div className="text-center">
                <Play className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-accent mb-2 transition-colors fill-current" />
                <p className="text-muted-foreground text-sm">Quick Demo Video</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-video bg-background rounded-lg border-2 border-dashed border-border flex items-center justify-center hover:border-accent/50 transition-colors cursor-pointer group">
              <div className="text-center">
                <Play className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-accent mb-2 transition-colors fill-current" />
                <p className="text-muted-foreground text-sm">Tutorial Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
