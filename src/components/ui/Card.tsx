import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: boolean;
}

export function Card({ padding = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl",
        "shadow-sm shadow-charcoal/5",
        padding && "p-5 sm:p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
