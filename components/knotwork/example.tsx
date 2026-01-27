'use client'

export default function KnotworkExample() {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Example Flow</h2>

        {/* Flow diagram */}
        <div className="bg-background rounded-md border border-border p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex-1">
              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground font-mono text-sm rounded font-bold">
                Login
              </div>
            </div>
            <div className="hidden md:block text-muted-foreground">→</div>
            <div className="flex-1">
              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground font-mono text-sm rounded font-bold">
                Extract Token
              </div>
            </div>
            <div className="hidden md:block text-muted-foreground">→</div>
            <div className="flex-1">
              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground font-mono text-sm rounded font-bold">
                Auth Request
              </div>
            </div>
            <div className="hidden md:block text-muted-foreground">→</div>
            <div className="flex-1">
              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground font-mono text-sm rounded font-bold">
                Assert 200
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground italic">
          That's the whole test.
        </p>
      </div>
    </section>
  )
}
