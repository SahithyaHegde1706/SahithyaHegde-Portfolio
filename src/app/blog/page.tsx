import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Portfolio-focused articles on full stack development, hackathons, and building real-world projects.",
  openGraph: {
    title: "Blog",
    description:
      "Portfolio-focused articles on full stack development, hackathons, and building real-world projects.",
    images: [{ url: `${DATA.url}${DATA.avatarUrl}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description:
      "Portfolio-focused articles on full stack development, hackathons, and building real-world projects.",
    images: [`${DATA.url}${DATA.avatarUrl}`],
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <h1 className="sr-only">Blog</h1>
      <section id="blog">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border border-border/50 bg-background/50 backdrop-blur-sm z-10 rounded-full px-4 py-2">
              <span className="text-foreground text-sm font-semibold">Articles & Insights</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2} className="mt-12">
          <div className="mx-auto w-full max-w-3xl">
            <div className="rounded-3xl border border-border/70 bg-background/70 p-10 shadow-[0_0_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
              <div className="flex flex-col gap-6 text-center">
                <p className="text-3xl md:text-4xl font-semibold">🚀 Content In Progress</p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Technical articles, project case studies, hackathon experiences, and development insights will be added soon. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
