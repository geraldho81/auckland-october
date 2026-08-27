"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { RangitotoMark } from "./RangitotoMark";

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
      className="sticky top-0 z-40 border-b border-harbour/15 bg-mist/92 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 md:px-6">
        <a href="#top" className="hidden shrink-0 text-harbour md:block" aria-label="Back to top">
          <RangitotoMark className="h-6 w-16" />
        </a>
        <ul className="flex w-full gap-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  className={`block rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-harbour text-foam"
                      : "text-spray hover:bg-harbour/10 hover:text-harbour"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
