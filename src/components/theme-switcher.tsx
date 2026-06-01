import { Button, useTheme } from "@heroui/react";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme("system");

  return (
    <Button
      variant="ghost"
      onPress={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}