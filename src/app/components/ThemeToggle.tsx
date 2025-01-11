"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: Theme) => setTheme(theme);

  const getThemeName = (theme: Theme) =>
    theme.charAt(0).toUpperCase() + theme.slice(1);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {["light", "dark", "system"].map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => handleThemeChange(theme as Theme)}
            className="cursor-pointer"
          >
            {getThemeName(theme as Theme)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
