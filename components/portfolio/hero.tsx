import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <header className="relative flex min-h-screen flex-col items-start justify-center px-6">
      <div className="mx-auto w-full max-w-6xl">
        {/* Status badge */}
        <div className="mb-8 flex items-center gap-2 opacity-0 animate-fade-in-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-pulse-glow" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            Available for work
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in-up animate-delay-100 md:text-7xl lg:text-8xl">
          <span className="text-balance">Mario Ruby</span>
        </h1>

        {/* Role */}
        <p className="mt-4 text-xl text-muted-foreground opacity-0 animate-fade-in-up animate-delay-200 md:text-2xl">
          Full Stack Web Developer
        </p>

        {/* Description */}
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground/80 opacity-0 animate-fade-in-up animate-delay-300">
          Building scalable platforms focused on performance, usability and real business value.
          Specialized in modern web applications using TypeScript and Next.js.
        </p>

        {/* Social links */}
        <div className="mt-10 flex items-center gap-4 opacity-0 animate-fade-in-up animate-delay-400">
          <a
            href="https://github.com/mariogruby"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mario-ruby-691b78265/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:mariogabrielrn@icloud.com"
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 transition-colors hover:text-primary opacity-0 animate-fade-in-up animate-delay-500"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </header>
  )
}
