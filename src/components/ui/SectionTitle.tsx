import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
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
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
