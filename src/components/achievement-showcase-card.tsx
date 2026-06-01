"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type AchievementShowcaseCardProps = {
  title: string;
  date: string;
  summary: string;
  image: string;
  href: string;
  className?: string;
};

export function AchievementShowcaseCard({
  title,
  date,
  summary,
  image,
  href,
  className,
}: AchievementShowcaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm",
        "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-border hover:bg-background/80",
        "hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.1)]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100"
        )}
      />

      <div className="relative shrink-0 overflow-hidden">
        <Link href={href} className="block">
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted/50 via-muted to-muted/50">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-6 text-center sm:text-left">
        <div className="flex items-start justify-center gap-3 sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-lg font-bold tracking-tight text-foreground">
              {title}
            </h2>
            <p className="text-xs font-medium text-muted-foreground">{date}</p>
          </div>
          <Link
            href={href}
            className={cn(
              "mt-1 hidden shrink-0 rounded-sm text-muted-foreground transition-all duration-300 hover:text-foreground sm:block",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              isHovered && "translate-x-1 -translate-y-1"
            )}
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {summary}
        </p>

        <Link
          href={href}
          className={cn(
            "mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground sm:justify-start",
            "transition-colors duration-300 hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          )}
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
