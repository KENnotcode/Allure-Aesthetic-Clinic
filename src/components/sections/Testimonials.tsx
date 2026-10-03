import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Star } from "lucide-react";

interface TestimonialsProps {
  config: CardConfig;
}

export function Testimonials({ config }: TestimonialsProps) {
  const { sectionTitles, testimonials } = config;

  return (
    <section id="testimonials" className="bg-dark-forest text-white">
      <div className="px-5 py-14 sm:py-16">
        <SectionTitle title={sectionTitles.testimonials} subtitle="What our clients say about their experience." align="center" />
        <div className="flex flex-col gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-champagne text-champagne" />
                ))}
              </div>
              <p className="text-sm text-white/90 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-[11px] text-white/50 mt-0.5">Verified Client</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
