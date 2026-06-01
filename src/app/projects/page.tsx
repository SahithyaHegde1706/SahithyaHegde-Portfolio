import type { Metadata } from "next";
import BlurFade from "@/components/magicui/blur-fade";
import ProjectsSection from "@/components/section/projects-section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore portfolio projects built with modern web technologies including React, Next.js, Node.js, and MongoDB.",
  openGraph: {
    title: "Projects",
    description:
      "Explore portfolio projects built with modern web technologies including React, Next.js, Node.js, and MongoDB.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <h1 className="sr-only">Projects</h1>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <ProjectsSection />
        </BlurFade>
      </section>
    </main>
  );
}
