import { Anchor, BookOpen, Car, CreditCard, Ship, Backpack } from "lucide-react";
import { DayNav } from "@/components/DayNav";
import { DaySection } from "@/components/DaySection";
import { Hero } from "@/components/Hero";
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

const logisticsIcons = {
  "AKL to the city": Anchor,
  "AT HOP": CreditCard,
  Ferries: Ship,
  Car: Car,
} as const;

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to itinerary
      </a>
      <Hero />
      <DayNav />
      <main id="main">
        <section className="mx-auto max-w-xl px-4 py-16 md:py-20">
          <h2 className="font-display text-4xl font-semibold uppercase leading-none md:text-5xl">
            {intro.heading}
          </h2>
          <div className="mt-8 space-y-4">
            {intro.body.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-foam">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {days.map((day) => (
          <DaySection key={day.id} day={day} />
        ))}

        <section
          id={optionalDay.id}
          className="scroll-mt-20 border-y-2 border-foam/40 bg-board py-14 md:py-16"
        >
          <div className="mx-auto max-w-xl px-4">
            <p className="font-display text-sm font-semibold uppercase text-mist">
              Spare
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold uppercase leading-none md:text-5xl">
              {optionalDay.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foam">{optionalDay.body}</p>
          </div>
        </section>

        <section id="logistics" className="scroll-mt-20 py-16 md:py-20">
          <div className="mx-auto max-w-xl px-4">
            <h2 className="font-display text-4xl font-semibold uppercase leading-none md:text-5xl">
              {logistics.heading}
            </h2>
            <div className="mt-10 space-y-0">
              {logistics.items.map((item) => {
                const Icon =
                  logisticsIcons[item.title as keyof typeof logisticsIcons] ?? Car;
                return (
                  <article
                    key={item.title}
                    className="border-t border-line py-6 first:border-t-2 first:border-foam/40"
                  >
                    <h3 className="flex min-h-11 items-center gap-2 font-display text-xl font-semibold uppercase">
                      <Icon className="h-5 w-5" aria-hidden />
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-foam">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-water py-16 text-foam md:py-20">
          <div className="mx-auto max-w-xl px-4">
            <div className="flex items-center gap-3">
              <Backpack className="h-6 w-6" aria-hidden />
              <h2 className="font-display text-4xl font-semibold uppercase leading-none md:text-5xl">
                {packing.heading}
              </h2>
            </div>
            <p className="mt-5 leading-relaxed text-mist">{packing.climate}</p>
            <ul className="mt-8">
              {packing.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-foam/20 py-3 leading-relaxed"
                >
                  <span
                    className="mt-1.5 h-3 w-3 shrink-0 border border-foam"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="eat" className="scroll-mt-20 py-16 md:py-20">
          <div className="mx-auto max-w-xl px-4">
            <h2 className="font-display text-4xl font-semibold uppercase leading-none md:text-5xl">
              {food.heading}
            </h2>
            <p className="mt-5 leading-relaxed text-mist">{food.intro}</p>
            <ul className="mt-10">
              {food.places.map((place) => (
                <li key={place.name} className="menu-rule py-4">
                  <p className="font-display text-xl font-semibold uppercase leading-tight">
                    {place.name}
                  </p>
                  <p className="mt-1 text-sm text-mist">{place.where}</p>
                  <p className="mt-1 text-sm text-foam">{place.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display text-sm font-semibold uppercase text-mist">
              Book when dates lock
            </p>
            <p className="mt-2 text-foam">{food.book.join(", ")}.</p>
          </div>
        </section>

        <section className="border-t-2 border-foam/40 py-16 md:py-20">
          <div className="mx-auto max-w-xl px-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6" aria-hidden />
              <h2 className="font-display text-4xl font-semibold uppercase leading-none md:text-5xl">
                {notes.heading}
              </h2>
            </div>
            <ul className="mt-8 space-y-4">
              {notes.items.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-foam pl-4 leading-relaxed text-foam"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <footer className="border-t-2 border-foam bg-sand py-12 text-mist">
        <div className="mx-auto max-w-xl px-4">
          <p className="font-display text-2xl font-semibold uppercase text-foam">
            Gerald Ho · Auckland, October, dates TBA
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed">
            Photographs from Unsplash. {photos.harbourNight.credit} (harbour night).{" "}
            {photos.skylineWater.credit} (skyline from the water, grassy hill).{" "}
            {photos.rangitoto.credit} (Rangitoto from North Head).{" "}
            {photos.waihekeVines.credit}. {photos.piha.credit} (Piha).{" "}
            {photos.devonport.credit} (Devonport villas).
          </p>
          <p className="mt-4 text-sm">A personal itinerary page. Not a booking engine. Not a brochure.</p>
        </div>
      </footer>
    </>
  );
}
