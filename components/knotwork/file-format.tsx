'use client'

export default function KnotworkFileFormat() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">File Format</h2>

        <div className="bg-secondary rounded-md border border-border p-8 mb-8">
          <p className="text-center">
            <code className="font-mono text-2xl font-bold text-primary">.knot</code>
          </p>
        </div>

        <p className="text-center text-muted-foreground text-lg">
          Yes, really.
        </p>
      </div>
    </section>
  )
}
