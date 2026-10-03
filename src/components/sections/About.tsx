import Image from "next/image";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface AboutProps {
  config: CardConfig;
}

export function About({ config }: AboutProps) {
  const { sectionTitles, profile } = config;

  return (
    <section id="about" className="bg-warm-ivory">
      <div className="px-5 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 items-center">
          <div>
            <SectionTitle title={sectionTitles.about} align="left" eyebrow="About" />
            <p className="text-base text-charcoal/75 leading-relaxed mt-6">
              {profile.bio}
            </p>
            <div className="mt-8 flex flex-row gap-4 sm:gap-8">
              <div className="flex-1 border-l-2 border-champagne/40 pl-4">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-brand">15+</p>
                <p className="mt-1 text-xs text-muted uppercase tracking-wide">Years Experience</p>
              </div>
              <div className="flex-1 border-l-2 border-champagne/40 pl-4">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-brand">500+</p>
                <p className="mt-1 text-xs text-muted uppercase tracking-wide">Treatments</p>
              </div>
              <div className="flex-1 border-l-2 border-champagne/40 pl-4">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-brand">100%</p>
                <p className="mt-1 text-xs text-muted uppercase tracking-wide">Personalized</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={profile.cover}
                alt="Allure Aesthetic Clinic interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
