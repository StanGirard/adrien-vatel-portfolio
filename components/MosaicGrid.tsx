"use client";

import { useState } from "react";
import { MosaicCard } from "./MosaicCard";
import { PosterModal } from "./PosterModal";
import { RevealSection } from "./RevealSection";
import type { MosaicFilm } from "@/lib/data";

type Props = {
  films: MosaicFilm[];
};

export function MosaicGrid({ films }: Props) {
  const [selectedFilm, setSelectedFilm] = useState<MosaicFilm | null>(null);

  return (
    <>
      <RevealSection>
        <section id="a-filmo" className="px-6 md:px-12 pt-16 pb-20">
          <p className="font-mono text-[9px] tracking-[0.35em] uppercase mb-8 text-gray">
            Filmographie
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5">
            {films.map((film) => (
              <MosaicCard
                key={film.title}
                film={film}
                onClick={() => setSelectedFilm(film)}
              />
            ))}
          </div>
        </section>
      </RevealSection>

      <PosterModal
        film={selectedFilm}
        onClose={() => setSelectedFilm(null)}
      />
    </>
  );
}
