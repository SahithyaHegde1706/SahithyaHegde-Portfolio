import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

type ProjectsSectionProps = {
    badgeText?: string;
    hideHeader?: boolean;
    hideDescription?: boolean;
};

export default function ProjectsSection({
    badgeText = "Projects",
    hideHeader = false,
    hideDescription = false,
}: ProjectsSectionProps) {
    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-10">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
                        />
                        <div className="border border-border/50 bg-background/50 backdrop-blur-sm z-10 rounded-full px-4 py-2">
                            <span className="text-foreground text-sm font-semibold">{badgeText}</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
                        />
                    </div>
                    {!hideHeader && (
                        <div className="flex flex-col gap-y-3 items-center justify-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                From Concept to Deployment
                            </h2>
                            {!hideDescription && (
                                <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-center text-balance">
                                    A showcase of projects built through hands-on learning, problem-solving, and modern development practices—from idea validation and design to deployment and real-world implementation.
                                </p>
                            )}
                        </div>
                    )}
                </div>
                <div className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full w-full max-w-xl"
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}

