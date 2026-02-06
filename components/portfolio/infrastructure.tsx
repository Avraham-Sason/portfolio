"use client"

import { useLanguage } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Container, Network, Cloud, Cog } from "lucide-react"

export function Infrastructure() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const items = [
    {
      icon: Container,
      title: t("infra.containers.title"),
      description: t("infra.containers.desc"),
    },
    {
      icon: Network,
      title: t("infra.orchestration.title"),
      description: t("infra.orchestration.desc"),
    },
    {
      icon: Cloud,
      title: t("infra.cloud.title"),
      description: t("infra.cloud.desc"),
    },
    {
      icon: Cog,
      title: t("infra.automation.title"),
      description: t("infra.automation.desc"),
    },
  ]

  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="text-primary font-mono text-sm tracking-wider mb-2">
              {t("infra.title")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("infra.heading")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("infra.subheading")}
            </p>
          </div>

          {/* Infrastructure Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Architecture Diagram Hint */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent" />
            <div className="relative bg-secondary/30 border border-border rounded-xl p-8 text-center">
              <div className="flex justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span>Frontend</span>
                </div>
                <div className="w-8 border-t border-dashed border-muted-foreground/50" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-chart-2" />
                  <span>API</span>
                </div>
                <div className="w-8 border-t border-dashed border-muted-foreground/50" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-chart-3" />
                  <span>Services</span>
                </div>
                <div className="w-8 border-t border-dashed border-muted-foreground/50" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-chart-4" />
                  <span>Data</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                Modern architectures demand a holistic understanding of the entire stack. From user-facing interfaces to data persistence, every layer matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
