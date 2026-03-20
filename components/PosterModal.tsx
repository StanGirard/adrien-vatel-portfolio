"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import type { MosaicFilm } from "@/lib/data";

type Props = {
  film: MosaicFilm | null;
  onClose: () => void;
};

export function PosterModal({ film, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

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
      closeRef.current?.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [film, handleKeyDown]);

  if (!film) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-end sm:items-center justify-center p-3 sm:p-5 md:p-10"
      style={{ background: "rgba(10,10,10,.98)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Détails : ${film.title}`}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-4 sm:top-6 right-4 sm:right-5 md:right-10 bg-transparent border-2 border-transparent text-neutral-500 font-mono text-[9px] tracking-[0.2em] uppercase cursor-pointer transition-all flex items-center gap-2 px-3 py-3 min-h-[44px] min-w-[44px] hover:text-accent-yellow hover:border-accent-yellow z-10"
      >
        <span className="text-xl leading-none" aria-hidden="true">&times;</span> Fermer
      </button>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 sm:gap-5 md:gap-12 items-start max-w-[1100px] w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto overscroll-contain rounded-t-lg sm:rounded-none">
        <div className="relative h-[35vh] sm:h-[min(45vh,600px)] md:h-[min(75vh,600px)] w-full md:w-auto md:aspect-[2/3]">
          <Image
            src={film.imgUrl}
            alt={`Affiche de ${film.title}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div className="pt-0 md:pt-2 pb-6 sm:pb-0">
          <div className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-accent-yellow mb-3 sm:mb-4">
            {film.category} &mdash; {film.subtitle}
          </div>
          <div className="font-condensed text-2xl sm:text-[clamp(32px,3.5vw,52px)] font-black text-white leading-none mb-4 sm:mb-5 uppercase tracking-tight">
            {film.title}
          </div>
          <div className="font-mono text-[8px] sm:text-[9px] text-neutral-500 leading-7 sm:leading-8 mb-4 sm:mb-6 tracking-wider">
            {film.credits}
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 leading-7 sm:leading-8 mb-6 sm:mb-8 max-w-[480px]">
            {film.description}
          </p>
          {film.externalUrl && (
            <a
              href={film.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 sm:px-6 py-3.5 sm:py-3 border-2 text-accent-yellow font-mono text-[8px] sm:text-[9px] tracking-[0.15em] uppercase no-underline transition-all hover:bg-accent-yellow hover:text-black hover:border-accent-yellow min-h-[44px]"
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
