import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";

import "@/app/global.css";

import AppWrapper from "./components/common/AppWrapper";
import { ThemeProvider } from "@/app/components/common/ThemeProvider";

import { fetchSingleton } from "../lib/fetch-api";
import type { SeoMetadataType } from "../types/SeoMetadata";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await fetchSingleton<SeoMetadataType>("metadata");

  return {
    title: metadata?.title || "Marton Paulo | Dev Portfolio",
    description: metadata?.description || "Frontend Developer Portfolio",
    keywords: metadata?.keywords || "frontend, developer, portfolio",
    robots: metadata?.robots,
    generator: "Next.js",
    authors: {
      url: "https://www.martonpaulo.com",
      name: "Marton Paulo",
    },
    openGraph: {
      type: "website",
      description: metadata?.description,
      emails: metadata?.email,
      phoneNumbers: metadata?.phone,
      siteName: metadata?.title,
      locale: "en",
      alternateLocale: ["pt", "es"],
      url: "https://www.martonpaulo.com",
      title: metadata?.title,
      images: metadata?.icon,
    },
    icons: metadata?.icon,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${robotoMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppWrapper>{children}</AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
