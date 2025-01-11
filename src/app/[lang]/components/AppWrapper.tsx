"use client";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/app/[lang]/components/Footer";
import NavigationMenu from "@/app/[lang]/components/NavigationMenu";
import navLinks from "@/app/[lang]/utils/navLinks";

interface AppWrapperProps {
  children: ReactNode;
}

function getPageLabel(href: string): string {
  return navLinks.find((link) => link.href === href)?.label || "";
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const path = usePathname();
  const currentPage = useMemo(() => getPageLabel(path), [path]);

  return (
    <div className="wrapper max-w-screen-lg mx-auto flex flex-col min-h-screen">
      <NavigationMenu />
      {path !== "/" && currentPage && (
        <header>
          <h1 className="text-4xl font-bold mt-8">{currentPage}</h1>
        </header>
      )}
      <main className="flex-grow mt-12">{children}</main>
      <Footer />
    </div>
  );
}
