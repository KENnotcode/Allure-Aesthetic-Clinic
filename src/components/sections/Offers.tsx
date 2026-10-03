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
        <SectionTitle title={sectionTitles.offers} subtitle="Exclusive offers tailored to your aesthetic journey." align="left" eyebrow="Special Offers" />
        <div className="flex flex-col gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-xl p-5 sm:p-6 border border-charcoal/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-charcoal">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                    {offer.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  {offer.badge && (
                    <span className="text-[10px] font-semibold text-champagne uppercase tracking-[0.2em]">
                      {offer.badge}
                    </span>
                  )}
                  <div className="text-right">
                    <p className="font-heading text-2xl font-bold text-brand">{offer.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
