import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Rental Cars",
    description:
      "Full booking platform with payments, auth and calendar availability.",
    url: "https://rental-carss-web.vercel.app/",
    tags: [
      "Typescript",
      "Next.js",
      "PostgreSQL",
      "Stripe",
      "Prisma",
      "Tailwind",
    ],
  },
  {
    title: "Easypos Tool",
    description:
      "Advanced POS system for restaurants with analytics and sales tracking.",
    url: "https://easypostool.com",
    tags: ["Typescript", "Next.js", "MongoDB", "Tailwind"],
  },
  {
    title: "E-commerce App",
    description:
      "Full stack online store template built with Next.js and Stripe.",
    url: "https://next-app-project-zeta.vercel.app/",
    tags: ["Typescript", "Next.js", "Strapi", "Stripe", "Tailwind"],
  },
  {
    title: "Omega Social Network",
    description:
      "Social platform with posts, chat and profiles using MERN stack.",
    url: "https://omega-social-network.vercel.app/",
    tags: [
      "Javascript",
      "React",
      "Express",
      "MongoDB",
      "Socket.io",
      "Material UI",
    ],
  },
  {
    title: "Convimillas App (Ironhack school project)",
    description:
      "A web application for managing household chores between couples. Final project for Ironhack, created with the MERN stack.",
    url: "https://convimillas-app.netlify.app/",
    tags: ["React", "Express", "Node.js", "MongoDB", "Javascript"],
  },
  {
    title: "Robertnault Game (Ironhack school project)",
    description: "First game created in my early days as a web developer",
    url: "https://frankgimeno3.github.io/Robernauts/",
    tags: ["Javascript", "DOM", "HTML", "CSS"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            03
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Projects
          </span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Selected work
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          A selection of projects that showcase my skills in full-stack
          development.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30"
            >
              {/* Project number header */}
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <span className="font-mono text-xs text-muted-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-primary/[0.02] opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
