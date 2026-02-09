import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { TechStack } from "@/components/portfolio/tech-stack"
import { Projects } from "@/components/portfolio/projects"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  )
}
