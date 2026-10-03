"use client";

import React, { useState } from "react";
import { ChevronDown, Quote } from "lucide-react";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface AboutProps {
  config: CardConfig;
}

export function About({ config }: AboutProps) {
  const [expanded, setExpanded] = useState(false);
  const { sectionTitles } = config;
  const bio = config.profile.bio;
  const isLong = bio.length > 120;

  return (
    <section className="px-5 mt-8">
      <SectionTitle title={sectionTitles.about} />
      <div className="relative bg-white/70 backdrop-blur rounded-3xl p-5 shadow-xs border border-white/60 overflow-hidden">
        <Quote className="absolute top-4 right-4 size-10 text-brand/10" />
        <div className="border-l-4 border-brand pl-4">
          <div
            className="text-sm text-charcoal/80 leading-relaxed transition-all duration-300"
            style={{ maxHeight: expanded || !isLong ? "500px" : "4.5rem", overflow: "hidden" }}
          >
            {bio}
          </div>
        </div>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand"
          >
            {expanded ? "Read less" : "Read more"}
            <ChevronDown
              className={`size-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
    </section>
  );
}
