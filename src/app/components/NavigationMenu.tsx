import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { List } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import navLinks from "@/app/utils/navLinks";

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <List />
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
            <List />
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
    </header>
  );
}
