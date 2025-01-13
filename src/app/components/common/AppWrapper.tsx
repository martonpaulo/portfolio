"use client";

import { ReactNode } from "react";
import Footer from "@/app/components/common/Footer";
import NavigationMenu from "@/app/components/common/NavigationMenu";

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <div className="wrapper max-w-screen-lg mx-auto flex flex-col min-h-screen">
      <NavigationMenu />
      <main className="flex-grow mt-12">{children}</main>
      <Footer />
    </div>
  );
}
