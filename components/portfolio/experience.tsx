"use client"

import { useLanguage } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Briefcase, ExternalLink } from "lucide-react"

export function Experience() {
  const { t, isRTL } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const experiences = [
    {
      title: t("experience.akeyless.title"),
      company: t("experience.akeyless.company"),
      period: t("experience.akeyless.period"),
      current: true,
      descriptions: [
        t("experience.akeyless.desc1"),
        t("experience.akeyless.desc2"),
        t("experience.akeyless.desc3"),
        t("experience.akeyless.desc4"),
        t("experience.akeyless.desc5"),
      ],
      technologies: ["React", "TypeScript", "Next.js", "Node.js", "GCP", "Kubernetes", "Firebase", "n8n"],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-10 -translate-x-10"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-primary font-mono text-sm tracking-wider mb-2">
              {t("experience.title")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t("experience.heading")}
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className={`relative ${isRTL ? "pr-8 border-r-2" : "pl-8 border-l-2"} border-border`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-0 ${
                    isRTL ? "-right-[9px]" : "-left-[9px]"
                  } w-4 h-4 rounded-full ${
                    exp.current ? "bg-primary" : "bg-secondary"
                  } border-4 border-background`}
                />

                {/* Content */}
                <div className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-primary/30">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        {exp.title}
                        {exp.current && (
                          <span className="text-xs font-normal bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                            {t("experience.present")}
                          </span>
                        )}
                      </h3>
                      <p className="text-primary font-medium flex items-center gap-2 mt-1">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                        <ExternalLink className="h-3 w-3" />
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.descriptions.map((desc, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
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
