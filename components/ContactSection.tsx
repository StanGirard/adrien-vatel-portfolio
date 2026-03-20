"use client";

import { RevealSection } from "./RevealSection";
import { CONTACT } from "@/lib/data";

type Props = {
  id: string;
  title: string;
  accentColor: string;
};

export function ContactSection({ id, title, accentColor }: Props) {
  return (
    <RevealSection>
      <section
        id={id}
        className="px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t-[3px] border-black"
      >
        <h2
          className="font-condensed text-[clamp(48px,5vw,72px)] font-black leading-none uppercase tracking-tight"
          dangerouslySetInnerHTML={{
            __html: title.replace(
              /<em>/g,
              `<em style="font-style:normal;color:${accentColor}">`
            ),
          }}
        />
        <div className="flex flex-col gap-2 items-start md:items-end w-full md:w-auto">
          <a
            href={`mailto:${CONTACT.email}`}
            className="contact-link inline-flex items-center gap-3 px-7 py-3.5 border-2 border-black font-mono text-[9px] tracking-[0.2em] no-underline transition-all w-full md:w-auto justify-center"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = accentColor;
              e.currentTarget.style.borderColor = accentColor;
              e.currentTarget.style.color =
                accentColor === "#E8C32A" ? "#0A0A0A" : "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "#0A0A0A";
              e.currentTarget.style.color = "#0A0A0A";
            }}
          >
            {CONTACT.email} &rarr;
          </a>
          <a
            href={CONTACT.phoneHref}
            className="contact-link inline-flex items-center gap-3 px-7 py-3.5 border-2 border-black font-mono text-[9px] tracking-[0.2em] no-underline transition-all w-full md:w-auto justify-center"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = accentColor;
              e.currentTarget.style.borderColor = accentColor;
              e.currentTarget.style.color =
                accentColor === "#E8C32A" ? "#0A0A0A" : "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "#0A0A0A";
              e.currentTarget.style.color = "#0A0A0A";
            }}
          >
            {CONTACT.phone} &rarr;
          </a>
        </div>
      </section>
    </RevealSection>
  );
}
