"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Server, Cloud, Workflow } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    label: "Frontend",
    description: "React, TypeScript, Next.js",
  },
  {
    icon: Server,
    label: "Backend",
    description: "Node.js, .NET, Python",
  },
  {
    icon: Cloud,
    label: "Cloud",
    description: "AWS, Azure, Docker",
  },
  {
    icon: Workflow,
    label: "DevOps",
    description: "CI/CD, K8s, IaC",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    const current = sectionRef.current
    if (current) observer.observe(current)
    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  return (
    <section
      id="about"
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
            About Me
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get to know me
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Text Content */}
          <div
            className={`flex-1 transition-all delay-200 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="leading-relaxed text-muted-foreground">
              {
                "I'm a full-stack engineer who builds production systems with business impact in mind. I architect backends using Clean Architecture, CQRS, and event-driven patterns\u2014balancing technical excellence with cost efficiency and pragmatic decision-making."
              }
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {
                "My journey started with curiosity about how things worked in the browser, which evolved into deep expertise across backend systems, databases, cloud infrastructure, and automated deployments. I've built systems at real scale: enterprise LMS platforms serving thousands of concurrent users, e-commerce automation with payment integration and real-time order tracking, and AI-powered applications."
              }
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {
                "I work across the full stack: C# .NET, ASP.NET Core, Node.js, Python, PostgreSQL, SQL Server, MongoDB, Docker, AWS, and Azure. I own solutions end-to-end\u2014from database design to deployment\u2014and I make technical decisions that align with business goals, not just what's trendy."
              }
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {
                "Driven by curiosity and systems thinking, I connect the dots from frontend to backend and to deployment\u2014creating innovative solutions that work in the real world. Off the clock, I'm either on the soccer field or diving deep into whatever problem has my attention."
              }
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid flex-shrink-0 grid-cols-2 gap-4 lg:w-80">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`group rounded-xl border border-border bg-card p-5 transition-all duration-700 hover:border-primary/30 hover:bg-primary/5 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <item.icon
                  size={24}
                  className="mb-3 text-primary transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-sm font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
