"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Calendar } from "lucide-react";
import { useState } from "react";

interface AchievementCardProps {
  title: string;
  date: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  summaryLines?: 1 | 2 | 3;
  hideTitleArrow?: boolean;
  href?: string;
  className?: string;
}

export function AchievementCard({
  title,
  date,
  summary,
  image,
  imageAlt,
  summaryLines = 3,
  hideTitleArrow,
  href,
  className,
}: AchievementCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500 ease-out",
        "border border-border/50 backdrop-blur-sm bg-background/50",
        "hover:border-border hover:bg-background/80",
        "hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.1)]",
        "hover:-translate-y-1",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
          "bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none",
          isHovered && "opacity-100"
        )}
      />

      {image ? (
        <div className="relative shrink-0 overflow-hidden">
          {href ? (
            <Link href={href} className="block">
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-muted/50 via-muted to-muted/50">
                <img
                  src={image}
                  alt={imageAlt ?? title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          ) : (
            <div className="relative h-44 overflow-hidden bg-gradient-to-br from-muted/50 via-muted to-muted/50">
              <img
                src={image}
                alt={imageAlt ?? title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
        </div>
      ) : null}

      <div className="relative flex flex-1 flex-col gap-4 p-6 text-center sm:text-left">
        <div className="flex items-start justify-center gap-2 sm:justify-between">
          <h3 className="text-lg font-bold tracking-tight text-foreground line-clamp-2">
            {title}
          </h3>
          {href && !hideTitleArrow ? (
            <ArrowUpRight
              className={cn(
                "hidden h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 sm:block",
                isHovered && "translate-x-1 -translate-y-1"
              )}
              aria-hidden
            />
          ) : null}
        </div>

        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground sm:justify-start">
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
        </div>

        <p
          className={cn(
            "text-sm text-muted-foreground leading-relaxed",
            summaryLines === 1 && "line-clamp-1",
            summaryLines === 2 && "line-clamp-2",
            summaryLines === 3 && "line-clamp-3"
          )}
        >
          {summary}
        </p>

        {href ? (
          <Link
            href={href}
            className={cn(
              "mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border/50 px-3 py-2",
              "bg-background/50 text-sm font-medium text-foreground",
              "transition-all duration-300 hover:border-border hover:bg-background",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            View Details
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
