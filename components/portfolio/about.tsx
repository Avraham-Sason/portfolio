"use client"

import { useLanguage } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { t, isRTL } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const stats = [
    { value: "20+", label: t("about.years") },
    { value: "50+", label: t("about.projects") },
    { value: "15+", label: t("about.technologies") },
  ]

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-primary font-mono text-sm tracking-wider mb-2">
              {t("about.title")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t("about.heading")}
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Text Content */}
            <div className={`lg:col-span-3 space-y-6 ${isRTL ? "lg:order-2" : ""}`}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.p2")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.p3")}
              </p>
            </div>

            {/* Stats */}
            <div className={`lg:col-span-2 ${isRTL ? "lg:order-1" : ""}`}>
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-secondary/50 border border-border rounded-xl p-6 text-center transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
