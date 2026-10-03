import Image from "next/image";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface ResultsGalleryProps {
  config: CardConfig;
}

export function ResultsGallery({ config }: ResultsGalleryProps) {
  const { sectionTitles, results } = config;

  if (results.length === 0) return null;

  return (
    <section id="results" className="bg-warm-ivory">
      <div className="px-5 py-14 sm:py-16">
        <SectionTitle title={sectionTitles.results} subtitle="Realistic outcomes. Personalized treatment plans." />
        <div className="flex flex-col gap-8">
          {results.map((result) => (
            <div key={result.id}>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-[10px] font-semibold text-muted uppercase tracking-[0.15em] mb-1.5">Before</p>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={result.before}
                      alt={`${result.alt} - before`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-muted uppercase tracking-[0.15em] mb-1.5">After</p>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={result.after}
                      alt={`${result.alt} - after`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-muted text-center">{result.alt}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[11px] text-muted text-center">
          Results may vary. Individual results are not guaranteed.
        </p>
      </div>
    </section>
  );
}
