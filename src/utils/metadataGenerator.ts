import type { Metadata } from "next";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";

import { getMetadata } from "@/api/services";

export async function createPageMetadata(): Promise<Metadata> {
  const metadata = await getMetadata();
  const ogImage = getCldOgImageUrl({ src: "cover" });
  const image = getCldImageUrl({ src: "logo", width: 192, height: 192 });

  return {
    title: metadata?.title || "Marton Paulo - Dev Portfolio",
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
