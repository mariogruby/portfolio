import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, well-architected code with TypeScript and modern patterns.",
  },
  {
    icon: Palette,
    title: "UX Focused",
    description:
      "Designing interfaces that are intuitive, accessible, and delightful to use.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing for speed with SSR, edge computing, and efficient data strategies.",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            01
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            About
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Crafting digital experiences with purpose
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Full Stack developer specialized in modern web applications using
              TypeScript and Next.js. I build scalable platforms focused on
              performance, usability and real business value. Passionate about
              UX, clean architecture and product thinking.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I believe great software is built at the intersection of
              engineering excellence and user empathy. Every line of code should
              serve a purpose and every interface should tell a story.
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:bg-secondary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
