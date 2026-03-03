"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"

const projects = [
  {
    title: "Enterprise LMS Platform",
    image: "/security.png",
    description:
      "A full-stack learning management system serving thousands of concurrent users. Features include course management, real-time progress tracking, role-based access control, and automated grading.",
    technologies: ["C#", ".NET", "React", "PostgreSQL", "Docker", "AWS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce Automation Engine",
    image: "/ecommerce.png",
    description:
      "End-to-end e-commerce platform with payment integration, real-time order tracking, inventory management, and automated email notifications. Built with microservices architecture.",
    technologies: ["Node.js", "Express", "MongoDB", "Stripe", "Redis", "Docker"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "AI-Powered Content Generator",
    image: "/ai.png",
    description:
      "An intelligent content creation tool leveraging machine learning APIs for text generation, summarization, and sentiment analysis with a clean React dashboard.",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "OpenAI", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "DevOps Dashboard",
    image: "/devops.png",
    description:
      "Real-time monitoring dashboard for CI/CD pipelines, container health, and deployment status across multiple environments.",
    technologies: ["Next.js", "TypeScript", "Docker", "K8s", "WebSocket"],
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Task Management API",
    image: "/api.png",
    description:
      "RESTful API with JWT authentication, rate limiting, and comprehensive Swagger documentation. Follows Clean Architecture principles.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Azure"],
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Real-Time Chat Application",
    image: "/chat.png",
    description:
      "WebSocket-based chat app with rooms, typing indicators, message persistence, and file sharing capabilities.",
    technologies: ["Node.js", "Socket.io", "React", "MongoDB", "Redis"],
    github: "#",
    live: null,
    featured: false,
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const current = sectionRef.current
    if (current) observer.observe(current)
    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Projects
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured work
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="mb-16 flex flex-col gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-700 hover:border-primary/30 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-300 group-hover:opacity-15"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-6 p-6 md:p-8">
                {/* Project header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="max-w-2xl leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <h3 className="mb-8 text-xl font-bold tracking-tight text-foreground">
            Other noteworthy projects
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-700 hover:border-primary/20 hover:-translate-y-1 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-300 group-hover:opacity-15"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="mb-4 flex items-center justify-between">
                    <Folder size={28} className="text-primary" />
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="mb-2 font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                    {project.title}
                  </h4>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}