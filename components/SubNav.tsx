"use client";

import Link from "next/link";

type NavLink = { label: string; href: string };

type SubNavProps = {
  links: NavLink[];
  accentColor: string;
  bgColor?: string;
};

export function SubNav({ links, accentColor, bgColor = "#FAFAF8" }: SubNavProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[60px] border-b-[3px] border-black"
      style={{ background: bgColor }}
    >
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="border-2 border-transparent hover:border-black font-mono text-[9px] tracking-[0.2em] uppercase text-gray flex items-center gap-2 px-3 py-1.5 transition-all"
        >
          &larr; Retour
        </Link>
        <div className="w-[2px] h-4 bg-black" />
        <div className="font-condensed text-base font-black tracking-[0.15em] uppercase text-black">
          Adrien <span className="font-normal text-gray">Vatel</span>
        </div>
      </div>
      <ul className="hidden md:flex list-none">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[9px] tracking-[0.2em] uppercase text-gray no-underline transition-all px-5 h-[60px] flex items-center border-l-2 border-black hover:text-black"
              style={{
                ["--hover-bg" as string]: `${accentColor}15`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.style.background = `${accentColor}15`);
                e.currentTarget.style.color = "#0A0A0A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#888";
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div
        className="absolute bottom-[-3px] left-0 w-20 h-[3px]"
        style={{ background: accentColor }}
      />
    </nav>
  );
}
