import Image from "next/image";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface OffersProps {
  config: CardConfig;
}

export function Offers({ config }: OffersProps) {
  const { sectionTitles, offers } = config;

  return (
    <section id="offers" className="bg-warm-ivory">
      <div className="px-5 py-14 sm:py-16">
        <SectionTitle title={sectionTitles.offers} subtitle="Exclusive offers tailored to your aesthetic journey." />
        <div className="grid grid-cols-1 gap-4">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-xl overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
                {offer.badge && (
                  <span className="absolute top-4 right-4 bg-dark-forest text-white text-xs font-semibold px-3 py-1.5 rounded-md uppercase tracking-wide">
                    {offer.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-charcoal">
                  {offer.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                  {offer.description}
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <p className="font-heading text-2xl font-bold text-brand">
                    {offer.price}
                  </p>
                  <button className="text-sm font-semibold text-brand hover:text-brand/80 transition-colors">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
