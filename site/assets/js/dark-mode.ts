function setTheme(theme: string) {
  document.documentElement.classList.remove("light", "dark");
  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
}

setTheme(localStorage.getItem("color-theme") ?? "system");

(globalThis as any)._setTheme = setTheme;

export {};
