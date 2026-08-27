import { Anchor, BookOpen, Car, CreditCard, Ship, Backpack } from "lucide-react";
import { DayNav } from "@/components/DayNav";
import { DaySection } from "@/components/DaySection";
import { Hero } from "@/components/Hero";
import { RangitotoMark } from "@/components/RangitotoMark";
import {
  days,
  food,
  intro,
  logistics,
  notes,
  optionalDay,
  packing,
  photos,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to itinerary
      </a>
      <Hero />
      <DayNav />
      <main id="main">
        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-sm font-semibold tracking-[0.2em] text-harbour uppercase">
                The plan
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium text-ink md:text-4xl">
                {intro.heading}
              </h2>
              <div className="mt-8 text-harbour">
                <RangitotoMark className="h-8 w-32" />
              </div>
            </div>
            <div className="space-y-4 md:col-span-7">
              {intro.body.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-ink/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {days.map((day) => (
          <DaySection key={day.id} day={day} />
        ))}

        <section
          id={optionalDay.id}
          className="scroll-mt-24 border-t border-harbour/10 bg-foam py-14 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="font-display text-5xl font-medium text-harbour">{optionalDay.number}</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink md:text-4xl">
              {optionalDay.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/90">{optionalDay.body}</p>
          </div>
        </section>

        <section id="logistics" className="scroll-mt-24 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="text-sm font-semibold tracking-[0.2em] text-harbour uppercase">
              Logistics
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink md:text-4xl">
              {logistics.heading}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {logistics.items.map((item) => {
                const Icon =
                  item.title === "AKL to the city"
                    ? Anchor
                    : item.title === "AT HOP"
                      ? CreditCard
                      : item.title === "Ferries"
                        ? Ship
                        : Car;
                return (
                  <article key={item.title} className="rounded-2xl bg-foam p-6">
                    <h3 className="flex items-center gap-2 font-display text-xl font-medium text-harbour">
                      <Icon className="h-5 w-5" aria-hidden />
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink/90">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-harbour/10 bg-harbour py-14 text-foam md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-12 md:px-6">
            <div className="md:col-span-5">
              <Backpack className="h-8 w-8 text-kowhai" aria-hidden />
              <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">{packing.heading}</h2>
              <p className="mt-4 max-w-md leading-relaxed text-foam/85">{packing.climate}</p>
            </div>
            <ul className="space-y-3 md:col-span-7">
              {packing.items.map((item) => (
                <li key={item} className="flex gap-3 border-b border-foam/15 py-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-kowhai" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="eat" className="scroll-mt-24 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="text-sm font-semibold tracking-[0.2em] text-harbour uppercase">Food</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink md:text-4xl">
              {food.heading}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-spray">{food.intro}</p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {food.places.map((place) => (
                <li key={place.name} className="rounded-xl bg-foam px-5 py-4">
                  <p className="font-display text-lg font-medium text-ink">{place.name}</p>
                  <p className="text-sm text-harbour">{place.where}</p>
                  <p className="mt-1 text-sm text-spray">{place.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-semibold text-harbour">Book when dates lock</p>
            <p className="mt-2 text-ink/90">{food.book.join(", ")}.</p>
          </div>
        </section>

        <section className="border-t border-harbour/10 bg-foam py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-harbour" aria-hidden />
              <h2 className="font-display text-3xl font-medium text-ink">{notes.heading}</h2>
            </div>
            <ul className="mt-8 max-w-3xl space-y-4">
              {notes.items.map((item) => (
                <li key={item} className="leading-relaxed text-ink/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <footer className="bg-ink py-12 text-foam/80">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <RangitotoMark className="h-8 w-32 text-kowhai" />
          <p className="mt-6 font-display text-xl text-foam">Gerald Ho · Auckland, October, dates TBA</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed">
            Photographs from Unsplash. {photos.harbourNight.credit} (harbour night).{" "}
            {photos.skylineWater.credit} (skyline from the water, grassy hill). {photos.rangitoto.credit}{" "}
            (Rangitoto from North Head). {photos.waihekeVines.credit}. {photos.piha.credit} (Piha).{" "}
            {photos.devonport.credit} (Devonport villas).
          </p>
          <p className="mt-4 text-sm">A personal itinerary page. Not a booking engine. Not a brochure.</p>
        </div>
      </footer>
    </>
  );
}
