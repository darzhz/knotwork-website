'use client'

export default function KnotworkWhat() {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">What is Knotwork?</h2>

        <div className="space-y-8">
          <p className="text-lg text-foreground leading-relaxed">
            Knotwork lets you design API tests by connecting small, focused knots into larger flows.
            <br />
            <span className="font-semibold">You see what runs. You run what you see.</span>
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-background rounded-md border border-border">
              <h3 className="font-bold text-foreground mb-3">Visual Editor</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No config files. No DSLs. Draw your tests like you think about them.
              </p>
            </div>
            <div className="p-6 bg-background rounded-md border border-border">
              <h3 className="font-bold text-foreground mb-3">Flow-Based Execution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Each knot is a discrete step. Pass data down the thread. Compose freely.
              </p>
            </div>
            <div className="p-6 bg-background rounded-md border border-border">
              <h3 className="font-bold text-foreground mb-3">Human-Readable Logic</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your test logic is explicit. No magic. No surprises.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-foreground italic">
              "If your API logic looks like spaghetti, we help you tie better knots."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
