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
    title: "Assistant\nMonteur",
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
          className="home-card group relative bg-beige text-left flex flex-col justify-end px-6 md:px-10 py-10 md:py-12 min-h-[140px] md:min-h-[280px] border-none cursor-pointer transition-colors duration-300"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = card.hoverBg;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#E8E4DC";
          }}
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            style={{ background: card.hoverBg }}
          />

          <div
            className="font-condensed text-[40px] md:text-5xl font-black leading-[0.95] mb-4 uppercase tracking-tight transition-colors duration-300 text-black group-hover:text-current whitespace-pre-line"
            style={
              {
                "--hover-color": card.hoverText === "white" ? "#fff" : "#0A0A0A",
              } as React.CSSProperties
            }
          >
            {card.title}
          </div>
          <div className="text-[11px] tracking-[0.1em] leading-7 uppercase text-gray group-hover:text-current transition-colors duration-300 whitespace-pre-line">
            {card.desc}
          </div>
          <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 text-[22px] text-light-gray group-hover:text-current group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
            &#8599;
          </div>
        </button>
      ))}
    </div>
  );
}
