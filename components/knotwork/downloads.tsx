'use client'

import { Download } from 'lucide-react'

export default function KnotworkDownloads() {
  const platforms = [
    {
      name: 'Windows',
      icon: '◆',
      downloads: [
        { label: '.exe Installer', link: '#', disabled: true },
        { label: 'Portable .exe', link: '#', disabled: true },
      ],
    },
    {
      name: 'macOS',
      icon: '◇',
      downloads: [
        { label: 'Universal Binary', link: '#', disabled: true },
        { label: 'Intel', link: '#', disabled: true },
        { label: 'Apple Silicon', link: '#', disabled: true },
      ],
    },
    {
      name: 'Linux',
      icon: '▢',
      downloads: [
        { label: 'Debian (.deb)', link: 'https://github.com/darzhz/flowjo/releases/download/0.1.0/Knotwork_0.1.0_amd64.deb', disabled: false },
        { label: 'AppImage', link: '#', disabled: true },
        { label: 'RedHat (.rpm)', link: '#', disabled: true },
      ],
    },
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Downloads</h2>
        <p className="text-muted-foreground mb-12">Get Knotwork for your platform.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="p-6 bg-secondary rounded-lg border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{platform.icon}</span>
                <h3 className="text-xl font-bold text-foreground">{platform.name}</h3>
              </div>

              <div className="space-y-3">
                {platform.downloads.map((download) => (
                  <a
                    key={download.label}
                    href={download.disabled ? undefined : download.link}
                    onClick={(e) => download.disabled && e.preventDefault()}
                    className={`flex items-center gap-2 px-4 py-2 rounded border transition-all text-sm font-semibold ${download.disabled
                        ? 'bg-muted/50 border-border text-muted-foreground cursor-not-allowed'
                        : 'bg-background border-border hover:border-accent hover:text-accent text-foreground'
                      }`}
                  >
                    <Download className="w-4 h-4" />
                    {download.label}
                    {download.disabled && (
                      <span className="ml-auto text-[10px] uppercase tracking-wider opacity-60">
                        Coming Soon
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-secondary rounded-lg border border-border text-center">
          <p className="text-muted-foreground text-sm mb-2">Looking for older versions?</p>
          <a href="#" className="text-accent font-semibold hover:underline">
            View all releases →
          </a>
        </div>
      </div>
    </section>
  )
}
