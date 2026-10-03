import Image from "next/image";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Carousel } from "@/components/ui/Carousel";
import { ArrowRight } from "lucide-react";

interface ServicesProps {
  config: CardConfig;
}

export function Services({ config }: ServicesProps) {
  const { sectionTitles, services } = config;

  return (
    <section className="px-5 mt-8">
      <SectionTitle title={sectionTitles.services} />
      <Carousel showArrows>
        {services.map((service) => (
          <Card key={service.id} padding={false} className="overflow-hidden">
            <div className="relative w-full aspect-4/3">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                {service.category && (
                  <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {service.category}
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-white">{service.title}</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-charcoal/70 leading-relaxed line-clamp-2">
                {service.description}
              </p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Learn more <ArrowRight className="size-4" />
              </button>
            </div>
          </Card>
        ))}
      </Carousel>
    </section>
  );
}
