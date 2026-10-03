import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: boolean;
  hover?: boolean;
}

export function Card({ padding = true, hover = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-3xl",
        "shadow-xs shadow-charcoal/5",
        hover && "card-hover",
        padding && "p-5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
