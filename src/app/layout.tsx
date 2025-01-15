import "@/styles/global.scss";

import type { Metadata } from "next";
import { Fira_Code, Poppins } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import type { MetadataType } from "@/types/metadata";
import { fetchSingleton } from "@/utils/fetchApi";
import ReactQueryProvider from "@/utils/queryProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await fetchSingleton<MetadataType>("metadata");

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
      <body className={`${poppins.variable} ${firaCode.variable}`}>
        <div className="container is-max-widescreen">
          <Navbar />
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
