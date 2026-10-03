import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const variants = {
  primary: "bg-brand text-white hover:bg-brand/90 active:scale-[0.98]",
  secondary: "bg-white border-2 border-charcoal/15 text-charcoal hover:border-charcoal/30 active:scale-[0.98]",
  outline: "border-2 border-brand text-brand bg-transparent hover:bg-brand/5 active:scale-[0.98]",
  ghost: "text-brand hover:bg-brand/5 active:scale-[0.98]",
};

const sizes = {
  sm: "h-11 px-5 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none select-none rounded-lg",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    />
  );
}
