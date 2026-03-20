"use client";

import { RevealSection } from "./RevealSection";
import type { AboutDetail } from "@/lib/data";

type Props = {
  id: string;
  text: string;
  details: AboutDetail[];
  accentColor: string;
};

export function AboutSection({ id, text, details, accentColor }: Props) {
  return (
    <RevealSection>
      <section
        id={id}
        className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 sm:gap-10 md:gap-20 items-start border-t-[3px] border-b-[3px] border-black"
      >
        <div>
          <p className="font-mono text-[9px] tracking-[0.35em] uppercase mb-6 text-gray">
            À propos
          </p>
          <p
            className="font-condensed text-xl md:text-[clamp(24px,2.2vw,32px)] font-bold leading-[1.3] uppercase"
            dangerouslySetInnerHTML={{
              __html: text.replace(
                /<em>/g,
                `<em style="font-style:normal;color:${accentColor}">`
              ),
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-6">
          {details.map((d) => (
            <div key={d.label}>
              <p className="font-mono text-[9px] tracking-[0.25em] uppercase mb-2 text-light-gray">
                {d.label}
              </p>
              <p className="text-xs leading-8 tracking-wide">
                {d.value.map((v, i) => (
                  <span key={i}>
                    {v}
                    {i < d.value.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>
    </RevealSection>
  );
}
