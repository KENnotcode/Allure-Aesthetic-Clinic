import React from "react";
import { MapPin, Clock, Navigation } from "lucide-react";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";

interface LocationsProps {
  config: CardConfig;
}

export function Locations({ config }: LocationsProps) {
  const { sectionTitles, locations } = config;

  const isOpen = (hours: string) => {
    const now = new Date();
    const day = now.getDay();
    const time = now.getHours() * 60 + now.getMinutes();
    const monday = hours.toLowerCase().includes("mon");
    if (!monday) return true;
    const match = hours.match(/(\d{1,2}(?:am|pm))\s*-\s*(\d{1,2}(?:am|pm))/i);
    if (!match) return true;
    const toMinutes = (str: string) => {
      const lower = str.toLowerCase();
      const [hm, mod] = lower.includes("am") ? lower.split("am") : lower.split("pm");
      let [h, m] = hm.trim().split(":").map(Number);
      if (mod === "pm" && h !== 12) h += 12;
      if (mod === "am" && h === 12) h = 0;
      return h * 60 + (m || 0);
    };
    const start = toMinutes(match[1]);
    const end = toMinutes(match[2]);
    return time >= start && time < end;
  };

  return (
    <section className="px-5 mt-8">
      <SectionTitle title={sectionTitles.locations} />
      <div className="flex flex-col gap-4">
        {locations.map((location) => (
          <Card key={location.id}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-heading text-base font-bold text-charcoal">
                {location.name}
              </h3>
              <span
                className={`shrink-0 text-xs font-semibold px-2 py-1 rounded-full ${
                  isOpen(location.hours)
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {isOpen(location.hours) ? "Open" : "Closed"}
              </span>
            </div>
            <div className="mt-3 flex items-start gap-2">
              <MapPin className="size-4 text-brand shrink-0 mt-0.5" />
              <p className="text-sm text-charcoal/70">{location.address}</p>
            </div>
            <div className="mt-2 flex items-start gap-2">
              <Clock className="size-4 text-brand shrink-0 mt-0.5" />
              <p className="text-sm text-charcoal/70">{location.hours}</p>
            </div>
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 h-12 w-full rounded-full bg-brand text-white font-semibold text-sm hover:brightness-110 active:scale-95 transition-all"
            >
              <Navigation className="size-4" />
              Get Directions
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
