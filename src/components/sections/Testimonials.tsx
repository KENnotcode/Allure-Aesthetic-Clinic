import Image from "next/image";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Star, Quote } from "lucide-react";

interface TestimonialsProps {
  config: CardConfig;
}

export function Testimonials({ config }: TestimonialsProps) {
  const { sectionTitles, testimonials } = config;

  return (
    <section id="testimonials" className="bg-dark-forest text-white overflow-hidden">
      <div className="px-5 py-14 sm:py-16">
        <SectionTitle title={sectionTitles.testimonials} subtitle="What our clients say about their experience." align="center" titleClassName="text-champagne" />
        <div className="flex items-start gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 no-scrollbar scroll-smooth snap-always">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="snap-center shrink-0 w-[88vw] sm:w-105 bg-white/4 backdrop-blur-sm border border-white/10 rounded-3xl p-7 sm:p-8 flex flex-col">
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-champagne text-champagne" />
                ))}
              </div>
              <div className="relative flex-1">
                <Quote className="absolute -top-2 -left-1 size-8 text-champagne/20" />
                <p className="text-[15px] sm:text-base text-white/85 leading-relaxed relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 bg-white/5">
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-champagne">
                        {testimonial.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-[11px] text-champagne/80 mt-0.5">{testimonial.reviewDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
