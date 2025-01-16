import "@/styles/global.scss";

import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Fira_Code, Poppins } from "next/font/google";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";

import { fetchSingleton } from "@/api/fetchApi";
import ReactQueryProvider from "@/contexts/ApiContextProvider";
import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/Navbar";
import type { MetadataType } from "@/types/metadata";

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
  const ogImage = getCldOgImageUrl({ src: "logo", width: 1200, height: 630 });
  const image = getCldImageUrl({ src: "logo", width: 192, height: 192 });

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
      images: ogImage,
    },
    icons: {
      icon: image,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${firaCode.variable} antialiased`}>
        <ReactQueryProvider>
          <Navbar />
          <div className="container is-max-widescreen is-full-height-100vh">
            {children}
          </div>
          <Footer />
        </ReactQueryProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
