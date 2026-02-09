import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="px-6 pb-10 pt-32">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">04</span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contact</span>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              {"Let's work together"}
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground leading-relaxed">
              {"If you'd like to discuss a project or just say hi, I'm always open to chat. Feel free to reach out through any of these channels."}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:mariogabrielrn@icloud.com"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:bg-secondary/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">mariogabrielrn@icloud.com</p>
              </div>
            </a>

            <a
              href="https://github.com/mariogruby"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:bg-secondary/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">GitHub</p>
                <p className="text-sm text-muted-foreground">@mariogruby</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mario-ruby-691b78265/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:bg-secondary/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">LinkedIn</p>
                <p className="text-sm text-muted-foreground">Mario Ruby</p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-mono text-xs text-muted-foreground/60">
            {"© 2026 Mario Ruby — Built with passion"}
          </p>
          <p className="font-mono text-xs text-muted-foreground/40">
            Designed & Developed by Mario Ruby
          </p>
        </div>
      </div>
    </footer>
  )
}
