"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { MosaicFilm } from "@/lib/data";

type Props = {
  film: MosaicFilm | null;
  onClose: () => void;
};

export function PosterModal({ film, onClose }: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (film) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [film, handleKeyDown]);

  if (!film) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-5 md:p-10"
      style={{ background: "rgba(10,10,10,.98)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-5 md:right-10 bg-transparent border-2 border-transparent text-neutral-500 font-mono text-[9px] tracking-[0.2em] uppercase cursor-pointer transition-all flex items-center gap-2 px-3 py-2 hover:text-accent-yellow hover:border-accent-yellow"
      >
        <span className="text-xl leading-none">&times;</span> Fermer
      </button>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 md:gap-12 items-start max-w-[1100px] w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-[min(45vh,600px)] md:h-[min(75vh,600px)] w-full md:w-auto aspect-[2/3]">
          <Image
            src={film.imgUrl}
            alt={film.title}
            fill
            className="object-contain"
            sizes="400px"
          />
        </div>
        <div className="pt-0 md:pt-2">
          <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-accent-yellow mb-4">
            {film.category} &mdash; {film.subtitle}
          </div>
          <div className="font-condensed text-[clamp(32px,3.5vw,52px)] font-black text-white leading-none mb-5 uppercase tracking-tight">
            {film.title}
          </div>
          <div className="font-mono text-[9px] text-neutral-500 leading-8 mb-6 tracking-wider">
            {film.credits}
          </div>
          <p className="text-sm text-neutral-400 leading-8 mb-8 max-w-[480px]">
            {film.description}
          </p>
          {film.externalUrl && (
            <a
              href={film.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 text-accent-yellow font-mono text-[9px] tracking-[0.15em] uppercase no-underline transition-all hover:bg-accent-yellow hover:text-black hover:border-accent-yellow"
              style={{ borderColor: "rgba(232,195,42,.4)" }}
            >
              {film.externalLabel} &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
