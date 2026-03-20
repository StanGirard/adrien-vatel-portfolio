import { CONTACT } from "@/lib/data";
import { HomeCards } from "@/components/HomeCards";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-beige">
      {/* Header */}
      <header className="px-6 md:px-12 py-7 flex justify-between items-center border-b-[3px] border-black">
        <span className="font-condensed text-lg font-black tracking-[0.2em] uppercase text-black">
          Adrien{" "}
          <span className="font-normal text-gray">Vatel</span>
        </span>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray">
          Paris, France
        </span>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col justify-end">
        <HomeCards />
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-t-2 border-black">
        <div className="flex flex-wrap gap-5 md:gap-8">
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-mono text-[9px] tracking-[0.25em] text-gray no-underline transition-colors hover:text-accent-blue"
          >
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.phoneHref}
            className="font-mono text-[9px] tracking-[0.25em] text-gray no-underline transition-colors hover:text-accent-blue"
          >
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.instagram}
            className="font-mono text-[9px] tracking-[0.25em] text-gray no-underline transition-colors hover:text-accent-blue"
          >
            Instagram
          </a>
        </div>
        <div className="font-mono text-[9px] text-light-gray tracking-[0.15em]">
          &copy; 2025
        </div>
      </footer>
    </div>
  );
}
