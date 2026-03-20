import { RevealSection } from "./RevealSection";
import type { FilmographyItem } from "@/lib/data";

type Props = {
  id: string;
  title: string;
  items: FilmographyItem[];
};

export function FilmographyList({ id, title, items }: Props) {
  return (
    <RevealSection>
      <section id={id} className="px-6 md:px-12 pb-20">
        <p className="font-mono text-[9px] tracking-[0.35em] uppercase mb-8 text-gray">
          {title}
        </p>
        <ul className="list-none flex flex-col">
          {items.map((item) => (
            <li
              key={item.title + item.year}
              className="py-4 border-b-2 border-black/10 grid grid-cols-[1fr_auto] items-baseline gap-5"
            >
              <div>
                <div className="font-condensed text-lg font-bold uppercase tracking-wide">
                  {item.title}
                </div>
                <div className="text-[10px] mt-0.5 tracking-wider text-gray">
                  {item.subtitle}
                </div>
              </div>
              <div className="font-mono text-[9px] whitespace-nowrap text-gray">
                {item.year}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </RevealSection>
  );
}
