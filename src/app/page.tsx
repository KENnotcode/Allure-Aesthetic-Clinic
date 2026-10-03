import type { Metadata } from "next";
import { cardConfig } from "@/config/card.config";
import { Hero } from "@/components/sections/Hero";
import { ContactActions } from "@/components/sections/ContactActions";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Offers } from "@/components/sections/Offers";
import { Process } from "@/components/sections/Process";
import { ResultsGallery } from "@/components/sections/ResultsGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Locations } from "@/components/sections/Locations";
import { BookingForm } from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: `${cardConfig.profile.name} — ${cardConfig.profile.title}`,
  description: cardConfig.profile.tagline,
};

export default function Home() {
  const { sections } = cardConfig;

  return (
    <main className="min-h-dvh">
      <div className="max-w-md mx-auto">
        {sections.hero && <Hero config={cardConfig} />}
        {sections.contactActions && <ContactActions config={cardConfig} />}
        {sections.about && <About config={cardConfig} />}
        {sections.services && <Services config={cardConfig} />}
        {sections.offers && <Offers config={cardConfig} />}
        {sections.process && <Process config={cardConfig} />}
        {sections.resultsGallery && <ResultsGallery config={cardConfig} />}
        {sections.testimonials && <Testimonials config={cardConfig} />}
        {sections.locations && <Locations config={cardConfig} />}
        {sections.bookingForm && <BookingForm config={cardConfig} />}
      </div>

      <footer className="border-t border-charcoal/10">
        <div className="max-w-md mx-auto px-5 py-8 text-center">
          <p className="text-xs text-muted/60">{cardConfig.footerText}</p>
        </div>
      </footer>
    </main>
  );
}
