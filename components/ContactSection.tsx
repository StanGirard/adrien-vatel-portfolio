"use client";

import { RevealSection } from "./RevealSection";
import { CONTACT } from "@/lib/data";

type Props = {
  id: string;
  title: string;
  accentColor: string;
};

export function ContactSection({ id, title, accentColor }: Props) {
  const hoverTextColor = accentColor === "#E8C32A" ? "#0A0A0A" : "#fff";

  return (
    <RevealSection>
      <section
        id={id}
        className="px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 border-t-[3px] border-black"
        style={
          {
            "--accent": accentColor,
            "--hover-text": hoverTextColor,
          } as React.CSSProperties
        }
      >
        <h2
          className="font-condensed text-[clamp(36px,8vw,72px)] sm:text-[clamp(48px,5vw,72px)] font-black leading-none uppercase tracking-tight"
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
            className="contact-link inline-flex items-center gap-3 px-5 sm:px-7 py-4 sm:py-3.5 border-2 border-black font-mono text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] no-underline transition-all w-full md:w-auto justify-center min-h-[44px] text-black hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--hover-text)]"
          >
            {CONTACT.email} &rarr;
          </a>
          <a
            href={CONTACT.phoneHref}
            className="contact-link inline-flex items-center gap-3 px-5 sm:px-7 py-4 sm:py-3.5 border-2 border-black font-mono text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] no-underline transition-all w-full md:w-auto justify-center min-h-[44px] text-black hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--hover-text)]"
          >
            {CONTACT.phone} &rarr;
          </a>
        </div>
      </section>
    </RevealSection>
  );
}
