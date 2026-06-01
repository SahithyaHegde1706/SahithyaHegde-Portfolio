import type { Metadata } from "next";
import BlurFade from "@/components/magicui/blur-fade";
import { SkillCard } from "@/components/skill-card";
import { TimelineCard } from "@/components/timeline-card";
import { AchievementCard } from "@/components/achievement-card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { featuredAchievementSummaries } from "@/data/achievements";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Sahithya Hegde",
  description:
    "Learn more about Sahithya Hegde, a Computer Engineering student and Full Stack Developer specializing in MERN Stack, Next.js, React, and modern web technologies.",
  openGraph: {
    title: "About | Sahithya Hegde",
    description:
      "Learn more about Sahithya Hegde, a Computer Engineering student and Full Stack Developer specializing in MERN Stack, Next.js, React, and modern web technologies.",
  },
  twitter: {
    title: "About | Sahithya Hegde",
    description:
      "Learn more about Sahithya Hegde, a Computer Engineering student and Full Stack Developer specializing in MERN Stack, Next.js, React, and modern web technologies.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function AboutPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-20 relative">
      {/* Section 1: About Me */}
      <section id="about-me">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex items-center w-full mb-8">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border border-border/50 bg-background/50 backdrop-blur-sm z-10 rounded-full px-4 py-2">
              <span className="text-foreground text-sm font-semibold">About Me</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left: Text Content */}
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="space-y-4">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Currently pursuing a Bachelor of Engineering in Computer Engineering at Bharati Vidyapeeth College of Engineering. I enjoy building full-stack applications, exploring modern web technologies, participating in hackathons, and continuously improving my development skills through hands-on projects.
                  </p>
                </div>
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h3 className="font-semibold text-foreground mb-2">What I&apos;m Passionate About</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {DATA.aboutDetails.passion}
                  </p>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
                  <a href="/resume/Resume.pdf" download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Link href="/#contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full gap-2 sm:w-auto">
                    Get in Touch
                    <ArrowDownRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </BlurFade>
          </div>

          {/* Right: Avatar and Social */}
          <BlurFade delay={BLUR_FADE_DELAY * 3} className="hidden lg:flex flex-col items-center justify-center">
            <div className="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/10 to-transparent p-8">
              <Avatar className="w-full h-full">
                <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
                <AvatarFallback className="text-4xl font-bold">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {Object.values(DATA.contact.social)
                .filter((social) => social.navbar)
                .map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border/50 bg-background/50 hover:border-border hover:bg-background transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-4 h-4">
                      {social.icon ? social.icon({ className: "w-4 h-4" }) : null}
                    </div>
                  </Link>
                ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Section 2: Skills */}
      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex items-center w-full mb-6">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border border-border/50 bg-background/50 backdrop-blur-sm z-10 rounded-full px-4 py-2">
              <span className="text-zinc-900 font-semibold dark:text-zinc-100 text-sm">Technologies I Work With</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </BlurFade>

        {/* Frontend Skills */}
        <div className="mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h3 className="mb-6 text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-left">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {DATA.skillsDetailed.frontend.map((skill, idx) => (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 4 + idx * 0.05}>
                  <SkillCard
                    name={skill.name}
                    icon={skill.icon}
                  />
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Backend Skills */}
        <div className="mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h3 className="mb-6 text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-left">Backend & Databases</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {DATA.skillsDetailed.backend.map((skill, idx) => (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 6 + idx * 0.05}>
                  <SkillCard
                    name={skill.name}
                    icon={skill.icon}
                  />
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Tools */}
        <div className="mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h3 className="mb-6 text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-left">Tools & Platforms</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {DATA.skillsDetailed.tools.map((skill, idx) => (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 8 + idx * 0.05}>
                  <SkillCard
                    name={skill.name}
                    icon={skill.icon}
                  />
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>

      </section>

      {/* Section 3: Timeline */}
      <section id="experience">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex items-center w-full mb-8">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border border-border/50 bg-background/50 backdrop-blur-sm z-10 rounded-full px-4 py-2">
              <span className="text-foreground text-sm font-semibold">Experience</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight md:text-left md:text-5xl">
            Internships & Education
          </h2>
        </BlurFade>

        <div className="relative">
          {DATA.experience.map((item, idx) => (
            <BlurFade
              key={idx}
              delay={BLUR_FADE_DELAY * 3 + idx * 0.05}
            >
              <TimelineCard
                {...item}
                index={idx}
                total={DATA.experience.length}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Section 4: Achievements */}
      <section id="achievements">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex items-center w-full mb-8">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border border-border/50 bg-background/50 backdrop-blur-sm z-10 rounded-full px-4 py-2">
              <span className="text-foreground text-sm font-semibold">Achievements</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight md:text-left md:text-5xl">
            Hackathons & Participations
          </h2>
        </BlurFade>

        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredAchievementSummaries.map((achievement, idx) => (
            <BlurFade
              key={achievement.slug}
              delay={BLUR_FADE_DELAY * 3 + idx * 0.05}
              className="h-full"
            >
              <AchievementCard
                title={achievement.title}
                date={achievement.date}
                summary={achievement.summary}
                hideTitleArrow
                summaryLines={1}
                href={`/achievements/${achievement.slug}`}
              />
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 5} className="mt-8 flex justify-center md:justify-start">
          <Link
            href="/achievements"
            className={cn(
              "group inline-flex items-center gap-2 rounded-lg px-6 py-3",
              "bg-primary font-medium text-primary-foreground",
              "transition-all duration-300 hover:opacity-90",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            View All Achievements
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </BlurFade>
      </section>
    </main>
  );
}
