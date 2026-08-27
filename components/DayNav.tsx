"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export function DayNav() {
  const [active, setActive] = useState("#day-1");

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Day by day"
      className="sticky top-0 z-40 mt-8 border-y-2 border-foam bg-sand md:mt-12"
    >
      <ul className="flex w-full gap-0 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <li className="shrink-0">
          <a
            href="#top"
            className="inline-flex min-h-11 items-center px-4 font-display text-sm font-semibold uppercase text-foam hover:bg-foam hover:text-sand"
          >
            AKL
          </a>
        </li>
        {nav.map((item) => {
          const isActive = active === item.href;
          const label = item.label.replace(/^\d+\s+/, "");
          return (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                className={`inline-flex min-h-11 items-center border-l border-line px-4 font-display text-sm font-semibold uppercase ${
                  isActive
                    ? "bg-foam text-sand"
                    : "text-foam hover:bg-board"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
