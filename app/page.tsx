'use client'

import { ArrowRight, Github } from 'lucide-react'
import KnotworkHero from '@/components/knotwork/hero'
import KnotworkWhat from '@/components/knotwork/what-is'
import KnotworkComparison from '@/components/knotwork/comparison'
import KnotworkHowItWorks from '@/components/knotwork/how-it-works'
import KnotworkWhy from '@/components/knotwork/why'
import KnotworkExample from '@/components/knotwork/example'
import KnotworkFileFormat from '@/components/knotwork/file-format'
import KnotworkPhilosophy from '@/components/knotwork/philosophy'
import KnotworkShowcase from '@/components/knotwork/showcase'
import KnotworkDownloads from '@/components/knotwork/downloads'
import KnotworkFooter from '@/components/knotwork/footer'

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <KnotworkHero />
      <KnotworkWhat />
      <KnotworkComparison />
      <KnotworkHowItWorks />
      <KnotworkWhy />
      <KnotworkExample />
      <KnotworkFileFormat />
      <KnotworkPhilosophy />
      <KnotworkShowcase />
      <KnotworkDownloads />
      <KnotworkFooter />
    </div>
  )
}
