import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionTitle({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className,
  titleClassName,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-12",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold text-champagne uppercase tracking-[0.2em] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-heading text-3xl sm:text-4xl font-bold tracking-tight", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-3 text-base text-muted max-w-2xl", align === "center" && "mx-auto")}>{subtitle}</p>
      )}
    </div>
  );
}
