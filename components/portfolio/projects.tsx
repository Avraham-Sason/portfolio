"use client";

import { useLanguage } from "@/lib/i18n";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
    Map,
    Wrench,
    HardHat,
    Activity,
    BookOpen,
    BarChart3,
    Cpu,
    Users,
    Zap,
    RefreshCw,
    Radio,
    Package,
    LucideIcon,
} from "lucide-react";

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
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
    const Icon = project.icon;
    const isFromLeft = index % 2 === 0;
    const bullets = project.description.split("\n").filter(Boolean);
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
            <div className="p-6 flex flex-col h-[calc(100%-8rem)]">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>

                {/* Bulleted description */}
                <ul className="space-y-2 mb-4 flex-1">
                    {bullets.map((line, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                            <span className="text-primary shrink-0 mt-1">•</span>
                            <span>{line}</span>
                        </li>
                    ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
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
            title: t("projects.dashboard.title"),
            description: t("projects.dashboard.desc"),
            technologies: ["React", "TypeScript", "Firebase"],
            icon: Map,
            color: "from-primary/20 to-chart-2/20",
        },
        {
            title: t("projects.toolbox.title"),
            description: t("projects.toolbox.desc"),
            technologies: ["Next.js", "TypeScript", "Firebase", "WebSocket", "WebWorker"],
            icon: Wrench,
            color: "from-chart-2/20 to-primary/20",
        },
        {
            title: t("projects.installer.title"),
            description: t("projects.installer.desc"),
            technologies: ["React", "TypeScript", "Firebase"],
            icon: HardHat,
            color: "from-primary/20 to-chart-3/20",
        },
        {
            title: t("projects.monitor.title"),
            description: t("projects.monitor.desc"),
            technologies: ["Vue.js", "TypeScript", "Firebase", "WebSocket"],
            icon: Activity,
            color: "from-chart-3/20 to-primary/20",
        },
        {
            title: t("projects.knowledge.title"),
            description: t("projects.knowledge.desc"),
            technologies: ["Next.js", "TypeScript", "GitHub Actions", "AI Agent"],
            icon: BookOpen,
            color: "from-chart-2/20 to-chart-3/20",
        },
        {
            title: t("projects.biServer.title"),
            description: t("projects.biServer.desc"),
            technologies: ["Node.js", "Express", "Firebase-Admin", "Redis"],
            icon: BarChart3,
            color: "from-primary/20 to-chart-2/20",
        },
        {
            title: t("projects.devicesServer.title"),
            description: t("projects.devicesServer.desc"),
            technologies: ["Node.js", "Express", "Firebase-Admin", "Redis"],
            icon: Cpu,
            color: "from-chart-2/20 to-primary/20",
        },
        {
            title: t("projects.endUserServer.title"),
            description: t("projects.endUserServer.desc"),
            technologies: ["Node.js", "Express", "Firebase-Admin", "Redis"],
            icon: Users,
            color: "from-primary/20 to-chart-3/20",
        },
        {
            title: t("projects.chargeServer.title"),
            description: t("projects.chargeServer.desc"),
            technologies: ["Node.js", "Express", "Firebase-Admin", "Redis", "OCPI"],
            icon: Zap,
            color: "from-chart-3/20 to-primary/20",
        },
        {
            title: t("projects.dataSyncServer.title"),
            description: t("projects.dataSyncServer.desc"),
            technologies: ["Node.js", "Express", "Redis"],
            icon: RefreshCw,
            color: "from-chart-2/20 to-chart-3/20",
        },
        {
            title: t("projects.dataSocketServer.title"),
            description: t("projects.dataSocketServer.desc"),
            technologies: ["Node.js", "Express", "Redis", "WebSocket"],
            icon: Radio,
            color: "from-primary/20 to-chart-2/20",
        },
        {
            title: t("projects.commons.title"),
            description: t("projects.commons.desc"),
            technologies: ["NPM", "TypeScript"],
            icon: Package,
            color: "from-chart-3/20 to-chart-2/20",
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
