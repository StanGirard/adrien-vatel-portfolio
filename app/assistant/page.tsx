import { SubNav } from "@/components/SubNav";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MosaicGrid } from "@/components/MosaicGrid";
import { assistantFilms, assistantAbout } from "@/lib/data";

export const metadata = {
  title: "Adrien Vatel — Assistant Monteur · Paris",
};

export default function AssistantPage() {
  return (
    <div className="min-h-screen" style={{ background: "#FEF0F7" }}>
      <SubNav
        links={[
          { label: "Filmographie", href: "#a-filmo" },
          { label: "À propos", href: "#a-about" },
          { label: "Contact", href: "#a-contact" },
        ]}
        accentColor="#E2157A"
        bgColor="#FEF0F7"
      />

      {/* Hero */}
      <section
        className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-end px-6 md:px-12 pt-20 pb-10 md:pb-16 border-b-[3px] border-black"
        style={{ background: "#FEF0F7" }}
      >
        <div>
          <p
            className="font-mono text-[9px] tracking-[0.3em] uppercase text-accent-pink mb-4"
            style={{ animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0 }}
          >
            Assistant Monteur &middot; Paris
          </p>
          <h1
            className="font-condensed text-[clamp(72px,9vw,140px)] font-black leading-[0.88] text-black tracking-tight uppercase"
            style={{ animation: "fadeUp 0.8s ease 0.35s forwards", opacity: 0 }}
          >
            Assistant
            <br />
            <span className="text-accent-pink">Monteur</span>
          </h1>
        </div>
        <div
          className="flex flex-col justify-end pt-5 md:pb-1"
          style={{ animation: "fadeUp 0.8s ease 0.5s forwards", opacity: 0 }}
        >
          <p className="text-[13px] text-gray max-w-[400px] leading-8 tracking-wide">
            Accompagnement technique en salle de montage sur formats longs et
            courts — de la préparation des rushes en documentaire à la gestion
            des workflows complexes de séries de plateforme.
          </p>
        </div>
      </section>

      {/* Mosaic Filmography */}
      <MosaicGrid films={assistantFilms} />

      {/* About */}
      <AboutSection
        id="a-about"
        text={assistantAbout.text}
        details={assistantAbout.details}
        accentColor="#E2157A"
      />

      {/* Contact */}
      <ContactSection
        id="a-contact"
        title="Disponible pour<br><em>votre prochain projet.</em>"
        accentColor="#E2157A"
      />

      <Footer accentColor="#E2157A" bgColor="#FEF0F7" />
    </div>
  );
}
