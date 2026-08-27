import Image from "next/image";
import { CloudRain, Footprints, Utensils } from "lucide-react";
import { days } from "@/lib/content";

type Day = (typeof days)[number];

export function DaySection({ day }: { day: Day }) {
  return (
    <article id={day.id} className="scroll-mt-20">
      <figure className="relative min-h-[72svh] w-full bg-basalt">
        <Image
          src={day.photo.src}
          alt={day.photo.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <figcaption className="absolute bottom-5 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto">
          <div className="track-sign">
            <p className="font-display text-6xl leading-none font-semibold md:text-8xl">
              {day.number}
            </p>
            <h2 className="mt-2 font-display text-2xl leading-none font-semibold uppercase md:text-3xl">
              {day.title}
            </h2>
            <p className="mt-2 text-sm text-mist">{day.where}</p>
          </div>
        </figcaption>
        <p className="absolute top-3 right-3 inline-flex min-h-11 items-center bg-sand px-3 text-xs text-mist">
          Photo{" "}
          <a
            href={day.photo.href}
            className="underline decoration-iron underline-offset-2 hover:text-foam"
          >
            {day.photo.credit}
          </a>
        </p>
      </figure>

      <div className="mx-auto max-w-xl px-4 py-12 md:py-16">
        <p className="text-lg leading-relaxed text-foam">{day.lead}</p>
        <ol className="mt-8 space-y-5">
          {day.stops.map((stop, index) => (
            <li
              key={stop}
              className="grid grid-cols-[2.5rem_1fr] gap-3 text-base leading-relaxed text-foam"
            >
              <span className="font-display text-lg font-semibold text-mist" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{stop}</span>
            </li>
          ))}
        </ol>
        <dl className="mt-10 space-y-6 border-t-2 border-foam/30 pt-8">
          <div>
            <dt className="flex items-center gap-2 font-display text-sm font-semibold uppercase text-mist">
              <CloudRain className="h-4 w-4" aria-hidden />
              Rain
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-foam">{day.rain}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 font-display text-sm font-semibold uppercase text-mist">
              <Utensils className="h-4 w-4" aria-hidden />
              Eat
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-foam">{day.eat}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 font-display text-sm font-semibold uppercase text-mist">
              <Footprints className="h-4 w-4" aria-hidden />
              Move
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-foam">{day.note}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
