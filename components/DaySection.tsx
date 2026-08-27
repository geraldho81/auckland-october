import Image from "next/image";
import { CloudRain, Footprints, Utensils } from "lucide-react";
import { days } from "@/lib/content";

type Day = (typeof days)[number];

export function DaySection({ day }: { day: Day }) {
  return (
    <article
      id={day.id}
      className="scroll-mt-24 border-t border-harbour/10 py-14 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-12 md:gap-12 md:px-6">
        <div className="md:col-span-4">
          <p className="font-display text-5xl font-medium text-harbour md:text-6xl">{day.number}</p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            {day.title}
          </h2>
          <p className="mt-2 text-sm font-medium tracking-wide text-spray uppercase">{day.where}</p>
        </div>
        <div className="md:col-span-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-harbour/10">
            <Image
              src={day.photo.src}
              alt={day.photo.alt}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">{day.lead}</p>
          <ol className="mt-6 space-y-3">
            {day.stops.map((stop) => (
              <li
                key={stop}
                className="flex gap-3 text-base leading-relaxed text-ink/90"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-kowhai" aria-hidden />
                <span>{stop}</span>
              </li>
            ))}
          </ol>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-foam p-4">
              <dt className="flex items-center gap-2 text-sm font-semibold text-harbour">
                <CloudRain className="h-4 w-4" aria-hidden />
                Rain
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-spray">{day.rain}</dd>
            </div>
            <div className="rounded-xl bg-foam p-4">
              <dt className="flex items-center gap-2 text-sm font-semibold text-harbour">
                <Utensils className="h-4 w-4" aria-hidden />
                Eat
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-spray">{day.eat}</dd>
            </div>
            <div className="rounded-xl bg-foam p-4">
              <dt className="flex items-center gap-2 text-sm font-semibold text-harbour">
                <Footprints className="h-4 w-4" aria-hidden />
                Move
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-spray">{day.note}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}
