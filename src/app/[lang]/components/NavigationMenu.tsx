import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import navLinks from "@/app/[lang]/utils/navLinks";
import { Menu } from "lucide-react";
import ThemeToggle from "@/app/[lang]/components/ThemeToggle";
import Logo from "@/app/[lang]/components/Logo";
import { useTheme } from "next-themes";

export default function NavigationMenu() {
  const { resolvedTheme } = useTheme();
  const [themeMode, setThemeMode] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setThemeMode(resolvedTheme === "dark" ? "dark" : "light");
  }, [resolvedTheme]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex h-20 w-full shrink-0 justify-between items-center px-4 gap-6 md:px-6">
      <Link
        href="/"
        aria-label="Home"
        prefetch={false}
        className="hidden lg:inline-flex rounded-md bg-white px-4 py-2 transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
      >
        <Logo mode={themeMode} size={30} />
      </Link>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Select a page to navigate</SheetDescription>
          <Link
            href="#"
            className="mr-6 hidden lg:flex"
            prefetch={false}
            aria-label="Navigation menu"
          >
            <Menu />
          </Link>
          <nav className="grid gap-2 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
                aria-label={link.label}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <nav className="ml-auto hidden lg:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
            aria-label={link.label}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="transition-all">
        <ThemeToggle />
      </div>
    </header>
  );
}
