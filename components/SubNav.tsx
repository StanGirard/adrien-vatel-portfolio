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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 h-[56px] sm:h-[60px] border-b-[3px] border-black"
      style={{ background: bgColor, "--accent": accentColor } as React.CSSProperties}
      aria-label="Navigation secondaire"
    >
      <div className="flex items-center gap-3 sm:gap-5 min-w-0">
        <Link
          href="/"
          className="border-2 border-transparent hover:border-black font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray flex items-center gap-2 px-3 py-2.5 transition-all shrink-0"
          aria-label="Retour à l'accueil"
        >
          &larr; <span className="hidden sm:inline">Retour</span>
        </Link>
        <div className="w-[2px] h-4 bg-black shrink-0 hidden sm:block" />
        <div className="font-condensed text-sm sm:text-base font-black tracking-[0.1em] sm:tracking-[0.15em] uppercase text-black truncate">
          Adrien <span className="font-normal text-gray">Vatel</span>
        </div>
      </div>
      {/* Desktop nav */}
      <ul className="hidden md:flex list-none" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[9px] tracking-[0.2em] uppercase text-gray no-underline transition-all px-5 h-[60px] flex items-center border-l-2 border-black hover:text-black hover:bg-[color-mix(in_srgb,var(--accent)_8%,transparent)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile nav - horizontal scroll */}
      <div className="flex md:hidden overflow-x-auto gap-1 -mr-4 pr-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[8px] tracking-[0.15em] uppercase text-gray no-underline px-2.5 py-2.5 whitespace-nowrap transition-colors"
            style={{ minHeight: 44, display: "flex", alignItems: "center" }}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div
        className="absolute bottom-[-3px] left-0 w-16 sm:w-20 h-[3px]"
        style={{ background: accentColor }}
      />
    </nav>
  );
}
