/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function BlogImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-muted/50 via-muted to-muted/50 backdrop-blur-sm flex items-center justify-center">
        <div className="text-muted-foreground text-sm font-medium">Article Cover</div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface BlogCardProps {
  title: string;
  href: string;
  description: string;
  date: string;
  readingTime: number;
  tags: readonly string[];
  image?: string;
  category?: string;
  className?: string;
}

export function BlogCard({
  title,
  href,
  description,
  date,
  readingTime,
  tags,
  image,
  category,
  className,
}: BlogCardProps) {
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
      {/* Glow effect on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
          "bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none",
          isHovered && "opacity-100"
        )}
      />

      {/* Image Section */}
      <div className="relative shrink-0 overflow-hidden">
        <Link href={href} className="block">
          <div className="relative overflow-hidden h-48">
            <BlogImage src={image || ""} alt={title} />
          </div>
        </Link>

        {/* Category Badge */}
        {category && (
          <div className="absolute top-3 left-3 z-10">
            <Badge
              className="bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm border border-primary/50"
              variant="default"
            >
              {category}
            </Badge>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative p-6 flex flex-col gap-4 flex-1">
        {/* Title and Arrow */}
        <div className="flex items-start justify-between gap-2">
          <Link href={href} className="group/title min-w-0 flex-1">
            <h3 className="font-bold text-lg tracking-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
          <ArrowUpRight
            className={cn(
              "h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300",
              isHovered && "translate-x-1 -translate-y-1"
            )}
            aria-hidden
          />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground py-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{readingTime} min read</span>
          </div>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className={cn(
                  "text-[11px] font-semibold border border-border/60 px-2.5 py-0.5 transition-all duration-300",
                  "bg-background/50 hover:bg-background hover:border-border",
                  isHovered && "delay-100"
                )}
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <Link
          href={href}
          className={cn(
            "mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border/50 px-3 py-2",
            "bg-background/50 text-sm font-medium text-foreground",
            "transition-all duration-300 hover:border-border hover:bg-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          Read Article
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
