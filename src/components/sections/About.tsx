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
        <div className="grid grid-cols-1 gap-8 items-center">
          <div>
            <SectionTitle title={sectionTitles.about} subtitle="Aesthetic care, approached with intention." align="left" />
            <p className="text-base text-charcoal/75 leading-relaxed mt-6">
              {profile.bio}
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <p className="font-heading text-2xl font-bold text-brand">15+</p>
                <p className="mt-1 text-[10px] text-muted uppercase tracking-wide">Years Experience</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-brand">500+</p>
                <p className="mt-1 text-[10px] text-muted uppercase tracking-wide">Treatments</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-brand">100%</p>
                <p className="mt-1 text-[10px] text-muted uppercase tracking-wide">Personalized</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
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
