'use client'

export default function KnotworkHowItWorks() {
  const steps = [
    { number: 1, title: 'Create knots', description: 'Define individual request, assertion, or logic steps' },
    { number: 2, title: 'Connect threads', description: 'Weave data flow between knots' },
    { number: 3, title: 'Weave a flow', description: 'Combine knots into a complete test sequence' },
    { number: 4, title: 'Tighten (run)', description: 'Execute your flow with Knotty' },
    { number: 5, title: 'Untangle (debug)', description: 'Inspect each knot in the flow' },
  ]

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">How It Works</h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              {/* Step number */}
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold text-sm">
                  {step.number}
                </div>
              </div>

              {/* Step content */}
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Connecting thread visualization */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+20px)] w-0.5 h-12 bg-gradient-to-b from-accent via-accent to-transparent opacity-50" />
              )}
            </div>
          ))}
        </div>

        {/* Simple flow diagram text */}
        <div className="mt-16 p-8 bg-background rounded-md border border-border">
          <p className="text-center text-muted-foreground mb-2">A simple flow looks like:</p>
          <p className="text-center font-mono text-sm text-foreground">
            Request → Parse → Assert → Done
          </p>
        </div>
      </div>
    </section>
  )
}
