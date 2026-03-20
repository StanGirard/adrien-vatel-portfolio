"use client";

import Image from "next/image";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
  onClick: () => void;
  overlayColor: string;
  filterStyle?: string;
  hoverFilterStyle?: string;
};

export function ProjectCard({
  project,
  onClick,
  overlayColor,
}: Props) {
  return (
    <div
      className={`project-card relative overflow-hidden cursor-pointer group ${
        project.featured ? "col-span-1 md:col-span-2 aspect-[16/7]" : "aspect-[16/10]"
      }`}
      onClick={onClick}
    >
      <Image
        src={project.thumbUrl}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 ease-out saturate-[0.7] contrast-[1.05] group-hover:scale-105 group-hover:saturate-[0.2] group-hover:brightness-[0.6]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Play button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      {/* Overlay */}
      <div
        className="absolute inset-0 p-7 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
    </div>
  );
}
