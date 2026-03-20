"use client";

import { useEffect, useCallback, useRef } from "react";
import type { Project } from "@/lib/data";

type Props = {
  project: Project | null;
  onClose: () => void;
  bgColor?: string;
};

export function VideoModal({
  project,
  onClose,
  bgColor = "rgba(248,248,248,.98)",
}: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center p-3 sm:p-5 md:p-16"
      style={{ background: bgColor }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Vidéo : ${project.title}`}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Fermer la vidéo"
        className="absolute top-4 sm:top-7 right-4 sm:right-6 md:right-12 bg-transparent border-2 border-transparent font-mono text-[9px] tracking-[0.2em] uppercase cursor-pointer flex items-center gap-2 px-3 py-3 min-h-[44px] min-w-[44px] text-gray hover:text-accent-blue hover:border-accent-blue transition-all"
      >
        <span className="text-lg leading-none" aria-hidden="true">&times;</span> Fermer
      </button>
      <div className="w-full max-w-[960px]">
        {project.muxId ? (
          <div className="aspect-video relative overflow-hidden">
            <iframe
              src={`https://player.mux.com/${project.muxId}?autoplay=1`}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-none"
              title={`Vidéo ${project.title}`}
            />
          </div>
        ) : (
          <div className="aspect-video flex items-center justify-center border-[3px] border-black bg-off-white">
            <p className="font-condensed text-xs sm:text-sm uppercase tracking-[0.15em] font-bold text-gray">
              &#9654; {project.title}
            </p>
          </div>
        )}
        <div className="mt-3 sm:mt-5 flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-3">
          <div className="min-w-0">
            <div className="font-condensed text-xl sm:text-[28px] font-black uppercase tracking-wide truncate">
              {project.title}
            </div>
            <div className="font-mono text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-1 text-gray">
              {project.category.toUpperCase()} &mdash; {project.subtitle}
            </div>
          </div>
          <div className="font-mono text-[8px] sm:text-[9px] leading-7 sm:leading-8 sm:text-right tracking-wider text-gray shrink-0">
            {project.credits}
          </div>
        </div>
      </div>
    </div>
  );
}
