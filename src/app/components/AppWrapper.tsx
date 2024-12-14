"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { ReactNode } from "react";

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <div className="wrapper max-w-screen-lg mx-auto flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16">{children}</main>
      <Footer />
    </div>
  );
}
