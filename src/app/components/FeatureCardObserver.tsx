"use client";

import { useEffect, useRef } from "react";

export function FeatureCardObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".feature-card, .showcase-animate"
    );

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return null;
}
