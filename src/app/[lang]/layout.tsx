import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";

import { getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";

import { i18n } from "../../../i18n-config";

import "@/app/global.css";

import AppWrapper from "./components/AppWrapper";
import { ThemeProvider } from "@/app/[lang]/components/theme-provider";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const FALLBACK_SEO = {
  title: "Marton Paulo | Front-End Dev",
  description:
    "Portfolio and personal website of Marton Paulo, Front-End Developer",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getGlobal(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: ["favicon"],
  };

  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal();

  if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children, // params,
}: Readonly<{
  children: React.ReactNode;
  // params: { lang: string };
}>) {
  // const global = await getGlobal();
  // TODO: CREATE A CUSTOM ERROR PAGE
  // if (!global.data) return null;
  // <html lang={params.lang}>

  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="martonpaulo" />
      </head>
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

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
