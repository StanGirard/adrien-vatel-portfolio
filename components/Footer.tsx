"use client";

import { CONTACT } from "@/lib/data";

type Props = {
  accentColor: string;
  bgColor?: string;
};

export function Footer({ accentColor, bgColor = "#FAFAF8" }: Props) {
  return (
    <footer
      className="px-4 sm:px-6 md:px-12 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2 border-t-[3px] border-black"
      style={{ background: bgColor, "--accent": accentColor } as React.CSSProperties}
    >
      <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.15em] text-gray">
        &copy; 2025 Adrien Vatel
      </span>
      <div className="flex">
        <a
          href={CONTACT.instagram}
          className="font-mono text-[8px] sm:text-[9px] tracking-[0.15em] uppercase no-underline transition-colors px-4 py-3 min-h-[44px] flex items-center border-l-2 border-black text-gray hover:text-[var(--accent)]"
        >
          Instagram
        </a>
        <a
          href={CONTACT.youtube}
          className="font-mono text-[8px] sm:text-[9px] tracking-[0.15em] uppercase no-underline transition-colors px-4 py-3 min-h-[44px] flex items-center border-l-2 border-black text-gray hover:text-[var(--accent)]"
        >
          YouTube
        </a>
      </div>
    </footer>
  );
}
