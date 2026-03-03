"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React / Next.js",
      "TypeScript",
      "HTML5 / CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js / Express",
      "C# / .NET / ASP.NET",
      "Python / FastAPI / Django",
      "REST APIs",
      "Authentication / JWT",
    ],
  },
  {
    title: "Database",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Redis",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      // "Kubernetes",
      "AWS",
      "Azure",
      "CI/CD Pipelines",
      "Infrastructure as Code",
    ],
  },
]

const experience = [
  {
    period: "2023 — Present",
    role: "Full-Stack Software Developer",
    company: "Enterprise Solutions",
    description:
      "Architecting and building scalable web applications using .NET, React, and cloud infrastructure. Leading backend system design with Clean Architecture and CQRS patterns.",
    technologies: ["C#", ".NET", "React", "PostgreSQL", "Docker", "AWS"],
  },
  {
    period: "2022 — 2023",
    role: "Backend Developer",
    company: "Tech Startup",
    description:
      "Built RESTful APIs and microservices serving thousands of concurrent users. Implemented CI/CD pipelines and containerized deployments.",
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "Azure"],
  },
  {
    period: "2021 — 2022",
    role: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Developed responsive web applications with React and TypeScript. Collaborated with designers to create pixel-perfect, accessible interfaces.",
    technologies: ["React", "TypeScript", "CSS3", "Bootstrap", "JavaScript"],
  },
  {
    period: "2020 — 2021",
    role: "Junior Developer",
    company: "University of Pretoria",
    description:
      "Started my tech journey building web applications. Gained foundational skills in HTML, CSS, JavaScript, and modern frameworks.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "SQL"],
  },
]

export function SkillsSection() {
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative px-6 py-24 lg:py-32"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Skills & Experience
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My technical toolkit
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="mb-24 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/20 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + catIndex * 100}ms` }}
            >
              {/* Subtle hover accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Category header */}
              <div className="mb-5 flex items-center gap-2">
                <span className="text-xs text-primary">◆</span>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition-all duration-500 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${200 + catIndex * 100 + skillIndex * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="mb-10 text-2xl font-bold tracking-tight text-foreground">
            Experience
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:block" />

            <div className="flex flex-col gap-10">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`group relative flex flex-col gap-4 transition-all duration-700 md:flex-row md:gap-10 md:pl-8 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${700 + index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-1 top-1.5 hidden h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-150 group-hover:bg-primary md:block" />

                  {/* Period */}
                  <div className="flex-shrink-0 md:w-40">
                    <span className="font-mono text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20">
                    <h4 className="text-base font-semibold text-foreground">
                      {exp.role}{" "}
                      <span className="text-primary">
                        {"· "}
                        {exp.company}
                      </span>
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
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
      </div>
    </section>
  )
}