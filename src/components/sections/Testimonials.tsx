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
        <SectionTitle title={sectionTitles.testimonials} subtitle="What our clients say about their experience." align="center" eyebrow="Testimonials" />
        <div className="flex flex-col gap-6 sm:gap-8 max-w-md mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-champagne text-champagne" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed italic font-light">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-champagne">
                    {testimonial.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-[11px] text-white/50 mt-0.5">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
