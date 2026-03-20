"use client";

import { useRouter } from "next/navigation";

const cards = [
  {
    title: "Vidéaste",
    desc: "Prise de vue · Sony FX3\nDirection artistique · Tournage",
    href: "/videaste",
    hoverBg: "#5BB5D5",
    hoverText: "white",
  },
  {
    title: "Monteur",
    desc: "Montage · Motion Design\nÉtalonnage",
    href: "/monteur",
    hoverBg: "#E8C32A",
    hoverText: "black",
  },
  {
    title: "Assistant Monteur",
    desc: "Conformité · Gestion médias\nLong métrage · Série TV",
    href: "/assistant",
    hoverBg: "#E2157A",
    hoverText: "white",
  },
];

export function HomeCards() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] bg-black">
      {cards.map((card) => (
        <button
          key={card.href}
          onClick={() => router.push(card.href)}
          aria-label={`Voir la section ${card.title}`}
          className="home-card group relative bg-beige text-left flex flex-col justify-end px-5 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12 min-h-[160px] sm:min-h-[180px] md:min-h-[280px] border-none cursor-pointer transition-colors duration-300 hover:bg-[var(--card-hover)] hover:text-[var(--card-hover-text)]"
          style={
            {
              "--card-hover": card.hoverBg,
              "--card-hover-text": card.hoverText,
            } as React.CSSProperties
          }
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            style={{ background: card.hoverBg }}
            aria-hidden="true"
          />

          <div className="font-condensed text-[32px] sm:text-[40px] md:text-5xl font-black leading-[0.95] mb-3 sm:mb-4 uppercase tracking-tight transition-colors duration-300 text-black group-hover:text-[var(--card-hover-text)]">
            {card.title}
          </div>
          <div className="text-[10px] sm:text-[11px] tracking-[0.08em] sm:tracking-[0.1em] leading-6 sm:leading-7 uppercase text-gray group-hover:text-[var(--card-hover-text)] transition-colors duration-300 whitespace-pre-line">
            {card.desc}
          </div>
          <div
            className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-10 md:right-10 text-xl sm:text-[22px] text-light-gray group-hover:text-[var(--card-hover-text)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            aria-hidden="true"
          >
            &#8599;
          </div>
        </button>
      ))}
    </div>
  );
}
