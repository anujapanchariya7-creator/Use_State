import { useEffect } from "react";

export function useScrollReveal(refs) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      refs.current.forEach(el => {
        if (el) el.classList.remove("opacity-0", "translate-y-10");
      });
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, [refs]);
}
