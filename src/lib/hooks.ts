"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns the id of the section currently in view, for active nav highlighting.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top
          const closest = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          );
          setActiveId(closest.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [sectionIds]);

  return activeId;
}
