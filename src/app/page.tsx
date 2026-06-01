import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <h1 className="sr-only">Hi, I'm Sahithya Hegde</h1>
        <div className="mx-auto w-full max-w-3xl space-y-8 px-2 sm:px-4 md:px-0">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="order-2 flex max-w-xl flex-col items-center gap-3 text-center md:order-1 md:items-start md:text-left">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="order-1 flex justify-center md:order-2 md:justify-end"
            >
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <div className="relative my-0 flex justify-center">
        <div className="h-px w-[80%] bg-gradient-to-r from-transparent via-border/20 to-transparent blur-[1px]" />
      </div>
      <section id="about">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-y-4 text-center md:items-start md:text-left">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose mx-auto w-full max-w-5xl text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert md:mx-0">
              <p>
                Currently pursuing a Bachelor of Engineering in Computer Engineering and actively building full-stack web applications. Beyond coding, I enjoy exploring emerging technologies, participating in hackathons, contributing to projects, and constantly challenging myself to learn something new every day.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <div className="relative my-0 flex justify-center">
        <div className="h-px w-[80%] bg-gradient-to-r from-transparent via-border/20 to-transparent blur-[1px]" />
      </div>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection
            badgeText="Things I've Built So Far"
            hideHeader
            hideDescription
          />
        </BlurFade>
      </section>
      <div className="relative my-0 flex justify-center">
        <div className="h-px w-[80%] bg-gradient-to-r from-transparent via-border/20 to-transparent blur-[1px]" />
      </div>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
