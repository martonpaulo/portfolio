import "@/styles/global.scss";

import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import React from "react";

import ReactQueryProvider from "@/contexts/ApiContextProvider";
import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/Navbar";
import { firaCode, poppins } from "@/styles/fonts";
import { createPageMetadata } from "@/utils/metadataGenerator";

export async function generateMetadata(): Promise<Metadata> {
  return await createPageMetadata();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body
          className={`${poppins.variable} ${firaCode.variable} antialiased`}
        >
          <Navbar />
          <div className="container is-max-widescreen is-full-height-100vh">
            {children}
          </div>
          <Footer />
        </body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </ReactQueryProvider>
    </html>
  );
}
