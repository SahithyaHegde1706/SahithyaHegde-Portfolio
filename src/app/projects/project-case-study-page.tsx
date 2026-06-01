"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

type CaseStudySection = {
  title: "Overview" | "Key Highlights" | "Technologies Used" | "Challenges & Learnings";
  paragraphs: readonly string[];
};

export type ProjectCaseStudy = {
  imageSrc: string;
  imageAlt: string;
  category: string;
  inspiredBy: string;
  websiteHref: string;
  technologies: readonly string[];
  sections: readonly CaseStudySection[];
};

type ProjectCaseStudyPageProps = {
  project: ProjectCaseStudy;
};

export default function ProjectCaseStudyPage({
  project,
}: ProjectCaseStudyPageProps) {
  return (
    <main className="relative flex min-h-dvh flex-col gap-8 md:gap-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/projects"
          className={cn(
            "mb-4 flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground",
            "transition-colors duration-300 hover:text-foreground"
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2} className="mx-auto w-full max-w-4xl">
        <div className="relative w-full overflow-hidden rounded-2xl border border-border/40 shadow-lg dark:shadow-xl">
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="h-auto w-full object-cover"
          />
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3} className="mx-auto w-full max-w-4xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Category
            </p>
            <p className="text-lg font-semibold text-foreground">
              {project.category}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Inspired By
            </p>
            <p className="text-lg font-semibold text-foreground">
              {project.inspiredBy}
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        {project.sections.map((section, idx) => (
          <BlurFade
            key={section.title}
            delay={BLUR_FADE_DELAY * (4 + idx)}
            className="w-full"
          >
            <section className="rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm md:p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.title === "Technologies Used" ? (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border/60 bg-background/60 text-xs font-medium hover:bg-background"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          </BlurFade>
        ))}
      </div>

      <BlurFade
        delay={BLUR_FADE_DELAY * (4 + project.sections.length)}
        className="mx-auto w-full max-w-4xl"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href={project.websiteHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group flex items-center justify-center gap-2 rounded-lg px-6 py-3",
              "bg-primary font-medium text-primary-foreground",
              "transition-all duration-300 hover:opacity-90",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            Visit Website
            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className={cn(
              "flex items-center justify-center gap-2 rounded-lg px-6 py-3",
              "border border-border/50 bg-background/50 font-medium text-foreground",
              "transition-all duration-300 hover:bg-background/80",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </BlurFade>
    </main>
  );
}
