"use client";

import { useEffect, useCallback } from "react";
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
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-5 md:p-16"
      style={{ background: bgColor }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-7 right-6 md:right-12 bg-transparent border-2 border-transparent font-mono text-[9px] tracking-[0.2em] uppercase cursor-pointer flex items-center gap-2.5 px-3 py-2 text-gray hover:text-accent-blue hover:border-accent-blue transition-all"
      >
        <span className="text-lg leading-none">&times;</span> Fermer
      </button>
      <div className="w-full max-w-[960px]">
        {project.muxId ? (
          <div className="aspect-video relative overflow-hidden">
            <iframe
              src={`https://player.mux.com/${project.muxId}?autoplay=1`}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-none"
            />
          </div>
        ) : (
          <div className="aspect-video flex items-center justify-center border-[3px] border-black bg-off-white">
            <p className="font-condensed text-sm uppercase tracking-[0.15em] font-bold text-gray">
              &#9654; {project.title}
            </p>
          </div>
        )}
        <div className="mt-5 flex flex-col md:flex-row justify-between items-start gap-3">
          <div>
            <div className="font-condensed text-[28px] font-black uppercase tracking-wide">
              {project.title}
            </div>
            <div className="font-mono text-[9px] tracking-[0.2em] uppercase mt-1 text-gray">
              {project.category.toUpperCase()} &mdash; {project.subtitle}
            </div>
          </div>
          <div className="font-mono text-[9px] leading-8 text-right tracking-wider text-gray">
            {project.credits}
          </div>
        </div>
      </div>
    </div>
  );
}
