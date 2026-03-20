"use client";

import { CONTACT } from "@/lib/data";

type Props = {
  accentColor: string;
  bgColor?: string;
};

export function Footer({ accentColor, bgColor = "#FAFAF8" }: Props) {
  return (
    <footer
      className="px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-2 border-t-[3px] border-black"
      style={{ background: bgColor }}
    >
      <span className="font-mono text-[9px] tracking-[0.15em] text-gray">
        &copy; 2025 Adrien Vatel
      </span>
      <div className="flex">
        <a
          href={CONTACT.instagram}
          className="font-mono text-[9px] tracking-[0.15em] uppercase no-underline transition-colors px-4 py-2 border-l-2 border-black text-gray"
          onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
        >
          Instagram
        </a>
        <a
          href={CONTACT.youtube}
          className="font-mono text-[9px] tracking-[0.15em] uppercase no-underline transition-colors px-4 py-2 border-l-2 border-black text-gray"
          onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
        >
          YouTube
        </a>
      </div>
    </footer>
  );
}
