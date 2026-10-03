import React from "react";
import { cn } from "@/lib/utils";
import { Diamond } from "lucide-react";

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
        "mb-8",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      <h2 className="font-heading text-2xl font-bold text-charcoal">{title}</h2>
      <div className="ornament mt-3">
        <Diamond className="ornament-icon size-3.5" />
      </div>
      {subtitle && (
        <p className="mt-3 text-sm text-charcoal/60">{subtitle}</p>
      )}
    </div>
  );
}
