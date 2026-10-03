import Image from "next/image";
import type { CardConfig } from "@/types/card";
import { CheckCircle2 } from "lucide-react";

interface HeroProps {
  config: CardConfig;
}

export function Hero({ config }: HeroProps) {
  const { profile } = config;
  return (
    <section className="w-full">
      <div className="relative w-full h-52 sm:h-64">
        <Image
          src={profile.cover}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
        </div>
      </div>
      <div className="relative px-5 -mt-20 flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-linear-to-tr from-accent via-brand to-accent animate-[shimmer_3s_linear_infinite] bg-size-[200%_100%]" />
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="absolute bottom-1 right-1 flex size-7 items-center justify-center rounded-full bg-brand text-white shadow-sm">
            <CheckCircle2 className="size-4" />
          </span>
        </div>
        <h1 className="mt-4 font-heading text-3xl font-bold text-charcoal tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-1 text-base text-brand font-medium tracking-wide">{profile.title}</p>
        <p className="mt-2 text-sm text-charcoal/70 max-w-xs">{profile.tagline}</p>
      </div>
    </section>
  );
}
