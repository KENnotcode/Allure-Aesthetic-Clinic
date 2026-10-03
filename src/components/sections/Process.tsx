import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

interface ProcessProps {
  config: CardConfig;
}

export function Process({ config }: ProcessProps) {
  const { sectionTitles, process } = config;

  return (
    <section id="process" className="bg-white">
      <div className="px-5 py-14 sm:py-16">
        <SectionTitle title={sectionTitles.process} subtitle="A thoughtful approach to achieving your aesthetic goals." align="left" eyebrow="Our Process" />
        <div className="flex flex-col">
          {process.map((step, idx) => (
            <div key={step.id} className={cn("py-6 sm:py-8", idx < process.length - 1 && "border-b border-charcoal/10")}>
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="font-heading text-3xl sm:text-4xl font-bold text-soft-sage shrink-0 leading-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
