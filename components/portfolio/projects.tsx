"use client";

import { useLanguage } from "@/lib/i18n";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Map, Shield, GitBranch, LucideIcon } from "lucide-react";

const ProjectCard = ({
    project,
    index,
}: {
    project: {
        title: string;
        description: string;
        technologies: string[];
        icon: LucideIcon;
        color: string;
    };
    index: number;
}) => {
    const { t } = useLanguage();
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
    const Icon = project.icon;
    const isFromLeft = index % 2 === 0;
    return (
        <div
            ref={ref}
            className={`group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-700 hover:border-primary/50 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-x-0 translate-y-0" : isFromLeft ? "opacity-0 -translate-x-10 -translate-y-10" : "opacity-0 translate-x-10 translate-y-10"
            }`}
        >
            {/* Gradient Header */}
            <div className={`h-32 bg-linear-to-br ${project.color} flex items-center justify-center`}>
                <Icon className="h-12 w-12 text-primary/60 group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent">
                        <Github className="h-4 w-4" />
                        {t("projects.viewCode")}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export function Projects() {
    const { t } = useLanguage();
    const { ref, isVisible } = useScrollAnimation();

    const projects = [
        {
            title: t("projects.fleet.title"),
            description: t("projects.fleet.desc"),
            technologies: ["React", "TypeScript", "Mapbox", "WebSocket", "Node.js"],
            icon: Map,
            color: "from-primary/20 to-chart-2/20",
        },
        {
            title: t("projects.auth.title"),
            description: t("projects.auth.desc"),
            technologies: ["Node.js", "Express", "Firebase", "JWT", "OAuth 2.0"],
            icon: Shield,
            color: "from-chart-2/20 to-primary/20",
        },
        {
            title: t("projects.pipeline.title"),
            description: t("projects.pipeline.desc"),
            technologies: ["Docker", "Kubernetes", "GitHub Actions", "YAML", "GCP"],
            icon: GitBranch,
            color: "from-primary/20 to-chart-3/20",
        },
    ];

    return (
        <section id="projects" className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-10 translate-x-10"}`}>
                    {/* Section Header */}
                    <div className="mb-16 text-center">
                        <p className="text-primary font-mono text-sm tracking-wider mb-2">{t("projects.title")}</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t("projects.heading")}</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">{t("projects.subheading")}</p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
