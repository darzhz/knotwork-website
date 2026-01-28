'use client'

import { Github } from 'lucide-react'
import Image from 'next/image'

export default function KnotworkFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative opacity-80">
              <Image src="/knotwork.svg" alt="Knotwork" fill className="object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-0 leading-tight">Knotwork</h3>
              <p className="text-muted-foreground text-xs">Visual API testing. No loose ends.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/knotwork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-semibold">GitHub</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Editor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Examples
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Discussions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Issues
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Contribute
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    MIT License
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Knotwork. Made for developers, by developers.
            </p>
            <p className="text-muted-foreground text-sm mt-4 italic">
              Tie responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
