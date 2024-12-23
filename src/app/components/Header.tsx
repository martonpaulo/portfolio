"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Cover from "@/app/components/Cover";

export default function Header() {
  const { resolvedTheme } = useTheme();
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    setThemeMode(resolvedTheme === "dark" ? "dark" : "light");
  }, [resolvedTheme]);

  return (
    <header className="flex flex-col items-center mb-8">
      <Cover mode={themeMode} size={150} />
      <p className="text-xl sm:text-2xl font-mono mt-2">
        React Front-End Developer
      </p>
    </header>
  );
}
