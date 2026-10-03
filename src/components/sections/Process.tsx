import * as Icons from "lucide-react";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface ProcessProps {
  config: CardConfig;
}

export function Process({ config }: ProcessProps) {
  const { sectionTitles, process } = config;

  return (
    <section className="px-5 mt-8">
      <SectionTitle title={sectionTitles.process} />
      <div className="relative">
        <div className="absolute left-5 top-3 bottom-3 w-px border-l-2 border-dashed border-charcoal/15" />
        <div className="flex flex-col gap-6">
          {process.map((step, idx) => {
            const Icon = Icons[step.icon as keyof typeof Icons] as React.ElementType;
            return (
              <div key={step.id} className="relative flex gap-4">
                <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand/80 text-white shadow-sm">
                  {Icon && <Icon className="size-5" />}
                </span>
                <div className="flex-1 min-w-0 pb-2">
                  <span className="text-xs font-semibold text-accent">STEP {idx + 1}</span>
                  <h3 className="font-heading text-base font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
