"use client";

import React from "react";
import { MapPin, Clock, Navigation, Phone } from "lucide-react";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface LocationsProps {
  config: CardConfig;
}

export function Locations({ config }: LocationsProps) {
  const { sectionTitles, locations } = config;
  const [openStates, setOpenStates] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    const computeOpen = () => {
      const states: Record<string, boolean> = {};
      locations.forEach((location) => {
        const tz = location.timezone || "Asia/Manila";
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        });
        const parts = formatter.formatToParts(now);
        const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
        const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
        const currentMinutes = hour * 60 + minute;
        const lower = location.hours.toLowerCase();
        const match = lower.match(/(\d{1,2}(?:am|pm))\s*-\s*(\d{1,2}(?:am|pm))/i);
        if (!match) {
          states[location.id] = true;
          return;
        }
        const toMinutes = (str: string) => {
          const s = str.toLowerCase();
          const [hm, mod] = s.includes("am") ? s.split("am") : s.split("pm");
          const [h, m] = hm.trim().split(":").map(Number);
          if (mod === "pm" && h !== 12) return h * 60 + (m || 0) + 720;
          if (mod === "am" && h === 12) return m || 0;
          return h * 60 + (m || 0);
        };
        const start = toMinutes(match[1]);
        const end = toMinutes(match[2]);
        states[location.id] = currentMinutes >= start && currentMinutes < end;
      });
      setOpenStates(states);
    };
    computeOpen();
    const id = setInterval(computeOpen, 60000);
    return () => clearInterval(id);
  }, [locations]);

  return (
    <section id="locations" className="bg-white">
      <div className="px-5 py-14 sm:py-16">
        <SectionTitle title={sectionTitles.locations} subtitle="Visit us at one of our convenient locations." align="left" eyebrow="Our Locations" />
        <div className="flex flex-col gap-4">
          {locations.map((location) => {
            const isOpen = openStates[location.id] ?? false;
            return (
              <div key={location.id} className="border border-charcoal/10 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-bold text-charcoal">
                    {location.name}
                  </h3>
                  <span
                    className={`shrink-0 text-[11px] font-semibold px-2 py-1 rounded-md ${
                      isOpen ? "bg-brand/10 text-brand" : "bg-charcoal/5 text-charcoal/60"
                    }`}
                  >
                    {isOpen ? "Open" : "Closed"}
                  </span>
                </div>
                <div className="mt-3 flex items-start gap-2.5">
                  <MapPin className="size-4 text-brand shrink-0 mt-0.5" />
                  <p className="text-sm text-charcoal/70">{location.address}</p>
                </div>
                {location.phone && (
                  <div className="mt-2 flex items-start gap-2.5">
                    <Phone className="size-4 text-brand shrink-0 mt-0.5" />
                    <a href={`tel:${location.phone}`} className="text-sm text-brand">
                      {location.phone}
                    </a>
                  </div>
                )}
                <div className="mt-2 flex items-start gap-2.5">
                  <Clock className="size-4 text-brand shrink-0 mt-0.5" />
                  <p className="text-sm text-charcoal/70">{location.hours}</p>
                </div>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 h-12 w-full rounded-lg border-2 border-charcoal/15 text-charcoal font-semibold text-sm hover:border-charcoal/30 active:scale-[0.98] transition-all"
                >
                  <Navigation className="size-4" />
                  Get Directions
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
