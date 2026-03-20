"use client";

import Image from "next/image";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
  onClick: () => void;
  overlayColor: string;
};

export function ProjectCard({ project, onClick, overlayColor }: Props) {
  return (
    <button
      type="button"
      className={`project-card relative overflow-hidden cursor-pointer group text-left w-full border-none bg-transparent p-0 ${
        project.featured
          ? "col-span-1 md:col-span-2 aspect-[16/9] sm:aspect-[16/7]"
          : "aspect-[16/10]"
      }`}
      onClick={onClick}
      aria-label={`Voir le projet ${project.title}`}
    >
      <Image
        src={project.thumbUrl}
        alt={`${project.title} — ${project.category}`}
        fill
        className="object-cover transition-transform duration-700 ease-out saturate-[0.7] contrast-[1.05] group-hover:scale-105 group-hover:saturate-[0.2] group-hover:brightness-[0.6]"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Play button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
        <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-black" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      {/* Overlay */}
      <div
        className="absolute inset-0 p-4 sm:p-7 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: overlayColor }}
      >
        <div className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-1.5 sm:mb-2 text-white/70">
          {project.category}
        </div>
        <div className="font-condensed text-lg sm:text-2xl font-black leading-tight uppercase text-white">
          {project.title}
        </div>
        <div className="mt-1 sm:mt-1.5 text-[9px] sm:text-[10px] tracking-wider text-white/70">
          {project.credits}
        </div>
      </div>
    </button>
  );
}
