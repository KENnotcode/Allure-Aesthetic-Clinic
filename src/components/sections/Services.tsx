import Image from "next/image";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowRight } from "lucide-react";

interface ServicesProps {
  config: CardConfig;
}

export function Services({ config }: ServicesProps) {
  const { sectionTitles, services } = config;

  return (
    <section id="services" className="bg-white">
      <div className="px-5 py-14 sm:py-16">
        <SectionTitle title={sectionTitles.services} subtitle="Advanced treatments designed to enhance your natural beauty." />
        <div className="grid grid-cols-1 gap-4">
          {services.map((service) => (
            <div key={service.id} className="group bg-warm-ivory rounded-xl overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  {service.category && (
                    <span className="inline-block bg-champagne text-white text-xs font-semibold px-3 py-1 rounded-md mb-2 uppercase tracking-wide">
                      {service.category}
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
