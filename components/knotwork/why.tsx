'use client'

export default function KnotworkWhy() {
  const reasons = [
    'Visual by default — test logic that is easier to read than code',
    'Composable flows — reuse knots across multiple tests',
    'Rust-powered execution — fast, safe, and reliable',
    'No hidden magic — every step is explicit and transparent',
    'Built for teams — shareable, reviewable, versionable flows',
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Why Knotwork?</h2>

        <div className="space-y-4 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 text-accent font-bold text-lg mt-1">✓</div>
              <p className="text-lg text-foreground leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>

        {/* Understated closing line */}
        <div className="border-l-4 border-accent pl-6 py-4">
          <p className="text-foreground font-semibold">
            Complex systems are inevitable. Confusing ones are optional.
          </p>
        </div>
      </div>
    </section>
  )
}
