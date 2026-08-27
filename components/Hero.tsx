import Image from "next/image";
import { hero, photos } from "@/lib/content";
import { RangitotoMark } from "./RangitotoMark";

export function Hero() {
  return (
    <header id="top" className="relative min-h-[92svh] overflow-hidden bg-ink text-foam">
      <Image
        src={photos.harbourNight.src}
        alt={photos.harbourNight.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-20">
        <p className="hero-rise font-body text-sm font-semibold tracking-[0.22em] text-kowhai uppercase">
          {hero.kicker}
        </p>
        <h1 className="hero-rise hero-rise-delay-1 mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.08] text-foam sm:text-5xl md:text-6xl lg:text-7xl">
          {hero.titleHtml}
        </h1>
        <p className="hero-rise hero-rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-foam/90 md:text-lg">
          {hero.sub}
        </p>
        <p className="hero-rise hero-rise-delay-3 mt-6 text-sm text-foam/75">{hero.byline}</p>
        <div className="hero-rise hero-rise-delay-3 mt-10 text-kowhai">
          <RangitotoMark className="h-10 w-40 md:h-12 md:w-48" title="Rangitoto silhouette" />
        </div>
      </div>
    </header>
  );
}
