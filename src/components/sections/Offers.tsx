import Image from "next/image";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";

interface OffersProps {
  config: CardConfig;
}

export function Offers({ config }: OffersProps) {
  const { sectionTitles, offers } = config;

  return (
    <section className="px-5 mt-8">
      <SectionTitle title={sectionTitles.offers} />
      <div className="grid grid-cols-2 gap-4">
        {offers.map((offer) => (
          <Card key={offer.id} padding={false} className="gradient-border overflow-hidden flex flex-col">
            <div className="relative w-full aspect-4/3">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover"
              />
              {offer.badge && (
                <span className="absolute top-3 -right-3 rotate-45 bg-accent text-white text-[10px] font-bold px-6 py-1 shadow-sm">
                  {offer.badge}
                </span>
              )}
            </div>
            <div className="p-3 flex flex-col flex-1">
              <h3 className="font-heading text-base font-bold text-charcoal leading-tight">
                {offer.title}
              </h3>
              <p className="mt-1 text-xs text-charcoal/70 leading-relaxed line-clamp-2">
                {offer.description}
              </p>
              <p className="mt-auto pt-2 font-heading text-xl font-bold text-brand">
                {offer.price}
              </p>
              <button className="mt-2 text-xs font-semibold text-brand">Inquire</button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
