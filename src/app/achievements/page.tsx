import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { AchievementShowcaseCard } from "@/components/achievement-showcase-card";
import { achievementDetails } from "@/data/achievements";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "A showcase of hackathon achievements, competitions, and participation highlights that demonstrate practical development experience.",
  openGraph: {
    title: "Achievements",
    description:
      "A showcase of hackathon achievements, competitions, and participation highlights that demonstrate practical development experience.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function AchievementsPage() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-10 md:gap-14">
      <h1 className="sr-only">Achievements</h1>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/about#achievements"
          className={cn(
            "mb-4 flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground",
            "transition-colors duration-300 hover:text-foreground"
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to About
        </Link>
      </BlurFade>

      <section id="achievements">
        <div className="flex min-h-0 flex-col gap-y-10">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <div className="flex w-full items-center">
                <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                <div className="z-10 rounded-full border border-border/50 bg-background/50 px-4 py-2 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-foreground">
                    Achievements & Participations
                  </span>
                </div>
                <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <p className="max-w-3xl text-center text-base text-balance text-muted-foreground md:text-lg">
                  A collection of hackathons, competitions, and events that
                  helped me grow as a developer through collaboration, problem
                  solving, and hands-on experience.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievementDetails.map((achievement, idx) => (
              <BlurFade
                key={achievement.slug}
                delay={BLUR_FADE_DELAY * 12 + idx * 0.05}
                className="h-full"
              >
                <AchievementShowcaseCard
                  title={achievement.title}
                  date={achievement.date}
                  summary={achievement.summary}
                  image={achievement.certificateImage}
                  href={`/achievements/${achievement.slug}`}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
