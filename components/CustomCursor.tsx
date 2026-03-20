"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const CURSOR_COLORS: Record<string, string> = {
  "/": "#0A0A0A",
  "/videaste": "#5BB5D5",
  "/monteur": "#E8C32A",
  "/assistant": "#E2157A",
};

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const color = CURSOR_COLORS[pathname] || "#0A0A0A";

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      requestAnimationFrame(() => {
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      });
    };

    const onEnter = () => {
      ring.style.transform = "translate(-50%,-50%) scale(2)";
    };
    const onLeave = () => {
      ring.style.transform = "translate(-50%,-50%) scale(1)";
    };

    document.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll(
      "a, button, .project-card, .mosaic-card, .home-card"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          width: 8,
          height: 8,
          background: color,
          transform: "translate(-50%,-50%)",
          transition: "background 0.2s",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] hidden md:block"
        style={{
          width: 32,
          height: 32,
          border: `2px solid ${color}44`,
          transform: "translate(-50%,-50%)",
          transition: "all 0.15s ease, border-color 0.2s",
        }}
      />
    </>
  );
}
