"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Cover from "@/app/components/Cover";

export default function Header() {
  const { resolvedTheme } = useTheme();
  const [themeMode, setThemeMode] = useState("light");
  const [size, setSize] = useState(150);

  useEffect(() => {
    setThemeMode(resolvedTheme === "dark" ? "dark" : "light");
  }, [resolvedTheme]);

  useEffect(() => {
    const handleResize = () => {
      const newSize = Math.min(window.innerWidth / 5.5, 150);
      setSize(newSize);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex flex-col items-center mb-8">
      <Cover mode={themeMode} size={size} />
      <p className="text-l sm:text-2xl font-mono text-center">
        Front-End Developer
      </p>
    </header>
  );
}
