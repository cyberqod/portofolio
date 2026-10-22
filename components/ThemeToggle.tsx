"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* stockage indisponible : le thème reste valable pour cette visite */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Changer de thème clair / sombre"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-panel-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <Sun className="show-dark h-4 w-4" />
      <Moon className="show-light h-4 w-4" />
    </button>
  );
}
