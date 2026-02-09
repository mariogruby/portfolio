const technologies = [
  { name: "TypeScript", category: "Language" },
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "Node.js", category: "Runtime" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Stripe", category: "Payments" },
]

export function TechStack() {
  return (
    <section id="stack" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">02</span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Stack</span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Technologies I work with
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          A curated set of tools and frameworks I use to build production-ready applications.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:bg-secondary/50"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                {tech.category}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {tech.name}
              </span>
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
