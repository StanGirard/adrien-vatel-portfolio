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
      {/* Mobile always-visible title bar */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none md:hidden">
        <div className="font-condensed text-sm font-black leading-tight uppercase text-white">
          {project.title}
        </div>
        <div className="font-mono text-[7px] tracking-[0.15em] uppercase text-white/60 mt-0.5">
          {project.category}
        </div>
      </div>
      {/* Desktop hover overlay */}
      <div
        className="absolute inset-0 p-4 sm:p-7 flex-col justify-end transition-opacity duration-300 hidden md:flex opacity-0 group-hover:opacity-100"
        style={{ background: overlayColor }}
      >
        <div className="font-mono text-[9px] tracking-[0.25em] uppercase mb-2 text-white/70">
          {project.category}
        </div>
        <div className="font-condensed text-2xl font-black leading-tight uppercase text-white">
          {project.title}
        </div>
        <div className="mt-1.5 text-[10px] tracking-wider text-white/70">
          {project.credits}
        </div>
      </div>
    </button>
  );
}
