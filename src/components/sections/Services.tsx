import Image from "next/image";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

interface ServicesProps {
  config: CardConfig;
}

export function Services({ config }: ServicesProps) {
  const { sectionTitles, services } = config;

  return (
    <section id="services" className="bg-white">
      <div className="px-5 py-14 sm:py-16">
        <SectionTitle title={sectionTitles.services} subtitle="Advanced treatments designed to enhance your natural beauty." align="left" eyebrow="Services" />
        <div className="flex flex-col gap-0">
          {services.map((service, idx) => (
            <div key={service.id} className={cn("py-6", idx < services.length - 1 && "border-b border-charcoal/10")}>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
                <div className="relative w-full sm:w-48 aspect-[4/3] sm:aspect-[3/4] rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  {service.category && (
                    <p className="text-[10px] font-semibold text-champagne uppercase tracking-[0.2em] mb-2">
                      {service.category}
                    </p>
                  )}
                  <h3 className="font-heading text-xl font-bold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
