"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

interface TimelineCardProps {
  type: "internship" | "education";
  title: string;
  company?: string;
  institution?: string;
  position?: string;
  degree?: string;
  duration: string;
  description?: string;
  cgpa?: string;
  technologies?: readonly string[];
  index: number;
  total: number;
  className?: string;
}

export function TimelineCard({
  type,
  title,
  company,
  institution,
  position,
  degree,
  duration,
  description,
  cgpa,
  technologies,
  index,
  total,
  className,
}: TimelineCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;
  const isLast = index === total - 1;

  const Icon = type === "internship" ? Briefcase : GraduationCap;

  return (
    <div
      className={cn("flex gap-8 md:gap-12 relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center hidden md:flex">
        <div
          className={cn(
            "w-12 h-12 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300",
            "bg-background/50 backdrop-blur-sm",
            isHovered && "border-primary bg-primary/10 scale-110"
          )}
        >
          <Icon className={cn("h-5 w-5", isHovered && "text-primary")} />
        </div>
        {!isLast && (
          <div
            className={cn(
              "w-1 flex-1 mt-4 transition-all duration-300",
              "bg-gradient-to-b from-border to-transparent",
              isHovered && "from-primary/60"
            )}
          />
        )}
      </div>

      {/* Mobile timeline dot */}
      <div className="flex flex-col items-center md:hidden">
        <div
          className={cn(
            "w-8 h-8 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300",
            "bg-background/50 backdrop-blur-sm shrink-0 mt-1",
            isHovered && "border-primary bg-primary/10 scale-110"
          )}
        >
          <Icon className={cn("h-4 w-4", isHovered && "text-primary")} />
        </div>
        {!isLast && (
          <div
            className={cn(
              "w-1 flex-1 mt-2 transition-all duration-300",
              "bg-gradient-to-b from-border to-transparent",
              isHovered && "from-primary/60"
            )}
          />
        )}
      </div>

      {/* Content Card */}
      <div className={cn("flex-1", "mb-8 md:mb-12")}>
        <div
          className={cn(
            "rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-6 transition-all duration-300",
            "hover:border-border hover:bg-background/80",
            "hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]",
            isHovered && "-translate-y-1"
          )}
        >
          {/* Glow effect */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none",
              "bg-gradient-to-br from-primary/5 via-transparent to-transparent",
              isHovered && "opacity-100"
            )}
            style={{ pointerEvents: "none" }}
          />

          <div className="relative">
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="font-bold text-lg text-foreground">{title}</h3>
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  {type === "internship"
                    ? position
                      ? `${position} at ${company}`
                      : company
                    : `${degree} at ${institution}`}
                </p>
              </div>
              <Badge
                variant="outline"
                className={cn(
                  "text-xs font-semibold whitespace-nowrap",
                  type === "internship"
                    ? "border-blue-500/50 bg-blue-500/5"
                    : "border-purple-500/50 bg-purple-500/5"
                )}
              >
                {type === "internship" ? "Internship" : "Education"}
              </Badge>
            </div>

            {/* Duration */}
            <p className="text-xs text-muted-foreground mb-4">{duration}</p>

            {/* CGPA */}
            {cgpa && (
              <p className="text-sm text-foreground mb-4">
                <span className="font-semibold">CGPA:</span>{" "}
                <span className="text-muted-foreground">{cgpa}</span>
              </p>
            )}

            {/* Description */}
            {description && (
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {description}
              </p>
            )}

            {/* Technologies */}
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-[11px] font-medium bg-background/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
