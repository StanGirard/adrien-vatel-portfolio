"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { VideoModal } from "./VideoModal";
import type { Project } from "@/lib/data";

type Props = {
  projects: Project[];
  filters: string[];
  filterLabels?: Record<string, string>;
  accentColor: string;
  overlayColor: string;
  modalBg?: string;
  gridId: string;
};

export function ProjectGrid({
  projects,
  filters,
  filterLabels,
  accentColor,
  overlayColor,
  modalBg,
  gridId,
}: Props) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const defaultLabels: Record<string, string> = { all: "Tous", commercial: "Commercial" };
  const labels = filterLabels || defaultLabels;

  return (
    <>
      {/* Filters */}
      <div
        id={gridId}
        className="px-3 sm:px-4 md:px-12 flex border-b-[3px] border-black bg-off-white overflow-x-auto"
        role="group"
        aria-label="Filtres de projets"
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className="bg-transparent border-none font-mono text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase cursor-pointer px-3 sm:px-4 md:px-6 py-4 transition-all -mb-[3px] whitespace-nowrap min-h-[44px]"
            aria-pressed={activeFilter === f}
            style={{
              color: activeFilter === f ? accentColor : "#888",
              borderBottom: `4px solid ${activeFilter === f ? accentColor : "transparent"}`,
            }}
          >
            {labels[f] || f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3px] bg-black">
        {projects.map((p) => {
          const visible = activeFilter === "all" || p.filterCat === activeFilter;
          return (
            <div
              key={p.title}
              style={{
                opacity: visible ? 1 : 0.1,
                transform: visible ? "none" : "scale(0.98)",
                pointerEvents: visible ? "auto" : "none",
                transition: "opacity 0.4s, transform 0.4s",
              }}
              className={p.featured ? "col-span-1 sm:col-span-2" : ""}
            >
              <ProjectCard
                project={p}
                onClick={() => setSelectedProject(p)}
                overlayColor={overlayColor}
              />
            </div>
          );
        })}
      </div>

      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        bgColor={modalBg}
      />
    </>
  );
}
