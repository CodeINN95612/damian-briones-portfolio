import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` to the element the first time it scrolls into view, which
 * drives the `.reveal` CSS transition. Disconnects after firing once, and is a
 * no-op visually under `prefers-reduced-motion` (the CSS resets `.reveal`).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
