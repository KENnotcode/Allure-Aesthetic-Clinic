import Image from "next/image";
import type { CardConfig } from "@/types/card";
import { CheckCircle2 } from "lucide-react";

interface HeroProps {
  config: CardConfig;
}

export function Hero({ config }: HeroProps) {
  const { profile } = config;
  return (
    <section className="w-full px-5 mt-6">
      <div className="bg-white rounded-4xl overflow-hidden">
        <div className="relative">
          <div className="relative w-full h-44">
            <Image
              src={profile.cover}
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>

        <div className="px-5 pb-6 -mt-16">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full p-0.75 bg-linear-to-br from-champagne via-soft-gold to-champagne">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <span className="absolute -bottom-1 right-1 flex size-7 items-center justify-center rounded-full bg-brand text-white shadow-md border-2 border-white">
                <CheckCircle2 className="size-4" />
              </span>
            </div>
          </div>

          <div className="text-center mt-4">
            {profile.clinicName && (
              <p className="text-xs font-semibold text-champagne uppercase tracking-[0.2em] mb-5">
                {profile.clinicName}
              </p>
            )}
            <h1 className="font-heading text-3xl font-bold text-charcoal tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-1.5 text-sm text-brand font-semibold tracking-widest uppercase">
              {profile.title}
            </p>
            <p className="mt-3 text-sm text-muted italic max-w-70 mx-auto leading-relaxed">
              {profile.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}