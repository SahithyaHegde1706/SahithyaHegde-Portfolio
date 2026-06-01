"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { AchievementDetail } from "@/data/achievements";

const BLUR_FADE_DELAY = 0.04;

type AchievementDetailPageProps = {
  achievement: AchievementDetail;
};

export default function AchievementDetailPage({
  achievement,
}: AchievementDetailPageProps) {
  const hasStorySections =
    Array.isArray(achievement.storySections) && achievement.storySections.length > 0;

  return (
    <main className="relative flex min-h-dvh flex-col gap-8 md:gap-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/achievements"
          className={cn(
            "mb-4 flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground",
            "transition-colors duration-300 hover:text-foreground"
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Achievements
        </Link>
      </BlurFade>

      {!achievement.hideHeroIntro ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2} className="mx-auto w-full max-w-4xl">
          <div className="space-y-4">
            {!achievement.hideHeroBadges ? (
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-border/60 bg-background/60 text-xs font-semibold"
                >
                  {achievement.type}
                </Badge>
                <Badge className="bg-primary/90 text-primary-foreground text-xs font-semibold">
                  {achievement.status}
                </Badge>
              </div>
            ) : null}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                {achievement.title}
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {achievement.summary}
              </p>
            </div>
          </div>
        </BlurFade>
      ) : null}

      <BlurFade delay={BLUR_FADE_DELAY * 3} className="mx-auto w-full max-w-4xl">
        <div className="relative w-full overflow-hidden rounded-2xl border border-border/40 shadow-lg dark:shadow-xl">
          <img
            src={achievement.certificateImage}
            alt={achievement.certificateAlt}
            className="h-auto w-full object-cover"
          />
        </div>
      </BlurFade>

      {!achievement.hideEventDetails ? (
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="mx-auto w-full max-w-4xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Type
              </p>
              <p className="text-lg font-semibold text-foreground">
                {achievement.type}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Status
              </p>
              <p className="text-lg font-semibold text-foreground">
                {achievement.status}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Date
              </p>
              <p className="text-lg font-semibold text-foreground">
                {achievement.date}
              </p>
            </div>
          </div>
        </BlurFade>
      ) : null}

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5} className="w-full">
          <section className="rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm md:p-8">
            {hasStorySections ? (
              <div className="space-y-8">
                {achievement.storySections?.map((section, index) => (
                  <div
                    key={section.title}
                    className={cn(
                      "space-y-4",
                      index > 0 && "border-t border-border/40 pt-8"
                    )}
                  >
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                      {section.title}
                    </h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Full Experience
                </h2>
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  {achievement.writeUp.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </section>
        </BlurFade>

        {!achievement.hideEventDetails ? (
          <BlurFade delay={BLUR_FADE_DELAY * 6} className="w-full">
            <section className="rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm md:p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Event Details
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {achievement.eventDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="rounded-xl border border-border/50 bg-background/40 p-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {detail.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </BlurFade>
        ) : null}

        {achievement.technologies.length > 0 && !achievement.hideTechnologies ? (
          <BlurFade delay={BLUR_FADE_DELAY * 7} className="w-full">
            <section className="rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm md:p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {achievement.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="outline"
                      className="border-border/60 bg-background/60 text-xs font-medium hover:bg-background"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
            </section>
          </BlurFade>
        ) : null}

        <BlurFade
          delay={BLUR_FADE_DELAY * (achievement.technologies.length > 0 ? 8 : 7)}
          className="w-full"
        >
          <section className="rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm md:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {achievement.learningsTitle ??
                  (hasStorySections ? "Experience & Learnings" : "Learnings & Outcomes")}
              </h2>
              {achievement.learningPoints?.length ? (
                <div className="space-y-4 text-muted-foreground">
                  <ul className="space-y-3 pl-5">
                    {achievement.learningPoints.map((point) => (
                      <li key={point} className="list-disc leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                  {achievement.learnings.length ? (
                    <div className="space-y-4 leading-relaxed">
                      {achievement.learnings.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  {achievement.learnings.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          </section>
        </BlurFade>

        {!achievement.hideOutcome ? (
          <BlurFade
            delay={BLUR_FADE_DELAY * (achievement.technologies.length > 0 ? 9 : 8)}
            className="w-full"
          >
            <section className="rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm md:p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {achievement.outcomeTitle ?? "Outcome"}
                </h2>
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  {achievement.outcome.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          </BlurFade>
        ) : null}
      </div>

      <BlurFade
        delay={BLUR_FADE_DELAY * (achievement.technologies.length > 0 ? 10 : 9)}
        className="mx-auto w-full max-w-4xl"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href="/achievements"
            className={cn(
              "flex items-center justify-center gap-2 rounded-lg px-6 py-3",
              "border border-border/50 bg-background/50 font-medium text-foreground",
              "transition-all duration-300 hover:bg-background/80",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Achievements
          </Link>
          <Link
            href="/about"
            className={cn(
              "flex items-center justify-center gap-2 rounded-lg px-6 py-3",
              "bg-primary font-medium text-primary-foreground",
              "transition-all duration-300 hover:opacity-90",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            Back to About Page
          </Link>
        </div>
      </BlurFade>
    </main>
  );
}
