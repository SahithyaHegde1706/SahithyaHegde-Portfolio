/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="w-full h-56 bg-gradient-to-br from-muted/50 via-muted to-muted/50 backdrop-blur-sm" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-56 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
          "bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none",
          isHovered && "opacity-100"
        )}
      />

      <div className="relative shrink-0 overflow-hidden">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative overflow-hidden h-56">
            {video ? (
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                preload="metadata"
                poster={image || undefined}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : image ? (
              <ProjectImage src={image} alt={title} />
            ) : (
              <div className="w-full h-56 bg-gradient-to-br from-muted/50 via-muted to-muted/50 backdrop-blur-sm" />
            )}
          </div>
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-wrap gap-2 z-10">
            {links.map((link, idx) => {
              const isInternal = link.href.startsWith("/");
              return (
                <Link
                  href={link.href}
                  key={idx}
                  target={isInternal ? undefined : "_blank"}
                  rel={isInternal ? undefined : "noopener noreferrer"}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Badge
                    className={cn(
                      "flex items-center gap-1.5 text-xs font-medium transition-all duration-300",
                        "bg-muted/70 text-foreground hover:bg-muted/90 backdrop-blur-sm border border-border/20",
                      isHovered && "translate-y-0 opacity-100"
                    )}
                    variant="default"
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-6 text-center sm:text-left">
        <div className="flex items-start justify-center gap-2 sm:justify-between">
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              {title}
            </h3>
            {dates && (
              <time className="text-xs font-medium text-muted-foreground">
                {dates}
              </time>
            )}
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-1 hidden shrink-0 rounded-sm text-muted-foreground transition-all duration-300 hover:text-foreground sm:block",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "focus-visible:ring-offset-2",
              isHovered && "translate-x-1 -translate-y-1"
            )}
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="prose flex-1 max-w-full text-pretty text-sm leading-relaxed text-muted-foreground dark:prose-invert prose-headings:text-sm prose-headings:font-semibold">
          <Markdown>{description}</Markdown>
        </div>

        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap justify-center gap-2 pt-2 sm:justify-start">
            {tags.map((tag, idx) => (
              <Badge
                key={tag}
                className={cn(
                  "text-[11px] font-semibold border border-border/60 h-7 px-2.5 transition-all duration-300",
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
      </div>
    </div>
  );
}
