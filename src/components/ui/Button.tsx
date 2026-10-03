import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  shimmer?: boolean;
}

const variants = {
  primary: cn(
    "relative overflow-hidden text-white shadow-xs",
    "bg-gradient-to-b from-brand to-brand/90",
    "hover:shadow-md hover:brightness-110 active:scale-95",
  ),
  secondary: cn(
    "relative overflow-hidden text-white shadow-xs",
    "bg-gradient-to-b from-accent to-accent/90",
    "hover:shadow-md hover:brightness-110 active:scale-95",
  ),
  outline:
    "border-2 border-brand text-brand bg-transparent hover:bg-brand/8 active:scale-95",
  ghost: "text-brand hover:bg-brand/8 active:scale-95",
};

const sizes = {
  sm: "h-11 px-5 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

const shimmerClass =
  "motion-safe:animate-shimmer shimmer-sweep";

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  shimmer = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none select-none",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        shimmer && shimmerClass,
        className,
      )}
      {...props}
    />
  );
}
