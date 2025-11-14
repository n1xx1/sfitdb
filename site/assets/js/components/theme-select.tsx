import { SelectTrigger } from "@radix-ui/react-select";
import { ContrastIcon, MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectValue } from "./ui/select";

export default function ThemeSelect() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    () => "system",
  );

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => themeStore.sync());
  }, []);

  return (
    <Select value={theme} onValueChange={(value) => themeStore.update(value)}>
      <SelectTrigger asChild>
        <Button variant="ghost" size="icon">
          <SelectValue>
            {theme === "light" ? (
              <SunIcon />
            ) : theme === "dark" ? (
              <MoonIcon />
            ) : (
              <ContrastIcon />
            )}
          </SelectValue>
        </Button>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          <SunIcon /> Light
        </SelectItem>
        <SelectItem value="dark">
          <MoonIcon /> Dark
        </SelectItem>
        <SelectItem value="system">
          <ContrastIcon /> System
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

const themeStore = {
  getSnapshot() {
    return localStorage.getItem("color-theme") ?? "system";
  },
  subscribe(cb: () => void) {
    const listener = (event: StorageEvent) =>
      event.key === "color-theme" && cb();
    window.addEventListener("storage", listener);
    return () => void window.removeEventListener("storage", listener);
  },
  update(theme: string) {
    localStorage.setItem("color-theme", theme);
    window.dispatchEvent(
      new StorageEvent("storage", { key: "color-theme", newValue: theme }),
    );
    this.sync();
  },
  sync() {
    (globalThis as any)._setTheme(this.getSnapshot());
  },
};
