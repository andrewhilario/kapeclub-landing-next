"use client";

import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("kapeclub-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "dark" || (!saved && systemDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.body.classList.add("dark");
    }
  }, []);

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.body.classList.toggle("dark", next);
      localStorage.setItem("kapeclub-theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  if (!mounted) {
    return (
      <button className="icon-btn" aria-label="Toggle dark mode">
        <Moon size={18} />
      </button>
    );
  }

  return (
    <button id="theme-toggle" className="icon-btn" aria-label="Toggle dark mode" onClick={toggle}>
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
