"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface ResultsGalleryProps {
  config: CardConfig;
}

export function ResultsGallery({ config }: ResultsGalleryProps) {
  const { sectionTitles, results } = config;
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  if (results.length === 0) return null;

  const current = results[activeIndex] ?? results[0];

  const updateSlider = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateSlider(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      updateSlider(e.clientX);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="px-5 mt-8">
      <SectionTitle title={sectionTitles.results} />
      <Card>
        <div className="relative w-full aspect-square select-none">
          <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-xl">
            <Image
              src={current.after}
              alt="After"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="absolute inset-y-0 right-0" style={{ width: `${100 / (sliderPos / 100)}%` }}>
                <Image
                  src={current.before}
                  alt="Before"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-sm cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-white shadow-md flex items-center justify-center">
                <svg className="size-4 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Before
          </div>
          <div className="absolute top-3 right-3 bg-brand/80 text-white text-xs font-semibold px-2 py-1 rounded-full">
            After
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {results.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActiveIndex(i); setSliderPos(50); }}
              className={cn(
                "size-2 rounded-full transition-all duration-200",
                i === activeIndex ? "bg-brand w-6" : "bg-charcoal/20",
              )}
              aria-label={`View result ${i + 1}`}
            />
          ))}
        </div>
        <p className="mt-3 text-xs text-charcoal/50 text-center">
          Results may vary. Individual results are not guaranteed.
        </p>
      </Card>
    </section>
  );
}
