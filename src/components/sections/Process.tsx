import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface ProcessProps {
  config: CardConfig;
}

export function Process({ config }: ProcessProps) {
  const { sectionTitles, process } = config;

  return (
    <section id="process" className="bg-white">
      <div className="px-5 py-14 sm:py-16">
        <SectionTitle title={sectionTitles.process} subtitle="A thoughtful approach to achieving your aesthetic goals." />
        <div className="flex flex-col gap-8 sm:gap-10">
          {process.map((step, idx) => (
            <div key={step.id} className="relative">
              <p className="font-heading text-4xl font-bold text-soft-sage">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-heading text-lg font-bold text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
