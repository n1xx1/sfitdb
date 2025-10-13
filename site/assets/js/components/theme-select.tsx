import { useCallbackRef } from "@/hooks/use-callback-ref";
import { SelectTrigger } from "@radix-ui/react-select";
import { ContrastIcon, MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectValue } from "./ui/select";

export default function ThemeSelect() {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? (window.localStorage.getItem("color-theme") ?? "system")
      : "system",
  );

  const updateTheme = useCallbackRef((theme: string) => {
    (globalThis as any)._setTheme(theme);
    setTheme(theme);
    localStorage.setItem("color-theme", theme);
  });

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (localStorage.getItem("color-theme") === "system") {
          (globalThis as any)._setTheme(theme);
        }
      });
  }, []);

  return (
    <Select value={theme} onValueChange={(value) => updateTheme(value)}>
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
