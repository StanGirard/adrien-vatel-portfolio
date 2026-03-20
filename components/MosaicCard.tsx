"use client";

import Image from "next/image";
import type { MosaicFilm } from "@/lib/data";

type Props = {
  film: MosaicFilm;
  onClick: () => void;
};

export function MosaicCard({ film, onClick }: Props) {
  return (
    <div
      className="mosaic-card relative aspect-[2/3] overflow-hidden cursor-pointer group bg-neutral-300"
      onClick={onClick}
    >
      <Image
        src={film.imgUrl}
        alt={film.title}
        fill
        className="object-cover transition-all duration-500 ease-out saturate-[0.6] brightness-[0.85] group-hover:scale-105 group-hover:saturate-[0.2] group-hover:brightness-[0.4]"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/95 via-black/85 to-black/60">
        <div className="flex flex-col gap-2.5">
          {/* Badges */}
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[7px] tracking-[0.2em] uppercase px-2 py-0.5 bg-accent-yellow text-black font-bold">
              {film.badges.platform}
            </span>
            <span className="font-mono text-[7px] tracking-[0.2em] uppercase px-2 py-0.5 border border-white/30 text-white/70">
              {film.badges.type}
            </span>
          </div>

          {/* Title */}
          <div className="font-condensed text-[22px] font-black text-white leading-none uppercase tracking-tight">
            {film.title}
          </div>

          {/* Divider */}
          <div className="w-6 h-px bg-accent-yellow my-0.5" />

          {/* Meta */}
          <div className="flex flex-col gap-1">
            {film.meta.map((m) => (
              <div key={m.label} className="flex gap-1.5 items-baseline">
                <span className="font-mono text-[7px] tracking-[0.15em] uppercase text-white/40 whitespace-nowrap min-w-[52px]">
                  {m.label}
                </span>
                <span className="text-[10px] text-white/85 leading-snug tracking-wide">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Role */}
          <div className="mt-2 pt-2 border-t border-white/10">
            <span className="font-mono text-[7px] tracking-[0.2em] uppercase text-accent-yellow">
              {film.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
