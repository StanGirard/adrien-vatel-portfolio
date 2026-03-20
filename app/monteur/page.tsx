import { SubNav } from "@/components/SubNav";
import { ProjectGrid } from "@/components/ProjectGrid";
import { FilmographyList } from "@/components/FilmographyList";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import {
  monteurProjects,
  monteurFilters,
  monteurFilterLabels,
  monteurFilmography,
  monteurAbout,
} from "@/lib/data";

export const metadata = {
  title: "Adrien Vatel — Monteur · Motion Design · Paris",
};

export default function MonteurPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <SubNav
        links={[
          { label: "Work", href: "#m-work" },
          { label: "Filmographie", href: "#m-filmo" },
          { label: "À propos", href: "#m-about" },
          { label: "Contact", href: "#m-contact" },
        ]}
        accentColor="#E8C32A"
        bgColor="#FAFAF8"
      />

      {/* Hero */}
      <section className="min-h-[80vh] sm:min-h-screen grid grid-cols-1 md:grid-cols-2 items-end px-4 sm:px-6 md:px-12 pt-20 pb-8 sm:pb-10 md:pb-16 bg-off-white border-b-[3px] border-black">
        <div>
          <p
            className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-accent-yellow mb-3 sm:mb-4"
            style={{ animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0 }}
          >
            Monteur &middot; Motion Design &middot; Paris
          </p>
          <h1
            className="font-condensed text-[clamp(48px,12vw,140px)] sm:text-[clamp(72px,9vw,140px)] font-black leading-[0.88] text-black tracking-tight uppercase"
            style={{ animation: "fadeUp 0.8s ease 0.35s forwards", opacity: 0 }}
          >
            Montage
            <br />
            <span className="text-accent-yellow">&amp; Narration</span>
          </h1>
        </div>
        <div
          className="flex flex-col justify-end pt-5 md:pb-1"
          style={{ animation: "fadeUp 0.8s ease 0.5s forwards", opacity: 0 }}
        >
          <p className="text-xs sm:text-[13px] text-gray max-w-[400px] leading-7 sm:leading-8 tracking-wide">
            Montage vidéo — reportages, émissions TV, brand content, courts
            métrages. De la capture à la livraison.
          </p>
        </div>
      </section>

      {/* Projects */}
      <ProjectGrid
        projects={monteurProjects}
        filters={monteurFilters}
        filterLabels={monteurFilterLabels}
        accentColor="#E8C32A"
        overlayColor="rgba(10,10,10,.92)"
        modalBg="rgba(250,250,248,.98)"
        gridId="m-work"
      />

      {/* Filmography */}
      <FilmographyList
        id="m-filmo"
        title="Filmographie complète"
        items={monteurFilmography}
      />

      {/* About */}
      <AboutSection
        id="m-about"
        text={monteurAbout.text}
        details={monteurAbout.details}
        accentColor="#E8C32A"
      />

      {/* Contact */}
      <ContactSection
        id="m-contact"
        title="Un projet à<br><em>monter ?</em>"
        accentColor="#E8C32A"
      />

      <Footer accentColor="#E8C32A" bgColor="#FAFAF8" />
    </div>
  );
}
