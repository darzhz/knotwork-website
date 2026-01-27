'use client'

export default function KnotworkPhilosophy() {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Philosophy</h2>

        <p className="text-lg text-foreground leading-relaxed">
          Knotwork exists to make API logic visible, explicit, and hard to lie about.
        </p>

        <p className="text-muted-foreground text-sm mt-8">
          When you can see what your tests do, you can improve them. When tests are explicit, you can trust them.
        </p>
      </div>
    </section>
  )
}
