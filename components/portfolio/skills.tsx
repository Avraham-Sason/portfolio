"use client";

import { useLanguage } from "@/lib/i18n";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const SkillCategory = ({ category, index }: { category: { title: string; skills: { name: string; level: number }[] }, index: number }) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
    const isFromLeft = index % 2 === 0;
    return (
        <div
            ref={ref}
            className={`bg-card border border-border rounded-xl p-6 transition-all duration-700 hover:border-primary/30 ${
                isVisible ? "opacity-100 translate-y-0 translate-x-0" : isFromLeft ? "opacity-0 -translate-x-12 -translate-y-12" : "opacity-0 translate-x-12 translate-y-12"
            }`}
        >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
            </h3>
            <div className="space-y-4">
                {category.skills.map((skill) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm text-muted-foreground">{skill.name}</span>
                            <span className="text-xs text-muted-foreground/70">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                            <div
                                className="h-full bg-linear-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                                style={{
                                    width: isVisible ? `${skill.level}%` : "0%",
                                    transitionDelay: `${300}ms`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export function Skills() {
    const { t } = useLanguage();
    const { ref: containerRef, isVisible: isContainerVisible } = useScrollAnimation();

    const skillCategories = [
        {
            title: t("skills.frontend"),
            skills: [
                { name: "JavaScript", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "React", level: 95 },
                { name: "Next.js", level: 90 },
                { name: "Vue.js", level: 80 },
                { name: "Vite", level: 85 },
            ],
        },
        {
            title: t("skills.backend"),
            skills: [
                { name: "Node.js", level: 90 },
                { name: "Express", level: 90 },
                { name: "Firebase", level: 85 },
                { name: "REST APIs", level: 90 },
            ],
        },
        {
            title: t("skills.cloud"),
            skills: [
                { name: "Docker", level: 85 },
                { name: "Kubernetes", level: 80 },
                { name: "GCP", level: 85 },
                { name: "YAML", level: 90 },
            ],
        },
        {
            title: t("skills.ui"),
            skills: [
                { name: "Tailwind CSS", level: 95 },
                { name: "shadcn/ui", level: 90 },
                { name: "CSS/SCSS", level: 90 },
                { name: "HTML5", level: 95 },
            ],
        },
        {
            title: t("skills.automation"),
            skills: [
                { name: "n8n", level: 85 },
                { name: "PowerShell", level: 75 },
                { name: "Shell Scripts", level: 80 },
            ],
        },
        {
            title: t("skills.tools"),
            skills: [
                { name: "Git", level: 95 },
                { name: "GitHub", level: 95 },
                { name: "VS Code", level: 95 },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={containerRef}
                    className={`transition-all duration-700 ${isContainerVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-10 translate-x-10"}`}
                >
                    {/* Section Header */}
                    <div className="mb-16 text-center">
                        <p className="text-primary font-mono text-sm tracking-wider mb-2">{t("skills.title")}</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t("skills.heading")}</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">{t("skills.subheading")}</p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <SkillCategory key={category.title} category={category} index={categoryIndex} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
