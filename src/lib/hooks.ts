"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Smoothly tracks which section is currently in view using a
 * scroll-position approach with requestAnimationFrame — no jitter.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || "");
  const rafRef = useRef<number | null>(null);
  const activeIdRef = useRef<string>(sectionIds[0] || "");

  useEffect(() => {
    const update = () => {
      // Find section whose top is closest to 30% from the top of the viewport
      const trigger = window.scrollY + window.innerHeight * 0.3;

      let bestId = sectionIds[0] || "";
      let bestDist = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        // Only consider sections at or above the trigger line
        if (top <= trigger) {
          const dist = trigger - top;
          if (dist < bestDist) {
            bestDist = dist;
            bestId = id;
          }
        }
      });

      if (bestId !== activeIdRef.current) {
        activeIdRef.current = bestId;
        setActiveId(bestId);
      }
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    // Run once on mount so the initial state is correct immediately
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeId;
}
