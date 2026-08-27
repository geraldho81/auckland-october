import Image from "next/image";
import { hero, photos } from "@/lib/content";

export function Hero() {
  return (
    <header id="top" className="bg-sand text-foam">
      <div className="relative h-[78svh] min-h-[28rem] w-full bg-basalt">
        <Image
          src={photos.harbourNight.src}
          alt={photos.harbourNight.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <p className="absolute right-3 bottom-3 inline-flex min-h-11 items-center bg-sand px-3 text-xs text-mist">
          Photo{" "}
          <a
            href={photos.harbourNight.href}
            className="underline decoration-iron underline-offset-2 hover:text-foam"
          >
            {photos.harbourNight.credit}
          </a>
        </p>
      </div>

      <div className="relative z-10 mx-4 -mt-16 max-w-4xl border-2 border-foam bg-sand px-5 py-6 sm:mx-6 sm:px-8 sm:py-8 md:-mt-24 md:mx-10 md:px-10 md:py-10">
        <p className="flex items-center gap-3 font-display text-base uppercase text-mist">
          <span
            className="inline-block h-2.5 w-2.5 shrink-0 bg-spring"
            aria-hidden
          />
          {hero.kicker}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[0.92] font-semibold uppercase sm:text-5xl md:text-6xl lg:text-7xl">
          {hero.titleHtml}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foam md:text-lg">
          {hero.sub}
        </p>
        <p className="mt-5 text-sm text-mist">{hero.byline}</p>
      </div>
    </header>
  );
}
