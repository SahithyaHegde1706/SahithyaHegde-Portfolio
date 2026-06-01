"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiVisualstudiocode,
} from "react-icons/si";

const iconMap = {
  html5: SiHtml5,
  css3: SiCss3,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  vscode: SiVisualstudiocode,
};

interface SkillCardProps {
  name: string;
  icon?: keyof typeof iconMap | string;
  className?: string;
}

export function SkillCard({
  name,
  icon,
  className,
}: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = icon ? iconMap[icon as keyof typeof iconMap] : undefined;

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300",
        "border bg-white/85 text-zinc-900 shadow-sm backdrop-blur-sm",
        "dark:border-zinc-800/70 dark:bg-zinc-950/70 dark:text-zinc-100",
        "hover:border-zinc-300 dark:hover:border-cyan-400",
        "hover:shadow-lg dark:hover:shadow-[0_0_40px_rgba(56,189,248,0.12)]",
        "hover:-translate-y-1",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
          "bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none",
          isHovered && "opacity-100"
        )}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-3 z-10">
        {Icon && (
          <div
            className={cn(
              "flex items-center justify-center rounded-2xl p-3 transition-transform duration-300",
              "text-zinc-900 dark:text-zinc-100",
              isHovered && "scale-110"
            )}
          >
            <Icon className="h-10 w-10" />
          </div>
        )}
        <h4 className="text-sm font-semibold text-center text-zinc-900 dark:text-zinc-100">
          {name}
        </h4>
      </div>
    </div>
  );
}
