"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
  dotsClassName?: string;
  showDots?: boolean;
  showArrows?: boolean;
}

export function Carousel({
  children,
  className,
  itemClassName,
  activeIndex: externalActiveIndex,
  onActiveChange,
  dotsClassName,
  showDots = true,
  showArrows = false,
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [internalActive, setInternalActive] = useState(0);
  const activeIndex = externalActiveIndex ?? internalActive;

  const childArray = React.Children.toArray(children);
  const count = childArray.length;

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    if (index !== activeIndex) {
      if (onActiveChange) {
        onActiveChange(index);
      } else {
        setInternalActive(index);
      }
    }
  }, [activeIndex, onActiveChange]);

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    scrollTo(activeIndex);
  }, [activeIndex, scrollTo]);

  const prev = () => scrollTo(Math.max(0, activeIndex - 1));
  const next = () => scrollTo(Math.min(count - 1, activeIndex + 1));

  return (
    <div className={className}>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 pb-4 no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {childArray.map((child, i) => (
            <div
              key={i}
              className={cn(
                "snap-center shrink-0 w-full min-w-0",
                itemClassName,
              )}
            >
              {child}
            </div>
          ))}
        </div>
        {showArrows && count > 1 && (
          <>
            {activeIndex > 0 && (
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex size-10 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm active:scale-95"
                aria-label="Previous"
              >
                <ChevronLeft className="size-5" />
              </button>
            )}
            {activeIndex < count - 1 && (
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex size-10 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm active:scale-95"
                aria-label="Next"
              >
                <ChevronRight className="size-5" />
              </button>
            )}
          </>
        )}
      </div>
      {showDots && count > 1 && (
        <div className={cn("flex items-center justify-center gap-2 mt-2", dotsClassName)}>
          {childArray.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={cn(
                "size-2 rounded-full transition-all duration-200",
                i === activeIndex ? "bg-brand w-6" : "bg-charcoal/20",
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
