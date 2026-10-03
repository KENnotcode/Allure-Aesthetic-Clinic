"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  config: CardConfig;
}

export function Testimonials({ config }: TestimonialsProps) {
  const { sectionTitles, testimonials } = config;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (paused || testimonials.length <= 1) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next, testimonials.length]);

  const current = testimonials[index] ?? testimonials[0];

  return (
    <section className="px-5 mt-8">
      <SectionTitle title={sectionTitles.testimonials} />
      <Card
        className="relative overflow-hidden"
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <Quote className="absolute top-4 right-4 size-10 text-brand/10" />
        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={current.avatar}
              alt={current.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-charcoal">{current.name}</p>
            <div className="flex gap-0.5 mt-0.5">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-charcoal/70 leading-relaxed italic">
          &quot;{current.text}&quot;
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={cn(
                "size-2 rounded-full transition-all duration-200",
                i === index ? "bg-brand w-6" : "bg-charcoal/20",
              )}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </Card>
    </section>
  );
}
