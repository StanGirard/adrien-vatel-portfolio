import { SubNav } from "@/components/SubNav";
import { ProjectGrid } from "@/components/ProjectGrid";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import {
  videasteProjects,
  videasteFilters,
  videasteAbout,
} from "@/lib/data";

export const metadata = {
  title: "Adrien Vatel — Vidéaste · Cadreur · Paris",
};

export default function VideastePage() {
  return (
    <div className="min-h-screen bg-off-white">
      <SubNav
        links={[
          { label: "Work", href: "#v-work" },
          { label: "À propos", href: "#v-about" },
          { label: "Contact", href: "#v-contact" },
        ]}
        accentColor="#5BB5D5"
        bgColor="#FAFAF8"
      />

      {/* Hero */}
      <section className="min-h-[80vh] sm:min-h-screen grid grid-cols-1 md:grid-cols-2 items-end px-4 sm:px-6 md:px-12 pt-20 pb-8 sm:pb-10 md:pb-16 bg-off-white border-b-[3px] border-black">
        <div>
          <p
            className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-accent-blue mb-3 sm:mb-4"
            style={{ animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0 }}
          >
            Cadreur &middot; Vidéaste &middot; Paris
          </p>
          <h1
            className="font-condensed text-[clamp(48px,12vw,140px)] sm:text-[clamp(72px,9vw,140px)] font-black leading-[0.88] text-black tracking-tight uppercase"
            style={{ animation: "fadeUp 0.8s ease 0.35s forwards", opacity: 0 }}
          >
            Image
            <br />
            <span className="text-accent-blue">&amp; Tournage</span>
          </h1>
        </div>
        <div
          className="flex flex-col justify-end pt-5 md:pb-1"
          style={{ animation: "fadeUp 0.8s ease 0.5s forwards", opacity: 0 }}
        >
          <p className="text-xs sm:text-[13px] text-gray max-w-[400px] leading-7 sm:leading-8 tracking-wide">
            Je prends en charge un projet de A à Z — de la prise de vue au
            montage. Entièrement équipé, autonome sur toutes les étapes.
          </p>
        </div>
      </section>

      {/* Projects */}
      <ProjectGrid
        projects={videasteProjects}
        filters={videasteFilters}
        accentColor="#5BB5D5"
        overlayColor="rgba(91,181,213,.92)"
        modalBg="rgba(248,248,248,.98)"
        gridId="v-work"
      />

      {/* About */}
      <AboutSection
        id="v-about"
        text={videasteAbout.text}
        details={videasteAbout.details}
        accentColor="#5BB5D5"
      />

      {/* Contact */}
      <ContactSection
        id="v-contact"
        title="Un projet ?<br><em>Parlons-en.</em>"
        accentColor="#5BB5D5"
      />

      <Footer accentColor="#5BB5D5" bgColor="#FAFAF8" />
    </div>
  );
}
